import { motion } from 'framer-motion'
import { StageCard2 } from '../stage-card-2'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

// const developmentStages = [
//   {
//     number: '1',
//     title: 'Дизайн',
//     description: 'Проектирование дизайн-макета',
//     details:
//       'Проектируем и демонстрируем дизайн будущего продукта в графическом редакторе Figma на основе ваших требований.',
//     image: '/stage-1.png',
//   },
//   {
//     number: '2',
//     title: 'Разработка',
//     description: 'Разработка продукта с нуля',
//     details:
//       'Разрабатываем Front-end и Back-end часть веб-сайта, верстаем и подключаем все страницы по утвержденному дизайн-макету.',
//     image: '/stage-2.png',
//   },
//   {
//     number: '3',
//     title: 'Запуск',
//     description: 'Полноценный запуск',
//     details:
//       'Устанавливаем сайт на CMS-систему для управления контентом, подключаем домен и хостинг, а также системы аналитики.',
//     image: '/stage-3.png',
//   },
// ]

const developmentStages = [
  {
    number: '1',
    title: 'Дизайн',
    description: 'Проектирование дизайн-макета',
    details:
      'Проектируем и демонстрируем дизайн будущего продукта в графическом редакторе Figma на основе ваших требований. Создаем прототипы с анимациями и интерактивными элементами для полного представления о будущем продукте.',
    image: '/stage-1.png',
    icon: 'design' as const,
  },
  {
    number: '2',
    title: 'Разработка',
    description: 'Разработка продукта с нуля',
    details:
      'Разрабатываем Front-end и Back-end часть веб-сайта, верстаем и подключаем все страницы по утвержденному дизайн-макету. Используем современные технологии и фреймворки для создания быстрых и надежных решений.',
    image: '/stage-2.png',
    icon: 'development' as const,
  },
  {
    number: '3',
    title: 'Запуск',
    description: 'Полноценный запуск',
    details:
      'Устанавливаем сайт на CMS-систему для управления контентом, подключаем домен и хостинг, а также системы аналитики. Проводим финальное тестирование и оптимизацию для поисковых систем перед запуском.',
    image: '/stage-3.png',
    icon: 'launch' as const,
  },
]

const DevelopmentStages = () => {
  return (
    // <section className="relative py-20 md:py-32 overflow-hidden">
    //   <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 -z-10" />
    //   <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

    //   <div className="container mx-auto px-4 md:px-6">
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       whileInView={{ opacity: 1 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.8 }}
    //       className="max-w-3xl mx-auto text-center mb-16"
    //     >
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.5 }}
    //         className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700 shadow-sm mb-4"
    //       >
    //         <span className="flex h-2 w-2 rounded-full bg-teal-400"></span>
    //         <span className="text-sm font-medium text-gray-200">Этапность</span>
    //       </motion.div>

    //       <motion.h2
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ delay: 0.2, duration: 0.5 }}
    //         className="text-3xl md:text-5xl font-bold mb-6 text-white"
    //       >
    //         Три этапа разработки
    //       </motion.h2>

    //       <motion.p
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ delay: 0.4, duration: 0.5 }}
    //         className="text-lg text-gray-400"
    //       >
    //         Наш процесс разработки структурирован и прозрачен на каждом этапе
    //       </motion.p>
    //     </motion.div>

    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       {developmentStages.map((stage, index) => (
    //         <StageCard
    //           key={index}
    //           number={stage.number}
    //           title={stage.title}
    //           description={stage.description}
    //           details={stage.details}
    //           image={stage.image}
    //           index={index}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-900/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-900/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 shadow-sm mb-4"
          >
            <span className="flex h-2 w-2 rounded-full bg-teal-400"></span>
            <span className="text-sm font-medium text-gray-200">Этапность</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Три этапа разработки
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-400"
          >
            Наш процесс разработки структурирован и прозрачен на каждом этапе
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-teal-500/30 to-transparent transform -translate-x-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {developmentStages.map((stage, index) => (
              <StageCard2
                key={index}
                number={stage.number}
                title={stage.title}
                description={stage.description}
                details={stage.details}
                image={stage.image}
                index={index}
                icon={stage.icon}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <Link href={'/#contact'}>
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-gray-950 rounded-full px-8 group"
            >
              Обсудить ваш проект
              <motion.div
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: 'easeInOut' }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default DevelopmentStages
