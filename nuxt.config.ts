import { currentLocales } from './i18n/i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
  ],

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    dataValue: 'theme',
    storageKey: 'seb-color-mode',
  },

  fonts: {
    providers: {
      fontshare: false,
    },
    families: [
      {
        name: 'Geist',
        weights: ['400', '500', '600'],
        preload: true,
        global: true,
      },
      {
        name: 'Geist Mono',
        weights: ['400', '500', '600'],
        preload: true,
        global: true,
      },
    ],
  },
  vite: {
    optimizeDeps: {
      include: ['@vueuse/core'],
    },
  },
  i18n: {
    locales: currentLocales,
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    langDir: 'locales',
  },
})
