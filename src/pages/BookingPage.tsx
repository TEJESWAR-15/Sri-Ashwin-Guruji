import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, MapPin, Clock, Send, CreditCard, Star, Sparkles } from 'lucide-react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    place: '',
    service: '',
    message: '',
  });

  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    alert('Thank you for your booking! Sri Ashwin Guruji will review your details and contact you shortly to confirm your divine consultation.');
  };

  const services = [
    { id: 'horoscope', name: 'Horoscope Reading', price: 149 },
    { id: 'spiritual-counseling', name: 'Spiritual Counseling', price: 129 },
    { id: 'karma-healing', name: 'Karma Healing', price: 199 },
    { id: 'ritual-guidance', name: 'Ritual Guidance', price: 159 },
    { id: 'energy-cleansing', name: 'Energy Cleansing', price: 179 },
    { id: 'gemstone-consultation', name: 'Gemstone Consultation', price: 119 },
    { id: 'protection-rituals', name: 'Protection Rituals', price: 139 },
    { id: 'relationship-healing', name: 'Relationship Healing', price: 189 },
    { id: 'kuber-puja', name: 'Kuber Puja', price: 299 },
    { id: 'career-puja', name: 'Career Advancement Puja', price: 249 },
    { id: 'relationship-puja', name: 'Relationship Harmony Puja', price: 279 },
    { id: 'health-puja', name: 'Health & Vitality Puja', price: 259 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maroon-800 to-maroon-700 py-12 px-4 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-spiritual font-bold mb-4">
              Book Your Divine Consultation
            </h1>
            <p className="text-lg text-amber-100">
              Begin your journey of spiritual transformation with Sri Ashwin Guruji's divine guidance
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Progress steps */}
            <div className="bg-amber-50 px-6 py-4 border-b border-amber-100">
              <div className="flex justify-between">
                <div 
                  className={`flex flex-col items-center ${
                    step >= 1 ? 'text-maroon-700' : 'text-gray-400'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 1 ? 'bg-maroon-700 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    1
                  </div>
                  <span className="text-sm mt-1">Service</span>
                </div>
                <div className={`flex-grow border-t-2 border-dashed self-center mx-2 ${
                  step >= 2 ? 'border-maroon-500' : 'border-gray-300'
                }`} />
                <div 
                  className={`flex flex-col items-center ${
                    step >= 2 ? 'text-maroon-700' : 'text-gray-400'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 2 ? 'bg-maroon-700 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    2
                  </div>
                  <span className="text-sm mt-1">Birth Details</span>
                </div>
                <div className={`flex-grow border-t-2 border-dashed self-center mx-2 ${
                  step >= 3 ? 'border-maroon-500' : 'border-gray-300'
                }`} />
                <div 
                  className={`flex flex-col items-center ${
                    step >= 3 ? 'text-maroon-700' : 'text-gray-400'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 3 ? 'bg-maroon-700 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    3
                  </div>
                  <span className="text-sm mt-1">Confirm</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {/* Step 1: Choose Service */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-6">
                    Select Your Divine Service
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    Each service is performed with divine intention and cosmic connection by Sri Ashwin Guruji.
                  </p>
                  
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-2">
                      Choose a Service
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div 
                          key={service.id}
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            formData.service === service.id 
                              ? 'border-maroon-600 bg-amber-50' 
                              : 'border-gray-200 hover:border-maroon-300'
                          }`}
                          onClick={() => setFormData({...formData, service: service.id})}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-800">{service.name}</span>
                            <span className="text-maroon-700 font-semibold">${service.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-amber-50 p-4 rounded-lg border border-amber-100 mb-8">
                    <div className="flex items-start">
                      <Sparkles className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">
                        All services include a personalized divine blessing from Sri Ashwin Guruji and follow-up guidance after your consultation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!formData.service}
                      className={`px-6 py-2 rounded-md font-medium ${
                        formData.service 
                          ? 'bg-maroon-700 text-white hover:bg-maroon-800' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      } transition-colors`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Birth Details */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-6">
                    Your Sacred Birth Details
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Please provide accurate birth details for a precise cosmic analysis. These details allow Sri Ashwin Guruji to connect with your unique spiritual energy and karmic path.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Your Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500"
                      placeholder="Your phone number (optional)"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Birth Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Birth Time
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Birth Place
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="place"
                          value={formData.place}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500"
                          placeholder="City, Country"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-2">
                      Spiritual Concerns (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500"
                      placeholder="Share any specific spiritual concerns or questions you'd like Sri Ashwin Guruji to address during your consultation"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!formData.name || !formData.email || !formData.date || !formData.time || !formData.place}
                      className={`px-6 py-2 rounded-md font-medium ${
                        formData.name && formData.email && formData.date && formData.time && formData.place
                          ? 'bg-maroon-700 text-white hover:bg-maroon-800' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      } transition-colors`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-6">
                    Confirm Your Divine Consultation
                  </h2>

                  <div className="bg-amber-50 p-6 rounded-lg mb-6 border border-amber-100">
                    <h3 className="font-semibold text-maroon-700 mb-4">Booking Summary</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-gray-600 text-sm">Divine Service</p>
                        <p className="font-medium">
                          {services.find(s => s.id === formData.service)?.name || 'No service selected'}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Sacred Offering</p>
                        <p className="font-medium text-maroon-700">
                          ${services.find(s => s.id === formData.service)?.price || '0'}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Full Name</p>
                        <p className="font-medium">{formData.name}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Email</p>
                        <p className="font-medium">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Phone</p>
                        <p className="font-medium">{formData.phone || 'Not provided'}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Birth Details</p>
                        <p className="font-medium">{formData.date} at {formData.time}</p>
                        <p className="font-medium">{formData.place}</p>
                      </div>
                    </div>

                    {formData.message && (
                      <div>
                        <p className="text-gray-600 text-sm">Spiritual Concerns</p>
                        <p className="font-medium">{formData.message}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-gradient-to-r from-maroon-700 to-maroon-800 p-5 rounded-lg mb-8 text-white">
                    <div className="flex items-start">
                      <Star className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gold-500 mb-1">Divine Process</h4>
                        <p className="text-amber-100 text-sm">
                          After your booking is confirmed, Sri Ashwin Guruji will connect with your cosmic energy and prepare for your consultation. You will receive a confirmation email with further details and preparation guidance within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 p-5 rounded-lg mb-8">
                    <div className="flex items-start">
                      <CreditCard className="h-5 w-5 text-maroon-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-maroon-700 mb-1">Payment Information</h4>
                        <p className="text-gray-700 text-sm">
                          After submitting your request, you will receive payment instructions via email. Your consultation will be scheduled once payment is received. We accept all major credit cards, PayPal, and bank transfers.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gold-500 hover:bg-gold-600 text-maroon-900 rounded-md font-medium transition-colors"
                    >
                      Confirm Divine Booking
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BookingPage;