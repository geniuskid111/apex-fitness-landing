'use client'

import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { useReveal } from '@/lib/motion-variants'

const plans = [
  {
    name: 'Starter',
    price: 79,
    tagline: 'Perfect for beginners building healthy habits',
    popular: false,
    features: [
      'Custom workout program',
      'Bi-weekly coach check-ins',
      'Access to exercise video library',
      'Community forum access',
      'Progress tracking dashboard',
      'Email support',
    ],
    cta: 'Book a Call About Starter',
  },
  {
    name: 'Pro',
    price: 149,
    tagline: 'Our most popular plan for serious results',
    popular: true,
    features: [
      'Everything in Starter',
      'Custom macro & meal plan',
      'Weekly 1-on-1 video calls',
      'Daily messaging with your coach',
      'Supplement recommendations',
      'Priority support (24h response)',
      'Monthly body composition analysis',
    ],
    cta: 'Book a Call About Pro',
  },
  {
    name: 'Elite',
    price: 299,
    tagline: 'Maximum coaching, maximum results',
    popular: false,
    features: [
      'Everything in Pro',
      'Unlimited video call access',
      'Same-day coach responses',
      'Full lifestyle & recovery coaching',
      'Mindset & habit coaching sessions',
      'Dedicated hotline number',
      'Custom travel & hotel workouts',
      'Quarterly in-person session (if local)',
    ],
    cta: 'Book a Call About Elite',
  },
]

export function PricingSection() {
  const { container, item } = useReveal()

  return (
    <section id="pricing" className="bg-base-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16 text-left">
          <p className="text-volt text-sm uppercase tracking-widest mb-4">Transparent Pricing</p>
          <h2 className="font-display uppercase text-4xl md:text-6xl text-ink leading-[0.95] tracking-tight max-w-2xl">
            Choose Your Path with Summit
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 items-stretch"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`relative flex flex-col rounded-2xl border border-base-border bg-base-surface p-8 text-left text-ink shadow-[0_1px_3px_rgba(0,0,0,0.4)] transition hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${
                plan.popular ? 'order-first md:order-none' : ''
              }`}
            >
              {plan.popular && (
                <p className="text-volt text-xs uppercase tracking-widest font-semibold mb-4">
                  Most Popular
                </p>
              )}

              <h3 className="font-display uppercase text-2xl tracking-tight mb-1">{plan.name}</h3>
              <p className="text-sm text-ink-muted mb-8">{plan.tagline}</p>

              <div className="flex items-end gap-1 mb-8">
                <span className="text-lg font-medium text-ink-muted">$</span>
                <span className="font-display text-5xl leading-none text-ink">{plan.price}</span>
                <span className="text-sm font-medium mb-1 text-ink-muted">/mo</span>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-success" aria-hidden="true" />
                    <span className="text-sm text-ink-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex min-h-[44px] items-center justify-center rounded-full bg-volt px-8 py-4 font-semibold text-[#0A0A0B] transition hover:bg-volt-hover"
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-12 text-left text-ink-muted text-sm">
          All plans include a{' '}
          <span className="text-ink font-semibold">7-day free trial</span> and a{' '}
          <span className="text-ink font-semibold">30-day money-back guarantee</span>. No questions asked.
        </p>
      </div>
    </section>
  )
}
