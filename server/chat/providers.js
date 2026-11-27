import { DEFAULT_CHAIN, LLM, env } from "./config.js"
import { getExhausted, markExhausted } from "./ratelimit.js"

/* Cadena de modelos gratuitos con fallback. Todos los proveedores exponen una
   API compatible con OpenAI (/chat/completions + streaming SSE), así que basta
   con cambiar URL, clave y modelo. */

const PROVIDERS = {
  groq: () => {
    const key = env("GROQ_API_KEY")
    return key && { url: "https://api.groq.com/openai/v1/chat/completions", key }
  },
  cloudflare: () => {
    const account = env("CLOUDFLARE_ACCOUNT_ID")
    const key = env("CLOUDFLARE_API_TOKEN")
    return (
      account &&
      key && {
        url: `https://api.cloudflare.com/client/v4/accounts/${account}/ai/v1/chat/completions`,
        key,
      }
    )
  },
}

/* Lista ordenada de modelos disponibles (se omiten los que no tienen clave). */
export function buildChain() {
  return env("CHAT_CHAIN", DEFAULT_CHAIN)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      const sep = item.indexOf(":")
      const provider = item.slice(0, sep)
      const model = item.slice(sep + 1)
      const conf = PROVIDERS[provider]?.()
      return conf ? { id: `${provider}:${model}`, provider, model, ...conf } : null
    })
    .filter(Boolean)
}

class ProviderError extends Error {
  constructor(status, detail) {
    super(`HTTP ${status}`)
    this.status = status
    this.detail = detail
  }
}

/* Lee un stream SSE y devuelve los objetos JSON de cada línea `data:`. */
async function* readSSE(body) {
  const reader = body.getReader()
  const decoder = new TextDecoder()
  let buffer = ""
  try {
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split("\n")
      buffer = lines.pop()
      for (const line of lines) {
        const data = line.trim()
        if (!data.startsWith("data:")) continue
        const payload = data.slice(5).trim()
        if (!payload || payload === "[DONE]") continue
        try {
          yield JSON.parse(payload)
        } catch {
          // fragmento no JSON: se ignora
        }
      }
    }
  } finally {
    reader.releaseLock()
  }
}

/* Algunos modelos (p. ej. Qwen) pueden devolver su razonamiento entre
   <think>…</think> dentro del contenido: se descarta para no mostrarlo. */
function createThinkFilter() {
  let pending = ""
  let inThink = false
  return (chunk) => {
    pending += chunk
    let out = ""
    while (pending) {
      if (inThink) {
        const end = pending.indexOf("</think>")
        if (end === -1) {
          pending = pending.slice(-8)
          break
        }
        pending = pending.slice(end + 8)
        inThink = false
      } else {
        const start = pending.indexOf("<think>")
        if (start !== -1) {
          out += pending.slice(0, start)
          pending = pending.slice(start + 7)
          inThink = true
          continue
        }
        // Guardar un posible "<thi" cortado entre fragmentos.
        const partial = pending.lastIndexOf("<")
        if (partial !== -1 && "<think>".startsWith(pending.slice(partial))) {
          out += pending.slice(0, partial)
          pending = pending.slice(partial)
        } else {
          out += pending
          pending = ""
        }
        break
      }
    }
    return out
  }
}

/* Abre la petición y devuelve un generador con el texto de la respuesta. */
async function* streamText(entry, messages, signal) {
  const isGptOss = /gpt-oss/.test(entry.model)
  const res = await fetch(entry.url, {
    method: "POST",
    signal,
    headers: { Authorization: `Bearer ${entry.key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: entry.model,
      messages,
      stream: true,
      max_tokens: LLM.maxTokens,
      temperature: LLM.temperature,
      // El razonamiento consume tokens de la cuota: se deja al mínimo.
      ...(isGptOss ? { reasoning_effort: "low" } : {}),
    }),
  })
  if (!res.ok || !res.body) {
    throw new ProviderError(res.status, (await res.text().catch(() => "")).slice(0, 500))
  }

  const filter = createThinkFilter()
  let started = false
  for await (const event of readSSE(res.body)) {
    if (event.error) throw new ProviderError(500, JSON.stringify(event.error).slice(0, 500))
    let text = filter(event.choices?.[0]?.delta?.content || "")
    if (!started) text = text.replace(/^\s+/, "")
    if (!text) continue
    started = true
    yield text
  }
}

const isDailyQuota = (err) =>
  err?.status === 429 && /per day|\bTPD\b|\bRPD\b|daily|4006|neuron/i.test(err.detail || "")

/* Prueba los modelos en orden hasta que uno empiece a responder.
   - onStart(entry): se llama al recibir el primer texto (ya no hay vuelta atrás).
   - onDelta(text): cada fragmento de la respuesta.
   Devuelve { ok, model?, truncated? }. */
export async function runChain(messages, { onStart, onDelta }) {
  const chain = buildChain()
  const exhausted = await getExhausted(chain.map((e) => e.id))

  for (const entry of chain) {
    if (exhausted.has(entry.id)) continue

    const controller = new AbortController()
    const firstTimer = setTimeout(() => controller.abort(), LLM.firstTokenTimeoutMs)
    const totalTimer = setTimeout(() => controller.abort(), LLM.totalTimeoutMs)
    const iterator = streamText(entry, messages, controller.signal)

    try {
      const first = await iterator.next()
      clearTimeout(firstTimer)
      if (first.done) throw new Error("respuesta vacía")
      onStart(entry)
      onDelta(first.value)
    } catch (err) {
      clearTimeout(firstTimer)
      clearTimeout(totalTimer)
      controller.abort()
      if (isDailyQuota(err)) await markExhausted(entry.id)
      console.warn(`[chat] ${entry.id} falló:`, err.status || "", err.name === "AbortError" ? "timeout" : err.message)
      continue
    }

    // A partir de aquí el usuario ya está viendo la respuesta: si el stream se
    // corta no se puede cambiar de modelo, se cierra lo que haya llegado.
    try {
      for (let r = await iterator.next(); !r.done; r = await iterator.next()) onDelta(r.value)
      return { ok: true, model: entry.id }
    } catch (err) {
      console.warn(`[chat] ${entry.id} cortado a mitad:`, err.message)
      return { ok: true, model: entry.id, truncated: true }
    } finally {
      clearTimeout(totalTimer)
    }
  }

  return { ok: false }
}
