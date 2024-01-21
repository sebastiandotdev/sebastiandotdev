'use client'

import type { ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

type CarouselProps = {
  children: ReactNode
}

export const Carousel = ({ children }: CarouselProps) => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex items-center gap-2'>{children}</div>
    </div>
  )
}
