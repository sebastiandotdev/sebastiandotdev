import { Box, HStack, panda } from '@/styled-system/jsx'
import { basics } from '@/curriculum.json' with { type: 'json' }
import { paragraph } from './recipes/paragraph'

export default function Hero() {
  const { name, label, summary, image } = basics
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
        <img src={image} alt="Sebastian" />
      </Box>
    </HStack>
  )
}
