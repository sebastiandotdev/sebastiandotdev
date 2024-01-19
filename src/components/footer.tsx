import { ComponentProps, FC } from 'react'
import Image from 'next/image'
import nextImg from 'static/nextjs-white-logo.svg'

type FooterProps = FC<ComponentProps<'footer'>>

const Footer: FooterProps = (props) => {
  return (
    <>
      <footer
        {...props}
        className='rounded-lg backdrop-blur-lg w-full xl:w-[1120px] mx-auto mt-10'
      >
        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between justify-center'>
          <div className='flex items-center gap-3'>
            <span className='text-sm sm:text-center'>
              Sebastián García
            </span>
          </div>
          <small className='text-secondary'>
            Adapted from the
            {' '}
            <a
              href='https://midu.dev'
              target='_blank'
              className='hover:underline'
            >
              @midudev
            </a>{' '}
            Portfolio
          </small>
        </div>
      </footer>
    </>
  )
}

export default Footer
