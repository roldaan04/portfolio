import { Link } from "react-router-dom"
import { ZERO_WIDTH, chatLinkLabel, isInternalHref, normalizeChatHref } from "../../data/chatLinks"

/* Markdown mínimo y seguro para las respuestas del chat:
   párrafos, listas "- ", **negrita** y enlaces [texto](url) / <url>.
   Solo se convierten en enlace las URLs de la lista blanca (chatLinks.js);
   el resto se muestra como texto. No se usa dangerouslySetInnerHTML. */

const INLINE = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)|<((?:https?:\/\/|mailto:|tel:|\/)[^>\s]+)>/g

/* Si el modelo usa la propia URL como texto ("[/experiencia](/experiencia)"),
   se sustituye por un nombre legible. */
function linkText(label, href, lang) {
  const l = (label || "").trim().replace(ZERO_WIDTH, "")
  const looksLikeUrl = !l || l === href || /^(https?:\/\/|mailto:|tel:|\/)/i.test(l)
  return looksLikeUrl ? chatLinkLabel(href, lang) : label
}

function ChatLink({ href, children, onNavigate }) {
  const cls =
    "font-medium text-brand underline decoration-brand/40 underline-offset-2 transition-colors hover:text-[#67e8f9] hover:decoration-brand"
  if (isInternalHref(href)) {
    return (
      <Link to={href} className={cls} onClick={onNavigate}>
        {children}
      </Link>
    )
  }
  const external = href.startsWith("http") || href.startsWith("/cv/")
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {children}
    </a>
  )
}

function renderInline(text, ctx, keyPrefix) {
  const out = []
  let last = 0
  let i = 0
  for (const m of text.matchAll(INLINE)) {
    if (m.index > last) out.push(text.slice(last, m.index))
    const key = `${keyPrefix}-${i++}`
    if (m[1] != null) {
      out.push(
        <strong key={key} className="font-semibold text-white">
          {renderInline(m[1], ctx, key)}
        </strong>,
      )
    } else {
      const rawHref = m[3] ?? m[4]
      const href = normalizeChatHref(rawHref)
      const label = m[2] ?? ""
      if (href) {
        out.push(
          <ChatLink key={key} href={href} onNavigate={ctx.onNavigate}>
            {linkText(label, href, ctx.lang)}
          </ChatLink>,
        )
      } else {
        // URL no permitida: solo el texto (o nada si el texto era la URL).
        out.push(label && label !== rawHref ? label : "")
      }
    }
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

const BULLET = /^\s*(?:[-*•]|\d+[.)])\s+/

function ChatMarkdown({ text, lang, onNavigate }) {
  const ctx = { lang, onNavigate }
  const blocks = text
    .replace(/\r/g, "")
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean)

  return (
    <div className="space-y-2.5">
      {blocks.map((block, bi) => {
        const lines = block.split("\n").map((l) => l.replace(/\s+$/, ""))
        const items = []
        const para = []
        const nodes = []
        const flushPara = () => {
          if (!para.length) return
          const key = `p${bi}-${nodes.length}`
          nodes.push(
            <p key={key}>
              {para.map((l, li) => (
                <span key={li}>
                  {li > 0 && <br />}
                  {renderInline(l.replace(/^#+\s*/, ""), ctx, `${key}-${li}`)}
                </span>
              ))}
            </p>,
          )
          para.length = 0
        }
        const flushList = () => {
          if (!items.length) return
          const key = `l${bi}-${nodes.length}`
          nodes.push(
            <ul key={key} className="space-y-1.5 pl-1">
              {items.map((it, ii) => (
                <li key={ii} className="flex gap-2">
                  <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-brand" />
                  <span>{renderInline(it, ctx, `${key}-${ii}`)}</span>
                </li>
              ))}
            </ul>,
          )
          items.length = 0
        }
        for (const line of lines) {
          if (BULLET.test(line)) {
            flushPara()
            items.push(line.replace(BULLET, ""))
          } else {
            flushList()
            para.push(line)
          }
        }
        flushPara()
        flushList()
        return nodes
      })}
    </div>
  )
}

export default ChatMarkdown
