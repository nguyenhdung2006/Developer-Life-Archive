import { projects, timeline, techStack, devlogs } from '../data'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SectionHeading from '../components/common/SectionHeading'
import ProjectPreviewCard from '../components/home/ProjectPreviewCard'
import DevlogPreviewCard from '../components/home/DevlogPreviewCard'
import TechPreview from '../components/home/TechPreview'
import TimelinePreview from '../components/home/TimelinePreview'

// ── Data slices ──────────────────────────────────────────────────────────────
const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.priority - b.priority)
  .slice(0, 3)

// Show 5 most recent timeline items (array is chronological, take the last 5)
const recentTimeline = timeline.slice(-5).reverse()

const previewDevlogs = devlogs.slice(0, 3)

/**
 * Home — main landing page.
 * Sections: Hero → Featured Projects → Tech Stack → Journey Timeline → Devlog → CTA
 */
function Home() {
  return (
    <div className="divide-y divide-white/5">

      {/* ── A. Hero ─────────────────────────────────────────────────────── */}
      <section aria-label="Introduction" className="py-16 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <span className="inline-block mb-6 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-900/40 text-indigo-400 border border-indigo-700/30">
              Developer Life Archive
            </span>

            {/* Greeting + name */}
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="text-indigo-400">Huy Dung</span>
            </h1>

            {/* Role line */}
            <p className="flex flex-wrap gap-x-2 gap-y-1 text-slate-400 text-sm sm:text-lg font-mono mb-6 tracking-wide">
              <span>Backend Developer</span>
              <span className="text-slate-600">|</span>
              <span>Game Developer</span>
              <span className="text-slate-600">|</span>
              <span>Problem Solver</span>
            </p>

            {/* Main description */}
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-4 max-w-2xl">
              I build backend systems, learning tools, and 2D game prototypes — then
              document the process, mistakes, and lessons here.
            </p>

            {/* Tagline */}
            <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-2xl">
              Projects, experiments, devlogs and lessons from my software development journey.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/projects">View Projects</Button>
              <Button to="/devlog" variant="secondary">Read Devlog</Button>
              <Button to="/about" variant="secondary">About / Contact</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── B. Featured Projects ─────────────────────────────────────────── */}
      <section aria-label="Featured projects" className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Featured Work"
            description="A selection of projects I've built, each focused on a real problem, real tech, and real lessons."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <ProjectPreviewCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8">
            <Button to="/projects" variant="secondary">All Projects →</Button>
          </div>
        </Container>
      </section>

      {/* ── C. Tech Stack ────────────────────────────────────────────────── */}
      <section aria-label="Tech stack" className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Tech Stack"
            title="Tools & Technologies"
            description="Technologies I'm actively using, have used in projects, or am currently learning."
          />
          <TechPreview groups={techStack} />
        </Container>
      </section>

      {/* ── D. Journey Timeline ──────────────────────────────────────────── */}
      <section aria-label="Development journey" className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Timeline"
            title="Development Journey"
            description="Key milestones from my path as a developer — learning, building, deploying, and iterating."
          />
          <div className="max-w-2xl">
            <TimelinePreview items={recentTimeline} />
          </div>
        </Container>
      </section>

      {/* ── E. Devlog Preview ────────────────────────────────────────────── */}
      <section aria-label="Devlog" className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Devlog"
            title="Technical Notes"
            description="Build logs, lessons learned, and technical write-ups from real projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {previewDevlogs.map((entry) => (
              <DevlogPreviewCard
                key={entry.slug}
                entry={entry}
                to={`/devlog/${entry.slug}`}
              />
            ))}
          </div>
          <div className="mt-8">
            <Button to="/devlog" variant="secondary">All Devlog Entries →</Button>
          </div>
        </Container>
      </section>

      {/* ── F. Contact CTA ───────────────────────────────────────────────── */}
      <section aria-label="Call to action" className="py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
              Want to explore the full archive?
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Browse project case studies, devlogs, and the learning timeline behind each build.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/projects">View Projects</Button>
              <Button to="/about" variant="secondary">About / Contact</Button>
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}

export default Home
