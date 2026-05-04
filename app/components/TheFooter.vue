<script setup lang="ts">
const { t } = useI18n()

const columns = computed(() => [
  {
    heading: t('footer.col_pages'),
    links: [
      { label: t('nav.projects'), to: '/projects', external: false },
      { label: t('nav.readme'), to: '/readme', external: false },
      { label: t('nav.blog'), to: '/blog', external: false },
    ],
  },
  {
    heading: t('footer.col_connect'),
    links: [
      {
        label: t('footer.link_github'),
        to: SOCIAL_LINKS.GITHUB,
        external: true,
      },
      {
        label: t('footer.link_linkedin'),
        to: SOCIAL_LINKS.LINKEDIN,
        external: true,
      },
      { label: t('footer.link_gmail'), to: SOCIAL_LINKS.GMAIL, external: true },
    ],
  },
  {
    heading: t('footer.col_built_with'),
    links: [
      { label: 'Nuxt 3', to: 'https://nuxt.com', external: true },
      { label: 'UnoCSS', to: 'https://unocss.dev', external: true },
      {
        label: 'TypeScript',
        to: 'https://www.typescriptlang.org',
        external: true,
      },
    ],
  },
])

const socialLinks = [
  {
    name: 'GitHub',
    url: SOCIAL_LINKS.GITHUB,
    icon: 'i-solar:code-square-linear',
  },
  {
    name: 'LinkedIn',
    url: SOCIAL_LINKS.LINKEDIN,
    icon: 'i-solar:user-id-linear',
  },
  { name: 'Gmail', url: SOCIAL_LINKS.GMAIL, icon: 'i-solar:letter-linear' },
]
</script>

<template>
  <footer
    class="shrink-0 w-full font-mono border-t border-[#e5e5e5] dark:border-[#262626]"
  >
    <!-- Main content -->
    <div
      class="px-6 py-8 flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between"
    >
      <!-- Left: logo + social icons -->
      <div class="flex flex-col gap-4">
        <NuxtLink
          to="/"
          class="text-sm font-bold text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-colors tracking-tight"
        >
          {{ $t('footer.logo') }}
        </NuxtLink>
        <div class="flex items-center gap-3">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="link.name"
            class="text-black/40 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors"
          >
            <div :class="link.icon" class="size-4" />
          </a>
        </div>
      </div>

      <!-- Right: link columns -->
      <div class="flex flex-wrap gap-8 sm:gap-12">
        <div
          v-for="col in columns"
          :key="col.heading"
          class="flex flex-col gap-2.5"
        >
          <span
            class="text-3xs font-semibold tracking-widest uppercase text-black/40 dark:text-white/30 mb-1"
          >
            {{ col.heading }}
          </span>
          <template v-for="link in col.links" :key="link.label">
            <NuxtLink
              v-if="!link.external"
              :to="link.to"
              class="text-xs text-black/60 dark:text-[#f0f7ff9e] hover:text-black dark:hover:text-white transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
            <a
              v-else
              :href="link.to"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs text-black/60 dark:text-[#f0f7ff9e] hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              {{ link.label }}
              <div
                class="i-solar:arrow-right-up-linear size-2.5 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </template>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="px-6 py-3 border-t border-[#e5e5e5] dark:border-[#262626]">
      <p class="text-3xs text-black/30 dark:text-white/20">
        {{ $t('footer.copyright') }}
      </p>
    </div>
  </footer>
</template>
