import React, { useState } from 'react';
import PricingModal from './PricingModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section 
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://fenix00atacado.com.br/wp-content/uploads/2024/05/banner-personalizados.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-shadow-lg">
            Crie sua marca com a gente!
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Tenha sua própria coleção de roupas com a nossa ajuda. Oferecemos camisetas personalizadas de alta qualidade para impulsionar o seu negócio.
          </p>
          <div className="mt-8 md:mt-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              Tabela de Preços
            </button>
          </div>
        </div>
      </section>
      <PricingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;
