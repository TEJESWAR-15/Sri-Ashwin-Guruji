import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot as Lotus, Star, Calendar, Book, Trophy, Users } from 'lucide-react';

const AboutPage = () => {
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
              The Journey of Sri Ashwin Guruji Avadhootha
            </h1>
            <p className="text-lg text-amber-100 mb-6">
              From Curiosity to Divine Calling
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Star className="h-5 w-5 text-gold-500" />
              <Star className="h-5 w-5 text-gold-500" />
              <Star className="h-5 w-5 text-gold-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md">
            {/* Introduction */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-1 order-2 md:order-1">
                <div className="sticky top-24">
                  <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                    <h3 className="text-xl font-spiritual text-maroon-700 mb-4">Divine Profile</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="bg-maroon-700 rounded-full p-2 mr-3">
                          <Lotus className="h-5 w-5 text-gold-500" />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Spiritual Name</p>
                          <p className="font-medium text-maroon-700">Sri Ashwin Avadhootha</p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-maroon-700 rounded-full p-2 mr-3">
                          <Calendar className="h-5 w-5 text-gold-500" />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Experience</p>
                          <p className="font-medium text-maroon-700">25+ Years</p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-maroon-700 rounded-full p-2 mr-3">
                          <Book className="h-5 w-5 text-gold-500" />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Divine Specialization</p>
                          <p className="font-medium text-maroon-700">Vedic Astrology, Karma Healing</p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-maroon-700 rounded-full p-2 mr-3">
                          <Trophy className="h-5 w-5 text-gold-500" />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Blessings From</p>
                          <p className="font-medium text-maroon-700">Goddess Sathyavachini</p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-maroon-700 rounded-full p-2 mr-3">
                          <Users className="h-5 w-5 text-gold-500" />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Lives Touched</p>
                          <p className="font-medium text-maroon-700">5000+</p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link
                        to="/booking"
                        className="block text-center bg-maroon-700 hover:bg-maroon-800 text-white px-4 py-2 rounded-md font-medium transition-colors"
                      >
                        Book Divine Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 order-1 md:order-2">
                <div className="mb-8">
                  <img 
                    src="https://images.pexels.com/photos/8108391/pexels-photo-8108391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Sri Ashwin Guruji" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <div>
                  <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-4">
                    The Divine Beginning
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Sri Ashwin Guruji's spiritual journey began in the ancient temple town of Tirupati, where as a young boy of just seven, he experienced his first divine vision. Born into a family of scholars and spiritual practitioners, the seeds of cosmic wisdom were planted early in his life.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    At the age of sixteen, during a pilgrimage to the sacred temple of Goddess Sathyavachini, Guruji experienced a profound spiritual awakening. For three days and nights, he remained in deep meditation, receiving divine visions and cosmic knowledge directly from the Goddess. This transformative experience marked the beginning of his divine calling.
                  </p>
                  
                  <div className="border-l-4 border-gold-500 pl-4 bg-amber-50 p-4 mb-6">
                    <p className="text-maroon-700 italic">
                      "The cosmic truth was revealed to me not as knowledge to be learned, but as wisdom already present within, waiting to be awakened. The Goddess showed me that my purpose was to help others recognize their own divine nature and overcome karmic challenges."
                    </p>
                    <p className="text-right text-maroon-600 mt-2">- Sri Ashwin Guruji</p>
                  </div>
                  
                  <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-4 mt-8">
                    Spiritual Education and Divine Training
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Following his divine calling, Guruji spent twelve years studying under renowned spiritual masters in the Himalayas. He mastered Vedic astrology, Sanskrit scriptures, ancient healing rituals, and deep meditative practices. His exceptional abilities in reading the cosmic patterns and understanding karmic connections quickly earned him recognition among spiritual seekers.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    After years of rigorous spiritual training and ascetic practices, Guruji returned to society with a mission to guide those seeking divine truth and cosmic harmony. His profound insights and remarkably accurate predictions soon attracted seekers from across India and eventually from around the world.
                  </p>
                  
                  <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-4 mt-8">
                    Divine Mission and Service
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    For over 25 years, Sri Ashwin Guruji has dedicated his life to helping individuals navigate their spiritual journeys, overcome karmic obstacles, and align with their divine purpose. His unique approach combines traditional Vedic wisdom with practical guidance for modern life challenges.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Guruji's divine consultations have helped thousands resolve persistent problems in relationships, career, health, and spiritual growth. His karma healing rituals, specifically tailored to each individual's cosmic blueprint, have been known to bring remarkable transformations in seemingly impossible situations.
                  </p>
                  
                  <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 mb-8">
                    <h3 className="text-xl font-spiritual text-maroon-700 mb-3">Divine Achievements</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">✦</span>
                        <span className="text-gray-700">Founded the Temple of Cosmic Harmony, a spiritual center dedicated to Vedic wisdom</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">✦</span>
                        <span className="text-gray-700">Authored three books on spiritual transformation and karmic healing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">✦</span>
                        <span className="text-gray-700">Conducted sacred pilgrimages to India's most powerful spiritual sites</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">✦</span>
                        <span className="text-gray-700">Established a charitable foundation providing education to underprivileged children</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">✦</span>
                        <span className="text-gray-700">Recognized by spiritual leaders for his contributions to preserving ancient wisdom</span>
                      </li>
                    </ul>
                  </div>
                  
                  <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-4 mt-8">
                    Guruji Today
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Today, Sri Ashwin Guruji continues his divine mission, balancing his time between individual consultations, group spiritual sessions, and periods of deep meditation to maintain his cosmic connection. He remains committed to making ancient spiritual wisdom accessible to all sincere seekers, regardless of their background or life circumstances.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Guruji's vision is to create a world where individuals recognize their divine nature and live in harmony with cosmic laws, bringing peace, prosperity, and spiritual fulfillment to their lives and communities.
                  </p>
                  
                  <div className="mt-8 flex justify-center">
                    <Link
                      to="/services"
                      className="inline-block bg-maroon-700 hover:bg-maroon-800 text-white px-6 py-3 rounded-md font-medium transition-colors mr-4"
                    >
                      Explore Divine Services
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-block bg-transparent border-2 border-maroon-700 text-maroon-700 hover:bg-maroon-700 hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
                    >
                      Contact Guruji
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;