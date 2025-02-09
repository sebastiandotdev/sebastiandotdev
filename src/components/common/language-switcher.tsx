'use client'

import { usePathname, useRouter } from 'next/navigation'
import { USIcon, COIcon } from '@/src/icons'
import { css } from '@/styled-system/css'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/src/components/ui/tooltip'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale = pathname.split('/')[1]

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'es' : 'en'
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={toggleLanguage}
            className={css({
              cursor: 'pointer',
            })}
          >
            {currentLocale === 'en' ? (
              <COIcon className={css({ fontSize: '3xl' })} />
            ) : (
              <USIcon className={css({ fontSize: '3xl' })} />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{currentLocale === 'en' ? 'Español' : 'Inglés'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
