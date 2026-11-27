import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Background from './components/Background'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage'
import AwsProjectPage from './pages/AwsProjectPage'
import FilmeProjectPage from './pages/FilmeProjectPage'
import ControlAdminProjectPage from './pages/ControlAdminProjectPage'
import FreelancePage from './pages/FreelancePage'
import ChatLauncher from './components/chat/ChatLauncher'

/* Al navegar entre rutas, vuelve arriba. Si hay un #ancla (p. ej. los enlaces
   del chat a /proyectos#kristalia), baja hasta ese elemento y lo resalta. */
function ScrollToTop() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    let tries = 0
    let frame
    let timer
    const go = () => {
      const el = document.getElementById(id)
      if (!el) {
        if (tries++ < 30) frame = requestAnimationFrame(go)
        return
      }
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Solo se resaltan tarjetas (artículos), no secciones enteras.
      if (el.tagName === 'ARTICLE') {
        el.classList.remove('is-target-highlight')
        void el.offsetWidth // reinicia la animación si ya estaba
        el.classList.add('is-target-highlight')
        timer = setTimeout(() => el.classList.remove('is-target-highlight'), 2400)
      }
    }
    frame = requestAnimationFrame(go)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timer)
    }
  }, [pathname, hash, key])

  return null
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiencia" element={<ExperiencePage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/aws-project" element={<AwsProjectPage />} />
        <Route path="/filme" element={<FilmeProjectPage />} />
        <Route path="/control-admin" element={<ControlAdminProjectPage />} />
        {/* Ruta oculta: no se enlaza desde ninguna parte, se comparte a mano. */}
        <Route path="/freelance" element={<FreelancePage />} />
      </Routes>

      <Footer />
      <ChatLauncher />
    </div>
  )
}

export default App
