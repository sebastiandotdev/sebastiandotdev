<script lang="ts" setup>
const { t } = useI18n()

const stack = [
  { name: 'Git', icon: 'i-solar-reorder-bold' },
  { name: 'TypeScript', icon: 'i-solar-code-bold' },
  { name: 'C++', icon: 'i-solar-programming-bold' },
  { name: 'Docker', icon: 'i-solar-box-bold' },
  { name: 'SQL', icon: 'i-solar-database-bold' },
]
</script>

<template>
  <section class="py-16 px-6 md:px-12 lg:px-24 flex flex-col gap-12 bg-white dark:bg-zinc-950 overflow-hidden">
    <div class="flex items-center gap-6">
      <h2 class="text-4xl md:text-5xl font-black uppercase brutal-border-thick px-6 py-3 bg-sunlight text-black transform -rotate-1">
        {{ t('stack.title') }}
      </h2>
      <div class="h-2 flex-1 bg-black dark:bg-white brutal-border hidden sm:block" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
      <div
        v-for="item in stack"
        :key="item.name"
        class="group relative"
      >
        <!-- Corner decorations -->
        <div class="brutal-corner-h top-0 left-0 -translate-x-2 -translate-y-2 transition-transform group-hover:-translate-x-3 group-hover:-translate-y-3" />
        <div class="brutal-corner-v top-0 left-0 -translate-x-2 -translate-y-2 transition-transform group-hover:-translate-x-3 group-hover:-translate-y-3" />
        
        <div class="brutal-border p-8 flex flex-col items-center gap-6 bg-white dark:bg-zinc-900 transition-all group-hover:-translate-y-2 group-hover:bg-glacier dark:group-hover:bg-glacier/20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_1px_rgba(255,255,255,0.1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div :class="[item.icon, 'text-5xl text-black dark:text-white']" />
          <span class="text-xl font-bold uppercase tracking-widest text-black dark:text-white">
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
