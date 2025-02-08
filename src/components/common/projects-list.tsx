import { Box, Flex, HStack, Stack, panda } from '@/styled-system/jsx'
import { Tag } from '@/src/components/recipes/tag'
import { GithubIcon, LinkSquareIcon, TagIcon } from '@/src/icons'
import { Projects } from '@/src/static/cv'
import Link from 'next/link'
import { css } from '@/styled-system/css'

export default function ProjectsList(props: { project: Projects }) {
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
        <Stack gap="3" direction="row" justify="space-between">
          <Link
            href={props.project.url}
            target="_blank"
            className={css({
              fontSize: 'lg',
              fontWeight: 'bold',
              _hover: { textDecoration: 'underline', cursor: 'pointer' },
            })}
          >
            {props.project.name}
          </Link>
          <Flex alignItems="center" gap="3">
            <Link href={props.project.github || '/'} target="_blank">
              <GithubIcon />
            </Link>
            <Link href={props.project.url} target="_blank">
              <LinkSquareIcon />
            </Link>
          </Flex>
        </Stack>
        <panda.small
          display="flex"
          alignItems="center"
          gap="1"
          color="neutral.500"
          textWrap="pretty"
        >
          {props.project.description}
        </panda.small>
        <Flex alignItems="center" gap="2" justifyContent="space-between" mt="4">
          <Box spaceX="3">
            {props.project.techs.map((content, index) => (
              <Tag key={index}>
                <HStack gap="1">
                  <TagIcon />
                  <panda.span>{content}</panda.span>
                </HStack>
              </Tag>
            ))}
          </Box>
        </Flex>
      </Box>
    </Stack>
  )
}
