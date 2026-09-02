import { contact, links, profile } from "../data/site"
import { Mail, Linkedin, Github, Download } from "../components/Icons"

function  Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="glass hairline-top relative overflow-hidden p-6 sm:p-10 lg:p-12">
        {/* brillo decorativo */}
        <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-brand/15 blur-3xl sm:h-72 sm:w-72" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-brand-2/15 blur-3xl sm:h-72 sm:w-72" />

        <div className="relative grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          {/* CTA */}
          <div>
            <span className="eyebrow">Contacto</span>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-white xs:text-3xl sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {contact.text}
            </p>

            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
              <a href={links.gmail} target="_blank" rel="noreferrer"  className="btn btn-primary">
                <Mail className="h-4 w-4" />
                Enviar email
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a href={links.cv} download className="btn btn-ghost">
                <Download className="h-4 w-4" />
                Descargar CV
              </a>
            </div>
          </div>

          {/* Tarjeta lateral de estado */}
          <div className="self-start rounded-2xl border border-white/10 bg-ink-2/60 p-5 sm:p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-accent">
              <span className="status-dot" />
              {profile.availability}
            </div>

            <dl className="mt-5 space-y-4">
              {contact.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 border-b border-white/5 pb-4 last:border-0 last:pb-0 xs:flex-row xs:items-center xs:justify-between xs:gap-4"
                >
                  <dt className="shrink-0 text-sm text-slate-400">{fact.label}</dt>
                  <dd className="text-sm font-medium text-slate-100 xs:text-right">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
