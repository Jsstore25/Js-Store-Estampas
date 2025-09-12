import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-brand-gray rounded-lg overflow-hidden shadow-lg flex flex-col items-center text-center p-8 border border-gray-700 h-full justify-between">
      <div>
        <h3 className="text-3xl font-bold text-brand-yellow mb-4 uppercase">{product.title}</h3>
        <p className="text-gray-300 mb-8">{product.description}</p>
      </div>
      <a
        href={product.downloadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-yellow text-brand-dark font-bold py-4 px-10 rounded-full text-lg uppercase hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 mt-auto"
      >
        {product.buttonText}
      </a>
    </div>
  );
};

export default ProductCard;
