import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import Experience from "../sections/Experience"
import { ArrowRight } from "../components/Icons"

function ExperiencePage() {
  return (
    <main>
      <PageHero
        eyebrow="Experiencia profesional"
      />
      {/* Timeline detallado (sin su propia cabecera, ya la da PageHero) */}
      <Experience showHeading={false} compactTop />

      {/* CTA de cierre hacia proyectos / contacto */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-white">
              ¿Quieres ver cómo lo aplico en proyectos?
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Echa un vistazo a los casos donde pongo en práctica estas
              capacidades.
            </p>
          </div>
          <Link to="/proyectos" className="btn btn-primary shrink-0">
            Ver proyectos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ExperiencePage
