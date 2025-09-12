import React, { useState, FormEvent } from 'react';
import { FaqItem } from '../../types';
import { getFaqData, saveFaqData } from '../../data/data';

const emptyFaq: Omit<FaqItem, 'id'> = {
  question: '',
  answer: '',
};

const FaqManager: React.FC = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>(getFaqData());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FaqItem | Omit<FaqItem, 'id'>>({...emptyFaq});
  
  const refreshFaqs = () => {
    setFaqs(getFaqData());
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    let updatedFaqs;
    if ('id' in editingFaq) {
      updatedFaqs = faqs.map(p => p.id === editingFaq.id ? editingFaq : p);
    } else {
      const newFaq: FaqItem = { ...editingFaq, id: Date.now() };
      updatedFaqs = [...faqs, newFaq];
    }
    saveFaqData(updatedFaqs);
    refreshFaqs();
    closeModal();
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir esta dúvida?')) {
      const updatedFaqs = faqs.filter(p => p.id !== id);
      saveFaqData(updatedFaqs);
      refreshFaqs();
    }
  };

  const openModal = (faq?: FaqItem) => {
    setEditingFaq(faq || {...emptyFaq});
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditingFaq(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gerenciar Dúvidas</h2>
        <button onClick={() => openModal()} className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md transition-colors">
          Adicionar Dúvida
        </button>
      </div>

      <div className="bg-brand-dark p-4 rounded-lg">
        <ul className="space-y-3">
          {faqs.map(faq => (
            <li key={faq.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-800 p-3 rounded-md gap-4">
              <span className="font-semibold">{faq.question}</span>
              <div className="space-x-2 flex-shrink-0 self-end sm:self-center">
                <button onClick={() => openModal(faq)} className="text-blue-400 hover:text-blue-300 font-semibold">Editar</button>
                <button onClick={() => handleDelete(faq.id)} className="text-red-500 hover:text-red-400 font-semibold">Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-brand-gray p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-6">{'id' in editingFaq ? 'Editar' : 'Adicionar'} Dúvida</h3>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Pergunta</label>
                <input name="question" value={editingFaq.question} onChange={handleChange} className="w-full bg-brand-dark p-2 rounded-md mt-1 border border-gray-600 focus:ring-brand-yellow focus:ring-1 focus:outline-none" required />
              </div>
              <div>
                <label className="text-sm font-medium">Resposta</label>
                <textarea name="answer" value={editingFaq.answer} onChange={handleChange} rows={5} className="w-full bg-brand-dark p-2 rounded-md mt-1 border border-gray-600 focus:ring-brand-yellow focus:ring-1 focus:outline-none" required />
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

export default FaqManager;
