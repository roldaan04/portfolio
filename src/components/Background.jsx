/* Fondo global del sitio: degradado navy + brillos radiales suaves +
   rejilla técnica que se desvanece. Fijo detrás de todo el contenido. */
function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-ink-2" />

      {/* Brillos de color */}
      <div className="absolute -top-48 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px]" />
      <div className="absolute top-1/4 -left-40 h-[30rem] w-[30rem] rounded-full bg-brand-2/10 blur-[130px]" />
      <div className="absolute bottom-0 -right-32 h-[30rem] w-[30rem] rounded-full bg-accent/[0.06] blur-[130px]" />

      {/* Rejilla técnica sutil */}
      <div className="absolute inset-0 bg-grid opacity-60" />
    </div>
  )
}

export default Background
