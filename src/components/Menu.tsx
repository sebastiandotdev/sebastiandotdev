import { component$ } from '@builder.io/qwik'
import { Chevron, Colombia, Spain } from './icons'
import { EEUU } from './icons/EEUU'

export const Menu = component$(() => {
  return (
    <>
      <header class='flex justify-end items-center pr-6 pt-6'>
        <div class='relative inline-block text-left'>
          <div class='group text-white rounded-md text-xs font-semibold transition-all'>
            <button
              type='button'
              class='inline-flex justify-start items-center w-full gap-x-2 px-3 py-2'
              aria-expanded='true'
              aria-haspopup='true'
            >
              <Colombia />
              Español
              <Chevron />
            </button>
            <ul class='group-hover:block group-hover:animate-fade-down group-hover:animate-duration-200 hidden pt-0.5 absolute w-full'>
              <li class=''>
                <a
                  class='rounded-md whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2'
                  href={`/en`}
                >
                    <EEUU />
                  EEUU
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
})
