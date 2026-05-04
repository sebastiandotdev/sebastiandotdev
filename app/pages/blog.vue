<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('blog.seo_title'),
})
</script>

<template>
  <main
    class="max-w-2xl mx-auto flex flex-col px-6 pt-6 sm:pt-12 relative container font-mono"
  >
    <!-- Header -->
    <div class="mb-8 flex flex-col gap-1.5">
      <p class="text-xs text-black/40 dark:text-white/30 select-none">~/blog</p>
      <h1 class="text-2xl font-bold text-black dark:text-white leading-tight">
        {{ $t('blog.title') }}
      </h1>
      <p
        class="text-sm text-black/60 dark:text-[#f0f7ff9e] leading-relaxed mt-1"
      >
        {{ $t('blog.subtitle') }}
      </p>
    </div>

    <!-- Coming Soon State -->
    <div
      class="flex flex-col items-center justify-center gap-5 border border-dashed border-[#e5e5e5] dark:border-[#262626] rounded-lg py-20 px-6 text-center"
    >
      <div
        class="i-solar:notebook-bookmark-linear size-10 text-black/30 dark:text-white/20"
      />
      <div class="flex flex-col gap-2">
        <p class="text-sm font-semibold text-black dark:text-white">
          {{ $t('blog.coming_soon_title') }}
        </p>
        <p
          class="text-sm text-black/50 dark:text-white/40 max-w-xs leading-relaxed"
        >
          {{ $t('blog.coming_soon_description') }}
        </p>
      </div>
    </div>
  </main>
</template>
