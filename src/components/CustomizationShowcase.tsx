import React, { useState, useEffect } from 'react';
import { getShowcaseImages } from '../data/data';
import { ShowcaseImage } from '../types';

const CustomizationShowcase: React.FC = () => {
  const [showcaseImages, setShowcaseImages] = useState<ShowcaseImage[]>([]);

  useEffect(() => {
    const updateImages = () => setShowcaseImages(getShowcaseImages());
    updateImages();
    window.addEventListener('storage', updateImages);
    return () => window.removeEventListener('storage', updateImages);
  }, []);

  return (
    <section id="exemplos" className="bg-brand-dark py-16 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase text-white">
          Dê Vida à Sua Marca
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Veja como sua marca pode se destacar. Oferecemos personalização detalhada para garantir que seu produto final seja exatamente como você imaginou.
        </p>
        
        <div className="mb-12 bg-black p-4 md:p-8 rounded-xl shadow-2xl inline-block">
          <img 
            referrerPolicy="no-referrer"
            src="https://fenix00atacado.com.br/wp-content/uploads/2024/05/modelo-personalizado-pecas-2.jpg" 
            alt="Exemplo de posicionamento de logo em camiseta na frente e nas costas" 
            className="rounded-lg mx-auto max-w-full h-auto"
          />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-10 uppercase text-brand-yellow">
          Exemplos de Nossos Clientes
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {showcaseImages.map((image) => (
            <div key={image.id} className="rounded-lg overflow-hidden shadow-lg border-2 border-gray-700 hover:border-brand-yellow transition-colors duration-300">
              <img 
                referrerPolicy="no-referrer"
                src={image.imageUrl} 
                alt={image.alt} 
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto font-medium">
          "Para personalizar as medidas ou inserir a sua marca, solicite um orçamento com um de nossos vendedores."
        </p>
        
        <a
          href="#contato"
          className="bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-block"
          aria-label="Solicitar um orçamento para personalizar produtos"
        >
          Solicite um Orçamento
        </a>
      </div>
    </section>
  );
};

export default CustomizationShowcase;