import { createHmac, timingSafeEqual } from "node:crypto"
import { content } from "../../src/data/site.js"
import { env } from "./config.js"

/* Historial verificable.
   El historial vive en el navegador (sessionStorage) y el servidor no guarda
   conversaciones, así que alguien podría inventarse respuestas "del asistente"
   para intentar saltarse las reglas. Para evitarlo:
   - Cada respuesta de la IA sale firmada (HMAC) junto con la pregunta que la
     originó y el ID anónimo del navegador. Solo se reenvían al modelo las
     respuestas cuya firma coincide.
   - Las respuestas de las preguntas fijas no pasan por el servidor: se aceptan
     solo si coinciden exactamente con el texto de site.js.
   La clave se deriva de CHAT_IP_SALT. Si falta, no se acepta ninguna respuesta
   de IA del historial (el chat sigue funcionando, sin contexto previo). */

function signingKey() {
  const salt = env("CHAT_IP_SALT")
  return salt ? createHmac("sha256", salt).update("chat-history-v1").digest() : null
}

/* Firma de una respuesta: depende del navegador, la pregunta y la respuesta. */
export function signAnswer(clientId, question, answer) {
  const key = signingKey()
  if (!key || !clientId) return null
  return createHmac("sha256", key)
    .update(JSON.stringify([clientId, question.trim(), answer.trim()]))
    .digest("base64url")
}

function validSignature(sig, expected) {
  if (typeof sig !== "string" || !expected || sig.length !== expected.length) return false
  return timingSafeEqual(Buffer.from(sig), Buffer.from(expected))
}

const FIXED_ANSWERS = new Set(
  Object.values(content).flatMap((lang) => (lang.chat?.quickQuestions ?? []).map((q) => q.answer.trim())),
)

/* ¿Es auténtica la respuesta del asistente `answer` a la pregunta `question`? */
export function isTrustedAnswer({ clientId, question, answer, sig }) {
  if (FIXED_ANSWERS.has(answer.trim())) return true
  if (!question) return false
  return validSignature(sig, signAnswer(clientId, question, answer))
}
