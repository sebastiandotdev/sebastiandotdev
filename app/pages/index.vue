<script setup lang="ts">
import { CURRENT_WORK, SOCIAL_LINKS } from '~/utils/constants'

const skills: string[] = [
  'TypeScript',
  'C++',
  'Git',
  'SQL',
  'Docker',
  'Gemini',
  'Software Engineer',
]
</script>

<template>
  <div class="font-mono h-dvh overflow-hidden flex flex-col justify-between">
    <main class="max-w-2xl mx-auto px-6 pt-0 sm:pt-25 relative container flex flex-col">
      <!-- Avatar -->
      <span
        class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle size-20 ring-1 ring-[#e5e5e5] dark:ring-[#262626]"
      >
        <img
          src="/sebastiandotdev.jpeg"
          :alt="$t('hero.title')"
          class="h-full w-full rounded-[inherit] object-cover"
        >
      </span>

      <!-- Introduction -->
      <div class="mt-6 flex flex-col gap-1.5">
        <p class="text-xs text-black/40 dark:text-white/30 select-none">
          ~/
        </p>
        <h1 class="text-2xl font-bold text-black dark:text-white leading-tight">
          {{ $t('hero.title') }}
        </h1>
        <div class="text-sm text-black/60 dark:text-[#f0f7ff9e] leading-relaxed space-y-0.5 mt-1">
          <p>{{ $t('hero.subtitle') }}</p>
          <p>{{ $t('hero.subtitle2') }}</p>
        </div>
      </div>

      <!-- Current Work -->
      <div class="mt-6 mb-10 flex items-center gap-2 text-sm">
        <span class="text-black/40 dark:text-white/30">{{ $t('hero.current_work') }}</span>
        <span class="text-black/20 dark:text-white/15 select-none">→</span>
        <a
          :href="CURRENT_WORK.LINK"
          target="_blank"
          rel="noopener noreferrer"
          class="text-black dark:text-white font-medium hover:underline underline-offset-4 inline-flex items-center gap-1 group"
        >
          {{ CURRENT_WORK.NAME }}
          <div class="i-solar:arrow-right-up-linear size-3 text-black/40 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors" />
        </a>
      </div>

      <!-- Skills Section -->
      <div class="mb-10">
        <h2 class="text-xs font-semibold tracking-widest uppercase text-black/40 dark:text-white/30 mb-3">
          {{ $t('stack.title') }}
        </h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in skills"
            :key="skill"
            class="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-[#e5e5e5] dark:border-[#262626] text-black/70 dark:text-white/70 bg-black/3 dark:bg-white/5"
          >
            {{ skill === 'Software Engineer' ? $t('common.software_engineer') : skill }}
          </span>
        </div>
      </div>

      <!-- CTA Button -->
      <a
        :href="SOCIAL_LINKS.GMAIL"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-default"
      >
        <div class="i-solar:letter-linear size-4" />
        {{ $t('hero.cta') }}
      </a>
    </main>
    <div class="justify-end">
      <TheFooter />
    </div>
  </div>
</template>
