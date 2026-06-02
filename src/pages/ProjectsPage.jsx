const projects = [
  {
    title: 'FilmMe',
    type: 'TFG · Aplicación web de cine',
    description:
      'Aplicación web donde los usuarios pueden gestionar favoritos, críticas, recomendaciones, amigos y consultar información de películas mediante una API externa.',
    tech: ['React', 'Spring Boot', 'Java', 'MySQL', 'JWT', 'API externa'],
  },
  {
    title: 'TFM AWS · Predictive Maintenance',
    type: 'Proyecto Cloud · Big Data · Machine Learning',
    description:
        'Sistema cloud de mantenimiento predictivo que analiza datos de telemetría industrial para predecir si un motor puede fallar. El objetivo es detectar riesgo de fallo de forma anticipada y mostrar los resultados para facilitar la toma de decisiones.',
    tech: [
        'AWS',
        'Python',
        'Machine Learning',
        'S3',
        'Lambda',
        'Kinesis',
        'DynamoDB',
        'Step Functions',
        'ETL',
        'Pipelines de datos',
    ],
  },
  {
    title: 'Control Admin · tuadministrativo.com',
    type: 'Aplicación para pymes y autónomos',
    description:
        'Aplicación web de gestión empresarial orientada a pymes y autónomos que permite centralizar gastos, ingresos y documentación de una empresa. El usuario puede subir PDFs, documentos, imágenes o introducir movimientos manualmente, y el sistema procesa la información mediante Python e integración con un modelo de IA (LLM) externo para extraer datos relevantes, clasificarlos y generar un dashboard con una visión clara del estado del negocio.',
    tech: [
        'Angular',
        'Python',
        'FastAPI',
        'APIs REST',
        'Integración de IA',
        'LLM externo',
        'Procesamiento de documentos',
        'Extracción de datos',
        'Dashboards',
        'Gestión empresarial',
        'Automatización',
        'Análisis financiero',
    ],
  },
]

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 pb-20 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Proyectos
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Proyectos que demuestran lo que sé hacer
        </h1>

        <p className="mb-12 max-w-4xl text-lg leading-relaxed text-slate-300">
          Una selección de proyectos reales y académicos donde he trabajado con
          frontend, backend, bases de datos, cloud, automatización y lógica de
          negocio aplicada.
        </p>

        <div className="grid gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/50"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {project.type}
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                {project.title}
              </h2>

              <p className="mb-6 max-w-4xl leading-relaxed text-slate-300">
                {project.description}
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950 hover:bg-cyan-300 transition"
                >
                  Ver detalles
                </a>

                <a
                  href="#"
                  className="rounded-full border border-slate-600 px-5 py-2 font-semibold text-white hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  Repositorio
                </a>

                <a
                  href="#"
                  className="rounded-full border border-slate-600 px-5 py-2 font-semibold text-white hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage