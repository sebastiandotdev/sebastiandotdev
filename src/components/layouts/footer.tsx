import Link from 'next/link'
import { Box, Container, Flex, panda, Stack } from '@/styled-system/jsx'
import { Paragraph } from '@/src/components/recipes/paragraph'
import { css } from '@/styled-system/css'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/src/components/ui/tooltip'
import { social } from '@/src/constants/social'
import { iconStyles } from './overlay-menu'

export default function Footer() {
  return (
    <Container mt="8">
      <panda.footer>
        <Stack py="8" mx="auto">
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            md={{ flexDirection: 'row', alignItems: 'flex-start' }}
          >
            <Box mb="4" md={{ mb: '0' }}>
              <panda.h2 fontSize="xl" fontWeight="semibold">
                Sebastián García
              </panda.h2>
              <panda.p fontSize="xs">Software Developer</panda.p>
            </Box>
            <Flex spaceX="4" alignItems="center">
              {social.map((menu) => (
                <TooltipProvider key={menu.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={menu.path} target="_blank">
                        <menu.Icon className={iconStyles} />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{menu.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </Flex>
          </Flex>
          <Box
            mt="8"
            borderTopWidth="1px"
            borderColor="neutral.200"
            _dark={{ borderColor: 'neutral.950' }}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              mt="4"
              gap="4"
              md={{ flexDirection: 'row', alignItems: 'flex-start' }}
            >
              <Paragraph>
                © {new Date().getFullYear()} Sebastián García. All rights
                reserved.
              </Paragraph>
              <Flex gap="6" alignItems="center">
                <Link
                  href={`mailto:sebastiandotdev@gmail.com`}
                  target="_blank"
                  className={css({ _hover: { textDecoration: 'underline' } })}
                >
                  Gmail
                </Link>
                <Link
                  href="https://github.com/sebastiandotdev/sebastiandotdev"
                  target="_blank"
                  className={css({ _hover: { textDecoration: 'underline' } })}
                >
                  Open source
                </Link>
              </Flex>
            </Flex>
          </Box>
        </Stack>
      </panda.footer>
    </Container>
  )
}
