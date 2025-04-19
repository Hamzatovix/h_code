// src/components/Footer.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  const navItems = [
    { name: t('footer.home'), id: 'hero' },
    { name: t('footer.about'), id: 'about' },
    { name: t('footer.projects'), id: 'projects' },
    { name: t('footer.contact'), id: 'contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">{t('footer.title')}</h3>
            <p className="text-gray-300">{t('footer.description')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">{t('footer.follow')}</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Hamzatovix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-blue-400 transition cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center text-gray-400"
        >
          <p>{t('footer.copyright')}</p>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-blue-400 hover:text-blue-300 transition cursor-pointer"
          >
            {t('footer.back_to_top')}
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;