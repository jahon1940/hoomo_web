'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Code, Rocket, Paintbrush } from 'lucide-react'

interface DevelopmentStageProps {
  number: string
  title: string
  description: string
  details: string
  image: string
  index: number
  icon: 'design' | 'development' | 'launch'
}

export function StageCard2({
  number,
  title,
  description,
  details,
  image,
  index,
  icon,
}: DevelopmentStageProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = () => {
    switch (icon) {
      case 'design':
        return <Paintbrush className="h-6 w-6 text-teal-400" />
      case 'development':
        return <Code className="h-6 w-6 text-teal-400" />
      case 'launch':
        return <Rocket className="h-6 w-6 text-teal-400" />
      default:
        return <ChevronRight className="h-6 w-6 text-teal-400" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-xl overflow-hidden h-full relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 opacity-80" />
        <div
          className={`absolute inset-0 bg-gradient-to-br from-teal-900/30 via-transparent to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="absolute top-6 right-6 z-10">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gray-700/50 backdrop-blur-sm flex items-center justify-center">
              <span className="text-xl font-bold text-teal-400">{number}</span>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-teal-500/50"
              animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>

        <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
          <div className="mb-6">
            <div
              className={`w-14 h-14 rounded-2xl bg-gray-700/80 backdrop-blur-sm flex items-center justify-center transform transition-all duration-500 ${
                isHovered ? 'rotate-[-5deg] scale-110' : ''
              }`}
            >
              {getIcon()}
            </div>
          </div>

          <div className="mb-2">
            <span className="inline-block px-4 py-1 rounded-full bg-gray-700/80 backdrop-blur-sm text-sm font-medium text-teal-400">
              {title}
            </span>
          </div>

          <h3
            className={`text-xl md:text-2xl font-bold mb-3 text-white transition-colors duration-300 ${
              isHovered ? 'text-teal-300' : ''
            }`}
          >
            {description}
          </h3>

          <p className="text-gray-300 text-sm md:text-base mb-6">{details}</p>

          <div className="mt-auto relative rounded-xl overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10 transition-opacity duration-500 ${
                isHovered ? 'opacity-30' : 'opacity-70'
              }`}
            />
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>

            {/* <motion.div
              className={`absolute bottom-4 right-4 z-20 flex items-center space-x-2 text-sm font-medium text-white bg-teal-600/80 backdrop-blur-sm px-4 py-2 rounded-full transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              animate={{ x: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3 }}
            >
              <span>Подробнее</span>
              <ChevronRight className="h-4 w-4" />
            </motion.div> */}
          </div>

          {index < 2 && (
            <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2 hidden md:block">
              <div className="h-12 w-0.5 bg-gradient-to-b from-teal-500 to-transparent" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
