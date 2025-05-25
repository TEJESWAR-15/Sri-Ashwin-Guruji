import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Bot as Lotus, Compass, Sparkles, Star, ShieldCheck, HeartHandshake } from 'lucide-react';
import ServiceCard from '../components/service/ServiceCard';

const servicesData = [
  {
    icon: <Sun className="h-10 w-10" />,
    title: 'Horoscope Reading',
    price: 149,
    description: 'A comprehensive analysis of your birth chart revealing your cosmic blueprint, strengths, challenges, and spiritual path.',
    benefits: [
      'Detailed analysis of planetary positions at your birth time',
      'Insights into your personality, strengths, and challenges',
      'Guidance on career path aligned with your cosmic purpose',
      'Relationship compatibility insights',
      'Upcoming planetary transits and their effects on your life'
    ]
  },
  {
    icon: <Moon className="h-10 w-10" />,
    title: 'Spiritual Counseling',
    price: 129,
    description: 'Divine guidance to navigate life challenges, find inner peace, and connect with your higher purpose through spiritual wisdom.',
    benefits: [
      'Address specific life challenges with spiritual perspective',
      'Learn meditation techniques aligned with your energy',
      'Discover your spiritual gifts and how to develop them',
      'Find clarity on your spiritual path and purpose',
      'Receive guidance for emotional healing and inner peace'
    ]
  },
  {
    icon: <Lotus className="h-10 w-10" />,
    title: 'Karma Healing',
    price: 199,
    description: 'Ancient rituals and remedies to balance your karma, remove obstacles, and create positive energetic shifts in your life.',
    benefits: [
      'Identification of karmic patterns affecting your present life',
      'Customized rituals to balance challenging karmic debts',
      'Energetic cleansing to remove blocks and obstacles',
      'Specific mantras and practices for karmic healing',
      'Guidance on creating positive karma moving forward'
    ]
  },
  {
    icon: <Compass className="h-10 w-10" />,
    title: 'Ritual Guidance',
    price: 159,
    description: 'Learn sacred Vedic rituals and practices to enhance spiritual connection, invite divine blessings, and create sacred space.',
    benefits: [
      'Personalized daily spiritual practice recommendations',
      'Sacred rituals for specific life events and transitions',
      'Guidance on creating and maintaining a home altar',
      'Instructions for performing puja (worship) ceremonies',
      'Rituals for specific planetary influences in your chart'
    ]
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: 'Energy Cleansing',
    price: 179,
    description: 'Purification of your aura, home, or workspace to remove negative energies and create harmony and positive vibrations.',
    benefits: [
      'Remote energy clearing of your personal aura',
      'Guidance for cleansing your home or workspace',
      'Protection techniques against negative energies',
      'Enhancing positive energy flow in living spaces',
      'Creating energetic boundaries for empaths and sensitives'
    ]
  },
  {
    icon: <Star className="h-10 w-10" />,
    title: 'Gemstone Consultation',
    price: 119,
    description: 'Discover the perfect gemstones for your unique birth chart to enhance positive planetary influences and mitigate challenging ones.',
    benefits: [
      'Identification of ideal gemstones based on your birth chart',
      'Guidance on proper selection, sizing, and setting',
      'Rituals for energizing and wearing gemstones',
      'Information on caring for and maintaining your gems',
      'Alternative options for those with budget considerations'
    ]
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: 'Protection Rituals',
    price: 139,
    description: 'Ancient Vedic rituals to create spiritual protection for yourself, loved ones, home, or business against negative influences.',
    benefits: [
      'Personalized protection mantras and practices',
      'Energy shields for empaths and highly sensitive people',
      'Home or business space protection rituals',
      'Protection during challenging planetary transits',
      'Clearing of negative attachments or influences'
    ]
  },
  {
    icon: <HeartHandshake className="h-10 w-10" />,
    title: 'Relationship Healing',
    price: 189,
    description: 'Divine guidance to heal relationship karma, improve communication, and create harmonious connections with loved ones.',
    benefits: [
      'Analysis of relationship patterns from past lives',
      'Rituals to heal relationship karma and conflicts',
      'Communication enhancement techniques',
      'Compatibility guidance for couples',
      'Healing practices for family relationships'
    ]
  }
];

const ServicesPage = () => {
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
              Divine Services
            </h1>
            <p className="text-lg text-amber-100 mb-6">
              Sacred offerings to guide your spiritual journey and transform your life
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Star className="h-5 w-5 text-gold-500" />
              <Star className="h-5 w-5 text-gold-500" />
              <Star className="h-5 w-5 text-gold-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-4">
              Sacred Offerings for Divine Transformation
            </h2>
            <p className="text-gray-700">
              Sri Ashwin Guruji offers these divine services with pure intention and cosmic wisdom.
              Each service is personalized to your unique spiritual journey and karmic path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                price={service.price}
                description={service.description}
                benefits={service.benefits}
              />
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
              <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-4 text-center">
                Special Puja Services
              </h2>
              <p className="text-gray-700 mb-6 text-center">
                Sri Ashwin Guruji performs these sacred puja ceremonies with devotion and divine connection.
                These powerful rituals invoke cosmic blessings for specific areas of life.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h3 className="font-spiritual text-xl text-maroon-700 mb-2">Kuber Puja</h3>
                  <p className="text-gray-700 mb-3">Sacred ceremony to invoke the blessings of Lord Kuber, the divine treasurer, for wealth and prosperity.</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-maroon-700">$299</span>
                    <Link
                      to="/booking"
                      className="bg-maroon-700 hover:bg-maroon-800 text-white px-4 py-1 rounded-md font-medium transition-colors text-sm"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h3 className="font-spiritual text-xl text-maroon-700 mb-2">Career Advancement Puja</h3>
                  <p className="text-gray-700 mb-3">Divine ritual to remove career obstacles and invite success, recognition, and growth in professional life.</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-maroon-700">$249</span>
                    <Link
                      to="/booking"
                      className="bg-maroon-700 hover:bg-maroon-800 text-white px-4 py-1 rounded-md font-medium transition-colors text-sm"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h3 className="font-spiritual text-xl text-maroon-700 mb-2">Relationship Harmony Puja</h3>
                  <p className="text-gray-700 mb-3">Sacred ceremony invoking divine blessings for love, understanding, and harmony in relationships.</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-maroon-700">$279</span>
                    <Link
                      to="/booking"
                      className="bg-maroon-700 hover:bg-maroon-800 text-white px-4 py-1 rounded-md font-medium transition-colors text-sm"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h3 className="font-spiritual text-xl text-maroon-700 mb-2">Health & Vitality Puja</h3>
                  <p className="text-gray-700 mb-3">Divine rituals to remove health obstacles and invite healing energy, vitality, and well-being.</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-maroon-700">$259</span>
                    <Link
                      to="/booking"
                      className="bg-maroon-700 hover:bg-maroon-800 text-white px-4 py-1 rounded-md font-medium transition-colors text-sm"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial and CTA */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 p-8 rounded-lg shadow-md text-white">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0">
                  <img 
                    src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Priya Sharma" 
                    className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-gold-500"
                  />
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <div className="flex mb-2">
                    <Star className="h-5 w-5 text-gold-500 fill-gold-500" />
                    <Star className="h-5 w-5 text-gold-500 fill-gold-500" />
                    <Star className="h-5 w-5 text-gold-500 fill-gold-500" />
                    <Star className="h-5 w-5 text-gold-500 fill-gold-500" />
                    <Star className="h-5 w-5 text-gold-500 fill-gold-500" />
                  </div>
                  <p className="text-amber-100 italic mb-4">
                    "The karma healing ritual performed by Sri Ashwin Guruji created an immediate shift in my life. 
                    A business opportunity I had been pursuing for months suddenly materialized, and family conflicts 
                    that had been ongoing for years resolved peacefully. His divine connection is truly remarkable."
                  </p>
                  <p className="text-gold-500 font-semibold">- Priya Sharma, Mumbai</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-4">
                Begin Your Divine Transformation Today
              </h2>
              <p className="text-gray-700 mb-8">
                Each consultation begins with Sri Ashwin Guruji connecting with your cosmic energy 
                and understanding your unique spiritual journey.
              </p>
              <Link
                to="/booking"
                className="inline-block bg-maroon-700 hover:bg-maroon-800 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md"
              >
                Schedule Your Divine Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;