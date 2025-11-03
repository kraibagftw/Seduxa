import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProfiles } from "@/components/featured-profiles"
import { SearchFilters } from "@/components/search-filters"
import { PopularZones } from "@/components/popular-zones"
import { PremiumCTA } from "@/components/premium-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <SearchFilters />
      <FeaturedProfiles />
      <PopularZones />
      <PremiumCTA />
      <Footer />
    </main>
  )
}
