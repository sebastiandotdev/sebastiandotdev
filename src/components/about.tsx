import {useTranslations} from 'next-intl'
import Image from 'next/image'

export default function About() {
  const imageALT = 'Sebastián García'
  const d = useTranslations('Description')
  return (
    <article className='flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row'>
      <div className='[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1'>
       {d("about")}
      </div>
      <Image
        width={200}
        height={200}
        src='/sebastian.jpg'
        alt={imageALT}
        className='order-1 object-cover w-64 h-full p-1 bg-white md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl dark:bg-yellow-500/5 ring-1 ring-white/20 my-12'
        style={{
          objectPosition: '50% 50%',
        }}
      />
    </article>
  )
}
