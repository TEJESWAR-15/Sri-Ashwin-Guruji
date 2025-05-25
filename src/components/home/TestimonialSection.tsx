import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Rajiv Sharma",
    location: "Mumbai, India",
    rating: 5,
    testimonial: "Sri Ashwin Guruji's spiritual guidance transformed my life. The horoscope reading was profoundly accurate, and the karma healing rituals removed obstacles I had been facing for years. I am forever grateful for his divine wisdom.",
    imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Priya Malhotra",
    location: "Delhi, India",
    rating: 5,
    testimonial: "After years of spiritual seeking, I found true guidance with Sri Ashwin Guruji. His connection with the divine is profound. The remedies he suggested brought harmony to my family and prosperity to my business.",
    imageUrl: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Anand Patel",
    location: "London, UK",
    rating: 5,
    testimonial: "Despite being thousands of miles away, Guruji's spiritual energy transcended distance. His online consultation was as powerful as being in his presence. The gemstone remedy he prescribed completely changed my career trajectory.",
    imageUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Sarika Kapoor",
    location: "Toronto, Canada",
    rating: 5,
    testimonial: "I was skeptical at first, but Guruji's insights into my past and future were astonishingly accurate. The weekly guidance has become my spiritual anchor, providing clarity during challenging times.",
    imageUrl: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const TestimonialSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-2">
            <div className="flex items-center">
              <hr className="w-12 border-t-2 border-maroon-600" />
              <span className="mx-4 text-maroon-600 font-spiritual">Divine Blessings</span>
              <hr className="w-12 border-t-2 border-maroon-600" />
            </div>
          </div>
          <h2 className="text-3xl font-spiritual font-bold text-maroon-700 mb-4">Sacred Testimonials</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Hear from those whose lives have been transformed through Sri Ashwin Guruji's divine wisdom and spiritual guidance.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-amber-100 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-maroon-700">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic flex-grow">"{testimonial.testimonial}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;