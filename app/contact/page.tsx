// app/contact/page.tsx
import { Mail, Rss } from 'lucide-react'
import Typewriter from '@/components/typewriter'

const contacts = [
  {
    label: 'Email',
    value: 'jrain.dev@outlook.com',
    href: 'mailto:jrain.dev@outlook.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jrain-dev',
    href: 'https://linkedin.com/in/jrain-dev',
    icon: 'linkedin',
  },
  {
    label: 'Bluesky',
    value: '@jdrainford.bsky.social',
    href: 'https://bsky.app/profile/jdrainford.bsky.social',
    icon: 'bluesky',
  },
  {
    label: 'Substack',
    value: 'substack.com/@jdrainford',
    href: 'https://substack.com/@jdrainford',
    icon: Rss,
  },
]

function BrandIcon({ name }: { name: string }) {
  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-700">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
      </svg>
    )
  }

  if (name === 'bluesky') {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-700">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.5 1.318 1.5 3.622c0 .461.265 3.874.42 4.462.541 2.042 2.512 2.563 4.268 2.288-3.065.478-3.867 2.06-2.174 3.643 3.211 3.011 4.61-.755 4.966-1.867.07-.215.103-.31.126-.31.023 0 .056.095.126.31.356 1.112 1.755 4.878 4.966 1.867 1.693-1.583.891-3.165-2.174-3.643 1.756.275 3.727-.246 4.268-2.288.155-.588.42-4.001.42-4.462 0-2.304-1.066-2.678-3.702-.817C16.046 4.747 13.087 8.686 12 10.8z" />
      </svg>
    )
  }

  return null
}

export default function Contact() {
  return (
    <main className="">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-70 pt-16 sm:pt-24 md:pt-32 lg:pt-[10rem] pb-8 md:pb-[3rem]">
        <div className="text-base sm:text-lg font-bold">Contact</div>
        <div className="text-sm sm:text-base md:text-lg">
            <Typewriter
              text="I don't bite I promise 🤝"
              minSpeed={140}
              maxSpeed={50}
              rampLength={12}
              mistakeChance={0.02}
            />
          </div>
      </div>

      <div className="flex flex-col space-y-3 sm:space-y-4 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-70 pb-12">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="flex items-center gap-3 sm:gap-4 border rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition"
          >
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 shrink-0">
              {typeof contact.icon === 'string' ? (
                <BrandIcon name={contact.icon} />
              ) : (
                <contact.icon className="w-5 h-5 text-gray-700" />
              )}
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-sm sm:text-base">{contact.label}</h3>
              <p className="text-xs sm:text-sm text-gray-500 truncate">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}