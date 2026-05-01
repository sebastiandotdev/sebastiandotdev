<script setup lang="ts">
const socialLinks = [
  {
    name: 'Gmail',
    url: SOCIAL_LINKS.GMAIL,
    icon: 'i-logos:google-gmail',
  },
  {
    name: 'Linkedin',
    url: SOCIAL_LINKS.LINKEDIN,
    icon: 'i-logos:linkedin-icon',
  },
  {
    name: 'Github',
    url: SOCIAL_LINKS.GITHUB,
    icon: 'i-logos:github-icon',
  },
]
</script>

<template>
  <footer class="mt-auto p-4 max-w-2xl mx-auto w-full">
    <div class="flex items-center justify-between gap-4">
      <!-- Logo Section -->
      <div class="flex items-center gap-3">
        <NuxtLink
          :to="SOCIAL_LINKS.GITHUB"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center group text-sm text-muted hover:text-default transition-colors"
        >
          {{ $t('footer.logo') }}
        </NuxtLink>
        <span>•</span>
        <a
          href="https://v0.app/templates/simple-dev-portfolio-ZWxaausPnN3?ref=8NK2LZ"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs text-muted hover:text-default transition-colors"
        >
          {{ $t('footer.credit') }}
        </a>
      </div>

      <!-- Right Section: Socials & Theme -->
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-4">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-muted hover:text-default transition-colors flex items-center"
            :aria-label="link.name"
          >
            <div :class="link.icon" class="size-4" />
          </a>
        </div>
        <div class="h-4 w-px bg-elevated" />
        <DarkModeToggle class="size-4" />
        <div class="h-4 w-px bg-elevated" />
        <LanguageSwitcher />
      </div>
    </div>
  </footer>
</template>
