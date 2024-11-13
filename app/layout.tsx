import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import OverlayMenu from '@/components/OverlayMenu'
import { Providers } from '@/components/Providers'
import { Container } from '@/styled-system/jsx'
import { css } from '@/styled-system/css'

const onest = localFont({
  src: [
    {
      path: './fonts/Onest-Normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Onest-Bold.woff2',
      weight: '800',
      style: 'bold',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Sebastian Garcia',
  description: 'Website oficial of Sebastian Garcia',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={onest.className}>
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <OverlayMenu />
          <Container
            marginTop="24"            
            borderRadius="30px"
            border="1px solid rgba(255, 255, 255, 0.1)"
            height="100vh"
            className={css({
              _dark: {
                backgroundColor: 'neutral.950',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }, 
            })}
          >
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  )
}
