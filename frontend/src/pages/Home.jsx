import Container from '../components/common/Container'

/**
 * Home — landing page placeholder.
 */
function Home() {
  return (
    <Container className="py-20">
      <div className="max-w-2xl">

        {/* Badge */}
        <span className="inline-block mb-6 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-900/40 text-indigo-400 border border-indigo-700/30">
          Developer Life Archive
        </span>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight">
          HuyDung<span className="text-indigo-400"> Lab</span>
        </h1>

        {/* Tagline */}
        <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-10">
          Projects, experiments, devlogs and lessons from my software
          development journey.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-indigo-700/40 mb-10" />

        {/* Status note */}
        <p className="text-cyan-500 text-sm font-mono">
          ✦ Frontend shell initialized — portfolio content coming next.
        </p>

      </div>
    </Container>
  )
}

export default Home
