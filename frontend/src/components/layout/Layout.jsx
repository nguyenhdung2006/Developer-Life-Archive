import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

/**
 * Layout — root shell that wraps all pages.
 * Renders Navbar → page content (Outlet) → Footer.
 * Full-height dark background with flex column so footer stays at bottom.
 */
function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080910] text-slate-300">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
