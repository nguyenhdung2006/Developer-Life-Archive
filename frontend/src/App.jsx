import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Devlog from './pages/Devlog'
import DevlogDetail from './pages/DevlogDetail'
import About from './pages/About'

/**
 * App — defines all client-side routes.
 * Layout wraps every route via the Outlet pattern.
 * No page content lives here.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="devlog" element={<Devlog />} />
          <Route path="devlog/:slug" element={<DevlogDetail />} />
          <Route path="about" element={<About />} />
          {/* Fallback for unknown paths */}
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center py-40 text-center gap-4">
                <p className="text-6xl font-bold text-indigo-900">404</p>
                <p className="text-slate-400 text-lg">Page not found.</p>
                <a href="/" className="text-indigo-400 hover:text-indigo-300 text-sm underline underline-offset-4">
                  Go home
                </a>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

