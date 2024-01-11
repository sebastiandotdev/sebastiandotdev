import { component$, Slot } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { LinkProps } from 'types/component'

export const LinkItem = component$<LinkProps>((props) => {
  const value = props.target ? '_blank' : ''
  return (
    <>
      <Link
        href={props.path}
        target={value}
        class='flex items-center gap-2 text-secondary cursor-pointer hover:opacity-90  hover:transition-all py-2'
      >
        <Slot />
      </Link>
    </>
  )
})
