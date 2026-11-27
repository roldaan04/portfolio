import { Redis } from "@upstash/redis"
import { env } from "./config.js"

let client = null

/* Cliente de Upstash Redis (REST). Devuelve null si no está configurado:
   en ese caso el chat con IA queda desactivado (fail closed). */
export function getRedis() {
  if (client) return client
  const url = env("UPSTASH_REDIS_REST_URL") || env("KV_REST_API_URL")
  const token = env("UPSTASH_REDIS_REST_TOKEN") || env("KV_REST_API_TOKEN")
  if (!url || !token) return null
  client = new Redis({ url, token })
  return client
}
