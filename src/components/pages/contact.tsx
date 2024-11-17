import { Box, HStack, panda } from '@/styled-system/jsx'
import { Badge } from '@/src/components/recipes/badge'

export default function () {
  return (
    <Box marginTop="20">
      <HStack>
        <panda.h2
          fontSize="2xl"
          fontWeight="bold"
          textWrap="balance"
          margin="0"
        >
          Contáctame
        </panda.h2>
        <Badge bordered="warn" py="1">
          Beta
        </Badge>
      </HStack>
    </Box>
  )
}
