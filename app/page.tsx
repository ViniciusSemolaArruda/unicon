import { PublicHeader } from "@/app/_components/PublicHeader"
import { HeroSection } from "@/app/_components/sections/HeroSection"
import { FeatureSection } from "@/app/_components/sections/FeatureSection"
import { CoursesSection } from "@/app/_components/sections/CoursesSection"
import { TestimonialsSection } from "@/app/_components/sections/TestimonialsSection"
import { HomeFooter } from "@/app/_components/HomeFooter"
import { ConciergeStatsSection } from "./_components/sections/ConciergeStatsSection"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <PublicHeader />
      <HeroSection />
      <FeatureSection />
      <ConciergeStatsSection />
      <CoursesSection />
      
      <TestimonialsSection />
      <HomeFooter />
    </main>
  )
}