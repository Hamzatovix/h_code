import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

function Footer() {
  const socials = [
    { name: 'GitHub', link: 'https://github.com/[твой-ник]', icon: <FaGithub size={20} /> },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/[твой-ник]', icon: <FaLinkedin size={20} /> },
    { name: 'Telegram', link: 'https://t.me/[твой-ник]', icon: <FaTelegram size={20} /> },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleScroll = (section: string) => {
    if (section === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(`#${section}`) as HTMLElement | null;
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-indigo-800 text-white py-8 w-full">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Логотип или название */}
          <div>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              H_ code
            </h3>
            <p className="mt-1 text-sm text-gray-300">
              Frontend Developer creating modern web experiences.
            </p>
          </div>

          {/* Социальные сети */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-base font-semibold mb-2">Follow Me</h4>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Навигация или доп. ссылки */}
          <div>
            <h4 className="text-base font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              {['hero', 'about', 'projects', 'contact'].map((section, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <a
                    href={`#${section}`}
                    className="capitalize text-sm"
                    onClick={() => handleScroll(section)}
                  >
                    {section}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="mt-6 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} [Твоё Имя]. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition shadow-md text-sm"
            aria-label="Scroll to top"
          >
            Back to Top
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;