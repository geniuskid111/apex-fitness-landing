'use client'

import { motion } from 'motion/react'
import { Check, Zap } from 'lucide-react'
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
    cta: 'Get Started',
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
    cta: 'Start Pro — Most Popular',
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
    cta: 'Go Elite',
  },
]

export function PricingSection() {
  const { container, item } = useReveal()

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface text-muted text-sm font-semibold mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground text-balance mb-4">
            Choose Your Path with Summit
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            No hidden fees. Cancel anytime. All plans include a 7-day free trial so you can experience real coaching with zero risk.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className={`relative rounded-2xl border flex flex-col transition-all duration-300 ${
                plan.popular
                  ? 'border-cta/40 bg-surface scale-[1.02]'
                  : 'border-border bg-surface'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cta text-cta-text text-xs font-bold shadow-lg">
                    <Zap className="w-3.5 h-3.5" aria-hidden="true" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-muted text-sm">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-muted text-lg font-medium">$</span>
                  <span className="text-5xl font-extrabold text-foreground leading-none">{plan.price}</span>
                  <span className="text-muted text-sm font-medium mb-1">/mo</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0 text-success"
                        aria-hidden="true"
                      />
                      <span className="text-muted text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-cta text-cta-text hover:bg-cta-hover'
                      : 'border border-border text-foreground hover:border-cta hover:bg-surface'
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee */}
        <p className="mt-10 text-center text-muted text-sm">
          All plans include a{' '}
          <span className="text-foreground font-semibold">7-day free trial</span> and a{' '}
          <span className="text-foreground font-semibold">30-day money-back guarantee</span>. No questions asked.
        </p>
      </div>
    </section>
  )
}
