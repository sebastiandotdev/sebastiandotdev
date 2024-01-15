import Image from 'next/image'
import { Nextjs, Tailwind } from './icons'

export default function Projects() {
  const TAGS = {
    NEXT: {
      name: 'Next.js',
      className: 'bg-black text-white',
      icon: Nextjs,
    },
    TAILWIND: {
      name: 'Tailwind CSS',
      className: 'bg-[#003159] text-white',
      icon: Tailwind,
    },
  }
  const PROJECTS = [
    {
      title: 'Merch - Comercio para comprar el accesorio de tu mascota',
      description: 'Creado desde cero con Next.js, Supabase y Tailwind CSS.',
      link: 'https://petmerch.vercel.app/',
      github: 'https://github.com/seb-24/merch',
      image: '/webp/merch.webp',
      tags: [TAGS.NEXT, TAGS.TAILWIND],
    },
  ]
  return (
    <>
      {PROJECTS.map(({ image, title, description, tags }, i) => (
        <article key={i}>
          <h3 className='text-2xl font-semibold text-tertiary mb-2'>{title}</h3>
          <p className='text-lg mb-4 text-pretty'>{description}</p>
          <ul className='flex gap-x-2 flex-row mb-2'>
            {tags.map((tag, j) => (
              <li key={j}>
                <span
                  className={`flex gap-x-2 rounded-full text-xs ${tag.className} py-1 px-2 border border-white/10`}
                >
                  <tag.icon />
                  {tag.name}
                </span>
              </li>
            ))}
          </ul>
          <Image
            loading='lazy'
            className='rounded shadow-2xl shadow-white/10 object-cover aspect-video'
            src={image}
            alt={`Captura de pantalla del proyecto ${image}`}
            width={200}
            height={200}
          />
        </article>
      ))}
    </>
  )
}
