const highlights = [
  'Built and deployed WordArena as a personal learning platform.',
  'Practiced Java/JDBC database integration through console exercises.',
  'Built Python/Pygame combat prototypes to learn game loop, state, and collision logic.',
  'Created HuyDung Lab to document projects, devlogs, and lessons learned.',
]

function ProfileHighlights() {
  return (
    <section className="py-12 border-t border-white/5">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
          Profile Highlights
        </p>
        <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
          Real project experience
        </h2>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
        <ul className="space-y-4">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProfileHighlights
