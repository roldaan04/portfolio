import { useEffect, useState } from "react"
import { DEFAULT_LANGUAGE, LANGUAGES, LanguageContext } from "./context"

const STORAGE_KEY = "lang"

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (LANGUAGES.includes(stored)) return stored
  } catch {
    // localStorage no disponible (modo privado, etc.)
  }
  return DEFAULT_LANGUAGE
}

const meta = {
  es: "Portfolio de Javier Roldán Gallego, desarrollador Full Stack en búsqueda activa de empleo. Experiencia real en aplicaciones completas: frontend, backend, bases de datos, cloud e IA.",
  en: "Portfolio of Javier Roldán Gallego, Full Stack Developer actively looking for a job. Real-world experience building complete applications: frontend, backend, databases, cloud and AI.",
}

function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)

  // Sincroniza <html lang>, la meta descripción y la preferencia guardada
  useEffect(() => {
    document.documentElement.lang = lang
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta[lang])
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignorar
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
