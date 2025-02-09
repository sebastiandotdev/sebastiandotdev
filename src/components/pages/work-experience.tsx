import { Box, Grid, panda } from '@/styled-system/jsx'
import type { Work as WorkType } from '@/src/static/cv'
import Work from '@/src/components/common/work'

export default function WorkExperience({
  dictionary,
}: {
  dictionary: Record<any, any>
}) {
  const works = dictionary.work as unknown as WorkType[]
  return (
    <Box marginTop="44">
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
