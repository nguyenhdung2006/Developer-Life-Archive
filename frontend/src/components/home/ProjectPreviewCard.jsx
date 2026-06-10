import { Link } from 'react-router-dom'

/** Maps project status to a pill color */
const statusStyle = {
  Deployed: 'bg-emerald-900/40 text-emerald-400 border-emerald-700/30',
  'In Progress': 'bg-amber-900/30 text-amber-400 border-amber-700/30',
  Complete: 'bg-slate-700/40 text-slate-300 border-slate-600/30',
  Paused: 'bg-slate-800/40 text-slate-500 border-slate-700/30',
}

/**
 * ProjectPreviewCard — compact card for a featured project preview on the Home page.
 *
 * Props:
 *   project — a single project object from projects.js
 */
function ProjectPreviewCard({ project }) {
  const {
    slug,
    title,
    category,
    subtitle,
    status,
    role,
    techStack,
  } = project

  const safeTechStack = Array.isArray(techStack) ? techStack : []
  const visibleTech = safeTechStack.slice(0, 5)
  const pillStyle = statusStyle[status] ?? 'bg-slate-700/40 text-slate-400 border-slate-600/30'

  return (
    <Link
      to={`/projects/${slug}`}
      className="group block rounded-2xl border border-white/5 bg-white/[0.03] p-6 hover:border-indigo-700/40 hover:bg-indigo-900/10 transition-colors duration-200"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-1">
            {category}
          </p>
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors duration-200 leading-snug">
            {title}
          </h3>
        </div>
        <span
          className={`shrink-0 mt-0.5 inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-full border ${pillStyle}`}
        >
          {status}
        </span>
      </div>

      {/* Subtitle */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
        {subtitle}
      </p>

      {/* Role */}
      <p className="text-slate-500 text-xs mb-4 font-mono">{role}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {visibleTech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-800/60 text-slate-400 border border-slate-700/40"
          >
            {tech}
          </span>
        ))}
        {safeTechStack.length > 5 && (
          <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-800/60 text-slate-500 border border-slate-700/40">
            +{safeTechStack.length - 5} more
          </span>
        )}
      </div>
    </Link>
  )
}

export default ProjectPreviewCard
