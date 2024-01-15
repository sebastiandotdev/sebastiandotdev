'use client'

import { useEffect, useState } from 'react'

export default function Top() {
  const [visible, setVisable] = useState(false)

  const handleVisibleTop = () => {
    const Y = window.scrollY
    if (Y > 300) {
      setVisable(true)
    } else {
      setVisable(false)
    }
  }
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleTop)

    return () => {
      window.removeEventListener('scroll', handleVisibleTop)
    }
  }, [])
  return (
    <>
      <>
        {visible && (
          <button
            className='fixed right-6 bottom-4 bg-green px-3 rounded-xl transition-all flex justify-center py-2 items-center gap-2 font-bold hover:cursor-pointer z-20 animate-bounce'
            onClick={handleTop}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-chevrons-up'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M7 11l5 -5l5 5' />
              <path d='M7 17l5 -5l5 5' />
            </svg>
          </button>
        )}
      </>
    </>
  )
}
