import React from 'react';
import { PRICING_DATA } from '../constants';
import { PricingCategory } from '../types';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CloseIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PricingTable: React.FC<{ category: PricingCategory }> = ({ category }) => (
  <div className="bg-brand-dark p-4 rounded-lg">
    <h3 className="text-brand-yellow font-bold text-lg mb-4 text-center">{category.title}</h3>
    <ul className="space-y-2 text-gray-300">
      {category.tiers.map(tier => (
        <li key={tier.quantity} className="flex justify-between border-b border-gray-700 py-1">
          <span className="font-medium">{tier.quantity} Peças</span>
          <span className="font-semibold">{tier.price}</span>
        </li>
      ))}
    </ul>
  </div>
);

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pricing-modal-title"
    >
      <div className="bg-brand-gray rounded-xl shadow-2xl max-w-4xl w-full relative transform transition-all duration-300 scale-95 animate-fade-in-up overflow-y-auto max-h-[90vh]">
        <div className="p-6 sm:p-8">
            <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-brand-yellow transition-colors z-10"
            aria-label="Fechar Tabela de Preços"
            >
            <CloseIcon />
            </button>
            <h2 id="pricing-modal-title" className="text-xl sm:text-2xl font-bold text-center mb-4 text-white">
            Estampas exclusivas para lojistas que querem se destacar e faturar alto no varejo.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {PRICING_DATA.map(category => (
                <PricingTable key={category.title} category={category} />
            ))}
            </div>
            <p className="text-center mt-8 text-sm text-gray-400 max-w-2xl mx-auto">
            Todas as estampas do catálogo possuem o tamanho da referência abaixo. Para personalizar as medidas ou inserir a sua marca, solicite um orçamento com um de nossos vendedores.
            </p>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
            from {
                opacity: 0;
                transform: translateY(20px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PricingModal;
