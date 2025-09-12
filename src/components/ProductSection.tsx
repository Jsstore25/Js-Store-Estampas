import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const ProductSection: React.FC = () => {
  return (
    <section id="produtos" className="bg-brand-dark py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">Nossos Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
