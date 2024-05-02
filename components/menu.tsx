import { DarkMode } from './dark-mode'
import { Colombia, Usa } from './icons'

export default function Menu() {
  return (
    <header className='flex justify-end items-center pr-6 pt-6'>
      <div className='relative flex justify-center gap-6 items-center text-left'>
        <a href='/en/'>
          <Usa className='size-6' />
        </a>
        <a href='/es/'>
          <Colombia className='size-6' />
        </a>
        <DarkMode />
      </div>
    </header>
  )
}
