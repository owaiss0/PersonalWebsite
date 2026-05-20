import './global.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from "next/font/google"
import { baseUrl } from './sitemap'
import { cn } from "@/lib/utils"
import { AppShell } from './components/app-shell'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'owais | Portfolio',
    template: '%s | Portfolio',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'owais | Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'owais | Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        'dark bg-[#0a0a0f] text-white',
        geistSans.variable,
        geistMono.variable,
        'font-sans'
      )}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
