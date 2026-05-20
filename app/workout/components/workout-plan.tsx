'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ChevronDown, 
  Search, 
  Dumbbell, 
  Calendar, 
  Play, 
  Check, 
  RotateCcw, 
  Activity, 
  Sparkles, 
  Clock, 
  ArrowLeft, 
  Moon, 
  Flame,
  ListTodo
} from 'lucide-react'
import { workoutData, Exercise } from '../data'

const categoryDotColors: Record<string, string> = {
  Chest: 'bg-rose-500',
  Shoulder: 'bg-amber-500',
  Triceps: 'bg-violet-500',
  Back: 'bg-sky-500',
  Biceps: 'bg-indigo-500',
  Legs: 'bg-orange-500',
  Abs: 'bg-pink-500',
  Cardio: 'bg-teal-500',
}

const categoryColorStyles: Record<string, {
  text: string
  badge: string
  button: string
  hoverText: string
}> = {
  Chest: {
    text: 'text-rose-500 dark:text-rose-400',
    badge: 'bg-rose-500/10 text-rose-500 border-rose-500/20 dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-800/30',
    button: 'border-rose-500/20 bg-rose-500/5 text-rose-500 hover:bg-rose-500/15 hover:border-rose-500/30 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-300 dark:hover:bg-rose-500/20',
    hoverText: 'group-hover/row:text-rose-500 dark:group-hover/row:text-rose-400'
  },
  Shoulder: {
    text: 'text-amber-500 dark:text-amber-400',
    badge: 'bg-amber-500/10 text-amber-500 border-amber-500/20 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800/30',
    button: 'border-amber-500/20 bg-amber-500/5 text-amber-500 hover:bg-amber-500/15 hover:border-amber-500/30 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-300 dark:hover:bg-amber-500/20',
    hoverText: 'group-hover/row:text-amber-500 dark:group-hover/row:text-amber-400'
  },
  Triceps: {
    text: 'text-violet-500 dark:text-violet-400',
    badge: 'bg-violet-500/10 text-violet-500 border-violet-500/20 dark:bg-violet-950/30 dark:text-violet-300 dark:border-violet-800/30',
    button: 'border-violet-500/20 bg-violet-500/5 text-violet-500 hover:bg-violet-500/15 hover:border-violet-500/30 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300 dark:hover:bg-violet-500/20',
    hoverText: 'group-hover/row:text-violet-500 dark:group-hover/row:text-violet-400'
  },
  Back: {
    text: 'text-sky-500 dark:text-sky-400',
    badge: 'bg-sky-500/10 text-sky-500 border-sky-500/20 dark:bg-sky-950/30 dark:text-sky-300 dark:border-sky-800/30',
    button: 'border-sky-500/20 bg-sky-500/5 text-sky-500 hover:bg-sky-500/15 hover:border-sky-500/30 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-300 dark:hover:bg-sky-500/20',
    hoverText: 'group-hover/row:text-sky-500 dark:group-hover/row:text-sky-400'
  },
  Biceps: {
    text: 'text-indigo-500 dark:text-indigo-400',
    badge: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20 dark:bg-indigo-950/30 dark:text-indigo-300 dark:border-indigo-800/30',
    button: 'border-indigo-500/20 bg-indigo-500/5 text-indigo-500 hover:bg-indigo-500/15 hover:border-indigo-500/30 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300 dark:hover:bg-indigo-500/20',
    hoverText: 'group-hover/row:text-indigo-500 dark:group-hover/row:text-indigo-400'
  },
  Legs: {
    text: 'text-orange-500 dark:text-orange-400',
    badge: 'bg-orange-500/10 text-orange-500 border-orange-500/20 dark:bg-orange-950/30 dark:text-orange-300 dark:border-orange-800/30',
    button: 'border-orange-500/20 bg-orange-500/5 text-orange-500 hover:bg-orange-500/15 hover:border-orange-500/30 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-300 dark:hover:bg-orange-500/20',
    hoverText: 'group-hover/row:text-orange-500 dark:group-hover/row:text-orange-400'
  },
  Abs: {
    text: 'text-pink-500 dark:text-pink-400',
    badge: 'bg-pink-500/10 text-pink-500 border-pink-500/20 dark:bg-pink-950/30 dark:text-pink-300 dark:border-pink-800/30',
    button: 'border-pink-500/20 bg-pink-500/5 text-pink-500 hover:bg-pink-500/15 hover:border-pink-500/30 dark:border-pink-500/20 dark:bg-pink-500/10 dark:text-pink-300 dark:hover:bg-pink-500/20',
    hoverText: 'group-hover/row:text-pink-500 dark:group-hover/row:text-pink-400'
  },
  Cardio: {
    text: 'text-teal-500 dark:text-teal-400',
    badge: 'bg-teal-500/10 text-teal-500 border-teal-500/20 dark:bg-teal-950/30 dark:text-teal-300 dark:border-teal-800/30',
    button: 'border-teal-500/20 bg-teal-500/5 text-teal-500 hover:bg-teal-500/15 hover:border-teal-500/30 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-300 dark:hover:bg-teal-500/20',
    hoverText: 'group-hover/row:text-teal-500 dark:group-hover/row:text-teal-400'
  },
}

// Curated active recovery tasks for rest days
const recoveryTasks = [
  { id: 1, title: 'Foam Rolling / Static Stretching', desc: 'Spend 15 mins targeting tight muscle tissues.', time: '15 min' },
  { id: 2, title: 'Hydration & Mineral Intake', desc: 'Drink 3+ liters of water, replenish with key electrolytes.', time: 'All day' },
  { id: 3, title: 'Deep Sleep Recovery', desc: 'Aim for 8+ hours of high-quality sleep for protein synthesis.', time: '8+ hrs' },
  { id: 4, title: 'Active Recovery Walk', desc: 'Perform a low-intensity walk to promote blood flow.', time: '20-30 min' },
  { id: 5, title: 'Protein & Nutrition Targets', desc: 'Hit daily clean protein goals to rebuild broken muscle fibers.', time: 'Ongoing' }
]

// Highly motivational quotes to generate dynamically
const dynamicQuotes = [
  { text: "The body achieves what the mind believes.", author: "Discipline" },
  { text: "Consistency is what transforms average into excellence.", author: "Commitment" },
  { text: "Recovery is not empty time. It is the bridge that builds your power.", author: "Physiology" },
  { text: "We are what we repeatedly do. Aristotle says excellence is a habit.", author: "Aristotle" },
  { text: "Discipline is choosing between what you want now and what you want most.", author: "Focus" }
]

export default function WorkoutPlan() {
  const [selectedDay, setSelectedDay] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMuscleFilter, setSelectedMuscleFilter] = useState<string | null>(null)
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({})
  const [isMounted, setIsMounted] = useState(false)
  const [quoteIndex, setQuoteIndex] = useState(0)

  // Safe client-side local storage loading to prevent Next.js SSR hydration mismatches
  useEffect(() => {
    setIsMounted(true)
    try {
      const saved = localStorage.getItem('owais_completed_exercises')
      if (saved) {
        setCompletedExercises(JSON.parse(saved))
      }
    } catch (e) {
      console.error('Could not load exercise completion states:', e)
    }

    // Set a random quote index
    setQuoteIndex(Math.floor(Math.random() * dynamicQuotes.length))
  }, [])

  const currentDay = workoutData[selectedDay]
  const isRestDay = currentDay.exercises.length === 0

  // Handle exercise check-off toggles
  const handleToggleExercise = (exerciseId: number) => {
    const key = `${currentDay.day}-${exerciseId}`
    const updated = { ...completedExercises, [key]: !completedExercises[key] }
    setCompletedExercises(updated)
    try {
      localStorage.setItem('owais_completed_exercises', JSON.stringify(updated))
    } catch (e) {
      console.error('Failed to save completion state:', e)
    }
  }

  // Reset progress for the current day
  const handleResetDayProgress = () => {
    const updated = { ...completedExercises }
    currentDay.exercises.forEach(ex => {
      delete updated[`${currentDay.day}-${ex.id}`]
    })
    setCompletedExercises(updated)
    try {
      localStorage.setItem('owais_completed_exercises', JSON.stringify(updated))
    } catch (e) {
      console.error('Failed to save progress reset:', e)
    }
  }

  // Get active muscle groups in current day's routine
  const dayMuscles = Array.from(
    new Set(currentDay.exercises.map((ex) => ex.category))
  )

  const normalizedQuery = searchQuery.trim().toLowerCase()
  
  // Filter exercises by search input + muscle category quick filter
  const visibleExercises = currentDay.exercises.filter((exercise) => {
    const matchesSearch = normalizedQuery
      ? `${exercise.name} ${exercise.category} ${exercise.sets} ${exercise.reps}`.toLowerCase().includes(normalizedQuery)
      : true
    const matchesMuscleFilter = selectedMuscleFilter
      ? exercise.category === selectedMuscleFilter
      : true
    return matchesSearch && matchesMuscleFilter
  })

  // Group exercises by category/muscle group
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
    setSelectedMuscleFilter(null)
  }

  function isOpen(category: string, index: number) {
    if (openCategory === '') return false
    if (openCategory) return openCategory === category
    return index === 0 && category === defaultOpenCategory
  }

  // Calculate real-time stats for the progress bar
  const totalExercisesCount = currentDay.exercises.length
  const completedCount = isMounted 
    ? currentDay.exercises.filter((ex) => completedExercises[`${currentDay.day}-${ex.id}`]).length 
    : 0
  const progressPercent = totalExercisesCount > 0 
    ? Math.round((completedCount / totalExercisesCount) * 100) 
    : 0

  return (
    <div className="min-h-screen w-full bg-background text-foreground px-4 py-6 sm:px-6 sm:py-8 lg:px-8 relative overflow-hidden font-sans">
      
      {/* Immersive Glowing Background Blobs linked to primary colors */}
      <div className="absolute top-[-20%] left-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-primary/3 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-primary/2 blur-[140px] pointer-events-none" />

      <div className="mx-auto w-full max-w-4xl space-y-6 pb-20 sm:space-y-8">
        
        {/* Global Floating Glass Navigation Bar (Shadcn Outline UI Style) */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="h-8 rounded-md font-medium text-xs">
              <a href="/" className="group flex items-center gap-1.5">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
                <span>owais</span>
              </a>
            </Button>
            <div className="h-4 w-[1px] bg-border" />
            <Badge variant="secondary" className="px-2.5 py-0.5 text-xs font-medium flex items-center gap-1">
              <Flame className="h-3 w-3 text-foreground animate-pulse" />
              12-Week Hypertrophy
            </Badge>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Workout Dashboard</p>
            <p className="text-xs font-medium text-muted-foreground mt-0.5 font-mono">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Welcome Motto & Header Block */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/75 bg-clip-text text-transparent sm:text-4xl">
              Workout Routine
            </h1>
            <p className="mt-2 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium text-foreground">{currentDay.day}</span>
              <span className="text-border">•</span>
              <span className="text-muted-foreground font-medium">{currentDay.type}</span>
            </p>
          </div>

          {/* Reset Progress Action */}
          {!isRestDay && totalExercisesCount > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleResetDayProgress}
              className="group rounded-md font-medium text-xs"
            >
              <RotateCcw className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:rotate-[-45deg]" />
              <span>Reset Today's Checklist</span>
            </Button>
          )}
        </div>

        {/* Weekly Calendar strip Navigation */}
        <div className="flex gap-2 overflow-x-auto rounded-xl border border-border bg-card p-2 shadow-sm scrollbar-hide">
          {workoutData.map((day, i) => {
            const isActive = selectedDay === i
            const isDayRest = day.exercises.length === 0
            
            // Calculate progress status dots for all days
            const dayExercises = day.exercises
            const dayCompletedCount = isMounted 
              ? dayExercises.filter(ex => completedExercises[`${day.day}-${ex.id}`]).length 
              : 0
            const isDayFullyCompleted = dayExercises.length > 0 && dayCompletedCount === dayExercises.length
            const isDayPartiallyCompleted = dayExercises.length > 0 && dayCompletedCount > 0 && dayCompletedCount < dayExercises.length
            
            return (
              <button
                key={day.day}
                onClick={() => handleDaySelect(i)}
                className={`
                  relative flex min-w-24 flex-col items-center gap-2 rounded-lg px-4 py-3 text-xs font-medium
                  transition-all duration-200 shrink-0 cursor-pointer border
                  ${isActive
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                    : 'bg-card border-border text-muted-foreground hover:bg-muted hover:text-foreground'
                  }
                `}
              >
                <span className={`text-[10px] font-semibold uppercase tracking-wider ${isActive ? 'text-primary-foreground/80' : 'text-muted-foreground/60'}`}>
                  {day.day.slice(0, 3)}
                </span>
                
                <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border tracking-wide uppercase leading-none transition-colors duration-200
                  ${isDayRest 
                    ? 'bg-muted border-border text-muted-foreground'
                    : isActive
                      ? 'bg-primary-foreground/10 border-primary-foreground/10 text-primary-foreground'
                      : 'bg-secondary border-transparent text-secondary-foreground'
                  }
                `}>
                  {isDayRest ? 'REST' : day.type.includes('Push') ? 'PUSH' : day.type.includes('Pull') ? 'PULL' : day.type.includes('Legs') ? 'LEGS' : 'SPLIT'}
                </span>
                
                {/* Active real-time progress indicators on calendar */}
                {dayExercises.length > 0 && (
                  <div className="flex items-center justify-center mt-0.5 h-1.5">
                    {isDayFullyCompleted ? (
                      <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-primary-foreground' : 'bg-primary'}`} />
                    ) : isDayPartiallyCompleted ? (
                      <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-primary-foreground/60' : 'bg-primary/60'} animate-pulse`} />
                    ) : (
                      <span className="h-0.5 w-3 rounded-full bg-border" />
                    )}
                  </div>
                )}
                {isDayRest && (
                  <div className="flex items-center justify-center mt-0.5 h-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Real-time Linear Progress Bar & Day Overview Dashboard */}
        {!isRestDay && (
          <Card className="p-5 shadow-sm space-y-4 rounded-xl border border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-card-foreground">Routine Progress</span>
              </div>
              <Badge variant="secondary" className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border border-border">
                {completedCount} of {totalExercisesCount} Completed ({progressPercent}%)
              </Badge>
            </div>
            
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
              <div 
                className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-1 pt-4 border-t border-border">
              <div>
                <span className="text-[9px] uppercase tracking-wider font-medium text-muted-foreground">Split Muscles</span>
                <span className="text-xs font-semibold text-card-foreground mt-0.5 block truncate" title={dayMuscles.join(', ')}>
                  {dayMuscles.join(', ') || 'Rest'}
                </span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider font-medium text-muted-foreground">Exercises</span>
                <span className="text-xs font-semibold text-card-foreground mt-0.5 block">
                  {totalExercisesCount} movements
                </span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider font-medium text-muted-foreground">Target Time</span>
                <span className="text-xs font-semibold text-card-foreground mt-0.5 block flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  {currentDay.exercises.some(e => e.category === 'Cardio') ? '50-70 mins' : '45-60 mins'}
                </span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider font-medium text-muted-foreground">Efficiency</span>
                <span className={`text-xs font-semibold mt-0.5 block transition-colors duration-200
                  ${progressPercent === 100 ? 'text-emerald-500 dark:text-emerald-400' : progressPercent > 0 ? 'text-primary' : 'text-muted-foreground'}
                `}>
                  {progressPercent === 100 ? 'Perfect Complete ⚡' : progressPercent > 0 ? 'In Action 💪' : 'Not Started'}
                </span>
              </div>
            </div>
          </Card>
        )}

        {/* Rest Day & Recovery Center */}
        {isRestDay ? (
          <Card className="flex flex-col rounded-xl border-border bg-card p-6 shadow-sm space-y-6">
            <div className="flex flex-col items-center text-center py-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-muted border border-border shadow-inner relative">
                <Moon className="h-7 w-7 text-primary animate-pulse" />
              </div>
              <h2 className="text-lg font-semibold tracking-tight text-card-foreground">Rest & Recovery Center</h2>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground leading-relaxed">
                No weighted exercise routines listed for today. Muscles rebuild and adapt during rest, not work. Ensure healthy recovery!
              </p>
            </div>

            {/* Motivational Quote Widget */}
            <div className="border border-border py-4 px-4 bg-muted/20 rounded-lg flex flex-col items-center text-center">
              <Sparkles className="h-4 w-4 text-primary mb-2" />
              <p className="text-sm font-medium italic text-card-foreground leading-relaxed">
                "{dynamicQuotes[quoteIndex]?.text}"
              </p>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mt-2 block">
                — {dynamicQuotes[quoteIndex]?.author}
              </span>
            </div>

            {/* Suggested Recovery Routine Checklist */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-semibold text-card-foreground flex items-center gap-1.5">
                <ListTodo className="h-4 w-4 text-primary" />
                Active Recovery Suggestions
              </h3>
              
              <div className="grid gap-3 sm:grid-cols-2">
                {recoveryTasks.map((task) => (
                  <div 
                    key={task.id} 
                    className="flex flex-col gap-1 p-3 rounded-lg border border-border bg-muted/10 hover:bg-muted/20 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-card-foreground">{task.title}</span>
                      <Badge variant="outline" className="text-[9px] font-mono text-muted-foreground px-1.5 py-0">
                        {task.time}
                      </Badge>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-snug mt-1">{task.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ) : (
          /* Workout Content Dashboard */
          <div className="space-y-5">
            
            {/* Instant Search and Muscle Filter Row */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              
              {/* Shadcn style search input */}
              <div className="relative w-full sm:max-w-xs">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value)
                    setSelectedMuscleFilter(null)
                    setOpenCategory(null)
                  }}
                  placeholder="Search exercises..."
                  className="h-9 w-full rounded-md border border-input bg-transparent pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
                {searchQuery && (
                  <button 
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedMuscleFilter(null)
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
              
              {/* Muscle pills filter row */}
              {dayMuscles.length > 1 && (
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mr-1 hidden sm:inline">Focus:</span>
                  <Button
                    variant={selectedMuscleFilter === null ? "default" : "secondary"}
                    size="sm"
                    onClick={() => {
                      setSelectedMuscleFilter(null)
                      setOpenCategory(null)
                    }}
                    className="rounded-full h-7 px-3 text-xs font-medium"
                  >
                    All
                  </Button>
                  {dayMuscles.map(muscle => {
                    const isSelected = selectedMuscleFilter === muscle
                    return (
                      <Button
                        key={muscle}
                        variant={isSelected ? "default" : "secondary"}
                        size="sm"
                        onClick={() => {
                          setSelectedMuscleFilter(isSelected ? null : muscle)
                          setOpenCategory(null)
                        }}
                        className="rounded-full h-7 px-3 text-xs font-medium"
                      >
                        {muscle}
                      </Button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Zero state search results */}
            {categories.length === 0 ? (
              <Card className="flex flex-col items-center justify-center rounded-xl border-border bg-card p-12 text-center shadow-sm min-h-64">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <Dumbbell className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold text-card-foreground">No matching exercises found</h3>
                <p className="mt-2 max-w-xs text-xs text-muted-foreground">
                  Try adjusting your search criteria or toggling off active muscle filters to reveal your routines.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedMuscleFilter(null)
                  }}
                  className="mt-4 rounded-md font-medium text-xs"
                >
                  Reset All Filters
                </Button>
              </Card>
            ) : (
              /* Grouped list accordion styles */
              <div className="space-y-4">
                {Object.entries(groupedExercises).map(([category, exercises], index) => {
                  const categoryIsOpen = isOpen(category, index)
                  
                  // Calculate details for the accordion category completion
                  const catCompletedCount = isMounted 
                    ? exercises.filter(ex => completedExercises[`${currentDay.day}-${ex.id}`]).length 
                    : 0
                  const isCatCompleted = catCompletedCount === exercises.length
                  
                  return (
                    <div 
                      key={category} 
                      className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-colors duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenCategory(categoryIsOpen ? '' : category)}
                        className={`flex w-full items-center justify-between gap-3 p-4 sm:p-5 text-left transition-colors cursor-pointer
                          ${categoryIsOpen ? 'bg-muted/40 border-b border-border' : 'hover:bg-muted/20'}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`h-2.5 w-2.5 rounded-full ${categoryDotColors[category] || 'bg-slate-400'}`} />
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-sm font-semibold sm:text-base tracking-tight text-card-foreground">{category}</h3>
                              {isMounted && isCatCompleted && (
                                <Badge variant="outline" className="bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-[9px] font-medium tracking-wide uppercase px-2 py-0 rounded-full">
                                  Completed
                                </Badge>
                              )}
                            </div>
                            <p className="text-[11px] text-muted-foreground mt-0.5">
                              {catCompletedCount} of {exercises.length} exercise{exercises.length > 1 ? 's' : ''} checklisted
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          {/* Linear progress pill indicator */}
                          <div className="hidden sm:block h-1 w-16 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full transition-all duration-300"
                              style={{ width: `${(catCompletedCount / exercises.length) * 100}%` }}
                            />
                          </div>
                          
                          <ChevronDown
                            className={`h-4.5 w-4.5 shrink-0 text-muted-foreground transition-transform duration-200 ${categoryIsOpen ? 'rotate-180 text-foreground' : ''}`}
                            aria-hidden="true"
                          />
                        </div>
                      </button>

                      {categoryIsOpen && (
                        <div className="divide-y divide-border">
                          {exercises.map((exercise) => (
                            <ExerciseRow 
                              key={`${category}-${exercise.id}`} 
                              exercise={exercise}
                              isCompleted={isMounted ? !!completedExercises[`${currentDay.day}-${exercise.id}`] : false}
                              onToggle={() => handleToggleExercise(exercise.id)}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function ExerciseRow({ 
  exercise, 
  isCompleted, 
  onToggle 
}: { 
  exercise: Exercise
  isCompleted: boolean
  onToggle: () => void 
}) {
  const style = categoryColorStyles[exercise.category] || {
    text: 'text-primary',
    badge: 'bg-secondary text-secondary-foreground border-transparent',
    button: 'border-primary/10 bg-primary/5 text-primary hover:bg-primary/10',
    hoverText: 'group-hover/row:text-primary'
  }

  return (
    <div 
      onClick={onToggle}
      className={`group/row flex flex-col gap-3.5 p-4 transition-colors duration-200 cursor-pointer md:flex-row md:items-center md:justify-between sm:px-5 sm:py-4
        ${isCompleted 
          ? 'bg-muted/20 opacity-60 hover:bg-muted/30' 
          : 'hover:bg-muted/40'
        }
      `}
    >
      {/* Left items details: Checklist bubble + Exercise Details */}
      <div className="flex items-start gap-3.5 flex-1 min-w-0">
        
        {/* Custom animated checkbox styled with primary background */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggle()
          }}
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-200 cursor-pointer mt-0.5
            ${isCompleted
              ? 'bg-primary border-primary text-primary-foreground shadow-sm'
              : 'border-input group-hover/row:border-primary/50 text-transparent'
            }
          `}
          aria-label={isCompleted ? "Mark exercise incomplete" : "Mark exercise complete"}
        >
          <Check className="h-3 w-3 stroke-[3]" />
        </button>
        
        {/* Text descriptions */}
        <div className="min-w-0 flex-1">
          <h4 className={`text-sm font-semibold transition-colors duration-200 leading-snug sm:text-base md:text-sm
            ${isCompleted 
              ? 'text-muted-foreground line-through' 
              : `text-foreground ${style.hoverText}`
            }
          `}>
            {exercise.name}
          </h4>
          
          <div className="mt-2 flex flex-wrap gap-2 items-center">
            <Badge variant="outline" className={`text-[9px] font-medium tracking-wide uppercase px-2 py-0 rounded-full ${style.badge}`}>
              {exercise.category}
            </Badge>
            
            {/* Responsive badges shown on mobile devices */}
            <Badge variant="outline" className={`md:hidden text-[9px] font-semibold ${style.badge}`}>
              {exercise.sets} Sets
            </Badge>
            <Badge variant="outline" className={`md:hidden text-[9px] font-semibold ${style.badge}`}>
              {exercise.reps} Reps
            </Badge>
          </div>
        </div>
      </div>
      
      {/* Right items: Set targets + tutorial links */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-2.5 md:border-t-0 md:pt-0 md:contents">
        
        {/* Desktop Sets Column */}
        <div className="hidden md:block min-w-16">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">Sets</p>
          <p className={`mt-0.5 font-mono text-xs font-semibold transition-colors duration-200
            ${isCompleted ? 'text-muted-foreground/60' : style.text}
          `}>
            {exercise.sets}
          </p>
        </div>
        
        {/* Desktop Reps Column */}
        <div className="hidden md:block min-w-32">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">Reps / Time</p>
          <p className={`mt-0.5 font-mono text-xs font-semibold transition-colors duration-200
            ${isCompleted ? 'text-muted-foreground/60' : style.text}
          `}>
            {exercise.reps}
          </p>
        </div>
        
        {/* Tutorial Link Action */}
        <div onClick={(e) => e.stopPropagation()} className="shrink-0 ml-auto md:ml-0">
          <TutorialLink tutorial={exercise.tutorial} isCompleted={isCompleted} buttonStyle={style.button} />
        </div>
      </div>
    </div>
  )
}

function TutorialLink({ 
  tutorial, 
  isCompleted,
  buttonStyle
}: { 
  tutorial: string
  isCompleted: boolean
  buttonStyle: string
}) {
  if (tutorial === '#') {
    return <span className="text-[11px] font-medium text-muted-foreground/40 mr-2.5">No video</span>
  }

  return (
    <a
      href={tutorial}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider transition-colors duration-200
        ${isCompleted
          ? 'border-border bg-secondary text-muted-foreground hover:bg-muted'
          : buttonStyle
        }
      `}
    >
      <Play className="h-2.5 w-2.5 stroke-[3]" />
      <span>Watch</span>
    </a>
  )
}
