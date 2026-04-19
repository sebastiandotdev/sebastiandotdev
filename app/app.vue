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
  <div
    class="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden"
  >
    <SvgStarFish class="absolute -top-10 -right-10 rotate-15 z-0" />
    <SvgStarFish class="absolute -bottom-12 -left-12 -rotate-12 z-0" />

    <TheNav />

    <div class="border-t-4 border-foreground -mx-4 mb-12" />
    <div id="main-content" class="flex-1 flex flex-col" tabindex="-1">
      <NuxtPage />
    </div>
  </div>
</template>
