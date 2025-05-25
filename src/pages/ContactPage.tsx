import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Star } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    console.log(formData);
    setSubmitted(true);
  };

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
              Connect with Sri Ashwin Guruji
            </h1>
            <p className="text-lg text-amber-100 mb-6">
              Reach out for spiritual guidance, questions, or to schedule a divine consultation
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Star className="h-5 w-5 text-gold-500" />
              <Star className="h-5 w-5 text-gold-500" />
              <Star className="h-5 w-5 text-gold-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-12 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100 h-full">
                  <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-6">
                    Divine Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 bg-maroon-700 text-gold-500 p-3 rounded-full">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-maroon-700 mb-1">Sacred Location</h3>
                        <p className="text-gray-700">
                          Sri Ashwin Temple<br />
                          Divine Street, Spiritual Garden<br />
                          Mystic City, India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 bg-maroon-700 text-gold-500 p-3 rounded-full">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-maroon-700 mb-1">Divine Connect</h3>
                        <p className="text-gray-700">+91 98765 43210</p>
                        <p className="text-gray-700">+91 98765 43211</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 bg-maroon-700 text-gold-500 p-3 rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-maroon-700 mb-1">Sacred Correspondence</h3>
                        <p className="text-gray-700">blessings@sriashwinguruji.com</p>
                        <p className="text-gray-700">guidance@sriashwinguruji.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 bg-maroon-700 text-gold-500 p-3 rounded-full">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-maroon-700 mb-1">Sacred Hours</h3>
                        <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-700">Sunday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-600 text-sm mt-2 italic">
                          * Closed during sacred ceremonies and special observances
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-amber-100">
                    <h3 className="font-medium text-maroon-700 mb-3">Connect on Social Media</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="bg-maroon-700 text-gold-500 p-2 rounded-full hover:bg-maroon-600 transition-colors"
                        aria-label="Facebook"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>
                      <a 
                        href="#" 
                        className="bg-maroon-700 text-gold-500 p-2 rounded-full hover:bg-maroon-600 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </a>
                      <a 
                        href="#" 
                        className="bg-maroon-700 text-gold-500 p-2 rounded-full hover:bg-maroon-600 transition-colors"
                        aria-label="YouTube"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                      </a>
                      <a 
                        href="#" 
                        className="bg-maroon-700 text-gold-500 p-2 rounded-full hover:bg-maroon-600 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
                  {!submitted ? (
                    <>
                      <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-6">
                        Send a Divine Message
                      </h2>
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500"
                              placeholder="Enter your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                            Phone Number (Optional)
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                            Subject
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500"
                          >
                            <option value="">Select a subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Booking Question">Booking Question</option>
                            <option value="Spiritual Guidance">Spiritual Guidance</option>
                            <option value="Services Information">Services Information</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                            Your Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500"
                            placeholder="Share your message, questions, or spiritual concerns..."
                          ></textarea>
                        </div>
                        
                        <div className="flex items-center mb-6">
                          <input
                            type="checkbox"
                            id="consent"
                            required
                            className="h-4 w-4 text-maroon-700 focus:ring-maroon-500 border-gray-300 rounded"
                          />
                          <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                            I consent to having my information processed to receive a response to my inquiry
                          </label>
                        </div>
                        
                        <button
                          type="submit"
                          className="w-full bg-maroon-700 hover:bg-maroon-800 text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                        >
                          <Send className="h-5 w-5 mr-2" />
                          Send Divine Message
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="bg-maroon-700 text-gold-500 p-4 rounded-full inline-flex items-center justify-center mb-6">
                        <Star className="h-10 w-10" />
                      </div>
                      <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-4">
                        Message Sent Successfully
                      </h2>
                      <p className="text-gray-700 mb-6">
                        Thank you for reaching out to Sri Ashwin Guruji. Your message has been received with divine grace. 
                        We will respond to your inquiry within 24-48 hours.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            subject: '',
                            message: '',
                          });
                        }}
                        className="bg-maroon-700 hover:bg-maroon-800 text-white px-6 py-2 rounded-md font-medium transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto mt-12">
              <h2 className="text-2xl font-spiritual font-bold text-maroon-700 mb-6 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-amber-100">
                  <h3 className="font-medium text-maroon-700 mb-2">What should I prepare before my consultation?</h3>
                  <p className="text-gray-700">
                    Please have your exact birth date, time, and place ready. It's also helpful to prepare specific questions 
                    or concerns you would like addressed during your session.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-amber-100">
                  <h3 className="font-medium text-maroon-700 mb-2">How long does a typical consultation last?</h3>
                  <p className="text-gray-700">
                    Most consultations last between 60-90 minutes, depending on the complexity of your questions and the 
                    type of service you have selected.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-amber-100">
                  <h3 className="font-medium text-maroon-700 mb-2">Can consultations be done online?</h3>
                  <p className="text-gray-700">
                    Yes, Sri Ashwin Guruji offers both in-person and online consultations via video call. Divine energy 
                    transcends physical distance, and online sessions are equally effective.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-amber-100">
                  <h3 className="font-medium text-maroon-700 mb-2">How far in advance should I book a consultation?</h3>
                  <p className="text-gray-700">
                    We recommend booking at least 2-3 weeks in advance as Sri Ashwin Guruji's schedule fills quickly. 
                    For urgent matters, please contact us directly, and we will do our best to accommodate you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;