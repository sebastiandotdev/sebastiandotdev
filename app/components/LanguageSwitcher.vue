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
    class="text-muted hover:text-default transition-colors flex items-center justify-center cursor-pointer p-0"
    :aria-label="
      locale === 'en'
        ? $t('common.switch_to_spanish')
        : $t('common.switch_to_english')
    "
  >
    <div v-if="locale === 'en'" class="i-circle-flags:us size-4" />
    <div v-else class="i-circle-flags:co size-4" />
  </button>
</template>
