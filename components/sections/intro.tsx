import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { ArrowRight, Smartphone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { MouseParallax } from '../mouse-parallax'
import { FloatingIcons } from '@/components/floating-icons'

const Intro = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <FloatingIcons />

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-teal-400"></span>
              <span className="text-sm font-medium text-gray-200">
                Инновационная студия разработки
              </span>
            </motion.div>

            <div className="space-y-4">
              {/* <TextReveal>
              🚀 Мобильные приложения и e-commerce платформы
            </TextReveal> */}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-300 max-w-xl"
              >
                Создаем современные решения под ключ для вашего бизнеса с фокусом на результат и
                пользовательский опыт
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href={'/#contact'}>
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-gray-950 rounded-full px-8 group"
                >
                  Связаться с нами
                  <motion.div
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Button>
              </Link>

              <Link href={'/#projects'}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-gray-700 hover:bg-gray-800 text-gray-200"
                >
                  Наши проекты
                </Button>
              </Link>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-gray-800 overflow-hidden"
                  >
                    <Image
                      src={`/placeholder.svg?height=40&width=40&text=${i}`}
                      alt={`Client ${i}`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-bold text-teal-400">50+</span> довольных
                клиентов
              </div>
            </motion.div> */}
          </div>

          <MouseParallax className="relative hidden lg:block">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 backdrop-blur-sm"
              >
                <Image
                  src="/intro-image.png"
                  alt="Mobile App Interface"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
                {/* <div className="h-[600px] bg-white/10 w-full"></div> */}

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-gray-800/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-teal-900/50 flex items-center justify-center">
                          <Smartphone className="h-5 w-5 text-teal-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">
                            Разрабатываем функциональные и уникальные сайты специально для вашего
                            бизнеса
                          </h3>
                          <p className="text-xs text-gray-400">iOS & Android</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -right-16 top-1/4 z-20 bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400">Рост конверсии</p>
                    <p className="text-lg font-bold text-green-400">+45%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="absolute -bottom-10 -left-16 z-20 bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400">Рост продаж</p>
                    <p className="text-lg font-bold text-blue-400">+120%</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full bg-gradient-to-r from-teal-900/30 via-cyan-900/30 to-blue-900/30 blur-3xl" />
              <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-teal-800/40 to-cyan-800/40 blur-2xl" />
            </div>
          </MouseParallax>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col items-center space-y-2"
        >
          <p className="text-sm font-medium text-gray-400">Прокрутите вниз</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: 'easeInOut',
            }}
          >
            <svg
              className="h-6 w-6 text-teal-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro
