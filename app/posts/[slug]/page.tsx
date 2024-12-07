import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXContent } from '@/src/components/common/mdx-component'

import { Container } from '@/styled-system/jsx'

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
    title: post.title,
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
      <time dateTime={post.date}>{post.date}</time>
      <h1>{post.title}</h1>
      <MDXContent code={post.body.code} />
    </Container>
  )
}

export default PostLayout
