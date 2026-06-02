function ExperiencePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 pb-20 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Experiencia profesional
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Visioluxe · Getafe
        </h1>

        <p className="max-w-4xl text-lg leading-relaxed text-slate-300">
          En Visioluxe he trabajado en el desarrollo y evolución de soluciones
          web reales para la empresa, participando tanto en la plataforma pública
          BlackDisplay como en una aplicación interna completa para la gestión
          operativa del negocio.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              BlackDisplay
            </h2>

            <p className="mb-6 leading-relaxed text-slate-300">
              Plataforma web de alquiler audiovisual donde los usuarios pueden
              consultar productos, seleccionar fechas, comprobar disponibilidad,
              realizar reservas y gestionar pagos online.
            </p>

            <ul className="space-y-3 text-slate-300">
              <li>• Desarrollo frontend con Angular.</li>
              <li>• Backend con Node.js y Express.</li>
              <li>• Base de datos MongoDB.</li>
              <li>• Gestión de stock en tiempo real por fechas.</li>
              <li>• Panel de admin con todos los productos y sistema de reservas.</li>
              <li>• Integración de pasarela de pago.</li>
              <li>• Optimización SEO y estructura web.</li>
            </ul>

            <a
              href="https://blackdisplay.net"
              target="_blank"
              className="mt-8 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition"
            >
              Ver BlackDisplay
            </a>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              App interna de gestión
            </h2>

            <p className="mb-6 leading-relaxed text-slate-300">
              Aplicación interna para gestionar reservas, ventas, fabricación,
              stock, albaranes, devoluciones, documentación, firmas y procesos
              administrativos de la empresa.
            </p>

            <ul className="space-y-3 text-slate-300">
              <li>• Paneles internos de administración.</li>
              <li>• Gestión avanzada de reservas y ventas.</li>
              <li>• Control de stock y disponibilidad.</li>
              <li>• Base de datos extensa.</li>
              <li>• Automatización de procesos internos.</li>
              <li>• Control de acceso por roles con permisos diferenciados.</li>
              <li>• Generación automática de PDFs.</li>
              <li>• Lógica de negocio real y compleja.</li>
              <li>• Integración entre módulos de empresa.</li>
            </ul>
          </article>
        </div>

        <section className="mt-16 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Tecnologías y competencias adquiridas
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              'Angular',
              'Node.js',
              'Express',
              'MongoDB',
              'APIs REST',
              'Git',
              'Control de stock y fechas en tiempo real',
              'Pagos online',
              'PDFs (Puppeteer)',
              'Automatización',
              'Paneles internos',
              'Lógica de negocio',
              'Solución de errores'
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/40 bg-slate-950 px-4 py-2 text-sm text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default ExperiencePage