import { useCallback, useEffect, useRef, useState } from "react"

/* Estado y lógica del chat:
   - Historial en sessionStorage (se pierde al cerrar la pestaña).
   - Preguntas fijas: respuesta local, sin llamar a la API.
   - Preguntas libres: POST /api/chat con respuesta en streaming (SSE).
   - Bloqueo por límite guardado en localStorage para no insistir tras recargar. */

const HISTORY_KEY = "chat:history:v1"
const REMAINING_KEY = "chat:remaining"
const BLOCKED_KEY = "chat:blocked-until"
const CLIENT_KEY = "chat:client-id"
const HISTORY_TO_SEND = 6

const storage = {
  get(store, key, fallback) {
    try {
      const raw = window[store].getItem(key)
      return raw == null ? fallback : JSON.parse(raw)
    } catch {
      return fallback
    }
  },
  set(store, key, value) {
    try {
      if (value == null) window[store].removeItem(key)
      else window[store].setItem(key, JSON.stringify(value))
    } catch {
      // almacenamiento no disponible (modo privado, etc.)
    }
  },
}

function getClientId() {
  let id = storage.get("localStorage", CLIENT_KEY, null)
  if (!id) {
    id = globalThis.crypto?.randomUUID?.() ?? `c-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`
    storage.set("localStorage", CLIENT_KEY, id)
  }
  return id
}

const uid = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

export function useChat({ lang }) {
  const [messages, setMessages] = useState(() =>
    storage.get("sessionStorage", HISTORY_KEY, []).filter((m) => !m.pending),
  )
  const [busy, setBusy] = useState(false)
  const [remaining, setRemaining] = useState(() => storage.get("sessionStorage", REMAINING_KEY, null))
  const [blockedUntil, setBlockedUntil] = useState(() => {
    const until = storage.get("localStorage", BLOCKED_KEY, 0)
    return until > Date.now() ? until : 0
  })
  const abortRef = useRef(null)
  const timersRef = useRef([])

  useEffect(() => storage.set("sessionStorage", HISTORY_KEY, messages), [messages])
  useEffect(() => storage.set("sessionStorage", REMAINING_KEY, remaining), [remaining])
  useEffect(() => storage.set("localStorage", BLOCKED_KEY, blockedUntil || null), [blockedUntil])

  // Desbloquear automáticamente cuando caduque el bloqueo.
  useEffect(() => {
    if (!blockedUntil) return
    const timer = setTimeout(() => setBlockedUntil(0), Math.max(0, blockedUntil - Date.now()))
    return () => clearTimeout(timer)
  }, [blockedUntil])

  // Al desmontar: cancelar peticiones y temporizadores pendientes.
  useEffect(
    () => () => {
      abortRef.current?.abort()
      timersRef.current.forEach(clearTimeout)
    },
    [],
  )

  const patch = (id, changes) =>
    setMessages((list) => list.map((m) => (m.id === id ? { ...m, ...changes } : m)))

  /* Pregunta fija: respuesta escrita a mano, con una pequeña pausa natural. */
  const askFixed = useCallback(
    (item) => {
      if (busy) return
      const answerId = uid()
      setMessages((list) => [
        ...list,
        { id: uid(), role: "user", content: item.question },
        { id: answerId, role: "assistant", content: "", pending: true, fixedId: item.id },
      ])
      setBusy(true)
      timersRef.current.push(
        setTimeout(() => {
          patch(answerId, { content: item.answer, pending: false })
          setBusy(false)
        }, 450),
      )
    },
    [busy],
  )

  /* Pregunta libre: se envía a la IA. */
  const ask = useCallback(
    async (text) => {
      const question = text.trim()
      if (!question || busy) return

      const userMsg = { id: uid(), role: "user", content: question }
      const answerId = uid()

      if (blockedUntil) {
        setMessages((list) => [
          ...list,
          userMsg,
          { id: answerId, role: "assistant", content: "", error: "user_limit", retryAt: blockedUntil },
        ])
        return
      }

      const history = [...messages, userMsg]
        .filter((m) => !m.error && !m.pending && m.content)
        .slice(-HISTORY_TO_SEND)
        // sig: firma del servidor; sin ella, la respuesta no se usa como contexto.
        .map(({ role, content, sig }) => ({ role, content, ...(sig ? { sig } : {}) }))

      setMessages((list) => [...list, userMsg, { id: answerId, role: "assistant", content: "", pending: true }])
      setBusy(true)

      const controller = new AbortController()
      abortRef.current = controller
      let content = ""

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history, lang, clientId: getClientId() }),
          signal: controller.signal,
        })

        if (!res.ok || !res.headers.get("content-type")?.includes("text/event-stream")) {
          const data = await res.json().catch(() => ({}))
          const code = data.code || (res.status === 429 ? "too_fast" : "unavailable")
          let retryAt = 0
          if ((code === "user_limit" || code === "global_limit") && data.retryAfter) {
            retryAt = Date.now() + data.retryAfter * 1000
            setBlockedUntil(retryAt)
            setRemaining(0)
          }
          patch(answerId, { pending: false, error: code === "forbidden" ? "unavailable" : code, retryAt })
          return
        }

        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ""
        let failed = false
        while (true) {
          const { value, done } = await reader.read()
          if (done) break
          buffer += decoder.decode(value, { stream: true })
          const events = buffer.split("\n\n")
          buffer = events.pop()
          for (const raw of events) {
            const line = raw.trim()
            if (!line.startsWith("data:")) continue
            let event
            try {
              event = JSON.parse(line.slice(5))
            } catch {
              continue
            }
            if (event.type === "meta") setRemaining(event.remaining)
            else if (event.type === "delta") {
              content += event.text
              patch(answerId, { content, pending: false })
            } else if (event.type === "done" && event.sig) patch(answerId, { sig: event.sig })
            else if (event.type === "error") failed = true
          }
        }
        if (!content) patch(answerId, { pending: false, error: failed ? "unavailable" : "network" })
        else patch(answerId, { pending: false })
      } catch (err) {
        if (err.name === "AbortError") return
        patch(answerId, { pending: false, ...(content ? {} : { error: "network" }) })
      } finally {
        if (abortRef.current === controller) abortRef.current = null
        setBusy(false)
      }
    },
    [busy, blockedUntil, messages, lang],
  )

  /* Nueva conversación: borra el historial (no los límites). */
  const reset = useCallback(() => {
    abortRef.current?.abort()
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
    setMessages([])
    setBusy(false)
  }, [])

  return {
    messages,
    busy,
    remaining,
    blocked: blockedUntil > 0,
    blockedUntil,
    ask,
    askFixed,
    reset,
  }
}
