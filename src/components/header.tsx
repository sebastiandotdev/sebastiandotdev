import { For, createEffect, createSignal, onCleanup } from 'solid-js'
import { A } from '@solidjs/router'
import IconX from './icons/x'
import { cn } from '@/utils/cn'
import { linksNavbar } from '@/utils/constants'

export default function Header() {
  const shouldRenderSocialIcon = 'X'
  const [prevScroll, setPrevScroll] = createSignal(0)
  const [isVisible, setIsVisable] = createSignal(true)

  const handleScroll = () => {
    const currentScroll = window.scrollY
    setIsVisable(prevScroll() > currentScroll || currentScroll < 10)
    setPrevScroll(currentScroll)
  }

  createEffect(() => {
    window.addEventListener('scroll', handleScroll)
    onCleanup(() => window.removeEventListener('scroll', handleScroll))
  })

  return (
    <header class={cn('flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full hover:animate-border [&:has(a)]:font-medium z-10 pr-2 pl-8 py-2 items-center justify-center space-x-4 transition-opacity', isVisible() ? 'bg-background opacity-100' : 'opacity-0 bg-transparent')}>
      <For each={linksNavbar}>
        {({ name, url, type }) => (
          <A href={url} class={cn('relative items-center flex space-x-1 hover:underline', type === shouldRenderSocialIcon ? 'border text-sm font-medium relative px-4 py-2 rounded-full flex items-center gap-1 !no-underline hover:opacity-90 transition-opacity' : '')}>
            {name}
            {type === shouldRenderSocialIcon && (
              <IconX />
            )}
          </A>
        )}
      </For>
    </header>
  )
}
