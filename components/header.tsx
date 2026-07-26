// components/header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="z-[999] relative">
      <div className="top-0 left-1/2 h-[4.5rem] w-full rounded-none"></div>

      <nav className="flex items-center justify-between px-4 sm:px-8 md:px-20 py-4 md:py-0">
        <div className="text-lg font-bold">
          <Link href="/">jdr</Link>
        </div>

        {/* Desktop nav — hidden below md breakpoint */}
        <ul className="hidden md:flex md:space-x-8 lg:space-x-15 items-center">
          <li className="has-dropdown">
            <a href="/writing" className="hover:text-gray-500">Writing</a>
            <ul className="dropdown">
              <li><Link href="/writing/interdisciplinary"> Interdisciplinary </Link></li>
              <li><Link href="/writing/blog"> Blog </Link></li>
            </ul>
          </li>
          <li className="has-dropdown">
            <a href="/projects" className="hover:text-gray-500">Projects</a>
            <ul className="dropdown">
              <li><Link href="/projects/opensource"> Github </Link></li>
              <li><Link href="/projects/research"> Research </Link></li>
            </ul>
          </li>
          <li><a href="/about" className="hover:text-gray-500">About</a></li>
          <li><a href="/contact" className="hover:text-gray-500">Contact</a></li>
        </ul>

        {/* Mobile menu toggle — visible only below md breakpoint */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu — stacked, only rendered when open */}
      {open && (
        <ul className="md:hidden flex flex-col space-y-1 px-4 pb-6">
          <li>
            <a href="/writing" className="block py-2 hover:text-gray-500">Writing</a>
            <ul className="flex flex-col pl-4 space-y-1">
              <li><Link href="/writing/interdisciplinary" className="block py-1 text-sm text-gray-600">Interdisciplinary</Link></li>
              <li><Link href="/writing/blog" className="block py-1 text-sm text-gray-600">Blog</Link></li>
            </ul>
          </li>
          <li>
            <a href="/projects" className="block py-2 hover:text-gray-500">Projects</a>
            <ul className="flex flex-col pl-4 space-y-1">
              <li><Link href="/projects/opensource" className="block py-1 text-sm text-gray-600">Github</Link></li>
              <li><Link href="/projects/research" className="block py-1 text-sm text-gray-600">Research</Link></li>
            </ul>
          </li>
          <li><a href="/about" className="block py-2 hover:text-gray-500">About</a></li>
          <li><a href="/contact" className="block py-2 hover:text-gray-500">Contact</a></li>
        </ul>
      )}
    </header>
  )
}

