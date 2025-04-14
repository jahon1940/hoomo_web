import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ServiceCard } from "../service-card";
import { ShoppingCart, Smartphone, Target, Wrench } from "lucide-react";

const services = [
  {
    icon: <Smartphone className="h-6 w-6 text-teal-400" />,
    title: "Разработка мобильных приложений",
    description:
      "Создаем нативные и кроссплатформенные приложения для iOS и Android с фокусом на пользовательский опыт и производительность",
  },
  {
    icon: <ShoppingCart className="h-6 w-6 text-teal-400" />,
    title: "Создание интернет-магазинов",
    description:
      "Разрабатываем e-commerce платформы с оптимизированными воронками продаж и интуитивным интерфейсом",
  },
  {
    icon: <Wrench className="h-6 w-6 text-teal-400" />,
    title: "Поддержка и сопровождение",
    description:
      "Обеспечиваем техническую поддержку, обновления и масштабирование ваших цифровых продуктов",
  },
  {
    icon: <Target className="h-6 w-6 text-teal-400" />,
    title: "Маркетинг, аналитика и оптимизация",
    description:
      "Помогаем анализировать данные, оптимизировать конверсию и увеличивать эффективность ваших цифровых активов",
  },
];

const OurServices = () => {
  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3 md:sticky md:top-32 self-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700 shadow-sm mb-4"
            >
              <span className="flex h-2 w-2 rounded-full bg-teal-400"></span>
              <span className="text-sm font-medium text-gray-200">
                Что мы предлагаем
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Наши услуги
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-gray-400 mb-8"
            >
              Мы предлагаем полный спектр услуг по разработке цифровых продуктов
              — от идеи до запуска и поддержки
            </motion.p>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-gray-950 rounded-full px-8"
              >
                Все услуги
              </Button>
            </motion.div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-2/3"
          >
            <div className="space-y-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
