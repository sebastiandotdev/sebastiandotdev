import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from '@/i18n.config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (
    pathname.includes('.') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('/static/')
  ) {
    return NextResponse.next()
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale

    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
