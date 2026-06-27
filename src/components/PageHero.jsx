/* Encabezado superior para las páginas de detalle (Experiencia / Proyectos).
   Mantiene la coherencia visual con la Home dejando aire bajo el header fijo. */
function PageHero({ eyebrow }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-32 pb-6 sm:pt-40">
      <div className="max-w-3xl">
        <span className="eyebrow">{eyebrow}</span>
      </div>
    </section>
  )
}

export default PageHero
