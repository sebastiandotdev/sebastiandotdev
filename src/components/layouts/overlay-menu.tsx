import { css } from '@/styled-system/css'
import { Center, Flex } from '@/styled-system/jsx'
import Link from 'next/link'
import ThemeSwitch from '@/src/components/theme-switch'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/src/components/ui/tooltip'
import { menus } from '@/src/constants/menu'
import { GithubIcon } from '@/src/icons'

export const iconStyles = css({ fontSize: '2xl' })

export default function OverlayMenu() {
  return (
    <Center padding="4" position="fixed" top="0" left="0" right="0" zIndex={10}>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '50%',
          maxWidth: 1024,
          minWidth: 300,
          padding: '12px 20px',
          bg: 'white',
          borderRadius: '30px',
          shadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          _dark: {
            bg: 'neutral.950',
          },
        })}
      >
        <Flex align="center" gap={4}>
          {menus.map((menu) => (
            <TooltipProvider key={menu.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={menu.path}>
                    <menu.Icon className={iconStyles} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{menu.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </Flex>

        <Flex align="center" gap={4}>
          <ThemeSwitch />
          <Link href="/">
            <GithubIcon className={iconStyles} />
          </Link>
        </Flex>
      </div>
    </Center>
  )
}
