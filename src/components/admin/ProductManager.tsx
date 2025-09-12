import React, { useState, FormEvent } from 'react';
import { Product } from '../../types';
import { getProducts, saveProducts } from '../../data/data';

const emptyProduct: Omit<Product, 'id'> = {
  title: '',
  description: '',
  imageUrl: '',
  buttonText: 'BAIXAR PACOTE DE ESTAMPAS',
  downloadLink: '',
};

const ProductManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(getProducts());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | Omit<Product, 'id'>>({...emptyProduct});
  
  const refreshProducts = () => {
    setProducts(getProducts());
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    let updatedProducts;
    if ('id' in editingProduct) {
      updatedProducts = products.map(p => p.id === editingProduct.id ? editingProduct : p);
    } else {
      const newProduct: Product = { ...editingProduct, id: Date.now() };
      updatedProducts = [...products, newProduct];
    }
    saveProducts(updatedProducts);
    refreshProducts();
    closeModal();
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      const updatedProducts = products.filter(p => p.id !== id);
      saveProducts(updatedProducts);
      refreshProducts();
    }
  };

  const openModal = (product?: Product) => {
    setEditingProduct(product || {...emptyProduct});
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditingProduct(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gerenciar Produtos</h2>
        <button onClick={() => openModal()} className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md transition-colors">
          Adicionar Produto
        </button>
      </div>

      <div className="bg-brand-dark p-4 rounded-lg">
        <ul className="space-y-3">
          {products.map(product => (
            <li key={product.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-800 p-3 rounded-md gap-4">
              <div className="flex items-center space-x-4">
                <img referrerPolicy='no-referrer' src={product.imageUrl} alt={product.title} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                <span className="font-semibold">{product.title}</span>
              </div>
              <div className="space-x-2 flex-shrink-0 self-end sm:self-center">
                <button onClick={() => openModal(product)} className="text-blue-400 hover:text-blue-300 font-semibold">Editar</button>
                <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:text-red-400 font-semibold">Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-brand-gray p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-6">{'id' in editingProduct ? 'Editar' : 'Adicionar'} Produto</h3>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Título</label>
                <input name="title" value={editingProduct.title} onChange={handleChange} className="w-full bg-brand-dark p-2 rounded-md mt-1 border border-gray-600 focus:ring-brand-yellow focus:ring-1 focus:outline-none" required />
              </div>
              <div>
                <label className="text-sm font-medium">Descrição</label>
                <textarea name="description" value={editingProduct.description} onChange={handleChange} rows={4} className="w-full bg-brand-dark p-2 rounded-md mt-1 border border-gray-600 focus:ring-brand-yellow focus:ring-1 focus:outline-none" required />
              </div>
              <div>
                <label className="text-sm font-medium">URL da Imagem</label>
                <input name="imageUrl" value={editingProduct.imageUrl} onChange={handleChange} className="w-full bg-brand-dark p-2 rounded-md mt-1 border border-gray-600 focus:ring-brand-yellow focus:ring-1 focus:outline-none" required />
              </div>
              <div>
                <label className="text-sm font-medium">URL para Download</label>
                <input name="downloadLink" value={editingProduct.downloadLink} onChange={handleChange} className="w-full bg-brand-dark p-2 rounded-md mt-1 border border-gray-600 focus:ring-brand-yellow focus:ring-1 focus:outline-none" required />
              </div>
               <div>
                <label className="text-sm font-medium">Texto do Botão</label>
                <input name="buttonText" value={editingProduct.buttonText} onChange={handleChange} className="w-full bg-brand-dark p-2 rounded-md mt-1 border border-gray-600 focus:ring-brand-yellow focus:ring-1 focus:outline-none" required />
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button type="button" onClick={closeModal} className="bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-md font-bold">Cancelar</button>
                <button type="submit" className="bg-brand-yellow text-brand-dark font-bold py-2 px-4 rounded-md">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManager;