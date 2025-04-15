import { motion } from 'framer-motion'
import { ShoppingCart, Smartphone, Target, Wrench } from 'lucide-react'

const items = [
  {
    icon: <Smartphone className="h-6 w-6 text-teal-400" />,
    title: 'Мобильные приложения под iOS и Android',
    description: 'Нативная и кроссплатформенная разработка для всех устройств',
    color: 'from-teal-500 to-cyan-600',
    delay: 0,
  },
  {
    icon: <ShoppingCart className="h-6 w-6 text-teal-400" />,
    title: 'Онлайн-магазины, которые продают',
    description: 'Эффективные e-commerce решения с высокой конверсией',
    color: 'from-emerald-500 to-green-600',
    delay: 0.1,
  },
  {
    icon: <Wrench className="h-6 w-6 text-teal-400" />,
    title: 'Интеграции с CRM, CMS',
    description: 'Бесшовное подключение к вашим существующим системам',
    color: 'from-cyan-500 to-blue-600',
    delay: 0.2,
  },
  {
    icon: <Target className="h-6 w-6 text-teal-400" />,
    title: 'Поддержка, масштабирование и рост',
    description: 'Долгосрочное сопровождение и развитие вашего продукта',
    color: 'from-amber-500 to-orange-600',
    delay: 0.3,
  },
]

const WeCreate = () => {
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
            <span className="text-sm font-medium text-gray-200">Наш подход</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"
          >
            МЫ СОЗДАЕМ РЕШЕНИЯ, КОТОРЫЕ РАБОТАЮТ
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-400"
          >
            Наша команда фокусируется на создании продуктов, которые не только выглядят отлично, но
            и приносят реальные результаты для вашего бизнеса
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gray-800 rounded-2xl shadow-lg transform transition-transform group-hover:scale-[1.02] group-hover:shadow-xl" />

              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <div className="mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center transform transition-transform group-hover:rotate-[-5deg]`}
                  >
                    <div className="text-gray-950">{item.icon}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>

                {/* <div className="mt-auto">
              <div className="inline-flex items-center text-sm font-medium text-teal-400 group-hover:text-teal-300">
                <span>Подробнее</span>
                <motion.div
                  className="ml-1"
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: item.delay,
                  }}
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.div>
              </div>
            </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeCreate
