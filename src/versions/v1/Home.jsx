
import React from 'react';

const DarkSideOfTheMoon = () => {
  return (
    <div className="min-h-screen bg-deep-black text-white font-body">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-deep-black bg-opacity-80 backdrop-blur-sm p-4 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-heading text-silver">The Regency View Estate</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-silver transition-colors duration-300">Home</a></li>
            <li><a href="#property" className="hover:text-silver transition-colors duration-300">Property</a></li>
            <li><a href="#investment" className="hover:text-silver transition-colors duration-300">Investment</a></li>
            <li><a href="#contact" className="hover:text-silver transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-charcoal bg-cover bg-center animate-fade-in" style={{ backgroundImage: 'url("https://via.placeholder.com/1920x1080")' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center p-8">
          <h2 className="text-6xl font-heading text-silver mb-4 animate-slide-in-top">The Regency View Estate</h2>
          <p className="text-xl text-white mb-8 animate-slide-in-bottom">A $2.685M luxury estate in Happy Valley, Oregon</p>
          <a href="#contact" className="bg-silver text-deep-black px-8 py-3 rounded-full text-lg font-bold hover:bg-white transition-all duration-300 animate-fade-in-up">Inquire Now</a>
        </div>
      </section>

      {/* Property Details Section */}
      <section id="property" className="py-20 bg-deep-black text-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading text-silver text-center mb-12 animate-fade-in">Property Details</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://via.placeholder.com/800x600" alt="Estate Interior" className="rounded-lg shadow-xl animate-slide-in-left" />
            </div>
            <div className="text-white">
              <h3 className="text-4xl font-heading text-silver mb-4">Architectural Mastery</h3>
              <p className="text-lg mb-4">This 4,100 sq ft, 3/4 bed/bath estate, built in 2025, is a testament to modern luxury and design. Every detail has been meticulously crafted to offer an unparalleled living experience.</p>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Spacious 4,100 sq ft living area</li>
                <li>3-4 luxurious bedrooms and bathrooms</li>
                <li>Built in 2025 with contemporary design</li>
                <li>High-end finishes and fixtures throughout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section id="investment" className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading text-silver text-center mb-12 animate-fade-in">Investment Excellence</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-4xl font-heading text-silver mb-4">A Legacy Asset</h3>
              <p className="text-lg mb-4">More than just a home, The Regency View Estate represents a significant investment opportunity in one of Oregon's most desirable locations. Secure your future with this generational asset.</p>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Prime location in Happy Valley, Oregon</li>
                <li>Exceptional market value and appreciation potential</li>
                <li>Exclusive luxury real estate market</li>
                <li>A truly unique and rare offering</li>
              </ul>
            </div>
            <div>
              <img src="https://via.placeholder.com/800x600" alt="Investment Graph" className="rounded-lg shadow-xl animate-slide-in-right" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-deep-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-heading text-silver mb-12 animate-fade-in">Contact Us</h2>
          <p className="text-xl mb-8">Ready to experience The Regency View Estate? Contact us today for a private viewing.</p>
          <div className="max-w-2xl mx-auto bg-charcoal p-10 rounded-lg shadow-xl animate-fade-in-up">
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Your Name" className="w-full p-4 bg-deep-black border border-silver rounded-md text-white placeholder-silver focus:outline-none focus:ring-2 focus:ring-silver" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full p-4 bg-deep-black border border-silver rounded-md text-white placeholder-silver focus:outline-none focus:ring-2 focus:ring-silver" />
              </div>
              <div>
                <textarea placeholder="Your Message" rows="5" className="w-full p-4 bg-deep-black border border-silver rounded-md text-white placeholder-silver focus:outline-none focus:ring-2 focus:ring-silver"></textarea>
              </div>
              <button type="submit" className="bg-silver text-deep-black px-8 py-3 rounded-full text-lg font-bold hover:bg-white transition-all duration-300">Send Message</button>
            </form>
            <div className="mt-8 text-lg">
              <p>Phone: <a href="tel:408-202-5342" className="text-silver hover:underline">408-202-5342</a></p>
              <p>Email: <a href="mailto:info@theregencyviewestate.com" className="text-silver hover:underline">info@theregencyviewestate.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-black py-8 text-center text-silver text-sm">
        <p>&copy; {new Date().getFullYear()} The Regency View Estate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DarkSideOfTheMoon;

