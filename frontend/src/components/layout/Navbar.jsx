import { NavLink } from 'react-router-dom'
import Container from '../common/Container'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/devlog', label: 'Devlog' },
  { to: '/about', label: 'About' },
]

/**
 * Navbar — sticky top navigation bar with brand and nav links.
 * Uses NavLink for active route highlighting.
 * Design: dark glass style, subtle bottom border, indigo/cyan accent on active.
 */
function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#080910]/80 backdrop-blur-md">
      <Container>
        <nav className="flex flex-col items-start gap-3 py-4 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">

          {/* Brand */}
          <NavLink to="/" className="flex min-w-0 flex-col leading-none select-none group">
            <span className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors duration-200">
              HuyDung Lab
            </span>
            <span className="text-[10px] font-medium tracking-widest uppercase text-slate-500 group-hover:text-slate-400 transition-colors duration-200">
              Developer Life Archive
            </span>
          </NavLink>

          {/* Nav links */}
          <ul className="flex w-full flex-wrap items-center gap-1 sm:w-auto sm:justify-end sm:gap-2">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    [
                      'inline-flex px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'text-indigo-400 bg-indigo-900/30 border border-indigo-700/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5',
                    ].join(' ')
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Navbar
