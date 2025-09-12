import React, { useState } from 'react';
import { JsStoreLogo } from '../components/icons/Logo';
import ProductManager from '../components/admin/ProductManager';
import FaqManager from '../../FaqManager';

type AdminTab = 'products' | 'faq';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AdminTab>('products');

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuthenticated');
    window.location.hash = '#/admin';
  };
  
  const renderContent = () => {
    switch (activeTab) {
      case 'products':
        return <ProductManager />;
      case 'faq':
        return <FaqManager />;
      default:
        return <ProductManager />;
    }
  };

  const TabButton: React.FC<{tab: AdminTab, label: string}> = ({tab, label}) => (
      <button 
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === tab ? 'bg-brand-yellow text-brand-dark' : 'text-gray-300 hover:bg-gray-700'}`}
      >
        {label}
      </button>
  );

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <header className="bg-brand-gray shadow-md py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <JsStoreLogo className="h-10 w-auto" />
          <h1 className="text-xl font-bold">Painel do Administrador</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/#/" className="bg-gray-200 text-black hover:bg-gray-300 font-bold py-2 px-4 rounded-md transition-colors text-sm">
            Ver Loja
          </a>
          <button onClick={handleLogout} className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-md transition-colors text-sm">
            Sair
          </button>
        </div>
      </header>
      
      <main className="container mx-auto p-4 sm:p-6 md:p-8">
        <div className="bg-brand-gray p-4 sm:p-6 rounded-lg shadow-lg">
          <div className="flex flex-wrap gap-2 border-b border-gray-700 pb-4 mb-6">
             <TabButton tab="products" label="Gerenciar Produtos" />
             <TabButton tab="faq" label="Gerenciar Dúvidas" />
          </div>
          <div>
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;