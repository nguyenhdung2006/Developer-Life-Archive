import Container from '../components/common/Container'

/**
 * Devlog — placeholder for the devlog/blog index page.
 */
function Devlog() {
  return (
    <Container className="py-20">
      <div className="max-w-2xl">

        <span className="inline-block mb-6 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-700/30">
          Devlog
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Devlog
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          Technical notes, build logs, and lessons learned will be added here.
        </p>

        <div className="w-16 h-px bg-cyan-700/30 mb-10" />

        <p className="text-slate-600 text-sm font-mono">
          ○ Devlog entries coming in a future task.
        </p>

      </div>
    </Container>
  )
}

export default Devlog
