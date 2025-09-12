import React, { useState, useEffect } from 'react';
import { getFaqData } from '../data/data';
import { FaqItem } from '../types';
import AccordionItem from './AccordionItem';

const FaqSection: React.FC = () => {
  const [faqData, setFaqData] = useState<FaqItem[]>([]);

  useEffect(() => {
    const updateFaq = () => setFaqData(getFaqData());
    updateFaq();
    window.addEventListener('storage', updateFaq);
    return () => window.removeEventListener('storage', updateFaq);
  }, []);

  return (
    <section id="faq" className="bg-brand-gray py-16 sm:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqData.map((faq) => (
            <AccordionItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;