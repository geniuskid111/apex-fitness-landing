'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useReveal } from '@/lib/motion-variants'

export function CoachSection() {
  const { container, item } = useReveal()

  return (
    <section id="coach" className="bg-base-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={item}
            className="relative aspect-[4/5] w-full max-w-[280px] mx-auto md:mx-0 overflow-hidden rounded-2xl"
          >
            <Image
              src="/coach.jpg"
              alt="Coach Kerr"
              fill
              className="object-cover"
              sizes="280px"
            />
          </motion.div>

          <motion.div variants={item} className="text-left">
            <p className="text-volt text-sm uppercase tracking-widest mb-4">Your Coach</p>
            <h2 className="font-display uppercase text-4xl md:text-5xl text-ink leading-[0.95] tracking-tight mb-4">
              Coach Kerr
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed mb-6 max-w-md">
              Former collegiate athlete helping busy professionals get lean without living in the gym.
            </p>
            <ul className="space-y-2 text-ink-muted text-sm">
              <li>NASM-CPT</li>
              <li>Precision Nutrition L1</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
