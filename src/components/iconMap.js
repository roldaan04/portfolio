import {
  Layers,
  Workflow,
  Trending,
  Code,
  Server,
  Database,
  Cloud,
  Wrench,
  Briefcase,
  Spark,
} from "./Icons"

/* Mapa nombre → componente, para resolver iconos a partir de strings de datos
   (ver src/data/site.js). Vive aparte de Icons.jsx para no romper Fast Refresh. */
export const iconMap = {
  layers: Layers,
  workflow: Workflow,
  trending: Trending,
  code: Code,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
  briefcase: Briefcase,
  spark: Spark,
}
