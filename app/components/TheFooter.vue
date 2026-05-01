<script setup lang="ts">
const { t } = useI18n()

const socialLinks = [
  {
    name: 'Gmail',
    url: 'mailto:sebastiandotdev@gmail.com',
    icon: 'i-logos:google-gmail',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com/in/sebastiandotdev',
    icon: 'i-logos:linkedin-icon',
  },
  {
    name: 'Github',
    url: 'https://github.com/sebastiandotdev',
    icon: 'i-logos:github-icon',
  },
]
</script>

<template>
  <footer class="mt-auto p-4">
    <div
      class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4"
    >
      <!-- Logo Section -->
      <NuxtLink
        to="https://github.com/sebastiandotdev"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-4 group"
      >
        @sebastiandotdev
      </NuxtLink>

      <!-- Right Section: Socials & Theme -->
      <div class="flex items-center gap-4 md:gap-8">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-foreground hover:opacity-70 transition-opacity"
          :aria-label="link.name"
        >
          <div :class="link.icon"></div>
        </a>
      </div>
    </div>
  </footer>
</template>
