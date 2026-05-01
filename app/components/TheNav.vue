<script setup lang="ts">
const navItems = computed(() => [
  {
    name: 'Blog',
    label: $t('nav.blog'),
    to: { name: 'blog' },
  },
  {
    name: 'Projects',
    label: $t('nav.projects'),
    to: { name: 'projects' },
  },
  {
    name: 'Contact',
    label: $t('nav.contact'),
    to: { name: 'contact' },
  },
])

const cornerNodes = [
  'top-[-10px] left-[-10px]',
  'top-[-10px] right-[-10px]',
  'bottom-[-10px] left-[-10px]',
  'bottom-[-10px] right-[-10px]',
]
</script>

<template>
  <header class="sticky top-0 z-50 p-4 md:p-8 flex justify-center">
    <nav
      class="relative flex flex-col md:flex-row items-stretch bg-background border-[5px] border-foreground shadow-[6px_6px_0px_rgba(0,0,0,0.25)]"
    >
      <!-- Corner Nodes -->
      <div
        v-for="pos in cornerNodes"
        :key="pos"
        class="absolute w-3.5 h-3.5 border-[3px] border-foreground bg-background z-10"
        :class="pos"
      ></div>

      <!-- Logo Section -->
      <NuxtLink
        to="/"
        class="flex items-center gap-4 px-6 py-4 border-b-[5px] md:border-b-0 md:border-r-[5px] border-foreground hover:bg-foreground/5 transition-colors group"
      >
        <div class="i-solar:star-fall-bold text-[36px]"></div>
        <span class="text-[36px] font-normal leading-none font-sans"
          >sebastiandotdev</span
        >
      </NuxtLink>

      <!-- Nav Links -->
      <div class="flex flex-col md:flex-row items-stretch flex-1 md:flex-none">
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.to"
          class="relative flex items-center justify-center px-8 py-4 text-[24px] font-medium border-b-[5px] md:border-b-0 md:border-r-[5px] border-foreground hover:bg-foreground/5 transition-colors group last:border-b-0 md:last:border-r-0"
        >
          <!-- Active Highlight -->
          <div
            class="absolute inset-x-4 top-1/2 -translate-y-1/2 h-[10px] bg-sunlight -z-1 opacity-0 group-[.router-link-active]:opacity-100 transition-opacity"
          ></div>
          <span class="relative z-1 font-sans">{{ item.label }}</span>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
