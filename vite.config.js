import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

/* Anchos candidatos para las capturas de proyectos. Solo se generan los
   que no superan el ancho original (nunca se amplía la imagen). */
const RESPONSIVE_WIDTHS = [640, 1024, 1600]

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // `import img from "./foo.png?responsive"` → { sources, img: { src, w, h } }
    // en WebP comprimido y a varios anchos, para usar con srcset.
    imagetools({
      defaultDirectives: async (url, metadata) => {
        if (!url.searchParams.has('responsive')) return new URLSearchParams()
        const { width } = await metadata()
        const widths = RESPONSIVE_WIDTHS.filter((w) => w < width)
        if (width <= RESPONSIVE_WIDTHS.at(-1)) widths.push(width)
        return new URLSearchParams({
          w: widths.join(';'),
          format: 'webp',
          quality: '80',
          as: 'picture',
        })
      },
    }),
  ],
})
