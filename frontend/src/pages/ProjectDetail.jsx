import { useParams, Link } from 'react-router-dom'
import { projects } from '../data'
import Container from '../components/common/Container'
import ProjectDetailHeader from '../components/projects/ProjectDetailHeader'
import ProjectDetailSection from '../components/projects/ProjectDetailSection'
import ProjectDetailList from '../components/projects/ProjectDetailList'
import ProjectScreenshots from '../components/projects/ProjectScreenshots'
import ProjectNotFound from '../components/projects/ProjectNotFound'

/**
 * ProjectDetail — /projects/:slug case study page.
 *
 * Looks up project by slug from static data.
 * Renders all case study sections using focused sub-components.
 * Handles unknown slugs gracefully with ProjectNotFound.
 */
function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  // ── Unknown slug ───────────────────────────────────────────────────────────
  if (!project) {
    return (
      <Container>
        <ProjectNotFound slug={slug} />
      </Container>
    )
  }

  const {
    title,
    summary,
    problem,
    features = [],
    techStack = [],
    challenges = [],
    lessons = [],
    screenshots = [],
  } = project

  return (
    <div>
      <Container>

        {/* ── A. Back navigation ───────────────────────────────────────── */}
        <div className="pt-8 pb-2">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* ── B. Project header ────────────────────────────────────────── */}
        <ProjectDetailHeader project={project} />

        {/* ── C. Overview ──────────────────────────────────────────────── */}
        {(summary || problem) && (
          <ProjectDetailSection eyebrow="Overview" title="About this project">
            <div className="space-y-6">
              {summary && (
                <p className="text-slate-300 text-base leading-relaxed">{summary}</p>
              )}
              {problem && (
                <div className="rounded-xl border border-indigo-900/40 bg-indigo-900/10 px-6 py-5">
                  <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-2">
                    Problem
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">{problem}</p>
                </div>
              )}
            </div>
          </ProjectDetailSection>
        )}

        {/* ── D. Key Features ──────────────────────────────────────────── */}
        {features.length > 0 && (
          <ProjectDetailSection eyebrow="Features" title="Key Features">
            <ProjectDetailList
              items={features}
              accentColor="bg-indigo-500"
            />
          </ProjectDetailSection>
        )}

        {/* ── E. Tech Stack ────────────────────────────────────────────── */}
        {techStack.length > 0 && (
          <ProjectDetailSection eyebrow="Stack" title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ProjectDetailSection>
        )}

        {/* ── F. Challenges ────────────────────────────────────────────── */}
        {challenges.length > 0 && (
          <ProjectDetailSection
            eyebrow="Challenges"
            title="Technical / Product Challenges"
          >
            <ProjectDetailList
              items={challenges}
              accentColor="bg-amber-500/80"
            />
          </ProjectDetailSection>
        )}

        {/* ── G. Lessons ───────────────────────────────────────────────── */}
        {lessons.length > 0 && (
          <ProjectDetailSection eyebrow="Learnings" title="What I Learned">
            <ProjectDetailList
              items={lessons}
              accentColor="bg-cyan-500/80"
            />
          </ProjectDetailSection>
        )}

        {/* ── H. Screenshots ───────────────────────────────────────────── */}
        <ProjectDetailSection eyebrow="Assets" title="Screenshots / Demo Assets">
          <ProjectScreenshots
            screenshots={screenshots}
            projectTitle={title}
          />
        </ProjectDetailSection>

        {/* ── I. Bottom CTA ────────────────────────────────────────────── */}
        <section className="py-12 border-t border-white/5">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-200"
            >
              ← View all projects
            </Link>
            <Link
              to="/devlog"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white transition-colors duration-200"
            >
              Read devlog →
            </Link>
          </div>
        </section>

      </Container>
    </div>
  )
}

export default ProjectDetail
