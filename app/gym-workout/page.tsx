import type { Metadata } from 'next'
import { Badge } from 'app/components/ui/badge'
import { Button } from 'app/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'app/components/ui/card'

export const metadata: Metadata = {
  title: 'gym-workout',
  description: 'Weekly gym workout plan with sets, reps, and tutorials.',
}

type Exercise = {
  name: string
  sets?: string
  reps: string
  tutorial?: string
}

type WorkoutGroup = {
  name: string
  exercises: Exercise[]
}

type WorkoutDay = {
  day: string
  focus: string
  groups: WorkoutGroup[]
}

const workoutData: WorkoutDay[] = [
  {
    day: 'Monday',
    focus: 'Push: chest, shoulders, triceps',
    groups: [
      {
        name: '(Push) Chest',
        exercises: [
          ['Smith Machine Incline Bench Press', '4', '15, 12, 10, 10', 'https://youtu.be/b8DqTO6ak0k?si=eC1Mbz1ZzRNgAljl'],
          ['Incline Barbell Bench Press', '4', '15, 12, 10, 10', 'https://youtu.be/11gY7Q5D5wo?si=YEkcdhyJQLvSarwh'],
          ['Flat Dumbbell Press', '4', '15, 12, 10, 10', 'https://youtu.be/jRUC6IVav30?si=9eFl00oStk2vBmTH'],
          ['Butterfly - Chest', '4', '15, 12, 10, 10', 'https://youtu.be/iXoa_e8Po6E?si=qEK02mQbXMb5V7XB'],
        ].map(toExercise),
      },
      {
        name: 'Shoulder',
        exercises: [
          ['Dumbbell Shoulder Press', '4', '15, 12, 10, 10', 'https://youtu.be/qEwKCR5JCog?si=IG7WWSyDc23eD7MN'],
          ['DB Machine Press + Dumbbell Side Lateral Raise', '4', '15, 12, 10, 10', 'https://youtu.be/3VcKaXpzqRo?si=uJS54ZCXiNhbdvWD'],
          ['Cable Upright Row', '4', '15, 12, 10, 10', 'https://youtu.be/9Q-j2tPu2Sk?si=rJQBnCQ8ARA7D2n1'],
        ].map(toExercise),
      },
      {
        name: 'Triceps',
        exercises: [
          ['Overhead Rope Extension', '4', '15, 12, 10, 10', 'https://youtu.be/AFMmqsjcfis?si=8Rm7M8D2jLnYoxFb'],
          ['Straight Bar Pushdown', '4', '15, 12, 10, 10', 'https://youtu.be/bKSiwrrbtAA?si=6D8y5z2SIcwhFrma'],
        ].map(toExercise),
      },
      { name: 'Cardio', exercises: [{ name: 'Running', reps: '10-15 min' }] },
    ],
  },
  {
    day: 'Tuesday',
    focus: 'Pull: back and biceps',
    groups: [
      {
        name: '(Pull) Back',
        exercises: [
          ['Lat Pulldown', '4', '15, 12, 10, 10', 'https://youtu.be/AOpi-p0cJkc?si=0me2aA2zUfWchv41'],
          ['Rope Pullover + Pull-ups', '4', '15, 12, 10, 10', 'https://youtu.be/z66PPQ_hGsc?si=kyi8VhtModIu61PG'],
          ['Incline Dumbbell Rows', '4', '15, 12, 10, 10', 'https://youtu.be/x6nEPnQ37FQ?si=pNl-mQuRWw4hNIh3'],
          ['Deadlift', '4', '15, 12, 10, 10', 'https://youtube.com/shorts/ZaTM37cfiDs?si=TTpRlpdVYX9Z2l1w'],
          ['Barbell Shrug Behind The Back', '4', '15, 12, 10, 10', 'https://youtu.be/OoUQRw91D94?si=KnFBYbV-NvtgNOlT'],
        ].map(toExercise),
      },
      {
        name: 'Biceps',
        exercises: [
          ['Alternating Dumbbell Curls', '4', '15, 12, 10, 10', 'https://youtu.be/8d2we4UqOSs?si=x8VjT_2l70YDNYMn'],
          ['Preacher Curl', '4', '15, 12, 10, 10', 'https://youtu.be/RgN216Cumtw?si=Nfbo1n4S9IYj1tLt'],
        ].map(toExercise),
      },
      { name: 'Cardio', exercises: [{ name: 'Running', reps: '10-15 min' }] },
    ],
  },
  {
    day: 'Wednesday',
    focus: 'Legs, abs, and cardio',
    groups: [
      {
        name: 'Legs',
        exercises: [
          ['Smith Machine - Squat', '4', '15, 12, 10, 10', 'https://youtu.be/HPXa3HdJQnc?si=V-fuOvHHgwiJpJNs'],
          ['Leg Press (Upper + lower)', '4', '20, 20, 20, 20', 'https://youtu.be/G4elY53UFOQ?si=8mC5cjrA9DerZrb5'],
          ['Leg Extension', '4', '15, 12, 10, 10', 'https://youtu.be/YyvSfVjQeL0?si=ZAqS4FmVMW4CsYpj'],
          ['Leg Curl', '4', '15, 12, 10, 10', 'https://youtu.be/ELOCsoDSmrg?si=gt7XMC_URKHpz3dd'],
          ['Walking Lunges', '4', '15, 12, 10, 10', 'https://youtu.be/vni4lElTvsY?si=wsE2EZL49iUSYlPz'],
          ['Calf Raises', '4', '20, 20, 20, 20', 'https://youtu.be/wxwY7GXxL4k?si=CEUyYx-ZuW6TXaFp'],
        ].map(toExercise),
      },
      {
        name: 'Abs',
        exercises: [
          ['Hanging Leg Raise', '3', '20, 20, 20', 'https://youtu.be/Pr1ieGZ5atk?si=er2AjCbiCec7XTv5'],
          ['Crunches', '4', '20, 20, 20, 20', 'https://youtu.be/0OxOI3sAIrM?si=uLZPeDeolG6c2xch'],
          ['Planks', '2', '1-2 min', 'https://youtu.be/pSHjTRCQxIw?si=aVxNTKxR_Do1_-p9'],
        ].map(toExercise),
      },
      { name: 'Cardio', exercises: [{ name: 'Running', reps: '10-15 min' }] },
    ],
  },
  {
    day: 'Thursday',
    focus: 'Recovery',
    groups: [{ name: 'Rest Day', exercises: [] }],
  },
  {
    day: 'Friday',
    focus: 'Shoulder, chest, triceps',
    groups: [
      {
        name: 'Shoulder',
        exercises: [
          ['Arnold Press', '4', '15, 12, 10, 10', 'https://youtu.be/3ml7BH7mNwQ?si=WonGkvyjCpuZh-DG'],
          ['Rope Face Pull', '4', '15, 12, 10, 10', 'https://youtu.be/eFxMixk_qPQ?si=OC0ZGZzHBJvLcm1c'],
          ['Single Arm Cable Side Lateral Raise', '4', '15, 12, 10, 10', 'https://youtu.be/J-6uEOkYAKM?si=B6LYvGxIIb3Mvfc5'],
        ].map(toExercise),
      },
      {
        name: 'Chest',
        exercises: [
          ['Plane Rod-Decline', '4', '15, 12, 10, 10'],
          ['Dumbbell Incline Chest Press', '4', '15, 12, 10, 10', 'https://youtu.be/8iPEnn-ltC8?si=JPNR_iLvePKETo1s'],
          ['Incline Dumbbell Fly', '4', '15, 12, 10, 10', 'https://youtu.be/ajdFwa-qM98?si=sO9PG2SVMEzFJ6Mu'],
          ['Low Cable Crossover', '4', '15, 12, 10, 10', 'https://youtu.be/1DZGgdUvqLE?si=Q7XJusqSIVPF3t7c'],
        ].map(toExercise),
      },
      {
        name: 'Triceps',
        exercises: [
          ['Skull Crushers', '4', '15, 12, 10, 10', 'https://youtu.be/d_KZxkY_0cM?si=bfxOpn6Yi23oBVIK'],
          ['Overhead Rope Extension', '4', '15, 12, 10, 10', 'https://youtu.be/AFMmqsjcfis?si=5bN3yWdp5hUoPGx2'],
        ].map(toExercise),
      },
      { name: 'Cardio', exercises: [{ name: 'Running', reps: '10-15 min' }] },
    ],
  },
  {
    day: 'Saturday',
    focus: 'Back, biceps, and cardio',
    groups: [
      {
        name: 'Back',
        exercises: [
          ['Barbell Row', '4', '15, 12, 10, 10', 'https://youtu.be/I-qgwlP0J90?si=qXpe8ikBLbAGLcLo'],
          ['Rope Cable Rowing', '4', '15, 12, 10, 10'],
          ['V-Grip Lat Pulldown', '4', '15, 12, 10, 10', 'https://youtu.be/jk7IL_yYucg?si=DrqDkJg042NTaHe2'],
          ['Seated Cable Low Row', '4', '15, 12, 10, 10', 'https://youtu.be/GZbfZ033f74?si=o-THUb5TR5jpjOJL'],
          ['Back Extensions', '4', '15, 12, 10, 10', 'https://youtu.be/ph3pddpKzzw?si=gaLUn7NtEdxpxx7y'],
          ['Barbell Shrug Behind The Back', '4', '15, 12, 10, 10', 'https://youtu.be/OoUQRw91D94?si=KnFBYbV-NvtgNOlT'],
        ].map(toExercise),
      },
      {
        name: 'Biceps',
        exercises: [
          ['E-Z Bar Curl', '4', '15, 12, 10, 10', 'https://youtu.be/zG2xJ0Q5QtI?si=H3aDVMOkMJwNwW1K'],
          ['Rope Hammer Curl', '4', '15, 12, 10, 10', 'https://youtu.be/V8AR3SGzboU?si=7BHB4HXBW0mtlfCe'],
        ].map(toExercise),
      },
      { name: 'Cardio', exercises: [{ name: 'Running', reps: '10-15 min' }] },
    ],
  },
  {
    day: 'Sunday',
    focus: 'Recovery',
    groups: [{ name: 'Rest Day', exercises: [] }],
  },
]

function toExercise([name, sets, reps, tutorial]: string[]): Exercise {
  return { name, sets, reps, tutorial }
}

const totalExercises = workoutData.reduce(
  (total, day) =>
    total + day.groups.reduce((dayTotal, group) => dayTotal + group.exercises.length, 0),
  0
)

const trainingDays = workoutData.filter((day) =>
  day.groups.some((group) => group.exercises.length > 0)
).length

function ExerciseRow({ exercise, index }: { exercise: Exercise; index: number }) {
  return (
    <div className="grid gap-3 border-t border-neutral-200 p-4 first:border-t-0 dark:border-neutral-800 sm:grid-cols-[2.5rem_1fr_auto_auto] sm:items-center">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-100 text-sm font-semibold text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
        {index + 1}
      </div>
      <div>
        <p className="font-medium tracking-tight text-neutral-950 dark:text-neutral-50">
          {exercise.name}
        </p>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 sm:hidden">
          {exercise.sets ? `${exercise.sets} sets / ` : ''}
          {exercise.reps}
        </p>
      </div>
      <div className="hidden text-sm font-medium text-neutral-600 dark:text-neutral-300 sm:block">
        {exercise.sets ? `${exercise.sets} sets` : 'Cardio'}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{exercise.reps}</Badge>
        {exercise.tutorial ? (
          <Button
            href={exercise.tutorial}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="h-8 px-3"
          >
            Tutorial
          </Button>
        ) : (
          <Badge className="bg-neutral-50 text-neutral-500 dark:bg-neutral-900 dark:text-neutral-500">
            No video
          </Badge>
        )}
      </div>
    </div>
  )
}

function WorkoutGroupCard({ group }: { group: WorkoutGroup }) {
  if (group.exercises.length === 0) {
    return (
      <Card className="border-emerald-900/50 bg-emerald-950/30">
        <CardContent className="p-6 text-center">
          <p className="font-medium text-emerald-200">Rest day - no exercises scheduled.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="border-b border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-base">{group.name}</CardTitle>
          <Badge>{group.exercises.length} exercises</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {group.exercises.map((exercise, index) => (
          <ExerciseRow key={`${group.name}-${exercise.name}`} exercise={exercise} index={index} />
        ))}
      </CardContent>
    </Card>
  )
}

function WorkoutDayCard({ day }: { day: WorkoutDay }) {
  const dayExerciseCount = day.groups.reduce(
    (total, group) => total + group.exercises.length,
    0
  )

  return (
    <section id={day.day.toLowerCase()}>
      <Card className="overflow-hidden">
        <CardHeader className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/60">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <CardTitle>{day.day}</CardTitle>
              <CardDescription className="mt-2">{day.focus}</CardDescription>
            </div>
            <Badge variant={dayExerciseCount ? 'secondary' : 'default'}>
              {dayExerciseCount ? `${dayExerciseCount} exercises` : 'Rest day'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 p-4 sm:p-6">
          {day.groups.map((group) => (
            <WorkoutGroupCard key={`${day.day}-${group.name}`} group={group} />
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

export default function GymWorkoutPage() {
  return (
    <section className="-mx-2 sm:-mx-8">
      <div className="mb-8 rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge variant="default">gym-workout</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tighter sm:text-5xl">
              Weekly workout plan
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">
              A cleaner Next.js version of the original workout table, organized by day,
              muscle group, sets, reps, and tutorial links.
            </p>
          </div>
          <Button href="/workout.html" variant="outline" className="shrink-0">
            Old HTML workout
          </Button>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Card className="bg-white dark:bg-black">
            <CardContent className="p-4">
              <p className="text-2xl font-semibold">{workoutData.length}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">days</p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-black">
            <CardContent className="p-4">
              <p className="text-2xl font-semibold">{trainingDays}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                training days
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-black">
            <CardContent className="p-4">
              <p className="text-2xl font-semibold">{totalExercises}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                exercises
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <nav className="sticky top-0 z-10 mb-6 rounded-lg border border-neutral-200 bg-white/90 p-2 backdrop-blur dark:border-neutral-800 dark:bg-black/90">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {workoutData.map((day) => (
            <Button
              key={day.day}
              href={`#${day.day.toLowerCase()}`}
              variant="ghost"
              className="h-9 px-2"
            >
              {day.day.slice(0, 3)}
            </Button>
          ))}
        </div>
      </nav>

      <div className="grid gap-6">
        {workoutData.map((day) => (
          <WorkoutDayCard key={day.day} day={day} />
        ))}
      </div>
    </section>
  )
}
