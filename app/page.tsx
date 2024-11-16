import Posts from '@/src/components/pages/posts'
import Hero from '@/src/components/pages/presentation'
import WorkExperience from '@/src/components/pages/work-experience'
import { Container } from '@/styled-system/jsx'

export default function Home() {
  return (
    <>
      <Container marginTop="44">
        <Hero />
        <WorkExperience />
        <Posts />
      </Container>
    </>
  )
}
