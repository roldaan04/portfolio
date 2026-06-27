import { Link } from "react-router-dom"
import SectionHeading from "../components/SectionHeading"
import { projects as allProjects } from "../data/site"
import { ArrowRight, ArrowUpRight, Github, Folder } from "../components/Icons"

const accentStyles = {
  brand: { glow: "from-brand/30", text: "text-brand", dot: "bg-brand", bar: "bg-brand/70" },
  "brand-2": { glow: "from-brand-2/30", text: "text-brand-2", dot: "bg-brand-2", bar: "bg-brand-2/70" },
  accent: { glow: "from-accent/30", text: "text-accent", dot: "bg-accent", bar: "bg-accent/70" },
}

/* Enlace que usa Link (router) para rutas internas y <a> para externas. */
function SmartLink({ href, className, children }) {
  if (!href) return null
  const internal = href.startsWith("/")
  if (internal) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  )
}

/* Mockup abstracto tipo ventana de app, tintado con el acento del proyecto. */
function ProjectMockup({ project, a }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-2/80">
      <div
        className={`pointer-events-none absolute -top-16 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-b ${a.glow} to-transparent blur-2xl`}
      />
      {/* barra de ventana */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className={`ml-2 font-mono text-[11px] ${a.text}`}>
          {project.id}.app
        </span>
      </div>
      {/* contenido abstracto */}
      <div className="flex gap-3 p-4">
        <div className="hidden w-1/4 shrink-0 space-y-2 sm:block">
          <div className="h-2 w-full rounded-full bg-white/10" />
          <div className="h-2 w-3/4 rounded-full bg-white/10" />
          <div className="h-2 w-5/6 rounded-full bg-white/10" />
          <div className={`h-2 w-2/3 rounded-full ${a.bar}`} />
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex gap-3">
            <div className="h-12 flex-1 rounded-lg border border-white/10 bg-white/[0.03]" />
            <div className="h-12 flex-1 rounded-lg border border-white/10 bg-white/[0.03]" />
            <div className={`h-12 flex-1 rounded-lg border border-white/10 bg-gradient-to-br ${a.glow} to-transparent`} />
          </div>
          <div className="h-16 rounded-lg border border-white/10 bg-white/[0.02]" />
          <div className="flex items-end gap-1.5">
            {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t ${i % 2 ? a.bar : "bg-white/10"}`}
                style={{ height: `${h * 0.4}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, detailed }) {
  const a = accentStyles[project.accent] || accentStyles.brand
  const { links } = project

  return (
    <article className="glass glass-hover flex h-full flex-col p-5 sm:p-6">
      <ProjectMockup project={project} a={a} />

      <div className="mt-6 flex flex-1 flex-col">
        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${a.text}`}>
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {project.summary}
        </p>

        {detailed && (
          <div className="mt-5 space-y-4 border-t border-white/5 pt-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Problema que resuelve
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Qué hice
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                {project.contribution}
              </p>
            </div>
            <div className={`rounded-xl border border-white/10 bg-white/[0.03] p-4`}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Qué demuestra
              </p>
              <p className={`mt-1.5 text-sm leading-relaxed ${a.text}`}>
                {project.proves}
              </p>
            </div>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5 pt-1">
          <SmartLink href={links.details} className="btn btn-primary btn-sm">
            Ver detalles
            <ArrowUpRight className="h-4 w-4" />
          </SmartLink>
          {links.repo && (
            <SmartLink href={links.repo} className="btn btn-ghost btn-sm">
              <Github className="h-4 w-4" />
              Repositorio
            </SmartLink>
          )}
          {links.demo && (
            <SmartLink href={links.demo} className="btn btn-ghost btn-sm">
              <Folder className="h-4 w-4" />
              Demo
            </SmartLink>
          )}
        </div>
      </div>
    </article>
  )
}

/* Sección de proyectos. `detailed` expande cada caso; `withCta` muestra el
   enlace a la página completa (en la Home). */
function Projects({ items = allProjects, detailed = false, withCta = true }) {
  return (
    <section id="proyectos" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Proyectos"
          title="Casos que demuestran lo que sé hacer"
          subtitle="Una selección de proyectos reales y académicos: frontend, backend, bases de datos, cloud, IA y lógica de negocio aplicada."
        />
        {withCta && (
          <Link to="/proyectos" className="btn btn-ghost btn-sm shrink-0">
            Ver todos los proyectos
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className={`mt-12 grid gap-6 ${detailed ? "lg:grid-cols-2" : "md:grid-cols-2"}`}>
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} detailed={detailed} />
        ))}
      </div>
    </section>
  )
}

export default Projects
