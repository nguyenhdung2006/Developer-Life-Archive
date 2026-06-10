import Container from '../components/common/Container'
import DevlogCard from '../components/devlog/DevlogCard'
import { devlogs, projects } from '../data'

function Devlog() {
  const entries = Array.isArray(devlogs) ? devlogs : []
  const hasEntries = entries.length > 0

  const findRelatedProject = (relatedProjectSlug) => {
    if (!relatedProjectSlug) {
      return null
    }

    return projects.find((project) => project.slug === relatedProjectSlug) ?? null
  }

  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <span className="mb-6 inline-block rounded-full border border-cyan-700/30 bg-cyan-900/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
          Devlog
        </span>

        <h1 className="mb-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Technical notes, build logs, and lessons learned
        </h1>

        <p className="mb-10 text-lg leading-relaxed text-slate-400">
          Notes from building learning tools, backend systems, game prototypes, and this developer archive.
        </p>
      </div>

      <div className="mb-12 rounded-2xl border border-white/5 bg-white/[0.04] p-5 shadow-2xl shadow-indigo-950/20 sm:p-6">
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          These entries are written as practical build notes: what I tried, what broke, what I learned, and what I would improve next.
        </p>
      </div>

      {hasEntries ? (
        <div className="grid gap-5 md:grid-cols-2">
          {entries.map((entry) => (
            <DevlogCard
              key={entry.slug || entry.title}
              entry={entry}
              relatedProject={findRelatedProject(entry.relatedProjectSlug)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 text-center">
          <p className="text-lg font-semibold text-slate-200">No devlog entries yet</p>
          <p className="mt-2 text-sm text-slate-500">
            Build notes and technical reflections will appear here later.
          </p>
        </div>
      )}
    </Container>
  )
}

export default Devlog
