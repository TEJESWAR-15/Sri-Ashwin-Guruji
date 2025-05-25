import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import AboutPreview from '../components/home/AboutPreview';
import GuidancePreview from '../components/home/GuidancePreview';
import TestimonialSection from '../components/home/TestimonialSection';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <motion.div 
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <GuidancePreview />
      <TestimonialSection />
      <CallToAction />
    </motion.div>
  );
};

export default HomePage;