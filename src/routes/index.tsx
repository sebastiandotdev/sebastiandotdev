import { Header } from '@/components/Header'
import { Location, Available, Arrow } from '@/components/icons'
import { Briefcase } from '@/components/icons/Briefcase'
import { EXPERIENCIE } from '@/lib/const'
import { component$ } from '@builder.io/qwik'
import { type DocumentHead, Link } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <section>
        <article class='flex flex-col items-start justify-start'>
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
          <p class='flex items-center gap-1 text-secondary font-onest-regular'>
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
        <ol class='relative border-s border-gray-200 ml-3'>
          {EXPERIENCIE.map((experiencie) => (
            <li class='mb-10 ms-4'>
              <div class='absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-indigo-100 bg-white'></div>
              <time class='mb-1 text-sm font-normal font-onest-regular text-primary'>
                {experiencie.date}
              </time>
              <h3 class='text-lg font-semibold text-tertiary font-onest-regular mt-2'>
                {experiencie.title}
              </h3>
              <p class='mb-4 text-base font-normal text-pretty text-secondary font-onest-regular'>
                {experiencie.description}
              </p>
              {experiencie.link && (
                <Link
                  href={experiencie.link}
                  target='_blank'
                  class='bg-background border dark:border-white/10 border-gray-300 rounded-full inline-flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 font-onest-regular'
                >
                  Saber más... <Arrow />
                </Link>
              )}
            </li>
          ))}
        </ol>
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
