import { A } from '@solidjs/router'
import { buttonVariants } from './ui/button'
import { cn } from '@/utils/cn'

export default function HeroSection() {
  return (
    <div class="w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden py-36 lg:py-44">
      <div class="p-4 max-w-7xl mx-auto relative w-full md:pt-0">
        <h1 class="text-4xl md:text-7xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">Sebastián García</h1>
        <p class="mt-4 font-normal text-base max-w-lg text-center mx-auto">+2 Years of experience. From Colombia, Cesar. lover of infrastructure that improves the developer experience.</p>
        <div class="mt-8 gap-4 w-full flex justify-center max-w-lg mx-auto">
          <A href="/curriculum.docx" class={cn(buttonVariants(), 'px-12')} download="Sebastian-Garcia">
            Resume
          </A>

          <A href="https://www.linkedin.com/in/castrogarciajs" target="_blank" class={cn(buttonVariants({ variant: 'outline' }), 'px-12')}>
            Contact
          </A>

        </div>
      </div>
    </div>
  )
}
