'use client'

import { css } from '@/styled-system/css'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

import { MoonIcon, SunIcon } from '@/src/icons'

type Theme = 'light' | 'dark' | 'system'

function useThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'

  const toggleTheme = (event: MouseEvent, theme: Theme) => {
    const isAppearanceTransition =
      // @ts-expect-error: Transition API
      document.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition || !event) {
      setTheme(theme)
      return
    }

    const x = event.clientX
    const y = event.clientY

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme)
      })
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]

      document.documentElement.animate(
        {
          clipPath: isDark ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: isDark
            ? '::view-transition-new(root)'
            : '::view-transition-old(root)',
        },
      )
    })
  }

  return {
    toggleTheme,
    mounted,
    isDark,
  }
}

export default function ThemeSwitch() {
  const { isDark, toggleTheme, mounted } = useThemeSwitch()

  if (!mounted)
    return (
      <div
        className={css({
          rounded: 'full',
          bg: 'neutral.200',
          animationName: 'pulse',
          animationDuration: '2500ms',
          animationDirection: 'alternate',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'ease-in-out',
          h: '1.9em',
          w: '1.9em',
        })}
        role="status"
        aria-label="Loading"
      />
    )

  return (
    <button
      onClick={(e) =>
        toggleTheme(e as unknown as MouseEvent, isDark ? 'light' : 'dark')
      }
      className={css({
        cursor: 'pointer',
      })}
    >
      {isDark ? (
        <SunIcon className={css({ fontSize: '3xl' })} />
      ) : (
        <MoonIcon className={css({ fontSize: '3xl' })} />
      )}
    </button>
  )
}
