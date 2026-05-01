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
    class="text-foreground hover:opacity-70 transition-opacity flex items-center justify-center p-2"
  >
    <div
      v-if="isDark"
      class="i-solar:sun-bold text-[32px] md:text-[48px]"
    />
    <div
      v-else
      class="i-solar:moon-bold text-[32px] md:text-[48px]"
    />
  </button>
</template>
