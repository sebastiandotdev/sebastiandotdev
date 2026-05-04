interface GitHubRepo {
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  topics: string[]
  fork: boolean
  language: string | null
}

interface ProjectRepo {
  name: string
  url: string
  description: string
  stars: number
  topics: string[]
  language: string | null
}

const GITHU_API_URL = 'https://api.github.com/users/sebastiandotdev'

export default defineEventHandler(async (): Promise<ProjectRepo[]> => {
  const repos = await $fetch<GitHubRepo[]>(`${GITHU_API_URL}/repos`, {
    query: {
      sort: 'stars',
      direction: 'desc',
      per_page: 30,
      type: 'owner',
    },
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  })

  return repos
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description ?? '',
      stars: repo.stargazers_count,
      topics: repo.topics,
      language: repo.language,
    }))
})
