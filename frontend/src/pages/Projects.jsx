import Container from '../components/common/Container'

/**
 * Projects — placeholder for the project showcase page.
 */
function Projects() {
  return (
    <Container className="py-20">
      <div className="max-w-2xl">

        <span className="inline-block mb-6 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-900/40 text-indigo-400 border border-indigo-700/30">
          Portfolio
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Projects
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          Project case studies will be added here.
        </p>

        <div className="w-16 h-px bg-indigo-700/40 mb-10" />

        <p className="text-slate-600 text-sm font-mono">
          ○ Project cards coming in a future task.
        </p>

      </div>
    </Container>
  )
}

export default Projects
