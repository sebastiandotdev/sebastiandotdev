<script lang="ts" setup>
const colorMode = useColorMode()
const darkMode = usePreferredDark()

const colorScheme = computed(() => {
  return {
    system: darkMode ? 'dark light' : 'light dark',
    light: 'only light',
    dark: 'only dark',
  }[colorMode.preference]
})

useHead({
  htmlAttrs: {
    lang: () => 'en',
    dir: () => 'ltr',
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? titleChunk : 'sebastiandotdev - Software Engineer'
  },
  meta: [{ name: 'color-scheme', content: colorScheme }],
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-fg">
    <h2 class="font-sans text-4xl">cron</h2>
    <div class="i-solar:add-circle-bold" />
  </div>
</template>
