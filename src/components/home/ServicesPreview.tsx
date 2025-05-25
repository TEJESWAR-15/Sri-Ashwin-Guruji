import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Sun, Moon, Bot as Lotus, Compass, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: <Sun className="h-10 w-10 text-saffron-500" />,
    title: 'Horoscope Reading',
    description: 'Detailed analysis of your birth chart revealing life path, strengths, and divine purpose.',
    link: '/services'
  },
  {
    icon: <Moon className="h-10 w-10 text-spiritual-500" />,
    title: 'Spiritual Counseling',
    description: 'Find peace and clarity through divine guidance addressing your spiritual questions.',
    link: '/services'
  },
  {
    icon: <Lotus className="h-10 w-10 text-maroon-600" />,
    title: 'Karma Healing',
    description: 'Rituals and remedies to balance your karma and remove obstacles from your life path.',
    link: '/services'
  },
  {
    icon: <Compass className="h-10 w-10 text-gold-500" />,
    title: 'Ritual Guidance',
    description: 'Learn sacred rituals and practices to enhance spiritual connection and divine blessings.',
    link: '/services'
  },
  {
    icon: <Sparkles className="h-10 w-10 text-amber-500" />,
    title: 'Energy Cleansing',
    description: 'Purify your aura and living space of negative energies for harmony and prosperity.',
    link: '/services'
  },
  {
    icon: <Star className="h-10 w-10 text-gold-500" />,
    title: 'Weekly Guidance',
    description: 'Receive cosmic insights and spiritual practices aligned with current planetary positions.',
    link: '/weekly-guidance'
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServicesPreview = () => {
  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-2">
              <hr className="w-12 border-t-2 border-maroon-600" />
              <span className="mx-4 text-maroon-600 font-spiritual">Divine Services</span>
              <hr className="w-12 border-t-2 border-maroon-600" />
            </div>
          </div>
          <h2 className="text-3xl font-spiritual font-bold text-maroon-700 mb-4">Sacred Offerings</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Guruji provides divine services to guide your spiritual journey, heal your karma, 
            and align your life with cosmic harmony.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-divine transition-shadow border border-amber-100"
              variants={item}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-spiritual font-semibold text-maroon-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link}
                className="text-maroon-600 font-medium hover:text-maroon-700 transition-colors flex items-center"
              >
                Learn more <span className="ml-1">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <Link 
            to="/services" 
            className="inline-block bg-maroon-700 hover:bg-maroon-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Divine Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;