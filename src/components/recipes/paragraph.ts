import { cva } from '@/styled-system/css'
import { panda } from '@/styled-system/jsx'

const paragraph = cva({
  base: {
    textWrap: 'pretty',
  },
  variants: {
    size: {
      base: {
        fontSize: 'initial',
      },
      sm: {
        fontSize: 'lg',
      },
      md: {
        fontSize: 'xl',
      },

      lg: {
        fontSize: '2xl',
      },
    },
    weight: {
      sm: {
        fontWeight: 'normal',
      },
      md: {
        fontWeight: 'semibold',
      },
    },
  },
  defaultVariants: {
    weight: 'sm',
    size: 'base',
  },
})

export const Paragraph = panda('p', paragraph)
