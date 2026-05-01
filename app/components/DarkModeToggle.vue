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
    class="text-muted hover:text-default transition-colors flex items-center justify-center p-0"
  >
    <div v-if="isDark" class="i-solar:sun-bold size-full" />
    <div v-else class="i-solar:moon-bold size-full" />
  </button>
</template>
