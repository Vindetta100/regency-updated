import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Image Imports ---
import exteriorTwilight from '../../../assets/v6-photos/hero-from-pdf.webp';
import kitchenMain from '../../../assets/v6-photos/photo-10.jpg';
import livingRoomMain from '../../../assets/v6-photos/photo-21.jpg';
import diningRoom from '../../../assets/v6-photos/photo-15.jpg';
import masterBedroom from '../../../assets/v6-photos/photo-19.jpg';
import bathroomMain from '../../../assets/v6-photos/photo-18.jpg';
import exteriorFrontDay from '../../../assets/v6-photos/photo-47.jpg';
import privateOffice from '../../../assets/v6-photos/photo-17.jpg';
import wineCellar from '../../../assets/v6-photos/photo-12.jpg';
import outdoorLiving from '../../../assets/v6-photos/photo-24.jpg';
import additionalBedroom from '../../../assets/v6-photos/photo-16.jpg';
import homeTheater from '../../../assets/v6-photos/photo-08.jpg';

// --- Utility Component for Scroll-triggered Animations ---
const AnimateOnScroll = ({ children, delay = 0, className = '', ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of element is in view
      transition={{ duration: 0.8, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// --- Main App Component ---
export default function App() {
  const { scrollYProgress } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // State for header background/text color change on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Note: For 'Playfair Display' (serif) and 'Inter' (sans-serif) fonts to work,
  // ensure they are imported in your project's CSS (e.g., index.css or global.css)
  // and configured in tailwind.config.js like this:
  /*
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Playfair Display', 'serif'],
        },
        colors: {
          accentGold: '#C9A961',
          accentLime: '#BFFF00',
          // Define other custom colors if not using direct hex values
        }
      }
    }
  };
  */

  return (
    <div className="font-sans text-[#1A1A1A] bg-white antialiased">
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 p-6 md:p-8 flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className={`text-xl font-serif font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
          The Regency
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className={`hover:text-[#C9A961] transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Home</a>
          <a href="#" className={`hover:text-[#C9A961] transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>About</a>
          <a href="#" className={`hover:text-[#C9A961] transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Gallery</a>
          <a href="#" className={`hover:text-[#C9A961] transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Contact</a>
        </nav>
        <button className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${exteriorTwilight})` }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

        <div className="relative z-10 text-white text-center p-4 max-w-4xl mx-auto">
          <motion.p
            className="text-sm md:text-base uppercase tracking-widest mb-4 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            PRIVATE LUXURY ESTATE
          </motion.p>
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Regency View Estate
          </motion.h1>
          <motion.h2
            className="font-serif text-2xl md:text-3xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Contemporary Masterpiece
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-10 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Where Architectural Excellence Meets Natural Beauty
          </motion.p>
          <motion.button
            className="bg-black text-white uppercase px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Explore Property
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <p className="text-sm uppercase tracking-widest mb-2">Scroll</p>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* Architectural Excellence Section - Image Left */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center md:space-x-16">
          <AnimateOnScroll className="w-full md:w-1/2 mb-12 md:mb-0">
            <img src={livingRoomMain} alt="Luxurious Living Room" className="w-full h-auto object-cover shadow-xl" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2} className="w-full md:w-1/2">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-sans">ARCHITECTURAL EXCELLENCE</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              A Rare Fusion of Modern Luxury and Timeless Design
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-sans text-gray-700">
              Nestled in the prestigious Happy Valley, Oregon, The Regency View Estate is a testament to sophisticated living. This contemporary masterpiece, spanning 4,600 square feet, offers an unparalleled blend of innovative design and natural beauty.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-sans text-gray-700">
              Every detail has been meticulously crafted, from the soaring ceilings and expansive windows that frame breathtaking views, to the custom finishes and smart home technology that define ultimate comfort and convenience.
            </p>
            <button className="border-2 border-black text-black uppercase px-8 py-4 font-bold hover:bg-black hover:text-white transition-colors text-lg">
              View Full Listing
            </button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Feature Cards Section - Black Background */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-sans">DISTINGUISHED FEATURES</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-16">
              Experience Unrivaled Luxury
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="border-2 border-[#C9A961] rounded-full p-4 mb-6">
                  <svg className="w-12 h-12 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-2">Expansive Grounds</h3>
                <p className="text-gray-300 font-sans">Meticulously landscaped private estate</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="border-2 border-[#C9A961] rounded-full p-4 mb-6">
                  <svg className="w-12 h-12 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-2">Natural Setting</h3>
                <p className="text-gray-300 font-sans">Surrounded by mature trees and nature</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <div className="border-2 border-[#C9A961] rounded-full p-4 mb-6">
                  <svg className="w-12 h-12 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.24A1.998 1.998 0 0016 4H8a1.998 1.998 0 00-1.618 3.76A2 2 0 016 6h2c.453 0 .89.15 1.242.41L12 10l2.758-3.59A2 2 0 0118 6h2c.453 0 .89.15 1.242.41L23 9l-3 4-2 2V21a1 1 0 01-1 1H4a1 1 0 01-1-1v-4l-2-2-3-4z"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-2">Privacy & Security</h3>
                <p className="text-gray-300 font-sans">Gated entrance with advanced systems</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Poetic Design Section - Image Right */}
      <section className="py-20 md:py-32 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-16">
          <AnimateOnScroll className="w-full md:w-1/2 mb-12 md:mb-0">
            <img src={kitchenMain} alt="Gourmet Kitchen" className="w-full h-auto object-cover shadow-xl" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2} className="w-full md:w-1/2">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-sans">DESIGN PHILOSOPHY</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              Where Poetic Design Meets Uncompromising Excellence
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-sans text-gray-700">
              The interior spaces are a symphony of light, texture, and form. The gourmet kitchen, a chef's dream, features professional Dacor graphite appliances, custom white oak cabinetry, and a 13-foot quartz waterfall island, perfect for entertaining.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-sans text-gray-700">
              Every room tells a story of thoughtful design, from the serene primary suite with its spa-like bathroom featuring designer fixtures by Axor, Graff, Hansgrohe, and Duravit, to the dedicated private office with inspiring views. The home features designer lighting by Tom Dixon and Louis Poulsen, a sculptural 3-story oak staircase, and energy-efficient systems including Carrier HVAC and tankless water heating.
            </p>
            <button className="border-2 border-black text-black uppercase px-8 py-4 font-bold hover:bg-black hover:text-white transition-colors text-lg">
              Download Floor Plan
            </button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Visual Tour Gallery Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-sans">VISUAL TOUR</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-16">
              A Glimpse Into Your Future
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: diningRoom, alt: 'Elegant Dining Room', label: 'Elegant Dining Room' },
              { src: masterBedroom, alt: 'Luxurious Primary Suite', label: 'Luxurious Primary Suite' },
              { src: bathroomMain, alt: 'Spa-like Bathroom', label: 'Spa-like Bathroom' },
              { src: outdoorLiving, alt: 'Expansive Outdoor Living', label: 'Expansive Outdoor Living' },
              { src: privateOffice, alt: 'Inspiring Private Office', label: 'Inspiring Private Office' },
              { src: wineCellar, alt: 'Private Wine Cellar', label: 'Private Wine Cellar' },
              { src: homeTheater, alt: 'State-of-the-art Home Theater', label: 'Home Theater' },
              { src: additionalBedroom, alt: 'Guest Bedroom', label: 'Guest Bedroom' },
              { src: exteriorFrontDay, alt: 'Estate Exterior Day', label: 'Estate Exterior Day' },
            ].map((image, index) => (
              <AnimateOnScroll delay={index * 0.08} key={image.label}>
                <motion.div
                  className="relative group overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-72 object-cover object-center" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-serif text-xl">{image.label}</p>
                  </div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing and CTA Section */}
      <section className="py-20 md:py-32 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-sans">INVESTMENT OPPORTUNITY</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              Your Legacy Awaits
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-lg leading-relaxed mb-6 font-sans text-gray-700">
              Priced for the discerning buyer, The Regency View Estate represents more than a home; it's an investment in a lifestyle of unparalleled luxury and enduring value.
            </p>
            <p className="font-serif text-5xl md:text-6xl text-[#C9A961] mb-12">
              $2,225,000
            </p>
          </AnimateOnScroll>

          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <AnimateOnScroll delay={0.3}>
              <button className="border-2 border-black text-black uppercase px-8 py-4 font-bold hover:bg-black hover:text-white transition-colors text-lg w-full md:w-auto">
                Schedule Private Tour
              </button>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <button className="border-2 border-black text-black uppercase px-8 py-4 font-bold hover:bg-black hover:text-white transition-colors text-lg w-full md:w-auto">
                Contact Agent
              </button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-sans text-center">INQUIRE NOW</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-12 text-center">
              Connect with Our Team
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-sans font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 border border-gray-300 focus:border-[#C9A961] focus:ring focus:ring-[#C9A961] focus:ring-opacity-50 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-sans font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 border border-gray-300 focus:border-[#C9A961] focus:ring focus:ring-[#C9A961] focus:ring-opacity-50 outline-none transition-all"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-sans font-medium text-gray-700 mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-4 border border-gray-300 focus:border-[#C9A961] focus:ring focus:ring-[#C9A961] focus:ring-opacity-50 outline-none transition-all"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-sans font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-4 border border-gray-300 focus:border-[#C9A961] focus:ring focus:ring-[#C9A961] focus:ring-opacity-50 outline-none transition-all"
                  placeholder="Tell us about your interest..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white uppercase px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg w-full"
              >
                Send Inquiry
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Footer (Minimal) */}
      <footer className="bg-black text-white py-12 text-center font-sans text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p>&copy; {new Date().getFullYear()} The Regency View Estate. All rights reserved.</p>
          <p className="mt-2">Designed with Elegance by V0</p>
        </div>
      </footer>
    </div>
  );
}