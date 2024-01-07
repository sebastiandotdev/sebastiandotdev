import { Location, Available, Github, Email } from '@/components/icons'
import { LinkedIn } from '@/components/icons/LinkedIn'
import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <section>
        <article class='flex flex-col items-start justify-start'>
          <h1 class='font-onest-bold text-5xl font-bold'>
            Hey, Soy Sebastián García
          </h1>
          <p class='font-onest-regular text-secondary pt-4 pb-5 pl-2'>
            Desarrollador de software
          </p>
          <p class='font-onest-regular text-secondary pl-2 text-base text-balance'>
            +2 Años de experiencia.{' '}
            <b class='text-yellow-500'>De Colombia, Cesar.</b> Especializado en
            el desarrollo de aplicaciones únicas. <br />
            Amante de la infraestructura que mejoran la experiencia del
            desarrollo.
          </p>
        </article>
        <article class='pt-6 flex gap-8 items-center'>
          <p class='flex items-center gap-2 text-secondary font-onest-regular'>
            <Location />
            Cesar, Valledupar
          </p>
          <p class='flex items-center gap-2 text-secondary font-onest-regular'>
            <Available />
            Disponible para trabajar
          </p>
        </article>
      </section>
      <nav class='container pt-6'>
        <ul class='py-1'>
          <li class='flex items-center gap-2 text-secondary font-onest-regular'>
            <Github />
            Github
          </li>
          <li class='flex items-center gap-2 text-secondary font-onest-regular py-3'>
            <LinkedIn />
            Linkein
          </li>
          <li class='flex items-center gap-2 text-secondary font-onest-regular'>
            <Email />
            Correo Electrinico
          </li>
        </ul>
      </nav>
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
