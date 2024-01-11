import { EXPERIENCIE } from '@/lib/const'
import { component$ } from '@builder.io/qwik'
import { Arrow } from './icons'
import { Link } from '@builder.io/qwik-city'

export const Experience = component$(() => {
  return (
    <>
      <ol class='relative border-s border-gray-200 ml-3'>
        {EXPERIENCIE.map((experiencie) => (
          <li class='mb-10 ms-4'>
            <div class='absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-indigo-100 bg-white'></div>
            <time class='mb-1 text-sm font-normal text-primary'>
              {experiencie.date}
            </time>
            <h3 class='text-xl font-semibold text-tertiary mt-2'>
              {experiencie.title}
            </h3>
            <p class='mb-4 text-base font-normal text-pretty text-secondary'>
              {experiencie.description}
            </p>
            {experiencie.link && (
              <Link
                href={experiencie.link}
                target='_blank'
                class='bg-background border dark:border-white/10 border-gray-300 rounded-full inline-flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110'
              >
                Saber más... <Arrow />
              </Link>
            )}
          </li>
        ))}
      </ol>
    </>
  )
})
