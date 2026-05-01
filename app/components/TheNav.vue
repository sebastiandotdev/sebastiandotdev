<script setup lang="ts">
const navLinks = [
  {
    label: 'nav.linkedin',
    url: SOCIAL_LINKS.LINKEDIN,
    icon: 'i-logos:linkedin-icon',
  },
  {
    label: 'nav.github',
    url: SOCIAL_LINKS.GITHUB,
    icon: 'i-logos:github-icon',
  },
  {
    label: 'nav.gmail',
    url: SOCIAL_LINKS.GMAIL,
    icon: 'i-logos:google-gmail',
  },
]
</script>

<template>
  <nav class="flex justify-end py-4">
    <div class="flex gap-6 pr-0 sm:pr-20">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.label"
        :to="link.url"
        target="_blank"
        class="text-muted hover:text-default transition-colors duration-300 text-sm"
      >
        {{ $t(link.label) }}
      </NuxtLink>
    </div>
  </nav>
</template>
