const badges = [
  'Java / Spring Boot focused',
  'Project-based learning',
  'Backend & game systems',
  'Hanoi, Vietnam',
]

function AboutHero() {
  return (
    <section className="pb-12">
      <div className="max-w-3xl">
        <span className="mb-6 inline-block rounded-full border border-indigo-700/30 bg-indigo-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-400">
          About
        </span>

        <h1 className="mb-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
          About Huy Dung
        </h1>

        <p className="text-lg leading-relaxed text-slate-300">
          I'm Huy Dung, a second-year software engineering student interested in backend development, game systems, and AI-assisted learning tools.
        </p>

        <p className="mt-4 text-base leading-relaxed text-slate-400">
          I enjoy building real projects, debugging production issues, and turning small ideas into usable products.
        </p>

        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Backend Developer | Game Developer | Problem Solver
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutHero
