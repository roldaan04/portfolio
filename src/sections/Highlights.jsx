import { highlights } from "../data/site"

function Highlights() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="glass glass-hover p-5 text-center sm:p-6 sm:text-left"
          >
            <p className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
              {item.value}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-200">{item.label}</p>
            <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Highlights
