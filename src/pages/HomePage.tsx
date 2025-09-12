import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import CustomizationShowcase from '../components/CustomizationShowcase';
import ProductSection from '../components/ProductSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <CustomizationShowcase />
        <ProductSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;