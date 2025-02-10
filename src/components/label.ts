import { cva } from '@/styled-system/css'
import { panda } from '@/styled-system/jsx'

//   "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

export const label = cva({
  base: {
    ml: '0.5',
    fontSize: 'sm',
    fontWeight: 'semibold',
    _peerDisabled: {
      cursor: 'not-allowed',
      opacity: '0.7',
    },
  },
})

export const Label = panda('label', label)
