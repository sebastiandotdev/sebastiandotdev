'use client'

import { Box, Flex, HStack, panda, Stack } from '@/styled-system/jsx'
import curriculumJSON from '@/src/static/curriculum.json' with { type: 'json' }
import { Input } from '@/src/components/ui/input'
import { Textarea } from '@/src/components/ui/textarea'
import { Toaster, toast } from 'sonner'
import { Label } from '../recipes/label'
import { Button } from '../recipes/button'
import type { FormEvent } from 'react'

export default function Contact() {
  const services = curriculumJSON.services as unknown as string[]

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    formData.append('_next', 'https://castrogarciajs.dev')
    formData.append('_captcha', 'false')

    try {
      await fetch('https://formsubmit.co/247ddc0c8da214807457902aadbc87b1', {
        method: 'POST',
        body: formData,
      })

      toast.success('Correo enviado correctamente')
      ;(event.target as HTMLFormElement).reset()
    } catch (error) {
      return error
    }
  }
  return (
    <Box id="contact" marginTop="20">
      <Toaster />
      <Flex flexDirection="column" md={{ flexDirection: 'row' }}>
        <Stack flex="1">
          <HStack>
            <panda.h2
              fontSize="2xl"
              fontWeight="bold"
              textWrap="balance"
              margin="0"
            >
              Contact me
            </panda.h2>
          </HStack>
          <Box textWrap="balance">
            <panda.p>
              Please feel free to contact me using this form or directly by
              email.
            </panda.p>
            <Box mt="5">
              <panda.h2 fontSize="lg" fontWeight="semibold" mb="3">
                Services
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
          <form onSubmit={handleSubmit}>
            <Box>
              <Label>Full name</Label>
              <Input type="text" placeholder="Jhon Doe" name="username" />
            </Box>
            <Box>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="jhondoe@gmail.com"
                name="email"
              />
            </Box>
            <Box>
              <Label>Subject</Label>
              <Textarea placeholder="Escribe tu mensaje aqui" name="message" />
            </Box>
            <Button
              type="submit"
              ml="auto"
              rounded="md"
              fontWeight="semibold"
              mt="4"
            >
              Send message
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}
