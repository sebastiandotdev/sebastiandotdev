import { Box, Center, Container, Flex, panda } from '@/styled-system/jsx'
import curriculumJSON from '@/src/static/curriculum.json' with { type: 'json' }
import { css } from '@/styled-system/css'
import Image from 'next/image'

export default function Home() {
  const { image } = curriculumJSON.basics
  return (
    <>
      <Container
        marginTop="44"
        maxWidth="1024"
        minWidth="300"
        p="8"
        bg="white"
        borderRadius="30px"
        shadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        border="1px solid rgba(255, 255, 255, 0.1)"
        _dark={{
          bg: 'neutral.950',
        }}
      >
        <Flex
          gap="6"
          flexDirection="column-reverse"
          md={{ flexDirection: 'row' }}
        >
          <Box flex="1">
            <Box textWrap="pretty" spaceY="6">
              <panda.h2
                fontSize="3xl"
                fontWeight="bold"
                textWrap="balance"
                margin="0"
              >
                It's Me Sebastián García
              </panda.h2>
              <panda.p>
                Consectetur earum ipsa exercitationem dignissimos sapiente
                tempora rerum dolor cumque, labore iste enim quaerat saepe
                tenetur explicabo. Quam quae aut harum est maiores sequi porro
                debitis illo, tempore eos atque quia id. Nobis aspernatur odio
                expedita, architecto facilis, placeat obcaecati saepe fugiat
                commodi alias ullam!
              </panda.p>
            </Box>
            <Box mt="16" spaceY="6">
              <panda.h2
                fontSize="2xl"
                fontWeight="bold"
                textWrap="balance"
                margin="0"
              >
                More About Me
              </panda.h2>
              <panda.p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur laudantium itaque earum ea pariatur tenetur autem.
                Autem et eos iusto dignissimos distinctio soluta laborum,
                tempore esse cumque obcaecati aliquid mollitia. Error obcaecati
                officia perspiciatis odit quia temporibus sequi, excepturi quae
                aspernatur modi dolorem similique asperiores, velit molestias
                facilis blanditiis! Odit quam debitis quis rem blanditiis.
              </panda.p>
              <panda.p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur laudantium itaque earum ea pariatur tenetur autem.
                Autem et eos iusto dignissimos distinctio soluta laborum,
                tempore esse cumque obcaecati aliquid mollitia. Error obcaecati
                officia perspiciatis odit quia temporibus sequi, excepturi quae
                aspernatur modi dolorem similique asperiores, velit molestias
                facilis blanditiis! Odit quam debitis quis rem blanditiis.
              </panda.p>
            </Box>
          </Box>
          <Center flex="1" alignItems="start">
            <Image
              src={image}
              alt="Sebastian"
              width={350}
              height={350}
              className={css({ borderRadius: 'full' })}
              priority
            />
          </Center>
        </Flex>
      </Container>
    </>
  )
}
