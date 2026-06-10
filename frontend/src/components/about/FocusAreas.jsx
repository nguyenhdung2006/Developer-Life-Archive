const focusAreas = [
  {
    title: 'Backend development',
    description:
      'Practicing Java, Spring Boot, REST APIs, authentication, and database-backed application design.',
  },
  {
    title: 'Learning tools',
    description:
      'Building vocabulary and study products that turn practice, review, and feedback into usable workflows.',
  },
  {
    title: 'Game systems',
    description:
      'Exploring 2D combat, game loops, state machines, collision logic, and Pygame prototypes.',
  },
  {
    title: 'Devlog / technical writing',
    description:
      'Documenting what worked, what broke, and what could be improved through project case studies and build notes.',
  },
  {
    title: 'AI-assisted workflows',
    description:
      'Learning how AI tools can support explanations, research, debugging, and software development without replacing careful thinking.',
  },
]

function FocusAreas() {
  return (
    <section className="py-12 border-t border-white/5">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
          Focus Areas
        </p>
        <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
          What I am building toward
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {focusAreas.map((area) => (
          <article
            key={area.title}
            className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 hover:border-indigo-700/30 hover:bg-indigo-900/5 transition-colors duration-200"
          >
            <h3 className="text-base font-semibold text-white">{area.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {area.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FocusAreas
