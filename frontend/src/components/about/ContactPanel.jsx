function ContactPanel() {
  return (
    <section className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
        Contact
      </p>
      <h2 className="text-xl font-bold text-white">Find me online</h2>

      <div className="mt-5 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            GitHub
          </p>
          <a
            href="https://github.com/nguyenhdung2006"
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors duration-200"
          >
            github.com/nguyenhdung2006
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Location
          </p>
          <p className="mt-1 text-sm text-slate-300">Hanoi, Vietnam</p>
        </div>

        <p className="border-t border-white/5 pt-4 text-sm leading-relaxed text-slate-500">
          More contact links will be added later.
        </p>
      </div>
    </section>
  )
}

export default ContactPanel
