import { css, cx } from '@/styled-system/css'
import * as React from 'react'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cx(
          css({
            display: 'flex',
            h: '10',
            w: 'full',
            rounded: 'md',
            borderWidth: '1px',
            borderColor: 'neutral.300',
            _dark: {
              borderColor: 'neutral.950',
            },
            px: '3',
            py: '2',
            ringOffset: '1',
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
  },
)

Input.displayName = 'Input'

export { Input }
