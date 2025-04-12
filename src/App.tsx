import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>[Твоё Имя] - Фронтенд-разработчик</title>
          <meta
            name="description"
            content="Портфолио [Твоё Имя], фронтенд-разработчика. Проекты на React, адаптивный дизайн, анимации."
          />
        </Helmet>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;