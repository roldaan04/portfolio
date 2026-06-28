import { Link } from "react-router-dom"
import { links } from "../data/site"
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

const techBadges = [
  "React",
  "Spring Boot",
  "Java",
  "MySQL",
  "JWT",
  "API REST",
  "API externa",
]

const heroFacts = [
  { label: "Tipo", value: "Aplicación full stack" },
  { label: "Frontend", value: "React" },
  { label: "Backend", value: "Spring Boot + Java" },
  { label: "Base de datos", value: "MySQL" },
  { label: "Autenticación", value: "JWT" },
]

const frontendFlow = [
  "React",
  "Services / HTTP",
  "Spring Boot · API REST",
  "JPA / Hibernate",
  "MySQL",
]

const externalFlow = ["React", "API externa de películas", "Datos de películas"]

const backendPoints = [
  "API REST",
  "Controladores",
  "Servicios",
  "Repositorios",
  "Modelos",
  "JWT",
  "Validaciones",
  "JPA / Hibernate",
  "MySQL",
]

const proofs = [
  { icon: Layers, title: "Full stack completo", text: "Frontend, backend, base de datos y servicios externos integrados." },
  { icon: Code, title: "React reutilizable", text: "Componentes y rutas públicas y privadas en el frontend." },
  { icon: Server, title: "API REST con Spring Boot", text: "Estructura por capas: controladores, servicios y repositorios." },
  { icon: Database, title: "Persistencia en MySQL", text: "Relaciones entre usuarios, películas, favoritos y críticas." },
  { icon: Target, title: "Autenticación JWT", text: "Sesión de usuario y rutas protegidas en cliente y servidor." },
  { icon: Cloud, title: "Consumo de API externa", text: "Información de películas obtenida desde una API de cine." },
  { icon: Workflow, title: "Relaciones usuario-película", text: "Favoritos, críticas y recomendaciones conectadas al usuario." },
  { icon: Check, title: "Arquitectura desacoplada", text: "Modelo cliente-servidor claro y mantenible." },
]

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
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-28 sm:pt-36">
      {/* Volver */}
      <Link
        to="/proyectos"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-brand"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
        Volver a proyectos
      </Link>

      {/* 1 · HERO */}
      <section className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <span className="eyebrow">Proyecto Full Stack · TFG DAW</span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            <span className="gradient-brand">FilMe</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Aplicación web de cine tipo red social: los usuarios exploran
            películas, gestionan favoritos, publican críticas, hacen
            recomendaciones y consultan perfiles, dentro de una experiencia
            conectada con APIs externas.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {techBadges.map((t) => (
              <span key={t} className="badge badge-brand">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Tarjeta resumen */}
        <div className="glass hairline-top p-6 sm:p-7">
          <div className="flex items-center gap-2 text-sm font-medium text-accent">
            <span className="status-dot" />
            Aplicación full stack real
          </div>
          <dl className="mt-5 space-y-4">
            {heroFacts.map((f) => (
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
            Qué problema resuelve
          </span>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
            FilMe unifica en una sola aplicación la exploración de películas, la
            gestión de favoritos, las críticas, las recomendaciones y los perfiles
            de usuario. En lugar de depender de varias plataformas separadas, el
            usuario consulta información de películas e interactúa con otros
            perfiles desde un mismo sitio.
          </p>
        </div>
      </section>

      {/* Bloques con imágenes */}
      <div className="mt-20 space-y-20 sm:mt-24 sm:space-y-24">
        {/* 3 · Portal FilMe */}
        <FeatureRow
          index="1"
          eyebrow="Zona social"
          title="Portal FilMe: perfiles y actividad"
          image={portalFilmeImg}
          alt="Portal FilMe mostrando el perfil público de un usuario con sus películas"
          caption="Perfil público dentro del Portal FilMe"
        >
          <p>
            El Portal FilMe funciona como la zona social de la aplicación. Permite
            consultar el perfil de un usuario y ver su actividad cinéfila, creando
            una experiencia parecida a una red social orientada al cine.
          </p>
          <KeyPoints
            items={[
              "Perfil público de usuario",
              "Películas favoritas",
              "Críticas realizadas",
              "Recomendaciones",
              "Imagen de perfil",
              "Experiencia social",
            ]}
          />
        </FeatureRow>

        {/* 4 · Populares */}
        <FeatureRow
          index="2"
          eyebrow="Catálogo"
          title="Explorar películas populares"
          image={popularesImg}
          alt="Listado de películas populares en FilMe con tarjetas visuales"
          caption="Catálogo de populares con datos de API externa"
          reverse
        >
          <p>
            La sección de populares muestra un grid de películas obtenidas desde
            una API externa. El usuario explora el catálogo, busca títulos y accede
            a la página de detalle de cada película.
          </p>
          <KeyPoints
            items={[
              "Grid de películas",
              "Datos desde API externa",
              "Buscador de títulos",
              "Cards visuales",
              "Navegación a detalle",
            ]}
          />
        </FeatureRow>

        {/* 5 · Mi lista */}
        <FeatureRow
          index="3"
          eyebrow="Favoritos"
          title="Mi lista: favoritos del usuario"
          image={miListaImg}
          alt="Lista personal de películas favoritas de un usuario en FilMe"
          caption="Lista personal de favoritos"
        >
          <p>
            Cada usuario guarda películas en su lista personal de favoritos. Esta
            funcionalidad conecta frontend, backend y base de datos, creando una
            relación entre el usuario autenticado y la película seleccionada.
          </p>
          <KeyPoints
            items={[
              "Lista personal del usuario",
              "Relación usuario-película",
              "Persistencia en base de datos",
              "Añadir y eliminar favoritos",
              "Sesión autenticada",
            ]}
          />
        </FeatureRow>

        {/* 6 · Detalle */}
        <FeatureRow
          index="4"
          eyebrow="Pantalla principal"
          title="Detalle de película e interacción"
          image={detallesImg}
          alt="Página de detalle de una película en FilMe con sus acciones"
          caption="Detalle de película con acciones del usuario"
          reverse
        >
          <p>
            La página de detalle concentra la información principal de cada película
            y permite interactuar con ella: añadirla a favoritos, recomendarla o
            escribir una crítica. Combina datos externos con acciones propias de la
            aplicación.
          </p>
          <KeyPoints
            items={[
              "Información de película",
              "Datos desde API externa",
              "Añadir a favoritos",
              "Recomendar película",
              "Crear crítica",
              "Acciones conectadas al backend",
            ]}
          />
        </FeatureRow>

        {/* 7 · Crítica */}
        <FeatureRow
          index="5"
          eyebrow="Reseñas"
          title="Críticas y valoraciones"
          image={criticaImg}
          alt="Formulario de crítica y valoración de una película en FilMe"
          caption="Crítica y valoración de una película"
        >
          <p>
            Los usuarios escriben críticas y valoran películas. Estas críticas se
            almacenan en la base de datos y se muestran después en el perfil del
            usuario, reforzando la parte social de la aplicación.
          </p>
          <KeyPoints
            items={[
              "Formulario de crítica",
              "Puntuación y comentario",
              "Relación usuario-película",
              "Persistencia en MySQL",
              "Visualización en el perfil",
            ]}
          />
        </FeatureRow>

        {/* 8 · Arquitectura */}
        <section>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-sm font-bold text-brand">
              6
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              Arquitectura
            </span>
          </div>
          <h2 className="mt-4 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
            Cliente-servidor desacoplado, con API propia y externa
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            El frontend en React consume tanto la API propia desarrollada con
            Spring Boot como una API externa de películas. El backend gestiona
            usuarios, autenticación, favoritos, críticas y recomendaciones,
            persistiendo la información en MySQL mediante JPA/Hibernate.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <FlowCard title="Flujo de la aplicación" steps={frontendFlow} />
            <FlowCard title="Flujo de la API externa" steps={externalFlow} />
          </div>
        </section>

        {/* 9 · Backend y seguridad */}
        <section className="glass p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
              <Server className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Backend con Spring Boot y seguridad JWT
            </h2>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            El backend sigue una estructura por capas: controladores, servicios,
            repositorios y modelos. Expone endpoints REST para registro, login,
            perfil, favoritos, críticas y recomendaciones. La autenticación se
            gestiona con JWT, habilitando rutas protegidas y sesión de usuario.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {backendPoints.map((p) => (
              <span key={p} className="badge">
                {p}
              </span>
            ))}
          </div>
        </section>

        {/* 10 · Qué demuestra */}
        <section>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow is-centered">Qué demuestra este proyecto</span>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Una aplicación full stack real, de principio a fin
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              FilMe conecta frontend, backend, base de datos y servicios externos,
              con autenticación, rutas protegidas, relaciones entre entidades y una
              interfaz orientada a usuario final.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {proofs.map((p) => {
              const Icon = p.icon
              return (
                <article key={p.title} className="glass glass-hover p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{p.text}</p>
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
                ¿Quieres ver más sobre mi perfil?
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                FilMe es uno de mis proyectos full stack. Hablemos sobre cómo puedo
                aportar a tu equipo.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/proyectos" className="btn btn-ghost shrink-0">
                <ArrowRight className="h-4 w-4 rotate-180" />
                Volver
              </Link>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost shrink-0"
              >
                <Github className="h-4 w-4" />
                Repositorio
              </a>
              <a
                href={links.gmail}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary shrink-0"
              >
                <Mail className="h-4 w-4" />
                Contactar
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default FilmeProjectPage
