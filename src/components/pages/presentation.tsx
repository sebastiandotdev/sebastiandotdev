import { Box, Flex, panda } from '@/styled-system/jsx'
import curriculumJSON from '@/src/static/curriculum.json' with { type: 'json' }
import Image from 'next/image'
import { css, cx } from '@/styled-system/css'
import { Paragraph } from '../recipes/paragraph'
import { button } from '../recipes/button'
import Link from 'next/link'
import { Badge } from '../recipes/badge'
import { FileIcon, SendIcon } from '../../icons'
import { iconStyles } from '@/src/components/layouts/overlay-menu'

export default function Hero() {
  const { name, online, label, summary, image, email, cv } =
    curriculumJSON.basics
  return (
    <Flex
      id="home"
      flexDirection="column"
      md={{ flexDirection: 'row' }}
      gap="4"
    >
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
        <Paragraph marginTop="10" color="neutral.500">
          {summary}
        </Paragraph>
        <Box marginTop="10">
          <Flex
            gap="4"
            flexDirection="column"
            md={{ gap: '8', flexDirection: 'row' }}
          >
            <Link
              href={`mailto:${email}`}
              className={cx(
                button({ radius: 'md' }),
                css({ fontWeight: 'semibold' }),
              )}
            >
              <SendIcon className={iconStyles} />
              Correo electrónico
            </Link>
            <Link
              href={cv}
              className={cx(
                button({ radius: 'md' }),
                css({ fontWeight: 'semibold' }),
              )}
              target="_blank"
              download
            >
              <FileIcon className={iconStyles} />
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
