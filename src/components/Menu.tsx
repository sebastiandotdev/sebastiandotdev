import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { Colombia, Moon, Sun, Usa } from './icons'

export const Menu = component$(() => {
  const darkMode = useSignal('black')

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
      darkMode.value = 'light'
      document.documentElement.setAttribute('data-theme', darkMode.value)
    } else {
      darkMode.value = 'black'
      document.documentElement.setAttribute('data-theme', darkMode.value)
    }
  })

  useVisibleTask$(() => {
    document.documentElement.setAttribute('data-theme', darkMode.value)
  })

  return (
    <>
      <header class='sticky z-10 top-0 flex justify-end items-center pr-6 pt-6'>
        <div class='relative inline-block text-left'>
          <ul class='menu menu-horizontal mt-6'>
            {LOCALES.map((locale) => (
              <li class='pt-0.5'>
                <a href={locale.href} class='tooltip' data-tip={locale.name}>
                  {<locale.Flag />}
                </a>
              </li>
            ))}
            <li>
              <label class='swap swap-rotate'>
                <input
                  type='checkbox'
                  class='theme-controller'
                  value='synthwave'
                  checked={darkMode.value === 'light' ? true : false}
                  onChange$={handleToogle}
                />

                <Sun />
                <Moon />
              </label>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
})
