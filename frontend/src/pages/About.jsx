import { Link } from 'react-router-dom'
import AboutHero from '../components/about/AboutHero'
import ContactPanel from '../components/about/ContactPanel'
import CvPanel from '../components/about/CvPanel'
import FocusAreas from '../components/about/FocusAreas'
import ProfileHighlights from '../components/about/ProfileHighlights'
import Container from '../components/common/Container'
import { techStack } from '../data'

function About() {
  const stackGroups = Array.isArray(techStack) ? techStack.slice(0, 5) : []

  return (
    <Container className="py-16 sm:py-20">
      <AboutHero />

      <FocusAreas />

      {stackGroups.length > 0 && (
        <section className="py-12 border-t border-white/5">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
              Current Stack
            </p>
            <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
              Tools I am using and practicing
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
              A compact view of the technologies already used across projects or currently being practiced.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {stackGroups.map((group) => (
              <article
                key={group.group}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-5"
              >
                <h3 className="text-base font-semibold text-white">{group.group}</h3>
                {group.description && (
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {group.description}
                  </p>
                )}

                {Array.isArray(group.items) && group.items.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.slice(0, 4).map((item) => (
                      <span
                        key={item.name}
                        className="rounded border border-slate-700/40 bg-slate-800/60 px-2 py-1 text-[11px] font-medium text-slate-300"
                        title={item.level}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      <ProfileHighlights />

      <section className="grid gap-5 py-12 border-t border-white/5 md:grid-cols-2">
        <ContactPanel />
        <CvPanel />
      </section>

      <section className="flex flex-col gap-3 border-t border-white/5 pt-8 sm:flex-row">
        <Link
          to="/projects"
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors duration-200"
        >
          View Projects
        </Link>
        <Link
          to="/devlog"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
        >
          Read Devlog
        </Link>
      </section>
    </Container>
  )
}

export default About
