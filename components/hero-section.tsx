'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useReveal, EASE } from '@/lib/motion-variants'

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
  const { reduce } = useReveal()
  const headline = 'Transform Your Body in 90 Days'
  const words = headline.split(' ')

  const wordContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.1 } },
  }
  const word = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: EASE } },
      }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-gradient-to-br from-background via-background to-surface"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-muted text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: reduce ? 0 : 0.05 }}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              Online Personal Training
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight text-balance mb-6"
              variants={wordContainer}
              initial="hidden"
              animate="visible"
            >
              {words.map((w, i) => (
                <motion.span key={i} variants={word} className="mr-[0.25em] inline-block">
                  {w}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-lg text-muted leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: reduce ? 0 : 0.5 }}
            >
              Personalized online coaching that fits your schedule. No gym required.
            </motion.p>

            {/* Promise list */}
            <motion.ul
              className="space-y-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: reduce ? 0 : 0.58 }}
            >
              {promises.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: reduce ? 0 : 0.65 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-8 py-4 font-bold text-cta-text transition hover:bg-cta-hover"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 text-cta-text" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-border px-8 py-4 font-bold text-foreground transition hover:border-cta hover:bg-surface"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See How It Works
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : 0.2 }}
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl aspect-[4/5]">
                <Image
                  src="/hero-fitness.png"
                  alt="Athletic person training — Summit Fitness Coaching"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, color-mix(in srgb, var(--background) 70%, transparent) 0%, transparent 50%)',
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-5 -left-5 sm:bottom-6 sm:left-6 bg-surface border border-border rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm">
                <p className="text-foreground font-bold text-xl">4.9 / 5.0</p>
                <p className="text-muted text-xs">Based on 200+ reviews</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-16 pt-10 border-t border-border grid grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: reduce ? 0 : 0.75 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-foreground">{stat.value}</p>
              <p className="text-muted text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
