function DevlogTagList({ tags, className = '' }) {
  if (!Array.isArray(tags) || tags.length === 0) {
    return null
  }

  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded border border-slate-700/40 bg-slate-800/60 px-2 py-0.5 text-[11px] font-medium text-slate-400"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default DevlogTagList
