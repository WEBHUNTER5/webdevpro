import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PricingPackages from './components/PricingPackages';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SEOContent from './components/SEOContent';
import SEOBlog from './components/SEOBlog';

function App() {
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