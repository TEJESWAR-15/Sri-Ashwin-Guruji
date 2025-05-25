import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  description,
  category
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-divine transition-all duration-300 border border-amber-100"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-maroon-700 text-white text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-spiritual font-semibold text-maroon-700 mb-1">{name}</h3>
        <p className="text-gold-600 font-bold mb-3">${price.toFixed(2)}</p>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button 
          className="w-full bg-maroon-700 hover:bg-maroon-800 text-white py-2 rounded-md font-medium transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;