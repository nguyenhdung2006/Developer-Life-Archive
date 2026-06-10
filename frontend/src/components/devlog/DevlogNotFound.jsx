import { Link } from 'react-router-dom'

function DevlogNotFound({ slug }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-32 text-center">
      <p className="text-6xl font-bold text-slate-800">?</p>
      <div className="space-y-2">
        <p className="text-xl font-semibold text-slate-200">Devlog not found</p>
        <p className="max-w-sm text-sm text-slate-500">
          The requested devlog entry does not exist yet.
          {slug && (
            <span className="mt-1 block font-mono text-slate-600">
              slug: &ldquo;{slug}&rdquo;
            </span>
          )}
        </p>
      </div>
      <Link
        to="/devlog"
        className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors duration-200"
      >
        &larr; Back to Devlog
      </Link>
    </div>
  )
}

export default DevlogNotFound
