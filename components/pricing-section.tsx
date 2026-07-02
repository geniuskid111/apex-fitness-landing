import { Check, Zap } from 'lucide-react'

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
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563eb]/15 border border-[#2563eb]/30 text-[#3b82f6] text-sm font-semibold mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance mb-4">
            Choose Your Path with Apex
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            No hidden fees. Cancel anytime. All plans include a 7-day free trial so you can experience real coaching with zero risk.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border flex flex-col transition-all duration-300 ${
                plan.popular
                  ? 'border-[#2563eb] bg-[#0f2040] shadow-[0_0_40px_rgba(37,99,235,0.25)] scale-[1.02]'
                  : 'border-white/10 bg-[#0f2040] hover:border-[#2563eb]/40'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#2563eb] text-white text-xs font-bold shadow-lg">
                    <Zap className="w-3.5 h-3.5" aria-hidden="true" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-slate-400 text-sm">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-slate-400 text-lg font-medium">$</span>
                  <span className="text-5xl font-extrabold text-white leading-none">{plan.price}</span>
                  <span className="text-slate-400 text-sm font-medium mb-1">/mo</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-[#3b82f6]' : 'text-[#3b82f6]'}`}
                        aria-hidden="true"
                      />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-lg shadow-blue-900/30'
                      : 'border border-white/20 text-white hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <p className="mt-10 text-center text-slate-500 text-sm">
          All plans include a{' '}
          <span className="text-slate-300 font-semibold">7-day free trial</span> and a{' '}
          <span className="text-slate-300 font-semibold">30-day money-back guarantee</span>. No questions asked.
        </p>
      </div>
    </section>
  )
}
