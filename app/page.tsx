import Contact from '@/src/components/pages/contact'
import Posts from '@/src/components/pages/posts'
import Hero from '@/src/components/pages/presentation'
import Projects from '@/src/components/pages/projects'
import WorkExperience from '@/src/components/pages/work-experience'
import { Container } from '@/styled-system/jsx'

export default function Home() {
  return (
    <>
      <Container marginTop="44">
        <Hero />
        <WorkExperience />
        <Projects />
        <Contact />
        <Posts />
      </Container>
    </>
  )
}
