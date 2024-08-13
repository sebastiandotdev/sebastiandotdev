import { createEffect, createSignal, onCleanup } from 'solid-js'
import IconX from './icons/x'
import ModeToggle from './dark-mode'
import { Button } from './ui/button'
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
    <header class={cn('flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full hover:animate-border [&:has(a)]:font-medium z-10 px-6 py-2 items-center justify-center gap-3 transition-opacity', isVisible() ? 'bg-background opacity-100' : 'opacity-0 bg-transparent')}>
      <a href="/">
        Home
      </a>
      <a href="/">
        About
      </a>
      <ModeToggle />
      <Button variant="outline" size="icon" class="rounded-full" as="a" href="https://x.com/sebastiandottop">
        <IconX />
      </Button>

    </header>
  )
}
