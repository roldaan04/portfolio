function HomePage() {
  const formaciones = [
    {
      titulo: 'DAW · Desarrollo de Aplicaciones Web',
      descripcion:
        'Formación centrada en el desarrollo de aplicaciones web, programación, bases de datos, frontend, backend y arquitectura web.',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Java',
        'Spring Boot',
        'SQL',
        'React',
        'APIs REST',
        'Frontend',
        'Backend',
      ],
    },
    {
      titulo: 'Máster / Especialización en IA y Big Data',
      descripcion:
        'Formación orientada al procesamiento de datos, cloud, machine learning, pipelines y tecnologías Big Data.',
      skills: [
        'Python',
        'PySpark',
        'SQL',
        'Hive',
        'PrestoDB',
        'Docker',
        'AWS',
        'Pipelines',
        'Machine Learning',
        'Procesamiento de datos',
        'LLMs',
        'Agentes de IA',
      ],
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Fondo: degradado sutil + blobs difuminados */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950 to-slate-900" />
        <div className="absolute -top-40 left-1/2 h-144 w-xl -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 pt-36 pb-20 text-center md:pt-44">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Full Stack Developer
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-7xl">
          Hola, soy Javier.
          <span className="mt-2 block bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Desarrollador Full Stack.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
          Soy desarrollador con experiencia práctica creando aplicaciones
          completas. Trabajo con frontend, backend, bases de datos, APIs REST,
          automatización de procesos y soluciones orientadas a resolver
          problemas reales de negocio.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
          Actualmente busco una oportunidad profesional donde seguir creciendo
          como desarrollador, aportar mi experiencia en proyectos reales y
          continuar especializándome en desarrollo full-stack, cloud y datos.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            target="_blank"
            className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-300"
          >
            LinkedIn
          </a>

          <a
            href="#"
            target="_blank"
            className="rounded-full border border-slate-600 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="/cv/CV-David.pdf"
            className="rounded-full border border-slate-600 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            download
          >
            Descargar CV
          </a>
        </div>
      </section>

      {/* ESTUDIOS */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Formación</h2>
          <p className="mt-3 text-slate-400">
            Mi recorrido académico y las tecnologías que domino.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {formaciones.map((formacion) => (
            <article
              key={formacion.titulo}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl shadow-black/20 backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-cyan-500/10 md:p-9"
            >
              <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
                {formacion.titulo}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-slate-300 md:text-base">
                {formacion.descripcion}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {formacion.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
