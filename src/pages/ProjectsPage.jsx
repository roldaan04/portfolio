import Projects from "../sections/Projects"
import { useSite } from "../data/site"
import { useT } from "../i18n/context"
import { Mail } from "../components/Icons"

const copy = {
  es: {
    ctaTitle: "¿Encaja mi perfil con lo que buscáis?",
    ctaText:
      "Estoy abierto a nuevas oportunidades como Full Stack Developer y preparado para aportar en proyectos reales.",
    contact: "Contactar",
  },
  en: {
    ctaTitle: "Does my profile fit what you're looking for?",
    ctaText:
      "I'm open to new opportunities as a Full Stack Developer and ready to contribute to real projects.",
    contact: "Contact",
  },
}

function ProjectsPage() {
  const { projects, links } = useSite()
  const t = useT(copy)
  return (
    <main>
      {/* Todos los proyectos en versión detallada */}
      <Projects items={projects} detailed withCta={false} />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass hairline-top flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-white">
              {t.ctaTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              {t.ctaText}
            </p>
          </div>

          <a href={links.gmail} target="_blank" rel="noreferrer" className="btn btn-primary shrink-0">
            <Mail className="h-4 w-4" />
            {t.contact}
          </a>
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage