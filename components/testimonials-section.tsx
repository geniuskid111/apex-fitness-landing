'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Star } from 'lucide-react'
import { useReveal } from '@/lib/motion-variants'

const testimonials = [
  {
    name: 'Jaylen Brown',
    result: 'Lost 15 lbs in 8 weeks',
    photo: '/client-1.jpg',
    rating: 5,
    quote: 'Lost 15 lbs in 8 weeks. The meal plans alone were worth it.',
  },
  {
    name: 'Jalen Brunson',
    result: 'Daily coach accountability',
    photo: '/client-2.jpg',
    rating: 5,
    quote: "Best investment I've made. My coach checks in every single day.",
  },
  {
    name: 'Victor Wembanyama',
    result: 'Couch to 5K in 3 months',
    photo: '/client-3.jpg',
    rating: 5,
    quote: 'Went from couch to 5K in 3 months. Never thought I could do this.',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const { container, item } = useReveal()
  const [featured, ...rest] = testimonials

  return (
    <section id="testimonials" className="bg-base py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-left">
          <p className="text-volt text-sm uppercase tracking-widest mb-4">Real Results</p>
          <h2 className="font-display uppercase text-4xl md:text-6xl text-ink leading-[0.95] tracking-tight max-w-2xl">
            Stories from the Summit Community
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          <motion.article
            variants={item}
            className="bg-base-surface border border-base-border rounded-2xl p-8 text-left shadow-[0_1px_3px_rgba(0,0,0,0.4)] transition hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            <StarRating count={featured.rating} />
            <blockquote className="font-display uppercase text-3xl md:text-4xl text-ink leading-[1.1] tracking-tight mt-6 mb-8 max-w-4xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                <Image
                  src={featured.photo}
                  alt={featured.name}
                  fill
                  className="object-cover grayscale"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-ink font-semibold">{featured.name}</p>
                <p className="text-ink-muted text-sm">{featured.result}</p>
              </div>
            </div>
          </motion.article>

          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((t) => (
              <motion.article
                key={t.name}
                variants={item}
                className="bg-base-surface border border-base-border rounded-2xl p-8 text-left shadow-[0_1px_3px_rgba(0,0,0,0.4)] transition hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <StarRating count={t.rating} />
                <blockquote className="text-ink text-lg leading-relaxed mt-4 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      className="object-cover grayscale"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="text-ink font-semibold text-sm">{t.name}</p>
                    <p className="text-ink-muted text-xs">{t.result}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
