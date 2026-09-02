import { Link } from "react-router-dom"
import { profile, links, hero } from "../data/site"
import { ArrowRight, Mail, Download } from "../components/Icons"

const codeLines = [
  { t: [{ c: "violet", v: "const" }, { c: "white", v: " javier" }, { c: "muted", v: " = {" }] },
  { t: [{ c: "muted", v: "  rol: " }, { c: "accent", v: "'Full Stack Developer'" }, { c: "muted", v: "," }] },
  {
    t: [
      { c: "muted", v: "  stack: [" },
      { c: "brand", v: "'Angular'" },
      { c: "muted", v: ", " },
      { c: "brand", v: "'React'" },
      { c: "muted", v: ", " },
      { c: "brand", v: "'Node'" },
      { c: "muted", v: ", " },
      { c: "brand", v: "'Java'" },
      { c: "muted", v: ", " },
      { c: "brand", v: "'Python'" },
      { c: "muted", v: ", " },
      { c: "brand", v: "'AWS'" },
      { c: "muted", v: "]," },
    ],
  },
  {
    t: [
      { c: "muted", v: "  openToWork: " },
      { c: "accent", v: "true" },
      { c: "muted", v: "," },
    ],
  },
  { t: [{ c: "muted", v: "}" }] },
]

const codeColor = {
  violet: "text-brand-2",
  white: "text-slate-100",
  muted: "text-slate-500",
  accent: "text-accent",
  brand: "text-brand",
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36 md:pb-24 lg:pt-40">
      <div className="grid items-center gap-12 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Columna texto */}
        <div className="animate-rise text-center lg:text-left">
          <span className="badge badge-brand mx-auto max-w-full text-center lg:mx-0">
            <span className="status-dot shrink-0" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-[1.12] tracking-tight xs:text-4xl sm:text-5xl sm:leading-[1.08] lg:text-6xl">
            <span className="gradient-text">{hero.titleLead}</span>
            <span className="mt-2 block gradient-brand">{hero.titleHighlight}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            {hero.subtitle}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base lg:mx-0">
            {hero.secondary}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-9 lg:justify-start">
            <Link to="/proyectos" className="btn btn-primary">
              Ver proyectos
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#contacto" className="btn btn-ghost">
              <Mail className="h-4 w-4" />
              Contactar
            </a>
            <a href={links.cv} download className="btn btn-ghost">
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </div>
        </div>

        {/* Columna visual */}
        <div className="animate-rise relative mx-auto w-full max-w-md lg:max-w-none">
          {/* halo */}
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/20 via-brand-2/10 to-transparent blur-2xl" />

          <div className="glass hairline-top overflow-hidden p-1.5">
            {/* Barra de ventana */}
            <div className="flex items-center gap-2 px-3 py-3 sm:px-4">
              <span className="h-3 w-3 shrink-0 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 shrink-0 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 shrink-0 rounded-full bg-green-400/70" />
              <span className="ml-2 truncate font-mono text-[11px] text-slate-500 sm:text-xs">
                javier.dev — perfil.js
              </span>
            </div>

            {/* Tarjeta de perfil */}
            <div className="rounded-[1.2rem] bg-ink-2/70 p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-lg font-bold text-ink shadow-lg shadow-brand/30 sm:h-16 sm:w-16 sm:text-xl">
                  JR
                </div>
                <div className="min-w-0">
                  <p className="text-base font-semibold text-white sm:text-lg">{profile.name}</p>
                  <p className="text-sm text-brand">{profile.role}</p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="status-dot shrink-0" />
                    {profile.availability}
                  </p>
                </div>
              </div>

              {/* Mini bloque de código */}
              <div className="mt-5 rounded-xl border border-white/10 bg-ink/80 p-3 font-mono text-[11px] leading-relaxed sm:p-4 sm:text-xs lg:text-[13px]">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex items-start">
                    <span className="mr-3 select-none text-slate-600 sm:mr-4">{i + 1}</span>
                    <span className="min-w-0 whitespace-pre-wrap break-words">
                      {line.t.map((tok, j) => (
                        <span key={j} className={codeColor[tok.c]}>
                          {tok.v}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mini métricas */}
              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { v: profile.experienceYears, l: "experiencia" },
                  { v: "Proyectos reales", l: "empresa + portfolio" },
                  { v: "Full Stack", l: "+ IA/Data" },
                ].map((m) => (
                  <div
                    key={m.l}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 text-center sm:px-3"
                  >
                    <p className="text-xs font-bold leading-tight text-white sm:text-[13px]">{m.v}</p>
                    <p className="mt-0.5 text-[10px] leading-tight text-slate-400 sm:text-[11px]">{m.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
