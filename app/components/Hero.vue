<script lang="ts" setup>
import Card from './Card.vue'
const { t } = useI18n()
</script>

<template>
  <section
    class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 py-16 px-6 md:px-12 lg:px-24 h-[80dvh]"
  >
    <div class="flex flex-col gap-8 items-start max-w-2xl">
      <h1
        class="text-5xl font-bold leading-[1.1] m-0 font-sans text-black dark:text-white"
      >
        {{ t('hero.title') }}
      </h1>

      <p>{{ t('hero.subtitle') }}</p>

      <button class="btn btn-default btn-lg dark:text-white">
        {{ t('hero.cta') }}
      </button>
    </div>
    <Card imageSrc="/sebastiandotdev.jpeg" />
  </section>
</template>
