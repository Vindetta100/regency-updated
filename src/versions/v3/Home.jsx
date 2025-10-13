
import React from 'react';

const RegencyViewEstate = () => {
  return (
    <div className="min-h-screen bg-deep-blue text-white-text font-noah">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-deep-blue via-cosmic-purple to-electric-blue overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          {/* Star-like accents */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-white rounded-full animate-pulse animation-delay-200"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-400"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-600"></div>
          <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-800"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white rounded-full animate-pulse animation-delay-1200"></div>
        </div>
        <div className="relative z-10 text-center p-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-moon font-bold mb-4 animate-fade-in-up">The Regency View Estate</h1>
          <p className="text-lg md:text-2xl font-noah mb-8 animate-fade-in-up animation-delay-200">$2.685M Luxury Estate in Happy Valley, Oregon</p>
          <button className="bg-electric-blue hover:bg-cosmic-purple text-white-text font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up animation-delay-400">
            Inquire Now
          </button>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="h-screen flex items-center justify-center bg-cosmic-purple p-16 animate-fade-in-up">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-moon font-bold mb-8">Architectural Mastery</h2>
          <p className="text-base md:text-xl font-noah leading-relaxed mb-6">
            Discover a masterpiece of modern design, spanning 4,100 sq ft with 3-4 bedrooms and baths, built in 2025.
            Every detail reflects unparalleled luxury and thoughtful craftsmanship, offering an exquisite living experience.
          </p>
          <p className="text-base md:text-xl font-noah leading-relaxed">
            Clean lines, expansive spaces, and premium finishes define this estate, setting a new standard for sophisticated living.
          </p>
        </div>
      </section>

      {/* Investment Information Section */}
      <section className="h-screen flex items-center justify-center bg-deep-blue p-16 animate-fade-in-up animation-delay-200">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-moon font-bold mb-8">An Investment Opportunity</h2>
          <p className="text-base md:text-xl font-noah leading-relaxed mb-6">
            More than just a home, The Regency View Estate represents a prime investment in one of Oregon's most desirable locations.
            Secure your legacy with a property designed for enduring value and prestige.
          </p>
          <p className="text-base md:text-xl font-noah leading-relaxed">
            Happy Valley offers a vibrant community, excellent amenities, and a growing market, ensuring a wise and rewarding acquisition.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-electric-blue via-cosmic-purple to-deep-blue p-16 animate-fade-in-up animation-delay-400">
        <div className="max-w-2xl w-full bg-deep-blue p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-4xl font-moon font-bold mb-8 text-center">Inquire About Your Future Home</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white-text text-base md:text-lg font-noah mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white-text focus:outline-none focus:ring-2 focus:ring-electric-blue" />
            </div>
            <div>
              <label htmlFor="email" className="block text-white-text text-base md:text-lg font-noah mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white-text focus:outline-none focus:ring-2 focus:ring-electric-blue" />
            </div>
            <div>
              <label htmlFor="message" className="block text-white-text text-base md:text-lg font-noah mb-2">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white-text focus:outline-none focus:ring-2 focus:ring-electric-blue"></textarea>
            </div>
            <button type="submit" className="w-full bg-electric-blue hover:bg-cosmic-purple text-white-text font-bold py-3 px-6 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Send Inquiry
            </button>
          </form>
          <p className="text-center text-white-text text-base md:text-lg mt-8">
            Contact: 408-202-5342 | info@theregencyviewestate.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default RegencyViewEstate;

