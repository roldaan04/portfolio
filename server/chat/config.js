/* ============================================================
   Configuración del chat IA. Todo lo ajustable vive aquí o en
   variables de entorno (Vercel → Settings → Environment Variables).
   ============================================================ */

import { CHAT_MAX_CHARS } from "../../src/data/chatLinks.js"

/* Lee una variable de entorno quitando espacios y comillas envolventes
   (por si se pega "valor" con comillas en el panel o en .env.local). */
export function env(name, fallback = "") {
  const raw = process.env[name]
  if (raw == null) return fallback
  const value = String(raw).trim().replace(/^(['"])(.*)\1$/, "$2").trim()
  return value || fallback
}

function envInt(name, fallback) {
  const n = Number.parseInt(env(name), 10)
  return Number.isFinite(n) && n > 0 ? n : fallback
}

export const LIMITS = {
  // Preguntas libres por visitante (ID anónimo del navegador).
  perClient: envInt("CHAT_LIMIT_PER_CLIENT", 10),
  // Por IP algo más tolerante: varios reclutadores de una empresa pueden compartirla.
  perIp: envInt("CHAT_LIMIT_PER_IP", 20),
  // Duración del bloqueo al agotar las preguntas (y ventana del contador).
  blockSeconds: envInt("CHAT_BLOCK_HOURS", 72) * 3600,
  // Respuestas de IA al día entre todos los visitantes (red de seguridad).
  globalDaily: envInt("CHAT_GLOBAL_DAILY_LIMIT", 100),
  // Tiempo mínimo entre mensajes de un mismo visitante.
  cooldownMs: 3000,
  // Longitud máxima de la pregunta del usuario.
  maxQuestionChars: CHAT_MAX_CHARS,
  // Tamaño máximo del cuerpo de la petición (pregunta + historial).
  maxBodyChars: 20_000,
  // Mensajes de historial que se envían al modelo (incluida la pregunta).
  historyMessages: 6,
  // Longitud máxima de cada mensaje del historial.
  maxHistoryChars: 1500,
}

export const LLM = {
  // Tokens máximos de salida (incluye el razonamiento interno del modelo).
  maxTokens: 900,
  temperature: 0.3,
  // Si el proveedor no empieza a responder en este tiempo, se pasa al siguiente.
  firstTokenTimeoutMs: 12000,
  // Duración máxima total de una respuesta.
  totalTimeoutMs: 45000,
}

/* Cadena de modelos, en orden. Formato: proveedor:modelo separados por comas.
   Se puede sobrescribir con CHAT_CHAIN sin tocar código (requiere redeploy). */
export const DEFAULT_CHAIN = [
  "groq:openai/gpt-oss-120b",
  "groq:qwen/qwen3.8-27b",
  "cloudflare:@cf/openai/gpt-oss-120b",
].join(",")

/* Prefijo de las claves en Redis. En desarrollo local se usa otro prefijo
   para que las pruebas no gasten los contadores de producción. */
export function redisPrefix() {
  return env("CHAT_REDIS_PREFIX", "chat")
}
