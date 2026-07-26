// components/carousel.tsx
import Image from 'next/image'

type Post = {
  title: string
  link: string
  date: string
  excerpt: string
  stars?: number
  language?: string | null
  image?: string | null
}

export default function Carousel({ posts }: { posts: Post[] }) {
  if (!posts.length) {
    return <p className="text-gray-500 text-center">No posts found.</p>
  }

  return (
    <div className="flex flex-col overflow-y-auto space-y-3 md:space-y-4 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-70 max-h-[70vh] md:max-h-[80vh] lg:max-h-[1200px]">
      {posts.map((post) => (
        <a
          key={post.link}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 border rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition"
        >
          {post.image && (
            <div className="relative w-full sm:w-40 aspect-video shrink-0 rounded-md overflow-hidden">
                <Image
                src={post.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 160px"
                className="object-cover"
                />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold line-clamp-2 text-sm sm:text-base">{post.title}</h3>
              {post.language && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 shrink-0">
                  {post.language}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {new Date(post.date).toLocaleDateString()}
              {typeof post.stars === 'number' && <span className="ml-2">★ {post.stars}</span>}
            </p>

            <p className="text-xs sm:text-sm mt-2 line-clamp-3 text-gray-700">{post.excerpt}</p>
          </div>
        </a>
      ))}
    </div>
  )
}