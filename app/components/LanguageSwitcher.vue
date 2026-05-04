<script setup lang="ts">
const { locale, setLocale } = useI18n()

const toggleLocale = () => {
  const nextLocale = locale.value === 'en' ? 'es' : 'en'
  setLocale(nextLocale)
}
</script>

<template>
  <button
    @click="toggleLocale"
    class="text-black/60 dark:text-[#f0f7ff9e] h-full focus:bg-black/10 hover:bg-black/5 active:bg-black/10 dark:focus:bg-[#262626] dark:hover:bg-[#1a1a1a] dark:active:bg-[#262626] focus:outline-none px-4 flex items-center text-nowrap relative group transition-colors text-sm font-mono last:!border-r last:border-[#e5e5e5] dark:last:border-[#262626]"
    :aria-label="
      locale === 'en'
        ? $t('common.switch_to_spanish')
        : $t('common.switch_to_english')
    "
  >
    <div class="absolute inset-0 bg-black/5 dark:bg-white/5 -z-50 hidden group-hover:block" />
    {{
      locale === 'en'
        ? $t('nav.lang_spanish').toLowerCase()
        : $t('nav.lang_english').toLowerCase()
    }}
  </button>
</template>
