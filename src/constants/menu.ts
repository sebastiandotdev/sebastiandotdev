import { HomeIcon, ProfileIcon, TerminalIcon, PhoneIcon } from '@/src/icons'

export const menus = [
  {
    id: 1,
    name: 'Inicio',
    path: '/',
    Icon: HomeIcon,
  },
  {
    id: 2,
    path: '/about',
    name: 'Perfil',
    Icon: ProfileIcon,
  },
  {
    id: 3,
    name: 'Proyectos',
    path: '#projects',
    Icon: TerminalIcon,
  },
  {
    id: 5,
    name: 'Contacto',
    path: '#contact',
    Icon: PhoneIcon,
  },
]
