/**
 * ProjectDetailList — renders a bullet list for features, challenges, or lessons.
 *
 * Props:
 *   items       — array of strings from project data
 *   accentColor — Tailwind color class for the bullet dot (default: indigo)
 *   emptyText   — text shown when items array is empty (optional)
 */
function ProjectDetailList({ items = [], accentColor = 'bg-indigo-500', emptyText }) {
  if (items.length === 0) {
    if (!emptyText) return null
    return (
      <p className="text-slate-500 text-sm italic">{emptyText}</p>
    )
  }

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accentColor}`} />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default ProjectDetailList
