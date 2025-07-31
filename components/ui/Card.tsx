'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg border border-easypay-gray-200 p-6 transition-all hover:shadow-sm",
        onClick && "cursor-pointer hover:border-easypay-gray-300",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}