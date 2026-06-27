/* Cabecera de sección reutilizable: eyebrow + título + subtítulo opcional.
   align="left" (por defecto) o "center". */
function SectionHeading({ eyebrow, title, subtitle, align = "left", className = "" }) {
  const centered = align === "center"
  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${centered ? "is-centered" : ""}`}>{eyebrow}</span>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-400">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeading
