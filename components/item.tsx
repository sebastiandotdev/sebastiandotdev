import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * path is URL Link component
 * @example
 *
 * <LinkItem path='URL'/>
 *
 * @default
 * @type {boolean}
 * target
 *
 * @example
 * <LinkItem target />
 */
export type LinkProps = { path: string; target?: boolean; children: ReactNode }


export function Item(props: LinkProps) {
  const value = props.target ? '_blank' : ''
  return (
    <>
      <Link
        href={props.path}
        target={value}
        className='flex items-center gap-2 text-secondary cursor-pointer hover:opacity-90  hover:transition-all py-2'
      >
        {props.children}
      </Link>
    </>
  )
}
