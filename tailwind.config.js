/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0e74c3', // Синий из твоего таск-менеджера
        secondary: '#f4f7fa', // Светлый фон
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1e90ff',
        secondary: '#34495e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};