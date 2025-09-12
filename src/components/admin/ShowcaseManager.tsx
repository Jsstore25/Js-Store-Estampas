import React, { useState, FormEvent } from 'react';
import { ShowcaseImage } from '../../types';
import { getShowcaseImages, saveShowcaseImages } from '../../data/data';

const emptyShowcase: Omit<ShowcaseImage, 'id'> = {
  imageUrl: '',
  alt: '',
};

const ShowcaseManager: React.FC = () => {
  const [images, setImages] = useState<ShowcaseImage[]>(getShowcaseImages());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<ShowcaseImage | Omit<ShowcaseImage, 'id'>>({...emptyShowcase});
  
  const refreshImages = () => {
    setImages(getShowcaseImages());
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    let updatedImages;
    if ('id' in editingImage) {
      updatedImages = images.map(p => p.id === editingImage.id ? editingImage : p);
    } else {
      const newImage: ShowcaseImage = { ...editingImage, id: Date.now() };
      updatedImages = [...images, newImage];
    }
    saveShowcaseImages(updatedImages);
    refreshImages();
    closeModal();
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir esta imagem?')) {
      const updatedImages = images.filter(p => p.id !== id);
      saveShowcaseImages(updatedImages);
      refreshImages();
    }
  };

  const openModal = (image?: ShowcaseImage) => {
    setEditingImage(image || {...emptyShowcase});
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingImage(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gerenciar Exemplos</h2>
        <button onClick={() => openModal()} className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md transition-colors">
          Adicionar Exemplo
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-brand-dark p-4 rounded-lg">
          {images.map(image => (
            <div key={image.id} className="relative group bg-gray-800 rounded-md overflow-hidden">
                <img referrerPolicy='no-referrer' src={image.imageUrl} alt={image.alt} className="w-full h-32 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                    <button onClick={() => openModal(image)} className="text-blue-400 hover:text-blue-300 font-semibold text-sm bg-black bg-opacity-50 p-1 rounded">Editar</button>
                    <button onClick={() => handleDelete(image.id)} className="text-red-500 hover:text-red-400 font-semibold text-sm bg-black bg-opacity-50 p-1 rounded">Excluir</button>
                </div>
            </div>
          ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-brand-gray p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h3 className="text-xl font-bold mb-6">{'id' in editingImage ? 'Editar' : 'Adicionar'} Exemplo</h3>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="text-sm font-medium">URL da Imagem</label>
                <input name="imageUrl" value={editingImage.imageUrl} onChange={handleChange} className="w-full bg-brand-dark p-2 rounded-md mt-1 border border-gray-600 focus:ring-brand-yellow focus:ring-1 focus:outline-none" required />
              </div>
              <div>
                <label className="text-sm font-medium">Texto Alternativo (Descrição)</label>
                <input name="alt" value={editingImage.alt} onChange={handleChange} className="w-full bg-brand-dark p-2 rounded-md mt-1 border border-gray-600 focus:ring-brand-yellow focus:ring-1 focus:outline-none" required />
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

export default ShowcaseManager;