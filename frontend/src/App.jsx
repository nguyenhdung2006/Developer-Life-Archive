function App() {
  return (
    <main className="min-h-screen bg-[#0a0b14] flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center border border-indigo-900/50 rounded-2xl px-8 py-12 bg-[#0e0f1e]">

        {/* Badge */}
        <span className="inline-block mb-6 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-900/40 text-indigo-400 border border-indigo-700/40">
          Developer Life Archive
        </span>

        {/* Project name */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">
          HuyDung<span className="text-indigo-400"> Lab</span>
        </h1>

        {/* Tagline */}
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
          Projects, experiments, devlogs and lessons from my software
          development journey.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-indigo-700/50 mx-auto mb-8" />

        {/* Status */}
        <p className="text-cyan-500 text-sm font-mono">
          ✦ Frontend foundation initialized. Portfolio UI coming next.
        </p>

      </div>
    </main>
  )
}

export default App
