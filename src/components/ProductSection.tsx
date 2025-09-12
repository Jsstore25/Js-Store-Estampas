import React, { useState, useEffect } from 'react';
import { getProducts } from '../data/data';
import { Product } from '../types';
import ProductCard from './ProductCard';

const ProductSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const updateProducts = () => setProducts(getProducts());
    updateProducts();
    window.addEventListener('storage', updateProducts);
    return () => window.removeEventListener('storage', updateProducts);
  }, []);

  return (
    <section id="produtos" className="bg-brand-gray py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">Nossos Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
