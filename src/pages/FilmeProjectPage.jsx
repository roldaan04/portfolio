import { Link } from "react-router-dom"
import { useSite } from "../data/site"
import { useT } from "../i18n/context"
import {
  ArrowRight,
  Mail,
  Github,
  Code,
  Server,
  Database,
  Cloud,
  Workflow,
  Layers,
  Target,
  Check,
} from "../components/Icons"

import portalFilmeImg from "../assets/images/filmMe/PortalFilMe.png"
import popularesImg from "../assets/images/filmMe/Populares.png"
import miListaImg from "../assets/images/filmMe/MiLista.png"
import detallesImg from "../assets/images/filmMe/Detalles.png"
import criticaImg from "../assets/images/filmMe/Critica.png"

const REPO_URL = "https://github.com/Laiton10/TFG/tree/master"

/* ------------------------------------------------------------------ */
/* Datos de la página                                                 */
/* ------------------------------------------------------------------ */

const proofIcons = [Layers, Code, Server, Database, Target, Cloud, Workflow, Check]

const copy = {
  es: {
    back: "Volver a proyectos",
    eyebrow: "Proyecto Full Stack · TFG DAW",
    intro:
      "Aplicación web de cine tipo red social: los usuarios exploran películas, gestionan favoritos, publican críticas, hacen recomendaciones y consultan perfiles, dentro de una experiencia conectada con APIs externas.",
    techBadges: ["React", "Spring Boot", "Java", "MySQL", "JWT", "API REST", "API externa"],
    status: "Aplicación full stack real",
    heroFacts: [
      { label: "Tipo", value: "Aplicación full stack" },
      { label: "Frontend", value: "React" },
      { label: "Backend", value: "Spring Boot + Java" },
      { label: "Base de datos", value: "MySQL" },
      { label: "Autenticación", value: "JWT" },
    ],
    problem: {
      eyebrow: "Qué problema resuelve",
      text: "FilMe unifica en una sola aplicación la exploración de películas, la gestión de favoritos, las críticas, las recomendaciones y los perfiles de usuario. En lugar de depender de varias plataformas separadas, el usuario consulta información de películas e interactúa con otros perfiles desde un mismo sitio.",
    },
    portal: {
      eyebrow: "Zona social",
      title: "Portal FilMe: perfiles y actividad",
      alt: "Portal FilMe mostrando el perfil público de un usuario con sus películas",
      caption: "Perfil público dentro del Portal FilMe",
      text: "El Portal FilMe funciona como la zona social de la aplicación. Permite consultar el perfil de un usuario y ver su actividad cinéfila, creando una experiencia parecida a una red social orientada al cine.",
      items: [
        "Perfil público de usuario",
        "Películas favoritas",
        "Críticas realizadas",
        "Recomendaciones",
        "Imagen de perfil",
        "Experiencia social",
      ],
    },
    popular: {
      eyebrow: "Catálogo",
      title: "Explorar películas populares",
      alt: "Listado de películas populares en FilMe con tarjetas visuales",
      caption: "Catálogo de populares con datos de API externa",
      text: "La sección de populares muestra un grid de películas obtenidas desde una API externa. El usuario explora el catálogo, busca títulos y accede a la página de detalle de cada película.",
      items: [
        "Grid de películas",
        "Datos desde API externa",
        "Buscador de títulos",
        "Cards visuales",
        "Navegación a detalle",
      ],
    },
    myList: {
      eyebrow: "Favoritos",
      title: "Mi lista: favoritos del usuario",
      alt: "Lista personal de películas favoritas de un usuario en FilMe",
      caption: "Lista personal de favoritos",
      text: "Cada usuario guarda películas en su lista personal de favoritos. Esta funcionalidad conecta frontend, backend y base de datos, creando una relación entre el usuario autenticado y la película seleccionada.",
      items: [
        "Lista personal del usuario",
        "Relación usuario-película",
        "Persistencia en base de datos",
        "Añadir y eliminar favoritos",
        "Sesión autenticada",
      ],
    },
    detail: {
      eyebrow: "Pantalla principal",
      title: "Detalle de película e interacción",
      alt: "Página de detalle de una película en FilMe con sus acciones",
      caption: "Detalle de película con acciones del usuario",
      text: "La página de detalle concentra la información principal de cada película y permite interactuar con ella: añadirla a favoritos, recomendarla o escribir una crítica. Combina datos externos con acciones propias de la aplicación.",
      items: [
        "Información de película",
        "Datos desde API externa",
        "Añadir a favoritos",
        "Recomendar película",
        "Crear crítica",
        "Acciones conectadas al backend",
      ],
    },
    review: {
      eyebrow: "Reseñas",
      title: "Críticas y valoraciones",
      alt: "Formulario de crítica y valoración de una película en FilMe",
      caption: "Crítica y valoración de una película",
      text: "Los usuarios escriben críticas y valoran películas. Estas críticas se almacenan en la base de datos y se muestran después en el perfil del usuario, reforzando la parte social de la aplicación.",
      items: [
        "Formulario de crítica",
        "Puntuación y comentario",
        "Relación usuario-película",
        "Persistencia en MySQL",
        "Visualización en el perfil",
      ],
    },
    architecture: {
      eyebrow: "Arquitectura",
      title: "Cliente-servidor desacoplado, con API propia y externa",
      text: "El frontend en React consume tanto la API propia desarrollada con Spring Boot como una API externa de películas. El backend gestiona usuarios, autenticación, favoritos, críticas y recomendaciones, persistiendo la información en MySQL mediante JPA/Hibernate.",
      appFlowTitle: "Flujo de la aplicación",
      appFlow: ["React", "Services / HTTP", "Spring Boot · API REST", "JPA / Hibernate", "MySQL"],
      externalFlowTitle: "Flujo de la API externa",
      externalFlow: ["React", "API externa de películas", "Datos de películas"],
    },
    backend: {
      title: "Backend con Spring Boot y seguridad JWT",
      text: "El backend sigue una estructura por capas: controladores, servicios, repositorios y modelos. Expone endpoints REST para registro, login, perfil, favoritos, críticas y recomendaciones. La autenticación se gestiona con JWT, habilitando rutas protegidas y sesión de usuario.",
      points: [
        "API REST",
        "Controladores",
        "Servicios",
        "Repositorios",
        "Modelos",
        "JWT",
        "Validaciones",
        "JPA / Hibernate",
        "MySQL",
      ],
    },
    proves: {
      eyebrow: "Qué demuestra este proyecto",
      title: "Una aplicación full stack real, de principio a fin",
      text: "FilMe conecta frontend, backend, base de datos y servicios externos, con autenticación, rutas protegidas, relaciones entre entidades y una interfaz orientada a usuario final.",
      items: [
        { title: "Full stack completo", text: "Frontend, backend, base de datos y servicios externos integrados." },
        { title: "React reutilizable", text: "Componentes y rutas públicas y privadas en el frontend." },
        { title: "API REST con Spring Boot", text: "Estructura por capas: controladores, servicios y repositorios." },
        { title: "Persistencia en MySQL", text: "Relaciones entre usuarios, películas, favoritos y críticas." },
        { title: "Autenticación JWT", text: "Sesión de usuario y rutas protegidas en cliente y servidor." },
        { title: "Consumo de API externa", text: "Información de películas obtenida desde una API de cine." },
        { title: "Relaciones usuario-película", text: "Favoritos, críticas y recomendaciones conectadas al usuario." },
        { title: "Arquitectura desacoplada", text: "Modelo cliente-servidor claro y mantenible." },
      ],
    },
    cta: {
      title: "¿Quieres ver más sobre mi perfil?",
      text: "FilMe es uno de mis proyectos full stack. Hablemos sobre cómo puedo aportar a tu equipo.",
      back: "Volver",
      repo: "Repositorio",
      contact: "Contactar",
    },
  },
  en: {
    back: "Back to projects",
    eyebrow: "Full Stack project · Final degree project (DAW)",
    intro:
      "Social-network-style movie web app: users explore films, manage favourites, post reviews, make recommendations and browse profiles, in an experience connected to external APIs.",
    techBadges: ["React", "Spring Boot", "Java", "MySQL", "JWT", "REST API", "External API"],
    status: "Real full stack application",
    heroFacts: [
      { label: "Type", value: "Full stack application" },
      { label: "Frontend", value: "React" },
      { label: "Backend", value: "Spring Boot + Java" },
      { label: "Database", value: "MySQL" },
      { label: "Authentication", value: "JWT" },
    ],
    problem: {
      eyebrow: "What problem it solves",
      text: "FilMe brings film discovery, favourites management, reviews, recommendations and user profiles together in a single application. Instead of relying on several separate platforms, users look up film information and interact with other profiles in one place.",
    },
    portal: {
      eyebrow: "Social area",
      title: "FilMe Portal: profiles and activity",
      alt: "FilMe Portal showing a user's public profile with their films",
      caption: "Public profile inside the FilMe Portal",
      text: "The FilMe Portal is the social area of the application. It lets you view a user's profile and see their film activity, creating an experience similar to a movie-focused social network.",
      items: [
        "Public user profile",
        "Favourite films",
        "Posted reviews",
        "Recommendations",
        "Profile picture",
        "Social experience",
      ],
    },
    popular: {
      eyebrow: "Catalogue",
      title: "Explore popular films",
      alt: "List of popular films in FilMe with visual cards",
      caption: "Popular catalogue with data from an external API",
      text: "The popular section shows a grid of films fetched from an external API. Users explore the catalogue, search for titles and open each film's detail page.",
      items: [
        "Film grid",
        "Data from external API",
        "Title search",
        "Visual cards",
        "Navigation to detail",
      ],
    },
    myList: {
      eyebrow: "Favourites",
      title: "My list: the user's favourites",
      alt: "A user's personal list of favourite films in FilMe",
      caption: "Personal favourites list",
      text: "Each user saves films to their personal favourites list. This feature connects frontend, backend and database, creating a relationship between the authenticated user and the selected film.",
      items: [
        "User's personal list",
        "User-film relationship",
        "Database persistence",
        "Add and remove favourites",
        "Authenticated session",
      ],
    },
    detail: {
      eyebrow: "Main screen",
      title: "Film detail and interaction",
      alt: "Film detail page in FilMe with its actions",
      caption: "Film detail with user actions",
      text: "The detail page brings together the key information for each film and lets users interact with it: add it to favourites, recommend it or write a review. It combines external data with the application's own actions.",
      items: [
        "Film information",
        "Data from external API",
        "Add to favourites",
        "Recommend film",
        "Write review",
        "Actions connected to the backend",
      ],
    },
    review: {
      eyebrow: "Reviews",
      title: "Reviews and ratings",
      alt: "Review and rating form for a film in FilMe",
      caption: "Review and rating of a film",
      text: "Users write reviews and rate films. These reviews are stored in the database and later shown on the user's profile, strengthening the social side of the application.",
      items: [
        "Review form",
        "Score and comment",
        "User-film relationship",
        "MySQL persistence",
        "Shown on the profile",
      ],
    },
    architecture: {
      eyebrow: "Architecture",
      title: "Decoupled client-server, with its own and an external API",
      text: "The React frontend consumes both the in-house API built with Spring Boot and an external movie API. The backend manages users, authentication, favourites, reviews and recommendations, persisting the information in MySQL via JPA/Hibernate.",
      appFlowTitle: "Application flow",
      appFlow: ["React", "Services / HTTP", "Spring Boot · REST API", "JPA / Hibernate", "MySQL"],
      externalFlowTitle: "External API flow",
      externalFlow: ["React", "External movie API", "Film data"],
    },
    backend: {
      title: "Spring Boot backend with JWT security",
      text: "The backend follows a layered structure: controllers, services, repositories and models. It exposes REST endpoints for sign-up, login, profile, favourites, reviews and recommendations. Authentication is handled with JWT, enabling protected routes and user sessions.",
      points: [
        "REST API",
        "Controllers",
        "Services",
        "Repositories",
        "Models",
        "JWT",
        "Validation",
        "JPA / Hibernate",
        "MySQL",
      ],
    },
    proves: {
      eyebrow: "What this project shows",
      title: "A real full stack application, from start to finish",
      text: "FilMe connects frontend, backend, database and external services, with authentication, protected routes, relationships between entities and an end-user-focused interface.",
      items: [
        { title: "Complete full stack", text: "Frontend, backend, database and external services integrated." },
        { title: "Reusable React", text: "Components and public and private routes on the frontend." },
        { title: "REST API with Spring Boot", text: "Layered structure: controllers, services and repositories." },
        { title: "MySQL persistence", text: "Relationships between users, films, favourites and reviews." },
        { title: "JWT authentication", text: "User session and protected routes on client and server." },
        { title: "External API consumption", text: "Film information fetched from a movie API." },
        { title: "User-film relationships", text: "Favourites, reviews and recommendations linked to the user." },
        { title: "Decoupled architecture", text: "Clear and maintainable client-server model." },
      ],
    },
    cta: {
      title: "Want to see more about my profile?",
      text: "FilMe is one of my full stack projects. Let's talk about how I can contribute to your team.",
      back: "Back",
      repo: "Repository",
      contact: "Contact",
    },
  },
}

/* ------------------------------------------------------------------ */
/* Componentes internos                                               */
/* ------------------------------------------------------------------ */

/* Imagen (captura de la app) dentro de una tarjeta glass con glow. */
function ImageCard({ src, alt, caption, className = "" }) {
  return (
    <figure className={`glass relative overflow-hidden p-2 ${className}`}>
      <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-2/70">
        <img src={src} alt={alt} loading="lazy" className="block w-full object-contain" />
      </div>
      {caption && (
        <figcaption className="px-2 pb-1 pt-3 text-center text-xs text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/* Bloque de sección: texto + imagen a dos columnas, alternable. */
function FeatureRow({ index, eyebrow, title, children, image, alt, caption, reverse }) {
  return (
    <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-sm font-bold text-brand">
            {index}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
            {eyebrow}
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          {children}
        </div>
      </div>

      <ImageCard
        src={image}
        alt={alt}
        caption={caption}
        className={reverse ? "lg:order-1" : ""}
      />
    </section>
  )
}

/* Lista de puntos clave con check. */
function KeyPoints({ items }) {
  return (
    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
          <Check className="h-4 w-4 shrink-0 text-brand" />
          {item}
        </li>
      ))}
    </ul>
  )
}

/* Flujo vertical de pasos conectados por flechas. */
function FlowCard({ title, steps }) {
  return (
    <div className="glass p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {title}
      </p>
      <div className="mt-5 flex flex-col">
        {steps.map((step, i) => (
          <div key={step}>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm font-medium text-slate-200">
              {step}
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1.5 text-slate-600">
                <ArrowRight className="h-4 w-4 rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Página                                                             */
/* ------------------------------------------------------------------ */

function FilmeProjectPage() {
  const { links } = useSite()
  const t = useT(copy)

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-28 sm:pt-36">
      {/* Volver */}
      <Link
        to="/proyectos"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-brand"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
        {t.back}
      </Link>

      {/* 1 · HERO */}
      <section className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            <span className="gradient-brand">FilMe</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            {t.intro}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {t.techBadges.map((b) => (
              <span key={b} className="badge badge-brand">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Tarjeta resumen */}
        <div className="glass hairline-top p-6 sm:p-7">
          <div className="flex items-center gap-2 text-sm font-medium text-accent">
            <span className="status-dot" />
            {t.status}
          </div>
          <dl className="mt-5 space-y-4">
            {t.heroFacts.map((f) => (
              <div
                key={f.label}
                className="flex items-center justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0"
              >
                <dt className="text-sm text-slate-400">{f.label}</dt>
                <dd className="text-right text-sm font-semibold text-slate-100">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2 · Problema */}
      <section className="mt-16 sm:mt-20">
        <div className="glass p-6 sm:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
            {t.problem.eyebrow}
          </span>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
            {t.problem.text}
          </p>
        </div>
      </section>

      {/* Bloques con imágenes */}
      <div className="mt-20 space-y-20 sm:mt-24 sm:space-y-24">
        {/* 3 · Portal FilMe */}
        <FeatureRow
          index="1"
          eyebrow={t.portal.eyebrow}
          title={t.portal.title}
          image={portalFilmeImg}
          alt={t.portal.alt}
          caption={t.portal.caption}
        >
          <p>{t.portal.text}</p>
          <KeyPoints items={t.portal.items} />
        </FeatureRow>

        {/* 4 · Populares */}
        <FeatureRow
          index="2"
          eyebrow={t.popular.eyebrow}
          title={t.popular.title}
          image={popularesImg}
          alt={t.popular.alt}
          caption={t.popular.caption}
          reverse
        >
          <p>{t.popular.text}</p>
          <KeyPoints items={t.popular.items} />
        </FeatureRow>

        {/* 5 · Mi lista */}
        <FeatureRow
          index="3"
          eyebrow={t.myList.eyebrow}
          title={t.myList.title}
          image={miListaImg}
          alt={t.myList.alt}
          caption={t.myList.caption}
        >
          <p>{t.myList.text}</p>
          <KeyPoints items={t.myList.items} />
        </FeatureRow>

        {/* 6 · Detalle */}
        <FeatureRow
          index="4"
          eyebrow={t.detail.eyebrow}
          title={t.detail.title}
          image={detallesImg}
          alt={t.detail.alt}
          caption={t.detail.caption}
          reverse
        >
          <p>{t.detail.text}</p>
          <KeyPoints items={t.detail.items} />
        </FeatureRow>

        {/* 7 · Crítica */}
        <FeatureRow
          index="5"
          eyebrow={t.review.eyebrow}
          title={t.review.title}
          image={criticaImg}
          alt={t.review.alt}
          caption={t.review.caption}
        >
          <p>{t.review.text}</p>
          <KeyPoints items={t.review.items} />
        </FeatureRow>

        {/* 8 · Arquitectura */}
        <section>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-sm font-bold text-brand">
              6
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              {t.architecture.eyebrow}
            </span>
          </div>
          <h2 className="mt-4 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
            {t.architecture.title}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {t.architecture.text}
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <FlowCard title={t.architecture.appFlowTitle} steps={t.architecture.appFlow} />
            <FlowCard title={t.architecture.externalFlowTitle} steps={t.architecture.externalFlow} />
          </div>
        </section>

        {/* 9 · Backend y seguridad */}
        <section className="glass p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
              <Server className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {t.backend.title}
            </h2>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {t.backend.text}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.backend.points.map((p) => (
              <span key={p} className="badge">
                {p}
              </span>
            ))}
          </div>
        </section>

        {/* 10 · Qué demuestra */}
        <section>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow is-centered">{t.proves.eyebrow}</span>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              {t.proves.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              {t.proves.text}
            </p>
          </div>

          {/* En móvil la rejilla se compacta: 2 columnas, tarjeta más pequeña y
              sin descripción, para no alargar la página. A partir de sm se
              muestra completa igual que en escritorio. */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
            {t.proves.items.map((p, i) => {
              const Icon = proofIcons[i]
              return (
                <article key={p.title} className="glass glass-hover p-4 sm:p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <h3 className="mt-3 text-[13px] font-semibold leading-snug break-words text-white sm:mt-4 sm:text-sm">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 hidden text-xs leading-relaxed text-slate-400 sm:block">
                    {p.text}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        {/* 11 · CTA final */}
        <section>
          <div className="glass hairline-top flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-white">
                {t.cta.title}
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                {t.cta.text}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/proyectos" className="btn btn-ghost shrink-0">
                <ArrowRight className="h-4 w-4 rotate-180" />
                {t.cta.back}
              </Link>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost shrink-0"
              >
                <Github className="h-4 w-4" />
                {t.cta.repo}
              </a>
              <a
                href={links.gmail}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary shrink-0"
              >
                <Mail className="h-4 w-4" />
                {t.cta.contact}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default FilmeProjectPage
