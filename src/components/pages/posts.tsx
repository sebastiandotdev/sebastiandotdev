import { Box, Grid, HStack, panda } from '@/styled-system/jsx'
import BlogPosts from '@/src/components/common/posts-list'
import { allPosts } from 'contentlayer/generated'

export default function Posts() {
  return (
    <Box marginTop="20">
      <HStack>
        <panda.h2
          fontSize="2xl"
          fontWeight="bold"
          textWrap="balance"
          margin="0"
        >
          Posts
        </panda.h2>
      </HStack>
      <Grid columns={{ base: 1, lg: 2 }} gap="6" mt="14">
        {allPosts.map((_, index) => (
          <BlogPosts post={_} key={index} />
        ))}
      </Grid>
    </Box>
  )
}
