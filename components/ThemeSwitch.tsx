'use client'

import { css } from '@/styled-system/css'
import { HStack } from '@/styled-system/jsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

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

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className={css({
        px: '2',
        py: '1',
        textStyle: 'xl',
        fontWeight: 'semibold',
        letterSpacing: 'tight',
        rounded: 'md',
        cursor: 'pointer',
        _hover: {
          transition: 'colors',
          bg: 'neutral.600',
        },
      })}
    >
      <HStack gap="2">
        {isDark ? <MdDarkMode size={30} /> : <MdLightMode size={30} />}
      </HStack>
    </button>
  )
}
