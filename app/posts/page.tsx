import { Container } from '@/styled-system/jsx'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

export default function Blog() {
  return (
    <>
      <Container marginTop="44">
        <Link href={allPosts[0].url}>{allPosts[0].title}</Link>
      </Container>
    </>
  )
}
