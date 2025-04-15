'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'

import { HeroBackground } from '@/components/hero-background'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

import Intro from '@/components/sections/intro'
import Contact from '@/components/sections/contact'
import WeCreate from '@/components/sections/we-create'
import Portfolio from '@/components/sections/portfolio'
import OurServices from '@/components/sections/our-services'
import Testimonials from '@/components/sections/testimonials'
import DevelopmentStages from '@/components/sections/development-stages'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gray-950 text-gray-100"
    >
      <motion.div className="fixed inset-0 z-0 pointer-events-none" style={{ y: backgroundY }}>
        <HeroBackground />
      </motion.div>

      <motion.div
        className="fixed w-40 h-40 rounded-full bg-gradient-to-r from-teal-300/20 to-cyan-300/20 blur-3xl pointer-events-none z-0"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      <div className="relative z-10">
        <Header />

        <Intro />

        <WeCreate />

        <OurServices />

        <DevelopmentStages />

        <Portfolio />

        <Testimonials />

        <Contact />

        <Footer />
      </div>
    </div>
  )
}
