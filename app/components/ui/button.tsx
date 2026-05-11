import * as React from 'react'

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'default' | 'outline' | 'ghost'
}

const variants = {
  default:
    'bg-white text-black hover:bg-neutral-200 dark:bg-white dark:text-black dark:hover:bg-neutral-200',
  outline:
    'border border-neutral-300 text-neutral-950 hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-900',
  ghost:
    'text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50',
}

export function Button({
  className = '',
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
