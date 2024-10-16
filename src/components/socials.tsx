import { socialSite } from '@/utils/constants'
import { A } from '@solidjs/router'
import { For } from 'solid-js'

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
