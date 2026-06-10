import { Link } from 'react-router-dom'
import DevlogMeta from './DevlogMeta'
import DevlogStatusBadge from './DevlogStatusBadge'
import DevlogTagList from './DevlogTagList'

const actionLabel = {
  Published: 'Read notes',
  Draft: 'View draft',
  Planned: 'View plan',
}

function DevlogCard({ entry, relatedProject }) {
  const {
    slug,
    title,
    date,
    excerpt,
    tags = [],
    readingTime,
    status,
  } = entry

  const safeTitle = title || 'Untitled devlog'
  const hasSlug = Boolean(slug)
  const label = actionLabel[status] ?? 'View entry'

  return (
    <article className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 flex flex-col gap-5 hover:border-indigo-700/30 hover:bg-indigo-900/5 transition-colors duration-200">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Build note
          </p>
          <h2 className="text-xl font-bold leading-snug text-white">
            {safeTitle}
          </h2>
        </div>
        <DevlogStatusBadge status={status} />
      </div>

      {excerpt ? (
        <p className="text-sm leading-relaxed text-slate-400">
          {excerpt}
        </p>
      ) : (
        <p className="text-sm leading-relaxed text-slate-500">
          Notes for this entry will be added later.
        </p>
      )}

      <DevlogMeta
        date={date}
        readingTime={readingTime}
        relatedProject={relatedProject}
      />

      <DevlogTagList tags={tags} />

      {hasSlug && (
        <div className="mt-auto border-t border-white/5 pt-4">
          <Link
            to={`/devlog/${slug}`}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors duration-200"
          >
            {label} -&gt;
          </Link>
        </div>
      )}
    </article>
  )
}

export default DevlogCard
