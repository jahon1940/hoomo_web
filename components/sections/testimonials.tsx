import { motion } from 'framer-motion'
import { TestimonialCard } from '../testimonial-card'

const testimonials = [
  {
    quote:
      'Хочу выразить благодарность за отличную работу! Сайт и приложение были разработаны точно в срок, всё работает стабильно и удобно. Команда всегда была на связи и учла все наши пожелания. Рекомендуем как надёжного партнёра!',
    author: 'Сарвар Рашдов',
    position: 'Руководитель Mirel Group',
    company: 'mirel.uz',
    image: '/placeholder.svg?height=100&width=100&text=АС',
  },
  {
    quote:
      'Спасибо вам огромное за наш новый сайт и мобильное приложение! Мы даже не ожидали, что получится так красиво и удобно. Заказы выросли уже в первую неделю после запуска. Было приятно работать — понятно, быстро, с душой. Удачи вам и процветания!',
    author: 'Лазеров Виктор',
    position: 'Директор OOO Kansler',
    company: 'kansler.uz',
    image: '/placeholder.svg?height=100&width=100&text=ЕП',
  },
  {
    quote:
      'Сотрудничество прошло на высоком уровне: от проектирования UX до публикации в App Store и Google Play. Приложение получилось современным и функциональным, сайт адаптирован под все устройства. Спасибо за профессионализм, прозрачность и поддержку на всех этапах.',
    author: '',
    position: 'Руководитель компании',
    company: 'Texnostore.uz',
    image: '/placeholder.svg?height=100&width=100&text=ДК',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950 -z-10" />
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
            <span className="text-sm font-medium text-gray-200">Что говорят клиенты</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Отзывы наших клиентов
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-400"
          >
            Узнайте, что говорят о нас руководители компаний, которые уже работали с нами
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
