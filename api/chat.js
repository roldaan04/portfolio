import { handleChat } from "../server/chat/handler.js"

/* Función de Vercel: POST /api/chat. La lógica vive en server/chat/
   (fuera de /api para que Vercel no la despliegue como funciones sueltas). */
export default {
  fetch: (request) => handleChat(request),
}
