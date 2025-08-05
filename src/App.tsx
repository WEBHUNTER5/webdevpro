import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogPage from './components/BlogPage';
import PricingPackages from './components/PricingPackages';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SEOContent from './components/SEOContent';
import SEOBlog from './components/SEOBlog';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  // Listen for hash changes to handle navigation
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === 'blog') {
        setCurrentPage('blog');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <BlogPage />
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PricingPackages />
      <Services />
      <SEOContent />
      <SEOBlog />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;