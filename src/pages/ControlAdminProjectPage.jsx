import { Link } from "react-router-dom"
import { useSite } from "../data/site"
import { useT } from "../i18n/context"
import { ArrowRight, Mail, Check, Spark } from "../components/Icons"

import ProjectImage from "../components/ProjectImage"
import { controlAdminImages as img, SIZES_FULL } from "../data/projectImages"

/* ------------------------------------------------------------------ */
/* Datos de la página                                                 */
/* ------------------------------------------------------------------ */

const copy = {
  es: {
    back: "Volver a proyectos",
    eyebrow: "Producto · Gestión para pymes y autónomos",
    intro:
      "Aplicación de gestión que transforma facturas y documentos en registros financieros revisables y los convierte en una visión clara del negocio.",
    badges: ["SaaS", "IA aplicada", "LLMs", "Dashboards", "Python", "FastAPI", "Angular"],
    status: "Producto real · MVP funcional",
    heroFacts: [
      { label: "Estado", value: "MVP funcional" },
      { label: "Flujo", value: "Documento → revisión → dashboard" },
      { label: "Enfoque", value: "Pymes y autónomos" },
    ],
    problem: {
      eyebrow: "Qué problema resuelve",
      text: "Control Admin busca reducir el trabajo manual que supone ordenar facturas, extraer sus datos y convertirlos en una visión útil del negocio. El usuario centraliza la documentación, revisa la información propuesta y mantiene siempre el control antes de consolidarla.",
    },
    docs: {
      eyebrow: "Documentos",
      title: "Todo empieza con la documentación",
      alt: "Pantalla de documentos de Control Admin con los archivos subidos y su estado de procesamiento",
      caption: "Gestión de los documentos subidos",
      text: "El usuario puede subir varios documentos de una sola vez y controlar desde una misma pantalla cuáles han sido procesados. Desde aquí también puede previsualizarlos y acceder al detalle de cada archivo.",
      items: ["Carga múltiple", "Estado de procesamiento", "Vista previa", "Acceso al detalle"],
    },
    detail: {
      eyebrow: "Detalle",
      title: "Cada dato mantiene su origen",
      alt: "Vista de detalle de un documento en Control Admin con el archivo y la información de su procesamiento",
      caption: "Detalle individual de un documento",
      text: "Cada documento dispone de una vista individual donde se puede revisar el archivo y la información asociada a su procesamiento. Así, el usuario puede comprobar de dónde viene cada registro antes de trabajar con él.",
    },
    ai: {
      eyebrow: "Control total (IA)",
      title: "La IA propone. La persona valida.",
      alt: "Pantalla de Control Total de Control Admin con la cola de registros extraídos pendientes de revisar y aprobar",
      caption: "Cola de revisión: cada registro se aprueba antes de consolidarse",
      p1: "Los datos extraídos llegan a una cola de revisión antes de convertirse en información definitiva. El usuario puede comprobar proveedor o cliente, fecha, base, IVA, total y categoría, y decidir si aprueba el registro o necesita revisarlo.",
      p2: "La aplicación no escribe en la contabilidad a ciegas: la automatización reduce el trabajo manual, pero la validación final sigue estando en manos de la persona.",
    },
    dashboard: {
      eyebrow: "Dashboard",
      title: "Los documentos se convierten en visión de negocio",
      alt: "Panel de resumen de Control Admin con facturación, gastos, márgenes y previsión de impuestos",
      caption: "Resumen general de la situación del negocio",
      text: "Una vez revisados los registros, el panel resume la situación del negocio: facturación, gastos, márgenes, base imponible, estructura de gasto y previsión de impuestos.",
    },
    tax: {
      eyebrow: "Fiscalidad",
      title: "Una lectura clara de impuestos y retenciones",
      alt: "Vista de fiscalidad de Control Admin con el IVA repercutido y soportado y las retenciones de IRPF",
      caption: "IVA repercutido y soportado, y las dos direcciones del IRPF",
      p1: "La vista de fiscalidad separa el IVA repercutido del soportado y diferencia también las dos direcciones del IRPF: lo que retiene el negocio y lo que otros retienen sobre sus ingresos.",
      p2: "Esto permite entender mejor las próximas obligaciones fiscales sin tener que reconstruir la información desde las facturas una a una.",
    },
    parties: {
      eyebrow: "Clientes y proveedores",
      title: "Quién tiene más peso dentro del negocio",
      alt: "Vista de clientes y proveedores de Control Admin con los movimientos agrupados por tercero",
      caption: "Movimientos agrupados por cliente y proveedor",
      text: "La vista de terceros agrupa los movimientos por cliente y proveedor y muestra cuáles tienen mayor peso. Los nombres se unifican para evitar que pequeñas diferencias de formato o capitalización dividan una misma empresa en varios registros.",
    },
    mvp: {
      title: "MVP terminado y funcional",
      text: "Las capturas muestran un volumen reducido de documentos para que el flujo pueda entenderse con claridad. Los archivos utilizados proceden de un autónomo real y, en un uso empresarial normal, el mismo proceso se repetiría sobre un volumen mucho mayor de facturas de ingresos y gastos.",
    },
    cta: {
      title: "¿Quieres ver más sobre mi perfil?",
      text: "Control Admin combina producto, IA aplicada y datos de negocio. Hablemos.",
      back: "Volver a proyectos",
      contact: "Contactar",
    },
  },
  en: {
    back: "Back to projects",
    eyebrow: "Product · Management for SMEs and freelancers",
    intro:
      "Management application that turns invoices and documents into reviewable financial records and converts them into a clear view of the business.",
    badges: ["SaaS", "Applied AI", "LLMs", "Dashboards", "Python", "FastAPI", "Angular"],
    status: "Real product · Working MVP",
    heroFacts: [
      { label: "Status", value: "Working MVP" },
      { label: "Flow", value: "Document → review → dashboard" },
      { label: "Focus", value: "SMEs and freelancers" },
    ],
    problem: {
      eyebrow: "What problem it solves",
      text: "Control Admin aims to reduce the manual work involved in organising invoices, extracting their data and turning it into a useful view of the business. Users centralise their documentation, review the proposed information and always stay in control before it is consolidated.",
    },
    docs: {
      eyebrow: "Documents",
      title: "It all starts with the documentation",
      alt: "Control Admin documents screen with the uploaded files and their processing status",
      caption: "Management of uploaded documents",
      text: "Users can upload several documents at once and track from a single screen which ones have been processed. From here they can also preview them and open the detail of each file.",
      items: ["Bulk upload", "Processing status", "Preview", "Access to detail"],
    },
    detail: {
      eyebrow: "Detail",
      title: "Every piece of data keeps its source",
      alt: "Document detail view in Control Admin with the file and its processing information",
      caption: "Individual document detail",
      text: "Each document has its own view where you can review the file and the information linked to its processing. This way, users can check where each record comes from before working with it.",
    },
    ai: {
      eyebrow: "Full control (AI)",
      title: "The AI proposes. The person validates.",
      alt: "Control Admin Full Control screen with the queue of extracted records pending review and approval",
      caption: "Review queue: every record is approved before being consolidated",
      p1: "Extracted data lands in a review queue before becoming final information. Users can check the supplier or customer, date, net amount, VAT, total and category, and decide whether to approve the record or review it further.",
      p2: "The application doesn't write into the accounts blindly: automation reduces manual work, but the final validation stays in the person's hands.",
    },
    dashboard: {
      eyebrow: "Dashboard",
      title: "Documents become business insight",
      alt: "Control Admin summary dashboard with revenue, expenses, margins and tax forecast",
      caption: "Overall summary of the business situation",
      text: "Once the records have been reviewed, the dashboard summarises the state of the business: revenue, expenses, margins, taxable base, expense structure and tax forecast.",
    },
    tax: {
      eyebrow: "Taxes",
      title: "A clear reading of taxes and withholdings",
      alt: "Control Admin tax view with output and input VAT and personal income tax (IRPF) withholdings",
      caption: "Output and input VAT, and both directions of IRPF withholding",
      p1: "The tax view separates output VAT from input VAT and also distinguishes both directions of IRPF (Spanish income tax) withholding: what the business withholds and what others withhold on its income.",
      p2: "This makes it easier to understand upcoming tax obligations without having to rebuild the information from each invoice one by one.",
    },
    parties: {
      eyebrow: "Customers and suppliers",
      title: "Who carries the most weight in the business",
      alt: "Control Admin customers and suppliers view with transactions grouped by counterparty",
      caption: "Transactions grouped by customer and supplier",
      text: "The counterparties view groups transactions by customer and supplier and shows which ones carry the most weight. Names are unified so that small differences in formatting or capitalisation don't split the same company into several records.",
    },
    mvp: {
      title: "Finished, working MVP",
      text: "The screenshots show a small number of documents so the flow can be understood clearly. The files used come from a real freelancer and, in normal business use, the same process would be repeated over a much larger volume of income and expense invoices.",
    },
    cta: {
      title: "Want to see more about my profile?",
      text: "Control Admin combines product, applied AI and business data. Let's talk.",
      back: "Back to projects",
      contact: "Contact",
    },
  },
}

/* ------------------------------------------------------------------ */
/* Componentes internos                                               */
/* ------------------------------------------------------------------ */

/* Imagen (captura de la app) dentro de una tarjeta glass con glow. */
function ImageCard({ image, alt, caption, sizes, priority, className = "" }) {
  return (
    <figure className={`glass relative overflow-hidden p-2 ${className}`}>
      <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-2/70">
        <ProjectImage image={image} alt={alt} sizes={sizes} priority={priority} />
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
  priority,
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
        image={image}
        alt={alt}
        caption={caption}
        priority={priority}
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
      <ImageCard image={image} alt={alt} caption={caption} sizes={SIZES_FULL} className="mt-8" />
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Página                                                             */
/* ------------------------------------------------------------------ */

function ControlAdminProjectPage() {
  const { links } = useSite()
  const t = useT(copy)

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-28 sm:pt-36">
      {/* Volver */}
      <Link
        to="/proyectos"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-brand"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
        {t.back}
      </Link>

      {/* 1 · HERO */}
      <section className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            <span className="gradient-brand">Control Admin</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            {t.intro}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {t.badges.map((b) => (
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
            {t.status}
          </div>
          <dl className="mt-5 space-y-4">
            {t.heroFacts.map((f) => (
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
            {t.problem.eyebrow}
          </span>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
            {t.problem.text}
          </p>
        </div>
      </section>

      {/* Bloques con capturas */}
      <div className="mt-20 space-y-20 sm:mt-24 sm:space-y-24">
        {/* 3 · Documentos */}
        <FeatureRow
          index="01"
          eyebrow={t.docs.eyebrow}
          title={t.docs.title}
          image={img.docs}
          priority
          alt={t.docs.alt}
          caption={t.docs.caption}
          cols="lg:grid-cols-[0.85fr_1.15fr]"
        >
          <p>{t.docs.text}</p>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {t.docs.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="h-4 w-4 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </FeatureRow>

        {/* 4 · Detalle del documento */}
        <FeatureRow
          index="02"
          eyebrow={t.detail.eyebrow}
          title={t.detail.title}
          image={img.detalleDocs}
          alt={t.detail.alt}
          caption={t.detail.caption}
          reverse
        >
          <p>{t.detail.text}</p>
        </FeatureRow>

        {/* 5 · Control Total (IA) · sección clave */}
        <FeatureWide
          index="03"
          eyebrow={t.ai.eyebrow}
          title={t.ai.title}
          image={img.controlIa}
          alt={t.ai.alt}
          caption={t.ai.caption}
        >
          <p>{t.ai.p1}</p>
          <p>{t.ai.p2}</p>
        </FeatureWide>

        {/* 6 · Panel · Resumen · sección clave */}
        <FeatureWide
          index="04"
          eyebrow={t.dashboard.eyebrow}
          title={t.dashboard.title}
          image={img.dashboard}
          alt={t.dashboard.alt}
          caption={t.dashboard.caption}
        >
          <p>{t.dashboard.text}</p>
        </FeatureWide>

        {/* 7 · Panel · Fiscalidad */}
        <FeatureRow
          index="05"
          eyebrow={t.tax.eyebrow}
          title={t.tax.title}
          image={img.fiscalidad}
          alt={t.tax.alt}
          caption={t.tax.caption}
          cols="lg:grid-cols-[0.72fr_1.28fr]"
        >
          <p>{t.tax.p1}</p>
          <p>{t.tax.p2}</p>
        </FeatureRow>

        {/* 8 · Panel · Terceros */}
        <FeatureRow
          index="06"
          eyebrow={t.parties.eyebrow}
          title={t.parties.title}
          image={img.terceros}
          alt={t.parties.alt}
          caption={t.parties.caption}
          reverse
        >
          <p>{t.parties.text}</p>
        </FeatureRow>

        {/* 9 · Nota sobre el MVP */}
        <section className="glass p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
              <Spark className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {t.mvp.title}
            </h2>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {t.mvp.text}
          </p>
        </section>

        {/* 11 · CTA final */}
        <section>
          <div className="glass hairline-top flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-white">
                {t.cta.title}
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                {t.cta.text}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/proyectos" className="btn btn-ghost shrink-0">
                <ArrowRight className="h-4 w-4 rotate-180" />
                {t.cta.back}
              </Link>
              <a
                href={links.gmail}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary shrink-0"
              >
                <Mail className="h-4 w-4" />
                {t.cta.contact}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ControlAdminProjectPage
