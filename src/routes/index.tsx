import ContactSection from '@/components/contact'
import ExperienceSection from '@/components/experience'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HeroSection from '@/components/hero'
import FloatSocials from '@/components/socials'

export default function Home() {
  return (
    <>
      <Header />
      <FloatSocials />
      <main class="relative">
        <HeroSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
