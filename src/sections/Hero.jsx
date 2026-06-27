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
    <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 sm:pt-40 md:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Columna texto */}
        <div className="animate-rise text-center lg:text-left">
          <span className="badge badge-brand mx-auto lg:mx-0">
            <span className="status-dot" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">{hero.titleLead}</span>
            <span className="mt-2 block gradient-brand">{hero.titleHighlight}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300 lg:mx-0">
            {hero.subtitle}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-400 lg:mx-0">
            {hero.secondary}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
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
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <span className="ml-2 font-mono text-xs text-slate-500">
                javier.dev — perfil.js
              </span>
            </div>

            {/* Tarjeta de perfil */}
            <div className="rounded-[1.2rem] bg-ink-2/70 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-xl font-bold text-ink shadow-lg shadow-brand/30">
                  JR
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{profile.name}</p>
                  <p className="text-sm text-brand">{profile.role}</p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="status-dot" />
                    {profile.availability}
                  </p>
                </div>
              </div>

              {/* Mini bloque de código */}
              <div className="mt-5 rounded-xl border border-white/10 bg-ink/80 p-4 font-mono text-[13px] leading-relaxed">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="mr-4 select-none text-slate-600">{i + 1}</span>
                    <span className="whitespace-pre">
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
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { v: profile.experienceYears, l: "experiencia" },
                  { v: "Proyectos reales", l: "empresa + portfolio" },
                  { v: "Full Stack", l: "+ IA/Data" },
                ].map((m) => (
                  <div
                    key={m.l}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center"
                  >
                    <p className="text-[13px] font-bold leading-tight text-white">{m.v}</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">{m.l}</p>
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
