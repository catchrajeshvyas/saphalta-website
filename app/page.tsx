import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import TrustStrip from '@/components/trust-strip'
import AudiencePathways from '@/components/audience-pathways'
import CompoundingCalculator from '@/components/compounding-calculator'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustStrip />
      <AudiencePathways />
      <CompoundingCalculator />
      <Footer />
    </main>
  )
}
