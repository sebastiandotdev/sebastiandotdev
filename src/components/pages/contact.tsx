'use client'

import type { Dict } from '@/src/types'
import { Box, Flex, HStack, panda, Stack } from '@/styled-system/jsx'
import { Input } from '@/src/components/input'
import { Textarea } from '@/src/components/textarea'
import { Toaster, toast } from 'sonner'
import { Label } from '@/src/components/label'
import { Button } from '@/src/components/button'
import { useState, type FormEvent } from 'react'
import { LoaderIcon } from '@/src/icons'
import { css } from '@/styled-system/css'

export default function Contact({ dictionary }: Dict) {
  const services = dictionary.services as unknown as string[]
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.target as HTMLFormElement)
    const formJson = {
      name: formData.get('username'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    if (!formJson.name || !formJson.email || !formJson.message) {
      toast.error('Por favor completa todos los campos')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formJson),
      })

      if (response.ok) {
        toast.success('Correo enviado correctamente')
        ;(event.target as HTMLFormElement).reset()
      } else {
        const data = await response.json()
        toast.error(data.message || 'Error al enviar el correo')
      }
    } catch {
      toast.error('Error al enviar el correo')
    } finally {
      setIsLoading(false)
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
              {dictionary.titles.contact}
            </panda.h2>
          </HStack>
          <Box textWrap="balance">
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
              <Input
                type="text"
                placeholder="Jhon Doe"
                name="username"
                disabled={isLoading}
              />
            </Box>
            <Box>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="jhondoe@gmail.com"
                name="email"
                disabled={isLoading}
              />
            </Box>
            <Box>
              <Label>Subject</Label>
              <Textarea
                placeholder="Escribe tu mensaje aqui"
                name="message"
                disabled={isLoading}
              />
            </Box>
            <Button
              type="submit"
              ml="auto"
              rounded="md"
              fontWeight="semibold"
              mt="4"
              disabled={isLoading}
              opacity={isLoading ? 0.7 : 1}
              cursor={isLoading ? 'not-allowed' : 'pointer'}
              display="flex"
              gap="2"
              alignItems="center"
            >
              {isLoading && (
                <LoaderIcon className={css({ animation: 'spin' })} />
              )}
              {isLoading ? 'Sending...' : 'Send message'}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}
