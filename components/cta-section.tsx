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
    <section id="contact" className="bg-base py-28 border-t border-base-border">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item} className="text-left">
            <p className="text-volt text-sm uppercase tracking-widest mb-6">Start Today</p>
            <h2 className="font-display uppercase text-5xl md:text-7xl text-ink leading-[0.9] tracking-tight mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed max-w-md">
              Book your free 30-minute consultation call. No obligation, no hard sell — just a real conversation about your goals.
            </p>
          </motion.div>

          <motion.div variants={item}>
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-8 text-left">
                <CheckCircle className="w-10 h-10 text-success" aria-hidden="true" />
                <p className="font-display uppercase text-3xl text-ink">You&apos;re on the list!</p>
                <p className="text-ink-muted">
                  We&apos;ll reach out to <span className="text-ink font-medium">{email}</span> within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-base-border rounded-2xl p-8 text-left bg-base-surface shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
                noValidate
              >
                <h3 className="font-display uppercase text-2xl text-ink tracking-tight mb-6">
                  Book Your Free Consultation
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink-muted mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Johnson"
                      required
                      className="w-full min-h-[44px] px-4 py-3 rounded-xl bg-base border border-base-border text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-ink-muted transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-muted mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted pointer-events-none" aria-hidden="true" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@example.com"
                        required
                        className="w-full min-h-[44px] pl-11 pr-4 py-3 rounded-xl bg-base border border-base-border text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-ink-muted transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="goal" className="block text-sm font-medium text-ink-muted mb-1.5">
                      Primary Goal
                    </label>
                    <select
                      id="goal"
                      className="w-full min-h-[44px] px-4 py-3 rounded-xl bg-base border border-base-border text-ink-muted focus:outline-none focus:border-ink-muted transition-colors appearance-none"
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
                  className="w-full inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-volt px-8 py-4 font-semibold text-[#0A0A0B] hover:bg-volt-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#0A0A0B]/30 border-t-[#0A0A0B] rounded-full animate-spin" aria-hidden="true" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book Free Consultation
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </motion.button>

                <p className="mt-3 text-ink-muted text-sm font-medium">We reply within 24 hours.</p>
                <p className="mt-2 text-ink-muted text-xs">No spam, ever. Your information is kept 100% private.</p>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
