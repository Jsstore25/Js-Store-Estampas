import React from 'react';
import { Step1Icon, Step2Icon, Step3Icon } from './icons/StepIcons';

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-brand-gray py-16 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Como Funciona?</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">Nosso processo é simples e transparente, feito para você ter a melhor experiência.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-brand-dark p-6 rounded-full mb-5 border-2 border-brand-yellow">
              <Step1Icon />
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase text-brand-yellow">1. Orçamento</h3>
            <p className="text-gray-400">
              Entre em contato conosco, envie sua arte ou ideia e a quantidade de peças desejada para receber um orçamento detalhado.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-brand-dark p-6 rounded-full mb-5 border-2 border-brand-yellow">
              <Step2Icon />
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase text-brand-yellow">2. Produção</h3>
            <p className="text-gray-400">
              Após a aprovação do orçamento e pagamento inicial, iniciamos a produção das suas peças com matéria-prima de alta qualidade.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-brand-dark p-6 rounded-full mb-5 border-2 border-brand-yellow">
              <Step3Icon />
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase text-brand-yellow">3. Entrega</h3>
            <p className="text-gray-400">
              Finalizada a produção, suas peças são embaladas com cuidado e enviadas para o seu endereço em qualquer lugar do Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
