"use client"

import type React from "react"

import { useRef, useState, useEffect, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface MouseParallaxProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function MouseParallax({ children, className, strength = 20 }: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [bounds, setBounds] = useState({ left: 0, top: 0, width: 0, height: 0 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  const moveX = useTransform(smoothMouseX, [0, bounds.width], [-strength, strength])
  const moveY = useTransform(smoothMouseY, [0, bounds.height], [-strength, strength])

  useEffect(() => {
    if (!ref.current) return

    const updateBounds = () => {
      if (ref.current) {
        const { left, top, width, height } = ref.current.getBoundingClientRect()
        setBounds({ left, top, width, height })
      }
    }

    updateBounds()
    window.addEventListener("resize", updateBounds)

    return () => {
      window.removeEventListener("resize", updateBounds)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX - bounds.left)
    mouseY.set(e.clientY - bounds.top)
  }

  return (
    <motion.div ref={ref} className={className} onMouseMove={handleMouseMove} style={{ x: moveX, y: moveY }}>
      {children}
    </motion.div>
  )
}
