import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Email, Github, LinkedIn } from './icons'

export const Header = component$(() => {
  return (
    <>
      <nav class='container pt-6'>
        <Link
          href='https://github.com/seb-24'
          target='_blank'
          class='flex items-center gap-2 text-secondary font-onest-regular cursor-pointer hover:opacity-90 hover:underline hover:transition-all'
        >
          <Github />
          Github
        </Link>
        <Link
          href='https://www.linkedin.com/in/castrogarciajs/'
          target='_blank'
          class='flex items-center gap-2 text-secondary font-onest-regular py-3 cursor-pointer hover:opacity-90 hover:underline hover:transition-all'
        >
          <LinkedIn />
          Linkein
        </Link>
        <Link
          href='mailto:johancs.mm@gmail.com'
          class='flex items-center gap-2 text-secondary font-onest-regular cursor-pointer hover:opacity-90 hover:underline hover:transition-all'
        >
          <Email />
          Correo Electrinico
        </Link>
      </nav>
    </>
  )
})
