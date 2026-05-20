'use client'

import { usePathname } from 'next/navigation'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { cn } from '@/lib/utils'
import { Navbar } from './nav'
import Footer from './footer'

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isWorkout = pathname === '/workout' || pathname.startsWith('/workout/')

  return (
    <>
      <main
        className={cn(
          'flex-auto min-w-0 flex flex-col',
          isWorkout
            ? 'min-h-screen w-full bg-[#0a0a0f]'
            : 'mx-auto w-full max-w-xl px-4 pt-10 sm:pt-14'
        )}
      >
        {!isWorkout && <Navbar />}
        {children}
        {!isWorkout && <Footer />}
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
