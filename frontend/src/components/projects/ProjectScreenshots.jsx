/**
 * ProjectScreenshots — renders project screenshots or an honest empty placeholder.
 *
 * Rules:
 *   - If screenshots array has items, render them (img tags with safe alt text).
 *   - If empty, show a polished "Screenshots coming soon" panel.
 *   - Do NOT render broken img tags.
 *   - Do NOT use external placeholder image URLs.
 *   - Do NOT invent image paths.
 *
 * Props:
 *   screenshots — array of image paths from project data (may be empty)
 *   projectTitle — used for img alt text
 */
function ProjectScreenshots({ screenshots = [], projectTitle = 'Project' }) {
  if (screenshots.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-8 py-14 text-center">
        <p className="text-slate-600 text-2xl mb-4">□</p>
        <p className="text-slate-400 text-sm font-semibold mb-1">
          Screenshots coming soon
        </p>
        <p className="text-slate-600 text-xs">
          Real screenshots or recordings will be added when available.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {screenshots.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`${projectTitle} screenshot ${index + 1}`}
          className="w-full rounded-xl border border-white/5 object-cover"
          loading="lazy"
        />
      ))}
    </div>
  )
}

export default ProjectScreenshots
