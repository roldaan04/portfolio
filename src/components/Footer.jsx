import { Link } from "react-router-dom"
import { profile, links } from "../data/site"
import { Github, Linkedin, Mail } from "./Icons"

const year = 2026

function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="text-lg font-bold text-white">
            {profile.logo.left}
            <span className="text-brand">{profile.logo.right}</span>
          </Link>
          <p className="mt-2 max-w-sm text-sm text-slate-400">
            {profile.role} · {profile.availability}. 
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="glass glass-hover flex h-11 w-11 items-center justify-center !rounded-xl text-slate-300 hover:text-brand"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="glass glass-hover flex h-11 w-11 items-center justify-center !rounded-xl text-slate-300 hover:text-brand"
          >
            <Github className="h-5 w-5" />
          </a>
          <a href={links.gmail} target="_blank" rel="noreferrer" className="glass glass-hover flex h-11 w-11 items-center justify-center !rounded-xl text-slate-300 hover:text-brand">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-slate-500">
          © {year} {profile.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
