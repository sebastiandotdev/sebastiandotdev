<script setup lang="ts">
const navItems = computed(() => [
  {
    name: 'Projects',
    label: $t('nav.projects'),
    to: { name: 'projects' },
    external: false,
    type: 'link',
  },
  {
    name: 'Contact',
    label: $t('nav.contact'),
    to: { name: 'contact' },
    external: false,
    type: 'link',
  },

  {
    name: 'Blog',
    label: $t('nav.blog'),
    to: { name: 'blog' },
    external: false,
    type: 'link',
  },
])

const cornerNodes = [
  '-top-[7px] -left-[7px]',
  '-top-[7px] -right-[7px]',
  '-bottom-[7px] -left-[7px]',
  '-bottom-[7px] -right-[7px]',
]
</script>

<template>
  <header class="sticky top-0 z-50 p-4 md:p-8">
    <nav
      class="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6 text-foreground"
    >
      <div
        class="relative flex flex-col md:flex-row bg-background border-2 border-foreground"
      >
        <div
          v-for="pos in cornerNodes"
          :key="pos"
          :class="[
            'absolute w-[8px] h-[8px] border-2 border-foreground bg-background z-10',
            pos,
          ]"
        ></div>

        <div
          class="flex items-center justify-start gap-3 p-2 font-mono font-bold w-full md:w-[250px] border-b-2 md:border-b-0 md:border-r-2 border-foreground"
        >
          <NuxtLink
            to="/"
            :aria-label="$t('nav.home')"
            class="font-mono text-lg font-medium text-fg hover:text-fg transition-colors duration-200 focus-ring me-4"
          >
            <span class="text-base leading-none">sebastiandotdev</span>
          </NuxtLink>
        </div>

        <div
          class="flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-foreground"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.name"
            :to="item.to"
            class="flex items-center justify-center w-full md:w-24 lg:w-28 py-2 hover:bg-foreground hover:text-background transition-colors font-mono text-sm leading-none"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>

      <div
        class="relative border-2 border-foreground px-4 py-2 flex items-center justify-center bg-background hover:bg-foreground hover:text-background transition-colors cursor-pointer"
      >
        <div
          v-for="pos in cornerNodes"
          :key="pos"
          :class="[
            'absolute w-[8px] h-[8px] border-2 border-foreground bg-background z-10',
            pos,
          ]"
        ></div>

        <DarkModeToggle />
      </div>
    </nav>
  </header>
</template>
