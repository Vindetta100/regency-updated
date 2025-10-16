#!/usr/bin/env python3
"""
Generate V9 Home.jsx with V0 Website Theme
Elegant, refined, sophisticated luxury aesthetic
"""

import os

# Read the original v8 file to extract asset imports
with open('/home/ubuntu/regency-updated/src/versions/v8/Home.jsx.backup', 'r') as f:
    original_content = f.read()

# Extract the import section (lines 1-50)
import_section = '\n'.join(original_content.split('\n')[:50])

# Generate the new V9 component with V0 elegant theme
v9_elegant_content = f'''{import_section}

// V0 Theme - Elegant, Refined, Sophisticated Luxury
function V9ElegantHome() {{
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Inter']">
      {{/* Google Fonts */}}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {{/* Navigation */}}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src={{logoImage}} alt="The Regency View Estate" className="h-12" />
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#estate" className="text-gray-600 hover:text-gray-900 transition">The Estate</a>
              <a href="#gallery" className="text-gray-600 hover:text-gray-900 transition">Gallery</a>
              <a href="#investment" className="text-gray-600 hover:text-gray-900 transition">Investment</a>
              <a href="#location" className="text-gray-600 hover:text-gray-900 transition">Location</a>
              <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded transition">Inquire</a>
            </div>
            <button onClick={{() => setIsMobileMenuOpen(!isMobileMenuOpen)}} className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {{/* Hero Section */}}
      <section className="relative h-screen">
        <img src={{exteriorTwilight}} alt="The Regency View Estate" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
          <p className="text-sm font-medium tracking-widest uppercase mb-4">PRIVATE LUXURY ESTATE</p>
          <h1 className="text-6xl md:text-7xl font-['Playfair_Display'] font-semibold mb-6">
            The Regency View Estate
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mb-4">Contemporary Masterpiece</p>
          <p className="text-lg font-light max-w-3xl mb-12">Where Architectural Excellence Meets Natural Beauty</p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-4 text-sm font-medium tracking-wide transition rounded">
            EXPLORE THE ESTATE
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronRight className="w-6 h-6 text-white rotate-90 animate-bounce" />
        </div>
      </section>

      {{/* Architectural Excellence - Two Column Layout */}}
      <section id="estate" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-100/30 rounded-lg transform translate-x-4 translate-y-4" />
              <img 
                src={{livingRoomMain}} 
                alt="Interior Excellence" 
                className="relative w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-amber-600 mb-4">ARCHITECTURAL EXCELLENCE</p>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-semibold mb-6">
                A Rare Fusion of Modern Luxury
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Clean lines, floor-to-ceiling windows, and seamless indoor-outdoor flow define this extraordinary retreat. 
                The great room features bold contemporary finishes, natural stone elements, and sweeping panoramic views.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                A gourmet kitchen with premium appliances and custom cabinetry opens to sunlit living spaces, while 
                thoughtfully designed private quarters offer ultimate comfort and sophistication.
              </p>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-2xl font-['Playfair_Display'] font-semibold mb-2">5BR/5BA + Bonus Room</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* Property Features - Grid Layout */}}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-semibold mb-4">
            Where Poetic Design Meets Excellence
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            This architectural masterpiece represents a rare opportunity for discerning buyers seeking a legacy property 
            that defines sophisticated living
          </p>
          
          <div className="grid md:grid-cols-4 gap-12 mt-16">
            <div>
              <div className="text-5xl font-['Playfair_Display'] font-semibold text-amber-600 mb-4">6,500</div>
              <div className="text-sm font-medium tracking-wide uppercase text-gray-600">SQ FT</div>
              <p className="text-sm text-gray-500 mt-2">Multi-level contemporary trophy home</p>
            </div>
            <div>
              <Maximize className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <div className="text-sm font-medium tracking-wide uppercase text-gray-600">EXPANSIVE GROUNDS</div>
              <p className="text-sm text-gray-500 mt-2">Meticulously landscaped private estate</p>
            </div>
            <div>
              <TreePine className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <div className="text-sm font-medium tracking-wide uppercase text-gray-600">NATURAL SETTING</div>
              <p className="text-sm text-gray-500 mt-2">Surrounded by mature trees and nature</p>
            </div>
            <div>
              <Star className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <div className="text-sm font-medium tracking-wide uppercase text-gray-600">PRIVACY & SECURITY</div>
              <p className="text-sm text-gray-500 mt-2">Gated entrance with advanced systems</p>
            </div>
          </div>
        </div>
      </section>

      {{/* Visual Tour - Alternating Layout */}}
      <section id="gallery" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-amber-600 mb-4">VISUAL TOUR</p>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-semibold">Experience The Estate</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {{[
              {{ img: kitchenMain, title: "Gourmet Kitchen" }},
              {{ img: masterBedroom, title: "Master Suite" }},
              {{ img: bathroomLuxury, title: "Spa Bathroom" }},
              {{ img: exteriorBackPatio, title: "Outdoor Living" }},
              {{ img: officeDen, title: "Private Office" }},
              {{ img: diningRoom, title: "Dining Room" }}
            ].map((item, index) => (
              <div key={{index}} className="relative group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-amber-100/20 rounded-lg transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <img 
                  src={{item.img}} 
                  alt={{item.title}} 
                  className="relative w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h4 className="text-white font-medium text-lg">{{item.title}}</h4>
                </div>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Investment Opportunity */}}
      <section id="investment" className="py-32 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-amber-400 mb-4">INVESTMENT OPPORTUNITY</p>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-semibold mb-6">
            Offered at $2,685,000
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            This is more than a home—it's a legacy property that will define sophisticated living for generations to come
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 text-sm font-medium tracking-wide transition rounded">
              VIEW FULL LISTING
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-10 py-4 text-sm font-medium tracking-wide transition rounded">
              DOWNLOAD FLOOR PLAN
            </button>
          </div>
        </div>
      </section>

      {{/* Contact Section */}}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-semibold mb-6">
            Schedule Your Private Tour
          </h2>
          <p className="text-lg text-gray-600 mb-12">Experience this exceptional property in person</p>
          <ContactForm />
        </div>
      </section>

      {{/* Footer */}}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2025 The Regency View Estate. All rights reserved.</p>
          <p className="mt-2">13101 SE Regency View St, Happy Valley, Oregon 97086</p>
        </div>
      </footer>
    </div>
  )
}}

export default V9ElegantHome
'''

# Write the new V9 file
with open('/home/ubuntu/regency-updated/src/versions/v9/Home.jsx', 'w') as f:
    f.write(v9_elegant_content)

print("✅ V9 Elegant theme component generated successfully!")
print("📁 Saved to: /home/ubuntu/regency-updated/src/versions/v9/Home.jsx")
