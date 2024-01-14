import { component$ } from '@builder.io/qwik'
import qwikImg from '/svg/qwik.svg'

export const Footer = component$(() => {
  return (
    <>
      <footer class='rounded-lg m-4 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-6'>
        <div class='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
          <div class='flex items-center gap-3'>
            <span class='text-sm sm:text-center'>
              Sebastián García - Hecho con{' '}
            </span>
            <img
              src={qwikImg}
              alt='Qwik herramienta frontend portafolio'
              class='size-6'
            />
          </div>
          <small>
            © Todos los derecho reservado a{' '}
            <a
              href='https://midu.dev'
              target='_blank'
              class='hover:underline hover:text-white'
            >
              @midudev
            </a>
          </small>
        </div>
      </footer>
    </>
  )
})
