import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import OverlayMenu from '@/components/OverlayMenu'
import { Providers } from '@/components/Providers'
import { Container } from '@/styled-system/jsx'

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
    <html lang="en">
      <body className={onest.className}>
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <OverlayMenu />
          <Container marginTop="24">{children}</Container>
        </Providers>
      </body>
    </html>
  )
}
