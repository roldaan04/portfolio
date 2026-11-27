import { lazy, Suspense, useEffect, useState } from "react"
import { useSite } from "../../data/site"
import { useLanguage } from "../../i18n/context"
import { ChatBubble, Close } from "../Icons"

/* Botón flotante del chat IA. Es lo único que se carga con la página: el panel
   (y su lógica) se descarga la primera vez que el visitante lo abre o pasa el
   ratón por encima, para no penalizar la carga inicial.

   Para que se vea que es un asistente (y no un adorno):
   - Etiqueta "IA" fija en el botón.
   - Ondas de pulso alrededor hasta que el visitante abre el chat por 1ª vez.
   - Globo de bienvenida + pequeño "saludo" del botón a los pocos segundos,
     en cada visita (sesión) hasta que lo abra. Se oculta solo al rato. */

const loadPanel = () => import("./ChatPanel")
const ChatPanel = lazy(loadPanel)

const OPENED_KEY = "chat:opened" // localStorage: ya lo abrió alguna vez
const TEASER_CLOSED_KEY = "chat:teaser-closed" // sessionStorage: cerró el globo en esta visita
const TEASER_DELAY_MS = 3500
const TEASER_VISIBLE_MS = 14000

const read = (store, key) => {
  try {
    return window[store].getItem(key) === "1"
  } catch {
    return false
  }
}
const write = (store, key) => {
  try {
    window[store].setItem(key, "1")
  } catch {
    // almacenamiento no disponible
  }
}

function ChatLauncher() {
  const { chat: t } = useSite()
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [opened, setOpened] = useState(() => read("localStorage", OPENED_KEY))
  const [teaser, setTeaser] = useState(false)

  // Globo de bienvenida en cada visita hasta que abra el chat.
  useEffect(() => {
    if (opened || read("sessionStorage", TEASER_CLOSED_KEY)) return
    const show = setTimeout(() => setTeaser(true), TEASER_DELAY_MS)
    const hide = setTimeout(() => setTeaser(false), TEASER_DELAY_MS + TEASER_VISIBLE_MS)
    return () => {
      clearTimeout(show)
      clearTimeout(hide)
    }
  }, [opened])

  // Escape cierra el chat.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const closeTeaser = () => {
    setTeaser(false)
    write("sessionStorage", TEASER_CLOSED_KEY)
  }

  const toggle = () => {
    setTeaser(false)
    if (!opened) {
      setOpened(true)
      write("localStorage", OPENED_KEY)
    }
    setMounted(true)
    setOpen((o) => !o)
  }

  const attention = !opened && !open

  return (
    <>
      {mounted && (
        <Suspense fallback={null}>
          <ChatPanel open={open} onClose={() => setOpen(false)} />
        </Suspense>
      )}

      {teaser && !open && (
        <div className="animate-chat-pop fixed bottom-[5.5rem] right-4 z-[60] flex max-w-[16rem] items-start gap-2 rounded-2xl rounded-br-md border border-brand/30 bg-surface/95 py-3 pl-3.5 pr-2 text-sm text-slate-200 shadow-[0_20px_50px_-15px_rgba(34,211,238,0.45)] backdrop-blur sm:right-5">
          <button type="button" onClick={toggle} className="text-left leading-snug">
            <span className="mb-0.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand">
              <span className="status-dot !h-1.5 !w-1.5" />
              {t.teaserEyebrow}
            </span>
            {t.teaser}
          </button>
          <button
            type="button"
            onClick={closeTeaser}
            aria-label={t.close}
            className="shrink-0 rounded-full p-1 text-slate-500 transition-colors hover:text-white"
          >
            <Close className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={toggle}
        onMouseEnter={loadPanel}
        onFocus={loadPanel}
        aria-label={open ? t.close : t.open}
        aria-expanded={open}
        title={open ? t.close : t.open}
        className={`fixed bottom-4 right-4 z-[60] isolate h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-ink shadow-[0_14px_34px_-10px_rgba(34,211,238,0.7)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-95 sm:bottom-5 sm:right-5 ${
          open ? "hidden sm:grid" : "grid"
        } ${attention ? "chat-attention" : ""} ${teaser ? "animate-chat-nudge" : ""}`}
      >
        {open ? <Close className="h-6 w-6" /> : <ChatBubble className="h-6 w-6" />}
        {!open && (
          <span
            aria-hidden
            className="absolute -right-1 -top-1 rounded-full border-2 border-ink bg-accent px-1.5 py-px text-[10px] font-bold leading-tight text-ink"
          >
            {lang === "en" ? "AI" : "IA"}
          </span>
        )}
      </button>
    </>
  )
}

export default ChatLauncher
