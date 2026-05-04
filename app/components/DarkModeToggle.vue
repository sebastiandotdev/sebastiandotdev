<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => {
  return (colorMode.preference ?? colorMode.value) === 'dark'
})

const toggle = () => {
  const current = colorMode.preference ?? colorMode.value
  colorMode.preference = current === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    @click="toggle"
    aria-label="Toggle color mode"
    class="text-black/60 dark:text-[#f0f7ff9e] h-full focus:bg-black/10 hover:bg-black/5 active:bg-black/10 dark:focus:bg-[#262626] dark:hover:bg-[#1a1a1a] dark:active:bg-[#262626] focus:outline-none px-4 flex items-center text-nowrap relative group transition-colors text-sm font-mono"
  >
    <div class="absolute inset-0 bg-black/5 dark:bg-white/5 -z-50 hidden group-hover:block" />
    {{
      isDark
        ? $t('nav.theme_light').toLowerCase()
        : $t('nav.theme_dark').toLowerCase()
    }}
  </button>
</template>
