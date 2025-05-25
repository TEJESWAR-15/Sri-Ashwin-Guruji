import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  price: number;
  description: string;
  benefits: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  price,
  description,
  benefits
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-divine transition-all duration-300 border border-amber-100"
      whileHover={{ translateY: -5 }}
    >
      <div className="bg-gradient-to-r from-maroon-700 to-maroon-800 p-6 flex items-center">
        <div className="mr-4 text-gold-500">
          {icon}
        </div>
        <h3 className="text-xl font-spiritual font-bold text-white">{title}</h3>
      </div>
      
      <div className="p-6">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-gold-500 fill-gold-500 mr-1" />
            <Star className="h-4 w-4 text-gold-500 fill-gold-500 mr-1" />
            <Star className="h-4 w-4 text-gold-500 fill-gold-500 mr-1" />
            <Star className="h-4 w-4 text-gold-500 fill-gold-500 mr-1" />
            <Star className="h-4 w-4 text-gold-500 fill-gold-500" />
          </div>
          <div className="text-xl font-semibold text-maroon-700">${price}</div>
        </div>
        
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-maroon-700 font-medium mb-2">Divine Benefits:</h4>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gold-500 mr-2">✦</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Link
          to="/booking"
          className="block text-center bg-maroon-700 hover:bg-maroon-800 text-white py-2 rounded-md font-medium transition-colors"
        >
          Book This Service
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;