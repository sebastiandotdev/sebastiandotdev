import '../styles/globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import OverlayMenu from '@/src/components/overlay-menu'
import { Providers } from '@/src/components/layouts'
import { Container } from '@/styled-system/jsx'

const onest = localFont({
  src: [
    {
      path: './fonts/Onest-Normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Onest-Medium.woff2',
      weight: '600',
      style: 'medium',
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
          <Container marginTop="44">{children}</Container>
        </Providers>
      </body>
    </html>
  )
}
