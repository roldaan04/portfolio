/* Iconos SVG inline, line-style, heredan el color con currentColor.
   Tamaño y color se controlan por className (ej. "h-5 w-5 text-brand"). */

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
}

export function ArrowRight({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowUpRight({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function Mail({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function Linkedin({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" />
    </svg>
  )
}

export function Github({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export function Download({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    </svg>
  )
}

export function MapPin({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function Check({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  )
}

export function Spark({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3v4M12 17v4M5 12H1M23 12h-4M6.3 6.3 3.5 3.5M20.5 20.5l-2.8-2.8M17.7 6.3l2.8-2.8M3.5 20.5l2.8-2.8" />
    </svg>
  )
}

export function Code({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6M13 4l-2 16" />
    </svg>
  )
}

export function Server({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5v.01M7 16.5v.01" />
    </svg>
  )
}

export function Database({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  )
}

export function Cloud({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 6.97" />
      <path d="M12 13v6m0 0 2.5-2.5M12 19l-2.5-2.5" />
    </svg>
  )
}

export function Wrench({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-2.6 2.6-1.4-1.4 2.6-2.6a4 4 0 0 0-1.6.4Z" />
    </svg>
  )
}

export function Layers({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 17l9 5 9-5" />
    </svg>
  )
}

export function Workflow({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M6.5 10v3.5a3 3 0 0 0 3 3H14" />
      <path d="M17.5 14v-2.5a3 3 0 0 0-3-3H10" />
    </svg>
  )
}

export function Trending({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M3 17l6-6 4 4 7-7M21 8v5h-5" />
    </svg>
  )
}

export function Briefcase({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </svg>
  )
}

export function GraduationCap({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" />
      <path d="M6 11.5V16c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-4.5M21 9v5" />
    </svg>
  )
}

export function Folder({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    </svg>
  )
}

export function Target({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}
