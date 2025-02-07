import { HomeIcon, ProfileIcon, TerminalIcon, PhoneIcon } from '@/src/icons'

export const menus = [
  {
    id: 1,
    name: 'Home',
    path: '/#home',
    Icon: HomeIcon,
  },
  {
    id: 2,
    path: '/about',
    name: 'About me',
    Icon: ProfileIcon,
  },
  {
    id: 3,
    name: 'Projects',
    path: '#projects',
    Icon: TerminalIcon,
  },
  {
    id: 5,
    name: 'Contact',
    path: '/#contact',
    Icon: PhoneIcon,
  },
]
