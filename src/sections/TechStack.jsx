import SectionHeading from "../components/SectionHeading"
import { stack } from "../data/site"
import { iconMap } from "../components/iconMap"

function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <SectionHeading
        align="center"
        eyebrow="Stack tecnológico"
        title="Tecnologías con las que trabajo"
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => {
          const Icon = iconMap[group.icon]
          return (
            <article key={group.category} className="glass glass-hover p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand">
                  {Icon && <Icon className="h-5 w-5" />}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {group.category}
                </h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default TechStack
