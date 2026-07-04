'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useReveal, EASE } from '@/lib/motion-variants'

const stats = [
  { value: '4.9★', label: 'Average Rating' },
  { value: '500+', label: 'Clients' },
  { value: '97%', label: 'Success Rate' },
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
    <>
      <section id="hero" className="relative min-h-[90vh] flex items-end overflow-hidden py-28">
        <div className="absolute inset-0">
          <Image
            src="/hero-fitness.png"
            alt=""
            fill
            priority
            className="object-cover grayscale contrast-125 brightness-90"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/70 to-base/20" />
        </div>

        <div className="relative z-10 w-full mx-auto max-w-6xl px-6 pb-8 pt-20">
          <div className="max-w-4xl text-left">
            <motion.p
              className="text-volt text-sm uppercase tracking-widest mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: reduce ? 0 : 0.05 }}
            >
              Online Personal Training
            </motion.p>

            <motion.h1
              className="font-display uppercase text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-ink mb-6"
              variants={wordContainer}
              initial="hidden"
              animate="visible"
            >
              {words.map((w, i) => (
                <motion.span key={i} variants={word} className="inline-block">
                  {w}{'\u00A0'}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-ink-muted max-w-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: reduce ? 0 : 0.5 }}
            >
              Coached 1-on-1, built around your schedule. No gym required.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: reduce ? 0 : 0.65 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-volt px-8 py-4 font-semibold text-[#0A0A0B] transition hover:bg-volt-hover"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Consultation
              </motion.a>
              <motion.a
                href="#services"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-base-border px-8 py-4 font-semibold text-ink transition hover:border-volt"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See How It Works
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Single stats band under hero */}
      <section className="bg-base border-t border-base-border py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="grid grid-cols-3 gap-6 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
            }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-left"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: reduce ? 0.01 : 0.5, ease: EASE },
                  },
                }}
              >
                <p className="font-display text-5xl md:text-7xl text-ink leading-none mb-3">
                  {stat.value}
                </p>
                <p className="uppercase text-xs tracking-widest text-ink-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
