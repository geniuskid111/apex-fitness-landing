'use client'

import { motion } from 'motion/react'
import { useReveal } from '@/lib/motion-variants'

const services = [
  {
    number: '01',
    title: '1-on-1 Virtual Coaching',
    description:
      'Work directly with your certified coach through live video sessions and daily messaging. Every workout is designed specifically for your goals, fitness level, and available equipment.',
  },
  {
    number: '02',
    title: 'Custom Meal Plans',
    description:
      'Receive a fully tailored nutrition roadmap that complements your training program. Your coach adjusts macros and meals weekly based on your progress and preferences.',
  },
  {
    number: '03',
    title: 'Weekly Check-ins',
    description:
      'Stay on track with structured weekly progress reviews including body measurements, photo comparisons, and goal adjustments. Accountability is the single biggest driver of results.',
  },
]

export function ServicesSection() {
  const { container, item } = useReveal()

  return (
    <section id="services" className="bg-base-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16 text-left">
          <p className="text-volt text-sm uppercase tracking-widest mb-4">What You Get</p>
          <h2 className="font-display uppercase text-4xl md:text-6xl text-ink leading-[0.95] tracking-tight max-w-2xl">
            Everything You Need to Succeed
          </h2>
        </div>

        <motion.div
          className="divide-y divide-base-border border-t border-b border-base-border"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={item}
              className="grid md:grid-cols-[80px_1fr_2fr] items-start gap-6 py-10 text-left"
            >
              <span className="font-display text-5xl text-ink-muted leading-none">{service.number}</span>
              <h3 className="font-display uppercase text-2xl md:text-3xl text-ink leading-tight tracking-tight">
                {service.title}
              </h3>
              <p className="text-ink-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
