import { useParams } from 'react-router-dom'
import Container from '../components/common/Container'

/**
 * ProjectDetail — placeholder for individual project case study.
 * Displays the :slug param from the URL.
 */
function ProjectDetail() {
  const { slug } = useParams()

  return (
    <Container className="py-20">
      <div className="max-w-2xl">

        <span className="inline-block mb-6 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-900/40 text-indigo-400 border border-indigo-700/30">
          Project Detail
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">
          Project Detail
        </h1>

        <p className="text-slate-500 text-sm font-mono mb-8">
          slug: <span className="text-cyan-400">{slug}</span>
        </p>

        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          Detailed project case study coming soon.
        </p>

        <div className="w-16 h-px bg-indigo-700/40 mb-10" />

        <p className="text-slate-600 text-sm font-mono">
          ○ Full case study layout coming in a future task.
        </p>

      </div>
    </Container>
  )
}

export default ProjectDetail
