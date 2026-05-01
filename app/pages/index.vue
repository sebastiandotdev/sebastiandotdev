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
  <main
    class="max-w-2xl mx-auto flex flex-col px-6 pt-0 sm:pt-20 relative container mx-auto min-h-[85dvh]"
  >
    <span
      class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-24 text-xl"
    >
      <img
        src="/sebastiandotdev.jpeg"
        :alt="$t('hero.title')"
        class="h-full w-full rounded-[inherit] object-cover"
      />
    </span>

    <div class="mt-5 flex flex-col gap-2">
      <!-- Introduction -->
      <h1 class="text-2xl font-medium text-default">
        {{ $t('hero.title') }}
      </h1>

      <!-- Description -->
      <div class="mb-8 text-muted leading-relaxed font-sans">
        <p>{{ $t('hero.subtitle') }}</p>
        <p>{{ $t('hero.subtitle2') }}</p>
      </div>
    </div>

    <!-- Current Work -->
    <p class="text-muted mb-12">
      {{ $t('hero.current_work') }}
      <a
        :href="CURRENT_WORK.LINK"
        target="_blank"
        class="text-default font-medium"
        >{{ CURRENT_WORK.NAME }}</a
      >
    </p>

    <!-- Skills Section -->
    <div class="mb-10">
      <h2 class="text-default font-medium mb-4">{{ $t('stack.title') }}</h2>
      <div class="flex flex-wrap gap-2 text-muted text-sm">
        <template v-for="(skill, index) in skills" :key="skill">
          <span>{{
            skill === 'Software Engineer'
              ? $t('common.software_engineer')
              : skill
          }}</span>
          <span v-if="index < skills.length - 1">•</span>
        </template>
      </div>
    </div>

    <!-- CTA Button -->
    <NuxtLink :to="SOCIAL_LINKS.GMAIL" target="_blank" class="btn btn-default">
      {{ $t('hero.cta') }}
    </NuxtLink>
  </main>
</template>
