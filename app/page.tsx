import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { PricingSection } from '@/components/pricing-section'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-gradient-to-br from-background via-background to-surface text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
