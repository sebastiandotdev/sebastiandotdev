<script lang="ts" setup>
const colorMode = useColorMode()
const darkMode = usePreferredDark()

const { locale, t } = useI18n()
const colorScheme = computed(() => {
  return {
    system: darkMode ? 'dark light' : 'light dark',
    light: 'only light',
    dark: 'only dark',
  }[colorMode.preference]
})

useHead({
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => 'ltr',
  },
  titleTemplate: (titleChunk) => {
    return titleChunk || t('seo.home.title')
  },
  meta: [{ name: 'color-scheme', content: colorScheme }],
})
</script>

<template>
  <div>
    <TheNav />

    <!-- Dot pattern background -->
    <div
      class="fixed inset-0 opacity-10 pointer-events-none"
      :style="{
        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }"
    />

    <div class="flex-1 overflow-y-auto">
      <NuxtPage />
    </div>
  </div>
</template>
