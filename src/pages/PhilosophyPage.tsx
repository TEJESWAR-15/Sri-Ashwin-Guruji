import React from 'react';
import { motion } from 'framer-motion';
import { Star, Compass, Book, History, Globe, ExternalLink } from 'lucide-react';

const PhilosophyPage = () => {
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
              Hindu Philosophy & Spiritual Wisdom
            </h1>
            <p className="text-lg text-amber-100 mb-6">
              Ancient wisdom for navigating modern life with divine guidance
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Star className="h-5 w-5 text-gold-500" />
              <Star className="h-5 w-5 text-gold-500" />
              <Star className="h-5 w-5 text-gold-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-4">
                  The Divine Wisdom of Sanatan Dharma
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Hindu philosophy, or Sanatan Dharma, offers profound insights into the nature of existence, 
                  the self, and our relationship with the divine. This ancient wisdom provides timeless 
                  guidance for living a purposeful, harmonious, and spiritually aligned life.
                </p>
              </div>

              <div className="mb-8">
                <img 
                  src="https://images.pexels.com/photos/5961611/pexels-photo-5961611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sacred Hindu Texts" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center italic">
                  Ancient sacred texts contain timeless wisdom that guides the spiritual seeker
                </p>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Hinduism is not merely a religion but a comprehensive way of life that encompasses 
                a rich diversity of beliefs, practices, and philosophical schools. At its core, 
                it recognizes the divine nature of the soul (Atman) and its ultimate unity with 
                the cosmic consciousness (Brahman).
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Sri Ashwin Guruji's teachings draw from this vast spiritual tradition, offering 
                practical guidance for applying these ancient principles to modern life challenges. 
                Through understanding these divine truths, we can navigate life's journey with greater 
                awareness, purpose, and spiritual connection.
              </p>

              <div className="border-t border-amber-200 pt-6">
                <blockquote className="italic text-gray-700 pl-4 border-l-4 border-gold-500">
                  "The greatest wisdom comes from understanding that the Self within is divine, 
                  and that same divinity permeates all beings. This recognition is the foundation 
                  of compassion, love, and spiritual growth."
                  <footer className="text-right mt-2 text-maroon-700 font-medium">— Sri Ashwin Guruji</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-8 text-center">
              Core Concepts of Hindu Philosophy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-100">
                <h3 className="text-xl font-spiritual text-maroon-700 mb-3 flex items-center">
                  <span className="bg-maroon-700 text-gold-500 p-2 rounded-full mr-3">
                    <Book className="h-5 w-5" />
                  </span>
                  Dharma
                </h3>
                <p className="text-gray-700">
                  Dharma refers to the divine order that sustains the universe and the righteous duties, 
                  conduct, and path an individual must follow according to their unique nature and stage of life. 
                  It is the ethical and moral foundation that guides one toward harmony and spiritual growth.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-100">
                <h3 className="text-xl font-spiritual text-maroon-700 mb-3 flex items-center">
                  <span className="bg-maroon-700 text-gold-500 p-2 rounded-full mr-3">
                    <Compass className="h-5 w-5" />
                  </span>
                  Karma
                </h3>
                <p className="text-gray-700">
                  Karma is the universal law of cause and effect that governs all actions and their consequences. 
                  Every thought, word, and deed creates an energy that returns to the doer, shaping their future 
                  experiences and circumstances. Understanding karma leads to mindful living and taking responsibility 
                  for one's choices.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-100">
                <h3 className="text-xl font-spiritual text-maroon-700 mb-3 flex items-center">
                  <span className="bg-maroon-700 text-gold-500 p-2 rounded-full mr-3">
                    <History className="h-5 w-5" />
                  </span>
                  Samsara
                </h3>
                <p className="text-gray-700">
                  Samsara is the continuous cycle of birth, death, and rebirth governed by karma. 
                  The soul journeys through multiple lifetimes, gathering experiences and learning 
                  spiritual lessons until it achieves liberation (moksha). Recognizing the transient 
                  nature of physical existence fosters detachment and spiritual focus.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-100">
                <h3 className="text-xl font-spiritual text-maroon-700 mb-3 flex items-center">
                  <span className="bg-maroon-700 text-gold-500 p-2 rounded-full mr-3">
                    <Globe className="h-5 w-5" />
                  </span>
                  Atman and Brahman
                </h3>
                <p className="text-gray-700">
                  Atman is the eternal, divine soul within each being, while Brahman is the ultimate 
                  cosmic consciousness or divine reality. The great spiritual truth (Mahavakya) teaches 
                  that "Atman is Brahman" — the individual soul is one with the universal consciousness. 
                  Realizing this unity is the highest spiritual attainment.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-6">
                These fundamental concepts form the philosophical foundation of Hindu spirituality and 
                guide the practices and beliefs that lead to divine realization and liberation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Paths */}
      <section className="py-12 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-8 text-center">
              The Four Spiritual Paths
            </h2>
            
            <p className="text-gray-700 mb-8 text-center">
              Hinduism recognizes that individuals have different temperaments and offers multiple 
              paths to reach the divine. These complementary approaches accommodate diverse spiritual 
              inclinations while leading to the same ultimate goal.
            </p>

            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-100">
                <h3 className="text-xl font-spiritual text-maroon-700 mb-3">
                  Bhakti Yoga: The Path of Devotion
                </h3>
                <p className="text-gray-700 mb-4">
                  Bhakti Yoga is the spiritual path of loving devotion to the Divine. It involves surrender, 
                  worship, prayer, and developing a personal relationship with God. This path appeals to the 
                  emotional nature and transforms ordinary love into divine love.
                </p>
                <div className="pl-4 border-l-4 border-maroon-200">
                  <p className="text-gray-600 italic">
                    "When love for the Divine becomes the center of your life, every action becomes an offering 
                    and every moment a communion with the beloved."
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-100">
                <h3 className="text-xl font-spiritual text-maroon-700 mb-3">
                  Jnana Yoga: The Path of Knowledge
                </h3>
                <p className="text-gray-700 mb-4">
                  Jnana Yoga is the path of wisdom and knowledge. It involves deep intellectual inquiry into 
                  the nature of existence, self-reflection, and discrimination between the eternal and the 
                  transient. This path appeals to the philosophical mind seeking truth through understanding.
                </p>
                <div className="pl-4 border-l-4 border-maroon-200">
                  <p className="text-gray-600 italic">
                    "True knowledge arises when you recognize what is unchanging amidst all that changes, 
                    what is eternal amidst all that is temporary."
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-100">
                <h3 className="text-xl font-spiritual text-maroon-700 mb-3">
                  Karma Yoga: The Path of Selfless Action
                </h3>
                <p className="text-gray-700 mb-4">
                  Karma Yoga is the path of selfless service and right action. It involves performing duties 
                  without attachment to results, dedicating all actions to the Divine. This path purifies the 
                  heart through selfless work and transforms ordinary activities into spiritual practice.
                </p>
                <div className="pl-4 border-l-4 border-maroon-200">
                  <p className="text-gray-600 italic">
                    "When you perform action as sacred service without concern for personal gain, you become an 
                    instrument of the Divine and find liberation in the midst of activity."
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-100">
                <h3 className="text-xl font-spiritual text-maroon-700 mb-3">
                  Raja Yoga: The Path of Meditation
                </h3>
                <p className="text-gray-700 mb-4">
                  Raja Yoga is the royal path of meditation and mind control. Codified by Patanjali in the 
                  Yoga Sutras, it involves the eight-limbed path including ethical disciplines, physical 
                  postures, breath control, and meditation practices to achieve samadhi (divine union).
                </p>
                <div className="pl-4 border-l-4 border-maroon-200">
                  <p className="text-gray-600 italic">
                    "Through mastery of the mind and senses, the yogi stills the fluctuations of consciousness 
                    and beholds the light of the soul shining in its pristine glory."
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700">
                Sri Ashwin Guruji guides seekers to recognize their natural inclinations and find a balanced 
                approach that incorporates elements from each path for complete spiritual development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-8 text-center">
              Sacred Texts and Resources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-100">
                <h3 className="text-xl font-spiritual text-maroon-700 mb-3">Primary Texts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2 mt-1">❋</span>
                    <div>
                      <p className="font-medium text-maroon-700">The Vedas</p>
                      <p className="text-gray-600 text-sm">The oldest sacred texts containing hymns, philosophical teachings, and rituals</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2 mt-1">❋</span>
                    <div>
                      <p className="font-medium text-maroon-700">Upanishads</p>
                      <p className="text-gray-600 text-sm">Philosophical texts that form the basis of spiritual knowledge and self-realization</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2 mt-1">❋</span>
                    <div>
                      <p className="font-medium text-maroon-700">Bhagavad Gita</p>
                      <p className="text-gray-600 text-sm">Divine discourse on duty, devotion, knowledge, and spiritual practice</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2 mt-1">❋</span>
                    <div>
                      <p className="font-medium text-maroon-700">Puranas</p>
                      <p className="text-gray-600 text-sm">Ancient texts containing stories, myths, and teachings about cosmic cycles</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-100">
                <h3 className="text-xl font-spiritual text-maroon-700 mb-3">Recommended Books</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2 mt-1">❋</span>
                    <p className="text-gray-700">"The Autobiography of a Yogi" by Paramahansa Yogananda</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2 mt-1">❋</span>
                    <p className="text-gray-700">"The Bhagavad Gita As It Is" with commentary</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2 mt-1">❋</span>
                    <p className="text-gray-700">"Light on Yoga" by B.K.S. Iyengar</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2 mt-1">❋</span>
                    <p className="text-gray-700">"The Complete Works of Swami Vivekananda"</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2 mt-1">❋</span>
                    <p className="text-gray-700">"Autobiography of a Sage" by Sri Ramana Maharshi</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-maroon-700 to-maroon-800 p-6 rounded-lg text-white mb-8">
              <h3 className="text-xl font-spiritual text-gold-500 mb-4">Online Learning Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="https://www.vedantu.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-maroon-600 p-3 rounded-md hover:bg-maroon-500 transition-colors"
                >
                  <span>Vedantu - Online Vedic Education</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
                <a 
                  href="https://www.yogainternational.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-maroon-600 p-3 rounded-md hover:bg-maroon-500 transition-colors"
                >
                  <span>Yoga International</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
                <a 
                  href="https://www.iskcondesiretree.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-maroon-600 p-3 rounded-md hover:bg-maroon-500 transition-colors"
                >
                  <span>ISKCON Desire Tree</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
                <a 
                  href="https://www.himalayanacademy.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-maroon-600 p-3 rounded-md hover:bg-maroon-500 transition-colors"
                >
                  <span>Himalayan Academy</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-6">
                Sri Ashwin Guruji provides personalized guidance on which texts and resources 
                are most beneficial for your specific spiritual journey and current life circumstances.
              </p>
              <a
                href="/contact"
                className="inline-block bg-maroon-700 hover:bg-maroon-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Request Personalized Spiritual Guidance
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PhilosophyPage;