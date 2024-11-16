'use client'

import { css } from '@/styled-system/css'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { HomeIcon, MoonIcon, SunIcon } from '../icons'

function useThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

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
      onClick={toggleTheme}
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
