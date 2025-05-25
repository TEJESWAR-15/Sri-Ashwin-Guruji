import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Bot as Lotus, Star, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const GuidancePreview = () => {
  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="container mx-auto">
        <motion.div 
          className="bg-gradient-to-r from-maroon-700 to-maroon-800 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-gold-500 mr-3" />
                <h3 className="text-2xl font-spiritual font-bold text-white">This Week's Divine Guidance</h3>
              </div>
              <p className="text-amber-100 mb-6 leading-relaxed">
                The planets are entering a powerful alignment this week. Jupiter expands spiritual wisdom, while Venus brings harmony to relationships. Mars provides the energy to overcome obstacles. Those seeking spiritual growth will find this a blessed time for meditation and divine connection.
              </p>
              <Link 
                to="/weekly-guidance" 
                className="inline-block bg-gold-500 hover:bg-gold-600 text-maroon-900 px-6 py-2 rounded-md font-medium transition-colors"
              >
                Read Complete Guidance
              </Link>
            </div>
            <div className="w-full md:w-1/2 bg-maroon-800 p-8 md:p-12">
              <h4 className="text-xl font-spiritual font-semibold text-gold-500 mb-4">Planetary Insights</h4>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <Sun className="h-5 w-5 text-gold-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Sun in Leo brings leadership energy and creative inspiration</span>
                </li>
                <li className="flex items-start">
                  <Moon className="h-5 w-5 text-amber-100 mr-2 mt-1 flex-shrink-0" />
                  <span>Full Moon in Aquarius heightens intuition and spiritual awareness</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-saffron-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Jupiter in Pisces brings divine blessings and spiritual expansion</span>
                </li>
                <li className="flex items-start">
                  <Lotus className="h-5 w-5 text-spiritual-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Venus and Mars alignment favors relationships and life purpose</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-maroon-700/50 border border-gold-500/20 rounded-lg">
                <h5 className="text-gold-500 font-spiritual mb-2">Divine Remedy</h5>
                <p className="text-amber-100 text-sm">
                  Chant "Om Namo Narayanaya" 108 times daily this week to align with the cosmic energy and invite divine protection.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuidancePreview;