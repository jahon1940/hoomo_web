'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

import type { ReactNode } from 'react'

interface FormSubmitButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export function FormSubmitButton({
  children,
  className = '',
  onClick,
  type = 'submit',
}: FormSubmitButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    if (type !== 'submit') {
      setIsLoading(true)

      setTimeout(() => {
        setIsLoading(false)
        if (onClick) onClick()
      }, 1500)
    }
  }

  const handleSubmit = () => {
    setIsLoading(true)
  }

  return (
    <Button
      type={type}
      className={`relative ${className}`}
      onClick={type !== 'submit' ? handleClick : undefined}
      onSubmit={type === 'submit' ? handleSubmit : undefined}
      disabled={isLoading}
    >
      {isLoading && (
        <span className="absolute left-4">
          <Loader2 className="h-4 w-4 animate-spin" />
        </span>
      )}
      {children}
    </Button>
  )
}
