import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  params: { locale: string }
}


export default function LocaleLayout({ children }: Props) {
  return children
}
