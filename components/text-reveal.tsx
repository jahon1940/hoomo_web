'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface TextRevealProps {
  children: ReactNode
  delay?: number
}

export function TextReveal({ children, delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1 + delay,
      },
    }),
  }

  const renderWords = () => {
    const text = children?.toString() || ''

    const words = text.split(' ')

    return (
      <span className="inline-flex gap-1.5">
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={variants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="inline-block"
          >
            {word}
            {i !== words.length - 1 && ' '}
          </motion.span>
        ))}
      </span>
    )
  }

  return <div ref={ref}>{renderWords()}</div>
}
