import { Locale } from '@/i18n.config'

const dictionaries = {
  en: () =>
    import('@/src/static/curriculum.en.json').then((module) => module.default),
  es: () =>
    import('@/src/static/curriculum.es.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
