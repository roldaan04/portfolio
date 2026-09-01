import { Link } from "react-router-dom"
import { links } from "../data/site"
import { ArrowRight, Mail, Check, Spark } from "../components/Icons"

import docsImg from "../assets/images/control-admin/01Docs.png"
import detalleDocsImg from "../assets/images/control-admin/02DetalleDocs.png"
import controlIaImg from "../assets/images/control-admin/03ControlIA.png"
import dashboardImg from "../assets/images/control-admin/04Dashboard.png"
import fiscalidadImg from "../assets/images/control-admin/05Fiscalidad.png"
import tercerosImg from "../assets/images/control-admin/06Terceros.png"

/* ------------------------------------------------------------------ */
/* Datos de la página                                                 */
/* ------------------------------------------------------------------ */

const badges = [
  "SaaS",
  "IA aplicada",
  "LLMs",
  "Dashboards",
  "Python",
  "FastAPI",
  "Angular",
]

const heroFacts = [
  { label: "Estado", value: "MVP funcional" },
  { label: "Flujo", value: "Documento → revisión → dashboard" },
  { label: "Enfoque", value: "Pymes y autónomos" },
]

/* ------------------------------------------------------------------ */
/* Componentes internos                                               */
/* ------------------------------------------------------------------ */

/* Imagen (captura de la app) dentro de una tarjeta glass con glow. */
function ImageCard({ src, alt, caption, className = "" }) {
  return (
    <figure className={`glass relative overflow-hidden p-2 ${className}`}>
      <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-2/70">
        <img src={src} alt={alt} loading="lazy" className="block w-full object-contain" />
      </div>
      {caption && (
        <figcaption className="px-2 pb-1 pt-3 text-center text-xs text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/* Cabecera de bloque: número + eyebrow + título. */
function BlockHeading({ index, eyebrow, title, className = "" }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-sm font-bold text-brand">
          {index}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
    </div>
  )
}

/* Bloque de sección: texto + imagen a dos columnas, alternable.
   `cols` permite dar más ancho a la captura cuando la pantalla lo necesita. */
function FeatureRow({
  index,
  eyebrow,
  title,
  children,
  image,
  alt,
  caption,
  reverse,
  cols = "lg:grid-cols-2",
}) {
  return (
    <section className={`grid items-center gap-8 lg:gap-14 ${cols}`}>
      <div className={reverse ? "lg:order-2" : ""}>
        <BlockHeading index={index} eyebrow={eyebrow} title={title} />
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          {children}
        </div>
      </div>

      <ImageCard
        src={image}
        alt={alt}
        caption={caption}
        className={reverse ? "lg:order-1" : ""}
      />
    </section>
  )
}

/* Bloque destacado: texto arriba y captura a todo el ancho. */
function FeatureWide({ index, eyebrow, title, children, image, alt, caption }) {
  return (
    <section>
      <BlockHeading index={index} eyebrow={eyebrow} title={title} className="max-w-2xl" />
      <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
        {children}
      </div>
      <ImageCard src={image} alt={alt} caption={caption} className="mt-8" />
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Página                                                             */
/* ------------------------------------------------------------------ */

function ControlAdminProjectPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-28 sm:pt-36">
      {/* Volver */}
      <Link
        to="/proyectos"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-brand"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
        Volver a proyectos
      </Link>

      {/* 1 · HERO */}
      <section className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <span className="eyebrow">Producto · Gestión para pymes y autónomos</span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            <span className="gradient-brand">Control Admin</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Aplicación de gestión que transforma facturas y documentos en
            registros financieros revisables y los convierte en una visión clara
            del negocio.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="badge badge-brand">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Tarjeta resumen */}
        <div className="glass hairline-top p-6 sm:p-7">
          <div className="flex items-center gap-2 text-sm font-medium text-accent">
            <span className="status-dot" />
            Producto real · MVP funcional
          </div>
          <dl className="mt-5 space-y-4">
            {heroFacts.map((f) => (
              <div
                key={f.label}
                className="flex items-center justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0"
              >
                <dt className="text-sm text-slate-400">{f.label}</dt>
                <dd className="text-right text-sm font-semibold text-slate-100">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2 · Qué problema resuelve */}
      <section className="mt-16 sm:mt-20">
        <div className="glass p-6 sm:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
            Qué problema resuelve
          </span>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
            Control Admin busca reducir el trabajo manual que supone ordenar
            facturas, extraer sus datos y convertirlos en una visión útil del
            negocio. El usuario centraliza la documentación, revisa la información
            propuesta y mantiene siempre el control antes de consolidarla.
          </p>
        </div>
      </section>

      {/* Bloques con capturas */}
      <div className="mt-20 space-y-20 sm:mt-24 sm:space-y-24">
        {/* 3 · Documentos */}
        <FeatureRow
          index="01"
          eyebrow="Documentos"
          title="Todo empieza con la documentación"
          image={docsImg}
          alt="Pantalla de documentos de Control Admin con los archivos subidos y su estado de procesamiento"
          caption="Gestión de los documentos subidos"
          cols="lg:grid-cols-[0.85fr_1.15fr]"
        >
          <p>
            El usuario puede subir varios documentos de una sola vez y controlar
            desde una misma pantalla cuáles han sido procesados. Desde aquí también
            puede previsualizarlos y acceder al detalle de cada archivo.
          </p>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {["Carga múltiple", "Estado de procesamiento", "Vista previa", "Acceso al detalle"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <Check className="h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </FeatureRow>

        {/* 4 · Detalle del documento */}
        <FeatureRow
          index="02"
          eyebrow="Detalle"
          title="Cada dato mantiene su origen"
          image={detalleDocsImg}
          alt="Vista de detalle de un documento en Control Admin con el archivo y la información de su procesamiento"
          caption="Detalle individual de un documento"
          reverse
        >
          <p>
            Cada documento dispone de una vista individual donde se puede revisar
            el archivo y la información asociada a su procesamiento. Así, el
            usuario puede comprobar de dónde viene cada registro antes de trabajar
            con él.
          </p>
        </FeatureRow>

        {/* 5 · Control Total (IA) · sección clave */}
        <FeatureWide
          index="03"
          eyebrow="Control total (IA)"
          title="La IA propone. La persona valida."
          image={controlIaImg}
          alt="Pantalla de Control Total de Control Admin con la cola de registros extraídos pendientes de revisar y aprobar"
          caption="Cola de revisión: cada registro se aprueba antes de consolidarse"
        >
          <p>
            Los datos extraídos llegan a una cola de revisión antes de convertirse
            en información definitiva. El usuario puede comprobar proveedor o
            cliente, fecha, base, IVA, total y categoría, y decidir si aprueba el
            registro o necesita revisarlo.
          </p>
          <p>
            La aplicación no escribe en la contabilidad a ciegas: la automatización
            reduce el trabajo manual, pero la validación final sigue estando en
            manos de la persona.
          </p>
        </FeatureWide>

        {/* 6 · Panel · Resumen · sección clave */}
        <FeatureWide
          index="04"
          eyebrow="Dashboard"
          title="Los documentos se convierten en visión de negocio"
          image={dashboardImg}
          alt="Panel de resumen de Control Admin con facturación, gastos, márgenes y previsión de impuestos"
          caption="Resumen general de la situación del negocio"
        >
          <p>
            Una vez revisados los registros, el panel resume la situación del
            negocio: facturación, gastos, márgenes, base imponible, estructura de
            gasto y previsión de impuestos.
          </p>
        </FeatureWide>

        {/* 7 · Panel · Fiscalidad */}
        <FeatureRow
          index="05"
          eyebrow="Fiscalidad"
          title="Una lectura clara de impuestos y retenciones"
          image={fiscalidadImg}
          alt="Vista de fiscalidad de Control Admin con el IVA repercutido y soportado y las retenciones de IRPF"
          caption="IVA repercutido y soportado, y las dos direcciones del IRPF"
          cols="lg:grid-cols-[0.72fr_1.28fr]"
        >
          <p>
            La vista de fiscalidad separa el IVA repercutido del soportado y
            diferencia también las dos direcciones del IRPF: lo que retiene el
            negocio y lo que otros retienen sobre sus ingresos.
          </p>
          <p>
            Esto permite entender mejor las próximas obligaciones fiscales sin
            tener que reconstruir la información desde las facturas una a una.
          </p>
        </FeatureRow>

        {/* 8 · Panel · Terceros */}
        <FeatureRow
          index="06"
          eyebrow="Clientes y proveedores"
          title="Quién tiene más peso dentro del negocio"
          image={tercerosImg}
          alt="Vista de clientes y proveedores de Control Admin con los movimientos agrupados por tercero"
          caption="Movimientos agrupados por cliente y proveedor"
          reverse
        >
          <p>
            La vista de terceros agrupa los movimientos por cliente y proveedor y
            muestra cuáles tienen mayor peso. Los nombres se unifican para evitar
            que pequeñas diferencias de formato o capitalización dividan una misma
            empresa en varios registros.
          </p>
        </FeatureRow>

        {/* 9 · Nota sobre el MVP */}
        <section className="glass p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
              <Spark className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              MVP terminado y funcional
            </h2>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Las capturas muestran un volumen reducido de documentos para que el
            flujo pueda entenderse con claridad. Los archivos utilizados proceden
            de un autónomo real y, en un uso empresarial normal, el mismo proceso
            se repetiría sobre un volumen mucho mayor de facturas de ingresos y
            gastos.
          </p>
        </section>

        {/* 11 · CTA final */}
        <section>
          <div className="glass hairline-top flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-white">
                ¿Quieres ver más sobre mi perfil?
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Control Admin combina producto, IA aplicada y datos de negocio.
                Hablemos.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/proyectos" className="btn btn-ghost shrink-0">
                <ArrowRight className="h-4 w-4 rotate-180" />
                Volver a proyectos
              </Link>
              <a
                href={links.gmail}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary shrink-0"
              >
                <Mail className="h-4 w-4" />
                Contactar
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ControlAdminProjectPage
