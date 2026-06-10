import { Link } from 'react-router-dom'

/** Status pill color map */
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
 * ProjectCard — fuller project card for the /projects page.
 *
 * Shows: title, category, featured badge, status, role, subtitle,
 *        up to 3 features, up to 2 challenges, up to 6 tech tags,
 *        internal "View case study" link, confirmed external links only.
 *
 * Distinct from ProjectPreviewCard (Home) — not the same card.
 * Internal nav uses React Router Link. External links use <a>.
 *
 * Props:
 *   project — project object from projects.js
 */
function ProjectCard({ project }) {
  const {
    slug,
    title,
    category,
    subtitle,
    status,
    role,
    featured,
    features = [],
    challenges = [],
    techStack = [],
    links = {},
  } = project

  const pillStyle =
    statusStyle[status] ?? 'bg-slate-700/40 text-slate-400 border-slate-600/30'

  const safeTechStack = Array.isArray(techStack) ? techStack : []
  const safeFeatures = Array.isArray(features) ? features : []
  const safeChallenges = Array.isArray(challenges) ? challenges : []
  const visibleTech = safeTechStack.slice(0, 6)
  const visibleFeatures = safeFeatures.slice(0, 3)
  const visibleChallenges = safeChallenges.slice(0, 2)

  const hasGithub = isRealExternalUrl(links.github)
  const hasDemo = isRealExternalUrl(links.demo)
  const hasVideo = isRealExternalUrl(links.video)

  return (
    <article className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 flex flex-col gap-5 hover:border-indigo-700/30 hover:bg-indigo-900/5 transition-colors duration-200">

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          {/* Category + featured badge */}
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400">
              {category}
            </p>
            {featured && (
              <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded bg-indigo-600/30 text-indigo-300 border border-indigo-500/30">
                Featured
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-white leading-snug">
            {title}
          </h3>
        </div>
        {/* Status pill */}
        <span
          className={`shrink-0 mt-0.5 inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-full border ${pillStyle}`}
        >
          {status}
        </span>
      </div>

      {/* ── Subtitle ───────────────────────────────────────────────────── */}
      {subtitle && (
        <p className="text-slate-300 text-sm leading-relaxed">{subtitle}</p>
      )}

      {/* ── Role ───────────────────────────────────────────────────────── */}
      {role && (
        <p className="text-slate-500 text-xs font-mono">{role}</p>
      )}

      {/* ── Features ───────────────────────────────────────────────────── */}
      {visibleFeatures.length > 0 && (
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
            Key Features
          </p>
          <ul className="space-y-1">
            {visibleFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                {f}
              </li>
            ))}
            {safeFeatures.length > 3 && (
              <li className="text-xs text-slate-600 font-mono pl-3.5">
                +{safeFeatures.length - 3} more
              </li>
            )}
          </ul>
        </div>
      )}

      {/* ── Challenges ─────────────────────────────────────────────────── */}
      {visibleChallenges.length > 0 && (
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
            Challenges
          </p>
          <ul className="space-y-1">
            {visibleChallenges.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500/70" />
                {c}
              </li>
            ))}
            {safeChallenges.length > 2 && (
              <li className="text-xs text-slate-600 font-mono pl-3.5">
                +{safeChallenges.length - 2} more
              </li>
            )}
          </ul>
        </div>
      )}

      {/* ── Tech tags ──────────────────────────────────────────────────── */}
      {visibleTech.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-800/60 text-slate-400 border border-slate-700/40"
            >
              {tech}
            </span>
          ))}
          {safeTechStack.length > 6 && (
            <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-800/60 text-slate-500 border border-slate-700/40">
              +{safeTechStack.length - 6} more
            </span>
          )}
        </div>
      )}

      {/* ── Action row ─────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-white/5 sm:flex-row sm:flex-wrap sm:items-center">
        {/* Internal: View case study */}
        <Link
          to={`/projects/${slug}`}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-200"
        >
          View case study →
        </Link>

        {/* External: GitHub — only if confirmed URL */}
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

        {/* External: Demo — only if confirmed URL */}
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

        {/* External: Video — only if confirmed URL */}
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
    </article>
  )
}

export default ProjectCard
