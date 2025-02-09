import { getDictionary } from '@/src/constants/dictionary'
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
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <>
      <Container marginTop="44">
        <Hero dictionary={dictionary} />
        <WorkExperience dictionary={dictionary} />
        <Projects dictionary={dictionary} />
        <Contact dictionary={dictionary} />
        <Posts />
      </Container>
    </>
  )
}
