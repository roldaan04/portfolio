import { Routes, Route } from 'react-router-dom'

function HomePage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="max-w-4xl px-6 text-center">
        <p className="text-cyan-400 font-semibold mb-4">
          Full Stack Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hola, soy David
        </h1>

        <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
          Desarrollo aplicaciones web reales que resuelven problemas de negocio,
          combinando frontend, backend, bases de datos, automatización y cloud.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="rounded-full border border-slate-600 px-6 py-3 font-semibold hover:border-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="#"
            className="rounded-full border border-slate-600 px-6 py-3 font-semibold hover:border-cyan-400 transition"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  )
}

function ExperiencePage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold">Experiencia profesional</h1>
    </section>
  )
}

function ProjectsPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold">Mis proyectos</h1>
    </section>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/experiencia" element={<ExperiencePage />} />
      <Route path="/proyectos" element={<ProjectsPage />} />
    </Routes>
  )
}

export default App