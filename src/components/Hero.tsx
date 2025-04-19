// src/components/Hero.tsx
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 animate-gradient overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: '#1e90ff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
            },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        }}
        className="absolute inset-0 z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-4 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition shadow-md hover:shadow-lg"
          >
            {t('hero.view_projects')}
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-blue-500 text-blue-500 dark:text-blue-400 dark:border-blue-400 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white dark:hover:text-white transition"
          >
            {t('hero.contact_me')}
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-10 text-blue-500 dark:text-blue-400 opacity-20"
      >
        <svg
          className="w-24 h-24 md:w-32 md:h-32"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </motion.div>
    </section>
  );
}

export default Hero;