import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-brand-gray rounded-lg overflow-hidden shadow-lg flex flex-col items-center text-center p-6 border border-gray-700">
      <h3 className="text-2xl font-bold text-brand-yellow mb-3 uppercase">{product.title}</h3>
      <p className="text-gray-300 mb-6 flex-grow">{product.description}</p>
      <a
        href={product.downloadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-yellow text-brand-dark font-bold py-3 px-6 rounded-full text-sm uppercase hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 mt-auto"
      >
        {product.buttonText}
      </a>
    </div>
  );
};

export default ProductCard;
