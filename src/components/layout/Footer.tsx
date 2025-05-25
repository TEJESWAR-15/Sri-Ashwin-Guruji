import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Bot as Lotus } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-maroon-700 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Lotus className="h-6 w-6 text-gold-500" />
              <h3 className="text-xl font-spiritual text-gold-500">Sri Ashwin Guruji</h3>
            </div>
            <p className="text-amber-50 mb-4">
              Guiding souls through the cosmic journey with divine wisdom and spiritual remedies.
              Sri Ashwin Guruji Avadhootha brings ancient knowledge to solve modern problems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-100 hover:text-gold-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-100 hover:text-gold-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-100 hover:text-gold-500 transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-spiritual mb-4 text-gold-500">Sacred Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Guruji', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Weekly Guidance', path: '/weekly-guidance' },
                { name: 'Puja Videos', path: '/videos' },
                { name: 'Book Consultation', path: '/booking' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-amber-100 hover:text-gold-500 transition-colors flex items-center"
                  >
                    <span className="text-gold-500 mr-2">❋</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-spiritual mb-4 text-gold-500">Divine Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Horoscope Reading', path: '/services' },
                { name: 'Spiritual Counseling', path: '/services' },
                { name: 'Karma Healing', path: '/services' },
                { name: 'Ritual Guidance', path: '/services' },
                { name: 'Energy Cleansing', path: '/services' },
                { name: 'Spiritual Shop', path: '/store' },
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-amber-100 hover:text-gold-500 transition-colors flex items-center"
                  >
                    <span className="text-gold-500 mr-2">❋</span> {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-spiritual mb-4 text-gold-500">Divine Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gold-500 mt-1 flex-shrink-0" />
                <span className="text-amber-100">Sri Ashwin Temple, Divine Street, Spiritual Garden, Mystic City</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-gold-500 mt-1 flex-shrink-0" />
                <span className="text-amber-100">blessings@sriashwinguruji.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-gold-500 mt-1 flex-shrink-0" />
                <span className="text-amber-100">+91 98765 43210</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-gold-500 mb-2">Subscribe for Divine Updates</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-maroon-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-gold-500 placeholder-amber-300 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-gold-500 text-maroon-900 px-4 py-2 rounded-r-md hover:bg-gold-600 transition-colors font-medium"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-maroon-600 mt-8 pt-6 text-center text-amber-200">
          <p>&copy; {new Date().getFullYear()} Sri Ashwin Guruji Avadhootha. All rights reserved.</p>
          <p className="mt-2 text-xs text-amber-300">
            "The stars are guides, not destiny makers. Your karma shapes your future." - Sri Ashwin Guruji
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;