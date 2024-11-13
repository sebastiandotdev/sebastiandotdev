import { css } from '@/styled-system/css'
import { HStack } from '@/styled-system/jsx'

export default function Home() {
  return (
    <>
      <HStack>
        <article>
          <h2
            className={css({
              fontSize: '4xl',
              fontWeight: 'bold',
            })}
          >
            Sebastián Garcia
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
            dolore?
          </p>
        </article>
      </HStack>
    </>
  )
}
