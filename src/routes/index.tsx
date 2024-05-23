import ExperienceSection from '@/components/experience'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HeroSection from '@/components/hero'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExperienceSection />
      </main>
      <Footer />
    </>
  )
}
