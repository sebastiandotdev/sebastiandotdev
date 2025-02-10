import { cva } from '@/styled-system/css'
import { panda } from '@/styled-system/jsx'

export const tag = cva({
  base: {
    display: 'inline-flex',
    bg: 'neutral.950/50',
    cursor: 'pointer',
    justifyContent: 'center',
    spaceX: '2',
    rounded: 'md',
    px: '2',
    py: '1',
    fontSize: 'xs',
  },
})

export const Tag = panda('div', tag)
