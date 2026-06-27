/* ============================================================
   Contenido centralizado del portfolio de Javier Roldán Gallego.
   Edita este archivo para actualizar la web entera.

   ⚠️ PLACEHOLDERS PENDIENTES (sustituir por los datos reales):
   - links.email     → email de contacto real
   - links.linkedin  → URL real de LinkedIn
   - links.github    → URL real de GitHub
   - links.cv        → ruta real del PDF del CV (colocar en /public/cv/)
   - projects[].repo / .demo / .details → enlaces reales de cada proyecto
   ============================================================ */

export const profile = {
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

// 🔧 Placeholders centralizados — cámbialos por los reales.
export const links = {
  email: "javirol2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/javier-rold%C3%A1n-gallego-desarrollador-full-stack-programador/",
  github: "https://github.com/roldaan04",
  cv: "src/assets/cv/JavierRoldanCV.pdf",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=javirol2005@gmail.com&su=Contacto%20portfolio%20Javier%20Rold%C3%A1n",
}

export const hero = {
  eyebrow: "Full Stack Developer · Open to work",
  titleLead: "Hola, soy Javier.",
  titleHighlight: "Desarrollador full stack junior.",
  subtitle:
    "Tengo experiencia práctica creando soluciones reales de frontend, backend, bases de datos, APIs REST, automatización, cloud e IA aplicada.",
  secondary:
    "Busco una oportunidad donde seguir creciendo como desarrollador, aportar desde el primer día y formar parte de un equipo técnico donde aprender, construir y asumir nuevos retos.",
};

export const about = {
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
};

export const stack = [
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
];

export const experience = {
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
};

export const projects = [
  {
    id: "filmme",
    category: "TFG · Aplicación web de cine",
    title: "FilmMe",
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
      details: "#",
      repo: "https://github.com/Laiton10/TFG",
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
      details: "#",
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
      details: "#",
      repo: null,
      //demo: "#",
    },
  },
  {
    id: "erp-visioluxe",
    category: "Caso real · Aplicación de empresa",
    title: "ERP interno · Visioluxe",
    summary:
      "Aplicación interna real para gestionar reservas, ventas, fabricación, stock, albaranes y documentación, con roles, permisos y generación de PDFs.",
    problem:
      "Unificar en una sola herramienta los procesos operativos y administrativos de la empresa, con control de acceso y trazabilidad.",
    contribution:
      "Desarrollo full stack de módulos de gestión, control de stock, automatización de procesos, generación automática de PDFs y sistema de roles/permisos.",
    proves:
      "Capacidad para modelar lógica de negocio compleja y entregar software de empresa en producción.",
    tech: [
      "Node.js",
      "MongoDB",
      "APIs REST",
      "Automatización",
      "PDFs",
      "Roles y permisos",
    ],
    accent: "brand",
    links: {
      details: "/experiencia",
      repo: null,
      //demo: null,
    },
  },
]

export const education = [
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
    title: "Máster · IA y Big Data",
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
];

export const contact = {
  title: "¿Buscas un desarrollador con ganas de crecer y aportar desde el primer día?",
  text: "Estoy abierto a nuevas oportunidades como desarrollador full stack junior. Puedes contactarme para entrevistas, procesos de selección o colaboraciones profesionales.",
  facts: [
    { label: "Ubicación", value: profile.location },
    { label: "Disponibilidad", value: profile.availability },
    { label: "Puesto", value: profile.roleTarget },
    { label: "Modalidad", value: profile.modality },
  ],
};
