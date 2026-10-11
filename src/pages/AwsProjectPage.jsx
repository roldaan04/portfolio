import { Link } from "react-router-dom"
import { useSite } from "../data/site"
import { useT } from "../i18n/context"
import {
  ArrowRight,
  Mail,
  Cloud,
  Database,
  Server,
  Workflow,
  Spark,
  Trending,
  Check,
  Layers,
} from "../components/Icons"

import ProjectImage from "../components/ProjectImage"
import { awsImages as img } from "../data/projectImages"

/* ------------------------------------------------------------------ */
/* Datos de la página (cortos y centralizados aquí mismo)             */
/* ------------------------------------------------------------------ */

const techBadges = [
  "AWS",
  "Python",
  "Machine Learning",
  "S3",
  "Kinesis",
  "Lambda",
  "DynamoDB",
  "Step Functions",
  "API Gateway",
  "CloudWatch",
]

const dynamoFields = [
  "sensor_id",
  "event_timestamp",
  "prediction",
  "risk_label",
  "risk_probability",
  "threshold",
  "model_name",
]

const proofIcons = [Cloud, Workflow, Spark, Server, Database, Trending, Check, Layers]

const strong = (text) => <strong className="text-slate-100">{text}</strong>
const code = (text) => (
  <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[0.85em] text-brand">{text}</code>
)

const copy = {
  es: {
    back: "Volver a proyectos",
    eyebrow: "Proyecto Cloud · Big Data · Machine Learning",
    title: "Predictive Maintenance en AWS",
    intro:
      "Sistema de mantenimiento predictivo que procesa datos IoT de motores, ejecuta un modelo de Machine Learning y genera predicciones de riesgo de fallo dentro de una arquitectura serverless en AWS.",
    status: "Proyecto real implementado",
    heroFacts: [
      { label: "Dataset", value: "NASA C-MAPSS FD001" },
      { label: "Modelo", value: "Random Forest" },
      { label: "Objetivo", value: "Detectar riesgo de fallo" },
      { label: "Pipeline", value: "Automatizado · Step Functions" },
    ],
    data: {
      eyebrow: "El problema y los datos",
      title: "De sensores industriales a un data lake en S3",
      alt: "Estructura de carpetas del bucket de Amazon S3 usado como data lake",
      caption: "Amazon S3 organizado como data lake del proyecto",
      p1: "Una avería inesperada en un motor industrial provoca paradas de producción y costes urgentes. El sistema anticipa ese riesgo analizando lecturas de sensores antes de que ocurra el fallo.",
      p2: (
        <>
          Parte del dataset {strong("NASA C-MAPSS FD001")}, que simula 21 sensores
          de motores. Esos datos se almacenan en Amazon S3, que actúa como data
          lake separando lo original de lo procesado.
        </>
      ),
      items: ["Datos raw", "Datos procesados", "Modelo .pkl", "Umbral de decisión", "Dashboard HTML"],
    },
    training: {
      eyebrow: "Entrenamiento offline",
      title: "El modelo se entrena una vez y se reutiliza",
      alt: "Modelo entrenado guardado como archivo .pkl en Amazon S3",
      caption: "Modelo Random Forest guardado en S3 como .pkl",
      p1: (
        <>
          El entrenamiento se realiza de forma offline en SageMaker Notebook, no
          en cada predicción. A partir de FD001 se calcula la vida útil restante
          del motor ({strong("RUL")}) y se entrena un {strong("Random Forest")} con
          Scikit-learn como clasificación binaria: normal o riesgo.
        </>
      ),
      p2: (
        <>
          El modelo final se guarda en S3 como {code(".pkl")} junto a su umbral de
          decisión, ajustado a {strong("0.4")} para priorizar la detección de
          fallos y reducir falsos negativos.
        </>
      ),
    },
    lambdas: {
      eyebrow: "Lógica del sistema",
      title: "Lambdas con responsabilidades separadas",
      alt: "Listado de funciones AWS Lambda del proyecto",
      caption: "Funciones Lambda del pipeline",
      p1: "Cada función Lambda tiene una responsabilidad concreta. Separar la lógica en piezas pequeñas mantiene el sistema claro, mantenible y fácil de orquestar.",
      items: [
        { name: "Producer Lambda", role: "genera eventos IoT desde datos históricos" },
        { name: "Ingest Lambda", role: "limpia y valida los datos de Kinesis" },
        { name: "Predict Lambda", role: "carga el modelo desde S3 y predice" },
        { name: "Dashboard Lambda", role: "genera la visualización final" },
      ],
    },
    orchestration: {
      eyebrow: "Orquestación",
      title: "Step Functions coordina todo el flujo",
      alt: "Diagrama del flujo de AWS Step Functions del pipeline",
      caption: "Pipeline orquestado con Step Functions",
      p1: "Antes el proceso dependía de pasos manuales. Ahora Step Functions ejecuta el flujo de forma ordenada, trazable y automática, desde la ingesta hasta la visualización.",
      steps: [
        "Genera eventos",
        "Espera procesamiento (Kinesis)",
        "Valida datos limpios",
        "Inferencia por lote",
        "Genera dashboard",
      ],
    },
    results: {
      eyebrow: "Resultados",
      title: "Histórico de predicciones en DynamoDB",
      alt: "Tabla iot_predictions en Amazon DynamoDB con las predicciones",
      caption: "Tabla iot_predictions en DynamoDB",
      p1: (
        <>
          Cada predicción se guarda en la tabla {code("iot_predictions")}, ordenada
          por sensor y fecha. Esto permite consultar el resultado, la probabilidad
          de riesgo, el umbral aplicado y el modelo utilizado.
        </>
      ),
    },
    dashboard: {
      eyebrow: "Visualización",
      title: "Un dashboard que convierte el modelo en información útil",
      p1: "A partir de los datos de DynamoDB, el sistema genera automáticamente un dashboard HTML con el total de predicciones, motores normales, motores en riesgo, probabilidad media de fallo y el histórico de inferencias.",
      alt1: "Dashboard con métricas resumen de las predicciones de mantenimiento",
      caption1: "Métricas resumen del sistema",
      alt2: "Dashboard con el histórico de predicciones por motor",
      caption2: "Histórico de predicciones",
    },
    proves: {
      eyebrow: "Qué demuestra este proyecto",
      title: "No es solo un modelo: es un sistema completo",
      text: "He integrado un modelo de Machine Learning dentro de una arquitectura AWS que automatiza la ingesta, la limpieza, la inferencia, el almacenamiento y la visualización.",
      items: [
        { title: "Arquitectura serverless", text: "Servicios gestionados de AWS, sin mantener servidores propios." },
        { title: "Pipeline automatizado", text: "Flujo end-to-end orquestado con Step Functions." },
        { title: "Machine Learning aplicado", text: "Random Forest entrenado y puesto en producción." },
        { title: "Ingesta y limpieza IoT", text: "Streaming con Kinesis y validación en Lambda." },
        { title: "Persistencia de resultados", text: "Histórico de predicciones en DynamoDB." },
        { title: "Visualización de datos", text: "Dashboard HTML generado automáticamente." },
        { title: "Observabilidad", text: "Logs, métricas e invocaciones con CloudWatch." },
        { title: "Integración AWS", text: "Múltiples servicios conectados en un único sistema." },
      ],
    },
    cta: {
      title: "¿Quieres ver más sobre mi perfil?",
      text: "Este proyecto combina cloud, backend, datos e IA aplicada. Hablemos.",
      back: "Volver a proyectos",
      contact: "Contactar",
    },
  },
  en: {
    back: "Back to projects",
    eyebrow: "Cloud · Big Data · Machine Learning project",
    title: "Predictive Maintenance on AWS",
    intro:
      "Predictive maintenance system that processes IoT engine data, runs a Machine Learning model and generates failure-risk predictions within a serverless architecture on AWS.",
    status: "Real, implemented project",
    heroFacts: [
      { label: "Dataset", value: "NASA C-MAPSS FD001" },
      { label: "Model", value: "Random Forest" },
      { label: "Goal", value: "Detect failure risk" },
      { label: "Pipeline", value: "Automated · Step Functions" },
    ],
    data: {
      eyebrow: "The problem and the data",
      title: "From industrial sensors to a data lake in S3",
      alt: "Folder structure of the Amazon S3 bucket used as a data lake",
      caption: "Amazon S3 organised as the project's data lake",
      p1: "An unexpected breakdown in an industrial engine causes production downtime and urgent costs. The system anticipates that risk by analysing sensor readings before the failure happens.",
      p2: (
        <>
          It starts from the {strong("NASA C-MAPSS FD001")} dataset, which
          simulates 21 engine sensors. That data is stored in Amazon S3, which
          acts as a data lake separating raw data from processed data.
        </>
      ),
      items: ["Raw data", "Processed data", ".pkl model", "Decision threshold", "HTML dashboard"],
    },
    training: {
      eyebrow: "Offline training",
      title: "The model is trained once and reused",
      alt: "Trained model saved as a .pkl file in Amazon S3",
      caption: "Random Forest model saved in S3 as .pkl",
      p1: (
        <>
          Training is done offline in a SageMaker Notebook, not on every
          prediction. From FD001, the engine's remaining useful life
          ({strong("RUL")}) is calculated and a {strong("Random Forest")} is
          trained with Scikit-learn as a binary classifier: normal or at risk.
        </>
      ),
      p2: (
        <>
          The final model is saved in S3 as a {code(".pkl")} together with its
          decision threshold, set to {strong("0.4")} to prioritise failure
          detection and reduce false negatives.
        </>
      ),
    },
    lambdas: {
      eyebrow: "System logic",
      title: "Lambdas with separate responsibilities",
      alt: "List of the project's AWS Lambda functions",
      caption: "Pipeline Lambda functions",
      p1: "Each Lambda function has a specific responsibility. Splitting the logic into small pieces keeps the system clear, maintainable and easy to orchestrate.",
      items: [
        { name: "Producer Lambda", role: "generates IoT events from historical data" },
        { name: "Ingest Lambda", role: "cleans and validates the Kinesis data" },
        { name: "Predict Lambda", role: "loads the model from S3 and predicts" },
        { name: "Dashboard Lambda", role: "generates the final visualisation" },
      ],
    },
    orchestration: {
      eyebrow: "Orchestration",
      title: "Step Functions coordinates the whole flow",
      alt: "Diagram of the pipeline's AWS Step Functions flow",
      caption: "Pipeline orchestrated with Step Functions",
      p1: "The process used to depend on manual steps. Now Step Functions runs the flow in an orderly, traceable and automated way, from ingestion to visualisation.",
      steps: [
        "Generate events",
        "Wait for processing (Kinesis)",
        "Validate clean data",
        "Batch inference",
        "Generate dashboard",
      ],
    },
    results: {
      eyebrow: "Results",
      title: "Prediction history in DynamoDB",
      alt: "iot_predictions table in Amazon DynamoDB with the predictions",
      caption: "iot_predictions table in DynamoDB",
      p1: (
        <>
          Every prediction is stored in the {code("iot_predictions")} table,
          sorted by sensor and date. This makes it possible to query the result,
          the risk probability, the applied threshold and the model used.
        </>
      ),
    },
    dashboard: {
      eyebrow: "Visualisation",
      title: "A dashboard that turns the model into useful information",
      p1: "Using the DynamoDB data, the system automatically generates an HTML dashboard with the total number of predictions, normal engines, engines at risk, average failure probability and the inference history.",
      alt1: "Dashboard with summary metrics of the maintenance predictions",
      caption1: "System summary metrics",
      alt2: "Dashboard with the prediction history per engine",
      caption2: "Prediction history",
    },
    proves: {
      eyebrow: "What this project shows",
      title: "It's not just a model: it's a complete system",
      text: "I integrated a Machine Learning model into an AWS architecture that automates ingestion, cleaning, inference, storage and visualisation.",
      items: [
        { title: "Serverless architecture", text: "Managed AWS services, with no servers of my own to maintain." },
        { title: "Automated pipeline", text: "End-to-end flow orchestrated with Step Functions." },
        { title: "Applied Machine Learning", text: "Random Forest trained and put into production." },
        { title: "IoT ingestion and cleaning", text: "Streaming with Kinesis and validation in Lambda." },
        { title: "Results persistence", text: "Prediction history in DynamoDB." },
        { title: "Data visualisation", text: "Automatically generated HTML dashboard." },
        { title: "Observability", text: "Logs, metrics and invocations with CloudWatch." },
        { title: "AWS integration", text: "Multiple services connected into a single system." },
      ],
    },
    cta: {
      title: "Want to see more about my profile?",
      text: "This project combines cloud, backend, data and applied AI. Let's talk.",
      back: "Back to projects",
      contact: "Contact",
    },
  },
}

/* ------------------------------------------------------------------ */
/* Componentes internos reutilizables                                 */
/* ------------------------------------------------------------------ */

/* Imagen dentro de una tarjeta glass con borde, glow sutil y caption. */
function ImageCard({ image, alt, caption, sizes, priority, className = "" }) {
  return (
    <figure className={`glass relative overflow-hidden p-2 ${className}`}>
      <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full bg-brand-2/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-2">
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

/* Bloque de sección: texto + imagen a dos columnas, alternable. */
function FeatureRow({ index, eyebrow, title, children, image, alt, caption, reverse, priority }) {
  return (
    <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-sm font-bold text-brand">
            {index}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
            {eyebrow}
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
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

/* ------------------------------------------------------------------ */
/* Página                                                             */
/* ------------------------------------------------------------------ */

function AwsProjectPage() {
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
            <span className="gradient-brand">{t.title}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            {t.intro}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {techBadges.map((b) => (
              <span key={b} className="badge badge-brand">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Tarjeta de highlights */}
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

      {/* Bloques */}
      <div className="mt-20 space-y-20 sm:mt-24 sm:space-y-24">
        {/* 2 · Problema + datos + S3 */}
        <FeatureRow
          index="1"
          eyebrow={t.data.eyebrow}
          title={t.data.title}
          image={img.s3Bucket}
          priority
          alt={t.data.alt}
          caption={t.data.caption}
        >
          <p>{t.data.p1}</p>
          <p>{t.data.p2}</p>
          <ul className="grid grid-cols-2 gap-2">
            {t.data.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="h-4 w-4 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </FeatureRow>

        {/* 3 · Entrenamiento offline */}
        <FeatureRow
          index="2"
          eyebrow={t.training.eyebrow}
          title={t.training.title}
          image={img.modeloS3}
          alt={t.training.alt}
          caption={t.training.caption}
          reverse
        >
          <p>{t.training.p1}</p>
          <p>{t.training.p2}</p>
        </FeatureRow>

        {/* 4 · Lambdas */}
        <FeatureRow
          index="3"
          eyebrow={t.lambdas.eyebrow}
          title={t.lambdas.title}
          image={img.lambdas}
          alt={t.lambdas.alt}
          caption={t.lambdas.caption}
        >
          <p>{t.lambdas.p1}</p>
          <ul className="space-y-2.5">
            {t.lambdas.items.map((l) => (
              <li key={l.name} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span className="text-sm text-slate-300">
                  <strong className="text-slate-100">{l.name}</strong> — {l.role}
                </span>
              </li>
            ))}
          </ul>
        </FeatureRow>

        {/* 5 · Step Functions */}
        <FeatureRow
          index="4"
          eyebrow={t.orchestration.eyebrow}
          title={t.orchestration.title}
          image={img.stepFunctions}
          alt={t.orchestration.alt}
          caption={t.orchestration.caption}
          reverse
        >
          <p>{t.orchestration.p1}</p>
          <ol className="space-y-2">
            {t.orchestration.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-brand">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </FeatureRow>

        {/* 6 · DynamoDB */}
        <FeatureRow
          index="5"
          eyebrow={t.results.eyebrow}
          title={t.results.title}
          image={img.dynamoDB}
          alt={t.results.alt}
          caption={t.results.caption}
        >
          <p>{t.results.p1}</p>
          <div className="flex flex-wrap gap-2">
            {dynamoFields.map((f) => (
              <span key={f} className="badge font-mono text-xs">
                {f}
              </span>
            ))}
          </div>
        </FeatureRow>

        {/* 7 · Dashboard */}
        <section>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-sm font-bold text-brand">
              6
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              {t.dashboard.eyebrow}
            </span>
          </div>
          <h2 className="mt-4 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
            {t.dashboard.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {t.dashboard.p1}
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <ImageCard
              image={img.dashboard1}
              alt={t.dashboard.alt1}
              caption={t.dashboard.caption1}
            />
            <ImageCard
              image={img.dashboard2}
              alt={t.dashboard.alt2}
              caption={t.dashboard.caption2}
            />
          </div>
        </section>

        {/* 8 · Qué demuestra */}
        <section>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow is-centered">{t.proves.eyebrow}</span>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              {t.proves.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              {t.proves.text}
            </p>
          </div>

          {/* En móvil la rejilla se compacta: 2 columnas, tarjeta más pequeña y
              sin descripción, para no alargar la página. A partir de sm se
              muestra completa igual que en escritorio. */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
            {t.proves.items.map((p, i) => {
              const Icon = proofIcons[i]
              return (
                <article key={p.title} className="glass glass-hover p-4 sm:p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <h3 className="mt-3 text-[13px] font-semibold leading-snug break-words text-white sm:mt-4 sm:text-sm">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 hidden text-xs leading-relaxed text-slate-400 sm:block">
                    {p.text}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        {/* 9 · CTA final */}
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

export default AwsProjectPage
