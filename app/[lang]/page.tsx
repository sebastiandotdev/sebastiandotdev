import { getDictionary } from '@/dictionary'
import { Locale } from '@/i18n.config'
import Contact from '@/src/components/pages/contact'
import Posts from '@/src/components/pages/posts'
import Hero from '@/src/components/pages/presentation'
import Projects from '@/src/components/pages/projects'
import WorkExperience from '@/src/components/pages/work-experience'
import { Container } from '@/styled-system/jsx'

interface PageProps {
  params: Promise<{ lang: Locale }>
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <>
      <Container marginTop="44">
        <Hero dictionary={dictionary} />
        <WorkExperience />
        <Projects />
        <Contact />
        <Posts />
      </Container>
    </>
  )
}
