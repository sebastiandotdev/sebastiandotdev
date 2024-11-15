import { cva } from '@/styled-system/css'
import { panda } from '@/styled-system/jsx'

export const badge = cva({
  base: {
    display: 'inline-flex',
    padding: '6px 12px',
    fontSize: 'xs',
    fontWeight: 'semibold',
    textTransform: 'uppercase',
  },

  variants: {
    animation: {
      pulse: {
        animationName: 'pulse',
      },
    },
    background: {
      none: {
        backgroundColor: 'none',
      },
      green: {
        backgroundColor: 'green',
      },
    },
    bordered: {
      none: {
        border: 'none',
      },
      green: {
        color: 'green',
        border: 'solid',
        borderWidth: '1px',
        borderColor: 'green.600',
      },
    },
    radius: {
      none: {
        rounded: 'none',
      },
      sm: {
        rounded: 'sm',
      },
      md: {
        rounded: 'md',
      },
    },
  },

  defaultVariants: {
    radius: 'sm',
    bordered: 'none',
  },
})

export const Badge = panda('div', badge)
