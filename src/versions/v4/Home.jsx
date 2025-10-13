
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D2D2D] to-[#D3D3D3] text-white font-noah">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl font-bold font-moon text-gold-400 mb-4 drop-shadow-lg">
            The Regency View Estate
          </h1>
          <p className="text-2xl font-light mb-8">
            Luxury Property in Happy Valley, Oregon
          </p>
          <button className="bg-gold-500 text-black font-bold py-3 px-8 rounded-full hover:bg-gold-600 transition duration-300">
            Inquire Now
          </button>
        </motion.div>
        {/* Corona Effect (simplified) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute w-96 h-96 rounded-full bg-gold-500 blur-3xl opacity-30"
          ></motion.div>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="py-20 px-10 text-center bg-black bg-opacity-70">
        <h2 className="text-5xl font-bold font-moon text-gold-400 mb-12">
          Architectural Mastery
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="text-lg mb-4">
              Discover an unparalleled living experience at The Regency View Estate, a masterpiece of modern design nestled in the serene landscape of Happy Valley, Oregon.
            </p>
            <p className="text-lg mb-4">
              Boasting 4,100 sq ft of meticulously crafted space, this estate, built in 2025, offers 3 to 4 spacious bedrooms and bathrooms, blending luxury with comfort.
            </p>
            <p className="text-lg">
              Every detail reflects architectural mastery, from sweeping lines to premium finishes, creating an ambiance of sophisticated elegance.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>$2.685M Luxury Estate</li>
              <li>4,100 sq ft of living space</li>
              <li>3-4 Bedrooms, 3-4 Bathrooms</li>
              <li>Built in 2025</li>
              <li>Happy Valley, Oregon</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Investment Information Section */}
      <section className="py-20 px-10 text-center bg-gradient-to-br from-[#2D2D2D] to-[#D3D3D3]">
        <h2 className="text-5xl font-bold font-moon text-gold-400 mb-12">
          An Investment Opportunity
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-200"
        >
          More than just a home, The Regency View Estate represents a sound investment in a rapidly appreciating luxury market. Its prime location, exceptional design, and modern amenities ensure lasting value and an unparalleled lifestyle.
        </motion.p>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-10 bg-black bg-opacity-70">
        <h2 className="text-5xl font-bold font-moon text-gold-400 text-center mb-12">
          Inquire About This Property
        </h2>
        <div className="max-w-2xl mx-auto bg-gray-800 p-10 rounded-lg shadow-xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-3 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:ring-gold-500 focus:border-gold-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-3 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:ring-gold-500 focus:border-gold-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-200">Phone</label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full p-3 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:ring-gold-500 focus:border-gold-500"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-200">Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full p-3 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:ring-gold-500 focus:border-gold-500"
                placeholder="I am interested in learning more about The Regency View Estate..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gold-500 text-black font-bold py-3 px-4 rounded-md hover:bg-gold-600 transition duration-300"
            >
              Submit Inquiry
            </button>
          </form>
          <p className="text-center text-gray-400 mt-8">
            Alternatively, contact us directly:
            <br />
            Phone: <a href="tel:408-202-5342" className="text-gold-400 hover:underline">408-202-5342</a>
            <br />
            Email: <a href="mailto:info@theregencyviewestate.com" className="text-gold-400 hover:underline">info@theregencyviewestate.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-black text-gray-400">
        <p>&copy; 2025 The Regency View Estate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

