import Container from '../common/Container'

/**
 * Footer — minimal dark footer consistent with the app's navy theme.
 */
function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[#080910]/60 py-8">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <span className="font-medium text-slate-400">
            HuyDung Lab{' '}
            <span className="text-slate-600">—</span>{' '}
            Developer Life Archive
          </span>
          <span>
            Built as a personal developer archive, portfolio, and devlog.
          </span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
