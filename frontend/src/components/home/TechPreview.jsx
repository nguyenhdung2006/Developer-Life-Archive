/** Color map for level labels */
const levelStyle = {
  'Currently focused on': 'text-indigo-400',
  'Used in projects': 'text-slate-300',
  'Learning / practicing': 'text-cyan-500',
}

/**
 * TechPreview — renders grouped tech stack data in a compact grid.
 * No numeric percentages or "expert" labels.
 *
 * Props:
 *   groups — array of tech stack group objects from techStack.js
 */
function TechPreview({ groups }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {groups.map((group) => (
        <div
          key={group.group}
          className="rounded-xl border border-white/5 bg-white/[0.03] p-5"
        >
          {/* Group header */}
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-1">
            {group.group}
          </p>
          <p className="text-slate-500 text-xs mb-4">{group.description}</p>

          {/* Items */}
          <ul className="space-y-2">
            {group.items.map((item) => (
              <li key={item.name} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                <span className="text-slate-200 text-sm font-medium">{item.name}</span>
                <span
                  className={`text-[11px] font-medium ${levelStyle[item.level] ?? 'text-slate-400'}`}
                >
                  {item.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default TechPreview
