<script setup lang="ts">
const navItems = [
  { label: 'about //', href: '#about' },
  { label: 'portfolio', href: '#portfolio', active: true },
  { label: 'hire me', href: '#contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50">
    <nav class="flex justify-center mb-8 p-10">
      <div class="border-2 border-foreground flex items-stretch">
        <div
          class="pl-6 pr-12 py-3 flex items-center gap-2 border-r-2 border-foreground"
        >
          <div class="i-solar:star-bold" />
          <span class="text-lg">sebastiandotdev</span>
        </div>
        <NuxtLink
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="px-6 py-3 border-r-2 border-foreground last:border-r-0 hover:bg-foreground hover:text-background transition-colors"
          :class="{
            'underline decoration-2 underline-offset-4': item.active,
          }"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
