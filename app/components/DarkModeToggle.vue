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
    class="text-foreground hover:opacity-70 transition-opacity flex items-center justify-center"
  >
    <div v-if="isDark" class="i-solar:sun-bold" />
    <div v-else class="i-solar:moon-bold" />
  </button>
</template>
