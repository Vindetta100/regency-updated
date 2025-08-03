import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import ContactForm from './components/ContactForm'
import { MapPin, Home, Bath, Maximize, Calendar, Star, Phone, Mail, ExternalLink, ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react'
import { useState, useEffect } from 'react'

// Import assets
import heroImage from './assets/CeKZPk4dRzae.jpg'
import exteriorImage from './assets/uzMXObUi7McZ.jpg'
import logoImage from './assets/logo_primary.png'
import propertyTourVideo from './assets/regency_residence_3d_tour_ws.mp4'

// Luxury Photo Gallery Data
const luxuryPhotos = [
  {
    id: 1,
    src: heroImage,
    title: "Architectural Masterpiece",
    description: "Contemporary luxury meets natural tranquility",
    category: "exterior"
  },
  {
    id: 2,
    src: exteriorImage,
    title: "Private Forest Sanctuary",
    description: "Elevated position with panoramic views",
    category: "exterior"
  },
  // Add more photos as they become available
]

function App() {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  // Smooth scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up')
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-fade-in-up')
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % luxuryPhotos.length)
  }

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + luxuryPhotos.length) % luxuryPhotos.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50">
      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-stone-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src={logoImage} alt="The Regency View Estate" className="h-12 w-auto" />
              <div className="ml-4">
                <div className="text-2xl font-light tracking-wide text-slate-800">
                  THE REGENCY VIEW
                </div>
                <div className="text-xs font-medium tracking-widest text-amber-600 uppercase">
                  Estate Collection
                </div>
              </div>
            </div>
            <div className="hidden md:flex space-x-12">
              <a href="#home" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide">Home</a>
              <a href="#gallery" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide">Gallery</a>
              <a href="#property" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide">Property</a>
              <a href="#investment" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide">Investment</a>
              <a href="#location" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide">Location</a>
              <a href="#contact" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-none font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Private Viewing
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Cinematic */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover scale-105"
            poster={heroImage}
          >
            <source src={propertyTourVideo} type="video/mp4" />
            <img src={heroImage} alt="The Regency View Estate" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <Badge className="mb-8 bg-amber-500/90 text-white px-6 py-2 text-lg font-light tracking-widest backdrop-blur-sm">
            NEW CONSTRUCTION 2025
          </Badge>
          <h1 className="text-6xl md:text-8xl font-extralight mb-8 leading-tight tracking-wide">
            WHERE LUXURY<br />
            <span className="font-light text-amber-400 italic">Transcends Expectation</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-gray-100 font-light leading-relaxed max-w-4xl mx-auto">
            A rare $2.685M investment opportunity in Happy Valley's most coveted location
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-4 text-lg font-medium tracking-wide rounded-none shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              Schedule Private Viewing
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-12 py-4 text-lg font-medium tracking-wide rounded-none backdrop-blur-sm transition-all duration-500">
              Download Investment Brochure
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Luxury Photo Gallery */}
      <section id="gallery" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-7xl font-extralight text-white mb-8 tracking-wide">
              Visual <span className="italic text-amber-400">Poetry</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Every angle reveals architectural mastery, every detail whispers luxury
            </p>
          </div>

          {/* Main Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {luxuryPhotos.map((photo, index) => (
              <div 
                key={photo.id}
                className="group relative overflow-hidden cursor-pointer transform transition-all duration-700 hover:scale-105"
                onClick={() => {
                  setCurrentPhoto(index)
                  setIsGalleryOpen(true)
                }}
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-2xl font-light mb-2 tracking-wide">{photo.title}</h3>
                    <p className="text-gray-300 font-light">{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery CTA */}
          <div className="text-center">
            <Button 
              onClick={() => setIsGalleryOpen(true)}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-16 py-4 text-xl font-light tracking-widest rounded-none shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
            >
              VIEW COMPLETE GALLERY
            </Button>
          </div>
        </div>
      </section>

      {/* Fullscreen Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button 
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-8 right-8 text-white hover:text-amber-400 transition-colors z-10"
          >
            <X size={48} />
          </button>
          
          <button 
            onClick={prevPhoto}
            className="absolute left-8 text-white hover:text-amber-400 transition-colors z-10"
          >
            <ChevronLeft size={64} />
          </button>
          
          <button 
            onClick={nextPhoto}
            className="absolute right-8 text-white hover:text-amber-400 transition-colors z-10"
          >
            <ChevronRight size={64} />
          </button>

          <div className="max-w-6xl max-h-[90vh] mx-auto px-4">
            <img 
              src={luxuryPhotos[currentPhoto].src} 
              alt={luxuryPhotos[currentPhoto].title}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-8 text-white">
              <h3 className="text-3xl font-light mb-2 tracking-wide">{luxuryPhotos[currentPhoto].title}</h3>
              <p className="text-xl text-gray-300 font-light">{luxuryPhotos[currentPhoto].description}</p>
            </div>
          </div>

          {/* Gallery Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {luxuryPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhoto(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPhoto ? 'bg-amber-400' : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Property Overview - Ultra Premium */}
      <section id="property" className="py-32 bg-gradient-to-br from-white via-stone-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 fade-in-up">
            <h2 className="text-5xl md:text-7xl font-extralight text-slate-800 mb-8 tracking-wide">
              Investment <span className="italic text-amber-600">Excellence</span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Where architectural vision meets strategic investment opportunity
            </p>
          </div>

          {/* Premium Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-110">
                <Home className="w-12 h-12" />
              </div>
              <div className="text-4xl font-light text-slate-800 mb-2">4,100</div>
              <div className="text-slate-600 font-light tracking-wide">Square Feet</div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-110">
                <Bath className="w-12 h-12" />
              </div>
              <div className="text-4xl font-light text-slate-800 mb-2">3/4</div>
              <div className="text-slate-600 font-light tracking-wide">Bed/Bath</div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-110">
                <Maximize className="w-12 h-12" />
              </div>
              <div className="text-4xl font-light text-slate-800 mb-2">7,405</div>
              <div className="text-slate-600 font-light tracking-wide">Lot Size (SF)</div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-110">
                <Calendar className="w-12 h-12" />
              </div>
              <div className="text-4xl font-light text-slate-800 mb-2">2025</div>
              <div className="text-slate-600 font-light tracking-wide">Built</div>
            </div>
          </div>

          {/* Luxury Features Showcase */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <img 
                src={exteriorImage} 
                alt="Property exterior view" 
                className="rounded-none shadow-2xl w-full h-auto transform transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            <div className="space-y-12">
              <h3 className="text-4xl font-light text-slate-800 mb-8 tracking-wide">
                Crafted for the <span className="italic text-amber-600">Connoisseur</span>
              </h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <Star className="w-8 h-8 text-amber-500 mt-2 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="text-xl font-medium text-slate-800 mb-2 tracking-wide">Custom White Oak Cabinetry</h4>
                    <p className="text-slate-600 font-light leading-relaxed">Premium millwork throughout with meticulous attention to every detail</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <Star className="w-8 h-8 text-amber-500 mt-2 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="text-xl font-medium text-slate-800 mb-2 tracking-wide">13-Foot Quartz Waterfall Island</h4>
                    <p className="text-slate-600 font-light leading-relaxed">Dramatic centerpiece with premium Dacor appliances</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <Star className="w-8 h-8 text-amber-500 mt-2 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="text-xl font-medium text-slate-800 mb-2 tracking-wide">Floor-to-Ceiling Windows</h4>
                    <p className="text-slate-600 font-light leading-relaxed">Panoramic forest and mountain views throughout</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <Star className="w-8 h-8 text-amber-500 mt-2 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="text-xl font-medium text-slate-800 mb-2 tracking-wide">ENERGY STAR Qualified</h4>
                    <p className="text-slate-600 font-light leading-relaxed">Superior efficiency with comprehensive warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Analysis - Premium */}
      <section id="investment" className="py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 fade-in-up">
            <h2 className="text-5xl md:text-7xl font-extralight text-white mb-8 tracking-wide">
              Investment <span className="italic text-amber-400">Intelligence</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Strategic positioning in Happy Valley's luxury market with exceptional appreciation potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Card className="bg-gradient-to-br from-white to-stone-50 border-none shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-12 text-center">
                <div className="text-5xl font-light text-amber-600 mb-6">$655</div>
                <div className="text-2xl font-medium text-slate-800 mb-4 tracking-wide">Per Square Foot</div>
                <p className="text-slate-600 font-light leading-relaxed">Competitive pricing for new construction luxury homes in Happy Valley market</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-stone-50 border-none shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-12 text-center">
                <div className="text-5xl font-light text-amber-600 mb-6">4-6%</div>
                <div className="text-2xl font-medium text-slate-800 mb-4 tracking-wide">Annual Appreciation</div>
                <p className="text-slate-600 font-light leading-relaxed">Historical average for luxury properties in Happy Valley over past decade</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-stone-50 border-none shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-12 text-center">
                <div className="text-5xl font-light text-amber-600 mb-6">Top 10%</div>
                <div className="text-2xl font-medium text-slate-800 mb-4 tracking-wide">School Rankings</div>
                <p className="text-slate-600 font-light leading-relaxed">Happy Valley schools rank in top 10% statewide, driving sustained demand</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Schools - Premium */}
      <section id="location" className="py-32 bg-gradient-to-br from-white via-stone-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 fade-in-up">
            <h2 className="text-5xl md:text-7xl font-extralight text-slate-800 mb-8 tracking-wide">
              Happy Valley: <span className="italic text-amber-600">Premier Investment Market</span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Strategic location combining excellent schools, natural beauty, and proximity to Portland's economic centers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-light text-slate-800 mb-6 tracking-wide">Educational Excellence</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6 text-lg">
                  Happy Valley's school system ranks in the top 10% statewide, with Happy Valley Elementary earning the #1 position in the North Clackamas School District.
                </p>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-amber-500" />
                  <span className="text-slate-700 font-light text-lg">20 minutes to Portland's central business district</span>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-light text-slate-800 mb-6 tracking-wide">Natural Asset Value</h3>
                <p className="text-slate-600 font-light leading-relaxed text-lg">
                  The property's forested setting represents a finite resource in an increasingly developed region. Mount Talbert Nature Park and the Clackamas River provide additional recreational amenities.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-none p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-light mb-8 tracking-wide">Investment Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <span className="font-light text-lg">New construction with comprehensive warranty</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <span className="font-light text-lg">Elevated position with panoramic views</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <span className="font-light text-lg">Premium materials and energy efficiency</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <span className="font-light text-lg">Proximity to top-rated schools</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <span className="font-light text-lg">Forest privacy with city convenience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Ultra Premium */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 fade-in-up">
            <h2 className="text-5xl md:text-7xl font-extralight mb-8 tracking-wide">
              Secure Your <span className="italic text-amber-400">Investment Opportunity</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Properties of this caliber in Happy Valley's luxury market typically attract multiple qualified buyers. Schedule your private viewing today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-light mb-8 tracking-wide">Investment Support</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-12 text-lg">
                Our team provides comprehensive support for international investors, including assistance with financing options, property management services, and ongoing market analysis.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-amber-400" />
                  <span className="font-light text-lg">Available upon request</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-amber-400" />
                  <span className="font-light text-lg">info@theregencyviewestate.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-amber-400" />
                  <span className="font-light text-lg">13193 SE Regency Vw, Happy Valley, OR 97086</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-none p-12 border border-white/20">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src={logoImage} alt="The Regency View Estate" className="h-16 w-auto mx-auto mb-8 opacity-80" />
            <div className="text-2xl font-light tracking-widest mb-4">THE REGENCY VIEW ESTATE</div>
            <div className="text-sm font-light tracking-widest text-gray-400 uppercase mb-8">
              Where Luxury Transcends Expectation
            </div>
            <p className="text-gray-400 font-light">
              © 2025 The Regency View Estate. All rights reserved. | $2,685,000 | MLS #549736760
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

