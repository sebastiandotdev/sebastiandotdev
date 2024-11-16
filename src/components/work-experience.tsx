import { Box, Grid, panda } from '@/styled-system/jsx'
import type { Work as WorkType } from '@/src/static/cv'
import curriculumJSON from '@/src/static/curriculum.json' with { type: 'json' }
import Work from './work'

export default function WorkExperience() {
  const works = curriculumJSON.work as unknown as WorkType[]
  return (
    <Box marginTop="44">
      <h2></h2>
      <panda.h2 fontSize="2xl" fontWeight="bold" textWrap="balance" margin="0">
        Experiencia laboral
      </panda.h2>
      <Grid columns={{ base: 1, lg: 2 }} gap="6" mt="14">
        {works.map((work, index) => (
          <Work key={index} work={{ ...work }} />
        ))}
      </Grid>
    </Box>
  )
}
