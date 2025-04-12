import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Обо мне
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Я фронтенд-разработчик с опытом создания адаптивных приложений на React. Люблю
            чистый код и крутой UX. Мой последний проект — таск-менеджер с календарем и
            разделом книг.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="text-gray-700 font-semibold">React</span>
            <span className="text-gray-700 font-semibold">TypeScript</span>
            <span className="text-gray-700 font-semibold">Tailwind</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;