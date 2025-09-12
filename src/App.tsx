import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CustomizationShowcase from './components/CustomizationShowcase';
import ProductSection from './components/ProductSection';
import FaqSection from './components/FqSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white font-sans">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <CustomizationShowcase />
        <ProductSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;