import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { Colombia, Moon, Sun, Usa } from './icons'

export const Menu = component$(() => {
  const moonSelected = useSignal<string>('black')

  const LOCALES = [
    {
      code: 'en',
      href: '/en/',
      name: 'Inglés',
      Flag: Usa,
    },
    {
      code: 'es',
      href: '/es/',
      name: 'Español',
      Flag: Colombia,
    },
  ]

  const handleToogle = $((e: Event) => {
    const inputToggle = e.target as HTMLInputElement
    if (inputToggle.checked) {
      moonSelected.value = 'light'
    } else {
      moonSelected.value = 'dark'
    }
  })

  useVisibleTask$(() => {
    document.documentElement.setAttribute('data-theme', moonSelected.value)
  })

  return (
    <>
      <header class='sticky top-0 flex justify-end items-center pr-6 pt-6'>
        <div class='relative inline-block text-left'>
          <ul class='menu menu-horizontal mt-6'>
            {LOCALES.map((locale) => (
              <li class='pt-0.5'>
                <a
                  href={locale.href}
                  class='tooltip'
                  data-tip={locale.name}
                >
                  {<locale.Flag />}
                </a>
              </li>
            ))}
            <li>
              <a href='#' class='tooltip'>
                <label class='swap swap-rotate'>
                  <input
                    type='checkbox'
                    class='theme-controller'
                    value='synthwave'
                    checked={moonSelected.value === 'light' ? true : false}
                    onChange$={handleToogle}
                  />

                  <Sun />
                  <Moon />
                </label>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
})
