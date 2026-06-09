import { useParams } from 'react-router-dom'
import Container from '../components/common/Container'

/**
 * DevlogDetail — placeholder for an individual devlog entry.
 * Displays the :slug param from the URL.
 */
function DevlogDetail() {
  const { slug } = useParams()

  return (
    <Container className="py-20">
      <div className="max-w-2xl">

        <span className="inline-block mb-6 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-700/30">
          Devlog Entry
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">
          Devlog Detail
        </h1>

        <p className="text-slate-500 text-sm font-mono mb-8">
          slug: <span className="text-cyan-400">{slug}</span>
        </p>

        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          Full devlog entry coming soon.
        </p>

        <div className="w-16 h-px bg-cyan-700/30 mb-10" />

        <p className="text-slate-600 text-sm font-mono">
          ○ Full devlog reader layout coming in a future task.
        </p>

      </div>
    </Container>
  )
}

export default DevlogDetail
