import { Box, Flex, panda } from '@/styled-system/jsx'
import curriculumJSON from '@/src/static/curriculum.json' with { type: 'json' }
import Image from 'next/image'
import { TbSend, TbFileCv } from 'react-icons/tb'
import { css } from '@/styled-system/css'
import { Paragraph } from './ui/paragraph'
import { button } from './ui/button'
import Link from 'next/link'
import { Badge } from './ui/badge'

export default function Hero() {
  const { name, online, label, summary, image, email, cv } =
    curriculumJSON.basics
  return (
    <Flex flexDirection="column" md={{ flexDirection: 'row' }} gap="4">
      <Box flex="1">
        <Badge bordered="green" animation="pulse" radius="md">
          {online}
        </Badge>
        <panda.h2
          fontSize="5xl"
          fontWeight="bold"
          textWrap="balance"
          margin="0"
        >
          {name}
        </panda.h2>
        <Paragraph weight="md" size="lg">
          {label}
        </Paragraph>
        <Paragraph marginTop="10">{summary}</Paragraph>
        <Box marginTop="10">
          <Flex
            gap="4"
            flexDirection="column"
            md={{ gap: '8', flexDirection: 'row' }}
          >
            <Link href={`mailto:${email}`} className={button({ radius: 'md' })}>
              <TbSend size={25} />
              Correo electrónico
            </Link>
            <Link
              href={cv}
              className={button({ radius: 'md' })}
              target="_blank"
              download
            >
              <TbFileCv size={25} />
              CV
            </Link>
          </Flex>
        </Box>
      </Box>
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Image
          src={image}
          alt="Sebastian"
          width={350}
          height={350}
          className={css({ borderRadius: '2xl' })}
          priority
        />
      </Box>
    </Flex>
  )
}
