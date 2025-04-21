'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  mimage: string | undefined
  color: string
  index: number
}

export function ProjectCard({ title, description, image, color, index, mimage }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-100 z-10" />
      <div
        // className={`absolute inset-0 bg-gradient-to-br ${color} mix-blend-multiply opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10`}
        className={`absolute inset-0 bg-gradient-to-br mix-blend-multiply opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10`}
      />

      <Image
        src={image || '/placeholder.svg'}
        alt={title}
        width={600}
        height={400}
        className="w-full h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-110"
      />

      {mimage ? (
        <Image
          src={mimage}
          alt={title}
          width={600}
          height={400}
          className={twMerge(
            'absolute right-10 top-10 object-contain rounded-xl w-[180px] shadow-2xl border-4',
            index === 0 ? 'border-white' : 'border-black'
          )}
        />
      ) : null}

      {/* <div className="w-full bg-white/50 h-[320px]"></div> */}

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-sm text-white/80 mb-4 max-w-md">{description}</p>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          className="flex items-center space-x-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span>Подробнее</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </motion.div> */}
      </div>
    </motion.div>
  )
}
