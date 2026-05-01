<script setup lang="ts">
const { t } = useI18n()

const socialLinks = [
  {
    name: 'Gmail',
    url: 'mailto:sebastiandotdev@gmail.com',
    icon: 'i-solar:letter-bold',
  },
]
</script>

<template>
  <footer class="mt-auto p-4 md:p-8">
    <!-- Top Border Line -->
    <div class="h-[5px] bg-foreground mb-12 md:mb-16"></div>

    <div
      class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4"
    >
      <!-- Logo Section -->
      <NuxtLink to="/" class="flex items-center gap-4 group">
        <div
          class="i-solar:star-fall-bold text-[36px] md:text-[48px] text-foreground"
        ></div>
        <span class="text-[24px] md:text-[36px] font-normal font-sans"
          >sebastiandotdev</span
        >
      </NuxtLink>

      <!-- Center Text -->
      <p
        class="text-[24px] md:text-[32px] font-medium font-sans text-center md:absolute md:left-1/2 md:-translate-x-1/2"
      >
        {{ t('footer.portfolio_2024') }}
      </p>

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
          <div :class="link.icon" class="text-[32px] md:text-[48px]"></div>
        </a>

        <DarkModeToggle />
      </div>
    </div>
  </footer>
</template>
