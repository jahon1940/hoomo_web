'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface DevelopmentStageProps {
  number: string
  title: string
  description: string
  details: string
  image: string
  index: number
}

export function StageCard({
  number,
  title,
  description,
  details,
  image,
  index,
}: DevelopmentStageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="flex flex-col h-full"
    >
      <div className="bg-gray-800 hover:scale-105 duration-500 rounded-2xl p-6 md:p-8 border border-gray-700 shadow-lg h-full flex flex-col">
        <div className="mb-6">
          <span className="inline-block px-4 py-1 rounded-full bg-gray-700 text-sm font-medium text-teal-400 mb-4">
            {title}
          </span>
          <h3 className="text-xl font-bold mb-3 text-white">{description}</h3>
          <p className="text-gray-400 text-sm mb-4">{details}</p>
          <div className="text-teal-400 font-bold">[{number}]</div>
        </div>

        <div className="mt-auto relative">
          <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10"></div>
            <Image
              src={image || '/placeholder.svg'}
              alt={title}
              width={400}
              height={300}
              className="w-full h-full object-cover object-left-top transform transition-transform group-hover:scale-105 duration-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
