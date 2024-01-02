import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <p class='font-mono'>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Sebastian Garcia',
  meta: [
    {
      name: 'Sobre mi',
      content:
        'Desarrollador de software, entusiasta del open source y la infraestructura del software',
    },
  ],
}
