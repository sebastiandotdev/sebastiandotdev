import { css } from '@/styled-system/css'
import { Center, Flex } from '@/styled-system/jsx'
import Link from 'next/link'
import {
  MdHome,
  MdPerson,
  MdTerminal,
  MdLocalMall,
  MdLightMode,
} from 'react-icons/md'

const menus = [
  { id: 1, path: '/', Icon: MdHome },
  { id: 2, path: '/', Icon: MdPerson },
  { id: 3, path: '/', Icon: MdTerminal },
  { id: 4, path: '/', Icon: MdLocalMall },
]

export default function OverlayMenu() {
  return (
    <Center padding="4" position="fixed" top="0" left="0" right="0">
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '50%',
          maxWidth: 1024,
          minWidth: 300,
          padding: '12px 20px',
          backgroundColor: 'neutral.950',
          backdropFilter: 'blur(8px)',
          borderRadius: '30px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        })}
      >
        <Flex align="center" gap={4}>
          {menus.map((menu) => (
            <Link key={menu.id} href={menu.path}>
              <menu.Icon size={30} />
            </Link>
          ))}
        </Flex>

        <Flex align="center" gap={4}>
          <MdLightMode size={30} />
        </Flex>
      </div>
    </Center>
  )
}
