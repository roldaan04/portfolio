import Hero from "../sections/Hero"
import About from "../sections/About"
import TechStack from "../sections/TechStack"
/*import Projects from "../sections/Projects""*/
import Education from "../sections/Education"
import Contact from "../sections/Contact"
/*import { projects } from "../data/site"*/

/* La Home funciona como landing completa del portfolio.
   Cada bloque es una sección independiente y reutilizable. */
function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <TechStack />
      {/* En la Home mostramos 3 proyectos destacados; el resto en /proyectos. Proyectos destacados para cuando haya más */}
      {/*<Projects items={projects.slice(0, 3)} />*/}
      
      <Contact />
    </main>
  )
}

export default HomePage
