const statusStyle = {
  Published: 'bg-emerald-900/40 text-emerald-400 border-emerald-700/30',
  Draft: 'bg-amber-900/30 text-amber-400 border-amber-700/30',
  Planned: 'bg-slate-800/70 text-slate-400 border-slate-600/30',
}

function DevlogStatusBadge({ status }) {
  const label = status || 'Planned'
  const pillStyle =
    statusStyle[label] ?? 'bg-slate-800/70 text-slate-400 border-slate-600/30'

  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${pillStyle}`}
    >
      {label}
    </span>
  )
}

export default DevlogStatusBadge
