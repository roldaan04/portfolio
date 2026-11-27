/* ============================================================
   Contexto CONDICIONAL: solo se envía al modelo si el usuario menciona
   Bornan (o el puesto / los eventos) en algún mensaje. Así el asistente
   nunca puede sacar este tema por iniciativa propia.
   ============================================================ */

/* Se compara sin tildes y en minúsculas. */
const TRIGGERS = [
  /bornan/,
  /\bvrm\b/,
  /venue\s*(&|and|y)?\s*results?/,
  /centroamerican/,
  /centro\s*american/,
  /central\s*american/,
  /(sur|sud)american/,
  /south\s*american\s*games/,
  /juegos\s+del\s+caribe/,
]

const normalize = (text) =>
  text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()

export function mentionsBornan(userMessages) {
  return userMessages.some((m) => TRIGGERS.some((re) => re.test(normalize(m))))
}

export const bornanContext = `
El usuario ha preguntado expresamente por esta experiencia (normalmente porque la ha visto en el CV). Puedes hablar de ella SOLO para responder a esa pregunta:
- Puesto: Venue & Results Manager (VRM) en Bornan Sports and Technology, de junio a septiembre de 2026, en los Juegos Centroamericanos y del Caribe 2026 y en los Juegos Suramericanos 2026.
- Es una experiencia fuera de la programación pero dentro de la tecnología. No la presentes como experiencia de desarrollo.
- Tareas: montaje, configuración y puesta en marcha de equipos y sistemas tecnológicos en las sedes; testing funcional del software de competición antes y durante los eventos; gestión, validación y recopilación en tiempo real de resultados, datos y estadísticas de balonmano y baloncesto.
- Qué le aportó: fue una experiencia muy buena que le dio otra visión de la tecnología (hardware, redes y testing de aplicaciones). Pasó más de un mes en el extranjero, conoció y trabajó con muchísimas personas y aprendió mucho.
`.trim()
