import { component$ } from '@builder.io/qwik'
import { LinkItem } from './Link'
import { Code, Email, Github, LinkedIn } from './icons'

export const Header = component$(() => {
  return (
    <>
      <nav class='container pt-6'>
        <LinkItem path='https://github.com/seb-24' target>
          <Github />
          <b class='hover:text-tertiary'>Github</b>
        </LinkItem>
        <LinkItem path='https://www.linkedin.com/in/castrogarciajs/' target>
          <LinkedIn />
          <b class='hover:text-tertiary'>Linkedin</b>
        </LinkItem>
        <LinkItem path='mailto:johancs.mm@gmail.com' target>
          <Email />
          <b class='hover:text-tertiary'>{$localize`Email`}</b>
        </LinkItem>
        <LinkItem path='#projects'>
          <Code />
          <b class='hover:text-tertiary'>{$localize`Projects`}</b>
        </LinkItem>
      </nav>
    </>
  )
})
