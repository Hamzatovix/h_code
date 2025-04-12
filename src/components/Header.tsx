import { Link } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-10 dark:bg-gray-900">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">[Твоё Имя]</h1>
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
          <ul
            className={`md:flex space-x-6 ${
              isOpen ? 'block' : 'hidden'
            } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 dark:bg-gray-900 md:dark:bg-transparent`}
          >
            <li>
              <Link to="#about" className="block py-2 text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary">
                Обо мне
              </Link>
            </li>
            <li>
              <Link to="#projects" className="block py-2 text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary">
                Проекты
              </Link>
            </li>
            <li>
              <Link to="#skills" className="block py-2 text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary">
                Навыки
              </Link>
            </li>
            <li>
              <Link to="#contact" className="block py-2 text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary">
                Контакты
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;