import { Video, Salad, CalendarCheck } from 'lucide-react'

const services = [
  {
    icon: Video,
    title: '1-on-1 Virtual Coaching',
    description:
      'Work directly with your certified coach through live video sessions and daily messaging. Every workout is designed specifically for your goals, fitness level, and available equipment.',
    highlight: 'Most Personal',
  },
  {
    icon: Salad,
    title: 'Custom Meal Plans',
    description:
      'Receive a fully tailored nutrition roadmap that complements your training program. Your coach adjusts macros and meals weekly based on your progress and preferences.',
    highlight: 'Nutrition-Focused',
  },
  {
    icon: CalendarCheck,
    title: 'Weekly Check-ins',
    description:
      'Stay on track with structured weekly progress reviews including body measurements, photo comparisons, and goal adjustments. Accountability is the single biggest driver of results.',
    highlight: 'Accountability',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563eb]/15 border border-[#2563eb]/30 text-[#3b82f6] text-sm font-semibold mb-4">
            What You Get
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            A complete coaching system — not just a cookie-cutter program. Every element is built around your unique body, goals, and lifestyle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl p-8 border border-white/10 bg-[#0f2040] hover:border-[#2563eb]/50 hover:bg-[#162d4a] transition-all duration-300 overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)',
                  }}
                  aria-hidden="true"
                />

                {/* Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#3b82f6] text-xs font-semibold mb-6">
                  {service.highlight}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#1e3a5f] flex items-center justify-center mb-6 group-hover:bg-[#2563eb]/30 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#3b82f6]" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
