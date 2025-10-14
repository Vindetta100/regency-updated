import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Home, Bed, Bath, Square } from 'lucide-react';

const V6 = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-serif text-white tracking-wide">
              THE REGENCY VIEW ESTATE
            </h1>
            <ul className="flex space-x-8 text-sm uppercase tracking-wider">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white hover:text-warm-gold transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('property')}
                  className="text-white hover:text-warm-gold transition-colors duration-300"
                >
                  Property
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-white hover:text-warm-gold transition-colors duration-300"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-warm-gold transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../../../assets/redfin-photos/exterior_main_twilight.jpeg')`
        }}
      >
        <div className="text-center text-white px-4 max-w-5xl">
          <p className="text-sm uppercase tracking-widest mb-4 text-warm-gold">
            Private Luxury Estate
          </p>
          <h2 className="text-7xl md:text-8xl font-serif mb-6 leading-tight">
            The Regency View Estate
          </h2>
          <p className="text-xl md:text-2xl mb-4 font-light">
            Contemporary Masterpiece
          </p>
          <p className="text-lg md:text-xl mb-12 font-light max-w-3xl mx-auto">
            Where Architectural Excellence Meets Natural Beauty
          </p>
          <button 
            onClick={() => scrollToSection('property')}
            className="bg-white text-black px-10 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-warm-gold hover:text-white transition-all duration-300"
          >
            Explore the Estate
          </button>
        </div>
        
        <button 
          onClick={() => scrollToSection('property')}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* Property Overview Section */}
      <section id="property" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-4 text-warm-gold">
              Happy Valley, Oregon
            </p>
            <h3 className="text-5xl md:text-6xl font-serif mb-6">
              A Legacy of Luxury
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This exceptional 4,100 square foot estate represents the pinnacle of contemporary design, 
              offering an unparalleled living experience in one of Oregon's most prestigious locations.
            </p>
          </div>

          {/* Property Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center p-8 border border-gray-200">
              <Square className="mx-auto mb-4 text-warm-gold" size={40} />
              <p className="text-4xl font-serif mb-2">4,100</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">Square Feet</p>
            </div>
            <div className="text-center p-8 border border-gray-200">
              <Bed className="mx-auto mb-4 text-warm-gold" size={40} />
              <p className="text-4xl font-serif mb-2">3-4</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">Bedrooms</p>
            </div>
            <div className="text-center p-8 border border-gray-200">
              <Bath className="mx-auto mb-4 text-warm-gold" size={40} />
              <p className="text-4xl font-serif mb-2">3-4</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">Bathrooms</p>
            </div>
            <div className="text-center p-8 border border-gray-200">
              <Home className="mx-auto mb-4 text-warm-gold" size={40} />
              <p className="text-4xl font-serif mb-2">2025</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">Year Built</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="../../../assets/redfin-photos/exterior_front_day.jpg" 
                alt="Estate Exterior" 
                className="w-full h-auto shadow-2xl"
              />
            </div>
            <div>
              <h4 className="text-4xl font-serif mb-6">Architectural Excellence</h4>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every detail of The Regency View Estate has been meticulously crafted to create 
                a harmonious blend of modern sophistication and timeless elegance. From the soaring 
                ceilings to the carefully curated finishes, this residence exemplifies luxury living.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-warm-gold mr-3 mt-1">●</span>
                  <span className="text-gray-700">Expansive open-concept living spaces designed for both intimate gatherings and grand entertaining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-gold mr-3 mt-1">●</span>
                  <span className="text-gray-700">Floor-to-ceiling windows offering breathtaking natural light and stunning views</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-gold mr-3 mt-1">●</span>
                  <span className="text-gray-700">Premium materials and finishes throughout, including hardwood floors and designer fixtures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-gold mr-3 mt-1">●</span>
                  <span className="text-gray-700">State-of-the-art smart home technology for ultimate comfort and convenience</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interior Features */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h4 className="text-4xl font-serif mb-6">Refined Interiors</h4>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The interior spaces showcase an exceptional attention to detail, with custom millwork, 
                designer lighting, and a sophisticated palette that creates an atmosphere of understated luxury.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-warm-gold mr-3 mt-1">●</span>
                  <span className="text-gray-700">Gourmet kitchen with professional-grade appliances and custom cabinetry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-gold mr-3 mt-1">●</span>
                  <span className="text-gray-700">Luxurious primary suite with spa-inspired bathroom and walk-in closet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-gold mr-3 mt-1">●</span>
                  <span className="text-gray-700">Elegant living and dining areas perfect for sophisticated entertaining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-gold mr-3 mt-1">●</span>
                  <span className="text-gray-700">Thoughtfully designed outdoor living spaces with premium landscaping</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="../../../assets/kitchen_reference.png" 
                alt="Luxury Kitchen" 
                className="w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-4 text-warm-gold">
              Visual Tour
            </p>
            <h3 className="text-5xl md:text-6xl font-serif mb-6">
              Experience the Estate
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden">
              <img 
                src="../../../assets/redfin-photos/dining_room.jpg" 
                alt="Dining Room" 
                className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden">
              <img 
                src="../../../assets/redfin-photos/bathroom_luxury.jpg" 
                alt="Luxury Bathroom" 
                className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden">
              <img 
                src="../../../assets/redfin-photos/bedroom_secondary.jpg" 
                alt="Bedroom" 
                className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden">
              <img 
                src="../../../assets/redfin-photos/exterior_back_patio.jpg" 
                alt="Back Patio" 
                className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden">
              <img 
                src="../../../assets/redfin-photos/closet_master.jpg" 
                alt="Master Closet" 
                className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden">
              <img 
                src="../../../assets/redfin-photos/bathroom_main.jpg" 
                alt="Main Bathroom" 
                className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest mb-4 text-warm-gold">
            Investment Opportunity
          </p>
          <h3 className="text-5xl md:text-6xl font-serif mb-6">
            $2,685,000
          </h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            A rare opportunity to own a masterpiece of contemporary architecture in 
            one of Oregon's most desirable communities.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-black text-white px-10 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-warm-gold transition-all duration-300"
          >
            Schedule a Private Viewing
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-4 text-warm-gold">
                Get in Touch
              </p>
              <h3 className="text-5xl md:text-6xl font-serif mb-6">
                Contact Us
              </h3>
              <p className="text-xl text-gray-600">
                Ready to experience The Regency View Estate? We invite you to schedule 
                a private viewing and discover the extraordinary lifestyle that awaits.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="bg-white p-8 shadow-lg">
                <form className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-4 border border-gray-300 focus:border-warm-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-4 border border-gray-300 focus:border-warm-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Your Phone" 
                      className="w-full p-4 border border-gray-300 focus:border-warm-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows="5" 
                      className="w-full p-4 border border-gray-300 focus:border-warm-gold focus:outline-none transition-colors"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-black text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-warm-gold transition-all duration-300"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="text-warm-gold mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Phone</h4>
                    <a href="tel:408-202-5342" className="text-gray-600 hover:text-warm-gold transition-colors">
                      408-202-5342
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-warm-gold mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Email</h4>
                    <a href="mailto:info@theregencyviewestate.com" className="text-gray-600 hover:text-warm-gold transition-colors">
                      info@theregencyviewestate.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-warm-gold mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Location</h4>
                    <p className="text-gray-600">
                      13193 SE Regency View<br />
                      Happy Valley, OR 97086
                    </p>
                  </div>
                </div>
                
                <div className="pt-8">
                  <h4 className="font-semibold mb-4 text-lg">Office Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-4">The Regency View Estate</h2>
          <p className="text-gray-400 mb-6">Contemporary Masterpiece in Happy Valley, Oregon</p>
          <p className="text-sm text-gray-500">
            © 2025 The Regency View Estate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default V6;

