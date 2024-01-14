import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

export const Top = component$(() => {
  const visible = useSignal(false)

  const handleVisibleButton = $((e: Event) => {
    const scrollY = window.scrollY

    if (scrollY > 100) {
      visible.value = true
    } else {
      visible.value = false
    }
  })

  const handleScrollTop = $(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })

  useVisibleTask$(() => {
    window.addEventListener('scroll', handleVisibleButton)
  })
  return (
    <button
      class='fixed right-6 bottom-8 bg-green px-3 rounded-xl shadow-xl transition-all flex justify-center py-2 items-center gap-2 font-bold hover:cursor-pointer z-20'
      onClick$={handleScrollTop}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='icon icon-tabler icon-tabler-chevrons-up'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        stroke-width='2'
        stroke='currentColor'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M7 11l5 -5l5 5' />
        <path d='M7 17l5 -5l5 5' />
      </svg>
    </button>
  )
})
