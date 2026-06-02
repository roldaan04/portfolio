import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiencia" element={<ExperiencePage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
      </Routes>
    </>
  )
}

export default App