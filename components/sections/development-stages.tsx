import { motion } from 'framer-motion'
import { DevelopmentStage } from '../stage-card'

const developmentStages = [
  {
    number: '1',
    title: 'Дизайн',
    description: 'Проектирование дизайн-макета',
    details:
      'Проектируем и демонстрируем дизайн будущего продукта в графическом редакторе Figma на основе ваших требований.',
    image: '/stage-1.png',
  },
  {
    number: '2',
    title: 'Разработка',
    description: 'Разработка продукта с нуля',
    details:
      'Разрабатываем Front-end и Back-end часть веб-сайта, верстаем и подключаем все страницы по утвержденному дизайн-макету.',
    image: '/stage-2.png',
  },
  {
    number: '3',
    title: 'Запуск',
    description: 'Полноценный запуск',
    details:
      'Устанавливаем сайт на CMS-систему для управления контентом, подключаем домен и хостинг, а также системы аналитики.',
    image: '/stage-3.png',
  },
]

const DevelopmentStages = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

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
            className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700 shadow-sm mb-4"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developmentStages.map((stage, index) => (
            <DevelopmentStage
              key={index}
              number={stage.number}
              title={stage.title}
              description={stage.description}
              details={stage.details}
              image={stage.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DevelopmentStages
