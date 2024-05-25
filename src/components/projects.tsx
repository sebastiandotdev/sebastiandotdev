import { A } from '@solidjs/router'
import createAutoplay from 'embla-carousel-autoplay'
import { For } from 'solid-js'
import IconGithub from './icons/github'
import IconArrowUpRight from './icons/arrow-up-right'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { projects } from '@/utils/constants'

export default function ProjectsSection() {
  const autoplay = createAutoplay({ delay: 3000, stopOnInteraction: true })
  return (
    <section id="#projects" class="w-full py-12 md:py-24 lg:py-32">
      <div class="container px-4 md:px-6">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <h2 class="text-4xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">Open Source Projects</h2>
            <p class="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              These are some outstanding open source projects with a specific goal in mind. You can analyze them below.
            </p>
          </div>
        </div>
        <Carousel
          plugins={[autoplay]}
          opts={{ loop: true }}
          class="w-full max-w-6xl mx-auto mt-12 cursor-grab"
          onMouseEnter={autoplay.stop}
          onMouseLeave={() => autoplay.play(false)}
        >
          <CarouselContent>
            <For each={projects}>
              {project => (
                <CarouselItem>
                  <div class="p-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent class="flex items-center justify-between">

                        <A class="flex items-center gap-1 hover:underline font-medium" href={project.github} target="_blank">
                          <IconGithub />
                          <span class="-mb-1">
                            View on GitHub

                          </span>
                        </A>
                        <A href={project.demo} class="flex items-center gap-1 font-medium hover:underline" target="_blank">
                          <span class="-mb-1">
                            View deployment
                          </span>
                          <IconArrowUpRight />
                        </A>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )}
            </For>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
