/** Status pill color map — kept in sync with ProjectCard */
const statusStyle = {
  Deployed: 'bg-emerald-900/40 text-emerald-400 border-emerald-700/30',
  'In Progress': 'bg-amber-900/30 text-amber-400 border-amber-700/30',
  Complete: 'bg-slate-700/40 text-slate-300 border-slate-600/30',
  Paused: 'bg-slate-800/40 text-slate-500 border-slate-700/30',
}

function isRealExternalUrl(value) {
  if (typeof value !== 'string') return false

  const trimmed = value.trim()
  if (!trimmed || trimmed === '#' || trimmed.toLowerCase() === 'coming-soon') {
    return false
  }

  try {
    const url = new URL(trimmed)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

/**
 * ProjectDetailHeader — top section of the project case study page.
 *
 * Shows: category + featured badge, title, subtitle (or summary fallback),
 *        status pill, role, tech stack tags, confirmed external action links.
 *
 * Internal navigation is handled by the parent page (back link).
 * External links: GitHub / Demo / Video — only rendered when URL is non-empty.
 *
 * Props:
 *   project — full project object from projects.js
 */
function ProjectDetailHeader({ project }) {
  const {
    title,
    category,
    subtitle,
    summary,
    status,
    role,
    featured,
    techStack = [],
    links = {},
  } = project

  const pillStyle =
    statusStyle[status] ?? 'bg-slate-700/40 text-slate-400 border-slate-600/30'

  const displayText = subtitle || summary || null

  const safeTechStack = Array.isArray(techStack) ? techStack : []
  const hasGithub = isRealExternalUrl(links.github)
  const hasDemo = isRealExternalUrl(links.demo)
  const hasVideo = isRealExternalUrl(links.video)
  const hasAnyLink = hasGithub || hasDemo || hasVideo

  return (
    <div className="py-12 border-b border-white/5">
      {/* Category + featured badge */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400">
          {category}
        </p>
        {featured && (
          <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded bg-indigo-600/30 text-indigo-300 border border-indigo-500/30">
            Featured
          </span>
        )}
      </div>

      {/* Title + status pill */}
      <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>
        <span
          className={`shrink-0 mt-2 inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full border ${pillStyle}`}
        >
          {status}
        </span>
      </div>

      {/* Subtitle / summary */}
      {displayText && (
        <p className="text-slate-300 text-lg leading-relaxed mb-4 max-w-3xl">
          {displayText}
        </p>
      )}

      {/* Role */}
      {role && (
        <p className="text-slate-500 text-sm font-mono mb-6">{role}</p>
      )}

      {/* Tech stack tags */}
      {safeTechStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {safeTechStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/40"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* External action links */}
      {hasAnyLink && (
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {hasGithub && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white transition-colors duration-200"
            >
              GitHub ↗
            </a>
          )}
          {hasDemo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white transition-colors duration-200"
            >
              Demo ↗
            </a>
          )}
          {hasVideo && (
            <a
              href={links.video}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white transition-colors duration-200"
            >
              Video ↗
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectDetailHeader
