import React from 'react';
import { InstagramIcon, WhatsappIcon } from './icons/SocialIcons';
import { JsStoreLogo } from './icons/Logo';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-dark py-4 px-6 md:px-12 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" aria-label="JS Store Home">
          <JsStoreLogo className="h-10 w-auto" />
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold tracking-wider">
          <a href="#" className="hover:text-brand-yellow transition-colors">INÍCIO</a>
          <a href="#produtos" className="hover:text-brand-yellow transition-colors">PRODUTOS</a>
          <a href="#exemplos" className="hover:text-brand-yellow transition-colors">EXEMPLOS</a>
          <a href="#faq" className="hover:text-brand-yellow transition-colors">DÚVIDAS</a>
          <a href="#contato" className="hover:text-brand-yellow transition-colors">CONTATO</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/jsstore25_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-yellow transition-colors">
            <InstagramIcon />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5531991687046&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-yellow transition-colors">
            <WhatsappIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;