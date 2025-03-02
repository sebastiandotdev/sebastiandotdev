import type { Dict } from '@/src/types'
import { Box, Grid, HStack, panda } from '@/styled-system/jsx'
import ProjectsList from '@/src/components/common/projects-list'
import { Projects as ProjectType } from '@/src/static/cv'

export default function Projects({ dictionary }: Dict) {
  return (
    <Box id="projects" marginTop="20">
      <HStack>
        <panda.h2
          fontSize="2xl"
          fontWeight="bold"
          textWrap="balance"
          margin="0"
        >
          {dictionary.titles.projects}
        </panda.h2>
      </HStack>
      <Grid columns={{ base: 1, lg: 2 }} gap="6" mt="14">
        {(dictionary.projects as ProjectType[]).map((_, index) => (
          <ProjectsList key={index} project={_} />
        ))}
      </Grid>
    </Box>
  )
}
