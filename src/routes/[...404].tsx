import { A } from '@solidjs/router'
import { HttpStatusCode } from '@solidjs/start'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils/cn'
import Container from '@/components/ui/container'
import Footer from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <Container class="h-screen">
        <h1 class="text-4xl md:text-7xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">
          Page not found
          <HttpStatusCode code={404} />
        </h1>
        <div class="mt-8 gap-4 w-full flex justify-center max-w-lg mx-auto">
          <A href="/" class={cn(buttonVariants(), 'px-10')}>
            Go to Home
          </A>

          <A href="https://github.com/castrogarciajs/castrogarciajs/issues" class={cn(buttonVariants({ variant: 'outline' }), 'px-10')} target="_blank">
            Report an issue
          </A>
        </div>
      </Container>
      <Footer />
    </>
  )
}
