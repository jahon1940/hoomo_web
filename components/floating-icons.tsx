'use client'

import { motion } from 'framer-motion'
import { Smartphone, ShoppingCart, Wrench, Target, Palette, Brain } from 'lucide-react'

export function FloatingIcons() {
  const icons = [
    {
      icon: <Smartphone className="h-6 w-6 text-teal-400" />,
      x: '10%',
      y: '20%',
      delay: 0,
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-cyan-400" />,
      x: '80%',
      y: '15%',
      delay: 0.5,
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-400" />,
      x: '70%',
      y: '70%',
      delay: 1,
    },
    {
      icon: <Target className="h-6 w-6 text-orange-400" />,
      x: '20%',
      y: '80%',
      delay: 1.5,
    },
    {
      icon: <Palette className="h-6 w-6 text-green-400" />,
      x: '90%',
      y: '40%',
      delay: 2,
    },
    {
      icon: <Brain className="h-6 w-6 text-emerald-400" />,
      x: '30%',
      y: '40%',
      delay: 2.5,
    },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: item.delay, duration: 0.5 }}
        >
          <motion.div
            className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full shadow-lg border border-gray-700"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              delay: item.delay,
              ease: 'easeInOut',
            }}
          >
            {item.icon}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
