import type { JSX } from 'solid-js'
import { cn } from '@/utils/cn'
import { splitProps } from 'solid-js'

export default function Container(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [el, rest] = splitProps(props, ['children', 'class'])
  return (
    <div class={cn('w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden py-36 lg:py-44', el.class)} {...rest}>
      <div class="p-4 max-w-7xl mx-auto relative w-full md:pt-0">
        {el.children}
      </div>
    </div>
  )
}
