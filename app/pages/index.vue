<script setup lang="ts">
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
        alt="Mustafa's profile"
        class="h-full w-full rounded-[inherit] object-cover"
      />
    </span>

    <div class="mt-5 flex flex-col gap-2">
      <!-- Introduction -->
      <h1 class="text-2xl font-medium text-default">
        Hi, I&apos;m Joan Sebastian.
      </h1>

      <!-- Description -->
      <div class="mb-2 text-muted leading-relaxed font-sans">
        <p>Frontend Software Engineer who develops user-centered products.</p>
        <p>Passionate to create them with engineering and design principles.</p>
      </div>
    </div>

    <!-- Current Work -->
    <p class="text-muted mb-12">
      Currently working on
      <span class="text-default font-medium">ECO EFICI</span>
    </p>

    <!-- Skills Section -->
    <div class="mb-10">
      <h2 class="text-default font-medium mb-4">Top Skills</h2>
      <div class="flex flex-wrap gap-2 text-muted text-sm">
        <template v-for="(skill, index) in skills" :key="skill">
          <span>{{ skill }}</span>
          <span v-if="index < skills.length - 1">•</span>
        </template>
      </div>
    </div>

    <!-- CTA Button -->
    <NuxtLink
      to="mailto:sebastiandotdev@gmail.com"
      target="_blank"
      class="btn btn-default"
    >
      Say Hello
    </NuxtLink>
  </main>
</template>
