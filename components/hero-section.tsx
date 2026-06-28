import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'

const stats = [
  { value: '4.9★', label: 'Average Rating' },
  { value: '500+', label: 'Clients' },
  { value: '97%', label: 'Success Rate' },
]

const promises = [
  'No gym required — train anywhere',
  'Personalized plan built around your schedule',
  'Certified coach available 7 days a week',
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f2040 60%, #0a1628 100%)' }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Blue glow */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#2563eb' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563eb]/40 bg-[#2563eb]/10 text-[#3b82f6] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" aria-hidden="true" />
              Online Personal Training
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight text-balance mb-6">
              Transform Your Body in 90 Days
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
              Personalized online coaching that fits your schedule. No gym required.
            </p>

            {/* Promise list */}
            <ul className="space-y-3 mb-10">
              {promises.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#3b82f6] flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#2563eb] text-white font-bold text-lg hover:bg-[#1d4ed8] transition-colors duration-200 shadow-lg shadow-blue-900/40"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-colors duration-200"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right — Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-xl"
                style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                <Image
                  src="/hero-fitness.png"
                  alt="Athletic person training — Summit Fitness Coaching"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay shimmer */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 50%)',
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-5 -left-5 sm:bottom-6 sm:left-6 bg-[#0f2040] border border-white/10 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm">
                <p className="text-[#3b82f6] font-bold text-xl">4.9 / 5.0</p>
                <p className="text-slate-400 text-xs">Based on 200+ reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-white">{stat.value}</p>
              <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
