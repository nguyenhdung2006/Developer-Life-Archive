import { useState } from 'react'
import { projects } from '../data'
import Container from '../components/common/Container'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectFilter from '../components/projects/ProjectFilter'
import ProjectEmptyState from '../components/projects/ProjectEmptyState'

/** All categories derived from data, order fixed to match task spec. */
const CATEGORIES = ['All', 'Web App', 'Game', 'Java Practice', 'Research', 'Portfolio']

/**
 * Projects — full /projects page with category filter and project cards.
 * Filtering is client-side; state lives in this component.
 */
function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = projects
    .filter((p) => activeFilter === 'All' || p.category === activeFilter)
    .sort((a, b) => a.priority - b.priority)

  return (
    <div>
      {/* ── Page header ──────────────────────────────────────────────── */}
      <section aria-label="Page header" className="py-14 border-b border-white/5">
        <Container>
          <p className="mb-3 text-xs font-semibold tracking-widest uppercase text-indigo-400">
            Project Archive
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Projects
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            A collection of web apps, game prototypes, Java practice projects, research work,
            and this portfolio archive.
          </p>
        </Container>
      </section>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <section aria-label="Project list" className="py-12">
        <Container>

          {/* Intro panel */}
          <div className="mb-10 rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-5">
            <p className="text-slate-400 text-sm leading-relaxed">
              These case studies focus on what was built, what problems each project tried to
              solve, the technical challenges encountered, and the lessons learned along the way.
            </p>
          </div>

          {/* Category filter */}
          <div className="mb-8">
            <ProjectFilter
              categories={CATEGORIES}
              selected={activeFilter}
              onSelect={setActiveFilter}
            />
          </div>

          {/* Result count */}
          <p className="text-slate-600 text-xs font-mono mb-6">
            {activeFilter === 'All'
              ? `Showing all ${filtered.length} projects`
              : `Showing ${filtered.length} project${filtered.length !== 1 ? 's' : ''} in "${activeFilter}"`}
          </p>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.length > 0
              ? filtered.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))
              : <ProjectEmptyState onReset={() => setActiveFilter('All')} />}
          </div>

        </Container>
      </section>
    </div>
  )
}

export default Projects

