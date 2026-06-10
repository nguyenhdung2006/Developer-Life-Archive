function ProjectScreenshots({ screenshots = [], projectTitle = 'Project' }) {
  const safeScreenshots = Array.isArray(screenshots)
    ? screenshots.filter((src) => typeof src === 'string' && src.trim() !== '')
    : []
  const safeTitle = projectTitle || 'Project'

  if (safeScreenshots.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-8 py-14 text-center">
        <p className="text-slate-400 text-sm font-semibold mb-1">
          Screenshots coming soon
        </p>
        <p className="text-slate-600 text-xs">
          Real screenshots will be added after UI captures are prepared.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {safeScreenshots.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt={`${safeTitle} screenshot ${index + 1}`}
          className="aspect-video w-full rounded-xl border border-white/5 bg-slate-950/40 object-contain"
          loading="lazy"
        />
      ))}
    </div>
  )
}

export default ProjectScreenshots
