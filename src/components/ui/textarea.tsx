import { css, cx } from '@/styled-system/css'
import * as React from 'react'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cx(
        css({
          display: 'flex',
          minH: '180px',
          w: 'full',
          rounded: 'md',
          borderWidth: '1px',
          borderColor: 'neutral.950',
          px: '3',
          py: '2',
          _disabled: {
            cursor: 'not-allowed',
          },
          _focusVisible: {
            outline: 'none',
            ring: '1px',
            ringOffset: '2',
            ringColor: 'neutral.200',
          },
        }),
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export { Textarea }
