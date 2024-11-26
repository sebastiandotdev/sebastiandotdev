import { Box, Flex, HStack, panda, Stack } from '@/styled-system/jsx'
import { Badge } from '@/src/components/recipes/badge'
import curriculumJSON from '@/src/static/curriculum.json' with { type: 'json' }
import { Input } from '@/src/components/ui/input'
import { Textarea } from '@/src/components/ui/textarea'
import { Label } from '../recipes/label'
import { Button } from '../recipes/button'
import Form from 'next/form'

export default function Contact() {
  const services = curriculumJSON.services as unknown as string[]
  return (
    <Box id="contact" marginTop="20">
      <Flex flexDirection="column" md={{ flexDirection: 'row' }}>
        <Stack flex="1">
          <HStack>
            <panda.h2
              fontSize="2xl"
              fontWeight="bold"
              textWrap="balance"
              margin="0"
            >
              Contáctame
            </panda.h2>
            <Badge bordered="warn" py="1">
              Beta
            </Badge>
          </HStack>
          <Box textWrap="balance">
            <panda.p>
              No dudes en ponerte en contacto conmigo a través de este
              formulario o directamente a mi correo electrónico.
            </panda.p>
            <Box mt="5">
              <panda.h2 fontSize="lg" fontWeight="semibold" mb="3">
                Servicios
              </panda.h2>
              <panda.ul
                listStyle="outside"
                pl="3"
                spaceY="1.5"
                color="neutral.500"
              >
                {services.map((item, i) => (
                  <panda.li key={i} fontSize="sm">
                    {item}
                  </panda.li>
                ))}
              </panda.ul>
            </Box>
          </Box>
        </Stack>
        <Box flex="1">
          <Form formMethod="post" action="/">
            <Box>
              <Label>Nombre</Label>
              <Input type="text" placeholder="Jhon Doe" name="username" />
            </Box>
            <Box>
              <Label>Correo Electronico</Label>
              <Input
                type="email"
                placeholder="jhondoe@gmail.com"
                name="email"
              />
            </Box>
            <Box>
              <Label>Asunto</Label>
              <Textarea placeholder="Escribe tu mensaje aqui" name="message" />
            </Box>
            <Button
              type="submit"
              ml="auto"
              rounded="md"
              fontWeight="semibold"
              mt="4"
            >
              Enviar mensaje
            </Button>
          </Form>
        </Box>
      </Flex>
    </Box>
  )
}
