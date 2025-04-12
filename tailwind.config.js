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
