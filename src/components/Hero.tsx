import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Привет, я [Твоё Имя]
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          Фронтенд-разработчик, создаю современные веб-приложения
        </p>
        <a
          href="#projects"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Мои проекты
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;