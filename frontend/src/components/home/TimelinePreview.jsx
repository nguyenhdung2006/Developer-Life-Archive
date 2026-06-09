import { Link } from 'react-router-dom'

/** Color map for timeline event types */
const typeStyle = {
  Milestone: { dot: 'bg-indigo-500', label: 'text-indigo-400' },
  Learning: { dot: 'bg-cyan-500', label: 'text-cyan-400' },
  Project: { dot: 'bg-violet-500', label: 'text-violet-400' },
  Deployment: { dot: 'bg-emerald-500', label: 'text-emerald-400' },
  Research: { dot: 'bg-amber-500', label: 'text-amber-400' },
}

/**
 * TimelinePreview — vertical list of development journey milestones.
 * Shows a colored dot + type label, date, title, description, and optional project link.
 *
 * Props:
 *   items — array of timeline objects from timeline.js (pre-sliced by Home.jsx)
 */
function TimelinePreview({ items }) {
  return (
    <ol className="relative border-l border-white/5 space-y-8 ml-2">
      {items.map((item) => {
        const style = typeStyle[item.type] ?? { dot: 'bg-slate-500', label: 'text-slate-400' }

        return (
          <li key={item.id} className="ml-6">
            {/* Timeline dot */}
            <span
              className={`absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-[#080910] ${style.dot}`}
            />

            {/* Type + date */}
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-semibold uppercase tracking-widest ${style.label}`}>
                {item.type}
              </span>
              <span className="text-slate-600 text-xs font-mono">{item.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-white mb-1 leading-snug">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Related project link */}
            {item.relatedProjectSlug && (
              <Link
                to={`/projects/${item.relatedProjectSlug}`}
                className="inline-block mt-2 text-xs text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
              >
                → View project
              </Link>
            )}
          </li>
        )
      })}
    </ol>
  )
}

export default TimelinePreview
