'use client'

import { motion } from 'motion/react'
import { Video, Salad, CalendarCheck } from 'lucide-react'
import { useReveal } from '@/lib/motion-variants'

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
  const { container, item } = useReveal()

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface text-muted text-sm font-semibold mb-4">
            What You Get
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground text-balance mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            A complete coaching system — not just a cookie-cutter program. Every element is built around your unique body, goals, and lifestyle.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl p-8 border border-border bg-surface hover:bg-surface-2 transition-all duration-300 overflow-hidden"
              >
                {/* Tag */}
                <span className="inline-block px-3 py-1 rounded-full border border-border bg-surface-2 text-muted text-xs font-semibold mb-6">
                  {service.highlight}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-surface-2 border border-border flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-muted" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
