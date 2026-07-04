import { Logo } from '@/components/logo'

export function Footer() {
  return (
    <footer className="bg-base-surface border-t border-base-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Logo />

          <nav className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-wider text-ink-muted">
            <a href="#services" className="hover:text-ink transition-colors">Services</a>
            <a href="#coach" className="hover:text-ink transition-colors">Coach</a>
            <a href="#testimonials" className="hover:text-ink transition-colors">Results</a>
            <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-base-border text-left text-ink-muted text-sm">
          <p>&copy; 2026 Summit Fitness Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
