import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { t } = useTranslation();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mansur Hamzatov",
    "jobTitle": "Frontend Developer",
    "url": "https://h-code-three.vercel.app/",
    "sameAs": [
      "https://github.com/Hamzatovix",
      "https://t.me/hcodelink"
    ],
    "description": t('meta.description')
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta name="author" content="Mansur Hamzatov" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://h-code-three.vercel.app/" />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://h-code-three.vercel.app/" />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content="/assets/images/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
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