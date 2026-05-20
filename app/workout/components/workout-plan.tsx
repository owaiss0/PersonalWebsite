'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ChevronDown, Search } from 'lucide-react'
import { workoutData, Exercise } from '../data'

const categoryColors: Record<string, string> = {
  Chest: 'bg-rose-500/15 text-rose-300 border-rose-500/25',
  Shoulder: 'bg-amber-500/15 text-amber-300 border-amber-500/25',
  Triceps: 'bg-violet-500/15 text-violet-300 border-violet-500/25',
  Back: 'bg-sky-500/15 text-sky-300 border-sky-500/25',
  Biceps: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
  Legs: 'bg-orange-500/15 text-orange-300 border-orange-500/25',
  Abs: 'bg-pink-500/15 text-pink-300 border-pink-500/25',
  Cardio: 'bg-muted text-muted-foreground border-border',
}

const categoryDotColors: Record<string, string> = {
  Chest: 'bg-rose-400',
  Shoulder: 'bg-amber-400',
  Triceps: 'bg-violet-400',
  Back: 'bg-sky-400',
  Biceps: 'bg-indigo-400',
  Legs: 'bg-orange-400',
  Abs: 'bg-pink-400',
  Cardio: 'bg-neutral-400',
}

export default function WorkoutPlan() {
  const [selectedDay, setSelectedDay] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const currentDay = workoutData[selectedDay]
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const visibleExercises = normalizedQuery
    ? currentDay.exercises.filter((exercise) => {
      const searchableText = `${exercise.name} ${exercise.category} ${exercise.sets} ${exercise.reps}`.toLowerCase()
      return searchableText.includes(normalizedQuery)
    })
    : currentDay.exercises

  const groupedExercises = visibleExercises.reduce<Record<string, Exercise[]>>((acc, ex) => {
    if (!acc[ex.category]) acc[ex.category] = []
    acc[ex.category].push(ex)
    return acc
  }, {})

  const categories = Object.keys(groupedExercises)
  const defaultOpenCategory = categories[0]

  function handleDaySelect(dayIndex: number) {
    setSelectedDay(dayIndex)
    setOpenCategory(null)
    setSearchQuery('')
  }

  function isOpen(category: string, index: number) {
    if (openCategory === '') return false
    if (openCategory) return openCategory === category
    return index === 0 && category === defaultOpenCategory
  }

  return (
    <div className="min-h-screen w-full bg-background px-4 py-5 text-foreground sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-6 pb-16 sm:space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Workout Plan</h1>
            <p className="mt-1 text-sm text-muted-foreground">{currentDay.day} · {currentDay.type}</p>
          </div>

          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value)
                setOpenCategory(null)
              }}
              placeholder="Search exercise, muscle, reps..."
              className="h-11 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
            />
          </div>
        </div>

        {/* Day Selector */}
        <div className="flex gap-2 overflow-x-auto rounded-lg border border-border bg-card p-2 shadow-sm scrollbar-hide">
          {workoutData.map((day, i) => {
            const isActive = selectedDay === i
            const isRest = day.exercises.length === 0
            return (
              <button
                key={day.day}
                onClick={() => handleDaySelect(i)}
                className={`
                  relative flex min-w-20 flex-col items-center gap-0.5 rounded-lg px-3.5 py-2.5 text-xs font-medium
                  transition-all duration-200 shrink-0 cursor-pointer
                  ${isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }
                `}
              >
                <span className="text-[10px] uppercase tracking-wider opacity-60">
                  {day.day.slice(0, 3)}
                </span>
                <span className={`text-sm font-semibold ${isRest ? 'opacity-40' : ''}`}>
                  {isRest ? '—' : day.exercises.length}
                </span>
              </button>
            )
          })}
        </div>

        {/* Content */}
        {currentDay.exercises.length === 0 ? (
          <Card className="min-h-96 items-center justify-center rounded-lg border-border bg-card px-6 py-20 text-center shadow-sm">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-lg bg-muted">
              <svg className="h-9 w-9 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            </div>
            <p className="text-xl font-bold">Rest Day</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">No exercise rows today. Recovery is part of the process.</p>
          </Card>
        ) : categories.length === 0 ? (
          <Card className="min-h-72 items-center justify-center rounded-lg border-border bg-card px-6 py-16 text-center shadow-sm">
            <p className="text-lg font-bold">No results</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">Try a different exercise, muscle group, set, or rep search.</p>
          </Card>
        ) : (
          <div className="space-y-5">
            {Object.entries(groupedExercises).map(([category, exercises], index) => {
              const categoryIsOpen = isOpen(category, index)

              return (
                <Card key={category} className="rounded-lg border-border bg-card py-0 shadow-sm">
                  <CardHeader className="border-b border-border p-0">
                    <button
                      type="button"
                      onClick={() => setOpenCategory(categoryIsOpen ? '' : category)}
                      className="flex w-full items-center justify-between gap-3 p-4 text-left sm:px-5"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`h-3 w-3 rounded-full ${categoryDotColors[category] || 'bg-neutral-400'}`} />
                        <div>
                          <h3 className="text-base font-bold tracking-tight">{category}</h3>
                          <p className="text-xs text-muted-foreground">{exercises.length} exercises</p>
                        </div>
                      </div>

                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${categoryIsOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  </CardHeader>

                  {categoryIsOpen && (
                    <div>
                      <div className="hidden grid-cols-[3rem_minmax(0,1fr)_6rem_minmax(9rem,0.65fr)_7rem] gap-3 border-b border-border bg-muted/50 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground md:grid">
                        <span>No.</span>
                        <span>Exercise</span>
                        <span className="text-amber-300">Sets</span>
                        <span className="text-violet-300">Reps / Time</span>
                        <span className="text-sky-300">Tutorial</span>
                      </div>

                      <div className="divide-y divide-border">
                        {exercises.map((exercise) => (
                          <ExerciseRow key={`${category}-${exercise.id}`} exercise={exercise} />
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

function ExerciseRow({ exercise }: { exercise: Exercise }) {
  const colorClass = categoryColors[exercise.category] || 'bg-muted text-muted-foreground border-border'

  return (
    <div className="grid gap-4 p-4 transition-colors duration-150 hover:bg-muted/40 md:grid-cols-[3rem_minmax(0,1fr)_6rem_minmax(9rem,0.65fr)_7rem] md:items-center md:gap-3 md:px-5">
      <div className="flex items-start justify-between gap-3 md:contents">
        <div className="flex min-w-0 items-start gap-3 md:contents">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted font-mono text-xs text-muted-foreground md:h-auto md:w-auto md:justify-start md:bg-transparent">
            {exercise.id}
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold leading-6 text-sky-200 sm:text-base md:text-sm">
              {exercise.name}
            </p>
            <div className="mt-2 flex flex-wrap gap-2 md:hidden">
              <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${colorClass}`}>
                {exercise.category}
              </span>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1 md:hidden">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-300 md:hidden">Tutorial</p>
          <div>
            <TutorialLink tutorial={exercise.tutorial} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:contents">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-300 md:hidden">Sets</p>
          <p className="mt-1 font-mono text-sm font-semibold text-amber-200 md:mt-0">{exercise.sets}</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-violet-300 md:hidden">Reps / Time</p>
          <p className="mt-1 font-mono text-sm font-semibold text-violet-200 md:mt-0">{exercise.reps}</p>
        </div>
        <div className="hidden flex-col items-start gap-1 md:flex">
          <TutorialLink tutorial={exercise.tutorial} />
        </div>
      </div>
    </div>
  )
}

function TutorialLink({ tutorial }: { tutorial: string }) {
  if (tutorial === '#') {
    return <span className="text-xs font-medium text-muted-foreground">None</span>
  }

  return (
    <a
      href={tutorial}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-lg border border-sky-500/25 bg-sky-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-200 transition-colors hover:bg-sky-500/25"
    >
      Watch
    </a>
  )
}
