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

import { useLanguage } from "../i18n/context"

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
  ],

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
      title: "Master's · AI and Big Data",
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
};

export const content = { es, en };

/* Devuelve el contenido del idioma activo. */
export function useSite() {
  const { lang } = useLanguage()
  return content[lang] ?? content.es
}
