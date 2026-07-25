import React from 'react'

export default function Header() {
  return (
    <header className="z-[999] relative ">
      <div className="top-0 left-1/2 h-[4.5rem] w-full rounded-none
     "></div>

     <nav className="flex items-center justify-between px-20 py-0">
        <div className="text-lg font-bold">jdr</div>
        <ul className="flex space-x-4">
            <li><a href="#writing" className="hover:text-gray-500">Writing</a></li>
            <li><a href="#projects" className="hover:text-gray-500">Projects</a></li>
            <li><a href="#about" className="hover:text-gray-500">About</a></li>
            <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

