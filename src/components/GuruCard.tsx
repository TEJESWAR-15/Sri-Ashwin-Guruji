import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface GuruCardProps {
  name: string;
  expertise: string;
  experience: number;
  imageUrl: string;
  description: string;
}

const GuruCard: React.FC<GuruCardProps> = ({ 
  name, 
  expertise, 
  experience, 
  imageUrl, 
  description 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900 to-transparent p-4">
          <span className="text-amber-400 font-medium flex items-center">
            <Star className="h-4 w-4 mr-1 fill-current" />
            {experience}+ Years Experience
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-indigo-900 mb-1">{name}</h3>
        <p className="text-indigo-600 mb-3">{expertise}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Link 
            to={`/gurus/${name.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-amber-600 font-medium hover:text-amber-700 transition-colors"
          >
            View Profile
          </Link>
          <Link 
            to="/booking"
            className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-200 transition-colors font-medium"
          >
            Book Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuruCard;