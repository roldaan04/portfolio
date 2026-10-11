import SectionHeading from "../components/SectionHeading"
import { useSite } from "../data/site"
import { useT } from "../i18n/context"
import { iconMap } from "../components/iconMap"

const copy = {
  es: { eyebrow: "Stack tecnológico", title: "Tecnologías con las que trabajo" },
  en: { eyebrow: "Tech stack", title: "Technologies I work with" },
}

function TechStack() {
  const { stack } = useSite()
  const t = useT(copy)
  return (
    <section id="stack" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <SectionHeading
        align="center"
        eyebrow={t.eyebrow}
        title={t.title}
      />

      <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {stack.map((group) => {
          const Icon = iconMap[group.icon]
          return (
            <article key={group.category} className="glass glass-hover p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand">
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
