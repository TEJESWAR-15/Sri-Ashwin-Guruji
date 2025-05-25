import React from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar, Sun, Moon, Twitter as Jupiter, Ligature as Saturn, Merge as Mercury, Menu as Venus, Stars as Mars } from 'lucide-react';

const WeeklyGuidancePage = () => {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  // Calculate the start and end date of the current week
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  
  const weekRange = `${startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

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
              Weekly Divine Guidance
            </h1>
            <p className="text-lg text-amber-100 mb-3">
              Cosmic insights and spiritual wisdom for the week
            </p>
            <p className="text-gold-500 font-medium">
              {weekRange}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
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
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Calendar className="h-6 w-6 text-maroon-700 mr-3" />
              <p className="text-maroon-700 font-medium">
                Published on {formattedDate} by Sri Ashwin Guruji Avadhootha
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-4">
                Divine Message for This Week
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Beloved souls, this week brings powerful cosmic energies as Jupiter forms a beneficial aspect with Venus, creating a harmonious flow of abundance and spiritual connection. The waxing moon enhances intuitive abilities, making this an excellent time for meditation, spiritual practices, and connecting with divine guidance.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Mars entering Leo brings a surge of creative energy and courage to pursue your divine purpose. However, Saturn's continued retrograde reminds us to be patient with our spiritual progress and to focus on building solid foundations through consistent practice and self-discipline.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 mb-8">
                <h3 className="text-xl font-spiritual text-maroon-700 mb-3">Weekly Mantra</h3>
                <p className="text-gray-700 italic text-center text-lg">
                  "I am divinely guided in all that I do. The cosmic energies support my highest good, and I move forward with faith and trust in the divine plan."
                </p>
              </div>

              <h3 className="text-xl font-spiritual font-bold text-maroon-700 mb-4">
                Planetary Influences This Week
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <Sun className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-maroon-700 mb-1">Sun in Leo</h4>
                    <p className="text-gray-600 text-sm">
                      The Sun in Leo brings confidence, creativity, and vitality. Focus on expressing your authentic self and shining your divine light. Great time for leadership and creative pursuits.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Moon className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-maroon-700 mb-1">Waxing Moon in Libra</h4>
                    <p className="text-gray-600 text-sm">
                      The waxing moon in Libra enhances relationships and harmony. Focus on creating balance in your life and nurturing important connections. Good time for cooperation and partnership.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Jupiter className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-maroon-700 mb-1">Jupiter in Pisces</h4>
                    <p className="text-gray-600 text-sm">
                      Jupiter in Pisces expands spiritual awareness and compassion. Excellent time for spiritual studies, prayer, and connecting with universal wisdom. Open yourself to divine guidance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Venus className="h-6 w-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-maroon-700 mb-1">Venus in Libra</h4>
                    <p className="text-gray-600 text-sm">
                      Venus in its home sign of Libra brings harmony, beauty, and grace to relationships. Wonderful time for love, social connections, and artistic pursuits. Focus on creating beauty in your life.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mars className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-maroon-700 mb-1">Mars in Leo</h4>
                    <p className="text-gray-600 text-sm">
                      Mars in Leo brings courage, passion, and creative energy. Excellent time to take action on creative projects and assert yourself confidently. Channel this energy constructively.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Saturn className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-maroon-700 mb-1">Saturn Retrograde in Aquarius</h4>
                    <p className="text-gray-600 text-sm">
                      Saturn retrograde asks us to review our commitments and responsibilities. Time for inner work and restructuring. Focus on creating more authentic foundations for your life.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mercury className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-maroon-700 mb-1">Mercury in Virgo</h4>
                    <p className="text-gray-600 text-sm">
                      Mercury in its home sign of Virgo brings mental clarity and analytical abilities. Excellent time for study, planning, and detailed work. Pay attention to the small details of your spiritual practice.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-spiritual font-bold text-maroon-700 mb-4">
                Divine Guidance for Each Element
              </h3>

              <div className="space-y-6 mb-8">
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-medium text-maroon-700 mb-2">Fire Signs (Aries, Leo, Sagittarius)</h4>
                  <p className="text-gray-700">
                    Your natural fire is enhanced this week, bringing creative inspiration and courage. Channel this energy into spiritual practices that involve movement and expression. Be mindful not to burn out by taking on too much. Balance action with contemplation.
                  </p>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-medium text-maroon-700 mb-2">Water Signs (Cancer, Scorpio, Pisces)</h4>
                  <p className="text-gray-700">
                    Your intuitive abilities are heightened this week. Pay attention to dreams and subtle messages from the divine. Excellent time for emotional healing and deepening spiritual connections. Create sacred space for quietude and reflection.
                  </p>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-medium text-maroon-700 mb-2">Earth Signs (Taurus, Virgo, Capricorn)</h4>
                  <p className="text-gray-700">
                    Focus on grounding spiritual insights into practical application this week. Create tangible expressions of your spiritual practice in your daily life. Good time for establishing new spiritual habits and routines that support your growth.
                  </p>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-medium text-maroon-700 mb-2">Air Signs (Gemini, Libra, Aquarius)</h4>
                  <p className="text-gray-700">
                    Your mental clarity and communication abilities are enhanced. Excellent time for spiritual studies, sharing wisdom, and connecting with like-minded individuals. Balance intellectual understanding with heart-centered practices.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-spiritual font-bold text-maroon-700 mb-4">
                Divine Remedies and Practices
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-gold-500 mr-2 font-bold">❋</span>
                  <div>
                    <h4 className="font-medium text-maroon-700">Mantra for Abundance</h4>
                    <p className="text-gray-700">
                      Chant "Om Shreem Hreem Kleem Mahalakshmiyei Namaha" 108 times daily to invoke divine abundance and prosperity during this Jupiter-Venus aspect.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-gold-500 mr-2 font-bold">❋</span>
                  <div>
                    <h4 className="font-medium text-maroon-700">Color Therapy</h4>
                    <p className="text-gray-700">
                      Wear purple or royal blue this week to enhance spiritual connection and divine protection during this powerful cosmic alignment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-gold-500 mr-2 font-bold">❋</span>
                  <div>
                    <h4 className="font-medium text-maroon-700">Gemstone Recommendation</h4>
                    <p className="text-gray-700">
                      Yellow sapphire (representing Jupiter) and diamond or clear quartz (representing Venus) are beneficial to wear this week to enhance the harmonious planetary energies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-gold-500 mr-2 font-bold">❋</span>
                  <div>
                    <h4 className="font-medium text-maroon-700">Meditation Focus</h4>
                    <p className="text-gray-700">
                      Meditate on the heart chakra this week, visualizing a green light expanding from your heart center, connecting you with divine love and universal wisdom.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-amber-200 pt-6 mt-8">
                <h3 className="text-xl font-spiritual font-bold text-maroon-700 mb-4">
                  Final Divine Message
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Remember, beloved souls, that you are always supported by divine energies. This week offers a special opportunity to align more deeply with your spiritual path and divine purpose. Trust the cosmic flow and remain open to receiving guidance in unexpected ways.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  For personalized guidance during this powerful cosmic period, consider booking a divine consultation to address your specific spiritual needs and karmic patterns.
                </p>
                <p className="text-right text-maroon-700 italic">
                  With divine blessings,<br />
                  Sri Ashwin Guruji Avadhootha
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-4">
              Receive Weekly Divine Guidance
            </h2>
            <p className="text-gray-700 mb-6">
              Subscribe to receive Sri Ashwin Guruji's weekly guidance directly in your inbox
            </p>
            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-md border border-amber-200 focus:outline-none focus:ring-2 focus:ring-maroon-500"
              />
              <button
                type="submit"
                className="bg-maroon-700 hover:bg-maroon-800 text-white px-6 py-2 rounded-r-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Previous Guidance */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-6 text-center">
              Previous Divine Guidance
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-100">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-maroon-700 mr-2" />
                  <p className="text-gray-600 text-sm">August 7 - August 13, 2023</p>
                </div>
                <h3 className="font-spiritual text-lg text-maroon-700 mb-2">New Moon Manifestation Week</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Guidance for harnessing the powerful new moon energy for setting intentions and beginning new spiritual practices.
                </p>
                <button className="text-maroon-700 font-medium hover:text-maroon-800 transition-colors">
                  Read Full Guidance →
                </button>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-100">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-maroon-700 mr-2" />
                  <p className="text-gray-600 text-sm">July 31 - August 6, 2023</p>
                </div>
                <h3 className="font-spiritual text-lg text-maroon-700 mb-2">Mercury Retrograde Preparation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Divine guidance for navigating the upcoming Mercury retrograde period with spiritual grace and minimal disruption.
                </p>
                <button className="text-maroon-700 font-medium hover:text-maroon-800 transition-colors">
                  Read Full Guidance →
                </button>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-100">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-maroon-700 mr-2" />
                  <p className="text-gray-600 text-sm">July 24 - July 30, 2023</p>
                </div>
                <h3 className="font-spiritual text-lg text-maroon-700 mb-2">Guru Purnima Special Guidance</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Special guidance for the sacred Guru Purnima celebration, honoring the divine teacher principle and spiritual lineage.
                </p>
                <button className="text-maroon-700 font-medium hover:text-maroon-800 transition-colors">
                  Read Full Guidance →
                </button>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg shadow-md border border-amber-100">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-maroon-700 mr-2" />
                  <p className="text-gray-600 text-sm">July 17 - July 23, 2023</p>
                </div>
                <h3 className="font-spiritual text-lg text-maroon-700 mb-2">Venus Retrograde Navigation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Spiritual guidance for navigating relationship challenges and reassessing values during the Venus retrograde period.
                </p>
                <button className="text-maroon-700 font-medium hover:text-maroon-800 transition-colors">
                  Read Full Guidance →
                </button>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="inline-block bg-transparent border-2 border-maroon-700 text-maroon-700 hover:bg-maroon-700 hover:text-white px-6 py-2 rounded-md font-medium transition-colors">
                View All Previous Guidance
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WeeklyGuidancePage;