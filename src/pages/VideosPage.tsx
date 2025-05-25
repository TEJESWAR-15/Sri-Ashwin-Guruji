import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Star } from 'lucide-react';

const VideosPage = () => {
  const featuredVideos = [
    {
      id: 'kuber',
      title: 'Kuber Puja for Wealth and Prosperity',
      duration: '45:28',
      thumbnail: 'https://images.pexels.com/photos/2745293/pexels-photo-2745293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Sacred ritual to invoke the blessings of Lord Kuber, the divine treasurer, for wealth abundance and prosperity in all areas of life.',
      views: '15,432',
      date: 'Mar 15, 2023'
    },
    {
      id: 'career',
      title: 'Career Success Puja and Mantras',
      duration: '38:12',
      thumbnail: 'https://images.pexels.com/photos/5690393/pexels-photo-5690393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Divine rituals and powerful mantras to remove career obstacles and invite success, growth, and recognition in your professional life.',
      views: '12,875',
      date: 'Apr 22, 2023'
    },
    {
      id: 'relationship',
      title: 'Divine Puja for Relationship Harmony',
      duration: '41:55',
      thumbnail: 'https://images.pexels.com/photos/3328077/pexels-photo-3328077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Sacred ceremony with powerful mantras to heal relationship karma, enhance understanding, and create harmonious connections with loved ones.',
      views: '18,943',
      date: 'May 10, 2023'
    },
    {
      id: 'health',
      title: 'Healing Puja for Health and Vitality',
      duration: '37:21',
      thumbnail: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Divine healing ritual to remove health obstacles, cleanse negative energies, and invite vitality, strength, and well-being.',
      views: '14,289',
      date: 'Jun 5, 2023'
    }
  ];

  const otherVideos = [
    {
      id: 'planetary',
      title: 'Understanding Planetary Influences',
      duration: '28:45',
      thumbnail: 'https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      views: '9,827',
      date: 'Jul 18, 2023'
    },
    {
      id: 'mantra',
      title: 'Powerful Mantras for Daily Practice',
      duration: '22:13',
      thumbnail: 'https://images.pexels.com/photos/5691392/pexels-photo-5691392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      views: '11,542',
      date: 'Aug 3, 2023'
    },
    {
      id: 'meditation',
      title: 'Guided Divine Meditation',
      duration: '19:48',
      thumbnail: 'https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      views: '8,632',
      date: 'Sep 12, 2023'
    },
    {
      id: 'karma',
      title: 'Understanding Karma and Life Purpose',
      duration: '32:17',
      thumbnail: 'https://images.pexels.com/photos/806427/pexels-photo-806427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      views: '10,378',
      date: 'Oct 25, 2023'
    },
    {
      id: 'saturn',
      title: 'Remedies for Saturn Transit',
      duration: '26:59',
      thumbnail: 'https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      views: '12,104',
      date: 'Nov 8, 2023'
    },
    {
      id: 'protection',
      title: 'Protection Rituals for Home and Family',
      duration: '29:32',
      thumbnail: 'https://images.pexels.com/photos/6787084/pexels-photo-6787084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      views: '9,546',
      date: 'Dec 14, 2023'
    }
  ];

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
              Sacred Puja Videos
            </h1>
            <p className="text-lg text-amber-100 mb-6">
              Divine rituals and sacred ceremonies performed by Sri Ashwin Guruji
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Star className="h-5 w-5 text-gold-500" />
              <Star className="h-5 w-5 text-gold-500" />
              <Star className="h-5 w-5 text-gold-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-12 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-8">
              Featured Sacred Ceremonies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredVideos.map((video) => (
                <motion.div 
                  key={video.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-divine transition-shadow border border-amber-100"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-52 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <PlayCircle className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-spiritual font-semibold text-maroon-700 mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4">{video.description}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{video.views} views</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Videos */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-8">
              More Divine Wisdom
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherVideos.map((video) => (
                <motion.div 
                  key={video.id}
                  className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-amber-100"
                  whileHover={{ y: -3 }}
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <PlayCircle className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-spiritual font-semibold text-maroon-700 mb-2">{video.title}</h3>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{video.views} views</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-maroon-800 to-maroon-700 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-spiritual font-bold mb-4">
              Subscribe for Sacred Updates
            </h2>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Be notified when Sri Ashwin Guruji uploads new puja videos, 
              divine teachings, and spiritual guidance
            </p>
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-700"
              />
              <button
                type="submit"
                className="bg-gold-500 hover:bg-gold-600 text-maroon-900 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default VideosPage;