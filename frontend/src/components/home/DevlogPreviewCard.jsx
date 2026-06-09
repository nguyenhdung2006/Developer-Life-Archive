import { Link } from 'react-router-dom'

/** Maps devlog status to styling */
const statusConfig = {
  Published: {
    label: 'Published',
    style: 'bg-emerald-900/40 text-emerald-400 border-emerald-700/30',
  },
  Draft: {
    label: 'Draft',
    style: 'bg-amber-900/30 text-amber-400 border-amber-700/30',
  },
  Planned: {
    label: 'Planned',
    style: 'bg-slate-700/40 text-slate-400 border-slate-600/30',
  },
}

/**
 * DevlogPreviewCard — compact card for a devlog entry on the Home page.
 * Status is clearly shown so Planned/Draft entries are not mistaken for Published.
 *
 * Props:
 *   entry — a single devlog object from devlogs.js
 *   to    — the route path to link to (e.g. /devlog/:slug)
 */
function DevlogPreviewCard({ entry, to }) {
  const { title, date, excerpt, tags, readingTime, status } = entry
  const config = statusConfig[status] ?? statusConfig.Planned
  const visibleTags = tags.slice(0, 4)

  return (
    <article className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 flex flex-col gap-4 hover:border-indigo-700/30 hover:bg-indigo-900/5 transition-colors duration-200">
      {/* Top row: date + status */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-slate-600 text-xs font-mono">{date}</span>
        <span
          className={`inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-full border ${config.style}`}
        >
          {config.label}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white leading-snug">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1">
        {excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {visibleTags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-800/60 text-slate-400 border border-slate-700/40"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer: reading time + link */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/5">
        <span className="text-slate-600 text-xs font-mono">{readingTime}</span>
        {status === 'Published' ? (
          <Link
            to={to}
            className="text-indigo-400 hover:text-indigo-300 text-xs font-semibold transition-colors duration-200"
          >
            Read →
          </Link>
        ) : (
          <span className="text-slate-600 text-xs italic">Coming soon</span>
        )}
      </div>
    </article>
  )
}

export default DevlogPreviewCard
