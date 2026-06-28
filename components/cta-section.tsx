'use client'

import { useState } from 'react'
import { ArrowRight, Mail, CheckCircle } from 'lucide-react'

export function CtaSection() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !name) return
    setLoading(true)
    // Simulate async submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f2040 0%, #0a1628 100%)' }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px opacity-30"
        style={{ background: 'linear-gradient(90deg, transparent, #2563eb, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#2563eb' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-0 w-72 h-72 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: '#1d4ed8' }}
        aria-hidden="true"
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563eb]/15 border border-[#2563eb]/30 text-[#3b82f6] text-sm font-semibold mb-6">
          Start Today
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance mb-4">
          Ready to Start Your Transformation?
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-12">
          Book your free 30-minute consultation call. No obligation, no hard sell — just a real conversation about your goals and how we can help you reach them.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="w-16 h-16 rounded-full bg-[#2563eb]/20 border border-[#2563eb]/40 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-[#3b82f6]" aria-hidden="true" />
            </div>
            <p className="text-2xl font-bold text-white">You&apos;re on the list!</p>
            <p className="text-slate-400">
              We&apos;ll reach out to <span className="text-white font-medium">{email}</span> within 24 hours to schedule your free call.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#0f2040] border border-white/10 rounded-2xl p-8 text-left shadow-2xl"
            noValidate
          >
            <h3 className="text-xl font-bold text-white mb-6">Book Your Free Consultation</h3>

            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Johnson"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#162d4a] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" aria-hidden="true" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#162d4a] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Primary Goal
                </label>
                <select
                  id="goal"
                  className="w-full px-4 py-3 rounded-xl bg-[#162d4a] border border-white/10 text-slate-300 focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors appearance-none"
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

            <button
              type="submit"
              disabled={loading || !email || !name}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#2563eb] text-white font-bold text-base hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg shadow-blue-900/30"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                  Submitting...
                </>
              ) : (
                <>
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </button>

            <p className="mt-4 text-slate-500 text-xs text-center">
              No spam, ever. Your information is kept 100% private.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
