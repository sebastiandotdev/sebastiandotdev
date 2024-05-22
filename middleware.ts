import createMiddleware from 'next-intl/middleware'
import { pathnames, locales, localePrefix } from './i18n/config'

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames,
  localePrefix,
})

export const config = {
  matcher: [
    '/',
    '/(es|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
}
