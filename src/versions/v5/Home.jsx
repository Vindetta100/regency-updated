import React, { useEffect } from 'react';

const RegencyViewEstateV5 = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
  return (
    <div className="min-h-screen bg-pure-white text-pure-black font-noah">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-pure-black bg-opacity-80 text-pure-white p-4 z-50 shadow-lg">
        <ul className="flex justify-center space-x-8">
          <li><a href="#hero" className="hover:text-charcoal transition-colors duration-300">Home</a></li>
          <li><a href="#details" className="hover:text-charcoal transition-colors duration-300">Details</a></li>
          <li><a href="#mastery" className="hover:text-charcoal transition-colors duration-300">Mastery</a></li>
          <li><a href="#investment" className="hover:text-charcoal transition-colors duration-300">Investment</a></li>
          <li><a href="#contact" className="hover:text-charcoal transition-colors duration-300">Contact</a></li>
        </ul>
      </nav>
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-pure-black text-pure-white">
        <div className="text-center p-8">
          <h1 className="font-moon text-6xl md:text-8xl font-bold mb-4 animate-fade-in-up">
            The Regency View Estate
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up delay-200">
            Luxury Property in Happy Valley, Oregon
          </p>
          <button className="bg-pure-white text-pure-black px-8 py-3 rounded-full text-lg font-bold hover:bg-charcoal hover:text-pure-white transition-all duration-300 animate-fade-in-up delay-400">
            Inquire Now
          </button>
        </div>
      </section>
      {/* Property Details Section */}
      <section id="details" className="min-h-screen flex items-center justify-center p-16 bg-pure-white text-pure-black">    <div className="max-w-4xl text-center">
          <h2 className="font-moon text-5xl font-bold mb-8 text-charcoal animate-fade-in-up">
            A Masterpiece of Modern Luxury
          </h2>
          <p className="text-xl mb-4 leading-relaxed animate-fade-in-up delay-200">
            Nestled in the serene landscape of Happy Valley, Oregon, The Regency View Estate offers an unparalleled living experience. This architectural marvel, built in 2025, spans 4,100 sq ft and features 3 to 4 spacious bedrooms and bathrooms, designed with meticulous attention to detail.
          </p>
          <p className="text-xl mb-4 leading-relaxed animate-fade-in-up delay-300">
            Every corner of this estate reflects a commitment to luxury and comfort, providing a sanctuary for discerning homeowners.
          </p>
          <ul className="text-lg list-disc list-inside mt-8 text-left inline-block animate-fade-in-up delay-400">
            <li>Property Value: $2.685M</li>
            <li>Size: 4,100 sq ft</li>
            <li>Bed/Bath: 3-4</li>
            <li>Year Built: 2025</li>
          </ul>
        </div>
      </section>

      {/* Architectural Mastery Section */}
      <section id="mastery" className="min-h-screen flex items-center justify-center p-16 bg-charcoal text-pure-white">
        <div className="max-w-4xl text-center">
          <h2 className="font-moon text-5xl font-bold mb-8 animate-fade-in-up">
            Architectural Mastery
          </h2>
          <p className="text-xl mb-4 leading-relaxed animate-fade-in-up delay-200">
            Experience a home where innovative design meets timeless elegance. The Regency View Estate is a testament to architectural brilliance, featuring clean lines, expansive windows, and a seamless integration with its natural surroundings.
          </p>
          <p className="text-xl leading-relaxed animate-fade-in-up delay-300">
            Each element has been thoughtfully curated to create a living space that is both breathtaking and functional.
          </p>
        </div>
      </section>

       {/* Investment Opportunity Section */}
      <section id="investment" className="min-h-screen flex items-center justify-center p-16 bg-pure-white text-pure-black">
        <div className="max-w-4xl text-center">
          <h2 className="font-moon text-5xl font-bold mb-8 text-charcoal animate-fade-in-up">
            An Unrivaled Investment
          </h2>
          <p className="text-xl mb-4 leading-relaxed animate-fade-in-up delay-200">
            More than just a home, The Regency View Estate represents a significant investment opportunity in one of Oregon's most desirable locations. Its prime setting, coupled with its exceptional design and amenities, ensures lasting value.
          </p>
          <p className="text-xl leading-relaxed animate-fade-in-up delay-300">
            Secure your legacy with a property that promises both luxurious living and substantial appreciation.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center p-16 bg-pure-black text-pure-white">
        <div className="max-w-2xl w-full text-center">
          <h2 className="font-moon text-5xl font-bold mb-8 animate-fade-in-up">
            Inquire About This Exclusive Property
          </h2>
          <p className="text-xl mb-8 animate-fade-in-up delay-200">
            Contact us today to schedule a private viewing or to learn more about The Regency View Estate.
          </p>
          <form className="space-y-6 text-left animate-fade-in-up delay-300">
            <div>
              <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-3 rounded-md bg-charcoal border border-charcoal focus:outline-none focus:ring-2 focus:ring-pure-white text-pure-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 rounded-md bg-charcoal border border-charcoal focus:outline-none focus:ring-2 focus:ring-pure-white text-pure-white" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-lg font-bold mb-2">Phone (Optional)</label>
              <input type="tel" id="phone" name="phone" className="w-full p-3 rounded-md bg-charcoal border border-charcoal focus:outline-none focus:ring-2 focus:ring-pure-white text-pure-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full p-3 rounded-md bg-charcoal border border-charcoal focus:outline-none focus:ring-2 focus:ring-pure-white text-pure-white"></textarea>
            </div>
            <button type="submit" className="w-full bg-pure-white text-pure-black px-8 py-3 rounded-full text-lg font-bold hover:bg-charcoal hover:text-pure-white transition-all duration-300">
              Send Inquiry
            </button>
          </form>
          <div className="mt-8 text-lg animate-fade-in-up delay-400">
            <p>Phone: 408-202-5342</p>
            <p>Email: info@theregencyviewestate.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pure-black text-pure-white text-center p-8 text-sm">
        <p>&copy; 2025 The Regency View Estate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RegencyViewEstateV5;

