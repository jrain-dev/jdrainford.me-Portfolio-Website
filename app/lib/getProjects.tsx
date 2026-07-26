type Repo = {
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  updated_at: string
  fork: boolean
  archived: boolean
}

export async function getGithubProjects(username = 'jrain-dev') {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 3600 },
    }
  )

  const data = await res.json()

  if (!res.ok || !Array.isArray(data)) {
    throw new Error(`GitHub API error: ${res.status} — ${data?.message ?? 'Unexpected response'}`)
  }

  return data
    .filter((repo: any) => !repo.fork && !repo.archived)
    .map((repo: any) => ({
      title: repo.name,
      link: repo.html_url,
      date: repo.updated_at,
      excerpt: repo.description ?? 'No description provided.',
      stars: repo.stargazers_count,
      language: repo.language,
      image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
    }))
}

// lib/getGithubProjects.ts
// ...keep your existing getGithubProjects() as-is, and add this:

export async function getGithubRepo(username: string, repoName: string) {
  const res = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
    headers: { Accept: 'application/vnd.github+json' },
    next: { revalidate: 3600 },
  })

  const data = await res.json()

  return {
    title: data.name,
    link: data.html_url,
    date: data.updated_at,
    excerpt: data.description ?? 'No description provided.',
    stars: data.stargazers_count,
    language: data.language,
    image: `https://opengraph.githubassets.com/1/${username}/${repoName}`,
  }
}