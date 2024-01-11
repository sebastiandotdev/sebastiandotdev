import { component$ } from '@builder.io/qwik'
import { LinkItem } from './Link'
import { Code, Email, Github, LinkedIn } from './icons'

export const Header = component$(() => {
  return (
    <>
      <nav class='container pt-6'>
        <LinkItem path='https://github.com/seb-24'>
          <Github />
          <b class='hover:text-tertiary'>Github</b>
        </LinkItem>
        <LinkItem path='https://www.linkedin.com/in/castrogarciajs/'>
          <LinkedIn />
          <b class='hover:text-tertiary'>Linkedin</b>
        </LinkItem>
        <LinkItem path='mailto:johancs.mm@gmail.com'>
          <Email />
          <b class='hover:text-tertiary'>Correo Electrinico</b>
        </LinkItem>
        <LinkItem path='#projects'>
          <Code />
          <b class='hover:text-tertiary'>Proyectos</b>
        </LinkItem>
      </nav>
    </>
  )
})
