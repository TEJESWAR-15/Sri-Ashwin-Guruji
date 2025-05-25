import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 text-white">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-spiritual font-bold mb-6">Begin Your Divine Journey Today</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Discover the cosmic influences shaping your destiny and learn sacred remedies for harmony, prosperity, and spiritual growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <Link 
              to="/booking" 
              className="bg-gold-500 hover:bg-gold-600 text-maroon-900 px-8 py-3 rounded-md font-medium transition-colors text-lg shadow-divine"
            >
              Book Divine Consultation
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent border-2 border-amber-200 hover:bg-maroon-600 text-white px-8 py-3 rounded-md font-medium transition-colors text-lg"
            >
              Explore Sacred Services
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-maroon-800/50 border border-gold-500/30 rounded-lg p-4">
              <p className="font-spiritual text-gold-500 text-lg mb-1">1000+</p>
              <p className="text-amber-100 text-sm">Divine Consultations</p>
            </div>
            <div className="bg-maroon-800/50 border border-gold-500/30 rounded-lg p-4">
              <p className="font-spiritual text-gold-500 text-lg mb-1">25+</p>
              <p className="text-amber-100 text-sm">Years of Spiritual Wisdom</p>
            </div>
            <div className="bg-maroon-800/50 border border-gold-500/30 rounded-lg p-4">
              <p className="font-spiritual text-gold-500 text-lg mb-1">5000+</p>
              <p className="text-amber-100 text-sm">Lives Transformed</p>
            </div>
            <div className="bg-maroon-800/50 border border-gold-500/30 rounded-lg p-4">
              <p className="font-spiritual text-gold-500 text-lg mb-1">100%</p>
              <p className="text-amber-100 text-sm">Divine Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;