import { Mountain } from 'lucide-react'

const socialLinks = [
  { label: 'Instagram', href: '#', abbr: 'IG' },
  { label: 'Twitter / X', href: '#', abbr: 'TW' },
  { label: 'YouTube', href: '#', abbr: 'YT' },
]

export function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center">
              <Mountain className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-lg">
              Apex Fitness Coaching
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Results</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={`Follow Apex Fitness Coaching on ${s.label}`}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#2563eb]/20 hover:border-[#2563eb]/40 transition-all text-[10px] font-bold"
              >
                {s.abbr}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-slate-600 text-sm">
          <p>&copy; 2026 Apex Fitness Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
