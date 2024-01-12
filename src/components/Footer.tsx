import { component$ } from '@builder.io/qwik'

export const Footer = component$(() => {
  return (
    <>
      <footer class='rounded-lg shadow m-4 bg-black/5 dark:bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10'>
        <div class='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
          <span class='text-sm sm:text-center text-secondary'>
            © Open Source - Sebastian Garcia - 2024
          </span>
        </div>
      </footer>
    </>
  )
})
