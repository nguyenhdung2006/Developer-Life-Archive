/**
 * Container — reusable max-width wrapper with horizontal padding.
 * Used by Layout and pages to keep content aligned.
 */
function Container({ children, className = '' }) {
  return (
    <div className={`max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default Container
