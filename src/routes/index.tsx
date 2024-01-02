import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <section>
        <h1 class='font-serif text-5xl font-bold'>Sebastián García</h1>
        <p class='font-serif text-secondary'>Desarrollador de software</p>
      </section>
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
