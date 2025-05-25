import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Search, X } from 'lucide-react';
import ProductCard from '../components/store/ProductCard';

const StorePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'idols', name: 'Divine Idols' },
    { id: 'gemstones', name: 'Sacred Gemstones' },
    { id: 'rosaries', name: 'Prayer Rosaries' },
    { id: 'incense', name: 'Spiritual Incense' },
    { id: 'books', name: 'Divine Books' },
    { id: 'accessories', name: 'Ritual Accessories' }
  ];

  const products = [
    {
      id: 'ganesh-idol',
      name: 'Lord Ganesha Brass Idol',
      price: 129.99,
      imageUrl: 'https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Hand-crafted brass Ganesha idol, blessed by Sri Ashwin Guruji for removing obstacles and bringing prosperity.',
      category: 'idols'
    },
    {
      id: 'lakshmi-idol',
      name: 'Goddess Lakshmi Idol',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/5705058/pexels-photo-5705058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Beautiful hand-crafted Goddess Lakshmi idol, blessed for abundance and wealth manifestation.',
      category: 'idols'
    },
    {
      id: 'ruby-gemstone',
      name: 'Energized Ruby Gemstone',
      price: 299.99,
      imageUrl: 'https://images.pexels.com/photos/4040399/pexels-photo-4040399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Natural ruby gemstone, energized with specific mantras to enhance sun energy and vitality.',
      category: 'gemstones'
    },
    {
      id: 'yellow-sapphire',
      name: 'Yellow Sapphire',
      price: 349.99,
      imageUrl: 'https://images.pexels.com/photos/5138405/pexels-photo-5138405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Sacred yellow sapphire, energized to enhance Jupiter\'s blessings of wisdom, wealth and spiritual growth.',
      category: 'gemstones'
    },
    {
      id: 'rudraksha-mala',
      name: 'Five-Mukhi Rudraksha Mala',
      price: 89.99,
      imageUrl: 'https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Sacred five-faced Rudraksha rosary for meditation, blessed to enhance spiritual energy and connect with Lord Shiva.',
      category: 'rosaries'
    },
    {
      id: 'crystal-mala',
      name: 'Crystal Meditation Mala',
      price: 79.99,
      imageUrl: 'https://images.pexels.com/photos/6045065/pexels-photo-6045065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Clear quartz crystal mala with 108 beads, energized for clarity of mind and spiritual awakening.',
      category: 'rosaries'
    },
    {
      id: 'sacred-incense',
      name: 'Sacred Sandalwood Incense',
      price: 24.99,
      imageUrl: 'https://images.pexels.com/photos/5460370/pexels-photo-5460370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Pure sandalwood incense sticks made with traditional methods, blessed for meditation and creating sacred space.',
      category: 'incense'
    },
    {
      id: 'nag-champa',
      name: 'Divine Nag Champa Incense',
      price: 19.99,
      imageUrl: 'https://images.pexels.com/photos/7175544/pexels-photo-7175544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Premium Nag Champa incense sticks for spiritual practices, meditation, and creating peaceful atmosphere.',
      category: 'incense'
    },
    {
      id: 'bhagavad-gita',
      name: 'Sacred Bhagavad Gita',
      price: 49.99,
      imageUrl: 'https://images.pexels.com/photos/5961611/pexels-photo-5961611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Beautiful hardcover edition of the Bhagavad Gita with Sanskrit text, English translation, and spiritual commentary.',
      category: 'books'
    },
    {
      id: 'upanishads',
      name: 'The Principal Upanishads',
      price: 59.99,
      imageUrl: 'https://images.pexels.com/photos/5961611/pexels-photo-5961611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Comprehensive collection of the principal Upanishads with insightful commentary on the profound spiritual wisdom.',
      category: 'books'
    },
    {
      id: 'copper-vessel',
      name: 'Copper Ritual Vessel',
      price: 45.99,
      imageUrl: 'https://images.pexels.com/photos/11043172/pexels-photo-11043172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Traditional copper vessel for holy water, energized for purification rituals and sacred ceremonies.',
      category: 'accessories'
    },
    {
      id: 'puja-thali',
      name: 'Brass Puja Thali Set',
      price: 69.99,
      imageUrl: 'https://images.pexels.com/photos/6044087/pexels-photo-6044087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Complete brass puja thali set with all necessary items for daily worship and sacred rituals.',
      category: 'accessories'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-r from-maroon-800 to-maroon-700 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-spiritual font-bold mb-4">
              Divine Spiritual Store
            </h1>
            <p className="text-lg text-amber-100 mb-6">
              Sacred items blessed by Sri Ashwin Guruji for your spiritual journey
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Star className="h-5 w-5 text-gold-500" />
              <Star className="h-5 w-5 text-gold-500" />
              <Star className="h-5 w-5 text-gold-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="py-12 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Search and Categories */}
            <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
              <div className="relative flex-grow max-w-md">
                <input
                  type="text"
                  placeholder="Search sacred items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500 bg-white"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-maroon-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              
              <div className="overflow-x-auto">
                <div className="flex space-x-2 min-w-max">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-md text-sm whitespace-nowrap ${
                        activeCategory === category.id
                          ? 'bg-maroon-700 text-white'
                          : 'bg-white text-maroon-700 border border-amber-200 hover:bg-amber-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    description={product.description}
                    category={product.category}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No sacred items found. Please try a different search term or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blessing Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-maroon-700 to-maroon-800 rounded-lg p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gold-500">
                  <img 
                    src="https://images.pexels.com/photos/8108391/pexels-photo-8108391.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Sri Ashwin Guruji" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-6 text-center md:text-left">
                <h2 className="text-2xl font-spiritual font-bold text-gold-500 mb-3">Divine Blessing</h2>
                <p className="text-amber-100 mb-4">
                  All sacred items in our spiritual store are personally blessed by Sri Ashwin Guruji 
                  through specific rituals and mantras, imbuing them with divine energy to support your 
                  spiritual journey and help overcome life's challenges.
                </p>
                <p className="text-gold-400 italic">
                  "These sacred items are not merely objects, but divine instruments that connect you 
                  with cosmic energies to transform your life."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-12 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-6 text-center">
              Sacred Shipping Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-100">
                <h3 className="font-spiritual text-lg text-maroon-700 mb-3">Worldwide Shipping</h3>
                <p className="text-gray-600 text-sm">
                  We offer international shipping to bring sacred items to devotees worldwide. 
                  Delivery times vary by location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-100">
                <h3 className="font-spiritual text-lg text-maroon-700 mb-3">Careful Packaging</h3>
                <p className="text-gray-600 text-sm">
                  All sacred items are packaged with utmost care and respect, 
                  maintaining their divine energy during transit.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-100">
                <h3 className="font-spiritual text-lg text-maroon-700 mb-3">Secure Payments</h3>
                <p className="text-gray-600 text-sm">
                  We accept all major credit cards, PayPal, and bank transfers. 
                  All transactions are secure and encrypted.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                For questions about products or orders, please <a href="/contact" className="text-maroon-700 hover:underline">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default StorePage;