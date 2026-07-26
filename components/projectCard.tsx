// components/projectCard.tsx
import Image from 'next/image'

type Project = {
  title: string
  link: string
  date: string
  excerpt: string
  stars?: number
  language?: string | null
  image?: string | null
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col border rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition"
    >
      {project.image && (
        <div className="relative w-full aspect-video rounded-md overflow-hidden mb-3">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold line-clamp-2 text-sm sm:text-base">{project.title}</h3>
        {project.language && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 shrink-0">
            {project.language}
          </span>
        )}
      </div>

      <p className="text-xs sm:text-sm text-gray-500 mt-1">
        {new Date(project.date).toLocaleDateString()}
        {typeof project.stars === 'number' && <span className="ml-2">★ {project.stars}</span>}
      </p>

      <p className="text-xs sm:text-sm mt-2 line-clamp-3 text-gray-700">{project.excerpt}</p>
    </a>
  )
}