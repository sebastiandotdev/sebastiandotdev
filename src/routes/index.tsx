import ContactSection from '@/components/contact'
import ExperienceSection from '@/components/experience'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero'
import FloatSocials from '@/components/socials'

export default function Home() {
  return (
    <>
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
