'use client'

import { useState } from 'react'

export default function AdminPage() {
  const [keyInput, setKeyInput] = useState('')
  const [placeInput, setPlaceInput] = useState('')
  const [showContent, setShowContent] = useState(false)
  const [error, setError] = useState('')

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    
    const normalizedKey = keyInput.trim().replace(/\s+/g, ' ')
    const normalizedPlace = placeInput.trim().toLowerCase()

    // Accept exactly "13 04 2004" or "13 04 2007"
    const isKeyCorrect = normalizedKey === '13 04 2004' || normalizedKey === '13 04 2007'
    const isPlaceCorrect = normalizedPlace === 'us' || normalizedPlace.includes('united states')

    if (isKeyCorrect && isPlaceCorrect) {
      setShowContent(true)
      setError('')
    } else {
      setError('Credentials do not match our records.')
    }
  }

  if (showContent) {
    return (
      <section className="w-full max-w-2xl mx-auto space-y-12 animate-in fade-in duration-1000">
        <h1 className="text-4xl font-bold tracking-tighter border-l-4 border-neutral-900 dark:border-neutral-100 pl-4">
          The Manifestos
        </h1>
        <div className="space-y-8">
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors">
            <h2 className="text-sm uppercase tracking-widest mb-4 opacity-50 font-bold">Version 1</h2>
            <p className="text-lg leading-relaxed font-medium">
              "I’m Owais. I love traveling, especially in helicopters—I’m fascinated by the perspective of seeing the world from above and capturing drone views. When I’m back on the ground, I’m passionate about computer science and building new things."
            </p>
          </div>
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors">
            <h2 className="text-sm uppercase tracking-widest mb-4 opacity-50 font-bold">Version 2</h2>
            <p className="text-lg leading-relaxed font-medium">
              "I’m Owais. I’m a traveler who loves the view from above, whether I'm in a helicopter or flying a drone. Beyond the aerial perspective, I’m focused on computer science and I love the process of building new things."
            </p>
          </div>
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors">
            <h2 className="text-sm uppercase tracking-widest mb-4 opacity-50 font-bold">Version 3</h2>
            <p className="text-lg leading-relaxed font-medium">
              "I’m Owais. I really enjoy traveling and seeing things from above—helicopter rides and drone views are my favorite ways to explore. When I’m not in the air, I spend my time in computer science, building and creating new stuff."
            </p>
          </div>
        </div>
        <div className="pt-8 text-center">
           <button
            onClick={() => window.location.href = '/'}
            className="px-8 py-3 border-2 border-neutral-900 dark:border-neutral-100 font-bold hover:bg-neutral-900 hover:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900 transition-all hover:tracking-widest"
          >
            Return Home
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] space-y-12">
      <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="space-y-2">
          <h1 className="text-5xl font-black tracking-tighter uppercase italic">
            The Gate
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 font-medium tracking-tight">
            Authentication required to access the manifestos.
          </p>
        </div>
        
        <form onSubmit={handleVerify} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs uppercase font-bold tracking-widest opacity-50 pl-1">Secret Key</label>
              <input
                type="password"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="DD MM YYYY or YYYY"
                className="w-full bg-neutral-100 dark:bg-neutral-900 border-2 border-transparent focus:border-neutral-900 dark:focus:border-neutral-100 px-4 py-3 outline-none transition-all"
                autoFocus
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-xs uppercase font-bold tracking-widest opacity-50 pl-1">Favorite Place</label>
              <input
                type="password"
                value={placeInput}
                onChange={(e) => setPlaceInput(e.target.value)}
                placeholder="Where do you belong?"
                className="w-full bg-neutral-100 dark:bg-neutral-900 border-2 border-transparent focus:border-neutral-900 dark:focus:border-neutral-100 px-4 py-3 outline-none transition-all"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border-l-4 border-red-500 p-3">
              <p className="text-red-500 text-sm font-bold">{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-black uppercase tracking-widest hover:invert transition-all active:scale-95"
          >
            Unlock Access
          </button>
        </form>
      </div>
    </section>
  )
}
