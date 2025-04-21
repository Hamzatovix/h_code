import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaTelegram } from 'react-icons/fa';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-100 py-6">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-6"
        >
          <a
            href="https://github.com/Hamzatovix"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
            aria-label="GitHub Profile"
          >
            <FaGithub size={20} />
            <span className="text-sm">{t('footer.github')}</span>
          </a>
          <a
            href="https://t.me/hcodelink"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
            aria-label="Telegram Profile"
          >
            <FaTelegram size={20} />
            <span className="text-sm">{t('footer.telegram')}</span>
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-sm"
        >
          {t('footer.copyright')}
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;