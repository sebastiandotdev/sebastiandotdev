import { Box, Flex, HStack, Stack, panda } from '@/styled-system/jsx'
import { Tag } from '@/src/components/recipes/tag'
import Link from 'next/link'
import { ChevronRightIcon, TagIcon } from '@/src/icons'
import type { Post } from '@/.contentlayer/generated'
import { format } from '@formkit/tempo'
import { css } from '@/styled-system/css'

export default function BlogPosts({ post }: { post: Post }) {
  return (
    <Stack
      px="6"
      py="5"
      border="solid"
      rounded="md"
      spaceX="6"
      borderWidth="1px"
      borderColor="neutral.200"
      _dark={{
        borderColor: 'neutral.950',
      }}
    >
      <Box>
        <Link
          href={post.url}
          className={css({
            fontSize: 'lg',
            fontWeight: 'bold',
            _hover: {
              textDecoration: 'underline',
              cursor: 'pointer',
            },
          })}
        >
          {post.title}
        </Link>
        <panda.small
          display="flex"
          alignItems="center"
          gap="1"
          color="neutral.500"
          textWrap="pretty"
        >
          {post.description}
        </panda.small>
        <Flex alignItems="center" gap="2" justifyContent="space-between" mt="4">
          <Box spaceX="3">
            <Tag>
              <HStack gap="1">
                <TagIcon />
                <panda.span>{format(post.date)}</panda.span>
              </HStack>
            </Tag>
          </Box>
          <Link href={post.url}>
            <HStack
              gap="2"
              _hover={{
                fontWeight: 'bold',
                transition: 'all',
                transitionDuration: '200ms',
                transitionTimingFunction: 'ease-in-out',
              }}
            >
              <panda.small>Read more</panda.small>
              <ChevronRightIcon />
            </HStack>
          </Link>
        </Flex>
      </Box>
    </Stack>
  )
}
