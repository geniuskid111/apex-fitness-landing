'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Coach', href: '#coach' },
  { label: 'Results', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      data-scrolled={scrolled ? '' : undefined}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-transparent data-[scrolled]:bg-base/80 data-[scrolled]:backdrop-blur-md data-[scrolled]:border-b data-[scrolled]:border-base-border"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ink-muted hover:text-ink text-sm uppercase tracking-wider font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-[44px] items-center rounded-full bg-volt px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#0A0A0B] hover:bg-volt-hover transition-colors duration-200"
            >
              <span className="hidden sm:inline">Book Free Consultation</span>
              <span className="sm:hidden">Book Call</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-ink p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-base-surface border-t border-base-border px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-ink-muted hover:text-ink uppercase tracking-wider text-sm font-medium transition-colors min-h-[44px] inline-flex items-center"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-full bg-volt px-6 py-3 font-semibold text-[#0A0A0B] hover:bg-volt-hover transition-colors"
            >
              Book Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
