import { Box, Flex, HStack, Stack, panda } from '@/styled-system/jsx'
import { Tag } from './recipes/tag'
import Link from 'next/link'
import ChevronRight from '../icons/chevron-right'

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
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide-icon lucide lucide-tag"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle
                      cx="7.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </svg>
                  <panda.span>{content}</panda.span>
                </HStack>
              </Tag>
            ))}
          </Box>
          <Link href="/">
            <HStack gap="2">
              <panda.small>Read more</panda.small>
              <ChevronRight />
            </HStack>
          </Link>
        </Flex>
      </Box>
    </Stack>
  )
}
