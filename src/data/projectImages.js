/* Capturas de las páginas de detalle de proyecto.
   El sufijo `?responsive` (ver vite.config.js) hace que en el build cada PNG
   se convierta a WebP comprimido y a varios anchos; aquí recibimos un objeto
   { sources: { webp: srcset }, img: { src, w, h } }. */

import s3Bucket from "../assets/images/aws-project/s3Bucket.png?responsive"
import lambdas from "../assets/images/aws-project/Lambdas.png?responsive"
import modeloS3 from "../assets/images/aws-project/modeloS3.png?responsive"
import stepFunctions from "../assets/images/aws-project/StepFunctions.png?responsive"
import dynamoDB from "../assets/images/aws-project/dynamoDB.png?responsive"
import dashboard1 from "../assets/images/aws-project/dashboard1.png?responsive"
import dashboard2 from "../assets/images/aws-project/dashboard2.png?responsive"

import portalFilme from "../assets/images/filmMe/PortalFilMe.png?responsive"
import populares from "../assets/images/filmMe/Populares.png?responsive"
import miLista from "../assets/images/filmMe/MiLista.png?responsive"
import detalles from "../assets/images/filmMe/Detalles.png?responsive"
import critica from "../assets/images/filmMe/Critica.png?responsive"

import docs from "../assets/images/control-admin/01Docs.png?responsive"
import detalleDocs from "../assets/images/control-admin/02DetalleDocs.png?responsive"
import controlIa from "../assets/images/control-admin/03ControlIA.png?responsive"
import dashboard from "../assets/images/control-admin/04Dashboard.png?responsive"
import fiscalidad from "../assets/images/control-admin/05Fiscalidad.png?responsive"
import terceros from "../assets/images/control-admin/06Terceros.png?responsive"

export const awsImages = { s3Bucket, lambdas, modeloS3, stepFunctions, dynamoDB, dashboard1, dashboard2 }
export const filmeImages = { portalFilme, populares, miLista, detalles, critica }
export const controlAdminImages = { docs, detalleDocs, controlIa, dashboard, fiscalidad, terceros }

/* `sizes` por defecto: la captura ocupa media columna en escritorio. */
export const SIZES_HALF = "(min-width: 1024px) 600px, calc(100vw - 48px)"
export const SIZES_FULL = "(min-width: 1280px) 1232px, calc(100vw - 48px)"

/* Imágenes de cada página de detalle, en orden de aparición, para precargarlas. */
const byRoute = {
  "/aws-project": [s3Bucket, modeloS3, lambdas, stepFunctions, dynamoDB, dashboard1, dashboard2],
  "/filme": [portalFilme, populares, miLista, detalles, critica],
  "/control-admin": [docs, detalleDocs, controlIa, dashboard, fiscalidad, terceros],
}

const prefetched = new Set()

/* Descarga en segundo plano las capturas de una página de detalle (p. ej. al
   pasar el ratón por "Ver detalles"), para que al entrar ya estén en caché. */
export function prefetchProjectImages(route) {
  if (prefetched.has(route) || !byRoute[route]) return
  prefetched.add(route)
  byRoute[route].forEach((image, i) => {
    const el = new Image()
    el.decoding = "async"
    el.fetchPriority = i < 2 ? "high" : "low"
    el.sizes = i === 0 ? SIZES_HALF : SIZES_FULL
    el.srcset = image.sources.webp
    el.src = image.img.src
  })
}
