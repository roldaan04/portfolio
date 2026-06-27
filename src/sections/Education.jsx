import SectionHeading from "../components/SectionHeading"
import { education } from "../data/site"
import { GraduationCap } from "../components/Icons"

function Education() {
  return (
    <section id="formacion" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <SectionHeading
        align="center"
        eyebrow="Formación"
        title="Una base sólida, con un extra en datos e IA"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <article key={item.title} className="glass glass-hover flex flex-col p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="badge badge-brand">{item.role}</span>
            </div>

            <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {item.description}
            </p>

            <p className="mt-4 border-l-2 border-brand/40 pl-3 text-sm italic text-slate-300">
              {item.value}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
