import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  rating,
  testimonial,
  imageUrl
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="flex items-center mb-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-indigo-900">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-600 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;