import type { ComponentProps, FC } from 'react'

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
              @copyrigth - all rights reserved to  <a
              href='https://midu.dev'
              target='_blank'
              className='underline'
            >
              @midudev
            </a>{' '}
            </span>
          </div>
          <nav className='text-secondary flex items-center gap-2 text-sm'>
            Adapted from the
            {' '}
            <a
              href='https://porfolio.dev'
              target='_blank'
              className='underline'
            >
              Midudev Portfolio
            </a>{' '}
            <a
              href='https://github.com/midudev/porfolio.dev'
              target='_blank'
              className='underline'
            >
              Source code
            </a>{' '}
          </nav>
        </div>
      </footer>
    </>
  )
}

export default Footer
