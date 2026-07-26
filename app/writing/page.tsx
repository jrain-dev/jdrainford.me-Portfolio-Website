// app/writing/page.tsx
import Parser from 'rss-parser'
import { getSubstackPosts, getBlogPosts } from '@/app/lib/getPosts'
import Carousel from '@/components/carousel'
import Typewriter from '@/components/typewriter'

export const revalidate = 3600

export default async function Writing() {
  const substackPosts = await getSubstackPosts()
  const blogPosts = getBlogPosts()

  const allPosts = [...substackPosts, ...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-70 pt-16 sm:pt-24 md:pt-32 lg:pt-[10rem] pb-8 md:pb-[3rem]">
        <div className="text-base sm:text-lg font-bold">Writing</div>
        <div className="text-sm sm:text-base md:text-lg">
            <Typewriter
                text="All my written works, newsletter and blog, in reverse chronological order."
                minSpeed={140}
                maxSpeed={50}
                rampLength={12}
                mistakeChance={0.04}
            />        
        </div>
      </div>

      <Carousel posts={allPosts} />
    </main>
  )
}