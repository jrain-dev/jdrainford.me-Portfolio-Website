import Carousel from '@/components/carousel'
import { getSubstackPosts } from '@/app/lib/getPosts'
import Typewriter from '@/components/typewriter'


export const revalidate = 900 

export default async function Interdisciplinary() {
  const posts = await getSubstackPosts()

  return (
    <main className="">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-70 pt-16 sm:pt-24 md:pt-32 lg:pt-[10rem] pb-8 md:pb-[3rem]">
        <div className="text-base sm:text-lg font-bold">Interdisciplinary</div>
        <div className="text-sm sm:text-base md:text-lg">
          <Typewriter
            text="My Posts to the Interdisciplinary Newsletter, in reverse chronological order."
            minSpeed={140}
            maxSpeed={50}
            rampLength={12}
            mistakeChance={0.02}
          />        
        </div>
      </div>

      <Carousel posts={posts} />
    </main>
  )
}