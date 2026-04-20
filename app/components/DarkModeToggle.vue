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
    class="px-3 py-2 rounded-md border-2 border-foreground hover:bg-foreground/5 transition flex items-center gap-2"
  >
    <div v-if="isDark" class="i-solar:sun-bold" />
    <div v-else class="i-solar:moon-bold" />
  </button>
</template>
