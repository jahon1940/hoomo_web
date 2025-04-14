"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  ShoppingCart,
  Wrench,
  Target,
  Palette,
  Brain,
  BarChart3,
  Globe,
  Send,
  MessageSquare,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HeroBackground } from "@/components/hero-background";
import { FloatingIcons } from "@/components/floating-icons";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { MouseParallax } from "@/components/mouse-parallax";
import { TextReveal } from "@/components/text-reveal";
import { FormSubmitButton } from "@/components/form-submit-button";
import { SuccessModal } from "@/components/success-modal";
import { TestimonialCard } from "@/components/testimonial-card";

import HoomoLogo from "@/public/hoomo-logo.png";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1],
    [1, 0.8, 0.8, 0]
  );

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

  const projects = [
    {
      title: "Оптовая платформа Mirel для канцелярии и офиса",
      description:
        "Мобильное приложение и веб-платформа для оптовых закупок канцелярских товаров с отслеживанием заказов, бонусной системой и финансовой аналитикой",
      image: "/mirel-uz-preview.png",
      color: "from-blue-600 to-sky-500",
    },
    {
      title: "Интернет-магазин Kansler для бизнеса и офиса",
      description:
        "Многофункциональный e-commerce проект с каталогом товаров, фильтрацией, системой управления заказами и бонусной программой",
      image: "/kansler-uz-preview.png",
      color: "from-green-500 to-emerald-600",
    },
  ];

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

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccessModalOpen(true);
    formRef.current?.reset();
  };

  const testimonials = [
    {
      quote:
        "Хочу выразить благодарность за отличную работу! Сайт и приложение были разработаны точно в срок, всё работает стабильно и удобно. Команда всегда была на связи и учла все наши пожелания. Рекомендуем как надёжного партнёра!",
      author: "Сарвар Рашдов",
      position: "Руководитель Mirel Group",
      company: "mirel.uz",
      image: "/placeholder.svg?height=100&width=100&text=АС",
    },
    {
      quote:
        "Спасибо вам огромное за наш новый сайт и мобильное приложение! Мы даже не ожидали, что получится так красиво и удобно. Заказы выросли уже в первую неделю после запуска. Было приятно работать — понятно, быстро, с душой. Удачи вам и процветания!",
      author: "Лазеров Виктор",
      position: "Директор OOO Kansler",
      company: "kansler.uz",
      image: "/placeholder.svg?height=100&width=100&text=ЕП",
    },
    {
      quote:
        "Сотрудничество прошло на высоком уровне: от проектирования UX до публикации в App Store и Google Play. Приложение получилось современным и функциональным, сайт адаптирован под все устройства. Спасибо за профессионализм, прозрачность и поддержку на всех этапах.",
      author: "",
      position: "Руководитель компании",
      company: "Texnostore.uz",
      image: "/placeholder.svg?height=100&width=100&text=ДК",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gray-950 text-gray-100"
    >
      {/* Animated background */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <HeroBackground />
      </motion.div>

      {/* Floating cursor effect */}
      <motion.div
        className="fixed w-40 h-40 rounded-full bg-gradient-to-r from-teal-300/20 to-cyan-300/20 blur-3xl pointer-events-none z-0"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/70 border-b border-gray-800/50">
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              {/* <div className="relative w-8 h-8 overflow-hidden rounded-full bg-teal-600">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
                <Smartphone className="relative z-10 h-5 w-5 text-gray-950 m-1.5" />
              </div> */}
              <div className="size-[40px]">
                <Image
                  width={500}
                  height={500}
                  src={HoomoLogo}
                  alt="logo"
                  className="font-bold text-lg text-white w-full h-full object-contain"
                />
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-sm font-medium hover:text-teal-400 transition-colors"
              >
                Услуги
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-teal-400 transition-colors"
              >
                Проекты
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium hover:text-teal-400 transition-colors"
              >
                О нас
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-teal-400 transition-colors"
              >
                Контакты
              </Link>
            </nav>
            <Link href={"/#contact"}>
              <Button className="bg-teal-600 hover:bg-teal-700 text-gray-950 rounded-full px-6">
                Связаться
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
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
                    Создаем современные решения под ключ для вашего бизнеса с
                    фокусом на результат и пользовательский опыт
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href={"/#contact"}>
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
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Button>
                  </Link>

                  <Link href={"/#projects"}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full px-8 border-gray-700 hover:bg-gray-800 text-gray-200"
                    >
                      Наши проекты
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
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
                    <span className="font-bold text-teal-400">50+</span>{" "}
                    довольных клиентов
                  </div>
                </motion.div>
              </div>

              <MouseParallax className="relative hidden lg:block">
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 backdrop-blur-sm"
                  >
                    {/* <Image
                      src="/placeholder.svg?height=600&width=500&text=App+Interface"
                      alt="Mobile App Interface"
                      width={500}
                      height={600}
                      className="w-full h-auto"
                    /> */}
                    <div className="h-[600px] bg-white/10 w-full"></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="bg-gray-800/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-teal-900/50 flex items-center justify-center">
                              <Smartphone className="h-5 w-5 text-teal-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-white">
                                Мобильное приложение
                              </h3>
                              <p className="text-xs text-gray-400">
                                iOS & Android
                              </p>
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
                        <p className="text-xs font-medium text-gray-400">
                          Рост конверсии
                        </p>
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
                        <p className="text-xs font-medium text-gray-400">
                          Рост продаж
                        </p>
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
              <p className="text-sm font-medium text-gray-400">
                Прокрутите вниз
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "easeInOut",
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

        {/* We Create Section */}
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
                <span className="text-sm font-medium text-gray-200">
                  Наш подход
                </span>
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
                Наша команда фокусируется на создании продуктов, которые не
                только выглядят отлично, но и приносят реальные результаты для
                вашего бизнеса
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Smartphone className="h-6 w-6 text-teal-400" />,
                  title: "Мобильные приложения под iOS и Android",
                  description:
                    "Нативная и кроссплатформенная разработка для всех устройств",
                  color: "from-teal-500 to-cyan-600",
                  delay: 0,
                },
                {
                  icon: <ShoppingCart className="h-6 w-6 text-teal-400" />,
                  title: "Онлайн-магазины, которые продают",
                  description:
                    "Эффективные e-commerce решения с высокой конверсией",
                  color: "from-emerald-500 to-green-600",
                  delay: 0.1,
                },
                {
                  icon: <Wrench className="h-6 w-6 text-teal-400" />,
                  title: "Интеграции с CRM, CMS",
                  description:
                    "Бесшовное подключение к вашим существующим системам",
                  color: "from-cyan-500 to-blue-600",
                  delay: 0.2,
                },
                {
                  icon: <Target className="h-6 w-6 text-teal-400" />,
                  title: "Поддержка, масштабирование и рост",
                  description:
                    "Долгосрочное сопровождение и развитие вашего продукта",
                  color: "from-amber-500 to-orange-600",
                  delay: 0.3,
                },
              ].map((item, index) => (
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
                    <p className="text-gray-400 text-sm mb-4">
                      {item.description}
                    </p>

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

        {/* Our Services Section */}
        <section
          id="services"
          className="relative py-20 md:py-32 overflow-hidden"
        >
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
                  Мы предлагаем полный спектр услуг по разработке цифровых
                  продуктов — от идеи до запуска и поддержки
                </motion.p>

                <motion.div
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
                </motion.div>
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

        {/* Portfolio Section */}
        <section
          id="projects"
          className="relative py-20 md:py-32 overflow-hidden"
        >
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
                Ознакомьтесь с нашими недавними работами, которые помогли
                клиентам достичь их бизнес-целей
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
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

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="relative py-20 md:py-32 overflow-hidden"
        >
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
                  Что говорят клиенты
                </span>
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
                Узнайте, что говорят о нас руководители компаний, которые уже
                работали с нами
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

        {/* Other Services Section */}
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
                Помимо основных направлений, мы предлагаем ряд дополнительных
                услуг для комплексного развития вашего бизнеса
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

        {/* CTA Section */}
        <section
          id="contact"
          className="relative py-20 md:py-32 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-cyan-900 -z-10" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5 -z-10" />
          <div className="absolute top-0 left-0 right-0 h-px bg-teal-500/10" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 md:px-6 relative z-10"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 text-white"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center space-x-2 bg-gray-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-500/20 mb-6"
                >
                  <span className="flex h-2 w-2 rounded-full bg-teal-400"></span>
                  <span className="text-sm font-medium">
                    Начнем сотрудничество
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-3xl md:text-5xl font-bold mb-6"
                >
                  Готовы обсудить ваш проект?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg text-gray-200 mb-8"
                >
                  Свяжитесь с нами, чтобы получить бесплатную консультацию и
                  оценку вашего проекта. Мы поможем вам воплотить ваши идеи в
                  жизнь.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800/30 flex items-center justify-center">
                      <Send className="h-4 w-4 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-gray-300/60 text-sm">Email</p>
                      <p className="font-medium">hello@hoomo.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800/30 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-gray-300/60 text-sm">Мессенджеры</p>
                      <p className="font-medium">Telegram / Instagram</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 w-full"
              >
                <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 relative overflow-hidden border border-gray-800">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-b from-teal-500/10 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-70" />

                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Отправьте заявку
                  </h3>

                  <form
                    ref={formRef}
                    className="space-y-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-300"
                      >
                        Имя
                      </label>
                      <input
                        id="name"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                        placeholder="Ваше имя"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-300"
                      >
                        Сообщение
                      </label>
                      <textarea
                        id="message"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent min-h-[120px] text-white"
                        placeholder="Расскажите о вашем проекте"
                      ></textarea>
                    </div>

                    <FormSubmitButton
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-gray-950 py-3"
                    >
                      Отправить заявку
                    </FormSubmitButton>

                    <p className="text-xs text-gray-400 text-center mt-4">
                      Нажимая на кнопку, вы соглашаетесь с нашей{" "}
                      <Link href="#" className="text-teal-400 hover:underline">
                        политикой конфиденциальности
                      </Link>
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <SuccessModal
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          message="Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время."
        />

        {/* Footer */}
        <footer className="relative py-12 md:py-16 border-t border-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              <div className="space-y-10">
                <div className="flex divide-x-2 items-center gap-6">
                  {/* <div className="relative w-8 h-8 overflow-hidden rounded-full bg-teal-600">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                    <Smartphone className="relative z-10 h-5 w-5 text-gray-950 m-1.5" />
                  </div> */}
                  <div className="size-[60px]">
                    <Image
                      width={500}
                      height={500}
                      src={HoomoLogo}
                      alt="logo"
                      className="font-bold text-lg text-white w-full h-full object-contain"
                    />
                  </div>
                  <div className="pl-5 flex flex-col justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 2000 660"
                      fill="none"
                    >
                      <path
                        d="M681.77 224L516.94 61.9996C477 22.7496 424.83 1.63961 372.47 1.09961C320.12 1.63961 268 22.7496 228 61.9996L63.1801 224C43.9699 242.726 28.7027 265.108 18.2785 289.827C7.85427 314.546 2.48389 341.102 2.48389 367.93C2.48389 394.757 7.85427 421.313 18.2785 446.032C28.7027 470.751 43.9699 493.133 63.1801 511.86L84.0001 532.32C121 568.73 314 651.9 331.32 658.9V344.33C331.32 334.74 324.64 326.01 315.48 322.46L212.71 282.28C204.298 289.328 193.776 293.373 182.809 293.773C171.841 294.173 161.053 290.907 152.149 284.49C143.245 278.074 136.734 268.873 133.644 258.341C130.555 247.81 131.063 236.55 135.089 226.34C139.115 216.13 146.428 207.553 155.874 201.964C165.319 196.376 176.358 194.095 187.245 195.481C198.132 196.868 208.247 201.844 215.989 209.622C223.732 217.4 228.662 227.536 230 238.43L330 277.54C343.546 282.789 357.915 285.596 372.44 285.83C386.974 285.65 401.356 282.842 414.89 277.54L515 238.43C516.167 229.006 520.03 220.121 526.124 212.839C532.219 205.558 540.286 200.192 549.357 197.384C558.427 194.577 568.115 194.448 577.258 197.013C586.4 199.578 594.607 204.728 600.893 211.845C607.179 218.961 611.277 227.741 612.694 237.13C614.111 246.519 612.787 256.117 608.882 264.772C604.976 273.426 598.655 280.77 590.677 285.919C582.7 291.068 573.405 293.805 563.91 293.8C552.321 293.838 541.096 289.755 532.24 282.28L429.35 322.46C420.2 326.01 413.52 334.63 413.52 344.33V658.9C430.86 651.9 623.81 568.73 660.87 532.32L681.66 511.85C700.876 493.131 716.15 470.755 726.583 446.041C737.016 421.326 742.396 394.774 742.406 367.948C742.416 341.122 737.057 314.565 726.643 289.843C716.229 265.121 700.972 242.733 681.77 224ZM372.47 216.46C360.686 216.46 349.166 212.965 339.368 206.418C329.57 199.871 321.934 190.565 317.424 179.678C312.915 168.79 311.736 156.81 314.036 145.252C316.335 133.695 322.011 123.079 330.344 114.747C338.678 106.415 349.295 100.741 360.853 98.4432C372.411 96.1454 384.391 97.3267 395.277 101.838C406.164 106.349 415.468 113.987 422.014 123.786C428.559 133.585 432.052 145.105 432.05 156.89C432.034 172.685 425.752 187.83 414.581 198.998C403.411 210.166 388.266 216.446 372.47 216.46Z"
                        fill="#7DBA28"
                      />
                      <path
                        d="M983.87 130.38H949.5V344.76H983.87V130.38Z"
                        fill="white"
                      />
                      <path
                        d="M1073.17 344.76H1107.54V160.65L1170.88 160.97V130.38H1010.26V160.97L1073.17 160.65V344.76Z"
                        fill="white"
                      />
                      <path
                        d="M1307.27 267.73H1344.76C1355.34 267.855 1365.84 266.031 1375.76 262.35C1384.49 259.049 1392.48 254.03 1399.24 247.59C1405.72 241.383 1410.83 233.889 1414.24 225.59C1417.83 216.995 1419.63 207.755 1419.52 198.44C1419.58 189.263 1417.88 180.159 1414.52 171.62C1411.31 163.499 1406.45 156.136 1400.24 150C1393.72 143.645 1385.94 138.729 1377.4 135.57C1368.35 132.01 1358.12 130.29 1346.7 130.29H1272.91V344.65H1307.27V267.73ZM1307.16 161H1346.59C1359.2 161 1368.68 164.34 1375.25 171.13C1381.82 177.92 1385.16 187.07 1385.16 198.49C1385.16 210.56 1381.61 220.04 1374.39 226.93C1367.17 233.82 1357.39 237.27 1344.65 237.27H1307.16V161Z"
                        fill="white"
                      />
                      <path
                        d="M1529.63 130.38H1494.63L1416.4 344.76H1452.06L1470.48 292H1553.48L1572.22 344.79H1607.88L1529.63 130.38ZM1481.15 262.38L1497.09 216.91L1511.74 166H1512.39L1527 216.88L1542.84 262.35L1481.15 262.38Z"
                        fill="white"
                      />
                      <path
                        d="M1775 234.66C1783.51 223.66 1787.71 210.85 1787.71 195.98C1787.78 187.184 1786.08 178.464 1782.71 170.34C1779.42 162.496 1774.55 155.417 1768.39 149.55C1761.69 143.32 1753.76 138.553 1745.12 135.55C1735.04 132.055 1724.43 130.34 1713.77 130.48H1635.23V344.87H1669.6V262.87H1707L1754.73 344.87H1791.57L1741 257.71C1755.21 253.19 1766.53 245.54 1775 234.66ZM1669.64 232.18V161H1714C1727.15 161 1737 164.23 1743.52 170.59C1750.04 176.95 1753.43 185.46 1753.43 196.01C1753.43 207.01 1749.99 215.84 1742.77 222.41C1735.55 228.98 1725.77 232.21 1713.03 232.21L1669.64 232.18Z"
                        fill="white"
                      />
                      <path
                        d="M1858.96 130.38H1824.59V344.76H1858.96V130.38Z"
                        fill="white"
                      />
                      <path
                        d="M1995.45 344.76L1902.59 230.89L1992.65 130.48H1953.22L1871.13 221.73V241.45L1954.73 344.76H1995.45Z"
                        fill="white"
                      />
                      <path
                        d="M971.58 473.07C958.44 472.07 954.78 468.33 954.78 461.65C954.78 451.41 962.21 448.65 974.06 448.65C979.56 448.65 987.31 449.73 990.33 451.13L992.27 444.99C986.318 443.336 980.178 442.452 974 442.36C957.74 442.36 947.39 447.53 947.39 461.75C947.39 473.93 954.61 478.24 970.56 479.42C983.7 480.42 987.36 485.67 987.36 492.24C987.36 502.48 979.28 505.24 967.54 505.24C962.37 505.24 954.83 504.24 950.73 502.76L948.79 508.9C954.928 510.64 961.271 511.544 967.65 511.59C983.81 511.59 994.58 506.31 994.58 492.2C994.53 480.07 987.53 474.36 971.58 473.07Z"
                        fill="white"
                      />
                      <path
                        d="M1054.32 444.09H1001.32V449.8H1024.37V510.45H1031.37V449.8H1054.32V444.09Z"
                        fill="white"
                      />
                      <path
                        d="M1074.47 444.09C1065.31 466.28 1057.12 488.26 1049.47 510.45H1056.26C1058.52 503.45 1060.78 496.77 1063.15 489.98H1095.47C1098.17 497.2 1100.97 504.09 1103.47 510.45H1111.22C1103.14 492.03 1093.77 466.45 1086.22 444.09H1074.47ZM1065.31 484.27C1069.4 472.85 1074.04 461.32 1078.78 449.47H1081.68C1085.35 461 1089.44 473.07 1093.53 484.27H1065.31Z"
                        fill="white"
                      />
                      <path
                        d="M1150.85 480.82C1165.5 480.82 1170.02 472.63 1170.02 463.26C1170.02 453.14 1165.93 444.09 1151.17 444.09H1121.54V510.45H1128.44V481.68H1141.26C1146.26 481.68 1154.94 491.92 1165.5 510.45H1174.12C1164 493.64 1155.59 482.44 1150.85 480.82ZM1128.33 475.65V449.8L1151.17 449.69C1158.39 449.69 1162.37 454.54 1162.37 463.15C1162.37 470.8 1158.37 475.65 1150.63 475.65H1128.33Z"
                        fill="white"
                      />
                      <path
                        d="M1176.7 449.8H1199.76V510.45H1206.76L1206.65 449.8H1229.6V444.09H1176.7V449.8Z"
                        fill="white"
                      />
                      <path
                        d="M1270.86 498.06V441.61H1264.72V498.38C1264.72 505.38 1266.72 508.62 1270.72 512.38L1275.46 508.38C1272.01 504.93 1270.94 502.67 1270.94 498.04L1270.86 498.06Z"
                        fill="white"
                      />
                      <path
                        d="M1306.41 461.11C1291.65 461.11 1284.65 466.6 1284.65 486.21C1284.65 505.82 1291.54 511.85 1306.41 511.85C1321.28 511.85 1328.28 505.92 1328.28 486.21C1328.28 466.5 1321.38 461.11 1306.41 461.11ZM1306.52 506.11C1295.21 506.11 1291.52 502.02 1291.52 486.39C1291.52 469.91 1295.19 466.68 1306.52 466.79C1317.85 466.9 1321.6 470.02 1321.6 486.39C1321.6 502.05 1317.83 506.14 1306.52 506.14V506.11Z"
                        fill="white"
                      />
                      <path
                        d="M1363.51 467C1367.54 466.918 1371.54 467.691 1375.25 469.27L1377.25 463.45C1372.83 461.983 1368.22 461.185 1363.56 461.08C1348.7 461.08 1340.29 466.57 1340.29 486.18C1340.29 505.79 1348.59 511.82 1363.56 511.82C1368.25 511.746 1372.88 510.835 1377.25 509.13L1375.25 503.42C1371.54 505.018 1367.55 505.858 1363.51 505.89C1352.3 505.89 1347.13 502.02 1347.13 486.39C1347.13 470.05 1352.3 467 1363.51 467Z"
                        fill="white"
                      />
                      <path
                        d="M1403 460.89C1397.6 460.938 1392.24 461.736 1387.06 463.26L1388.89 469.08C1392.66 467.46 1398.16 466.82 1402.68 466.82C1413.88 466.82 1416.9 469.3 1416.9 481.15C1412.42 480.109 1407.82 479.602 1403.22 479.64C1392.45 479.64 1384.15 481.9 1384.15 495.58C1384.15 507.97 1389.86 511.74 1403.65 511.74C1409.65 511.74 1417.87 510.34 1423.04 507.97V479.53C1423.08 465 1417.05 460.89 1403 460.89ZM1416.9 503.89C1412.74 505.293 1408.39 506.006 1404 506C1394 506 1391.18 504.6 1391.18 495C1391.18 486.17 1394.42 485.09 1404 485.09C1408.34 485.032 1412.68 485.464 1416.93 486.38L1416.9 503.89Z"
                        fill="white"
                      />
                      <path
                        d="M1443.77 441.61H1437.52V498.38C1437.52 505.38 1439.52 508.62 1443.52 512.38L1448.26 508.38C1444.81 504.93 1443.74 502.67 1443.74 498.04L1443.77 441.61Z"
                        fill="white"
                      />
                      <path
                        d="M1546.76 472.2H1540.4C1540.38 478.725 1538.43 485.097 1534.8 490.52C1526.4 478.52 1521.66 475.44 1516.91 474.9C1528.91 473.82 1531.03 466.49 1531.03 458.63C1531.03 447.96 1524.78 442.47 1510.13 442.47C1495.48 442.47 1489.23 448.47 1489.23 459.17C1489.23 467.03 1489.77 474.04 1501.73 475.11C1489.12 475.65 1484.6 483.73 1484.6 492.78C1484.6 507.54 1492.78 511.78 1508.19 511.78C1520.69 511.78 1525.96 508.44 1534.19 500.58C1536.19 503.58 1538.39 506.93 1540.33 510.49H1548.09C1544.64 504.78 1541.62 499.82 1538.61 495.49C1543.85 488.69 1547 480.39 1546.76 472.2ZM1496.45 459.49C1496.45 451.49 1500 448.29 1510.24 448.29C1520.48 448.29 1524.24 451.63 1524.24 459.6C1524.24 468.43 1518.96 472.1 1509.48 472.1C1500 472.1 1496.45 468.33 1496.45 459.49ZM1508.3 506C1495.69 506 1492.03 502.12 1492.03 492C1492.03 481.44 1497.63 477.67 1509.27 477.67C1517.13 477.67 1523.38 484.35 1531.03 495.55C1523.81 503.45 1519.5 506 1508.3 506Z"
                        fill="white"
                      />
                      <path
                        d="M1610.64 480.39H1628V504.31C1623.63 505.357 1619.15 505.897 1614.65 505.92C1597.84 505.92 1591.59 501.08 1591.59 476.84C1591.59 452.6 1597.84 448.72 1614.65 448.72C1619.82 448.72 1626.93 449.72 1630.91 451.2L1633.07 445.2C1627.03 443.549 1620.8 442.682 1614.54 442.62C1593.96 442.62 1584.16 449.62 1584.16 476.77C1584.16 503.92 1593.96 511.89 1614.54 511.89C1620.46 511.89 1629.62 511.35 1634.79 509.73V474.9H1610.66L1610.64 480.39Z"
                        fill="white"
                      />
                      <path
                        d="M1678.73 442.47C1658.15 442.47 1648.67 449.9 1648.67 476.94C1648.67 504.42 1658.04 511.85 1678.73 511.74C1699.42 511.63 1708.89 504.42 1708.89 476.94C1708.89 449.9 1699.41 442.47 1678.73 442.47ZM1678.62 505.82C1661.81 505.82 1655.99 500.32 1655.99 477.16C1655.99 452.81 1661.81 448.29 1678.62 448.29C1695.62 448.29 1701.56 452.81 1701.56 477.16C1701.56 500.32 1695.64 505.82 1678.62 505.82Z"
                        fill="white"
                      />
                      <path
                        d="M1789.26 464.77C1784.09 462.4 1775.68 461 1769.87 461C1755 461 1748.1 466.49 1748.1 486.1C1748.1 505.71 1754.89 511.74 1769.87 511.74C1776.76 511.74 1780.75 509.69 1783.12 507.74C1783.12 520.57 1776.76 523.8 1765.56 523.8C1762.11 523.8 1755.21 522.61 1751.87 521L1750.04 526.92C1753.6 528.43 1761.46 529.72 1765.56 529.72C1780.56 529.72 1789.36 524.66 1789.36 506.88H1789.26V464.77ZM1783.26 499.03C1783.26 503.55 1777.12 505.92 1770.01 505.92C1758.7 505.92 1755.01 502.05 1755.01 486.42C1755.01 469.94 1758.67 466.93 1770.01 466.93C1774.51 466.88 1778.98 467.555 1783.26 468.93V499.03Z"
                        fill="white"
                      />
                      <path
                        d="M1810.05 441.61H1803.8V498.38C1803.8 505.38 1805.8 508.62 1809.8 512.38L1814.54 508.38C1811.1 504.93 1810.02 502.67 1810.02 498.04L1810.05 441.61Z"
                        fill="white"
                      />
                      <path
                        d="M1845.49 461.11C1830.63 461.11 1823.73 466.6 1823.73 486.21C1823.73 505.82 1830.63 511.85 1845.49 511.85C1860.35 511.85 1867.36 505.92 1867.36 486.21C1867.36 466.5 1860.47 461.11 1845.49 461.11ZM1845.6 506.11C1834.29 506.11 1830.6 502.02 1830.6 486.39C1830.6 469.91 1834.26 466.68 1845.6 466.79C1856.94 466.9 1860.68 470.02 1860.68 486.39C1860.68 502.05 1856.91 506.14 1845.6 506.14V506.11Z"
                        fill="white"
                      />
                      <path
                        d="M1900.22 461.11C1893.32 461.11 1889.34 463.05 1886.97 464.99V441.72H1880.72V508C1885.89 510.37 1894.29 511.77 1900.11 511.77C1914.98 511.77 1921.87 506.28 1921.87 486.56C1921.87 466.84 1915.09 461 1900.22 461.11ZM1900.11 505.92C1895.61 505.97 1891.14 505.295 1886.86 503.92V473.71C1886.86 469.3 1893 466.93 1900.11 466.93C1911.42 466.93 1915.11 470.8 1915.11 486.42C1915.09 502.69 1911.32 505.92 1900.11 505.92Z"
                        fill="white"
                      />
                      <path
                        d="M1952.25 460.89C1946.85 460.938 1941.49 461.736 1936.31 463.26L1938.14 469.08C1941.91 467.46 1947.41 466.82 1951.93 466.82C1963.13 466.82 1966.15 469.3 1966.15 481.15C1961.67 480.109 1957.07 479.602 1952.47 479.64C1941.7 479.64 1933.4 481.9 1933.4 495.58C1933.4 507.97 1939.11 511.74 1952.9 511.74C1958.9 511.74 1967.12 510.34 1972.29 507.97V479.53C1972.29 465 1966.26 460.89 1952.25 460.89ZM1966.15 503.89C1961.99 505.31 1957.62 506.036 1953.22 506.04C1943.22 506.04 1940.4 504.64 1940.4 495.04C1940.4 486.21 1943.63 485.13 1953.22 485.13C1957.56 485.072 1961.9 485.504 1966.15 486.42V503.89Z"
                        fill="white"
                      />
                      <path
                        d="M1993 498.06V441.61H1986.75V498.38C1986.75 505.38 1988.75 508.62 1992.75 512.38L1997.49 508.38C1994.05 505 1993 502.69 1993 498.06Z"
                        fill="white"
                      />
                    </svg>

                    <span className="font-light">Резидент IT PARK</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Создаем современные мобильные приложения и e-commerce
                  платформы под ключ для вашего бизнеса
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4 text-white">
                  Контакты
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    "HOOMO" MAS‘ULIYATI CHEKLANGAN JAMIYATI
                  </li>
                  <li className="flex items-center space-x-2">ИНН 307238694</li>
                  <li className="flex items-center space-x-2 hover:underline">
                    <a href="tel:+998 93 337 39 20">+998 93 337 39 20</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    Шайхонтохурский район, Беруний, 41
                  </li>
                  {/* <li className="flex items-center space-x-2">
                    <Send className="h-4 w-4 text-teal-400" />
                    <span>hello@hoomo.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4 text-teal-400" />
                    <span>Telegram / Instagram</span>
                  </li> */}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4 text-white">Услуги</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>📱 Разработка мобильных приложений</li>
                  <li>🛒 Создание интернет-магазинов</li>
                  <li>🔧 Поддержка и сопровождение</li>
                  <li>🎯 Маркетинг и аналитика</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4 text-white">
                  Информация
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>О компании</li>
                  <li>Портфолио</li>
                  <li>Блог</li>
                  <li>Юридическая информация</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Hoomo. Все права защищены.
              </p>
              {/* <div className="flex space-x-4 mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
              </div> */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
