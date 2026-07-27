// app/projects/research/page.tsx
import { getGithubRepo } from '@/app/lib/getProjects'
import ProjectCard from '@/components/projectCard'
import DecodeText from '@/components/decode'

export const revalidate = 3600

export default async function Research() {
  const [projectOne, projectTwo] = await Promise.all([
    getGithubRepo('CZ1-Alzheimers', 'Using-Machine-Learning-to-Diagnose-Alzheimers'),
    getGithubRepo('jrain-dev', 'Oware-Machine-Learning-Analysis'),
  ])

  return (
    <main className="">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-70 pt-16 sm:pt-24 md:pt-32 lg:pt-[10rem] pb-8 md:pb-[3rem]">
        <div className="text-base sm:text-lg font-bold">Research</div>
        <div className="text-sm sm:text-base md:text-lg">
            <DecodeText
                text="Two research projects I've worked on"
                duration={700}
                scrambleSpeed={55}
                className=""
            />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4 md:px-8 max-w-4xl mx-auto">
        <ProjectCard project={projectOne} />
        <ProjectCard project={projectTwo} />
    </div>
    </main>
  )
}