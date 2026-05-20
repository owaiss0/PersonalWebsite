export interface Exercise {
  id: number;
  name: string;
  sets: string;
  reps: string;
  tutorial: string;
  category: string;
}

export interface DayPlan {
  day: string;
  type: string;
  exercises: Exercise[];
}

export const workoutData: DayPlan[] = [
  {
    day: 'Monday',
    type: '(Push) Chest, Shoulder, Triceps',
    exercises: [
      { id: 1, name: 'Smith Machine Incline Bench Press', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/b8DqTO6ak0k?si=eC1Mbz1ZzRNgAljl', category: 'Chest' },
      { id: 2, name: 'Incline Barbell Bench Press', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/11gY7Q5D5wo?si=YEkcdhyJQLvSarwh', category: 'Chest' },
      { id: 3, name: 'Flat Dumbbell Press', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/jRUC6IVav30?si=9eFl00oStk2vBmTH', category: 'Chest' },
      { id: 4, name: 'Butterfly - Chest', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/iXoa_e8Po6E?si=qEK02mQbXMb5V7XB', category: 'Chest' },
      { id: 5, name: 'Dumbbell Shoulder Press', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/qEwKCR5JCog?si=IG7WWSyDc23eD7MN', category: 'Shoulder' },
      { id: 6, name: 'DB Machine Press + Dumbbell Side Lateral Raise', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/3VcKaXpzqRo?si=uJS54ZCXiNhbdvWD', category: 'Shoulder' },
      { id: 7, name: 'Cable Upright Row', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/9Q-j2tPu2Sk?si=rJQBnCQ8ARA7D2n1', category: 'Shoulder' },
      { id: 8, name: 'Overhead Rope Extension', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/AFMmqsjcfis?si=8Rm7M8D2jLnYoxFb', category: 'Triceps' },
      { id: 9, name: 'Straight Bar Pushdown', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/bKSiwrrbtAA?si=6D8y5z2SIcwhFrma', category: 'Triceps' },
      { id: 10, name: 'Running', sets: '-', reps: '10-15 min', tutorial: '#', category: 'Cardio' },
    ]
  },
  {
    day: 'Tuesday',
    type: '(Pull) Back, Biceps',
    exercises: [
      { id: 1, name: 'Lat Pulldown', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/AOpi-p0cJkc?si=0me2aA2zUfWchv41', category: 'Back' },
      { id: 2, name: 'Rope Pullover + Pull-ups', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/z66PPQ_hGsc?si=kyi8VhtModIu61PG', category: 'Back' },
      { id: 3, name: 'Incline Dumbbell Rows', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/x6nEPnQ37FQ?si=pNl-mQuRWw4hNIh3', category: 'Back' },
      { id: 4, name: 'Deadlift', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtube.com/shorts/ZaTM37cfiDs?si=TTpRlpdVYX9Z2l1w', category: 'Back' },
      { id: 5, name: 'Barbell Shrug Behind The Back', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/OoUQRw91D94?si=KnFBYbV-NvtgNOlT', category: 'Back' },
      { id: 6, name: 'Alternating Dumbbell Curls', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/8d2we4UqOSs?si=x8VjT_2l70YDNYMn', category: 'Biceps' },
      { id: 7, name: 'Preacher Curl', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/RgN216Cumtw?si=Nfbo1n4S9IYj1tLt', category: 'Biceps' },
      { id: 8, name: 'Running', sets: '-', reps: '10-15 min', tutorial: '#', category: 'Cardio' },
    ]
  },
  {
    day: 'Wednesday',
    type: 'Legs, Abs',
    exercises: [
      { id: 1, name: 'Smith Machine - Squat', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/HPXa3HdJQnc?si=V-fuOvHHgwiJpJNs', category: 'Legs' },
      { id: 2, name: 'Leg Press (Upper + lower)', sets: '4', reps: '20, 20, 20, 20', tutorial: 'https://youtu.be/G4elY53UFOQ?si=8mC5cjrA9DerZrb5', category: 'Legs' },
      { id: 3, name: 'Leg Extension', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/YyvSfVjQeL0?si=ZAqS4FmVMW4CsYpj', category: 'Legs' },
      { id: 4, name: 'Leg Curl', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/ELOCsoDSmrg?si=gt7XMC_URKHpz3dd', category: 'Legs' },
      { id: 5, name: 'Walking Lunges', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/vni4lElTvsY?si=wsE2EZL49iUSYlPz', category: 'Legs' },
      { id: 6, name: 'Calf Raises', sets: '4', reps: '20, 20, 20, 20', tutorial: 'https://youtu.be/wxwY7GXxL4k?si=CEUyYx-ZuW6TXaFp', category: 'Legs' },
      { id: 7, name: 'Hanging Leg Raise', sets: '3', reps: '20, 20, 20', tutorial: 'https://youtu.be/Pr1ieGZ5atk?si=er2AjCbiCec7XTv5', category: 'Abs' },
      { id: 8, name: 'Crunches', sets: '4', reps: '20, 20, 20, 20', tutorial: 'https://youtu.be/0OxOI3sAIrM?si=uLZPeDeolG6c2xch', category: 'Abs' },
      { id: 9, name: 'Planks', sets: '2', reps: '1-2 min', tutorial: 'https://youtu.be/pSHjTRCQxIw?si=aVxNTKxR_Do1_-p9', category: 'Abs' },
      { id: 10, name: 'Running', sets: '-', reps: '10-15 min', tutorial: '#', category: 'Cardio' },
    ]
  },
  {
    day: 'Thursday',
    type: 'REST DAY',
    exercises: []
  },
  {
    day: 'Friday',
    type: 'Shoulder, Chest, Triceps',
    exercises: [
      { id: 1, name: 'Arnold Press', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/3ml7BH7mNwQ?si=WonGkvyjCpuZh-DG', category: 'Shoulder' },
      { id: 2, name: 'Rope Face Pull', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/eFxMixk_qPQ?si=OC0ZGZzHBJvLcm1c', category: 'Shoulder' },
      { id: 3, name: 'Single Arm Cable Side Lateral Raise', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/J-6uEOkYAKM?si=B6LYvGxIIb3Mvfc5', category: 'Shoulder' },
      { id: 4, name: 'Plane Rod - Decline', sets: '4', reps: '15, 12, 10, 10', tutorial: '#', category: 'Chest' },
      { id: 5, name: 'Dumbbell Incline Chest Press', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/8iPEnn-ltC8?si=JPNR_iLvePKETo1s', category: 'Chest' },
      { id: 6, name: 'Incline Dumbbell Fly', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/ajdFwa-qM98?si=sO9PG2SVMEzFJ6Mu', category: 'Chest' },
      { id: 7, name: 'Low Cable Crossover', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/1DZGgdUvqLE?si=Q7XJusqSIVPF3t7c', category: 'Chest' },
      { id: 8, name: 'Skull Crushers', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/d_KZxkY_0cM?si=bfxOpn6Yi23oBVIK', category: 'Triceps' },
      { id: 9, name: 'Overhead Rope Extension', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/AFMmqsjcfis?si=5bN3yWdp5hUoPGx2', category: 'Triceps' },
      { id: 10, name: 'Running', sets: '-', reps: '10-15 min', tutorial: '#', category: 'Cardio' },
    ]
  },
  {
    day: 'Saturday',
    type: 'Back, Biceps',
    exercises: [
      { id: 1, name: 'Barbell Row', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/I-qgwlP0J90?si=qXpe8ikBLbAGLcLo', category: 'Back' },
      { id: 2, name: 'Rope Cable Rowing', sets: '4', reps: '15, 12, 10, 10', tutorial: '#', category: 'Back' },
      { id: 3, name: 'V-Grip Lat Pulldown', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/jk7IL_yYucg?si=DrqDkJg042NTHe2', category: 'Back' },
      { id: 4, name: 'Seated Cable Low Row', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/GZbfZ033f74?si=o-THUb5TR5jpjOJL', category: 'Back' },
      { id: 5, name: 'Back Extensions', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/ph3pddpKzzw?si=gaLUn7NtEdxpxx7y', category: 'Back' },
      { id: 6, name: 'Barbell Shrug Behind The Back', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/OoUQRw91D94?si=KnFBYbV-NvtgNOlT', category: 'Back' },
      { id: 7, name: 'E-Z Bar Curl', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/zG2xJ0Q5QtI?si=H3aDVMOkMJwNwW1K', category: 'Biceps' },
      { id: 8, name: 'Rope Hammer Curl', sets: '4', reps: '15, 12, 10, 10', tutorial: 'https://youtu.be/V8AR3SGzboU?si=7BHB4HXBW0mtlfCe', category: 'Biceps' },
      { id: 9, name: 'Running', sets: '-', reps: '10-15 min', tutorial: '#', category: 'Cardio' },
    ]
  },
  {
    day: 'Sunday',
    type: 'REST DAY',
    exercises: []
  }
];
