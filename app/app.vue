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
  <div
    class="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden"
  >
    <!-- Navigation -->
    <TheNav />

    <!-- Main Content -->
    <div id="main-content" class="flex-1 flex flex-col" tabindex="-1">
      <NuxtPage />
    </div>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
