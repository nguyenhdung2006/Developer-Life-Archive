/**
 * ProjectDetailSection — reusable section wrapper for case study content blocks.
 *
 * Renders an eyebrow label, a section title, and a slot for children content.
 * Used by: Overview, Key Features, Tech Stack, Challenges, Lessons, Screenshots.
 *
 * Props:
 *   eyebrow   — small uppercase label (optional)
 *   title     — section heading text (required)
 *   children  — content slot
 *   className — optional extra classes on the wrapper
 */
function ProjectDetailSection({ eyebrow, title, children, className = '' }) {
  return (
    <section className={`py-10 border-t border-white/5 ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-indigo-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-snug">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default ProjectDetailSection
