import { For } from 'solid-js'
import { experiences } from '@/utils/constants'

export default function ExperienceSection() {
  return (
    <section class="py-8 mb-20">
      <div class="container px-4 md:px-6">
        <div class="space-y-4 text-center">
          <h2 class="text-4xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">Work Experience</h2>
          <p class="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            In this section you will find my work experience during my career in the software world you can contact me to learn more.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 mt-8 grid-cols-1">
          <For each={experiences}>
            {({ title, description, time }) => (
              <div class="group rounded-lg border p-6 shadow-md relative">
                <div class="space-y-3">
                  <h3 class="text-xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">{title}</h3>
                  <p>
                    {description}
                  </p>
                </div>
                <small class="text-muted-foreground">
                  {time}
                </small>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  )
}
