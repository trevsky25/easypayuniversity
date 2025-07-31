import { cn } from '@/lib/utils'

interface BadgeProps {
  status: 'not-started' | 'in-progress' | 'completed'
  children: React.ReactNode
  className?: string
}

export function Badge({ status, children, className }: BadgeProps) {
  const variants = {
    'not-started': 'bg-easypay-gray-100 text-easypay-gray-700 border border-easypay-gray-200',
    'in-progress': 'bg-blue-50 text-blue-700 border border-blue-200',
    'completed': 'bg-emerald-50 text-emerald-700 border border-emerald-200'
  }

  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
      variants[status],
      className
    )}>
      {children}
    </span>
  )
}