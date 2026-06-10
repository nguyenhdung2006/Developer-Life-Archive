import { Link, useParams } from 'react-router-dom'
import Container from '../components/common/Container'
import DevlogContent from '../components/devlog/DevlogContent'
import DevlogMeta from '../components/devlog/DevlogMeta'
import DevlogNotFound from '../components/devlog/DevlogNotFound'
import DevlogStatusBadge from '../components/devlog/DevlogStatusBadge'
import DevlogTagList from '../components/devlog/DevlogTagList'
import { devlogs, projects } from '../data'

function DevlogDetail() {
  const { slug } = useParams()
  const entries = Array.isArray(devlogs) ? devlogs : []
  const entry = entries.find((devlog) => devlog.slug === slug)

  if (!entry) {
    return (
      <Container className="py-16 sm:py-20">
        <DevlogNotFound slug={slug} />
      </Container>
    )
  }

  const {
    title,
    date,
    excerpt,
    tags = [],
    readingTime,
    relatedProjectSlug,
    status,
    content,
  } = entry

  const relatedProject = relatedProjectSlug
    ? projects.find((project) => project.slug === relatedProjectSlug) ?? null
    : null

  return (
    <Container className="py-16 sm:py-20">
      <Link
        to="/devlog"
        className="mb-10 inline-flex text-sm font-semibold text-indigo-300 hover:text-indigo-200 transition-colors duration-200"
      >
        &larr; Back to Devlog
      </Link>

      <article className="max-w-3xl">
        <header className="border-b border-white/5 pb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <DevlogStatusBadge status={status} />
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
              Devlog Entry
            </p>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title || 'Untitled devlog'}
          </h1>

          {excerpt && (
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              {excerpt}
            </p>
          )}

          <DevlogMeta
            date={date}
            readingTime={readingTime}
            relatedProject={relatedProject}
            className="mt-6"
          />

          <DevlogTagList tags={tags} className="mt-6" />
        </header>

        <section className="py-10">
          <DevlogContent content={content} status={status} />
        </section>

        <div className="flex flex-col gap-3 border-t border-white/5 pt-8 sm:flex-row">
          <Link
            to="/devlog"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors duration-200"
          >
            View all devlogs
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
          >
            View projects
          </Link>
        </div>
      </article>
    </Container>
  )
}

export default DevlogDetail
