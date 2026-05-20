import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/projects': {
    name: 'projects',
  },
  '/cv': {
    name: 'cv',
  },
  '/workout': {
    name: 'workout',
  },
  '/admin': {
    name: 'admin',
  },
}

export function Navbar() {
  return (
    <aside className="mb-10 tracking-tight sm:mb-14">
      <div className="lg:sticky lg:top-20">
        <nav
          className="relative flex flex-row items-start px-0 pb-0 md:relative"
          id="nav"
        >
          <div className="flex flex-row flex-wrap gap-x-1 gap-y-1">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="relative flex align-middle rounded-md px-2 py-1 transition-all hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
