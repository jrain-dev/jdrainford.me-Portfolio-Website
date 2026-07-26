// app/projects/opensource/page.tsx
import { getGithubProjects } from '@/app/lib/getProjects'
import Carousel from '@/components/carousel'
import DecodeText from '@/components/decode'

export default async function OpenSource() {
  const projects = await getGithubProjects()

  return (
    <main className="">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-70 pt-16 sm:pt-24 md:pt-32 lg:pt-[10rem] pb-8 md:pb-[3rem]">
        <div className="text-base sm:text-lg font-bold">Open Source Projects</div>
        <div className="text-sm sm:text-base md:text-lg">
            <DecodeText
                text="My public GitHub projects, sorted by most recently updated"
                duration={700}
                scrambleSpeed={55}
                className=""
            />
        </div>
      </div>

      <Carousel posts={projects} />
    </main>
  )
}