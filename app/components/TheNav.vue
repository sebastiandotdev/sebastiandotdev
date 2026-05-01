<script setup lang="ts">
const navLinks = [
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/sebastiandotdev',
    icon: 'i-logos:linkedin-icon',
  },
  {
    label: 'Github',
    url: 'https://github.com/sebastiandotdev',
    icon: 'i-logos:github-icon',
  },
  {
    label: 'Gmail',
    url: 'mailto:sebastiandotdev@gmail.com',
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
        class="text-muted hover:text-default transition-colors duration-300"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </nav>
</template>
