import Projects from "../sections/Projects"
import { projects, links } from "../data/site"
import { Mail } from "../components/Icons"

function ProjectsPage() {
  return (
    <main>
      {/* Todos los proyectos en versión detallada */}
      <Projects items={projects} detailed withCta={false} />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass hairline-top flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-white">
              ¿Encaja mi perfil con lo que buscáis?
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Estoy abierto a nuevas oportunidades como Full Stack Developer y preparado para aportar en proyectos reales.
            </p>
          </div>

          <a href={links.gmail} target="_blank" rel="noreferrer" className="btn btn-primary shrink-0">
            <Mail className="h-4 w-4" />
            Contactar
          </a>
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage