// app/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Typewriter from '@/components/typewriter'

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <main className="">
      <nav className="flex flex-col justify-center min-h-screen md:min-h-0 md:flex-row md:items-center md:justify-between px-4 sm:px-8 md:px-20 lg:px-40 xl:px-70 py-0 md:py-32 lg:py-[15rem] xl:py-[21rem] gap-8 md:gap-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-base sm:text-lg font-bold max-w-md">
            <Typewriter
              text="Hey, I'm Jordan. I code, write, design, etc."
              minSpeed={140}
              maxSpeed={30}
              rampLength={12}
              mistakeChance={0.08}
            />
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <ul className="hidden md:flex md:space-x-8 lg:space-x-15">
          <li className="has-dropdown">
            <a href="/writing" className="hover:text-gray-500">Writing</a>
            <ul className="dropdown">
              <li><Link href="/writing/interdisciplinary" className="hover:text-gray-500"> Interdisciplinary </Link></li>
              <li><Link href="/writing/blog" className="hover:text-gray-500"> Blog </Link></li>
            </ul>
          </li>
          <li className="has-dropdown">
            <a href="/projects" className="hover:text-gray-500">Projects</a>
            <ul className="dropdown">
              <li><Link href="/projects/opensource" className="hover:text-gray-500"> Github </Link></li>
              <li><Link href="/projects/research" className="hover:text-gray-500"> Research </Link></li>
            </ul>
          </li>
          <li><a href="/about" className="hover:text-gray-500">About</a></li>
          <li><a href="/contact" className="hover:text-gray-500">Contact</a></li>
        </ul>

        {open && (
          <ul className="md:hidden flex flex-col space-y-2 w-full">
            <li><a href="/writing" className="block py-2 hover:text-gray-500">Writing</a></li>
            <li><a href="/projects" className="block py-2 hover:text-gray-500">Projects</a></li>
            <li><a href="/about" className="block py-2 hover:text-gray-500">About</a></li>
            <li><a href="/contact" className="block py-2 hover:text-gray-500">Contact</a></li>
          </ul>
        )}
      </nav>
    </main>
  );
}