import { For } from 'solid-js'
import { A } from '@solidjs/router'
import { socialSite } from '@/utils/constants'

export default function FloatSocials() {
  return (
    <div class="w-11 fixed left-6 bottom-4 z-10 hidden md:block">
      <nav class="flex  flex-col gap-6 items-center justify-center">
        <For each={socialSite}>
          {({ url, Icon }) => (
            <A href={url} class="hover:text-white/80" target="_blank">
              <Icon />
            </A>
          )}
        </For>
      </nav>
    </div>
  )
}
