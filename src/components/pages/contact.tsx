import { Box, Flex, HStack, panda, Stack } from '@/styled-system/jsx'
import { Badge } from '@/src/components/recipes/badge'
import curriculumJSON from '@/src/static/curriculum.json' with { type: 'json' }
import { Input } from '@/src/components/ui/input'
import { Textarea } from '@/src/components/ui/textarea'
import { Label } from '../recipes/label'
import { Button } from '../recipes/button'

export default function () {
  const services = curriculumJSON.services as unknown as string[]
  return (
    <Box marginTop="20">
      <Flex flexDirection="column-reverse" md={{ flexDirection: 'row' }}>
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
          <panda.form spaceY="4">
            <Box>
              <Label>Nombre</Label>
              <Input placeholder="Jhon Doe" />
            </Box>
            <Box>
              <Label>Correo Electronico</Label>
              <Input placeholder="jhondoe@gmail.com" />
            </Box>
            <Box>
              <Label>Asunto</Label>
              <Textarea placeholder="Escribe tu mensaje aqui" />
            </Box>
            <Button ml="auto" rounded="md" fontWeight="semibold">
              Enviar mensaje
            </Button>
          </panda.form>
        </Box>
      </Flex>
    </Box>
  )
}
