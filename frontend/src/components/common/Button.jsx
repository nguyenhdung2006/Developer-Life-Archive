import { Link } from 'react-router-dom'

/**
 * Button — wraps React Router Link with consistent variant styling.
 *
 * Props:
 *   to       — internal route path (required)
 *   variant  — "primary" | "secondary" (default: "primary")
 *   children — button label
 *   className — optional extra classes
 */
function Button({ to, variant = 'primary', children, className = '' }) {
  const base =
    'inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

  const variants = {
    primary:
      'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-500',
    secondary:
      'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white',
  }

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}

export default Button
