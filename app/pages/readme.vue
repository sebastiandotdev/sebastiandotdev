<script lang="ts" setup>
useHead({
  title: 'README.md — sebastiandotdev',
})

const { t } = useI18n()
</script>

<template>
  <main
    class="max-w-2xl mx-auto flex flex-col px-6 pt-6 sm:pt-12 pb-16 relative container font-mono"
  >
    <!-- File header bar -->
    <div
      class="flex items-center gap-2 mb-6 pb-3 border-b border-[#e5e5e5] dark:border-[#262626]"
    >
      <div
        class="i-solar:document-text-linear size-4 text-black/40 dark:text-white/40"
      />
      <span class="text-sm text-black/50 dark:text-white/50">README.md</span>
      <span class="text-3xs text-black/30 dark:text-white/30 ml-auto">{{
        t('readme.last_updated')
      }}</span>
    </div>

    <!-- # Title -->
    <div class="mb-6">
      <h1 class="text-xl sm:text-2xl font-bold text-default leading-tight">
        <span
          class="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none"
          >#</span
        >
        {{ t('readme.title') }}
      </h1>
      <p
        class="mt-3 text-sm text-black/60 dark:text-[#f0f7ff9e] leading-relaxed"
      >
        {{ t('readme.description') }}
      </p>
    </div>

    <!-- Badges row -->
    <div class="flex flex-wrap gap-2 mb-8">
      <span
        v-for="badge in ['Nuxt 3', 'UnoCSS', 'TypeScript', 'i18n']"
        :key="badge"
        class="inline-flex items-center gap-1.5 text-3xs px-2.5 py-1 rounded-full border border-[#e5e5e5] dark:border-[#262626] text-black/70 dark:text-white/70 bg-black/3 dark:bg-white/5"
      >
        <span class="size-1.5 rounded-full bg-emerald-500/80" />
        {{ badge }}
      </span>
    </div>

    <!-- ## About -->
    <section class="mb-8">
      <h2
        class="text-base sm:text-lg font-semibold text-default mb-3 leading-tight"
      >
        <span
          class="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none"
          >##</span
        >
        {{ t('readme.about_title') }}
      </h2>
      <div
        class="text-sm text-black/60 dark:text-[#f0f7ff9e] leading-relaxed space-y-2"
      >
        <p>{{ t('readme.about_p1') }}</p>
        <p>{{ t('readme.about_p2') }}</p>
      </div>
    </section>

    <!-- ## Quick Start -->
    <section class="mb-8">
      <h2
        class="text-base sm:text-lg font-semibold text-default mb-3 leading-tight"
      >
        <span
          class="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none"
          >##</span
        >
        {{ t('readme.quickstart_title') }}
      </h2>

      <!-- Fenced code block -->
      <div
        class="rounded-lg border border-[#e5e5e5] dark:border-[#262626] overflow-hidden"
      >
        <div
          class="flex items-center gap-2 px-4 py-2 bg-black/3 dark:bg-white/3 border-b border-[#e5e5e5] dark:border-[#262626]"
        >
          <div
            class="i-solar:programming-linear size-3.5 text-black/40 dark:text-white/40"
          />
          <span class="text-3xs text-black/40 dark:text-white/40"
            >terminal</span
          >
        </div>
        <div class="p-4 bg-black/2 dark:bg-white/2">
          <pre
            class="text-sm text-black/80 dark:text-white/80 leading-relaxed overflow-x-auto"
          ><code><span class="text-black/40 dark:text-white/30 select-none">$</span> <span class="text-emerald-600 dark:text-emerald-400">git clone</span> https://github.com/sebastiandotdev/sebastiandotdev.git
<span class="text-black/40 dark:text-white/30 select-none">$</span> <span class="text-emerald-600 dark:text-emerald-400">cd</span> sebastiandotdev
<span class="text-black/40 dark:text-white/30 select-none">$</span> <span class="text-emerald-600 dark:text-emerald-400">pnpm</span> install
<span class="text-black/40 dark:text-white/30 select-none">$</span> <span class="text-emerald-600 dark:text-emerald-400">pnpm</span> dev</code></pre>
        </div>
      </div>
    </section>

    <!-- ## Tech Stack -->
    <section class="mb-8">
      <h2
        class="text-base sm:text-lg font-semibold text-default mb-3 leading-tight"
      >
        <span
          class="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none"
          >##</span
        >
        {{ t('readme.stack_title') }}
      </h2>

      <!-- Stack table in a fenced block -->
      <div
        class="rounded-lg border border-[#e5e5e5] dark:border-[#262626] overflow-hidden"
      >
        <div
          class="flex items-center gap-2 px-4 py-2 bg-black/3 dark:bg-white/3 border-b border-[#e5e5e5] dark:border-[#262626]"
        >
          <div
            class="i-solar:code-square-linear size-3.5 text-black/40 dark:text-white/40"
          />
          <span class="text-3xs text-black/40 dark:text-white/40"
            >stack.yml</span
          >
        </div>
        <div class="p-4 bg-black/2 dark:bg-white/2">
          <ul class="text-sm space-y-2.5">
            <li
              v-for="item in [
                { name: 'Nuxt 3', desc: t('readme.stack_nuxt') },
                { name: 'UnoCSS', desc: t('readme.stack_unocss') },
                { name: 'i18n', desc: t('readme.stack_i18n') },
                { name: 'Dark Mode', desc: t('readme.stack_darkmode') },
                { name: 'TypeScript', desc: t('readme.stack_typescript') },
                { name: 'Geist Mono', desc: t('readme.stack_font') },
              ]"
              :key="item.name"
              class="flex items-start gap-2"
            >
              <span
                class="text-emerald-500/70 dark:text-emerald-400/70 select-none mt-0.5 shrink-0"
                >-</span
              >
              <div>
                <span class="text-black dark:text-white font-medium">{{
                  item.name
                }}</span>
                <span class="text-black/40 dark:text-white/40 mx-1.5">—</span>
                <span class="text-black/60 dark:text-[#f0f7ff9e]">{{
                  item.desc
                }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ## Features -->
    <section class="mb-8">
      <h2
        class="text-base sm:text-lg font-semibold text-default mb-3 leading-tight"
      >
        <span
          class="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none"
          >##</span
        >
        {{ t('readme.features_title') }}
      </h2>
      <ol
        class="text-sm text-black/60 dark:text-[#f0f7ff9e] leading-relaxed space-y-2 pl-1"
      >
        <li class="flex items-start gap-2">
          <span
            class="text-black/40 dark:text-white/30 select-none font-medium shrink-0"
            >1.</span
          >
          {{ t('readme.feature_1') }}
        </li>
        <li class="flex items-start gap-2">
          <span
            class="text-black/40 dark:text-white/30 select-none font-medium shrink-0"
            >2.</span
          >
          {{ t('readme.feature_2') }}
        </li>
        <li class="flex items-start gap-2">
          <span
            class="text-black/40 dark:text-white/30 select-none font-medium shrink-0"
            >3.</span
          >
          {{ t('readme.feature_3') }}
        </li>
        <li class="flex items-start gap-2">
          <span
            class="text-black/40 dark:text-white/30 select-none font-medium shrink-0"
            >4.</span
          >
          {{ t('readme.feature_4') }}
        </li>
      </ol>
    </section>

    <!-- ### Project Structure -->
    <section class="mb-8">
      <h3
        class="text-sm sm:text-base font-semibold text-default mb-3 leading-tight"
      >
        <span
          class="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none"
          >###</span
        >
        {{ t('readme.structure_title') }}
      </h3>
      <div
        class="rounded-lg border border-[#e5e5e5] dark:border-[#262626] overflow-hidden"
      >
        <div
          class="flex items-center gap-2 px-4 py-2 bg-black/3 dark:bg-white/3 border-b border-[#e5e5e5] dark:border-[#262626]"
        >
          <div
            class="i-solar:folder-with-files-linear size-3.5 text-black/40 dark:text-white/40"
          />
          <span class="text-3xs text-black/40 dark:text-white/40">tree</span>
        </div>
        <div class="p-4 bg-black/2 dark:bg-white/2">
          <pre
            class="text-sm text-black/70 dark:text-white/70 leading-relaxed overflow-x-auto"
          ><code><span class="text-emerald-600 dark:text-emerald-400">sebastiandotdev/</span>
├── <span class="text-black/50 dark:text-white/50">app/</span>
│   ├── components/
│   ├── pages/
│   └── utils/
├── <span class="text-black/50 dark:text-white/50">i18n/</span>
│   ├── locales/
│   └── schema.json
├── <span class="text-black/50 dark:text-white/50">server/</span>
│   └── api/
├── nuxt.config.ts
├── uno.config.ts
└── package.json</code></pre>
        </div>
      </div>
    </section>

    <!-- ## Inspirations & Credits -->
    <section class="mb-8">
      <h2
        class="text-base sm:text-lg font-semibold text-default mb-3 leading-tight"
      >
        <span
          class="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none"
          >##</span
        >
        {{ t('readme.inspirations_title') }}
      </h2>
      <p class="text-sm text-black/50 dark:text-white/40 mb-4">
        {{ t('readme.inspirations_desc') }}
      </p>
      <ul class="text-sm space-y-3">
        <li class="flex items-start gap-2">
          <span
            class="text-emerald-500/70 dark:text-emerald-400/70 select-none mt-0.5 shrink-0"
            >*</span
          >
          <div>
            <span class="text-black dark:text-white font-medium"
              >Navigation Menu</span
            >
            <span class="text-black/40 dark:text-white/40 mx-1.5">—</span>
            <span class="text-black/60 dark:text-[#f0f7ff9e]">{{
              t('readme.insp_nav')
            }}</span>
            <a
              href="https://terminal.shop"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-1.5 text-emerald-600 dark:text-emerald-400 hover:underline"
              >terminal.shop</a
            >
          </div>
        </li>
        <li class="flex items-start gap-2">
          <span
            class="text-emerald-500/70 dark:text-emerald-400/70 select-none mt-0.5 shrink-0"
            >*</span
          >
          <div>
            <span class="text-black dark:text-white font-medium"
              >Projects UI</span
            >
            <span class="text-black/40 dark:text-white/40 mx-1.5">—</span>
            <span class="text-black/60 dark:text-[#f0f7ff9e]">{{
              t('readme.insp_projects')
            }}</span>
            <a
              href="https://api.github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-1.5 text-emerald-600 dark:text-emerald-400 hover:underline"
              >GitHub API</a
            >
            <span class="text-black/30 dark:text-white/30 mx-1">&</span>
            <a
              href="https://pheralb.dev"
              target="_blank"
              rel="noopener noreferrer"
              class="text-emerald-600 dark:text-emerald-400 hover:underline"
              >pheralb.dev</a
            >
          </div>
        </li>
        <li class="flex items-start gap-2">
          <span
            class="text-emerald-500/70 dark:text-emerald-400/70 select-none mt-0.5 shrink-0"
            >*</span
          >
          <div>
            <span class="text-black dark:text-white font-medium"
              >Menu Mechanics</span
            >
            <span class="text-black/40 dark:text-white/40 mx-1.5">—</span>
            <span class="text-black/60 dark:text-[#f0f7ff9e]">{{
              t('readme.insp_menu')
            }}</span>
            <a
              href="https://v0.dev"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-1.5 text-emerald-600 dark:text-emerald-400 hover:underline"
              >v0.dev</a
            >
          </div>
        </li>
        <li class="flex items-start gap-2">
          <span
            class="text-emerald-500/70 dark:text-emerald-400/70 select-none mt-0.5 shrink-0"
            >*</span
          >
          <div>
            <span class="text-black dark:text-white font-medium"
              >Portfolio Design</span
            >
            <span class="text-black/40 dark:text-white/40 mx-1.5">—</span>
            <span class="text-black/60 dark:text-[#f0f7ff9e]">{{
              t('readme.insp_design')
            }}</span>
            <a
              href="https://v0.app/templates/simple-dev-portfolio-ZWxaausPnN3?ref=8NK2LZ"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-1.5 text-emerald-600 dark:text-emerald-400 hover:underline"
              >v0 template</a
            >
          </div>
        </li>
      </ul>
    </section>

    <!-- ## License -->
    <section class="mb-4">
      <h2
        class="text-base sm:text-lg font-semibold text-default mb-3 leading-tight"
      >
        <span
          class="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none"
          >##</span
        >
        {{ t('readme.license_title') }}
      </h2>
      <p class="text-sm text-black/60 dark:text-[#f0f7ff9e]">
        {{ t('readme.license_text') }}
      </p>
    </section>

    <!-- Separator -->
    <div
      class="border-t border-[#e5e5e5] dark:border-[#262626] mt-6 pt-4 flex items-center justify-between"
    >
      <span class="text-3xs text-black/30 dark:text-white/20">EOF</span>
      <a
        :href="SOCIAL_LINKS.GITHUB + '/sebastiandotdev'"
        target="_blank"
        rel="noopener noreferrer"
        class="text-3xs text-black/30 dark:text-white/20 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
      >
        <div class="i-solar:star-linear size-3" />
        {{ t('readme.star_repo') }}
      </a>
    </div>
  </main>
</template>
