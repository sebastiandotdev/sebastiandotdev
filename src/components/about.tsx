import Image from 'next/image'

export default function About() {
  const imageALT = 'Sebastián García'
  return (
    <article className='flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row'>
      <div className='[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1'>
        <p>
          Me llamo Sebastián García, pero de cariño me suelen decir Sebas.
          Empecé en la{' '}
          <strong>programación con un Toshiba de 2002, tenía 17 años. </strong>{' '}
          Actualmente, hago parte de un equipo de software de Bogotá de manera
          remota.
        </p>

        <p>
          Algunos de mis éxitos incluyen comenzar a dictar clases a temprana a
          edad, siendo un desafio para su tiempo para mí.
        </p>
      </div>
      <Image
        width={200}
        height={200}
        src='/sebastian.jpg'
        alt={imageALT}
        className='order-1 object-cover w-64 h-full p-1 bg-white md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl dark:bg-yellow-500/5 ring-1 ring-white/20'
        style={{
          objectPosition: '50% 50%',
        }}
      />
    </article>
  )
}
