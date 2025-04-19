// src/components/LanguageToggle.tsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={i18n.language === 'ru' ? 'Switch to English' : 'Переключить на русский'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {i18n.language === 'ru' ? 'EN' : 'RU'}
    </motion.button>
  );
}

export default LanguageToggle;