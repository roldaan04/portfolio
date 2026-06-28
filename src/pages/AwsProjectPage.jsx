import { Link } from "react-router-dom"
import { links } from "../data/site"
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

import s3BucketImg from "../assets/images/aws-project/s3Bucket.png"
import lambdasImg from "../assets/images/aws-project/Lambdas.png"
import modeloS3Img from "../assets/images/aws-project/modeloS3.png"
import stepFunctionsImg from "../assets/images/aws-project/StepFunctions.png"
import dynamoDBImg from "../assets/images/aws-project/dynamoDB.png"
import dashboard1Img from "../assets/images/aws-project/dashboard1.png"
import dashboard2Img from "../assets/images/aws-project/dashboard2.png"

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

const heroFacts = [
  { label: "Dataset", value: "NASA C-MAPSS FD001" },
  { label: "Modelo", value: "Random Forest" },
  { label: "Objetivo", value: "Detectar riesgo de fallo" },
  { label: "Pipeline", value: "Automatizado · Step Functions" },
]

const lambdas = [
  { name: "Producer Lambda", role: "genera eventos IoT desde datos históricos" },
  { name: "Ingest Lambda", role: "limpia y valida los datos de Kinesis" },
  { name: "Predict Lambda", role: "carga el modelo desde S3 y predice" },
  { name: "Dashboard Lambda", role: "genera la visualización final" },
]

const pipeline = [
  "Genera eventos",
  "Espera procesamiento (Kinesis)",
  "Valida datos limpios",
  "Inferencia por lote",
  "Genera dashboard",
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

const proofs = [
  { icon: Cloud, title: "Arquitectura serverless", text: "Servicios gestionados de AWS, sin mantener servidores propios." },
  { icon: Workflow, title: "Pipeline automatizado", text: "Flujo end-to-end orquestado con Step Functions." },
  { icon: Spark, title: "Machine Learning aplicado", text: "Random Forest entrenado y puesto en producción." },
  { icon: Server, title: "Ingesta y limpieza IoT", text: "Streaming con Kinesis y validación en Lambda." },
  { icon: Database, title: "Persistencia de resultados", text: "Histórico de predicciones en DynamoDB." },
  { icon: Trending, title: "Visualización de datos", text: "Dashboard HTML generado automáticamente." },
  { icon: Check, title: "Observabilidad", text: "Logs, métricas e invocaciones con CloudWatch." },
  { icon: Layers, title: "Integración AWS", text: "Múltiples servicios conectados en un único sistema." },
]

/* ------------------------------------------------------------------ */
/* Componentes internos reutilizables                                 */
/* ------------------------------------------------------------------ */

/* Imagen dentro de una tarjeta glass con borde, glow sutil y caption. */
function ImageCard({ src, alt, caption, className = "" }) {
  return (
    <figure className={`glass relative overflow-hidden p-2 ${className}`}>
      <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full bg-brand-2/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-2">
        <img src={src} alt={alt} loading="lazy" className="block w-full" />
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
function FeatureRow({ index, eyebrow, title, children, image, alt, caption, reverse }) {
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
        src={image}
        alt={alt}
        caption={caption}
        className={reverse ? "lg:order-1" : ""}
      />
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Página                                                             */
/* ------------------------------------------------------------------ */

function AwsProjectPage() {
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
          <span className="eyebrow">Proyecto Cloud · Big Data · Machine Learning</span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            <span className="gradient-brand">Predictive Maintenance en AWS</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Sistema de mantenimiento predictivo que procesa datos IoT de motores,
            ejecuta un modelo de Machine Learning y genera predicciones de riesgo
            de fallo dentro de una arquitectura serverless en AWS.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {techBadges.map((t) => (
              <span key={t} className="badge badge-brand">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Tarjeta de highlights */}
        <div className="glass hairline-top p-6 sm:p-7">
          <div className="flex items-center gap-2 text-sm font-medium text-accent">
            <span className="status-dot" />
            Proyecto real implementado
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

      {/* Bloques */}
      <div className="mt-20 space-y-20 sm:mt-24 sm:space-y-24">
        {/* 2 · Problema + datos + S3 */}
        <FeatureRow
          index="1"
          eyebrow="El problema y los datos"
          title="De sensores industriales a un data lake en S3"
          image={s3BucketImg}
          alt="Estructura de carpetas del bucket de Amazon S3 usado como data lake"
          caption="Amazon S3 organizado como data lake del proyecto"
        >
          <p>
            Una avería inesperada en un motor industrial provoca paradas de
            producción y costes urgentes. El sistema anticipa ese riesgo
            analizando lecturas de sensores antes de que ocurra el fallo.
          </p>
          <p>
            Parte del dataset{" "}
            <strong className="text-slate-100">NASA C-MAPSS FD001</strong>, que
            simula 21 sensores de motores. Esos datos se almacenan en Amazon S3,
            que actúa como data lake separando lo original de lo procesado.
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {["Datos raw", "Datos procesados", "Modelo .pkl", "Umbral de decisión", "Dashboard HTML"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <Check className="h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </FeatureRow>

        {/* 3 · Entrenamiento offline */}
        <FeatureRow
          index="2"
          eyebrow="Entrenamiento offline"
          title="El modelo se entrena una vez y se reutiliza"
          image={modeloS3Img}
          alt="Modelo entrenado guardado como archivo .pkl en Amazon S3"
          caption="Modelo Random Forest guardado en S3 como .pkl"
          reverse
        >
          <p>
            El entrenamiento se realiza de forma offline en SageMaker Notebook, no
            en cada predicción. A partir de FD001 se calcula la vida útil restante
            del motor (<strong className="text-slate-100">RUL</strong>) y se entrena
            un <strong className="text-slate-100">Random Forest</strong> con
            Scikit-learn como clasificación binaria: normal o riesgo.
          </p>
          <p>
            El modelo final se guarda en S3 como{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[0.85em] text-brand">.pkl</code>{" "}
            junto a su umbral de decisión, ajustado a{" "}
            <strong className="text-slate-100">0.4</strong> para priorizar la
            detección de fallos y reducir falsos negativos.
          </p>
        </FeatureRow>

        {/* 4 · Lambdas */}
        <FeatureRow
          index="3"
          eyebrow="Lógica del sistema"
          title="Lambdas con responsabilidades separadas"
          image={lambdasImg}
          alt="Listado de funciones AWS Lambda del proyecto"
          caption="Funciones Lambda del pipeline"
        >
          <p>
            Cada función Lambda tiene una responsabilidad concreta. Separar la
            lógica en piezas pequeñas mantiene el sistema claro, mantenible y fácil
            de orquestar.
          </p>
          <ul className="space-y-2.5">
            {lambdas.map((l) => (
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
          eyebrow="Orquestación"
          title="Step Functions coordina todo el flujo"
          image={stepFunctionsImg}
          alt="Diagrama del flujo de AWS Step Functions del pipeline"
          caption="Pipeline orquestado con Step Functions"
          reverse
        >
          <p>
            Antes el proceso dependía de pasos manuales. Ahora Step Functions
            ejecuta el flujo de forma ordenada, trazable y automática, desde la
            ingesta hasta la visualización.
          </p>
          <ol className="space-y-2">
            {pipeline.map((step, i) => (
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
          eyebrow="Resultados"
          title="Histórico de predicciones en DynamoDB"
          image={dynamoDBImg}
          alt="Tabla iot_predictions en Amazon DynamoDB con las predicciones"
          caption="Tabla iot_predictions en DynamoDB"
        >
          <p>
            Cada predicción se guarda en la tabla{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[0.85em] text-brand">iot_predictions</code>,
            ordenada por sensor y fecha. Esto permite consultar el resultado, la
            probabilidad de riesgo, el umbral aplicado y el modelo utilizado.
          </p>
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
              Visualización
            </span>
          </div>
          <h2 className="mt-4 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
            Un dashboard que convierte el modelo en información útil
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            A partir de los datos de DynamoDB, el sistema genera automáticamente un
            dashboard HTML con el total de predicciones, motores normales, motores
            en riesgo, probabilidad media de fallo y el histórico de inferencias.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <ImageCard
              src={dashboard1Img}
              alt="Dashboard con métricas resumen de las predicciones de mantenimiento"
              caption="Métricas resumen del sistema"
            />
            <ImageCard
              src={dashboard2Img}
              alt="Dashboard con el histórico de predicciones por motor"
              caption="Histórico de predicciones"
            />
          </div>
        </section>

        {/* 8 · Qué demuestra */}
        <section>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow is-centered">Qué demuestra este proyecto</span>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              No es solo un modelo: es un sistema completo
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              He integrado un modelo de Machine Learning dentro de una arquitectura
              AWS que automatiza la ingesta, la limpieza, la inferencia, el
              almacenamiento y la visualización.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {proofs.map((p) => {
              const Icon = p.icon
              return (
                <article key={p.title} className="glass glass-hover p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{p.text}</p>
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
                ¿Quieres ver más sobre mi perfil?
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Este proyecto combina cloud, backend, datos e IA aplicada. Hablemos.
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

export default AwsProjectPage
