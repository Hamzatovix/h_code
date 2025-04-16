import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = 'Имя обязательно';
      isValid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email обязателен';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Некорректный email';
      isValid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = 'Сообщение обязательно';
      isValid = false;
    } else if (form.message.length < 10) {
      newErrors.message = 'Сообщение слишком короткое';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    emailjs
      .send(
        'service_ng25mca', // Замени на реальный
        'template_srbz46a', // Замени на реальный
        form,
        '_5jFxKLyE4u77Rrln' // Замени на реальный
      )
      .then(
        () => {
          setStatus('Сообщение отправлено!');
          setForm({ name: '', email: '', message: '' });
        },
        () => setStatus('Ошибка. Попробуйте снова.')
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
        >
         Contact me
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
        >
          <div>
            <input
              type="text"
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Ваш email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <textarea
              placeholder="Ваше сообщение"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              rows={6}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-4 rounded-lg text-white font-semibold transition-all duration-300 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Отправка...
              </span>
            ) : (
              'Отправить'
            )}
          </button>
          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-center ${
                status.includes('Ошибка') ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;