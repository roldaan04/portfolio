import { contact, links, profile } from "../data/site"
import { Mail, Linkedin, Github, Download } from "../components/Icons"

function  Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <div className="glass hairline-top relative overflow-hidden p-8 sm:p-12">
        {/* brillo decorativo */}
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-brand-2/15 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          {/* CTA */}
          <div>
            <span className="eyebrow">Contacto</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
              {contact.text}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
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
          <div className="self-start rounded-2xl border border-white/10 bg-ink-2/60 p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-accent">
              <span className="status-dot" />
              {profile.availability}
            </div>

            <dl className="mt-5 space-y-4">
              {contact.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-slate-400">{fact.label}</dt>
                  <dd className="text-right text-sm font-medium text-slate-100">
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
