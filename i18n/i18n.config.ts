import { currentLocales } from './i18n'

export default defineI18nConfig(() => {
  return {
    availableLocales: currentLocales.map((locale) => locale.code),
    fallbackLocale: 'en',
    fallbackWarn: true,
    missingWarn: true,
  }
})
