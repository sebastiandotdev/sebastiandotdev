import Hero from '@/src/components/presentation'
import WorkExperience from '@/src/components/work-experience'
import { Container } from '@/styled-system/jsx'

export default function Home() {
  return (
    <>
      <Container marginTop="44">
        <Hero />
        <WorkExperience />
      </Container>
    </>
  )
}
