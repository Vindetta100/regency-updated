import React, { useState, useEffect } from 'react'
import { MapPin, Home, Bath, Maximize, Calendar, Star, Phone, Mail, ExternalLink } from 'lucide-react'

const RegencyViewEstateV2 = () => {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 font-['Noah']">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-['Moon'] text-2xl font-light text-gray-800 tracking-wide">
              THE REGENCY VIEW
              <div className="text-xs font-medium tracking-widest text-gray-600 uppercase">
                Estate Collection
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Home</a>
              <a href="#property" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Property</a>
              <a href="#investment" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Investment</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Contact</a>
            </div>
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Private Viewing
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
        <div className="text-center z-10 px-6 max-w-4xl mx-auto">
          <h1 className="font-['Moon'] text-6xl md:text-8xl font-light text-gray-800 mb-8 tracking-wide leading-tight">
            WHERE LUXURY
            <span className="block text-gray-600 italic font-light text-5xl md:text-7xl mt-4">
              Transcends Expectation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Perched mid-hill facing lush green forest, where architectural mastery meets nature's tranquility
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-gray-200 inline-block">
            <p className="text-3xl md:text-4xl font-['Moon'] text-gray-800 mb-2">$2.685M</p>
            <p className="text-gray-600 text-lg">Investment Opportunity in Happy Valley's Most Coveted Location</p>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section id="property" className="section py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Moon'] text-5xl md:text-6xl font-light text-gray-800 mb-6">
              ARCHITECTURAL MASTERY
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Where Vision Becomes Reality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-['Moon'] text-2xl text-gray-800 mb-4">360-Degree Daylight Penetration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Floor-to-ceiling openings flood every space with natural light while maintaining privacy through cleverly designed openings.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-['Moon'] text-2xl text-gray-800 mb-4">Sloping Site Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  The building is thoughtfully carved into the hillside, elevating designed living across three seamless levels.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-12 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <Home className="w-8 h-8 text-gray-700" />
                  </div>
                  <p className="font-['Moon'] text-3xl text-gray-800 mb-2">4,100</p>
                  <p className="text-gray-600">Square Feet</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <Bath className="w-8 h-8 text-gray-700" />
                  </div>
                  <p className="font-['Moon'] text-3xl text-gray-800 mb-2">3/4</p>
                  <p className="text-gray-600">Bed/Bath</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <Maximize className="w-8 h-8 text-gray-700" />
                  </div>
                  <p className="font-['Moon'] text-3xl text-gray-800 mb-2">7,405</p>
                  <p className="text-gray-600">Lot Size (SF)</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8 text-gray-700" />
                  </div>
                  <p className="font-['Moon'] text-3xl text-gray-800 mb-2">2025</p>
                  <p className="text-gray-600">Built</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investment" className="section py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Moon'] text-5xl md:text-6xl font-light text-gray-800 mb-6">
              INVESTMENT EXCELLENCE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Where architectural vision meets strategic investment opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center">
              <div className="font-['Moon'] text-4xl text-gray-800 mb-4">$655</div>
              <div className="text-gray-600 mb-2">Per Square Foot</div>
              <div className="text-sm text-gray-500">Competitive pricing for new construction luxury homes</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center">
              <div className="font-['Moon'] text-4xl text-gray-800 mb-4">4-6%</div>
              <div className="text-gray-600 mb-2">Annual Appreciation</div>
              <div className="text-sm text-gray-500">Historical average for luxury properties in Happy Valley</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center">
              <div className="font-['Moon'] text-4xl text-gray-800 mb-4">Top 10%</div>
              <div className="text-gray-600 mb-2">School Rankings</div>
              <div className="text-sm text-gray-500">Happy Valley schools rank in top 10% statewide</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Moon'] text-5xl md:text-6xl font-light text-gray-800 mb-6">
              SECURE YOUR INVESTMENT
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Properties of this caliber in Happy Valley's luxury market typically attract multiple qualified buyers
            </p>
          </div>

          <div className="bg-gray-50 p-12 rounded-lg shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-['Moon'] text-2xl text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">408-202-5342</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">info@theregencyviewestate.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">13193 SE Regency Vw, Happy Valley, OR 97086</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-['Moon'] text-2xl text-gray-800 mb-6">Schedule Private Viewing</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white"
                  />
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Request Private Viewing
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="font-['Moon'] text-2xl font-light mb-4">THE REGENCY VIEW ESTATE</div>
          <p className="text-gray-400 mb-6">Where Luxury Transcends Expectation</p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <span>© 2025 The Regency View Estate</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default RegencyViewEstateV2
