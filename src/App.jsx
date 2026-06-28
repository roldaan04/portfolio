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

/* Al navegar entre rutas, vuelve arriba (salvo si hay un #ancla). */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
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
      </Routes>

      <Footer />
    </div>
  )
}

export default App
