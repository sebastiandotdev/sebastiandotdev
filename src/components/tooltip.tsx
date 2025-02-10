'use client'

import * as React from 'react'
import { css, cx } from '@/styled-system/css'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 5, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cx(
      css({
        z: '50',
        overflow: 'hidden',
        bg: 'white',
        _dark: {
          bg: 'neutral.950',
        },
        rounded: 'md',
        userSelect: 'none',
        willChange: 'transform, opacity',
        px: '3',
        py: '1.5',
        fontSize: 'sm',
        shadow: 'md',
      }),
      className,
    )}
    {...props}
  />
))

TooltipContent.displayName = 'TooltipContent'

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
