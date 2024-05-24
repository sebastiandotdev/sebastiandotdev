import { For } from 'solid-js'
import { socialSite } from '@/utils/constants'
import { cn } from '@/utils/cn'

export default function FloatSocials() {
  return (
    <div class="w-11 fixed left-6 bottom-4 z-10 hidden md:block">
      <nav class="flex  flex-col gap-2 items-center justify-center">
        <For each={socialSite}>
          {({ url, Icon }) => (
            <a href={url} class={cn('p-2 rounded hover:animate-border transition-all')}>
              <Icon />
            </a>
          )}
        </For>
      </nav>
    </div>
  )
}
