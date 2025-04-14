import { motion } from "framer-motion";

import { ProjectCard } from "../project-card";

const Portfolio = () => {
  const projects = [
    {
      title: "Оптовая платформа Mirel для канцелярии и офиса",
      description:
        "Мобильное приложение и веб-платформа для оптовых закупок канцелярских товаров с отслеживанием заказов, бонусной системой и финансовой аналитикой",
      image: "/mirel-uz-preview.png",
      mimage: "/mirel-uz-m-preview.jpg",
      color: "from-blue-600 to-sky-500",
    },
    {
      title: "Интернет-магазин Kansler для бизнеса и офиса",
      description:
        "Многофункциональный e-commerce проект с каталогом товаров, фильтрацией, системой управления заказами и бонусной программой",
      image: "/kansler-uz-preview.png",
      mimage: "/kansler-uz-m-preview.jpg",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
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
            <span className="text-sm font-medium text-gray-200">
              Наше портфолио
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Наши последние проекты
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-400"
          >
            Ознакомьтесь с нашими недавними работами, которые помогли клиентам
            достичь их бизнес-целей
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              mimage={project.mimage}
              color={project.color}
              index={index}
            />
          ))}
        </div>

        {/* <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="flex justify-center mt-12"
    >
      <Button
        size="lg"
        variant="outline"
        className="rounded-full px-8 border-gray-700 hover:bg-gray-800 text-gray-200"
      >
        Смотреть все проекты
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.div> */}
      </div>
    </section>
  );
};

export default Portfolio;
