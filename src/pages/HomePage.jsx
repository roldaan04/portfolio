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
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 pb-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Columna izquierda: presentación */}
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Full Stack Developer
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Hola, soy Javier.
              <span className="block text-slate-300">
                Desarrollador Full Stack.
              </span>
            </h1>

            <p className="text-lg leading-relaxed text-slate-300">
              Soy desarrollador con experiencia práctica creando aplicaciones
              completas. Trabajo con frontend, backend, bases de datos, APIs
              REST, automatización de procesos y soluciones orientadas a
              resolver problemas reales de negocio.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Actualmente busco una oportunidad profesional donde seguir
              creciendo como desarrollador, aportar mi experiencia en proyectos
              reales y continuar especializándome en desarrollo full-stack, cloud y
              datos.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                target="_blank"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                LinkedIn
              </a>

              <a
                href="#"
                target="_blank"
                className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="/cv/CV-David.pdf"
                className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                download
              >
                Descargar CV
              </a>
            </div>
          </div>

          {/* Columna derecha: formación */}
          <div className="grid gap-6">
            {formaciones.map((formacion) => (
              <article
                key={formacion.titulo}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.07] md:p-8"
              >
                <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">
                  {formacion.titulo}
                </h2>

                <p className="mb-5 text-sm leading-relaxed text-slate-300 md:text-base">
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
        </div>
      </section>
    </main>
  )
}

export default HomePage
