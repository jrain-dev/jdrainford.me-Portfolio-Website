import Parser from 'rss-parser'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Blog Post Logic
const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getBlogPosts() {
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      link: `/blog/${slug}`,
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

//Substack Post Logic
const parser = new Parser({
  customFields: {
    item: [['content:encoded', 'contentEncoded']],
  },
})


function extractFirstImage(html?: string): string | null {
  if (!html) return null

  // Try src first
  const srcMatch = html.match(/<img[^>]+src="([^">]+)"/)
  if (srcMatch) return srcMatch[1]

  // Fallback: try srcset, take the first URL in the list
  const srcsetMatch = html.match(/<img[^>]+srcset="([^">]+)"/)
  if (srcsetMatch) {
    const firstUrl = srcsetMatch[1].split(',')[0].trim().split(' ')[0]
    return firstUrl
  }

  return null
}

function resizeSubstackImage(url: string, width = 320, height = 180) {
  // Only rewrite if this is actually a Substack CDN resizing URL
  if (!url.includes('substackcdn.com/image/fetch')) return url
  return url.replace(/w_\d+,h_\d+/, `w_${width},h_${height}`)
}

export async function getSubstackPosts() {
  const feed = await parser.parseURL('https://1nterdisciplinary.substack.com/feed')
  
  

  return feed.items.map((item: any) => {
    const rawImage = extractFirstImage(item.contentEncoded)

    return {
      title: item.title ?? '',
      link: item.link ?? '',
      date: item.pubDate ?? '',
      excerpt: item.contentSnippet ?? '',
      image: rawImage ? resizeSubstackImage(rawImage, 200, 200) : null,
    }})
}

//Merges all posts from both sources and sorts them by date
export async function getAllPosts() {
  const blogPosts = getBlogPosts()
  const substackPosts = await getSubstackPosts()

  const allPosts = [...blogPosts, ...substackPosts]

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
}