/**
 * ProjectEmptyState — shown when no projects match the active category filter.
 *
 * Props:
 *   onReset — callback to reset the filter to "All"
 */
function ProjectEmptyState({ onReset }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center gap-5">
      <p className="text-4xl font-bold text-slate-700">○</p>
      <div>
        <p className="text-lg font-semibold text-slate-300 mb-2">
          No projects found
        </p>
        <p className="text-slate-500 text-sm">
          Try another category filter.
        </p>
      </div>
      <button
        type="button"
        onClick={onReset}
        className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-200"
      >
        Show all projects
      </button>
    </div>
  )
}

export default ProjectEmptyState
