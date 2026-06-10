import { Link } from 'react-router-dom'

function DevlogMeta({ date, readingTime, relatedProject, className = '' }) {
  const hasDate = Boolean(date)
  const hasReadingTime = Boolean(readingTime)
  const hasRelatedProject = Boolean(relatedProject?.slug && relatedProject?.title)

  if (!hasDate && !hasReadingTime && !hasRelatedProject) {
    return null
  }

  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500 ${className}`}>
      {hasDate && <span className="font-mono">{date}</span>}
      {hasReadingTime && <span className="font-mono">{readingTime}</span>}
      {hasRelatedProject && (
        <Link
          to={`/projects/${relatedProject.slug}`}
          className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors duration-200"
        >
          Related: {relatedProject.title}
        </Link>
      )}
    </div>
  )
}

export default DevlogMeta
