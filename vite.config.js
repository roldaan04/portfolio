import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/* En desarrollo, `npm run dev` no ejecuta las funciones de /api (eso lo hace
   Vercel en producción). Este plugin las sirve desde Vite para probar el chat
   en local, leyendo las claves de .env.local. Solo afecta al servidor de
   desarrollo: no entra en el build. */
function devApi() {
  return {
    name: 'dev-api',
    apply: 'serve',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '')
      for (const [key, value] of Object.entries(env)) {
        if (!key.startsWith('VITE_') && process.env[key] === undefined) process.env[key] = value
      }
      // Las pruebas locales usan contadores propios en Redis.
      process.env.CHAT_REDIS_PREFIX ??= 'chat-dev'

      server.middlewares.use('/api/chat', async (req, res) => {
        try {
          const chunks = []
          for await (const chunk of req) chunks.push(chunk)
          const headers = new Headers()
          for (const [key, value] of Object.entries(req.headers)) {
            if (typeof value === 'string') headers.set(key, value)
          }
          headers.set('x-forwarded-for', req.socket.remoteAddress || '127.0.0.1')
          const request = new Request(`http://${req.headers.host}${req.originalUrl}`, {
            method: req.method,
            headers,
            body: req.method === 'GET' || req.method === 'HEAD' ? undefined : Buffer.concat(chunks),
          })

          const { default: fn } = await server.ssrLoadModule('/api/chat.js')
          const response = await fn.fetch(request)

          res.statusCode = response.status
          response.headers.forEach((value, key) => res.setHeader(key, value))
          if (!response.body) return res.end()
          for await (const chunk of response.body) res.write(chunk)
          res.end()
        } catch (err) {
          server.config.logger.error(`[dev-api] ${err.stack || err}`)
          if (!res.headersSent) res.statusCode = 500
          res.end()
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    devApi(),
  ],
})
