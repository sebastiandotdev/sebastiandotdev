import { Experience } from '@/components/Experience'
import { Header } from '@/components/Header'
import { Location, Available } from '@/components/icons'
import { Briefcase } from '@/components/icons/Briefcase'
import { component$ } from '@builder.io/qwik'
import { type DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <section>
        <article class='flex flex-col items-start justify-start pt-44'>
          <h1 class='font-onest-bold text-5xl font-bold'>
            Hey, Soy Sebastián García
          </h1>
          <p class='font-onest-regular text-secondary pt-4 pb-5'>
            Desarrollador de software
          </p>
          <p class='font-onest-regular text-secondary text-base text-balance'>
            +2 Años de experiencia.{' '}
            <b class='text-tertiary'>De Colombia, Cesar.</b> Especializado en el
            desarrollo de aplicaciones únicas. <br />
            Amante de la infraestructura que mejoran la experiencia del
            desarrollo.
          </p>
        </article>
        <article class='pt-6 flex gap-8 items-center'>
          <p class='flex items-center gap-2 text-secondary font-onest-regular'>
            <Location />
            Cesar, Valledupar
          </p>
          <p class='flex items-center gap-0.5 text-secondary font-onest-regular'>
            <Available />
            Disponible para trabajar
          </p>
        </article>
      </section>
      <Header />
      <section class='pt-28'>
        <h2 class='text-3xl font-semibold mb-6 flex gap-x-3 items-center font-onest-regular text-primary'>
          <Briefcase class='size-8' />
          Experiencia laboral
        </h2>
        <Experience />
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
