import ContactSection from '@/components/contact'
import ExperienceSection from '@/components/experience'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HeroSection from '@/components/hero'
import ProjectsSection from '@/components/projects'
import FloatSocials from '@/components/socials'
import UpHome from '@/components/up-home'

export default function Home() {
  return (
    <>
      <Header />
      <FloatSocials />
      <UpHome />
      <main class="relative">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
