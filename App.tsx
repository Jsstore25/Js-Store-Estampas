
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ProductSection from './components/ProductSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white font-sans">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ProductSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
