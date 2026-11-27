/* ============================================================
   Contenido centralizado del portfolio de Javier Roldán Gallego.
   Edita este archivo para actualizar la web entera.

   El contenido está duplicado por idioma: `content.es` y `content.en`.
   Los componentes lo leen con el hook `useSite()`, que devuelve la
   versión del idioma activo. Si cambias un texto, cámbialo en ambos.

   ⚠️ PLACEHOLDERS PENDIENTES (sustituir por los datos reales):
   - links.email     → email de contacto real
   - links.linkedin  → URL real de LinkedIn
   - links.github    → URL real de GitHub
   - links.cv        → OK: PDF servido desde /public/cv/ (ruta absoluta /cv/...)
                       ES: JavierRoldanCV.pdf · EN: JavierRoldan_CV.pdf
   - projects[].repo / .demo / .details → enlaces reales de cada proyecto
   ============================================================ */

// Con extensión .js: este archivo también lo importa la función del chat (Node).
import { useLanguage } from "../i18n/context.js"
import { CONTACT } from "./chatLinks.js"

const EMAIL_MD = `[${CONTACT.email}](mailto:${CONTACT.email})`
const PHONE_MD = `[${CONTACT.phone}](${CONTACT.phoneHref})`

// 🔧 Placeholders centralizados — cámbialos por los reales.
const sharedLinks = {
  email: "javirol2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/javier-rold%C3%A1n-gallego-desarrollador-full-stack-programador/",
  github: "https://github.com/roldaan04",
  cv: "/cv/JavierRoldanCV.pdf",
}

const gmailUrl = (subject) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${sharedLinks.email}&su=${encodeURIComponent(subject)}`

/* ------------------------------------------------------------------ */
/* Español                                                            */
/* ------------------------------------------------------------------ */

const esProfile = {
  name: "Javier Roldán Gallego",
  firstName: "Javier",
  logo: { left: "Javier", right: ".dev" },
  role: "Full Stack Developer",
  roleTarget: "Full Stack Developer",
  location: "Madrid",
  availability: "En búsqueda activa",
  modality: "Presencial · Híbrido · Remoto",
  experienceYears: "1 año",
};

const es = {
  profile: esProfile,

  links: {
    ...sharedLinks,
    gmail: gmailUrl("Contacto portfolio Javier Roldán"),
    gmailFreelance: gmailUrl("Presupuesto web"),
  },

  hero: {
    eyebrow: "Full Stack Developer · Open to work",
    titleLead: "Hola, soy Javier.",
    titleHighlight: "Desarrollador full stack junior.",
    subtitle:
      "Tengo experiencia práctica creando soluciones reales de frontend, backend, bases de datos, APIs REST, automatización, cloud e IA aplicada.",
    secondary:
      "Busco una oportunidad donde seguir creciendo como desarrollador, aportar desde el primer día y formar parte de un equipo técnico donde aprender, construir y asumir nuevos retos.",
  },

  about: {
    text: "Tengo una base sólida en desarrollo web y especialización en datos e IA. He trabajado en aplicaciones completas de empresa, entendiendo tanto el frontend como el backend y la lógica de negocio que hay detrás. Soy una persona resolutiva, proactiva y con muchas ganas de crecer dentro de un equipo.",
    cards: [
      {
        icon: "layers",
        title: "Aplicaciones completas",
        text: "Construyo el producto de extremo a extremo: interfaz, API, base de datos y despliegue, no solo piezas sueltas.",
      },
      {
        icon: "workflow",
        title: "Lógica de negocio real",
        text: "Experiencia con stock en tiempo real, reservas, ventas, fabricación, roles y procesos internos de empresa.",
      },
      {
        icon: "trending",
        title: "Aprendizaje continuo",
        text: "Me especializo en full-stack, cloud y datos/IA. Disfruto aprendiendo y aplicando lo nuevo a problemas reales.",
      },
    ],
  },

  stack: [
    {
      icon: "code",
      category: "Frontend",
      items: ["React", "Angular", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      icon: "server",
      category: "Backend",
      items: ["Node.js", "Express", "Java", "Spring Boot", "Python", "FastAPI "],
    },
    {
      icon: "database",
      category: "Bases de datos",
      items: ["MongoDB", "MySQL", "SQL"],
    },
    {
      icon: "cloud",
      category: "Cloud · Data · IA",
      items: ["AWS", "Python", "PySpark", "Machine Learning", "LLMs / Agentes IA"],
    },
    {
      icon: "wrench",
      category: "Herramientas",
      items: ["Git", "GitHub", "Docker", "Postman"],
    },
  ],

  experience: {
    company: "Visioluxe",
    locationLabel: "Getafe, Madrid",
    roleLabel: "Desarrollador Full Stack",
    period: "Experiencia en producto de empresa",
    intro:
      "Desarrollo y evolución de dos aplicaciones conectadas para la empresa: una plataforma pública de reservas y un ERP interno de gestión. Ambas compartían backend, productos, stock y disponibilidad, por lo que las reservas realizadas en la web pública impactaban directamente en la gestión interna del negocio.",
    cases: [
      {
        tag: "Plataforma pública",
        title: "Plataforma de alquiler audiovisual",
        brand: "BlackDisplay",
        brandUrl: "https://blackdisplay.net",
        description:
          "Plataforma web donde los usuarios consultan productos, seleccionan fechas, comprueban disponibilidad, reservan y pagan online.",
        points: [
          "Frontend con Angular y backend con Node.js / Express.",
          "Base de datos MongoDB y APIs REST.",
          "Control de stock y disponibilidad en tiempo real por fechas.",
          "Panel de administración de productos y reservas.",
          "Integración de pasarela de pago.",
          "Estructura y optimización SEO.",
        ],
        stack: ["Angular", "Node.js", "Express", "MongoDB", "APIs REST", "SEO", "Cron jobs", "Git"],
      },
      {
        tag: "Aplicación interna",
        title: "ERP interno de gestión empresarial",
        brand: null,
        brandUrl: null,
        description:
          "Aplicación interna para gestionar reservas, ventas, fabricación, stock, albaranes, devoluciones, documentación, firmas y procesos administrativos.",
        points: [
          "Paneles internos de administración.",
          "Gestión de reservas, ventas, fabricación y stock.",
          "Control de acceso por roles y permisos diferenciados.",
          "Generación automática de PDFs (albaranes, documentación).",
          "Automatización de procesos internos.",
          "Lógica de negocio compleja e integración entre módulos.",
        ],
        stack: ["Node.js", "MongoDB", "Automatización", "PDFs (Puppeteer)", "Incidencias", "Roles y permisos"],
      },
    ],
    proves: [
      "Trabajo con lógica de negocio compleja",
      "Autonomía técnica",
      "Visión de producto",
      "Comprensión de procesos de empresa",
      "Desarrollo full stack real",
      "Arquitectura con backend compartido",
    ],
  },

  projects: [
    {
      id: "filme",
      category: "TFG · Aplicación web de cine",
      title: "Filme",
      summary:
        "Red social de cine donde los usuarios gestionan favoritos, críticas, recomendaciones y amigos, con información de películas vía API externa.",
      problem:
        "Centralizar el descubrimiento de películas y la interacción social (críticas, amigos, recomendaciones) en una sola aplicación segura.",
      contribution:
        "Desarrollo full stack: frontend en React, API REST en Spring Boot, modelo de datos en MySQL, autenticación con JWT y datos consumidos desde API externa de cine.",
      proves:
        "Arquitectura cliente-servidor completa, autenticación segura e integración de APIs de terceros.",
      tech: ["React", "Spring Boot", "Java", "MySQL", "JWT", "API externa"],
      accent: "brand",
      links: {
        details: "/filme",
        repo: "https://github.com/Laiton10/TFG/tree/master",
        //demo: "#",
      },
    },
    {
      id: "tfm-aws",
      category: "TFM · Cloud · Big Data · Machine Learning",
      title: "Predictive Maintenance en AWS",
      summary:
        "Sistema cloud de mantenimiento predictivo que analiza telemetría industrial para anticipar el fallo de motores antes de que ocurra.",
      problem:
        "Detectar de forma anticipada el riesgo de fallo de maquinaria industrial para reducir paradas no planificadas y costes.",
      contribution:
        "Pipeline de datos end-to-end en AWS: ingesta con Kinesis, almacenamiento en S3, procesado con Lambda y Step Functions, modelo de ML y resultados en DynamoDB.",
      proves:
        "Diseño de arquitecturas cloud serverless, ETL, pipelines de datos y machine learning aplicado.",
      tech: [
        "AWS",
        "Python",
        "Machine Learning",
        "S3",
        "Lambda",
        "Kinesis",
        "DynamoDB",
        "Step Functions",
        "ETL",
      ],
      accent: "brand-2",
      links: {
        details: "/aws-project",
        repo: null,
        //demo: "#",
      },
    },
    {
      id: "control-admin",
      category: "Producto · Gestión para pymes y autónomos",
      title: "Control Admin · tuadministrativo.com",
      summary:
        "App de gestión que centraliza gastos, ingresos y documentación, usando IA para extraer datos de PDFs y documentos y generar un dashboard del negocio.",
      problem:
        "Las pymes y autónomos pierden tiempo organizando facturas y documentos. El objetivo es automatizar su lectura y dar una visión clara del estado financiero.",
      contribution:
        "Frontend en Angular y backend en Python / FastAPI que procesa documentos e integra un LLM externo para extraer, clasificar datos y alimentar un dashboard.",
      proves:
        "Integración de IA (LLM) en producto real, procesamiento de documentos y construcción de dashboards de negocio.",
      tech: [
        "Angular",
        "Python",
        "FastAPI",
        "APIs REST",
        "LLM externo",
        "Procesamiento de documentos",
        "Dashboards",
      ],
      accent: "accent",
      links: {
        details: "/control-admin",
        repo: null,
        //demo: "#",
      },
    },
    {
      id: "kristalia",
      category: "Proyecto freelance · Web corporativa",
      title: "Kristalia",
      summary:
        "Web corporativa desarrollada para una empresa de limpieza profesional de cristales, con enfoque comercial, diseño responsive, SEO inicial y publicación real.",
      problem:
        "La empresa necesitaba una presencia online profesional para presentar sus servicios, transmitir confianza y facilitar el contacto con posibles clientes.",
      contribution:
        "Desarrollo de la web en React, estructura de páginas y landings, adaptación responsive, SEO básico, configuración de dominio, despliegue y trabajo directo con el cliente.",
      proves:
        "Capacidad para sacar adelante una web real de cliente: diseño, SEO inicial, despliegue y comunicación hasta dejarla publicada.",
      tech: [
        "React",
        "CSS",
        "Responsive",
        "SEO",
        "Deploy",
        "Google Analytics",
        "Search Console",
      ],
      accent: "brand",
      links: {
        details: null,
        website: "https://kristalia.es",
        repo: null,
        //demo: null,
      },
    },
  ],

  education: [
    {
      title: "DAW · Desarrollo de Aplicaciones Web",
      role: "Base full stack",
      description:
        "Fundamentos de programación, desarrollo web, frontend, backend, bases de datos y arquitectura de aplicaciones.",
      value: "Me da la base técnica para construir aplicaciones web completas.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Java",
        "Spring Boot",
        "SQL",
        "React",
        "APIs REST",
        "MVC",
        "Microservicios"
      ],
    },
    {
      title: "Curso de especialización · IA y Big Data",
      role: "Valor diferencial",
      description:
        "Procesamiento de datos, cloud, machine learning, pipelines y tecnologías Big Data.",
      value:
        "Aporto un perfil que no solo desarrolla webs, sino que entiende datos, cloud e IA.",
      skills: [
        "Python",
        "PySpark",
        "SQL",
        "Docker",
        "AWS",
        "Machine Learning",
        "Pipelines",
        "LLMs",
        "Agentes de IA"
      ],
    },
  ],

  /* Página /freelance: no se enlaza desde ningún sitio de la web, solo se
     comparte el link directamente con posibles clientes. Kristalia se toma
     de `projects` (id "kristalia") para no duplicarla. */
  freelance: {
    eyebrow: "Freelance · Webs para negocios y particulares",
    titleLead: "¿Necesitas una web?",
    titleHighlight: "Te la diseño y desarrollo a medida.",
    intro:
      "Creo webs profesionales para negocios, autónomos y particulares: rápidas, adaptadas al móvil, preparadas para aparecer en Google y pensadas para que tus visitantes te contacten. Me encargo de todo, desde la idea hasta dejarla publicada.",
    services: [
      {
        icon: "code",
        title: "Diseño a medida",
        text: "Una web con la identidad de tu marca, sin plantillas genéricas.",
      },
      {
        icon: "trending",
        title: "Preparada para Google",
        text: "SEO local, metadatos y alta en Search Console desde el primer día.",
      },
      {
        icon: "workflow",
        title: "Pensada para captar clientes",
        text: "Botones de WhatsApp, llamada y contacto donde de verdad se usan.",
      },
      {
        icon: "cloud",
        title: "Publicada y lista",
        text: "Dominio, despliegue y analítica configurados. Tú solo la compartes.",
      },
    ],
    examplesEyebrow: "Ejemplos",
    examplesTitle: "Webs que he desarrollado para clientes",
    examplesSubtitle:
      "Proyectos reales para negocios de distintos sectores, cada uno con su propia identidad y objetivo.",
    projects: [
      {
        id: "briloria",
        category: "Proyecto freelance · Web de servicios",
        title: "Briloria",
        summary:
          "Web para una empresa de servicios de limpieza en Madrid y la Comunidad de Madrid, pensada para conseguir solicitudes de presupuesto por WhatsApp y posicionar en Google.",
        problem:
          "La empresa necesitaba presentar su catálogo completo (abrillantado de suelos, cristales, moquetas, fachadas, paneles solares, sofás…) y convertir visitas en contactos de forma directa, sin formularios.",
        contribution:
          "Diseño y desarrollo completo de la web, con páginas propias para cada servicio y contacto directo por WhatsApp. Optimizada para posicionar en Google en búsquedas locales.",
        proves:
          "Capacidad para construir una web comercial orientada a conversión y SEO local, con contenido centralizado y fácil de mantener.",
        tech: ["React", "React Router", "Vite", "SEO local", "Prerender", "Datos estructurados", "Responsive"],
        accent: "brand-2",
        links: { details: null, website: null, websitePending: true, repo: null },
      },
      {
        id: "entrenador",
        category: "Proyecto freelance · Marca personal",
        title: "Web para entrenador personal",
        summary:
          "Web profesional para un preparador físico y entrenador personal en Madrid, con servicio presencial y online, diseñada con personalidad propia y orientada a que el visitante escriba por WhatsApp.",
        problem:
          "El cliente necesitaba una web que transmitiera en pocos segundos quién es y qué ofrece, generara confianza y no pareciera una plantilla genérica.",
        contribution:
          "Diseño y desarrollo de una web con identidad propia, páginas para cada servicio, tarifas y contacto por WhatsApp. Rápida, accesible y preparada para posicionar en Google.",
        proves:
          "Saber trasladar la personalidad de una marca a una web rápida, accesible y optimizada para buscadores, con la calidad verificada por tests.",
        tech: ["Next.js", "React", "CSS Modules", "SEO", "JSON-LD", "Playwright", "Accesibilidad"],
        accent: "accent",
        links: { details: null, website: null, websitePending: true, repo: null },
      },
    ],
    ctaPrimary: "Pedir presupuesto",
    ctaSecondary: "Ver otros proyectos",
    finalTitle: "¿Tienes un negocio y quieres tu propia web?",
    finalText: "Cuéntame tu idea y te preparo una propuesta sin compromiso.",
    finalCta: "Escríbeme",
  },

  contact: {
    title: "¿Buscas un desarrollador con ganas de crecer y aportar desde el primer día?",
    text: "Estoy abierto a nuevas oportunidades como desarrollador full stack junior. Puedes contactarme para entrevistas, procesos de selección o colaboraciones profesionales.",
    facts: [
      { label: "Ubicación", value: esProfile.location },
      { label: "Disponibilidad", value: esProfile.availability },
      { label: "Puesto", value: esProfile.roleTarget },
      { label: "Modalidad", value: esProfile.modality },
    ],
  },

  /* Chat IA (botón flotante). Las preguntas fijas se responden con estos
     textos tal cual, sin pasar por la IA. Admiten **negrita**, listas con "- "
     y enlaces [texto](url) de la lista blanca de src/data/chatLinks.js. */
  chat: {
    open: "Abrir el asistente IA",
    teaserEyebrow: "Asistente IA",
    teaser: "👋 ¿Tienes preguntas sobre Javier? Pregúntame lo que quieras sobre su experiencia y proyectos.",
    title: "Asistente de Javier",
    subtitle: "IA · Responde sobre su perfil",
    welcome:
      "¡Hola! 👋 Soy el asistente virtual de Javier. Puedo contarte sobre su experiencia, proyectos, formación y disponibilidad. Elige una pregunta o escribe la tuya.",
    placeholder: "Escribe tu pregunta…",
    send: "Enviar",
    close: "Cerrar chat",
    reset: "Nueva conversación",
    moreQuestions: "También puedes preguntar",
    disclaimer: "Respuestas generadas por IA, pueden contener errores. No incluyas datos personales.",
    remaining: "Te quedan {n} preguntas",
    remainingOne: "Te queda 1 pregunta",
    tooLong: "Tu mensaje supera el límite de {max} caracteres. Redúcelo o habla directamente con Javier:",
    blockedUntil: "Podrás volver a preguntar a partir del {date}.",
    errors: {
      user_limit: "Has alcanzado el límite de preguntas 🙂 Si quieres saber más, contacta directamente con Javier:",
      global_limit: "El asistente ha alcanzado su límite de hoy. Puedes contactar directamente con Javier:",
      unavailable: "El asistente no está disponible ahora mismo. Puedes contactar directamente con Javier:",
      too_fast: "Vas un poco rápido 🙂 Espera unos segundos y vuelve a intentarlo.",
      bad_request: "No he podido procesar tu mensaje. Prueba a reformularlo.",
      too_long: "Tu mensaje es demasiado largo. Redúcelo o habla directamente con Javier:",
      network: "No he podido conectar. Revisa tu conexión e inténtalo de nuevo.",
    },
    contact: { email: "Email", phone: "Teléfono", linkedin: "LinkedIn", cv: "Descargar CV" },
    quickQuestions: [
      {
        id: "actualidad",
        question: "¿Qué está haciendo Javier actualmente?",
        answer:
          "Actualmente, Javier se encuentra en búsqueda activa de empleo como desarrollador Full Stack o en puestos relacionados con la Inteligencia Artificial. Mientras tanto, continúa ampliando su experiencia mediante el desarrollo de proyectos personales y otros, como páginas web para clientes (como [Kristalia](/proyectos#kristalia)). Puedes conocer mejor su trabajo, sus habilidades y los proyectos que desarrolla visitando el [portfolio](/proyectos) y su perfil de [GitHub](https://github.com/roldaan04).",
      },
      {
        id: "experiencia",
        question: "¿Qué experiencia profesional tiene Javier?",
        answer:
          "Javier cuenta con un año de experiencia profesional como desarrollador Full Stack en Visioluxe, donde participó en el desarrollo de dos aplicaciones completas utilizando Angular, Node.js y MongoDB, trabajando tanto en el frontend como en el backend y desarrollando APIs REST. Puedes conocer más detalles sobre las aplicaciones desarrolladas en el apartado de [Experiencia](/experiencia) de su portfolio.\n\nAunque su experiencia profesional se ha centrado principalmente en estas tecnologías, Javier también cuenta con experiencia práctica en otros lenguajes y frameworks, como Python, React, Java, Spring Boot y FastAPI, adquirida mediante su formación y el desarrollo de proyectos personales.",
      },
      {
        id: "contacto",
        question: "¿Cómo puedo contactar con Javier?",
        answer: `Puedes contactar con Javier como prefieras:\n- **Email:** ${EMAIL_MD}\n- **Teléfono:** ${PHONE_MD}\n\nEstará encantado de hablar contigo sobre oportunidades profesionales, procesos de selección o proyectos.`,
      },
      {
        id: "disponibilidad",
        question: "¿Cuál es su disponibilidad?",
        answer: `Javier tiene **disponibilidad inmediata** para incorporarse. Está abierto a trabajar en modalidad presencial, híbrida o remota, y se encuentra en Madrid. Si quieres hablar con él, puedes contactarle por email (${EMAIL_MD}) o por teléfono (${PHONE_MD}).`,
      },
      {
        id: "freelance",
        question: "¿Hace proyectos freelance?",
        answer: `¡Por supuesto! Javier está abierto a colaborar en proyectos freelance y cuenta con experiencia trabajando con clientes externos, como [Kristalia](/proyectos#kristalia), una empresa de limpieza de cristales que confió en él para desarrollar su página web corporativa, obteniendo excelentes resultados.\n\nEntre los servicios que puede ofrecer se encuentran:\n- **Desarrollo web:** creación de páginas web completas, modernas, adaptadas a dispositivos móviles y orientadas a captar clientes, con su SEO correspondiente.\n- **Desarrollo de aplicaciones:** soluciones de software personalizadas según las necesidades de cada empresa.\n- **Automatización de procesos:** optimización de tareas repetitivas para ahorrar tiempo y mejorar la productividad.\n- **Inteligencia Artificial:** implementación de soluciones de IA adaptadas a las necesidades del negocio.\n- **Asesoramiento tecnológico:** análisis de las necesidades de tu empresa para identificar oportunidades de mejora y plantear soluciones digitales.\n\nSi tienes un proyecto en mente o simplemente quieres descubrir cómo la tecnología puede mejorar tu negocio, puedes ponerte en contacto con Javier, compartir tus ideas y estudiar juntos la mejor solución para tu empresa.\n- **Email:** ${EMAIL_MD}\n- **Teléfono:** ${PHONE_MD}`,
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* English                                                            */
/* ------------------------------------------------------------------ */

const enProfile = {
  ...esProfile,
  availability: "Actively looking",
  modality: "On-site · Hybrid · Remote",
  experienceYears: "1 year",
};

const en = {
  profile: enProfile,

  links: {
    ...sharedLinks,
    cv: "/cv/JavierRoldan_CV.pdf",
    gmail: gmailUrl("Portfolio contact Javier Roldán"),
    gmailFreelance: gmailUrl("Website quote"),
  },

  hero: {
    eyebrow: "Full Stack Developer · Open to work",
    titleLead: "Hi, I'm Javier.",
    titleHighlight: "Junior full stack developer.",
    subtitle:
      "I have hands-on experience building real solutions across frontend, backend, databases, REST APIs, automation, cloud and applied AI.",
    secondary:
      "I'm looking for an opportunity to keep growing as a developer, contribute from day one and join a technical team where I can learn, build and take on new challenges.",
  },

  about: {
    text: "I have a solid foundation in web development and a specialisation in data and AI. I've worked on complete business applications, understanding both the frontend and the backend as well as the business logic behind them. I'm a proactive problem-solver, eager to grow within a team.",
    cards: [
      {
        icon: "layers",
        title: "Complete applications",
        text: "I build products end to end: interface, API, database and deployment, not just isolated pieces.",
      },
      {
        icon: "workflow",
        title: "Real business logic",
        text: "Experience with real-time stock, bookings, sales, manufacturing, roles and internal company processes.",
      },
      {
        icon: "trending",
        title: "Continuous learning",
        text: "I specialise in full-stack, cloud and data/AI. I enjoy learning new things and applying them to real problems.",
      },
    ],
  },

  stack: [
    {
      icon: "code",
      category: "Frontend",
      items: ["React", "Angular", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      icon: "server",
      category: "Backend",
      items: ["Node.js", "Express", "Java", "Spring Boot", "Python", "FastAPI "],
    },
    {
      icon: "database",
      category: "Databases",
      items: ["MongoDB", "MySQL", "SQL"],
    },
    {
      icon: "cloud",
      category: "Cloud · Data · AI",
      items: ["AWS", "Python", "PySpark", "Machine Learning", "LLMs / AI Agents"],
    },
    {
      icon: "wrench",
      category: "Tools",
      items: ["Git", "GitHub", "Docker", "Postman"],
    },
  ],

  experience: {
    company: "Visioluxe",
    locationLabel: "Getafe, Madrid",
    roleLabel: "Full Stack Developer",
    period: "Experience on a company product",
    intro:
      "Development and evolution of two connected applications for the company: a public booking platform and an internal management ERP. Both shared the same backend, products, stock and availability, so bookings made on the public website had a direct impact on the internal management of the business.",
    cases: [
      {
        tag: "Public platform",
        title: "Audiovisual rental platform",
        brand: "BlackDisplay",
        brandUrl: "https://blackdisplay.net",
        description:
          "Web platform where users browse products, select dates, check availability, book and pay online.",
        points: [
          "Angular frontend and Node.js / Express backend.",
          "MongoDB database and REST APIs.",
          "Real-time stock and availability control by date.",
          "Admin panel for products and bookings.",
          "Payment gateway integration.",
          "SEO structure and optimisation.",
        ],
        stack: ["Angular", "Node.js", "Express", "MongoDB", "REST APIs", "SEO", "Cron jobs", "Git"],
      },
      {
        tag: "Internal application",
        title: "Internal business management ERP",
        brand: null,
        brandUrl: null,
        description:
          "Internal application to manage bookings, sales, manufacturing, stock, delivery notes, returns, documentation, signatures and administrative processes.",
        points: [
          "Internal admin dashboards.",
          "Management of bookings, sales, manufacturing and stock.",
          "Role-based access control with differentiated permissions.",
          "Automatic PDF generation (delivery notes, documentation).",
          "Automation of internal processes.",
          "Complex business logic and integration between modules.",
        ],
        stack: ["Node.js", "MongoDB", "Automation", "PDFs (Puppeteer)", "Incident tracking", "Roles & permissions"],
      },
    ],
    proves: [
      "Working with complex business logic",
      "Technical autonomy",
      "Product vision",
      "Understanding of business processes",
      "Real full stack development",
      "Shared-backend architecture",
    ],
  },

  projects: [
    {
      id: "filme",
      category: "Final degree project · Movie web app",
      title: "Filme",
      summary:
        "Movie social network where users manage favourites, reviews, recommendations and friends, with film information from an external API.",
      problem:
        "Bring movie discovery and social interaction (reviews, friends, recommendations) together in a single secure application.",
      contribution:
        "Full stack development: React frontend, Spring Boot REST API, MySQL data model, JWT authentication and data consumed from an external movie API.",
      proves:
        "Complete client-server architecture, secure authentication and third-party API integration.",
      tech: ["React", "Spring Boot", "Java", "MySQL", "JWT", "External API"],
      accent: "brand",
      links: {
        details: "/filme",
        repo: "https://github.com/Laiton10/TFG/tree/master",
        //demo: "#",
      },
    },
    {
      id: "tfm-aws",
      category: "Master's thesis · Cloud · Big Data · Machine Learning",
      title: "Predictive Maintenance on AWS",
      summary:
        "Cloud-based predictive maintenance system that analyses industrial telemetry to anticipate engine failures before they happen.",
      problem:
        "Detect the risk of industrial machinery failure early to reduce unplanned downtime and costs.",
      contribution:
        "End-to-end data pipeline on AWS: ingestion with Kinesis, storage in S3, processing with Lambda and Step Functions, an ML model and results stored in DynamoDB.",
      proves:
        "Design of serverless cloud architectures, ETL, data pipelines and applied machine learning.",
      tech: [
        "AWS",
        "Python",
        "Machine Learning",
        "S3",
        "Lambda",
        "Kinesis",
        "DynamoDB",
        "Step Functions",
        "ETL",
      ],
      accent: "brand-2",
      links: {
        details: "/aws-project",
        repo: null,
        //demo: "#",
      },
    },
    {
      id: "control-admin",
      category: "Product · Management for SMEs and freelancers",
      title: "Control Admin · tuadministrativo.com",
      summary:
        "Management app that centralises expenses, income and documentation, using AI to extract data from PDFs and documents and generate a business dashboard.",
      problem:
        "SMEs and freelancers lose time organising invoices and documents. The goal is to automate reading them and provide a clear view of the financial situation.",
      contribution:
        "Angular frontend and Python / FastAPI backend that processes documents and integrates an external LLM to extract and classify data and feed a dashboard.",
      proves:
        "AI (LLM) integration in a real product, document processing and building business dashboards.",
      tech: [
        "Angular",
        "Python",
        "FastAPI",
        "REST APIs",
        "External LLM",
        "Document processing",
        "Dashboards",
      ],
      accent: "accent",
      links: {
        details: "/control-admin",
        repo: null,
        //demo: "#",
      },
    },
    {
      id: "kristalia",
      category: "Freelance project · Corporate website",
      title: "Kristalia",
      summary:
        "Corporate website built for a professional window-cleaning company, with a commercial focus, responsive design, initial SEO and a real launch.",
      problem:
        "The company needed a professional online presence to showcase its services, build trust and make it easy for potential customers to get in touch.",
      contribution:
        "Website development in React, page and landing structure, responsive adaptation, basic SEO, domain setup, deployment and working directly with the client.",
      proves:
        "Ability to deliver a real client website: design, initial SEO, deployment and communication all the way to launch.",
      tech: [
        "React",
        "CSS",
        "Responsive",
        "SEO",
        "Deploy",
        "Google Analytics",
        "Search Console",
      ],
      accent: "brand",
      links: {
        details: null,
        website: "https://kristalia.es",
        repo: null,
        //demo: null,
      },
    },
  ],

  education: [
    {
      title: "DAW · Web Application Development",
      role: "Full stack foundation",
      description:
        "Programming fundamentals, web development, frontend, backend, databases and application architecture.",
      value: "It gives me the technical foundation to build complete web applications.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Java",
        "Spring Boot",
        "SQL",
        "React",
        "REST APIs",
        "MVC",
        "Microservices"
      ],
    },
    {
      title: "Specialisation course · AI and Big Data",
      role: "Differentiating value",
      description:
        "Data processing, cloud, machine learning, pipelines and Big Data technologies.",
      value:
        "I bring a profile that doesn't just build websites, but also understands data, cloud and AI.",
      skills: [
        "Python",
        "PySpark",
        "SQL",
        "Docker",
        "AWS",
        "Machine Learning",
        "Pipelines",
        "LLMs",
        "AI Agents"
      ],
    },
  ],

  freelance: {
    eyebrow: "Freelance · Websites for businesses and individuals",
    titleLead: "Need a website?",
    titleHighlight: "I'll design and build it for you.",
    intro:
      "I build professional websites for businesses, freelancers and individuals: fast, mobile-friendly, ready to show up on Google and designed to get your visitors in touch. I handle everything, from the idea to the launch.",
    services: [
      {
        icon: "code",
        title: "Custom design",
        text: "A website with your brand's identity, no generic templates.",
      },
      {
        icon: "trending",
        title: "Ready for Google",
        text: "Local SEO, metadata and Search Console set up from day one.",
      },
      {
        icon: "workflow",
        title: "Built to win clients",
        text: "WhatsApp, call and contact buttons right where people use them.",
      },
      {
        icon: "cloud",
        title: "Live and ready",
        text: "Domain, deployment and analytics configured. You just share it.",
      },
    ],
    examplesEyebrow: "Examples",
    examplesTitle: "Websites I've built for clients",
    examplesSubtitle:
      "Real projects for businesses in different sectors, each with its own identity and goal.",
    projects: [
      {
        id: "briloria",
        category: "Freelance project · Services website",
        title: "Briloria",
        summary:
          "Website for a cleaning services company in Madrid and the wider Madrid region, designed to generate quote requests via WhatsApp and rank on Google.",
        problem:
          "The company needed to showcase its full catalogue (floor polishing, windows, carpets, façades, solar panels, sofas…) and turn visits into direct contacts, without forms.",
        contribution:
          "Full design and development of the website, with a dedicated page for each service and direct contact via WhatsApp. Optimised to rank on Google for local searches.",
        proves:
          "Ability to build a commercial website focused on conversion and local SEO, with centralised, easy-to-maintain content.",
        tech: ["React", "React Router", "Vite", "Local SEO", "Prerender", "Structured data", "Responsive"],
        accent: "brand-2",
        links: { details: null, website: null, websitePending: true, repo: null },
      },
      {
        id: "entrenador",
        category: "Freelance project · Personal brand",
        title: "Website for a personal trainer",
        summary:
          "Professional website for a strength coach and personal trainer in Madrid, offering in-person and online training, designed with its own personality to get visitors to message on WhatsApp.",
        problem:
          "The client needed a website that conveys who he is and what he offers within seconds, builds trust and doesn't look like a generic template.",
        contribution:
          "Design and development of a website with its own identity, pages for each service, pricing and WhatsApp contact. Fast, accessible and ready to rank on Google.",
        proves:
          "Translating a brand's personality into a fast, accessible, search-optimised website, with quality verified by tests.",
        tech: ["Next.js", "React", "CSS Modules", "SEO", "JSON-LD", "Playwright", "Accessibility"],
        accent: "accent",
        links: { details: null, website: null, websitePending: true, repo: null },
      },
    ],
    ctaPrimary: "Request a quote",
    ctaSecondary: "See other projects",
    finalTitle: "Have a business and want your own website?",
    finalText: "Tell me your idea and I'll prepare a no-obligation proposal.",
    finalCta: "Get in touch",
  },

  contact: {
    title: "Looking for a developer eager to grow and contribute from day one?",
    text: "I'm open to new opportunities as a junior full stack developer. Feel free to reach out for interviews, hiring processes or professional collaborations.",
    facts: [
      { label: "Location", value: enProfile.location },
      { label: "Availability", value: enProfile.availability },
      { label: "Position", value: enProfile.roleTarget },
      { label: "Work mode", value: enProfile.modality },
    ],
  },

  chat: {
    open: "Open the AI assistant",
    teaserEyebrow: "AI assistant",
    teaser: "👋 Got questions about Javier? Ask me anything about his experience and projects.",
    title: "Javier's assistant",
    subtitle: "AI · Answers about his profile",
    welcome:
      "Hi! 👋 I'm Javier's virtual assistant. I can tell you about his experience, projects, education and availability. Pick a question or type your own.",
    placeholder: "Type your question…",
    send: "Send",
    close: "Close chat",
    reset: "New conversation",
    moreQuestions: "You can also ask",
    disclaimer: "AI-generated answers may contain mistakes. Please don't share personal data.",
    remaining: "{n} questions left",
    remainingOne: "1 question left",
    tooLong: "Your message is over the {max} character limit. Shorten it or talk to Javier directly:",
    blockedUntil: "You'll be able to ask again from {date}.",
    errors: {
      user_limit: "You've reached the question limit 🙂 If you'd like to know more, contact Javier directly:",
      global_limit: "The assistant has reached its limit for today. You can contact Javier directly:",
      unavailable: "The assistant isn't available right now. You can contact Javier directly:",
      too_fast: "You're going a bit fast 🙂 Wait a few seconds and try again.",
      bad_request: "I couldn't process your message. Try rephrasing it.",
      too_long: "Your message is too long. Shorten it or talk to Javier directly:",
      network: "I couldn't connect. Check your connection and try again.",
    },
    contact: { email: "Email", phone: "Phone", linkedin: "LinkedIn", cv: "Download CV" },
    quickQuestions: [
      {
        id: "actualidad",
        question: "What is Javier doing right now?",
        answer:
          "Javier is currently actively looking for a job as a Full Stack developer or in roles related to Artificial Intelligence. In the meantime, he keeps growing his experience by building personal projects and other work, such as websites for clients (like [Kristalia](/proyectos#kristalia)). You can learn more about his work, skills and projects by exploring the [portfolio](/proyectos) and his [GitHub](https://github.com/roldaan04) profile.",
      },
      {
        id: "experiencia",
        question: "What professional experience does Javier have?",
        answer:
          "Javier has one year of professional experience as a Full Stack developer at Visioluxe, where he worked on two complete applications built with Angular, Node.js and MongoDB, covering both frontend and backend and developing REST APIs. You can find more details about these applications in the [Experience](/experiencia) section of his portfolio.\n\nAlthough his professional experience has focused mainly on these technologies, Javier also has hands-on experience with other languages and frameworks, such as Python, React, Java, Spring Boot and FastAPI, gained through his studies and personal projects.",
      },
      {
        id: "contacto",
        question: "How can I contact Javier?",
        answer: `You can contact Javier however you prefer:\n- **Email:** ${EMAIL_MD}\n- **Phone:** ${PHONE_MD}\n\nHe'll be happy to talk with you about job opportunities, hiring processes or projects.`,
      },
      {
        id: "disponibilidad",
        question: "When is he available?",
        answer: `Javier is **available immediately**. He's open to on-site, hybrid or remote work and is based in Madrid. If you'd like to talk with him, you can reach him by email (${EMAIL_MD}) or by phone (${PHONE_MD}).`,
      },
      {
        id: "freelance",
        question: "Does he take on freelance projects?",
        answer: `Absolutely! Javier is open to freelance collaborations and has experience working with external clients, such as [Kristalia](/proyectos#kristalia), a window cleaning company that trusted him to build its corporate website, with excellent results.\n\nThe services he can offer include:\n- **Web development:** complete, modern, mobile-friendly websites designed to win customers, with proper SEO.\n- **Application development:** custom software tailored to each company's needs.\n- **Process automation:** streamlining repetitive tasks to save time and boost productivity.\n- **Artificial Intelligence:** AI solutions adapted to your business needs.\n- **Technology consulting:** analysing your company's needs to spot opportunities for improvement and propose digital solutions.\n\nIf you have a project in mind or simply want to find out how technology can improve your business, get in touch with Javier, share your ideas and work out the best solution together.\n- **Email:** ${EMAIL_MD}\n- **Phone:** ${PHONE_MD}`,
      },
    ],
  },
};

export const content = { es, en };

/* Devuelve el contenido del idioma activo. */
export function useSite() {
  const { lang } = useLanguage()
  return content[lang] ?? content.es
}
