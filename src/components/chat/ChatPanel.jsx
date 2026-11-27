import { useEffect, useRef, useState } from "react"
import { useSite } from "../../data/site"
import { CHAT_MAX_CHARS, CONTACT } from "../../data/chatLinks"
import { useLanguage } from "../../i18n/context"
import { Close, Download, Linkedin, Mail, Phone, Refresh, Send, Spark } from "../Icons"
import ChatMarkdown from "./ChatMarkdown"
import { useChat } from "./useChat"

const isMobile = () => window.matchMedia("(max-width: 639px)").matches

/* Botones de contacto que acompañan a los avisos de límite o error. */
function ContactActions({ t, links }) {
  const btn =
    "inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-brand/50 hover:text-brand"
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <a href={`mailto:${CONTACT.email}`} className={btn}>
        <Mail className="h-3.5 w-3.5" />
        {t.contact.email}
      </a>
      <a href={CONTACT.phoneHref} className={btn}>
        <Phone className="h-3.5 w-3.5" />
        {t.contact.phone}
      </a>
      <a href={links.linkedin} target="_blank" rel="noreferrer" className={btn}>
        <Linkedin className="h-3.5 w-3.5" />
        {t.contact.linkedin}
      </a>
      <a href={links.cv} target="_blank" rel="noreferrer" className={btn}>
        <Download className="h-3.5 w-3.5" />
        {t.contact.cv}
      </a>
    </div>
  )
}

function formatDate(ts, lang) {
  return new Date(ts).toLocaleString(lang === "en" ? "en-GB" : "es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  })
}

function Bubble({ role, children }) {
  if (role === "user") {
    return (
      <div data-role="user" className="ml-auto w-fit max-w-[85%] whitespace-pre-wrap break-words rounded-2xl rounded-tr-md border border-brand/25 bg-brand/15 px-3.5 py-2.5 text-sm leading-relaxed text-cyan-50">
        {children}
      </div>
    )
  }
  return (
    <div className="w-fit max-w-[90%] break-words rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm leading-relaxed text-slate-200">
      {children}
    </div>
  )
}

function QuickQuestions({ items, onPick, disabled }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((q) => (
        <button
          key={q.id}
          type="button"
          disabled={disabled}
          onClick={() => onPick(q)}
          className="rounded-full border border-brand/30 bg-brand/[0.07] px-3 py-1.5 text-left text-xs font-medium text-cyan-100 transition-colors hover:border-brand/60 hover:bg-brand/15 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {q.question}
        </button>
      ))}
    </div>
  )
}

function ChatPanel({ open, onClose }) {
  const { chat: t, links } = useSite()
  const { lang } = useLanguage()
  const { messages, busy, remaining, blocked, blockedUntil, ask, askFixed, reset } = useChat({ lang })
  const [draft, setDraft] = useState("")
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  // Seguir la respuesta mientras llega, pero solo hasta que la pregunta queda
  // arriba del todo: así se lee desde el principio sin tener que subir (si se
  // bajara siempre al final, las respuestas largas se verían por la cola).
  useEffect(() => {
    const box = scrollRef.current
    if (!box || !open) return
    const questions = box.querySelectorAll("[data-role='user']")
    const lastQuestion = questions[questions.length - 1]
    box.scrollTop = lastQuestion ? lastQuestion.offsetTop - 12 : 0
  }, [messages, open])

  // Al abrir: foco en el campo (solo escritorio, para no sacar el teclado en móvil).
  useEffect(() => {
    if (open && !isMobile()) inputRef.current?.focus()
  }, [open])

  // En móvil el panel ocupa toda la pantalla: bloquear el scroll de la página.
  useEffect(() => {
    if (!open || !isMobile()) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const askedIds = new Set(messages.map((m) => m.fixedId).filter(Boolean))
  const pendingQuestions = t.quickQuestions.filter((q) => !askedIds.has(q.id))
  const last = messages[messages.length - 1]

  // Al pulsar un enlace interno en móvil se cierra el chat para ver la página.
  const handleNavigate = () => {
    if (isMobile()) onClose()
  }

  // No se recorta lo escrito o pegado: se avisa y se bloquea el envío.
  const length = draft.trim().length
  const tooLong = length > CHAT_MAX_CHARS

  const submit = (e) => {
    e.preventDefault()
    const text = draft.trim()
    if (!text || busy || blocked || tooLong) return
    setDraft("")
    ask(text)
  }

  let status = null
  if (blocked) status = t.blockedUntil.replace("{date}", formatDate(blockedUntil, lang))
  else if (remaining != null && remaining <= 5)
    status = remaining === 1 ? t.remainingOne : t.remaining.replace("{n}", remaining)

  return (
    <section
      role="dialog"
      aria-label={t.title}
      hidden={!open}
      className="animate-chat-pop fixed inset-0 z-[70] flex flex-col overflow-hidden border-white/10 bg-ink-2/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:inset-auto sm:bottom-24 sm:right-5 sm:h-[min(640px,calc(100dvh-8rem))] sm:w-[390px] sm:rounded-3xl sm:border"
    >
      {/* Cabecera */}
      <header className="hairline-top flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-ink">
          <Spark className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">{t.title}</p>
          <p className="flex items-center gap-1.5 truncate text-xs text-slate-400">
            <span className="status-dot !h-1.5 !w-1.5" />
            {t.subtitle}
          </p>
        </div>
        {messages.length > 0 && (
          <button
            type="button"
            onClick={reset}
            title={t.reset}
            aria-label={t.reset}
            className="grid h-9 w-9 place-items-center rounded-full text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <Refresh className="h-4.5 w-4.5" />
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          title={t.close}
          aria-label={t.close}
          className="grid h-9 w-9 place-items-center rounded-full text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
        >
          <Close className="h-5 w-5" />
        </button>
      </header>

      {/* Conversación */}
      <div ref={scrollRef} className="relative flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4" aria-live="polite">
        <Bubble role="assistant">{t.welcome}</Bubble>
        {messages.length === 0 && <QuickQuestions items={t.quickQuestions} onPick={askFixed} disabled={busy} />}

        {messages.map((m) => (
          <Bubble key={m.id} role={m.role}>
            {m.role === "user" ? (
              m.content
            ) : m.pending ? (
              <span className="chat-typing flex gap-1 py-1 text-slate-400" aria-label="…">
                <span />
                <span />
                <span />
              </span>
            ) : m.error ? (
              <>
                <p>{t.errors[m.error] || t.errors.unavailable}</p>
                {["user_limit", "global_limit"].includes(m.error) && m.retryAt > 0 && (
                  <p className="mt-2 text-xs text-slate-400">{t.blockedUntil.replace("{date}", formatDate(m.retryAt, lang))}</p>
                )}
                {["user_limit", "global_limit", "unavailable", "too_long"].includes(m.error) && <ContactActions t={t} links={links} />}
              </>
            ) : (
              <ChatMarkdown text={m.content} lang={lang} onNavigate={handleNavigate} />
            )}
          </Bubble>
        ))}

        {messages.length > 0 && !busy && last?.role === "assistant" && pendingQuestions.length > 0 && (
          <div className="pt-1">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">{t.moreQuestions}</p>
            <QuickQuestions items={pendingQuestions.slice(0, 3)} onPick={askFixed} disabled={busy} />
          </div>
        )}
      </div>

      {/* Entrada */}
      <div className="border-t border-white/10 px-4 pb-[max(0.9rem,env(safe-area-inset-bottom))] pt-3">
        {status && <p className="mb-2 text-xs text-slate-400">{status}</p>}
        {tooLong && !blocked && (
          <div
            id="chat-too-long"
            role="alert"
            className="mb-2.5 rounded-xl border border-amber-400/30 bg-amber-400/[0.08] px-3 py-2.5 text-xs leading-relaxed text-amber-100"
          >
            <p>{t.tooLong.replace("{max}", CHAT_MAX_CHARS)}</p>
            <ContactActions t={t} links={links} />
          </div>
        )}
        <form onSubmit={submit} className="flex items-center gap-2">
          <input
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            aria-invalid={tooLong}
            aria-describedby={tooLong ? "chat-too-long" : undefined}
            disabled={blocked}
            placeholder={t.placeholder}
            aria-label={t.placeholder}
            className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-base text-white placeholder:text-slate-500 focus:border-brand/50 focus:outline-none aria-invalid:border-amber-400/60 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
          />
          <button
            type="submit"
            disabled={busy || blocked || tooLong || !length}
            aria-label={t.send}
            title={t.send}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-ink transition-colors hover:bg-[#67e8f9] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-slate-500"
          >
            <Send className="h-4.5 w-4.5" />
          </button>
        </form>
        <div className="mt-2 flex items-start justify-between gap-3 text-[11px] leading-snug text-slate-500">
          <p>{t.disclaimer}</p>
          {length > CHAT_MAX_CHARS - 100 && (
            <span className={`shrink-0 tabular-nums ${tooLong ? "font-semibold text-amber-300" : ""}`}>
              {length}/{CHAT_MAX_CHARS}
            </span>
          )}
        </div>
      </div>
    </section>
  )
}

export default ChatPanel
