import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot as Lotus } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 px-4 bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="stars absolute inset-0"></div>
      </div>
      
      {/* Decorative celestial elements */}
      <motion.div 
        className="absolute top-20 right-10 text-gold-500 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        <Lotus size={80} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-10 text-gold-500 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <Lotus size={60} />
      </motion.div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-spiritual font-bold leading-tight mb-6">
              Divine Guidance Through Cosmic Wisdom
            </h1>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Begin your spiritual journey with Sri Ashwin Guruji Avadhootha, blessed by 
              Goddess Sathyavachini to guide souls through life's cosmic mysteries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/booking" 
                className="bg-gold-500 hover:bg-gold-600 text-maroon-900 px-8 py-3 rounded-md font-medium transition-colors shadow-divine"
              >
                Book Divine Consultation
              </Link>
              <Link 
                to="/weekly-guidance" 
                className="bg-transparent border-2 border-amber-200 hover:bg-maroon-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Weekly Spiritual Guidance
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 p-6 bg-maroon-800/50 border border-gold-500/30 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <h2 className="text-gold-500 font-spiritual text-xl mb-2">Divine Message of the Day</h2>
            <p className="text-amber-100 italic">
              "When the planets align in cosmic harmony, they offer not obstacles, but 
              opportunities for spiritual growth. Embrace their energy as divine guidance."
            </p>
            <p className="text-gold-400 mt-2 text-sm">~ Sri Ashwin Guruji</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;