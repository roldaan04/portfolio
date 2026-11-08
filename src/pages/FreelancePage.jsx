import { Link } from "react-router-dom"
import SectionHeading from "../components/SectionHeading"
import { ProjectCard } from "../sections/Projects"
import { useSite } from "../data/site"
import { iconMap } from "../components/iconMap"
import { ArrowRight, Mail } from "../components/Icons"

/* Página para clientes freelance. Ninguna parte de la web enlaza aquí:
   la URL /freelance se comparte directamente con quien interese. */
function FreelancePage() {
  const { freelance: f, projects, links } = useSite()
  const kristalia = projects.find((p) => p.id === "kristalia")
  const examples = [kristalia, ...f.projects].filter(Boolean)

  return (
    <main>
      {/* Presentación */}
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-12 sm:pt-36 lg:pt-40">
        <div className="animate-rise max-w-3xl">
          <span className="badge badge-brand max-w-full">
            <span className="status-dot shrink-0" />
            {f.eyebrow}
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-[1.12] tracking-tight xs:text-4xl sm:text-5xl sm:leading-[1.08]">
            <span className="gradient-text">{f.titleLead}</span>
            <span className="mt-2 block gradient-brand">{f.titleHighlight}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {f.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={links.gmailFreelance} target="_blank" rel="noreferrer" className="btn btn-primary">
              <Mail className="h-4 w-4" />
              {f.ctaPrimary}
            </a>
            <Link to="/proyectos" className="btn btn-ghost">
              {f.ctaSecondary}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Qué hago, muy breve */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {f.services.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <div key={s.title} className="glass p-5">
                {Icon && <Icon className="h-5 w-5 text-brand" />}
                <p className="mt-3 text-sm font-semibold text-white">{s.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Ejemplos */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow={f.examplesEyebrow}
          title={f.examplesTitle}
          subtitle={f.examplesSubtitle}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {examples.map((project) => (
            <ProjectCard key={project.id} project={project} detailed />
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass hairline-top flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-white">{f.finalTitle}</h2>
            <p className="mt-2 text-sm text-slate-400">{f.finalText}</p>
          </div>
          <a href={links.gmailFreelance} target="_blank" rel="noreferrer" className="btn btn-primary shrink-0">
            <Mail className="h-4 w-4" />
            {f.finalCta}
          </a>
        </div>
      </section>
    </main>
  )
}

export default FreelancePage
