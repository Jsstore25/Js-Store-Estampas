import React from 'react';
import { InstagramIcon, WhatsappIcon } from './icons/SocialIcons';
import { PRODUCTS } from '../constants';
import { JsStoreLogo } from './icons/Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-black text-gray-300 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <div className="flex justify-center md:justify-start">
            <JsStoreLogo className="h-12 w-auto mb-4" />
          </div>
          <p className="text-sm">Criando sua marca, vestindo suas ideias.</p>
           <div className="flex justify-center md:justify-start items-center space-x-4 mt-6">
            <a href="https://www.instagram.com/jsstore25_" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-yellow transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5531991687046&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-yellow transition-colors">
              <WhatsappIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4 text-white uppercase">Pacote de Estampas</h3>
          <ul className="space-y-2">
            {PRODUCTS.map(product => (
                 // FIX: Changed key from product.title to product.id for a stable and unique identifier.
                 <li key={product.id}>
                    <a 
                        href={product.downloadLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm hover:text-brand-yellow transition-colors"
                    >
                        {product.title}
                    </a>
                </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4 text-white uppercase">Contato</h3>
          <p className="text-sm">(31) 99168-7046</p>
          <p className="text-sm">@jsstore25_</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-800 pt-6">
        <p>© 2025 JS Store - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;