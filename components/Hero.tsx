import { Box, HStack, panda } from '@/styled-system/jsx'
import curriculumJSON from '@/curriculum.json' with { type: 'json' }
import { paragraph } from './recipes/paragraph'
import Image from 'next/image'

export default function Hero() {
  const { name, label, summary, image } = curriculumJSON.basics
  return (
    <HStack>
      <Box>
        <panda.h2 fontSize="4xl" fontWeight="bold">
          {name}
        </panda.h2>
        <p className={paragraph()}>{label}</p>
        <p className={paragraph()}>{summary}</p>
      </Box>
      <Box>
        <Image src={image} alt="Sebastian" width={800} height={800} />
      </Box>
    </HStack>
  )
}
