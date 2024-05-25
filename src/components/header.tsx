import { createEffect, createSignal, onCleanup } from 'solid-js'
import IconX from './icons/x'
import ModeToggle from './dark-mode'
import { cn } from '@/utils/cn'

export default function Header() {
  const [prevScroll, setPrevScroll] = createSignal(0)
  const [isVisible, setIsVisible] = createSignal(true)

  const handleScroll = () => {
    const currentScroll = window.scrollY
    setIsVisible(prevScroll() > currentScroll || currentScroll < 10)
    setPrevScroll(currentScroll)
  }

  createEffect(() => {
    window.addEventListener('scroll', handleScroll)
    onCleanup(() => window.removeEventListener('scroll', handleScroll))
  })

  return (
    <header class={cn('flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full hover:animate-border [&:has(a)]:font-medium z-10 px-2 py-2 items-center justify-center gap-2 transition-opacity', isVisible() ? 'bg-background opacity-100' : 'opacity-0 bg-transparent')}>

      <ModeToggle />
      <a href="https://x.com/castrogarciajs" class={cn('relative items-center border text-sm font-medium px-4 py-1.5 rounded-full flex gap-1 hover:opacity-90 transition-opacity')}>
        Follow me on
        <IconX />

      </a>

    </header>
  )
}
