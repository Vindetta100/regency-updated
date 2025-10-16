import { Button } from '../../../components/ui/button'
import { Card, CardContent } from '../../../components/ui/card'
import { Badge } from '../../../components/ui/badge'
import ContactForm from '../../../components/ContactForm'
import { MapPin, Home, Bath, Maximize, Calendar, Star, Phone, Mail, ExternalLink, ChevronLeft, ChevronRight, X, Play, Pause, Menu, Droplets, Zap, Wind, Thermometer, Wrench, Car, Lightbulb, TreePine, Mountain, Utensils, Flame } from 'lucide-react'
import { useState, useEffect } from 'react'

// Import assets
import heroImage from '../../../assets/CeKZPk4dRzae.jpg'
import exteriorImage from '../../../assets/uzMXObUi7McZ.jpg'
import logoImage from '../../../assets/logo_primary.png'
import propertyTourVideo from '../../../assets/regency_residence_3d_tour_ws.mp4'
import virtualTourVideo from '../../../assets/regency_3d_tour.mp4'

// Import New Optimized Photos from v6-photos
import exteriorTwilight from '../../../assets/v6-photos/photo-25.jpg' // Sunset/twilight exterior
import kitchenMain from '../../../assets/v6-photos/photo-10.jpg' // Interior kitchen/living
import livingRoomMain from '../../../assets/v6-photos/photo-21.jpg' // Interior living room
import diningRoom from '../../../assets/v6-photos/photo-15.jpg' // Interior dining
import masterBedroom from '../../../assets/v6-photos/photo-19.jpg' // Interior bedroom

// Additional Interior Photos
import livingRoomFireplace from '../../../assets/v6-photos/photo-08.jpg' // Interior living detail
import bathroomMain from '../../../assets/v6-photos/photo-18.jpg' // Interior bathroom
import bathroomLuxury from '../../../assets/v6-photos/photo-14.jpg' // Interior bathroom luxury
import bedroomSecondary from '../../../assets/v6-photos/photo-16.jpg' // Interior bedroom 2
import bathroomPowder from '../../../assets/v6-photos/photo-13.jpg' // Interior bathroom powder
import staircaseOak from '../../../assets/v6-photos/photo-20.jpg' // Interior staircase
import closetMaster from '../../../assets/v6-photos/photo-12.jpg' // Interior closet
import garageInterior from '../../../assets/v6-photos/photo-11.jpg' // Interior garage
import laundryRoom from '../../../assets/v6-photos/photo-09.jpg' // Interior laundry
import officeDen from '../../../assets/v6-photos/photo-17.jpg' // Interior office
import storageRoom from '../../../assets/v6-photos/photo-07.jpg' // Interior storage
import mechanicalRoom from '../../../assets/v6-photos/photo-06.jpg' // Interior mechanical

// Exterior Photos
import exteriorFrontDay from '../../../assets/v6-photos/photo-47.jpg' // Exterior main
import exteriorSideAngle from '../../../assets/v6-photos/photo-22.jpg' // Exterior side
import exteriorBackPatio from '../../../assets/v6-photos/photo-24.jpg' // Exterior patio
import neighborhoodAerial from '../../../assets/v6-photos/photo-31.jpg' // Aerial view
import neighborhoodContext from '../../../assets/v6-photos/photo-30.jpg' // Context view

// Additional Property Photos (using remaining optimized photos)
import sitePlan from '../../../assets/v6-photos/photo-01.jpg'
import floorPlanMain from '../../../assets/v6-photos/photo-02.jpg'
import floorPlanUpper from '../../../assets/v6-photos/photo-03.jpg'
import floorPlanLower from '../../../assets/v6-photos/photo-04.jpg'
import elevationDrawings from '../../../assets/v6-photos/photo-05.jpg'
import propertySurvey from '../../../assets/v6-photos/photo-23.jpg'


// Rimrock Theme - Bold, Commanding, Powerful Luxury
const heroSlides = [
  {
    image: exteriorTwilight,
    title: "COMMAND RESPECT",
    subtitle: "Where industry titans establish their legacy",
    cta: "SCHEDULE PRIVATE VIEWING"
  },
  {
    image: exteriorFrontDay,
    title: "BE LEGENDARY",
    subtitle: "Architectural poetry written in stone and steel",
    cta: "SCHEDULE PRIVATE VIEWING"
  },
  {
    image: exteriorSideAngle,
    title: "BE UNFORGETTABLE",
    subtitle: "The address that defines distinction",
    cta: "SCHEDULE PRIVATE VIEWING"
  },
  {
    image: exteriorBackPatio,
    title: "LEAVE YOUR MARK",
    subtitle: "Generational wealth deserves generational beauty",
    cta: "SCHEDULE PRIVATE VIEWING"
  },
  {
    image: kitchenMain,
    title: "OWN THE EXTRAORDINARY",
    subtitle: "Private luxury estate • $2,685,000 • Happy Valley, Oregon",
    cta: "SCHEDULE PRIVATE VIEWING"
  }
]

function V8RimrockHome() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  // Auto-advance slides
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-['Montserrat']">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src={logoImage} alt="The Regency View Estate" className="h-12" />
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wider uppercase">
              <a href="#estate" className="text-white/80 hover:text-white transition">THE ESTATE</a>
              <a href="#gallery" className="text-white/80 hover:text-white transition">GALLERY</a>
              <a href="#investment" className="text-white/80 hover:text-white transition">INVESTMENT</a>
              <a href="#location" className="text-white/80 hover:text-white transition">LOCATION</a>
              <a href="#contact" className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded transition">INQUIRE</a>
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section className="relative h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-6xl md:text-8xl font-black tracking-tight uppercase mb-6">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-3xl mb-12">
                {slide.subtitle}
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-sm font-bold tracking-widest uppercase transition">
                {slide.cta}
              </button>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* Estate Overview */}
      <section id="estate" className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold tracking-widest uppercase text-purple-600 mb-4">PRIVATE LUXURY ESTATE</h2>
          <h3 className="text-5xl md:text-6xl font-black uppercase mb-6">HAPPY VALLEY, OREGON</h3>
          <p className="text-xl font-bold uppercase mb-12">CONTEMPORARY MASTERPIECE PERCHED MID-HILL</p>
          
          <div className="grid md:grid-cols-2 gap-16 mt-16 text-left">
            <div>
              <img src={livingRoomMain} alt="Interior" className="w-full h-96 object-cover rounded-lg mb-6" />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-3xl font-black uppercase mb-6">5BR/5BA + BONUS ROOM</h4>
              <p className="text-lg font-['Inter'] leading-relaxed mb-6">
                Clean lines, floor-to-ceiling windows, and seamless indoor-outdoor flow define this three-level retreat. 
                The great room features bold contemporary finishes, natural stone fireplace, and sweeping forest views.
              </p>
              <p className="text-lg font-['Inter'] leading-relaxed">
                A gourmet kitchen with Dacor professional appliances opens to sunlit spaces, while the lower level 
                includes a hidden safe room for ultimate privacy and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section id="investment" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold tracking-widest uppercase text-purple-400 mb-4">ONCE-IN-A-LIFETIME OPPORTUNITY</h2>
          <h3 className="text-5xl md:text-6xl font-black uppercase mb-12">WHERE POETIC DESIGN<br />MEETS PACIFIC NORTHWEST BEAUTY</h3>
          
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div>
              <div className="text-6xl font-black text-purple-500 mb-4">6,500</div>
              <div className="text-sm font-bold tracking-widest uppercase">SQUARE FEET</div>
            </div>
            <div>
              <div className="text-6xl font-black text-purple-500 mb-4">3-LEVEL</div>
              <div className="text-sm font-bold tracking-widest uppercase">CONTEMPORARY TROPHY HOME</div>
            </div>
            <div>
              <div className="text-6xl font-black text-purple-500 mb-4">$2.685M</div>
              <div className="text-sm font-bold tracking-widest uppercase">INVESTMENT OPPORTUNITY</div>
            </div>
          </div>
          
          <button className="mt-16 bg-purple-600 hover:bg-purple-700 text-white px-16 py-5 text-sm font-bold tracking-widest uppercase transition">
            SCHEDULE PRIVATE SHOWING
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black uppercase text-center mb-16">VISUAL TOUR</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <img src={kitchenMain} alt="Gourmet Kitchen" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <h4 className="font-bold uppercase">GOURMET KITCHEN</h4>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg">
              <img src={masterBedroom} alt="Master Suite" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <h4 className="font-bold uppercase text-white">MASTER SUITE</h4>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg">
              <img src={bathroomLuxury} alt="Spa Bathroom" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <h4 className="font-bold uppercase text-white">SPA BATHROOM</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black uppercase mb-8">SCHEDULE YOUR<br />PRIVATE TOUR</h2>
          <p className="text-xl mb-12">Experience this exceptional property in person</p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-white/60">
          <p className="font-['Inter']">© 2025 The Regency View Estate. All rights reserved.</p>
          <p className="mt-2 font-['Inter']">13101 SE Regency View St, Happy Valley, Oregon 97086</p>
        </div>
      </footer>
    </div>
  )
}

export default V8RimrockHome
