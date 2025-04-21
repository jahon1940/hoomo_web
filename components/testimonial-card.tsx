'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Link from 'next/link'

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  company: string
  image: string
  index: number
  link: string
}

export function TestimonialCard({
  quote,
  author,
  position,
  company,
  image,
  index,
  link,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-gray-800 rounded-2xl flex flex-col p-6 md:p-8 border border-gray-700 shadow-lg relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-900/20 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2" />

      <div className="absolute top-6 right-6 text-teal-500/20">
        <Quote className="h-16 w-16" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        <p className="text-gray-300 flex-1 mb-6 italic relative z-10">{quote}</p>

        {/* <div className="flex items-center"> */}
        {/* <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-500/30">
              <Image
                src={image || "/placeholder.svg"}
                alt={author}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}

        <div>
          <h4 className="font-bold text-white">{author}</h4>
          <p className="text-sm text-gray-400">
            {position},{' '}
            <Link href={link} className="text-teal-400 hover:underline">
              {company}
            </Link>
          </p>
        </div>
        {/* </div> */}
      </div>
    </motion.div>
  )
}
