import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <nav className="flex items-center justify-between px-70 py-[21rem]">
        <div className="text-lg font-bold">Hey, I'm Jordan. I code, write, design, etc.</div>
        <ul className="flex space-x-15">
            <li className="has-dropdown">
              <a href="/writing" className="hover:text-gray-500">
                Writing</a>
            <ul className="dropdown">
              <li><Link href="/writing/interdisciplinary"> {'->'} Interdisciplinary </Link></li>
              <li><Link href="/writing/blog"> {'->'} Blog </Link></li>
            </ul>
            </li>
            <li className="has-dropdown">
              <a href="/projects" className="hover:text-gray-500">
                Projects</a>
              <ul className="dropdown">
                <li><Link href="/projects/opensource"> {'->'} Open Source </Link></li>
                <li><Link href="/projects/research"> {'->'} Research </Link></li>
            </ul>
              </li> 
            <li><a href="/about" className="hover:text-gray-500">About</a></li>
            <li><a href="/contact" className="hover:text-gray-500">Contact</a></li>
        </ul>
      </nav>
    </main>
  );
}
