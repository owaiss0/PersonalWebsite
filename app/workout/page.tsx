import { Metadata } from 'next'
import WorkoutPlan from './components/workout-plan'

export const metadata: Metadata = {
  title: 'Workout Plan',
  description: 'My weekly workout routine — push, pull, legs split.',
}

export default function WorkoutPage() {
  return <WorkoutPlan />
}
