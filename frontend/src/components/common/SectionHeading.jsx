/**
 * SectionHeading — reusable section header with eyebrow label, title, and optional description.
 *
 * Props:
 *   eyebrow     — small uppercase label above the title (optional)
 *   title       — main section heading (required)
 *   description — supporting paragraph text (optional)
 *   className   — optional extra classes on the wrapper
 */
function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`mb-10 ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-widest uppercase text-indigo-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-slate-400 text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
