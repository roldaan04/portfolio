import { SIZES_HALF } from "../data/projectImages"

/* <img> responsive para las capturas procesadas con `?responsive`:
   WebP a varios anchos + width/height reales para evitar saltos de layout.
   `priority` la carga de inmediato (para la primera captura de la página). */
function ProjectImage({ image, alt, sizes = SIZES_HALF, priority = false, className = "" }) {
  return (
    <img
      src={image.img.src}
      srcSet={image.sources.webp}
      sizes={sizes}
      width={image.img.w}
      height={image.img.h}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={`block h-auto w-full ${className}`}
    />
  )
}

export default ProjectImage
