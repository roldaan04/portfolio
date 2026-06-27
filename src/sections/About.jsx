import SectionHeading from "../components/SectionHeading"
import { about } from "../data/site"
import { iconMap } from "../components/iconMap"

function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Desarrollador full stack con experiencia real y ganas de crecer"
          subtitle={about.text}
        />

        <div className="grid gap-5 sm:grid-cols-3 lg:gap-6">
          {about.cards.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <article
                key={card.title}
                className="glass glass-hover flex flex-col p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                  {Icon && <Icon className="h-5 w-5" />}
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {card.text}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
