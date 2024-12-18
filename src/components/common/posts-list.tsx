import { Box, Flex, HStack, Stack, panda } from '@/styled-system/jsx'
import { Tag } from '@/src/components/recipes/tag'
import Link from 'next/link'
import { ChevronRightIcon, TagIcon } from '@/src/icons'

export default function BlogPosts() {
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
        <panda.h3
          fontSize="lg"
          fontWeight="bold"
          _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
        >
          How to create a cli with clack
        </panda.h3>
        <panda.small
          display="flex"
          alignItems="center"
          gap="1"
          color="neutral.500"
          textWrap="pretty"
        >
          Learn how to create a beautiful CLI to generate projects.
        </panda.small>
        <Flex alignItems="center" gap="2" justifyContent="space-between" mt="4">
          <Box spaceX="3">
            {['Tutorial', 'May 31, 2024'].map((content, index) => (
              <Tag key={index}>
                <HStack gap="1">
                  <TagIcon />
                  <panda.span>{content}</panda.span>
                </HStack>
              </Tag>
            ))}
          </Box>
          <Link href="/">
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
