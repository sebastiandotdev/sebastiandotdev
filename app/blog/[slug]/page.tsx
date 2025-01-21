import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXContent } from '@/src/components/common/mdx-component'
import { Box, Flex, HStack, panda } from '@/styled-system/jsx'
import { Container } from '@/styled-system/jsx'
import { format } from '@formkit/tempo'
import Link from 'next/link'
import { ChevronLeftIcon, TagIcon } from '@/src/icons'
import { css } from '@/styled-system/css'
import { Tag } from '@/src/components/recipes/tag'

interface BlogPostProps {
  params: Promise<{
    slug: string
  }>
}

async function getBlogPostFromParams({ params }: BlogPostProps) {
  const { slug } = await params
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) {
    return null
  }

  const currentRoute = {
    key: post?._id,
    title: post?.title,
    path: `/${post?._raw?.sourceFilePath}`,
  }

  return { post, currentRoute }
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const postFromParams = await getBlogPostFromParams({ params })

  if (!postFromParams) {
    return {}
  }

  const { post } = postFromParams

  return {
    title: `Sebastián García | ${post.title}`,
    description: post.title,
  }
}
export async function generateStaticParams() {
  return allPosts.map((doc) => ({
    slug: doc._raw.flattenedPath,
  }))
}

const PostLayout = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const postFromParams = await getBlogPostFromParams({ params })

  if (!postFromParams) {
    notFound()
  }

  const { post } = postFromParams

  return (
    <Container marginTop="44">
      <nav className={css({ marginBottom: '2rem' })}>
        <Link href="/">
          <Flex alignItems="center" gap={2}>
            <ChevronLeftIcon />
            Regresar al inicio
          </Flex>
        </Link>
      </nav>
      <header>
        <panda.h2 fontSize="lg" fontWeight="semibold">
          {post.author}
        </panda.h2>
        <time dateTime={post.date}>{format(post.date)}</time>
        <Flex alignItems="center" gap="2" justifyContent="space-between" mt="4">
          <Box spaceX="3">
            {post.tags.map((content, index) => (
              <Tag key={index}>
                <HStack gap="1">
                  <TagIcon />
                  <panda.span>{content}</panda.span>
                </HStack>
              </Tag>
            ))}
          </Box>
        </Flex>
      </header>
      <Box mt="8">
        <panda.h1 fontSize="4xl" fontWeight="bold">
          {post.title}
        </panda.h1>
        <MDXContent code={post.body.code} />
      </Box>
    </Container>
  )
}

export default PostLayout
