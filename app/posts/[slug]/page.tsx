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
    null
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
  const { post } = await getBlogPostFromParams({ params })

  if (!post) {
    return {}
  }
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
  const { post } = await getBlogPostFromParams({ params })

  if (!post) {
    notFound()
  }

  return (
    <Container marginTop="44">
      <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
        {post.date}
      </time>
      <h1>{post.title}</h1>
      <MDXContent code={post.body.code} />
    </Container>
  )
}

export default PostLayout
