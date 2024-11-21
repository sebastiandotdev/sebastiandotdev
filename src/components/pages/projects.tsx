import { Box, HStack, panda } from '@/styled-system/jsx'
import { Badge } from '@/src/components/recipes/badge'

export default function Projects() {
  return (
    <Box id="projects" marginTop="20">
      <HStack>
        <panda.h2
          fontSize="2xl"
          fontWeight="bold"
          textWrap="balance"
          margin="0"
        >
          Proyectos
        </panda.h2>
        <Badge bordered="warn" py="1">
          Beta
        </Badge>
      </HStack>
    </Box>
  )
}
