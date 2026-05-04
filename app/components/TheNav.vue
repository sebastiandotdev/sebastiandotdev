<script setup lang="ts">
const navLinks = [
  {
    label: 'nav.projects',
    url: '/projects',
    external: false,
  },
  {
    label: 'nav.readme',
    url: '/readme',
    external: false,
  },
  {
    label: 'nav.blog',
    url: '/blog',
    external: false,
  },
  {
    label: 'nav.github',
    url: SOCIAL_LINKS.GITHUB,
    external: true,
  },
]
</script>

<template>
  <header
    class="h-10 border-y sm:border-t-0 flex items-stretch sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-[#e5e5e5] dark:border-[#262626] font-mono"
  >
    <!-- Logo -->
    <NuxtLink
      to="/"
      id="logo"
      class="relative px-6 border-r border-[#e5e5e5] dark:border-[#262626] flex items-center text-[17px] tracking-[-0.15px] font-bold text-black dark:text-white shrink-0"
    >
      sebastiandotdev
    </NuxtLink>

    <!-- Navigation -->
    <nav
      class="flex divide-x divide-[#e5e5e5] dark:divide-[#262626] w-full overflow-x-auto overflow-y-hidden no-scrollbar"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.label"
        :to="link.url"
        :target="link.external ? '_blank' : undefined"
        class="text-black/60 dark:text-[#f0f7ff9e] h-full focus:bg-black/10 hover:bg-black/5 active:bg-black/10 dark:focus:bg-[#262626] dark:hover:bg-[#1a1a1a] dark:active:bg-[#262626] focus:outline-none px-4 flex items-center text-nowrap relative group transition-colors text-sm"
        active-class="bg-black/5 !text-black dark:bg-[#1a1a1a] dark:!text-white"
      >
        <div
          class="absolute inset-0 bg-black/5 dark:bg-white/5 -z-50 hidden group-hover:block"
        />
        {{ $t(link.label) }}
      </NuxtLink>

      <!-- Theme & Language Components -->
      <DarkModeToggle />
      <LanguageSwitcher />
    </nav>
  </header>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
