import { motion } from "framer-motion";
import { MessageSquare, Send } from "lucide-react";
import { FormSubmitButton } from "../form-submit-button";
import { useRef, useState } from "react";
import { SuccessModal } from "../success-modal";

const Contact = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccessModalOpen(true);
    formRef.current?.reset();
  };

  return (
    <>
      <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
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

              {/* <motion.div
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
              </motion.div> */}
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
                      className="w-full resize-none px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent min-h-[120px] text-white"
                      placeholder="Расскажите о вашем проекте"
                    ></textarea>
                  </div>

                  <FormSubmitButton
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-gray-950 py-3"
                  >
                    Отправить заявку
                  </FormSubmitButton>

                  {/* <p className="text-xs text-gray-400 text-center mt-4">
                  Нажимая на кнопку, вы соглашаетесь с нашей{" "}
                  <Link href="#" className="text-teal-400 hover:underline">
                    политикой конфиденциальности
                  </Link>
                </p> */}
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
    </>
  );
};

export default Contact;
