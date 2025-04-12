import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form,
        'YOUR_PUBLIC_KEY'
      )
      .then(() => setStatus('Сообщение отправлено!'), () => setStatus('Ошибка. Попробуйте снова.'));
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Связаться со мной
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6"
        >
          <input
            type="text"
            placeholder="Имя"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border rounded focus:outline-none focus:border-primary"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border rounded focus:outline-none focus:border-primary"
            required
          />
          <textarea
            placeholder="Сообщение"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 border rounded focus:outline-none focus:border-primary"
            rows={5}
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-white p-3 rounded hover:bg-blue-700 transition"
          >
            Отправить
          </button>
          {status && <p className="text-center">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;