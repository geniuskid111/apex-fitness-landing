import { Mountain } from 'lucide-react'

const socialLinks = [
  { label: 'Instagram', href: '#', abbr: 'IG' },
  { label: 'Twitter / X', href: '#', abbr: 'TW' },
  { label: 'YouTube', href: '#', abbr: 'YT' },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center">
              <Mountain className="w-5 h-5 text-foreground" strokeWidth={2.5} />
            </div>
            <span className="text-foreground font-bold text-lg">
              Summit Fitness Coaching
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm text-muted">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Results</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={`Follow Summit Fitness Coaching on ${s.label}`}
                className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-cta/40 transition-all text-[10px] font-bold"
              >
                {s.abbr}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted text-sm">
          <p>&copy; 2026 Summit Fitness Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
