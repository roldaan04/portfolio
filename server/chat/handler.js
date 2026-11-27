import { LIMITS, env } from "./config.js"
import { isTrustedAnswer, signAnswer } from "./history.js"
import { buildSystemPrompt } from "./knowledge.js"
import { runChain } from "./providers.js"
import { consumeQuestion, identify, validClientId } from "./ratelimit.js"

/* POST /api/chat
   Body: { messages: [{ role: "user"|"assistant", content }], lang: "es"|"en", clientId }
   Respuesta correcta: stream SSE con eventos JSON
     { type: "meta", remaining }   → preguntas que le quedan al visitante
     { type: "delta", text }       → fragmento de la respuesta
     { type: "done", sig }         → fin; sig firma la respuesta para el historial
     { type: "error", code }       → error tras empezar (raro)
   Respuesta de error: JSON { code, retryAfter? } con status 4xx/5xx.
   Códigos: bad_request, too_long, forbidden, too_fast, user_limit, global_limit, unavailable. */

const json = (status, body, extraHeaders = {}) =>
  Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...extraHeaders },
  })

const fail = (status, code, retryAfter) =>
  json(status, { code, ...(retryAfter ? { retryAfter } : {}) }, retryAfter ? { "Retry-After": String(retryAfter) } : {})

/* Solo se aceptan peticiones desde la propia web (mismo host) o desde los
   orígenes de CHAT_ALLOWED_ORIGINS (separados por comas). */
function originAllowed(request) {
  const origin = request.headers.get("origin")
  if (!origin) return false
  let originHost
  try {
    originHost = new URL(origin).host
  } catch {
    return false
  }
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host")
  if (host && originHost === host) return true
  const extra = env("CHAT_ALLOWED_ORIGINS")
    .split(",")
    .map((o) => o.trim().replace(/\/$/, ""))
    .filter(Boolean)
  return extra.includes(origin.replace(/\/$/, ""))
}

/* Valida y recorta el historial que manda el navegador. Las respuestas del
   asistente sin firma válida (inventadas o modificadas) se descartan. */
function parseMessages(raw, clientId) {
  if (!Array.isArray(raw) || raw.length === 0) return null
  const messages = raw
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .map((m) => ({ role: m.role, content: m.content.trim(), sig: m.sig }))
    .filter((m) => m.content)
    .filter((m, i, list) => {
      if (m.role === "user") return true
      const prev = list[i - 1]
      return isTrustedAnswer({
        clientId,
        question: prev?.role === "user" ? prev.content : "",
        answer: m.content,
        sig: m.sig,
      })
    })
    .map(({ role, content }) => ({ role, content }))
    .slice(-LIMITS.historyMessages)
    .map((m) => ({ ...m, content: m.content.slice(0, LIMITS.maxHistoryChars) }))

  const last = raw[raw.length - 1]
  if (!last || last.role !== "user" || typeof last.content !== "string") return null
  if (!last.content.trim()) return null

  // El historial debe empezar por un mensaje del usuario.
  while (messages.length && messages[0].role !== "user") messages.shift()
  return messages.length ? messages : null
}

export async function handleChat(request) {
  if (request.method !== "POST") return fail(405, "bad_request")
  if (!originAllowed(request)) return fail(403, "forbidden")

  const length = Number(request.headers.get("content-length") || 0)
  if (length > LIMITS.maxBodyChars * 4) return fail(413, "too_long")

  let body
  try {
    // Se comprueba el texto real: la cabecera content-length puede faltar.
    const raw = await request.text()
    if (raw.length > LIMITS.maxBodyChars) return fail(413, "too_long")
    body = JSON.parse(raw)
  } catch {
    return fail(400, "bad_request")
  }

  // Pregunta demasiado larga: se rechaza antes de tocar límites o modelos.
  const question = Array.isArray(body?.messages) ? body.messages.at(-1)?.content : null
  if (typeof question === "string" && question.trim().length > LIMITS.maxQuestionChars) {
    return fail(413, "too_long")
  }

  const clientId = validClientId(body?.clientId)
  const messages = parseMessages(body?.messages, clientId)
  if (!messages) return fail(400, "bad_request")
  const userQuestion = messages[messages.length - 1].content
  const lang = body?.lang === "en" ? "en" : "es"

  // Límites de uso (consume una pregunta si se puede preguntar).
  let quota
  try {
    quota = await consumeQuestion(identify(request, body?.clientId))
  } catch (err) {
    console.error("[chat] Redis no disponible:", err.message)
    return fail(503, "unavailable")
  }
  if (!quota.ok) {
    const status = quota.code === "unavailable" ? 503 : 429
    return fail(status, quota.code, quota.retryAfter)
  }

  const systemPrompt = buildSystemPrompt({
    lang,
    userMessages: messages.filter((m) => m.role === "user").map((m) => m.content),
  })
  const llmMessages = [{ role: "system", content: systemPrompt }, ...messages]

  const encoder = new TextEncoder()
  let controllerRef
  const send = (event) => {
    try {
      controllerRef.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`))
    } catch {
      // el visitante cerró la conexión: se ignora
    }
  }

  // Se espera a que algún modelo empiece a responder antes de abrir el stream:
  // así, si fallan todos, se puede devolver un error normal (y la pregunta).
  let resolveStart
  const started = new Promise((resolve) => (resolveStart = resolve))
  const buffered = []
  let answer = ""

  const run = runChain(llmMessages, {
    onStart: () => resolveStart(true),
    onDelta: (text) => {
      answer += text
      if (controllerRef) send({ type: "delta", text })
      else buffered.push(text)
    },
  }).then((result) => {
    resolveStart(result.ok)
    return result
  })

  const ok = await started
  if (!ok) {
    await quota.refund()
    return fail(503, "unavailable")
  }

  const stream = new ReadableStream({
    async start(controller) {
      controllerRef = controller
      send({ type: "meta", remaining: quota.remaining })
      for (const text of buffered) send({ type: "delta", text })
      buffered.length = 0
      const result = await run
      send(
        result.ok
          ? {
              type: "done",
              truncated: Boolean(result.truncated),
              // Firma para poder reenviar esta respuesta como historial.
              sig: signAnswer(clientId, userQuestion, answer),
            }
          : { type: "error", code: "unavailable" },
      )
      try {
        controller.close()
      } catch {
        // ya cerrado
      }
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-store, no-transform",
      "X-Accel-Buffering": "no",
    },
  })
}
