import { cva } from '@/styled-system/css'
import { panda } from '@/styled-system/jsx'

export const button = cva({
  base: {
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'center',
    fontSize: 'lg',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    maxWidth: 'max-content',
    paddingX: '3',
    paddingY: '1.5',
    gap: '3',
    transition: 'all',
    transitionDuration: '100ms',
    transitionTimingFunction: 'ease-in',
    _hover: {
      scale: '1.1',
    },
    _active: {
      scale: '0.9',
    },
  },
  variants: {
    background: {
      neutral: {
        bg: 'neutral.950',
        color: 'white',
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
    shadow: {
      base: {
        shadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
    border: {
      none: {
        border: 'none',
      },
      sm: {
        border: '1px solid rgba(255, 255, 255, 0.1)',
      },
    },
  },
  defaultVariants: {
    radius: 'none',
    shadow: 'base',
    border: 'sm',
    background: 'neutral',
  },
})

export const Button = panda('button', button)
