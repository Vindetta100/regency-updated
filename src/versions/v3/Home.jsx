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
import floorPlanPDF from '../../../assets/SERegencyViewbooklet.pdf';

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
            <img src={exteriorFrontDay} alt="Estate Exterior Day" className="w-full h-auto object-cover shadow-xl" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2} className="w-full md:w-1/2">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-sans">ARCHITECTURAL EXCELLENCE</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              A one of a kind estate showcasing fine craftsmanship where architectural mastery meets modern design, form, and function
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-sans text-gray-700">
              Thoughtfully carved into a hillside in the heart of Happy Valley and showcased in the 2025 Street of Dreams, this custom three-level home blends privacy with panoramic views. A striking facade of hand-selected stained cedar and smooth Hardie panels opens to interiors filled with natural light through floor-to-ceiling windows and 9-foot stacking sliders that blur the line between indoor and outdoor living.
            </p>
            <div className="mb-6">
              <h3 className="font-serif text-xl mb-4">Property Specifications</h3>
              <ul className="text-lg leading-relaxed font-sans text-gray-700 space-y-2">
                <li><strong>Living Area:</strong> 4,634 sq. ft.</li>
                <li><strong>Lot Size:</strong> 7,400+ sq. ft.</li>
                <li><strong>Bedrooms:</strong> 3 (with capability for up to 5)</li>
                <li><strong>Bathrooms:</strong> 3.5</li>
                <li><strong>Garage:</strong> Oversized 3-car with integrated shop & powder room</li>
              </ul>
            </div>
            <a href="https://benson.tercekrealestate.com/listing-detail/1171672804/13191-SE-REGENCY-VIEW-ST-Happy-Valley-OR?featureListingName=Customized%20IAxNSkOnI&listingSort=RELEVANCE&layoutType=map&mapType=grid&page=1&pageSize=24&isSearching=true&siteId=141655&listingSource=1%2BCustomized%20IAxNSkOnI&condition=%7B%7D&uiConfig=%7B%7D&zoom=11&mapSearch=false&timeline=true&listingSortOptions=[%7B%22label%22:%22Default%22,%22value%22:%22RELEVANCE%22%7D,%7B%22label%22:%22Price-High%20To%20Low%22,%22value%22:%22PRICE_DESC%22%7D,%7B%22label%22:%22Price-Low%20To%20High%22,%22value%22:%22PRICE_ASC%22%7D,%7B%22label%22:%22Newest%20Listings%22,%22value%22:%22MLS_LIST_DATE_L_DESC%22%7D,%7B%22label%22:%22Beds%20(Most)%22,%22value%22:%22BEDROOMS_DESC%22%7D,%7B%22label%22:%22Baths%20(Most)%22,%22value%22:%22BATHS_DESC%22%7D,%7B%22label%22:%22Year%20Built%20(Newest)%22,%22value%22:%22BUILT_YEAR_DESC%22%7D,%7B%22label%22:%22Square%20Feet%20(Biggest)%22,%22value%22:%22SQFT_DESC%22%7D]&timezone=GMT-0700&source=feature_listing" target="_blank" rel="noopener noreferrer" className="border-2 border-black text-black uppercase px-8 py-4 font-bold hover:bg-black hover:text-white transition-colors text-lg inline-block">
              View Full Listing
            </a>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-2">Corner Lot Estate</h3>
                <p className="text-gray-300 font-sans">7,400+ SF lot with 4,634 SF of refined interior living space</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="border-2 border-[#C9A961] rounded-full p-4 mb-6">
                  <svg className="w-12 h-12 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-2">Rooftop Deck</h3>
                <p className="text-gray-300 font-sans">Covered rooftop deck with southern mountain views and year-round entertaining patio</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <div className="border-2 border-[#C9A961] rounded-full p-4 mb-6">
                  <svg className="w-12 h-12 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-2">Architectural Design</h3>
                <p className="text-gray-300 font-sans">Hand-selected stained cedar siding paired with clean Hardie architectural panels</p>
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
              The gourmet kitchen centers the home with a 13-foot quartz waterfall island, custom white oak cabinetry, and professional Dacor graphite appliances including a 48" range, dual column refrigerator and freezer, and wine storage. The great room features a see-through fireplace and designer lighting by Tom Dixon and Louis Poulsen, extending to covered patios, an outdoor kitchen-ready space, fire pit, and rooftop deck with southern mountain views.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-sans text-gray-700">
              With 3 bedrooms and the capability for up to 5, the flexible layout includes a private primary retreat with soaking tub, double walk-in shower, and boutique-style closet, along with spa-inspired bathrooms by Duravit, Axor, Graff, and Hansgrohe. Additional highlights include a formal living room, oversized den or office, wet bar, 3-story oak staircase with integrated lighting, oversized 3-car garage with shop and powder room, tankless water heating, Carrier HVAC, and energy-efficient systems.
            </p>
            <a href={floorPlanPDF} download="Regency_View_Estate_Floorplan.pdf" className="border-2 border-black text-black uppercase px-8 py-4 font-bold hover:bg-black hover:text-white transition-colors text-lg inline-block">
              Download Floor Plan
            </a>
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
              { src: livingRoomMain, alt: 'Luxurious Living Room', label: 'Luxurious Living Room' },
            ].map((image, index) => (
              <AnimateOnScroll delay={index * 0.08} key={image.label}>
                <motion.div
                  className="relative group overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-72 object-cover object-center" />
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
              <a href="#inquire-now" className="border-2 border-black text-black uppercase px-8 py-4 font-bold hover:bg-black hover:text-white transition-colors text-lg w-full md:w-auto inline-block text-center">
                Schedule Private Tour
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Builder and Listing Agents Section */}
      <section id="inquire-now" className="py-20 md:py-32 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-sans text-center">INQUIRE NOW</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-12 text-center">
              Connect with Our Team
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Builder Section */}
            <AnimateOnScroll delay={0.1}>
              <div className="bg-[#F8F8F8] p-8 text-center">
                <h3 className="font-serif text-2xl mb-4">Builder</h3>
                <h4 className="font-sans text-xl font-bold mb-2">Wynn Design | Build</h4>
                <p className="text-gray-700 mb-4">Justin Nguyen, Design Principal</p>
                <p className="text-gray-700">Phone: 503.764.8569</p>
                <p className="text-gray-700">Email: wynndesign@outlook.com</p>
              </div>
            </AnimateOnScroll>

            {/* Listing Agents Section */}
            <AnimateOnScroll delay={0.2}>
              <div className="bg-[#F8F8F8] p-8 text-center">
                <h3 className="font-serif text-2xl mb-4">Listing Agents</h3>
                <div className="mb-4">
                  <h4 className="font-sans text-xl font-bold mb-2">Benson Bui</h4>
                  <p className="text-gray-700">Real Estate Agent OR/WA</p>
                  <p className="text-gray-700">Phone: 503.593.0211</p>
                  <p className="text-gray-700">Email: bensonbui28@gmail.com</p>
                </div>
                <div className="pt-4 border-t border-gray-300">
                  <h4 className="font-sans text-xl font-bold mb-2">Tommy Nguyen</h4>
                  <p className="text-gray-700">Real Estate Agent</p>
                  <p className="text-gray-700">Phone: 503.278.2603</p>
                  <p className="text-gray-700">Email: tommytnguyen11@gmail.com</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.3}>
            <div className="text-center">
              <p className="text-lg font-sans text-gray-700 mb-4">Represented by</p>
              <p className="font-serif text-2xl">TERCEK REAL ESTATE GROUP | reaj | reaj LUXURY</p>
            </div>
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