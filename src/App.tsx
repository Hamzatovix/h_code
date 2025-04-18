import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>H code</title>
        <meta
          name="description"
          content="Портфолио [Твоё Имя] — фронтенд-разработчика, специализирующегося на React, TypeScript и адаптивном дизайне."
        />
      </Helmet>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default App;