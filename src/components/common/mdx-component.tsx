'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import { MDXComponents } from 'mdx/types'

interface MDXContentProps {
  code: string
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 {...props} />,
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code)
  return <Component components={components as MDXComponents} />
}
