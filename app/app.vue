<script lang="ts" setup>
const colorMode = useColorMode()
const darkMode = usePreferredDark()

const { locale } = useI18n()
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
    return titleChunk ? titleChunk : 'sebastiandotdev - Software Engineer'
  },
  meta: [{ name: 'color-scheme', content: colorScheme }],
})
</script>

<template>
  <div class="relative bg-default">
    <TheNav />

    <!-- Dot pattern background -->
    <div
      class="fixed inset-0 opacity-10 pointer-events-none"
      :style="{
        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }"
    />

    <NuxtPage />
  </div>
  <TheFooter />
</template>
