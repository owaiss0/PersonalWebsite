import * as React from 'react'

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'secondary'
}

const variants = {
  default: 'bg-white text-black dark:bg-white dark:text-black',
  secondary:
    'bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200',
}

export function Badge({
  className = '',
  variant = 'secondary',
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
