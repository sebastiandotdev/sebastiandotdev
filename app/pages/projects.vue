<script setup lang="ts">
import { SOCIAL_LINKS } from '~/utils/constants'

interface ProjectRepo {
  name: string
  url: string
  description: string
  stars: number
  topics: string[]
  language: string | null
}

const { data: repos } = await useFetch<ProjectRepo[]>('/api/repos', {
  default: () => [],
})

const searchQuery = ref('')

const filteredRepos = computed(() => {
  if (!repos.value) return []
  if (!searchQuery.value) return repos.value

  const query = searchQuery.value.toLowerCase()
  return repos.value.filter((repo) => {
    return (
      repo.name.toLowerCase().includes(query) ||
      repo.description?.toLowerCase().includes(query) ||
      repo.topics.some((t) => t.toLowerCase().includes(query)) ||
      repo.language?.toLowerCase().includes(query)
    )
  })
})
</script>

<template>
  <main class="max-w-2xl mx-auto flex flex-col px-6 pt-6 sm:pt-12 relative container font-mono">
    <!-- Search Bar -->
    <div class="relative mb-6">
      <div
        class="absolute left-3 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40"
      >
        <div class="i-solar:magnifer-linear size-4" />
      </div>
      <input
        id="search-repos"
        v-model="searchQuery"
        type="text"
        :placeholder="$t('projects.search_placeholder')"
        class="w-full bg-transparent border border-[#e5e5e5] dark:border-[#262626] rounded-lg py-2.5 pl-10 pr-4 text-sm text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
      />
    </div>

    <!-- Stats Row -->
    <div class="flex items-center justify-between mb-4">
      <span
        class="text-black/60 dark:text-[#f0f7ff9e] text-sm flex items-center gap-1.5"
      >
        <div class="i-solar:programming-bold size-4" />
        {{ $t('projects.repo_count', { count: filteredRepos.length }) }}
      </span>
      <a
        :href="SOCIAL_LINKS.GITHUB"
        target="_blank"
        rel="noopener noreferrer"
        class="text-black/60 dark:text-[#f0f7ff9e] text-sm flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"
      >
        {{ $t('projects.view_on_github') }}
        <div class="i-solar:arrow-right-up-linear size-3.5" />
      </a>
    </div>

    <!-- Repo List -->
    <div class="flex flex-col gap-3 pb-12">
      <a
        v-for="repo in filteredRepos"
        :key="repo.name"
        :href="repo.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group border border-[#e5e5e5] dark:border-[#262626] rounded-lg p-4 hover:border-black/30 dark:hover:border-white/20 transition-colors"
      >
        <!-- Header: name + stars -->
        <div class="flex items-center justify-between mb-1.5">
          <div class="flex items-center gap-1.5">
            <h2 class="text-sm font-bold text-black dark:text-white">
              {{ repo.name }}
            </h2>
            <div
              class="i-solar:arrow-right-up-linear size-3.5 text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors"
            />
          </div>
          <span
            v-if="repo.stars > 0"
            class="text-black/60 dark:text-[#f0f7ff9e] text-sm flex items-center gap-1"
          >
            <div class="i-solar:star-linear size-3.5" />
            {{ repo.stars }}
          </span>
        </div>

        <!-- Description -->
        <p
          v-if="repo.description"
          class="text-black/60 dark:text-[#f0f7ff9e] text-sm mb-3"
        >
          {{ repo.description }}
        </p>

        <!-- Topics + Language -->
        <div class="flex items-center flex-wrap gap-1.5">
          <span
            v-if="repo.language"
            class="text-3xs px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70"
          >
            {{ repo.language }}
          </span>
          <span
            v-for="topic in repo.topics"
            :key="topic"
            class="text-3xs px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70"
          >
            {{ topic }}
          </span>
        </div>
      </a>

      <!-- Empty State -->
      <div
        v-if="filteredRepos.length === 0"
        class="text-center py-12 text-black/40 dark:text-white/40 text-sm"
      >
        {{ $t('projects.no_results') }}
      </div>
    </div>
  </main>
</template>
