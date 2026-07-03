'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Mail, CheckCircle } from 'lucide-react'
import { useReveal } from '@/lib/motion-variants'

export function CtaSection() {
  const { container, item } = useReveal()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !name) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-surface"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px opacity-30 bg-border"
        aria-hidden="true"
      />

      <motion.div
        className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span
          variants={item}
          className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface text-muted text-sm font-semibold mb-6"
        >
          Start Today
        </motion.span>

        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground text-balance mb-4"
        >
          Ready to Start Your Transformation?
        </motion.h2>
        <motion.p variants={item} className="text-muted text-lg leading-relaxed mb-12">
          Book your free 30-minute consultation call. No obligation, no hard sell — just a real conversation about your goals and how we can help you reach them.
        </motion.p>

        {submitted ? (
          <motion.div variants={item} className="flex flex-col items-center gap-4 py-8">
            <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-success" aria-hidden="true" />
            </div>
            <p className="text-2xl font-bold text-foreground">You&apos;re on the list!</p>
            <p className="text-muted">
              We&apos;ll reach out to <span className="text-foreground font-medium">{email}</span> within 24 hours to schedule your free call.
            </p>
          </motion.div>
        ) : (
          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            className="bg-surface border border-border rounded-2xl p-8 text-left shadow-2xl"
            noValidate
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Book Your Free Consultation</h3>

            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted mb-1.5">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Johnson"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta/30 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" aria-hidden="true" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-2 border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-muted mb-1.5">
                  Primary Goal
                </label>
                <select
                  id="goal"
                  className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-border text-muted focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta/30 transition-colors appearance-none"
                >
                  <option value="">Select your goal...</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="general-fitness">General Fitness</option>
                  <option value="athletic-performance">Athletic Performance</option>
                  <option value="lifestyle">Healthy Lifestyle</option>
                </select>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading || !email || !name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-8 py-4 font-bold text-cta-text hover:bg-cta-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-cta-text/30 border-t-cta-text rounded-full animate-spin" aria-hidden="true" />
                  Submitting...
                </>
              ) : (
                <>
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 text-cta-text" aria-hidden="true" />
                </>
              )}
            </motion.button>

            <p className="mt-4 text-muted text-xs text-center">
              No spam, ever. Your information is kept 100% private.
            </p>
          </motion.form>
        )}
      </motion.div>
    </section>
  )
}
