/**
 * ProjectFilter — horizontal scrollable category filter pill group.
 *
 * Props:
 *   categories   — array of category strings (including "All")
 *   selected     — currently selected category string
 *   onSelect     — callback (category: string) => void
 */
function ProjectFilter({ categories, selected, onSelect }) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2"
    >
      {categories.map((cat) => {
        const isActive = selected === cat
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelect(cat)}
            aria-pressed={isActive}
            className={[
              'px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200',
              isActive
                ? 'bg-indigo-600 text-white'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-slate-200',
            ].join(' ')}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}

export default ProjectFilter
