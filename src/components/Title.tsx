import { component$, Slot } from '@builder.io/qwik'

export const Title = component$(() => {
  return (
    <>
      <h2 class='text-3xl font-semibold mb-6 flex gap-x-3 items-center'>
        <Slot />
      </h2>
    </>
  )
})
