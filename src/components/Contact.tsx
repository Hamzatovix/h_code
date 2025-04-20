import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = t('contact.name_error');
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = t('contact.email_error');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.email_invalid');
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.message_error');
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = t('contact.message_short');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus(t('contact.sending'));
    try {
      await emailjs.send(
        service_ng25mca, // Замени на твой Service ID
        template_srbz46a, // Замени на твой Template ID
        formData,
        _5jFxKLyE4u77Rrln // Замени на твой Public Key
      );
      setStatus(t('contact.success'));
      toast.success(t('contact.success'), {
        position: 'top-right',
        autoClose: 3000,
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus(t('contact.error'));
      toast.error(t('contact.error'), {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
        >
          {t('contact.title')}
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder={t('contact.name_placeholder')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder={t('contact.email_placeholder')}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <textarea
              placeholder={t('contact.message_placeholder')}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-purple-700 transition"
          >
            {t('contact.send')}
          </button>
          {status && (
            <p
              className={`text-center mt-4 ${
                status === t('contact.success') ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {status}
            </p>
          )}
        </motion.form>
        <ToastContainer />
      </div>
    </section>
  );
}

export default Contact;