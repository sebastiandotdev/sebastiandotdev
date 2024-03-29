import { useTranslations } from 'next-intl'
import { Code, Email, Github, LinkedIn } from './icons'
import { Item } from './item'

export default function Header() {
  const t = useTranslations('Menu')
  return (
    <>
      <nav className='pt-6'>
        <Item path='https://github.com/castrogarciajs' target>
          <Github />
          <b className='hover:text-tertiary'>Github</b>
        </Item>
        <Item path='https://www.linkedin.com/in/castrogarciajs/' target>
          <LinkedIn />
          <b className='hover:text-tertiary'>Linkedin</b>
        </Item>
        <Item path='mailto:castrogarcia.mjs@gmail.com' target>
          <Email />
          <b className='hover:text-tertiary'>{t('email')}</b>
        </Item>
        <Item path='#projects'>
          <Code />
          <b className='hover:text-tertiary'>{t('projects')}</b>
        </Item>
      </nav>
    </>
  )
}
