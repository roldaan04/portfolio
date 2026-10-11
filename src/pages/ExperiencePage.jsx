import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import Experience from "../sections/Experience"
import { ArrowRight } from "../components/Icons"
import { useT } from "../i18n/context"

const copy = {
  es: {
    eyebrow: "Experiencia profesional",
    ctaTitle: "¿Quieres ver cómo lo aplico en proyectos?",
    ctaText: "Echa un vistazo a los casos donde pongo en práctica estas capacidades.",
    viewProjects: "Ver proyectos",
  },
  en: {
    eyebrow: "Professional experience",
    ctaTitle: "Want to see how I apply this in projects?",
    ctaText: "Take a look at the work where I put these skills into practice.",
    viewProjects: "View projects",
  },
}

function ExperiencePage() {
  const t = useT(copy)
  return (
    <main>
      <PageHero eyebrow={t.eyebrow} />
      {/* Timeline detallado (sin su propia cabecera, ya la da PageHero) */}
      <Experience showHeading={false} compactTop />

      {/* CTA de cierre hacia proyectos / contacto */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-white">
              {t.ctaTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              {t.ctaText}
            </p>
          </div>
          <Link to="/proyectos" className="btn btn-primary shrink-0">
            {t.viewProjects}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ExperiencePage
