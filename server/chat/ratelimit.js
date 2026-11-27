import { createHash } from "node:crypto"
import { LIMITS, env, redisPrefix } from "./config.js"
import { getRedis } from "./redis.js"

/* Límites anti-abuso guardados en Upstash Redis. Claves (con TTL, Redis las
   borra solas):
     {p}:u:{hash}     → preguntas usadas por un visitante (ventana = bloqueo)
     {p}:b:{hash}     → bloqueo activo tras agotar las preguntas
     {p}:cd:{hash}    → enfriamiento de 3 s entre mensajes
     {p}:g:{fecha}    → respuestas de IA del día (global)
   Nunca se guarda la IP en claro: solo un hash con sal (CHAT_IP_SALT). */

const hash = (value) =>
  createHash("sha256").update(`${env("CHAT_IP_SALT")}:${value}`).digest("hex").slice(0, 32)

export function secondsUntilUtcMidnight(now = new Date()) {
  const next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1)
  return Math.max(60, Math.ceil((next - now.getTime()) / 1000))
}

function clientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0].trim()
  return request.headers.get("x-real-ip") || "unknown"
}

/* ID anónimo del navegador si tiene un formato válido; si no, null. */
export const validClientId = (clientId) =>
  typeof clientId === "string" && /^[a-zA-Z0-9-]{8,64}$/.test(clientId) ? clientId : null

export function identify(request, clientId) {
  const safeClient = validClientId(clientId) ?? "anon"
  return {
    ip: `ip:${hash(clientIp(request))}`,
    client: `c:${hash(safeClient)}`,
  }
}

/* Comprueba los límites y, si se puede preguntar, consume una pregunta.
   Devuelve { ok, remaining, refund } o { ok: false, code, retryAfter }. */
export async function consumeQuestion(ids) {
  const redis = getRedis()
  if (!redis) return { ok: false, code: "unavailable", retryAfter: 0 }

  const p = redisPrefix()
  const k = {
    blockClient: `${p}:b:${ids.client}`,
    blockIp: `${p}:b:${ids.ip}`,
    cooldown: `${p}:cd:${ids.client}`,
    usedClient: `${p}:u:${ids.client}`,
    usedIp: `${p}:u:${ids.ip}`,
    global: `${p}:g:${new Date().toISOString().slice(0, 10)}`,
  }

  // 1) ¿Bloqueado? Se bloquea si lo está el navegador O la IP.
  const [ttlClient, ttlIp] = await redis.pipeline().ttl(k.blockClient).ttl(k.blockIp).exec()
  const blockedFor = Math.max(ttlClient, ttlIp)
  if (blockedFor > 0) return { ok: false, code: "user_limit", retryAfter: blockedFor }

  // 2) Enfriamiento entre mensajes.
  const fresh = await redis.set(k.cooldown, 1, { nx: true, px: LIMITS.cooldownMs })
  if (!fresh) return { ok: false, code: "too_fast", retryAfter: Math.ceil(LIMITS.cooldownMs / 1000) }

  // 3) Consumir: contador global + contadores del visitante (SET NX fija el TTL
  //    solo al crear la clave; INCR lo conserva).
  const ex = LIMITS.blockSeconds
  const res = await redis
    .pipeline()
    .set(k.global, 0, { nx: true, ex: 2 * 86400 })
    .incr(k.global)
    .set(k.usedClient, 0, { nx: true, ex })
    .incr(k.usedClient)
    .set(k.usedIp, 0, { nx: true, ex })
    .incr(k.usedIp)
    .exec()
  const globalCount = res[1]
  const usedClient = res[3]
  const usedIp = res[5]

  const undo = () =>
    redis.pipeline().decr(k.global).decr(k.usedClient).decr(k.usedIp).exec().catch(() => {})

  if (globalCount > LIMITS.globalDaily) {
    await undo()
    return { ok: false, code: "global_limit", retryAfter: secondsUntilUtcMidnight() }
  }
  if (usedClient > LIMITS.perClient || usedIp > LIMITS.perIp) {
    await undo()
    await redis.pipeline().set(k.blockClient, 1, { ex }).set(k.blockIp, 1, { ex }).exec()
    return { ok: false, code: "user_limit", retryAfter: ex }
  }

  // Última pregunta disponible: se responde y se activa el bloqueo.
  const blocking = []
  if (usedClient >= LIMITS.perClient) blocking.push(k.blockClient)
  if (usedIp >= LIMITS.perIp) blocking.push(k.blockIp)
  if (blocking.length) {
    const pipe = redis.pipeline()
    for (const key of blocking) pipe.set(key, 1, { ex })
    await pipe.exec()
  }

  return {
    ok: true,
    remaining: Math.max(0, Math.min(LIMITS.perClient - usedClient, LIMITS.perIp - usedIp)),
    // Si ningún modelo pudo responder, se devuelve la pregunta.
    refund: async () => {
      await undo()
      if (blocking.length) await redis.del(...blocking).catch(() => {})
    },
  }
}

/* --- Proveedores sin cuota diaria (para no reintentarlos hasta el reinicio) --- */

const exhaustedKey = (id) => `${redisPrefix()}:agotado:${id}`

export async function getExhausted(ids) {
  const redis = getRedis()
  if (!redis || !ids.length) return new Set()
  try {
    const values = await redis.mget(...ids.map(exhaustedKey))
    return new Set(ids.filter((_, i) => values[i] != null))
  } catch {
    return new Set()
  }
}

export async function markExhausted(id, seconds = secondsUntilUtcMidnight()) {
  const redis = getRedis()
  if (!redis) return
  await redis.set(exhaustedKey(id), 1, { ex: seconds }).catch(() => {})
}
