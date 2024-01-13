import { $, component$, useSignal } from '@builder.io/qwik'
import { DEFAULT_LOCALE } from '@/routes/[locale]/i18n-utils'
import { Chevron, Colombia, Usa } from './icons'
import { Link } from '@builder.io/qwik-city'

type Flag = { code: string; name: string; href: string; Flag: typeof Colombia }
export const Menu = component$(() => {
  const LOCALES: Record<string, Flag> = {
    en: {
      code: 'en',
      href: '/en/',
      name: 'Inglés',
      Flag: Usa,
    },
    es: {
      code: 'es',
      href: '/es/',
      name: 'Español',
      Flag: Colombia,
    },
  }
  const currentLocaleData = LOCALES[DEFAULT_LOCALE]

  const otherLocales = Object.values(LOCALES).filter(
    (locale) => locale.code !== DEFAULT_LOCALE,
  )

  return (
    <>
      <header class='flex justify-end items-center pr-6 pt-6'>
        <div class='relative inline-block text-left'>
          <div class='relative inline-block text-left'>
            <div class='group text-white rounded-md text-xs font-semibold transition-all'>
              <button
                type='button'
                class='inline-flex justify-start items-center w-full gap-x-2 px-3 py-2'
                aria-expanded='true'
                aria-haspopup='true'
              >
                <currentLocaleData.Flag />
                {currentLocaleData.name}
                <Chevron />
              </button>
              <ul class='group-hover:block group-hover:animate-fade-down group-hover:animate-duration-200 hidden pt-0.5 absolute w-full'>
                {otherLocales.map((locale) => (
                  <li>
                    <a
                      href={locale.href}
                      class='rounded-md whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3'
                    >
                      <locale.Flag />
                      {locale.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
})
