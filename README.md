# Portfolio Web - Javier Roldán Gallego

Este proyecto es el portfolio web personal de **Javier Roldán Gallego**, desarrollado para mostrar de forma clara y profesional mi perfil como **Full Stack Developer**.

### 🌐 [Ver portfolio online](https://javier-roldan.vercel.app/)

En este portfolio se recoge información sobre mi experiencia, formación, habilidades técnicas y proyectos completos, incluyendo trabajos relacionados con desarrollo frontend, backend, bases de datos, APIs, aplicaciones web, automatización de procesos y proyectos de Big Data e inteligencia artificial.

El objetivo de esta web es servir como carta de presentación profesional, permitiendo acceder de forma organizada a toda mi información como desarrollador, así como a mis principales proyectos, experiencia laboral y enlaces relevantes.

## Contenido del portfolio

- Información personal y profesional
- Perfil como Full Stack Developer
- Experiencia profesional
- Formación académica
- Tecnologías utilizadas
- Proyectos completos
- Enlaces a GitHub, LinkedIn y CV
- Chat de IA con contexto

## Tecnologías utilizadas

Este portfolio está desarrollado con:

- React

## Chat IA

El portfolio incluye un asistente con inteligencia artificial, accesible desde un botón flotante, que responde preguntas sobre mi perfil, experiencia, proyectos y disponibilidad, en español e inglés.

### Cómo está hecho

- **Frontend:** componente propio en React con Tailwind CSS, con preguntas frecuentes predefinidas, respuestas en streaming y enlaces a las secciones del portfolio.
- **Backend:** función serverless en Vercel (`/api/chat`).
- **Conocimiento:** la IA responde a partir del contenido de la web y de información adicional sobre mi perfil.

### Modelos de IA

Se conecta a **dos servicios externos de LLM en sus planes gratuitos**:

Si un modelo falla o agota su cuota, el chat pasa automáticamente al siguiente. Si ninguno está disponible, ofrece las vías de contacto.

### Límites y seguridad

- Límite de preguntas por visitante, con bloqueo temporal al agotarlas, y un máximo diario global (gestionados con Upstash Redis).
- Longitud máxima por pregunta y tiempo de espera entre mensajes.
- Las claves de las APIs solo existen en el servidor.
- Validación del origen y del contenido de las peticiones.
- La IA solo puede mostrar enlaces de una lista autorizada.
- No se guardan las conversaciones en el servidor y las direcciones IP se anonimizan.


## Autor

**Javier Roldán Gallego**  
Full Stack Developer
