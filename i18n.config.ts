export const i18n = {
  defaultLocale: 'en',
  locales: ['es', 'en'],
} as const

export type Locale = (typeof i18n)['locales'][number]
