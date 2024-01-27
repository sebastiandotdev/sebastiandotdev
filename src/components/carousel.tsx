'use client'

import type { ReactNode } from 'react'
import type { EmblaPluginType } from 'embla-carousel'
import useAutoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type CarouselProps = {
  children: ReactNode
  loop?: boolean
  auto?: boolean
}

export const Carousel = ({
  children,
  loop = false,
  auto = false,
}: CarouselProps) => {
  const autoplay = useAutoplay()
  const plugins: EmblaPluginType[] = []

  if (auto) {
    plugins.push(autoplay)
  }

  const [emblaRef] = useEmblaCarousel({ loop }, plugins)

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex items-center gap-2'>{children}</div>
    </div>
  )
}
