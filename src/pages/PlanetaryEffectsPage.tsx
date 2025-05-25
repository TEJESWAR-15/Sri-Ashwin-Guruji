import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Star, Jupiter, Saturn, Mercury, Venus, Mars, Neptune, Uranus } from 'lucide-react';

const PlanetaryEffectsPage = () => {
  const planets = [
    {
      name: 'Sun (Surya)',
      icon: <Sun className="h-12 w-12 text-amber-500" />,
      color: 'from-amber-500 to-orange-600',
      effects: 'Represents soul, ego, father, health, and authority. Rules the sign Leo.',
      positiveEffects: ['Confidence', 'Vitality', 'Leadership', 'Success', 'Self-expression'],
      challengingEffects: ['Arrogance', 'Egotism', 'Authority issues', 'Health problems'],
      remedies: [
        'Worship Lord Shiva and offer water to the Sun',
        'Wear ruby gemstone (after consultation)',
        'Recite Aditya Hridayam or Surya mantras',
        'Donate wheat, jaggery, or copper on Sundays',
        'Feed birds, especially crows',
      ]
    },
    {
      name: 'Moon (Chandra)',
      icon: <Moon className="h-12 w-12 text-blue-400" />,
      color: 'from-blue-400 to-indigo-500',
      effects: 'Represents mind, emotions, mother, nurturing, and intuition. Rules the sign Cancer.',
      positiveEffects: ['Emotional stability', 'Intuition', 'Nurturing abilities', 'Good memory', 'Adaptability'],
      challengingEffects: ['Emotional sensitivity', 'Mood swings', 'Insecurity', 'Dependency'],
      remedies: [
        'Worship Goddess Parvati',
        'Wear pearl gemstone (after consultation)',
        'Recite Chandra mantras',
        'Donate rice, milk, or silver on Mondays',
        'Feed dogs and cows',
      ]
    },
    {
      name: 'Mercury (Budha)',
      icon: <Mercury className="h-12 w-12 text-green-500" />,
      color: 'from-green-400 to-emerald-600',
      effects: 'Represents intellect, communication, analytical skills, and adaptability. Rules Gemini and Virgo.',
      positiveEffects: ['Clear thinking', 'Communication skills', 'Learning ability', 'Analytical mind', 'Adaptability'],
      challengingEffects: ['Overthinking', 'Nervousness', 'Indecisiveness', 'Scattered focus'],
      remedies: [
        'Worship Lord Vishnu',
        'Wear emerald gemstone (after consultation)',
        'Recite Budha mantras',
        'Donate green moong dal on Wednesdays',
        'Feed green birds like parrots',
      ]
    },
    {
      name: 'Venus (Shukra)',
      icon: <Venus className="h-12 w-12 text-pink-500" />,
      color: 'from-pink-400 to-rose-600',
      effects: 'Represents love, relationships, beauty, art, and wealth. Rules Taurus and Libra.',
      positiveEffects: ['Harmony in relationships', 'Artistic abilities', 'Sensuality', 'Material comforts', 'Charm'],
      challengingEffects: ['Overindulgence', 'Attachment', 'Vanity', 'Possessiveness'],
      remedies: [
        'Worship Goddess Lakshmi',
        'Wear diamond or white sapphire (after consultation)',
        'Recite Shukra mantras',
        'Donate rice, white flowers on Fridays',
        'Feed cows and female animals',
      ]
    },
    {
      name: 'Mars (Mangal)',
      icon: <Mars className="h-12 w-12 text-red-600" />,
      color: 'from-red-500 to-rose-700',
      effects: 'Represents energy, courage, action, passion, and aggression. Rules Aries and Scorpio.',
      positiveEffects: ['Courage', 'Initiative', 'Strength', 'Energy', 'Drive'],
      challengingEffects: ['Aggression', 'Impatience', 'Recklessness', 'Argumentativeness'],
      remedies: [
        'Worship Lord Hanuman or Kartikeya',
        'Wear red coral (after consultation)',
        'Recite Mangal mantras',
        'Donate red lentils, jaggery on Tuesdays',
        'Feed monkeys or dogs',
      ]
    },
    {
      name: 'Jupiter (Guru)',
      icon: <Jupiter className="h-12 w-12 text-yellow-600" />,
      color: 'from-yellow-500 to-amber-700',
      effects: 'Represents wisdom, expansion, spirituality, prosperity, and optimism. Rules Sagittarius and Pisces.',
      positiveEffects: ['Wisdom', 'Optimism', 'Growth', 'Spirituality', 'Good fortune'],
      challengingEffects: ['Overindulgence', 'Exaggeration', 'Excessive optimism', 'Wastefulness'],
      remedies: [
        'Worship Lord Vishnu or Dakshinamurthy',
        'Wear yellow sapphire (after consultation)',
        'Recite Guru mantras',
        'Donate yellow items, gold, or ghee on Thursdays',
        'Feed Brahmins, teachers, or yellow birds',
      ]
    },
    {
      name: 'Saturn (Shani)',
      icon: <Saturn className="h-12 w-12 text-slate-700" />,
      color: 'from-slate-600 to-gray-800',
      effects: 'Represents discipline, patience, limitations, responsibility, and karma. Rules Capricorn and Aquarius.',
      positiveEffects: ['Discipline', 'Patience', 'Responsibility', 'Practical wisdom', 'Perseverance'],
      challengingEffects: ['Delays', 'Restrictions', 'Melancholy', 'Harsh lessons', 'Rigidity'],
      remedies: [
        'Worship Lord Hanuman or Shiva',
        'Wear blue sapphire (after proper consultation)',
        'Recite Shani mantras',
        'Donate black sesame seeds, oil, or iron on Saturdays',
        'Feed crows and poor people',
      ]
    },
    {
      name: 'Rahu (North Node)',
      icon: <Neptune className="h-12 w-12 text-purple-600" />,
      color: 'from-purple-500 to-violet-800',
      effects: 'Represents worldly desires, illusions, obsessions, and sudden changes.',
      positiveEffects: ['Innovation', 'Unconventional success', 'Breaking barriers', 'Material gains', 'Fame'],
      challengingEffects: ['Delusion', 'Insatiable desires', 'Anxiety', 'Manipulation', 'Instability'],
      remedies: [
        'Worship Lord Ganesha and Durga',
        'Wear hessonite garnet (after consultation)',
        'Recite Rahu mantras',
        'Donate mixed grains, dark blue items on Saturdays',
        'Feed crows',
      ]
    },
    {
      name: 'Ketu (South Node)',
      icon: <Uranus className="h-12 w-12 text-teal-600" />,
      color: 'from-teal-500 to-emerald-800',
      effects: 'Represents spirituality, detachment, past karma, and liberation.',
      positiveEffects: ['Spiritual insight', 'Liberation', 'Psychic abilities', 'Detachment', 'Moksha'],
      challengingEffects: ['Confusion', 'Isolation', 'Sudden losses', 'Detachment from worldly affairs'],
      remedies: [
        'Worship Lord Ganesha and Shiva',
        'Wear cat\'s eye gemstone (after consultation)',
        'Recite Ketu mantras',
        'Donate multicolored items on Tuesdays',
        'Feed dogs and pigeons',
      ]
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 py-12 px-4 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Planetary Influences & Remedies
            </h1>
            <p className="text-lg text-indigo-100 mb-6">
              Understanding how planets affect your life and the remedies to harmonize their energies
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Star className="h-6 w-6 text-amber-400" />
              <Star className="h-6 w-6 text-amber-400" />
              <Star className="h-6 w-6 text-amber-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-indigo-900 mb-4">
              The Cosmic Dance of the Navagrahas
            </h2>
            <p className="text-gray-700 mb-4">
              In Vedic astrology, the nine celestial bodies known as the Navagrahas—Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu—play a crucial role in shaping our lives. Each planet governs specific aspects of our existence and influences our physical, mental, emotional, and spiritual well-being.
            </p>
            <p className="text-gray-700 mb-4">
              The position of these planets at the time of your birth forms your unique birth chart, revealing your strengths, challenges, and life path. When certain planets are unfavorably positioned or afflicted in your chart, you may experience difficulties in the areas they govern.
            </p>
            <p className="text-gray-700 mb-8">
              Thankfully, Vedic astrology offers specific remedies to mitigate challenging planetary influences and enhance positive ones. These remedies include mantras, gemstones, rituals, and lifestyle adjustments tailored to your unique birth chart.
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600 mb-8">
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                Why Planetary Remedies Matter
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>They help balance challenging planetary energies in your birth chart</li>
                <li>They can minimize obstacles and difficulties in your life path</li>
                <li>They enhance the positive qualities of benefic planets</li>
                <li>They create harmony between conflicting planetary influences</li>
                <li>They support your spiritual growth and material prosperity</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-4">
              Explore the unique characteristics of each planet below, along with their effects and recommended remedies. For personalized remedies based on your specific birth chart, consider booking a consultation with one of our expert astrologers.
            </p>

            <div className="text-center mt-8 mb-12">
              <Link
                to="/booking"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Book a Personalized Remedy Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Planets and Their Effects */}
      <section className="py-12 px-4 bg-indigo-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-indigo-900 mb-12">
            The Nine Planets and Their Influences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {planets.map((planet, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow`}
              >
                <div className={`bg-gradient-to-r ${planet.color} p-6 text-white flex items-center`}>
                  <div className="mr-4">
                    {planet.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold">{planet.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{planet.effects}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-indigo-900 mb-2">Positive Influences:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {planet.positiveEffects.map((effect, i) => (
                        <li key={i}>{effect}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-indigo-900 mb-2">Challenging Influences:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {planet.challengingEffects.map((effect, i) => (
                        <li key={i}>{effect}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-2">Remedies:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {planet.remedies.map((remedy, i) => (
                        <li key={i}>{remedy}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 bg-indigo-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Discover Your Personal Planetary Remedies
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Every individual's birth chart is unique. Get personalized remedies based on your specific planetary positions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/booking" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Book a Consultation
            </Link>
            <Link 
              to="/shop" 
              className="bg-transparent border-2 border-indigo-300 hover:bg-indigo-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Shop for Remedies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanetaryEffectsPage;