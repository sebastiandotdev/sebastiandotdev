<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <section
    class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 py-16 px-6 md:px-12 lg:px-24 max-w-8xl mx-auto w-full min-h-[80vh]"
  >
    <div class="flex flex-col gap-8 items-start max-w-2xl">
      <h1
        class="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] m-0 font-sans text-black dark:text-white"
      >
        {{ t('hero.title_part1') }} <br />
        {{ t('hero.title_part2') }}
        <span class="relative inline-block px-2">
          <span
            class="absolute inset-x-0 bottom-[10%] h-[45%] bg-sunlight -z-1 opacity-90"
          />
          <span class="relative text-black">{{ t('hero.highlight') }}</span>
        </span>
      </h1>

      <div class="relative mt-12">
        <button
          class="relative z-10 bg-glacier border-8 border-black dark:border-white px-12 py-6 rounded-[92px] text-2xl md:text-3xl font-bold font-sans transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] active:translate-x-0 active:translate-y-0 active:shadow-none text-black"
        >
          {{ t('hero.cta') }}
        </button>
        <!-- Rays decoration -->
        <img
          src="/img/hero-rays.png"
          alt=""
          class="absolute -right-16 -bottom-6 w-24 h-auto select-none pointer-events-none dark:invert"
        />
      </div>
    </div>

    <div class="relative w-full max-w-[512px] aspect-square">
      <img
        src="/img/hero-illustration.png"
        alt="Hero Illustration"
        class="w-full h-full object-contain select-none dark:invert-0"
      />
    </div>
  </section>
</template>

<style scoped>
.-z-1 {
  z-index: -1;
}
</style>
