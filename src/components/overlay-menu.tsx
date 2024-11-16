import { css } from '@/styled-system/css'
import { Center, Flex } from '@/styled-system/jsx'
import Link from 'next/link'
import ThemeSwitch from './theme-switch'
import {
  HomeIcon,
  ProfileIcon,
  TerminalIcon,
  ShoppingBangIcon,
  PhoneIcon,
} from '@/src/icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/src/components/ui/tooltip'

const menus = [
  {
    id: 1,
    name: 'Inicio',
    path: '/',
    Icon: HomeIcon,
  },
  {
    id: 2,
    path: '/',
    name: 'Perfil',
    Icon: ProfileIcon,
  },
  {
    id: 3,
    name: 'Proyectos',
    path: '/',
    Icon: TerminalIcon,
  },
  {
    id: 4,
    name: 'Productos',
    path: '/',
    Icon: ShoppingBangIcon,
  },
  {
    id: 5,
    name: 'Contacto',
    path: '/',
    Icon: PhoneIcon,
  },
]

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
          backdropFilter: 'blur(8px)',
          borderRadius: '30px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          _dark: {
            backgroundColor: 'neutral.950',
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
        </Flex>
      </div>
    </Center>
  )
}
