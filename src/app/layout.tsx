import './globals.css'

import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import type { Props } from 'types/component'
import Footer from '@/components/footer'
import Menu from '@/components/menu'

export const metadata: Metadata = {
  title: 'Sebastian Garcia',
  description: 'Portafolio personal',
}

export default function RootLayout({ children, params }: Props) {
  console.log(params.locale)
  
  return (
    <html lang={params.locale} suppressHydrationWarning={true}>
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
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
