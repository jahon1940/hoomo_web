import { motion } from "framer-motion";
import { BarChart3, Brain, Globe, Palette } from "lucide-react";

const otherServices = [
  {
    icon: <Palette className="h-6 w-6 text-teal-400" />,
    title: "Брендинг и UI/UX дизайн",
    description:
      "Создаем уникальный визуальный язык и пользовательский опыт для вашего бренда",
  },
  {
    icon: <Brain className="h-6 w-6 text-teal-400" />,
    title: "Консалтинг по цифровой трансформации",
    description:
      "Помогаем бизнесу адаптироваться к цифровой эпохе и внедрять инновации",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-teal-400" />,
    title: "BI-дашборды и внутренние инструменты",
    description:
      "Разрабатываем системы аналитики и инструменты для оптимизации бизнес-процессов",
  },
  {
    icon: <Globe className="h-6 w-6 text-teal-400" />,
    title: "Корпоративные сайты",
    description:
      "Создаем представительства в интернете с акцентом на конверсию и имидж",
  },
];

const OtherServices = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
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
            <span className="text-sm font-medium text-gray-200">
              Дополнительно
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Другие услуги
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-400"
          >
            Помимо основных направлений, мы предлагаем ряд дополнительных услуг
            для комплексного развития вашего бизнеса
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-cyan-900 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative w-12 h-12 rounded-xl bg-gray-700 flex items-center justify-center transform transition-transform group-hover:rotate-[-5deg]">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
