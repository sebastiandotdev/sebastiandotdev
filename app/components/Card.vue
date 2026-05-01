<script setup lang="ts">
interface CardProps {
  imageSrc?: string
  imageAlt?: string
  title?: string
  description?: string
  reverse?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  imageSrc: '',
  imageAlt: 'Card image',
  title: '',
  description: '',
  reverse: false,
})

const corners = [
  { pos: 'top-0 left-0', h: '-translate-x-2', v: '-translate-y-2' },
  { pos: 'top-0 right-0', h: 'translate-x-2', v: '-translate-y-2' },
  { pos: 'bottom-0 left-0', h: '-translate-x-2', v: 'translate-y-2' },
  { pos: 'bottom-0 right-0', h: 'translate-x-2', v: 'translate-y-2' },
]
</script>

<template>
  <div class="relative group p-2 max-w-[512px] mx-auto">
    <!-- Protruding corner lines (Neu-Brutalism "sobresaliente" style) -->
    <template v-for="(corner, index) in corners" :key="index">
      <div :class="['brutal-corner-h', corner.pos, corner.h]" />
      <div :class="['brutal-corner-v', corner.pos, corner.v]" />
    </template>

    <div
      :class="[
        'relative flex flex-col bg-white dark:bg-zinc-900 brutal-border transition-all duration-300',
        {
          'md:flex-row':
            !reverse && imageSrc && (title || description || $slots.default),
        },
        {
          'md:flex-row-reverse':
            reverse && imageSrc && (title || description || $slots.default),
        },
      ]"
    >
      <!-- Card Image -->
      <div
        v-if="imageSrc"
        :class="['p-4', { 'md:w-1/2': title || description || $slots.default }]"
      >
        <div class="brutal-border overflow-hidden aspect-square h-full">
          <img
            :src="imageSrc"
            :alt="imageAlt"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <!-- Card Content -->
      <div
        v-if="title || description || $slots.default"
        :class="[
          'p-4 flex flex-col justify-between gap-6',
          { 'md:w-1/2': imageSrc },
        ]"
      >
        <div class="flex flex-col gap-2">
          <h3
            v-if="title"
            class="text-2xl font-bold text-black dark:text-white uppercase tracking-tight leading-tight"
          >
            {{ title }}
          </h3>
          <p
            v-if="description"
            class="text-zinc-700 dark:text-zinc-400 font-medium leading-snug"
          >
            {{ description }}
          </p>
        </div>

        <div class="flex justify-between items-end">
          <div class="flex-1">
            <slot></slot>
          </div>

          <!-- Arrow Action Box -->
          <div
            class="shrink-0 bg-black dark:bg-white p-2 border-2 border-black dark:border-white transition-transform group-hover:scale-110"
          >
            <div
              class="i-solar-arrow-right-up-linear text-white dark:text-black text-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
