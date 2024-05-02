import './globals.css'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import Footer from '@components/footer'
import Menu from '@components/menu'
import {Analytics} from '@vercel/analytics/react'
import { ThemeProvider } from '@components/theme-provider'

type Props = {
  children: ReactNode
  params: { locale: string }
}


export const metadata: Metadata = {
  title: 'Sebastian Garcia',
  description: 'Portafolio personal',
}

export default function RootLayout({ children, params }: Props) {
  
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Menu />
          <main className='container mx-auto max-w-4xl px-4 relative'>
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
