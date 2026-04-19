// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/fonts',
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
    ],
  },
})
