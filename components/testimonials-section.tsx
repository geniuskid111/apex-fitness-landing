'use client'

import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'
import { useReveal } from '@/lib/motion-variants'

const testimonials = [
  {
    name: 'Sarah M.',
    result: 'Lost 15 lbs in 8 weeks',
    avatar: 'SM',
    rating: 5,
    quote: 'Lost 15 lbs in 8 weeks. The meal plans alone were worth it.',
  },
  {
    name: 'James K.',
    result: 'Daily coach accountability',
    avatar: 'JK',
    rating: 5,
    quote: "Best investment I've made. My coach checks in every single day.",
  },
  {
    name: 'Priya R.',
    result: 'Couch to 5K in 3 months',
    avatar: 'PR',
    rating: 5,
    quote: 'Went from couch to 5K in 3 months. Never thought I could do this.',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" aria-hidden="true" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const { container, item } = useReveal()

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface text-muted text-sm font-semibold mb-4">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground text-balance mb-4">
            Stories from the Summit Community
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Don&apos;t take our word for it. Here&apos;s what real clients say about their transformation.
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
          {testimonials.map((t) => (
            <motion.article
              key={t.name}
              variants={item}
              className="relative rounded-2xl p-8 bg-surface border border-border flex flex-col gap-5 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-border flex-shrink-0" aria-hidden="true" />

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote text */}
              <blockquote className="text-muted leading-relaxed text-sm flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-2 self-start">
                <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
                <span className="text-muted text-xs font-bold">{t.result}</span>
              </div>

              {/* Author */}
              <footer className="flex items-center gap-3 pt-2 border-t border-border">
                <div
                  className="w-10 h-10 rounded-full bg-surface-2 border border-border flex items-center justify-center text-foreground text-sm font-bold flex-shrink-0"
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{t.name}</p>
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>

        {/* Social proof bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-extrabold text-foreground">4.9★</p>
            <p className="text-muted text-sm">Average Rating</p>
          </div>
          <div className="w-px h-10 bg-border hidden sm:block" aria-hidden="true" />
          <div>
            <p className="text-3xl font-extrabold text-foreground">500+</p>
            <p className="text-muted text-sm">Clients</p>
          </div>
          <div className="w-px h-10 bg-border hidden sm:block" aria-hidden="true" />
          <div>
            <p className="text-3xl font-extrabold text-foreground">97%</p>
            <p className="text-muted text-sm">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
