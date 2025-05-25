import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPreview = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8108391/pexels-photo-8108391.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Sri Ashwin Guruji" 
                className="rounded-lg shadow-md z-10 relative"
              />
              <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-gold-500 rounded-lg z-0"></div>
              <div className="absolute top-4 -left-4 w-20 h-20 bg-maroon-700 rounded-full flex items-center justify-center">
                <span className="text-gold-500 font-spiritual text-sm">25+ Years</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-2">
              <div className="flex items-center">
                <hr className="w-12 border-t-2 border-maroon-600" />
                <span className="mx-4 text-maroon-600 font-spiritual">Divine Journey</span>
                <hr className="w-12 border-t-2 border-maroon-600" />
              </div>
            </div>
            <h2 className="text-3xl font-spiritual font-bold text-maroon-700 mb-4">
              Sri Ashwin Guruji Avadhootha
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              From a young age, Sri Ashwin was blessed with divine vision and connection to the cosmic energy. His journey began with a profound spiritual awakening at the sacred temple of Goddess Sathyavachini, who bestowed upon him the gift of divine truth and spiritual insight.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              For over 25 years, Guruji has guided thousands of souls through their spiritual journeys, helping them overcome karmic obstacles, find divine purpose, and achieve harmony in their lives through the ancient wisdom of Hindu astrology and spiritual practices.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-amber-50 px-4 py-2 rounded-md border border-amber-200">
                <span className="font-spiritual text-maroon-700">Divine Astrology</span>
              </div>
              <div className="bg-amber-50 px-4 py-2 rounded-md border border-amber-200">
                <span className="font-spiritual text-maroon-700">Karma Healing</span>
              </div>
              <div className="bg-amber-50 px-4 py-2 rounded-md border border-amber-200">
                <span className="font-spiritual text-maroon-700">Vedic Rituals</span>
              </div>
              <div className="bg-amber-50 px-4 py-2 rounded-md border border-amber-200">
                <span className="font-spiritual text-maroon-700">Spiritual Guidance</span>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="inline-block bg-transparent border-2 border-maroon-700 text-maroon-700 hover:bg-maroon-700 hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Discover Guruji's Sacred Journey
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;