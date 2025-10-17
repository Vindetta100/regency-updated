import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Image imports from project assets
import exteriorTwilight from '../../../assets/v6-photos/photo-25.jpg';
import kitchenMain from '../../../assets/v6-photos/photo-10.jpg';
import livingRoomMain from '../../../assets/v6-photos/photo-21.jpg';
import diningRoom from '../../../assets/v6-photos/photo-15.jpg';
import masterBedroom from '../../../assets/v6-photos/photo-19.jpg';
import bathroomMain from '../../../assets/v6-photos/photo-18.jpg';
import exteriorFrontDay from '../../../assets/v6-photos/photo-47.jpg';
import exteriorSideAngle from '../../../assets/v6-photos/photo-22.jpg';
import exteriorBackPatio from '../../../assets/v6-photos/photo-24.jpg';
import bathroomLuxury from '../../../assets/v6-photos/photo-14.jpg';
import bedroomSecondary from '../../../assets/v6-photos/photo-16.jpg';

const images = {
  // Hero Carousel Images
  hero1: exteriorTwilight,
  hero2: exteriorFrontDay,
  hero3: livingRoomMain,
  hero4: kitchenMain,
  hero5: exteriorBackPatio,

  // Property & Lifestyle Images
  exteriorTwilight: exteriorTwilight,
  kitchenMain: kitchenMain,
  livingRoomMain: livingRoomMain,
  diningRoom: diningRoom,
  masterBedroom: masterBedroom,
  bathroomMain: bathroomMain,
  exteriorFrontDay: exteriorFrontDay,
  lifestyleImage: exteriorSideAngle,
};

// --- Custom Components ---

const CTAButton = ({ children, onClick, className = '' }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`bg-[#9B7EBD] text-white font-['Montserrat'] uppercase px-8 py-4 rounded-lg shadow-lg hover:bg-[#8B6EAD] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#9B7EBD] focus:ring-opacity-50 ${className}`}
  >
    {children}
  </motion.button>
);

const SectionWrapper = ({ children, className = '', id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger when 30% of the section is in view

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};

// --- Main App Component ---

const App = () => {
  // Hero Carousel State and Data
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const heroSlides = [
    {
      headline: "COMMAND RESPECT",
      subheadline: "Where industry titans establish their legacy",
      image: images.hero1,
    },
    {
      headline: "BE LEGENDARY",
      subheadline: "An architectural masterpiece crafted for distinction",
      image: images.hero2,
    },
    {
      headline: "BE UNFORGETTABLE",
      subheadline: "Every detail, a statement of unparalleled luxury",
      image: images.hero3,
    },
    {
      headline: "LEAVE YOUR MARK",
      subheadline: "A sanctuary of power, prestige, and privacy",
      image: images.hero4,
    },
    {
      headline: "OWN THE EXTRAORDINARY",
      subheadline: "The pinnacle of modern living, reimagined",
      image: images.hero5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000); // Change slide every 8 seconds
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Property Image Carousel State and Data
  const propertyImages = [
    images.exteriorTwilight,
    images.kitchenMain,
    images.livingRoomMain,
    images.diningRoom,
    images.masterBedroom,
    images.bathroomMain,
    images.exteriorFrontDay,
  ];
  const [currentPropertyImage, setCurrentPropertyImage] = useState(0);

  const nextPropertyImage = () => {
    setCurrentPropertyImage((prev) => (prev + 1) % propertyImages.length);
  };

  const prevPropertyImage = () => {
    setCurrentPropertyImage((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  return (
    <div className="font-['Lora'] text-[#1A1A1A] antialiased">
      {/* Google Fonts Preload (Ideally in index.html or global CSS for better performance) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* --- Fixed Header --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md py-4 px-8 flex justify-between items-center border-b border-gray-100">
        <a href="#hero" className="text-2xl font-['Montserrat'] font-bold text-[#1A1A1A] uppercase tracking-wide">Rimrock</a>
        <nav className="hidden md:flex space-x-8 font-['Montserrat'] font-medium text-[#4A4A4A] items-center">
          <a href="#estate" className="hover:text-[#9B7EBD] transition-colors">The Estate</a>
          <a href="#gallery" className="hover:text-[#9B7EBD] transition-colors">Gallery</a>
          <a href="#opportunity" className="hover:text-[#9B7EBD] transition-colors">Opportunity</a>
          <CTAButton onClick={() => console.log('Inquire clicked')} className="py-2 px-6 text-sm">Inquire</CTAButton>
        </nav>
        {/* Mobile menu icon (placeholder for a real mobile menu component) */}
        <button className="md:hidden text-2xl cursor-pointer text-[#1A1A1A]" aria-label="Open navigation menu">☰</button>
      </header>
      <div className="pt-20"> {/* Offset for fixed header */}

        {/* --- Hero Carousel Section --- */}
        <section className="relative h-screen w-full overflow-hidden" id="hero">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentHeroSlide}
              src={heroSlides[currentHeroSlide].image}
              alt={heroSlides[currentHeroSlide].headline}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <motion.h1
                key={heroSlides[currentHeroSlide].headline} // Key change for AnimatePresence within the slide text
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="font-['Montserrat'] text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase mb-4 leading-tight drop-shadow-lg"
              >
                {heroSlides[currentHeroSlide].headline}
              </motion.h1>
              <motion.p
                key={heroSlides[currentHeroSlide].subheadline} // Key change for AnimatePresence within the slide text
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                className="font-['Lora'] text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl drop-shadow-lg"
              >
                {heroSlides[currentHeroSlide].subheadline}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
              >
                <CTAButton onClick={() => console.log('Inquire clicked')}>INQUIRE</CTAButton>
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentHeroSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentHeroSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </AnimatePresence>
        </section>

        {/* --- Property Introduction Section --- */}
        <SectionWrapper className="bg-[#F5F5F0] text-center" id="estate">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-['Montserrat'] text-base sm:text-lg uppercase tracking-widest text-[#4A4A4A] mb-4"
          >
            PRIVATE LUXURY ESTATE
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-['Lora'] text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] mb-8"
          >
            HAPPY VALLEY, OREGON
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-['Lora'] text-lg sm:text-xl text-[#4A4A4A] max-w-3xl mx-auto mb-12"
          >
            Experience unparalleled sophistication in this custom-built residence, where architectural poetry meets modern opulence.
            A testament to visionary design and meticulous craftsmanship, offering a lifestyle reserved for the discerning.
          </motion.p>

          {/* Property Image Carousel */}
          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl" id="gallery">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={currentPropertyImage}
                src={propertyImages[currentPropertyImage]}
                alt={`Property image ${currentPropertyImage + 1}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full h-[500px] object-cover"
              />
            </AnimatePresence>

            {/* Carousel Navigation Arrows */}
            <button
              onClick={prevPropertyImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextPropertyImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {propertyImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentPropertyImage === index ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentPropertyImage(index)}
                  aria-label={`Go to property image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* --- Property Details Section --- */}
        <SectionWrapper className="bg-[#F5F5F0] text-center pb-0" id="details">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-['Montserrat'] text-2xl sm:text-3xl font-semibold uppercase text-[#1A1A1A] mb-6"
          >
            4 BR / 4 BA + Bonus Room
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-['Lora'] text-lg sm:text-xl text-[#4A4A4A] max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Nestled on a sprawling estate, this home offers an unparalleled blend of privacy and access.
            Revel in expansive living spaces, gourmet kitchen, spa-like bathrooms, and a versatile bonus room.
            Every corner speaks of sophisticated design, from the soaring ceilings to the bespoke finishes,
            providing an environment designed for both grand entertaining and intimate family moments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <CTAButton onClick={() => console.log('Schedule Showing clicked')}>
              SCHEDULE PRIVATE SHOWING
            </CTAButton>
          </motion.div>
        </SectionWrapper>

        {/* --- Lifestyle/Aspirational Section --- */}
        <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center bg-cover bg-center text-white my-24"
                 style={{ backgroundImage: `url(${images.lifestyleImage})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-['Lora'] text-3xl sm:text-4xl lg:text-5xl font-light mb-6 leading-tight drop-shadow-md"
            >
              "Some things are meant to be cherished, not just owned."
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="font-['Montserrat'] text-base sm:text-lg uppercase tracking-wide opacity-80 drop-shadow-sm"
            >
              A legacy begins here.
            </motion.p>
          </div>
        </section>

        {/* --- Opportunity Section --- */}
        <SectionWrapper className="bg-[#F5F5F0] text-center" id="opportunity">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#1A1A1A] mb-6 leading-tight"
          >
            ONCE-IN-A-LIFETIME OPPORTUNITY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-['Lora'] text-xl sm:text-2xl text-[#4A4A4A] max-w-3xl mx-auto mb-8 italic"
          >
            A rare offering to acquire a property that transcends mere real estate,
            becoming a cornerstone of your family's future.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-['Lora'] text-lg sm:text-xl text-[#4A4A4A] max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            This is more than a home; it's a statement. A meticulously designed sanctuary where
            every square foot is curated for comfort, luxury, and indelible memories.
            Seize the moment to define your legacy.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mb-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <p className="font-['Montserrat'] text-3xl sm:text-4xl font-bold uppercase text-[#1A1A1A] mb-2">
                6,500 SQ FT
              </p>
              <p className="font-['Montserrat'] text-xl sm:text-2xl font-medium text-[#4A4A4A] mb-4">
                1,099 SQ FT GARAGE
              </p>
              <p className="font-['Lora'] text-lg sm:text-xl text-[#4A4A4A] text-center">
                Spacious interiors designed for grand living and intimate moments.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <p className="font-['Montserrat'] text-3xl sm:text-4xl font-bold uppercase text-[#1A1A1A] mb-2">
                3-LEVEL CONTEMPORARY
              </p>
              <p className="font-['Montserrat'] text-xl sm:text-2xl font-medium text-[#4A4A4A] mb-4">
                TROPHY HOME
              </p>
              <p className="font-['Lora'] text-lg sm:text-xl text-[#4A4A4A] text-center">
                A masterpiece of modern architecture, offering unparalleled luxury.
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="font-['Montserrat'] text-4xl sm:text-5xl font-extrabold uppercase text-[#1A1A1A] mb-12"
          >
            OFFERED AT $2,685,000
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}>
              <CTAButton onClick={() => console.log('Download Floor Plan clicked')} className="w-full">
                DOWNLOAD FLOOR PLAN
              </CTAButton>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}>
              <CTAButton onClick={() => console.log('View Listing clicked')} className="w-full">
                VIEW LISTING
              </CTAButton>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.6 }}>
              <CTAButton onClick={() => console.log('Watch The Film clicked')} className="w-full">
                WATCH THE FILM
              </CTAButton>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* --- Footer --- */}
        <footer className="bg-[#1A1A1A] text-white py-12 px-8 text-center text-sm">
          <p className="font-['Lora'] mb-4">
            © {new Date().getFullYear()} Rimrock Estate. All rights reserved.
          </p>
          <p className="font-['Montserrat'] uppercase text-xs opacity-75">
            Crafted for the extraordinary.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;