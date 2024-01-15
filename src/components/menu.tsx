import Link from 'next/link'
import { DarkMode } from './dark-mode'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export default function Menu() {
  return (
    <header className='flex justify-end items-center pr-6 pt-6'>
      <div className='relative flex justify-center gap-6 items-center text-left'>
        <a href='/en/'>Inglés</a>
        <a href='/es/'>Español</a>
        <DarkMode />
      </div>
    </header>
  )
}
