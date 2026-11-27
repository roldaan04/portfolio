/* ============================================================
   Enlaces que el chat IA puede usar en sus respuestas (lista blanca).
   - El servidor se la pasa al modelo en el system prompt.
   - El navegador solo convierte en enlace las URLs de esta lista;
     cualquier otra se muestra como texto plano.
   Sin JSX ni React: lo importa también la función de Vercel.
   ============================================================ */

export const CONTACT = {
  email: "javirol2005@gmail.com",
  phone: "+34 637 62 41 50",
  phoneHref: "tel:+34637624150",
}

/* Longitud máxima de una pregunta. La usan el navegador y el servidor. */
export const CHAT_MAX_CHARS = 500

export const CHAT_LINKS = [
  { href: "/#sobre-mi", label: { es: "Sobre mí", en: "About me" }, use: "Perfil general, quién es Javier" },
  { href: "/#formacion", label: { es: "Formación", en: "Education" }, use: "Formación (DAW y especialización en IA y Big Data)" },
  { href: "/#stack", label: { es: "Stack tecnológico", en: "Tech stack" }, use: "Tecnologías que maneja" },
  { href: "/#contacto", label: { es: "Contacto", en: "Contact" }, use: "Ubicación, modalidad, disponibilidad y contacto" },
  { href: "/experiencia", label: { es: "Experiencia", en: "Experience" }, use: "Experiencia profesional en Visioluxe (BlackDisplay y ERP interno)" },
  { href: "/proyectos", label: { es: "Proyectos", en: "Projects" }, use: "Listado de todos los proyectos" },
  { href: "/proyectos#kristalia", label: { es: "Kristalia", en: "Kristalia" }, use: "Kristalia, web corporativa freelance para un cliente" },
  { href: "/filme", label: { es: "Filme", en: "Filme" }, use: "Filme (TFG): red social de cine, React + Spring Boot" },
  { href: "/aws-project", label: { es: "Predictive Maintenance en AWS", en: "Predictive Maintenance on AWS" }, use: "Predictive Maintenance en AWS: cloud, Big Data y ML" },
  { href: "/control-admin", label: { es: "Control Admin", en: "Control Admin" }, use: "Control Admin: IA/LLM en producto, Angular + FastAPI" },
  { href: "https://kristalia.es", label: { es: "kristalia.es", en: "kristalia.es" }, use: "Web real de Kristalia" },
  { href: "https://blackdisplay.net", label: { es: "blackdisplay.net", en: "blackdisplay.net" }, use: "Plataforma real BlackDisplay" },
  { href: "https://github.com/roldaan04", label: { es: "GitHub", en: "GitHub" }, use: "GitHub de Javier" },
  {
    href: "https://www.linkedin.com/in/javier-rold%C3%A1n-gallego-desarrollador-full-stack-programador/",
    label: { es: "LinkedIn", en: "LinkedIn" },
    use: "LinkedIn de Javier",
  },
  { href: "/cv/JavierRoldanCV.pdf", label: { es: "CV (español)", en: "CV (Spanish)" }, use: "CV en español (descarga)" },
  { href: "/cv/JavierRoldan_CV.pdf", label: { es: "CV (inglés)", en: "CV (English)" }, use: "CV en inglés (descarga)" },
  { href: `mailto:${CONTACT.email}`, label: { es: CONTACT.email, en: CONTACT.email }, use: "Email de contacto" },
  { href: CONTACT.phoneHref, label: { es: CONTACT.phone, en: CONTACT.phone }, use: "Teléfono de contacto" },
]

/* Espacios de ancho cero (U+200B a U+200D y U+FEFF). */
export const ZERO_WIDTH = new RegExp(`[${String.fromCharCode(0x200b)}-${String.fromCharCode(0x200d)}${String.fromCharCode(0xfeff)}]`, "g")

const BY_HREF = new Map(CHAT_LINKS.map((l) => [l.href, l]))
const ALLOWED = new Set(BY_HREF.keys())

/* Nombre legible de un enlace (por si el modelo usa la URL como texto). */
export const chatLinkLabel = (href, lang = "es") => BY_HREF.get(href)?.label?.[lang] ?? href

/* Normaliza variantes habituales que puede escribir el modelo
   (dominio absoluto del portfolio, barra final, http, www). */
export function normalizeChatHref(raw) {
  if (!raw) return null
  // Quita caracteres invisibles (espacios de ancho cero) que a veces mete el modelo.
  let href = raw.trim().replace(ZERO_WIDTH, "")
  href = href.replace(/^https?:\/\/(www\.)?javier-roldan\.vercel\.app/i, "") || "/"
  href = href.replace(/^http:\/\//i, "https://").replace(/^https:\/\/www\.kristalia\.es/i, "https://kristalia.es")
  if (href.length > 1 && href.endsWith("/") && !href.startsWith("mailto:")) href = href.slice(0, -1)
  if (href.startsWith("mailto:")) href = href.split("?")[0]
  return ALLOWED.has(href) ? href : null
}

export const isInternalHref = (href) => href.startsWith("/") && !href.startsWith("/cv/")
