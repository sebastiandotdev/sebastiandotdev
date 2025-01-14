import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import OverlayMenu from '@/src/components/layouts/overlay-menu'
import NexThemes from '@/src/components/layouts/next-themes'

import Footer from '@/src/components/layouts/footer'

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
    <html lang="es" suppressHydrationWarning>
      <body className={onest.className}>
        <NexThemes attribute="class" defaultTheme="system" enableSystem>
          <OverlayMenu />
          {children}
          <Footer />
        </NexThemes>
      </body>
    </html>
  )
}
