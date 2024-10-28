import { cn } from '@/utils/cn'
import { buttonVariants } from './ui/button'
import Container from './ui/container'

export default function HeroSection() {
  return (
    <div class="bg-stars">
      <Container>
        <h1 class="text-4xl md:text-7xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">Sebastián García</h1>
        <p class="mt-4 font-normal text-base max-w-lg text-center mx-auto">+2 Years of experience. From Colombia, Cesar. lover of infrastructure that improves the developer experience.</p>
        <div class="mt-8 gap-4 w-full flex justify-center max-w-lg mx-auto">
          <a href="https://docs.google.com/document/d/1Gr_sLH_Yh9pxl_gPzOKOergQ86WSapaOF4BOV8iBREM/edit?usp=sharing" class={cn(buttonVariants(), 'px-12')} target="_blank">
            Resume
          </a>
          <a href="#contact" class={cn(buttonVariants({ variant: 'outline' }), 'px-12')}>
            Contact
          </a>
        </div>
      </Container>
    </div>
  )
}
