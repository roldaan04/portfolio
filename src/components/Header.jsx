import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Sobre mí' },
  { to: '/experiencia', label: 'Experiencia' },
  { to: '/proyectos', label: 'Proyectos' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const linkClasses = ({ isActive }) =>
    isActive
      ? 'text-cyan-400'
      : 'text-slate-300 transition hover:text-cyan-400'

  // Cerrar el menú al cambiar de página
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Bloquear el scroll del body mientras el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <NavLink to="/" className="text-xl font-bold text-white">
            Javi<span className="text-cyan-400">Dev</span>
          </NavLink>

          {/* Navegación escritorio */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            ))}

            <a
              href="mailto:tuemail@email.com"
              className="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Contactar
            </a>
          </div>

          {/* Botón hamburguesa (solo móvil) */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="sr-only">Menú</span>
            <div className="relative h-5 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/*
        El menú móvil se renderiza FUERA del <header> a propósito:
        el header usa backdrop-blur (backdrop-filter), y un ancestro con
        filter/backdrop-filter rompe el position:fixed de sus hijos (se
        posicionan respecto al header en vez del viewport). Como hermano,
        el fixed cubre toda la pantalla correctamente.
      */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Fondo oscuro que atenúa la página */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Panel deslizante opaco */}
        <div
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col gap-2 border-l border-white/10 bg-slate-900 px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-lg font-medium transition ${
                  isActive
                    ? 'bg-cyan-400/10 text-cyan-400'
                    : 'text-slate-200 hover:bg-white/5 hover:text-cyan-400'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <a
            href="mailto:tuemail@email.com"
            className="mt-4 rounded-full bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Contactar
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
