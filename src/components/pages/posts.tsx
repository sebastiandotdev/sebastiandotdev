import { Box, Grid, HStack, panda } from '@/styled-system/jsx'
import BlogPosts from '@/src/components/posts-list'
import { Badge } from '../recipes/badge'

export default function Posts() {
  return (
    <Box marginTop="20">
      <HStack>
        <panda.h2
          fontSize="2xl"
          fontWeight="bold"
          textWrap="balance"
          margin="0"
          mb="2"
        >
          Posts
        </panda.h2>
        <Badge bordered="warn" py="0.5">
          Beta
        </Badge>
      </HStack>
      <Grid columns={{ base: 1, lg: 2 }} gap="6" mt="14">
        {[1, 2, 3, 4].map((_, index) => (
          <BlogPosts key={index} />
        ))}
      </Grid>
    </Box>
  )
}
