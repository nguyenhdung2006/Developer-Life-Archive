const placeholderByStatus = {
  Planned:
    'This devlog is planned. Full notes will be added after the implementation or review is complete.',
  Draft:
    'This devlog is still a draft. More details will be added before it is treated as a finished entry.',
  Published: 'Content is not available yet.',
}

function DevlogContent({ content, status }) {
  const paragraphs = Array.isArray(content)
    ? content.filter((paragraph) => typeof paragraph === 'string' && paragraph.trim() !== '')
    : []

  if (paragraphs.length === 0) {
    return (
      <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
        <p className="leading-relaxed text-slate-400">
          {placeholderByStatus[status] ?? placeholderByStatus.Published}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-5 rounded-2xl border border-white/5 bg-white/[0.03] p-6 sm:p-8">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-base leading-8 text-slate-300">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export default DevlogContent
