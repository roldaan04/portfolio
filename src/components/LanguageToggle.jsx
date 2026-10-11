import { LANGUAGES, useLanguage } from "../i18n/context"

const labels = {
  es: { short: "ES", name: "Español" },
  en: { short: "EN", name: "English" },
}

/* Selector de idioma tipo píldora segmentada (ES | EN). */
function LanguageToggle({ className = "", onChange }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      role="group"
      aria-label={lang === "es" ? "Idioma" : "Language"}
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 ${className}`}
    >
      {LANGUAGES.map((code) => {
        const active = code === lang
        return (
          <button
            key={code}
            type="button"
            lang={code}
            onClick={() => {
              setLang(code)
              onChange?.(code)
            }}
            aria-pressed={active}
            aria-label={labels[code].name}
            title={labels[code].name}
            className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition ${
              active
                ? "bg-brand text-ink shadow-sm shadow-brand/30"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {labels[code].short}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageToggle
