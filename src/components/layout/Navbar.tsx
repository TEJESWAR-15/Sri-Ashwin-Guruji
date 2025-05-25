import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Bot as Lotus } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Lotus className={`h-8 w-8 ${isScrolled ? 'text-maroon-700' : 'text-maroon-600'} transition-colors duration-500`} />
            <Sun className={`h-6 w-6 ${isScrolled ? 'text-gold-500' : 'text-gold-400'} transition-colors duration-500`} />
            <div className="flex flex-col">
              <span className={`text-xl font-spiritual font-bold ${
                isScrolled ? 'text-maroon-700' : 'text-maroon-600'
              } transition-colors duration-500`}>
                Sri Ashwin Guruji
              </span>
              <span className="text-xs text-saffron-500 font-medium">Avadhootha</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Weekly Guidance', path: '/weekly-guidance' },
              { name: 'Videos', path: '/videos' },
              { name: 'Store', path: '/store' },
              { name: 'Philosophy', path: '/philosophy' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors hover:text-maroon-700 ${
                  location.pathname === item.path 
                    ? 'text-maroon-700 border-b-2 border-gold-500' 
                    : isScrolled ? 'text-gray-700' : 'text-maroon-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/booking"
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                isScrolled 
                  ? 'bg-maroon-700 text-white hover:bg-maroon-800' 
                  : 'bg-maroon-700 text-white hover:bg-maroon-800 shadow-divine'
              }`}
            >
              Book Consultation
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-maroon-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 py-4 md:hidden bg-white rounded-lg shadow-lg border border-gold-100"
          >
            <div className="flex flex-col space-y-4 px-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Weekly Guidance', path: '/weekly-guidance' },
                { name: 'Videos', path: '/videos' },
                { name: 'Store', path: '/store' },
                { name: 'Philosophy', path: '/philosophy' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`font-medium ${
                    location.pathname === item.path 
                      ? 'text-maroon-700 font-semibold' 
                      : 'text-gray-700 hover:text-maroon-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/booking"
                className="px-4 py-2 bg-maroon-700 text-white rounded-md font-medium text-center hover:bg-maroon-800 transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;