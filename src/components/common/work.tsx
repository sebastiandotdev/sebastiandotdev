import type { Work as WorkType } from '@/src/static/cv'
import { Box, Flex, HStack, Stack, panda } from '@/styled-system/jsx'
import { Badge } from '@/src/components/badge'

export default function Work(props: { work: WorkType }) {
  return (
    <Stack
      gap="8"
      shadowColor={{ base: 'black', _dark: 'yellow.300' }}
      rounded="xl"
      px="6"
      py="5"
      border="solid"
      borderWidth="1px"
      borderColor="neutral.200"
      _dark={{ borderColor: 'neutral.950' }}
    >
      <Flex justifyContent="space-between" gap="4">
        <Box>
          <panda.h3 fontSize="lg" fontWeight="bold">
            {props.work.name}
          </panda.h3>
          <panda.small
            display="flex"
            alignItems="center"
            gap="1"
            fontWeight="bold"
          >
            {props.work.position}
          </panda.small>
        </Box>
        <Badge background="neutral" radius="md" paddingY="4px" h="max">
          <HStack>
            <panda.span>{props.work.startDate}</panda.span> -
            <panda.span>{props.work.endDate ?? 'Presente'}</panda.span>
          </HStack>
        </Badge>
      </Flex>
      <Box>
        <panda.ul
          listStyle="outside"
          pl="3"
          spaceY="1"
          textWrap="pretty"
          color="neutral.500"
        >
          {props.work.summary.map((item, i) => (
            <panda.li key={i} fontSize="sm">
              {item}
            </panda.li>
          ))}
        </panda.ul>
      </Box>
    </Stack>
  )
}
