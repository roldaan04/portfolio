import { createContext, useContext } from "react"

export const LANGUAGES = ["es", "en"]
export const DEFAULT_LANGUAGE = "es"

export const LanguageContext = createContext({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
})

export function useLanguage() {
  return useContext(LanguageContext)
}

/* Devuelve la variante del idioma activo de un objeto { es, en }. */
export function useT(copy) {
  const { lang } = useLanguage()
  return copy[lang] ?? copy[DEFAULT_LANGUAGE]
}
