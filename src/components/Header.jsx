import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { profile, links } from "../data/site"
import { Download, Mail } from "./Icons"

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/experiencia", label: "Experiencia" },
  { to: "/proyectos", label: "Proyectos" },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const linkClasses = ({ isActive }) =>
    `relative text-sm font-medium transition ${
      isActive ? "text-white" : "text-slate-300 hover:text-white"
    }`

  // Bloquear el scroll del body mientras el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Engrosar el header al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-white/10 bg-ink/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <NavLink to="/" className="text-lg font-bold tracking-tight text-white">
            {profile.logo.left}
            <span className="text-brand">{profile.logo.right}</span>
          </NavLink>

          {/* Navegación escritorio */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={linkClasses}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-brand transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTAs escritorio */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={links.cv}
              download
              className="btn btn-ghost btn-sm"
              aria-label="Descargar CV"
            >
              <Download className="h-4 w-4" />
              CV
            </a>
            <a href={links.gmail} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
              <Mail className="h-4 w-4" />
              Contactar
            </a>
          </div>

          {/* Botón hamburguesa (solo móvil) */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="sr-only">Menú</span>
            <div className="relative h-5 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/*
        El menú móvil se renderiza FUERA del <header> a propósito:
        el header usa backdrop-blur (backdrop-filter), y un ancestro con
        filter/backdrop-filter rompe el position:fixed de sus hijos.
      */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[82%] flex-col gap-2 border-l border-white/10 bg-ink-2 px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-lg font-medium transition ${
                  isActive
                    ? "bg-brand/10 text-brand"
                    : "text-slate-200 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="mt-4 flex flex-col gap-3">
            <a
              href={links.cv}
              download
              onClick={closeMenu}
              className="btn btn-ghost w-full"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
            <a href={links.gmail} target="_blank" rel="noreferrer" onClick={closeMenu} className="btn btn-primary w-full">
              <Mail className="h-4 w-4" />
              Contactar
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
