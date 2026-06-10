import { Link } from 'react-router-dom'

/**
 * ProjectNotFound — shown when useParams slug does not match any project.
 * Does not redirect automatically. Provides a clear link back to /projects.
 */
function ProjectNotFound({ slug }) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center gap-6">
      <p className="text-6xl font-bold text-slate-800">?</p>
      <div className="space-y-2">
        <p className="text-xl font-semibold text-slate-200">Project not found</p>
        <p className="text-slate-500 text-sm max-w-sm">
          The requested project case study does not exist yet.
          {slug && (
            <span className="block mt-1 font-mono text-slate-600">
              slug: &ldquo;{slug}&rdquo;
            </span>
          )}
        </p>
      </div>
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-200"
      >
        ← Back to Projects
      </Link>
    </div>
  )
}

export default ProjectNotFound
