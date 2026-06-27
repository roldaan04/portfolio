import { Link } from "react-router-dom"
import SectionHeading from "../components/SectionHeading"
import { experience } from "../data/site"
import { ArrowRight, Briefcase, Check, MapPin, ArrowUpRight } from "../components/Icons"

/* Timeline de experiencia. `withCta` muestra el enlace a la página completa
   (Home); en la página de Experiencia se oculta. */
function Experience({ withCta = true, showHeading = true, compactTop = false }) {
  return (
    <section  id="experiencia"  className={`mx-auto max-w-7xl px-6 pb-20 sm:pb-24 ${compactTop ? "pt-4 sm:pt-6" : "pt-20 sm:pt-24"}`}>
      {showHeading && (
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Experiencia profesional"
            title="Experiencia real en producto de empresa"
            subtitle="No solo proyectos académicos: he desarrollado y mantenido aplicaciones completas en uso real, con lógica de negocio compleja."
          />
          {withCta && (
            <Link to="/experiencia" className="btn btn-ghost btn-sm shrink-0">
              Ver experiencia completa
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.4fr_1fr] lg:gap-12">
        {/* Cabecera de empresa */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="glass hairline-top p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
              <Briefcase className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-2xl font-bold text-white">
              {experience.company}
            </h3>
            <p className="mt-1 text-brand">{experience.roleLabel}</p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4" />
              {experience.locationLabel}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {experience.intro}
            </p>
          </div>
        </div>

        {/* Línea temporal con los dos productos */}
        <div className="relative space-y-6 border-l border-white/10 pl-7 sm:pl-9">
          {experience.cases.map((item) => (
            <article key={item.title} className="relative">
              {/* nodo */}
              <span className="absolute -left-[2.35rem] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-brand/40 bg-ink sm:-left-[2.85rem]">
                <span className="h-2 w-2 rounded-full bg-brand" />
              </span>

              <div className="glass glass-hover p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge badge-brand">{item.tag}</span>
                  {item.brand && (
                    <a
                      href={item.brandUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-slate-300 transition hover:text-brand"
                    >
                      {item.brand}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>

                <h4 className="mt-3 text-xl font-bold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>

                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lo que demuestra esta experiencia */}
      <div className="glass mt-8 p-6 sm:p-8">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          Lo que demuestra esta experiencia
        </h3>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {experience.proves.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
