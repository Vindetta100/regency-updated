import { Button } from '../../../components/ui/button'
import { Card, CardContent } from '../../../components/ui/card'
import { Badge } from '../../../components/ui/badge'
import ContactForm from '../../../components/ContactForm'
import PaymentCalculator from '../../components/PaymentCalculator'
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

// Enhanced Luxury Photo Gallery Data with Developer's Vision
const luxuryPhotos = [
  // Exterior Views - Showcasing Developer's Architectural Mastery
  {
    id: 1,
    src: exteriorTwilight,
    title: "Architectural Masterpiece at Twilight",
    description: "Architectural mastery harmonizes with the natural forest setting, creating an exceptional luxury living experience.",
    category: "exterior"
  },
  {
    id: 2,
    src: exteriorFrontDay,
    title: "Precision-Engineered Facade",
    description: "Architectural mastery harmonizes with the natural forest setting, creating an exceptional luxury living experience.",
    category: "exterior"
  },
  {
    id: 3,
    src: exteriorSideAngle,
    title: "Three Seamless Levels of Design",
    description: "Architectural mastery harmonizes with the natural forest setting, creating an exceptional luxury living experience.",
    category: "exterior"
  },
  {
    id: 4,
    src: exteriorBackPatio,
    title: "Outdoor Living Zones in Cardinal Directions",
    description: "Architectural mastery harmonizes with the natural forest setting, creating an exceptional luxury living experience.",
    category: "exterior"
  },

  // Interior Spaces - Showcasing Artisan Craftsmanship
  {
    id: 5,
    src: kitchenMain,
    title: "Culinary Excellence with Dacor Professional Suite",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "kitchen"
  },
  {
    id: 6,
    src: diningRoom,
    title: "Custom White Oak Cabinetry Throughout",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "kitchen"
  },
  {
    id: 7,
    src: livingRoomMain,
    title: "Floor-to-Ceiling Windows with Forest Views",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "living"
  },
  {
    id: 8,
    src: livingRoomFireplace,
    title: "See-Through Fireplace with TV Mounting",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "living"
  },
  {
    id: 9,
    src: masterBedroom,
    title: "Master Suite with Mountain Views",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "bedroom"
  },
  {
    id: 10,
    src: bathroomMain,
    title: "Designer Plumbing Fixtures by Axor & Graff",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "bathroom"
  },
  {
    id: 11,
    src: bathroomLuxury,
    title: "Hansgrohe & Duravit European Excellence",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "bathroom"
  },
  {
    id: 12,
    src: staircaseOak,
    title: "Custom Oak Stair Slat Wall with Up-Lighting",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "living"
  },
  {
    id: 13,
    src: closetMaster,
    title: "Custom Storage Solutions",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "utility"
  },
  {
    id: 14,
    src: garageInterior,
    title: "Oversized 3-Car Garage with Shop Area",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "garage"
  },
  {
    id: 15,
    src: mechanicalRoom,
    title: "Professional-Grade Mechanical Systems",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "utility"
  },

  // Additional Luxury Details
  {
    id: 16,
    src: bedroomSecondary,
    title: "Secondary Bedroom with Expansion Capability",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "bedroom"
  },
  {
    id: 17,
    src: bathroomPowder,
    title: "Powder Room with Premium Fixtures",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "bathroom"
  },
  {
    id: 18,
    src: laundryRoom,
    title: "Utility Spaces with Luxury Standards",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "utility"
  },
  {
    id: 19,
    src: officeDen,
    title: "Large Den/Office Space",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "living"
  },
  {
    id: 20,
    src: storageRoom,
    title: "Organized Storage Solutions",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "utility"
  },

  // Neighborhood & Context
  {
    id: 21,
    src: neighborhoodAerial,
    title: "Happy Valley Forest Setting",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "location"
  },
  {
    id: 22,
    src: neighborhoodContext,
    title: "Urban Living Meets Forestry Sanctuary",
    description: "Premium materials and artisan craftsmanship create spaces of exceptional luxury and refined living.",
    category: "location"
  },

  // Technical & Plans
  {
    id: 23,
    src: floorPlanMain,
    title: "Main Floor Architectural Plan",
    description: "Thoughtful design maximizes both functionality and aesthetic appeal in every architectural detail.",
    category: "plans"
  },
  {
    id: 24,
    src: floorPlanUpper,
    title: "Upper Floor Private Living",
    description: "Thoughtful design maximizes both functionality and aesthetic appeal in every architectural detail.",
    category: "plans"
  },
  {
    id: 25,
    src: floorPlanLower,
    title: "Lower Floor with Garage & Shop",
    description: "Thoughtful design maximizes both functionality and aesthetic appeal in every architectural detail.",
    category: "plans"
  }
]

function App() {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAutoRotating, setIsAutoRotating] = useState(true)

  // Auto-rotation effect for hero gallery
  useEffect(() => {
    if (!isAutoRotating || isGalleryOpen) return
    
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % luxuryPhotos.length)
    }, 5000) // Change photo every 5 seconds
    
    return () => clearInterval(interval)
  }, [isAutoRotating, isGalleryOpen])

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
    setIsAutoRotating(false) // Pause auto-rotation when user interacts
    setCurrentPhoto((prev) => (prev + 1) % luxuryPhotos.length)
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsAutoRotating(true), 10000)
  }

  const prevPhoto = () => {
    setIsAutoRotating(false) // Pause auto-rotation when user interacts
    setCurrentPhoto((prev) => (prev - 1 + luxuryPhotos.length) % luxuryPhotos.length)
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsAutoRotating(true), 10000)
  }

  const selectPhoto = (index) => {
    setIsAutoRotating(false) // Pause auto-rotation when user interacts
    setCurrentPhoto(index)
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsAutoRotating(true), 10000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50">
      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-stone-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src={logoImage} alt="The Regency View Estate" className="h-8 sm:h-12 w-auto" />
              <div className="ml-2 sm:ml-4">
                <div className="text-lg sm:text-2xl font-light tracking-wide text-slate-800">
                  THE REGENCY VIEW
                </div>
                <div className="text-xs font-medium tracking-widest text-amber-600 uppercase">
                  Estate Collection
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              <a href="#home" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide">Home</a>
              <a href="#gallery" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide">Gallery</a>
              <a href="#property" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide">Property</a>
              <a href="#investment" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide">Investment</a>
              <a href="#location" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide">Location</a>
              <a href="#contact" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide">Contact</a>
            </div>

            {/* Desktop CTA Button */}
            <a href="#contact">
              <Button className="hidden md:block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-none font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Private Viewing
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-700 hover:text-amber-600 hover:bg-slate-100 transition-all duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-stone-200/50 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#home" 
                className="block text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide py-3 border-b border-stone-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#gallery" 
                className="block text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide py-3 border-b border-stone-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#property" 
                className="block text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide py-3 border-b border-stone-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Property
              </a>
              <a 
                href="#investment" 
                className="block text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide py-3 border-b border-stone-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Investment
              </a>
              <a 
                href="#location" 
                className="block text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide py-3 border-b border-stone-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Location
              </a>
              <a 
                href="#contact" 
                className="block text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium tracking-wide py-3 border-b border-stone-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a href="#contact">
                <Button 
                  className="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-none font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Private Viewing
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section - Developer's Vision */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata"
            poster={exteriorTwilight}
            className="w-full h-full object-cover"
          >
            <source src={propertyTourVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-amber-900/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 py-20">

          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8 tracking-wide leading-tight">
            WHERE LUXURY <br />
            <span className="italic text-amber-400 font-light">Transcends Expectation</span>
          </h1>
          
          {/* Enhanced Subtext with Developer's Vision */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-3 sm:mb-4 leading-relaxed max-w-4xl mx-auto text-slate-200">
            Perched mid-hill facing lush green forest, where architectural mastery meets nature's tranquility
          </p>
          <p className="text-sm sm:text-base md:text-lg font-light mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto text-slate-300">
            Three seamless levels of designed living, thoughtfully carved into the sloping site, creating an exceptional rare modern living experience in Happy Valley's most coveted location
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-8 sm:mb-12 text-amber-300">
            A rare $2.225M investment opportunity in Happy Valley's most coveted location
          </p>
          
          <div className="flex justify-center items-center">
            <a href="#contact">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium tracking-wide shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0">
                Schedule Private Viewing
              </Button>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Architectural Mastery Section */}
      <section id="gallery" className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 md:mb-8 tracking-wide">
              ARCHITECTURAL <span className="italic text-amber-400">MASTERY</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8">
              Where Vision Becomes Reality
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-5xl mx-auto">
              The developer's artistic vision unfolds across three seamless levels, each thoughtfully carved into the sloping site to maximize both privacy and panoramic views. Outdoor living zones are strategically positioned in opposite cardinal directions from the core living spaces, providing conversational outdoor spaces that are useable at different times of day and throughout different seasons of the year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            <div className="space-y-6 sm:space-y-8">
              <div className="fade-in-up">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-4 tracking-wide">
                  360-Degree <span className="italic text-amber-400">Daylight Penetration</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  Floor-to-ceiling openings flood every space with natural light while maintaining privacy through the developer's cleverly designed openings. The collective of extensive views from interior spaces creates an ever-changing natural artwork that connects luxury living with forest tranquility.
                </p>
              </div>
              
              <div className="fade-in-up">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-4 tracking-wide">
                  Sloping Site <span className="italic text-amber-400">Integration</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  The building is thoughtfully carved into the hillside, elevating designed living across three seamless levels. This integration with the natural topography maximizes views while creating the privacy that makes this location so exceptional.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="image-container">
                <img 
                  src={exteriorTwilight} 
                  alt="Architectural Mastery" 
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl cropped-image"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl sm:rounded-3xl"></div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => {
                setCurrentPhoto(0); // Start at photo 1
                setIsGalleryOpen(true);
              }}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium tracking-wide shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              VIEW COMPLETE GALLERY
              <span className="ml-2 bg-white/20 px-2 py-1 rounded text-sm">{luxuryPhotos.length}</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Owner's Tour Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-4 sm:mb-6 md:mb-8 tracking-wide">
              OWNER'S <span className="italic text-amber-600">TOUR</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8">
              Experience the Developer's Vision Through Their Eyes
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-5xl mx-auto">
              Join the developer for an exclusive walkthrough highlighting the vision, craftsmanship, and attention to detail that makes this property extraordinary.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/JKAJe0WWma0"
                    title="Owner's Tour"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl sm:rounded-3xl pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                Owner's Tour
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-slate-800 mb-3 sm:mb-4 tracking-wide">
                  Developer's <span className="italic text-amber-600">Vision</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Hear directly from the developer about the artistic vision that shaped every detail, from the hand-selected cedar siding to the precision-engineered systems.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-slate-800 mb-3 sm:mb-4 tracking-wide">
                  Craftsmanship <span className="italic text-amber-600">Stories</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Discover the stories behind the world-renowned designer fixtures, custom millwork, and thoughtful integration of indoor-outdoor living spaces.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-slate-800 mb-3 sm:mb-4 tracking-wide">
                  Exclusive <span className="italic text-amber-600">Insights</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Gain exclusive insights into design decisions, material selections, and the passion that transformed architectural drawings into this luxury masterpiece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Enhanced Investment Excellence Section */}
      <section id="property" className="py-32 bg-gradient-to-br from-white via-slate-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl sm:text-6xl font-light text-slate-800 mb-8 tracking-wide">
              Investment <span className="italic text-amber-600">Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
              Where architectural vision meets strategic investment opportunity
            </p>
          </div>

          {/* Property Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center fade-in-up">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Home className="w-12 h-12" />
              </div>
              <div className="text-4xl font-light text-slate-800 mb-2">4,634</div>
              <div className="text-slate-600 font-medium tracking-wide uppercase text-sm">Square Feet</div>
            </div>
            
            <div className="text-center fade-in-up">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Bath className="w-12 h-12" />
              </div>
              <div className="text-4xl font-light text-slate-800 mb-2">3/4</div>
              <div className="text-slate-600 font-medium tracking-wide uppercase text-sm">Bed/Bath</div>
              <div className="text-xs text-slate-500 mt-1">Up to 5 beds capability</div>
            </div>
            
            <div className="text-center fade-in-up">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Maximize className="w-12 h-12" />
              </div>
              <div className="text-4xl font-light text-slate-800 mb-2">7,405</div>
              <div className="text-slate-600 font-medium tracking-wide uppercase text-sm">Lot Size (SF)</div>
            </div>
            
            <div className="text-center fade-in-up">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Calendar className="w-12 h-12" />
              </div>
              <div className="text-4xl font-light text-slate-800 mb-2">2025</div>
              <div className="text-slate-600 font-medium tracking-wide uppercase text-sm">Built</div>
            </div>
          </div>

          {/* Payment Calculator */}
          <PaymentCalculator />

          {/* Enhanced Artisan Craftsmanship Section */}
          <div className="mb-32">
            <div className="text-center mb-16 fade-in-up">
              <h3 className="text-4xl font-light text-slate-800 mb-6 tracking-wide">
                ARTISAN <span className="italic text-amber-600">CRAFTSMANSHIP</span>
              </h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
                Where Every Detail Whispers Luxury
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <div className="image-container">
                  <img 
                    src={exteriorFrontDay} 
                    alt="Hand-Selected Cedar Siding" 
                    className="w-full h-auto object-cover rounded-2xl shadow-2xl cropped-image"
                  />
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group fade-in-up">
                  <Star className="w-8 h-8 text-amber-500 mt-2 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="text-2xl font-medium text-slate-800 mb-3 tracking-wide">Hand-Selected Cedar Siding</h4>
                    <p className="text-slate-600 font-light leading-relaxed">Each cedar board has been personally selected for grain perfection and natural beauty, then expertly stained to enhance the wood's inherent character. This isn't mass-produced siding—it's a curated collection of nature's finest timber.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group fade-in-up">
                  <Star className="w-8 h-8 text-amber-500 mt-2 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="text-2xl font-medium text-slate-800 mb-3 tracking-wide">Hardie Architectural Clean Lines</h4>
                    <p className="text-slate-600 font-light leading-relaxed">Precision-engineered smooth panel system creating flawless geometric harmony that complements the organic cedar elements. These clean lines represent engineering excellence ensuring decades of maintenance-free beauty.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group fade-in-up">
                  <Star className="w-8 h-8 text-amber-500 mt-2 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="text-2xl font-medium text-slate-800 mb-3 tracking-wide">2.25" Solid White Oak Pivot Door</h4>
                    <p className="text-slate-600 font-light leading-relaxed">The oversized floor-to-ceiling entrance door weighs nearly 200 pounds and operates on precision German hardware, creating an entrance experience worthy of the luxury within.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interior Excellence */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group fade-in-up">
                  <Star className="w-8 h-8 text-amber-500 mt-2 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="text-2xl font-medium text-slate-800 mb-3 tracking-wide">Custom White Oak Cabinetry</h4>
                    <p className="text-slate-600 font-light leading-relaxed">Bespoke millwork showcasing the natural beauty of premium white oak. Grain patterns have been carefully matched and book-matched to create visual continuity throughout the home.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group fade-in-up">
                  <Star className="w-8 h-8 text-amber-500 mt-2 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="text-2xl font-medium text-slate-800 mb-3 tracking-wide">13-Foot Quartz Waterfall Island</h4>
                    <p className="text-slate-600 font-light leading-relaxed">Seamless waterfall edges showcase the full beauty of the quartz slab with continuous grain pattern flowing from horizontal to vertical surfaces without interruption.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group fade-in-up">
                  <Star className="w-8 h-8 text-amber-500 mt-2 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="text-2xl font-medium text-slate-800 mb-3 tracking-wide">Custom Oak Stair Slat Wall</h4>
                    <p className="text-slate-600 font-light leading-relaxed">Three-story architectural feature with integrated LED up-lighting that transforms the staircase into a sculptural element changing character throughout the day.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="image-container">
                  <img 
                    src={kitchenMain} 
                    alt="Custom White Oak Cabinetry" 
                    className="w-full h-auto object-cover rounded-2xl shadow-2xl cropped-image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* New Culinary Excellence Section */}
          <div className="mb-32 bg-gradient-to-br from-slate-50 to-white p-16 rounded-3xl shadow-2xl border border-slate-100">
            <div className="text-center mb-16 fade-in-up">
              <h3 className="text-4xl font-light text-slate-800 mb-6 tracking-wide">
                CULINARY <span className="italic text-amber-600">EXCELLENCE</span>
              </h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
                The Pinnacle of Culinary Craftsmanship
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {/* Professional Appliances */}
              <div className="text-center fade-in-up">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Utensils className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-medium text-slate-800 mb-4 tracking-wide">Dacor Professional Series</h4>
                <ul className="text-slate-600 font-light space-y-2 text-left">
                  <li>• 48" Graphite Range with precision control</li>
                  <li>• Smart Wall Oven & Microwave</li>
                  <li>• Column Refrigerator & Freezer</li>
                  <li>• Column Wine Cooler with dual zones</li>
                  <li>• Professional-grade cooking power</li>
                </ul>
              </div>

              {/* Beverage Excellence */}
              <div className="text-center fade-in-up">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Droplets className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-medium text-slate-800 mb-4 tracking-wide">Beverage & Entertainment</h4>
                <ul className="text-slate-600 font-light space-y-2 text-left">
                  <li>• Marvel Professional 2-zone wine cooler</li>
                  <li>• Fisher & Paykel double drawer dishwasher</li>
                  <li>• Custom panels for seamless integration</li>
                  <li>• Faber 48" ceiling flush glass hood</li>
                  <li>• Whisper-quiet operation</li>
                </ul>
              </div>

              {/* Custom Features */}
              <div className="text-center fade-in-up">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Flame className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-medium text-slate-800 mb-4 tracking-wide">Luxury Features</h4>
                <ul className="text-slate-600 font-light space-y-2 text-left">
                  <li>• See-through fireplace with TV mounting</li>
                  <li>• Large wet bar with wine storage</li>
                  <li>• Floor-to-ceiling windows</li>
                  <li>• ENERGY STAR qualified systems</li>
                  <li>• Premium materials throughout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Designer Appointments Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl sm:text-6xl font-light text-white mb-8 tracking-wide">
              DESIGNER <span className="italic text-amber-400">APPOINTMENTS</span>
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
              World-Renowned Artistry in Every Detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20 mb-20">
            {/* Luxury Plumbing Collection */}
            <div className="fade-in-up">
              <div className="text-center mb-12">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Droplets className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-light text-white mb-4 tracking-wide">
                  Luxury <span className="italic text-amber-400">Plumbing Collection</span>
                </h3>
                <p className="text-slate-300 font-light">Where Function Meets Fine Art</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl text-white font-medium mb-2">Axor</h4>
                  <p className="text-slate-300 font-light">German precision engineering meets sculptural beauty. Each fixture is precision-manufactured to tolerances typically reserved for luxury timepieces.</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl text-white font-medium mb-2">Graff</h4>
                  <p className="text-slate-300 font-light">Handcrafted luxury fixtures with architectural presence. The substantial weight and precise operation creates an immediate impression of quality.</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl text-white font-medium mb-2">Hansgrohe</h4>
                  <p className="text-slate-300 font-light">Swiss innovation in water delivery perfection. Every shower becomes a spa experience with precision engineering and water-saving technology.</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl text-white font-medium mb-2">Duravit</h4>
                  <p className="text-slate-300 font-light">European ceramic artistry in every detail. Ceramic harder than natural stone, ensuring decades of pristine beauty.</p>
                </div>
              </div>
            </div>

            {/* Illumination Artistry */}
            <div className="fade-in-up">
              <div className="text-center mb-12">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Lightbulb className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-light text-white mb-4 tracking-wide">
                  Illumination <span className="italic text-amber-400">Artistry</span>
                </h3>
                <p className="text-slate-300 font-light">Lighting as Architectural Sculpture</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl text-white font-medium mb-2">Tom Dixon</h4>
                  <p className="text-slate-300 font-light">British design innovation creating ambient masterpieces. Each fixture serves as both functional lighting and artistic statement.</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl text-white font-medium mb-2">Louis Poulsen</h4>
                  <p className="text-slate-300 font-light">Danish lighting heritage illuminating modern luxury. Nearly a century of innovation in creating perfect illumination.</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl text-white font-medium mb-2">Custom LED Linear Stair Lighting</h4>
                  <p className="text-slate-300 font-light">Integrated up-lighting transforms stairs into art. Custom-designed LED strips create dramatic architectural features.</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl text-white font-medium mb-2">Recessed LED Throughout</h4>
                  <p className="text-slate-300 font-light">Minimalist illumination enhancing architectural lines. Warm color temperature and precise beam angles create layers of light.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Invisible Luxury Section */}
      <section className="py-32 bg-gradient-to-br from-white via-slate-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl sm:text-6xl font-light text-slate-800 mb-8 tracking-wide">
              INVISIBLE <span className="italic text-amber-600">LUXURY</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
              Premium Systems You Feel But Never See
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Climate Perfection */}
            <div className="text-center fade-in-up">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Thermometer className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-medium text-slate-800 mb-4 tracking-wide">Climate Perfection</h3>
              <div className="space-y-4 text-left">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h4 className="text-lg font-medium text-slate-800 mb-2">Carrier HVAC & A/C</h4>
                  <p className="text-slate-600 font-light">Whisper-quiet climate control with energy efficiency. Advanced zoning capabilities ensure perfect comfort while minimizing operating costs.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h4 className="text-lg font-medium text-slate-800 mb-2">Ultra-Quiet Ventilation</h4>
                  <p className="text-slate-600 font-light">Silent air circulation maintaining spa-like freshness with advanced motor technology and precision-balanced fans.</p>
                </div>
              </div>
            </div>

            {/* Endless Comfort */}
            <div className="text-center fade-in-up">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Droplets className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-medium text-slate-800 mb-4 tracking-wide">Endless Comfort</h3>
              <div className="space-y-4 text-left">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h4 className="text-lg font-medium text-slate-800 mb-2">Tankless Water Heater</h4>
                  <p className="text-slate-600 font-light">Unlimited hot water with space-saving efficiency. Multiple showers, dishwasher, and washing machine can operate simultaneously.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h4 className="text-lg font-medium text-slate-800 mb-2">Energy Efficiency</h4>
                  <p className="text-slate-600 font-light">Premium systems deliver exceptional efficiency that reduces operating costs while increasing property value.</p>
                </div>
              </div>
            </div>

            {/* Mechanical Excellence */}
            <div className="text-center fade-in-up">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Wrench className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-medium text-slate-800 mb-4 tracking-wide">System Excellence</h3>
              <div className="space-y-4 text-left">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h4 className="text-lg font-medium text-slate-800 mb-2">Professional Installation</h4>
                  <p className="text-slate-600 font-light">Dedicated mechanical rooms with professional installation and organization reflecting attention to detail found throughout.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h4 className="text-lg font-medium text-slate-800 mb-2">Future-Ready Infrastructure</h4>
                  <p className="text-slate-600 font-light">Comprehensive electrical and plumbing infrastructure ensures easy adaptation to future technology and lifestyle changes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Outdoor Sanctuary Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl sm:text-6xl font-light text-white mb-8 tracking-wide">
              OUTDOOR <span className="italic text-amber-400">SANCTUARY</span>
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
              Seamless Indoor-Outdoor Living Across Seasons
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 fade-in-up">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-4">
                  <Mountain className="w-8 h-8 text-amber-400 mr-4" />
                  <h3 className="text-2xl font-light text-white tracking-wide">Covered Roof Deck</h3>
                </div>
                <p className="text-slate-300 font-light leading-relaxed">
                  Private sky lounge with unobstructed southern mountain views that stretch to the horizon. The substantial roof structure provides weather protection while the elevated position ensures privacy.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-4">
                  <TreePine className="w-8 h-8 text-amber-400 mr-4" />
                  <h3 className="text-2xl font-light text-white tracking-wide">8-Foot Stacking Sliders</h3>
                </div>
                <p className="text-slate-300 font-light leading-relaxed">
                  True indoor-outdoor dining with disappearing boundaries. When fully opened, the dining room extends seamlessly onto the patio, creating a single entertaining space.
                </p>
              </div>
            </div>
            
            <div className="relative fade-in-up">
              <div className="image-container">
                <img 
                  src={exteriorBackPatio} 
                  alt="Outdoor Sanctuary" 
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl cropped-image"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-3xl"></div>
            </div>
          </div>

          {/* Entertainment Ready Infrastructure */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center fade-in-up">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Utensils className="w-8 h-8" />
              </div>
              <h4 className="text-xl text-white font-medium mb-2">Outdoor Kitchen Ready</h4>
              <p className="text-slate-300 font-light text-sm">Pre-plumbed and wired for culinary adventures with gas lines, water supply, and 220V electrical service in place.</p>
            </div>
            
            <div className="text-center fade-in-up">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Flame className="w-8 h-8" />
              </div>
              <h4 className="text-xl text-white font-medium mb-2">Fire Pit Ready</h4>
              <p className="text-slate-300 font-light text-sm">Dedicated area with gas line infrastructure and proper clearances for year-round gathering space.</p>
            </div>
            
            <div className="text-center fade-in-up">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Droplets className="w-8 h-8" />
              </div>
              <h4 className="text-xl text-white font-medium mb-2">Hot & Cold Water</h4>
              <p className="text-slate-300 font-light text-sm">Strategically positioned hose bibs provide convenient access for maintenance and outdoor entertaining.</p>
            </div>
          </div>

          {/* Seasonal Living Zones */}
          <div className="text-center fade-in-up">
            <h3 className="text-3xl font-light text-white mb-8 tracking-wide">
              Seasonal <span className="italic text-amber-400">Living Zones</span>
            </h3>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-4xl mx-auto mb-12">
              Strategically positioned spaces for different times of day and year, where dwellers may seek shelter from or open themselves up to the sun and rain, light and shade.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h4 className="text-xl text-white font-medium mb-3">Morning Eastern Exposure</h4>
                <p className="text-slate-300 font-light">Sunrise coffee sanctuary capturing gentle morning sun, providing warmth during cool mornings while offering protection from afternoon heat.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h4 className="text-xl text-white font-medium mb-3">Evening Western Views</h4>
                <p className="text-slate-300 font-light">Sunset cocktail retreat taking advantage of dramatic sunset views and evening breezes, ideal for evening entertaining and relaxation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Practical Perfection Section */}
      <section className="py-32 bg-gradient-to-br from-white via-slate-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl sm:text-6xl font-light text-slate-800 mb-8 tracking-wide">
              PRACTICAL <span className="italic text-amber-600">PERFECTION</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
              Where Utility Meets Luxury Standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in-up">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center mb-4">
                  <Car className="w-8 h-8 text-amber-600 mr-4" />
                  <h3 className="text-2xl font-medium text-slate-800">Automotive Sanctuary</h3>
                </div>
                <ul className="space-y-3 text-slate-600 font-light">
                  <li>• Oversized 3-car garage with generous clearances</li>
                  <li>• Large shop area for hobbies and projects</li>
                  <li>• Premium concrete floors and professional lighting</li>
                  <li>• Powder room for convenience</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center mb-4">
                  <Home className="w-8 h-8 text-amber-600 mr-4" />
                  <h3 className="text-2xl font-medium text-slate-800">Storage Excellence</h3>
                </div>
                <ul className="space-y-3 text-slate-600 font-light">
                  <li>• Multiple dedicated storage rooms</li>
                  <li>• Organized solutions for seasonal items</li>
                  <li>• Hidden from living spaces</li>
                  <li>• Easy access when needed</li>
                </ul>
              </div>
            </div>
            
            <div className="fade-in-up">
              <img 
                src={garageInterior} 
                alt="Practical Perfection" 
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Enhanced Investment Intelligence Section */}
      <section id="investment" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl sm:text-6xl font-light text-white mb-8 tracking-wide">
              Investment <span className="italic text-amber-400">Intelligence</span>
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
              Strategic positioning in Happy Valley's luxury market with exceptional appreciation potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-8">
              <CardContent className="p-0">
                <div className="text-4xl font-light text-amber-400 mb-2">$480</div>
                <div className="text-white font-medium mb-4">Per Square Foot</div>
                <p className="text-slate-300 font-light text-sm">Exceptional value for new construction luxury homes in Happy Valley market</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-8">
              <CardContent className="p-0">
                <div className="text-4xl font-light text-amber-400 mb-2">4-6%</div>
                <div className="text-white font-medium mb-4">Annual Appreciation</div>
                <p className="text-slate-300 font-light text-sm">Historical average for luxury properties in Happy Valley over past decade</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-8">
              <CardContent className="p-0">
                <div className="text-4xl font-light text-amber-400 mb-2">Top 10%</div>
                <div className="text-white font-medium mb-4">School Rankings</div>
                <p className="text-slate-300 font-light text-sm">Happy Valley schools rank in top 10% statewide, driving sustained demand</p>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Investment Highlights */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 fade-in-up">
            <h3 className="text-3xl font-light text-white mb-8 text-center tracking-wide">
              Investment <span className="italic text-amber-400">Highlights</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-white font-light">New construction with comprehensive warranty</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-white font-light">Elevated position with panoramic views</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-white font-light">Premium materials and energy efficiency</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-white font-light">Maintenance-free materials aging gracefully</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-white font-light">Proximity to top-rated schools</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-white font-light">Forest privacy with city convenience</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-white font-light">Future-ready infrastructure</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-white font-light">Professional-grade mechanical systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Happy Valley Location Section */}
      <section id="location" className="py-32 bg-gradient-to-br from-white via-slate-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl sm:text-6xl font-light text-slate-800 mb-8 tracking-wide">
              Happy Valley: <span className="italic text-amber-600">Premier Investment Market</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
              Strategic location combining excellent schools, natural beauty, and proximity to Portland's economic centers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 fade-in-up">
              <div>
                <h3 className="text-3xl font-light text-slate-800 mb-4 tracking-wide">Lifestyle & Convenience</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-4">
                  Moments from New Seasons Market's curated selections and Clackamas Town Center's premier shopping. Immerse yourself in vibrant local culture with weekly farmers markets and discover culinary delights at artisan food cart pods.
                </p>
                <p className="text-slate-600 font-light leading-relaxed mb-4">
                  Happy Valley's award-winning school system ranks in the top 10% statewide, with Happy Valley Elementary earning the #1 position in the North Clackamas School District.
                </p>
                <div className="flex items-center text-amber-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-medium">20 minutes to Portland's central business district</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-light text-slate-800 mb-4 tracking-wide">Natural Asset Value</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  The property's forested setting represents a finite resource in an increasingly developed region. Mount Talbert Nature Park and the Clackamas River provide additional recreational amenities that enhance both lifestyle and property values.
                </p>
              </div>
            </div>
            
            <div className="fade-in-up">
              <img 
                src={neighborhoodAerial} 
                alt="Happy Valley Location" 
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Developer Appreciation */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-12 rounded-3xl shadow-2xl border border-slate-100 fade-in-up">
            <div className="text-center">
              <h3 className="text-3xl font-light text-slate-800 mb-6 tracking-wide">
                Honoring the <span className="italic text-amber-600">Developer's Vision</span>
              </h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
                This home represents more than construction—it's the realization of a developer's artistic vision where every detail has been carefully considered and lovingly crafted. From the hand-selection of cedar boards to the precision installation of designer fixtures, this residence stands as a testament to what's possible when uncompromising standards meet unlimited creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl sm:text-6xl font-light text-white mb-8 tracking-wide">
              Secure Your <span className="italic text-amber-400">Investment Opportunity</span>
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
              Properties of this caliber in Happy Valley's luxury market typically attract multiple qualified buyers. Schedule your private viewing today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="fade-in-up">
              <h3 className="text-3xl font-light text-white mb-8 tracking-wide">Investment Support</h3>
              <p className="text-slate-300 font-light leading-relaxed mb-8">
                Our team provides comprehensive support for international investors, including assistance with financing options, property management services, and ongoing market analysis.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-amber-400" />
                  <span className="text-white font-light">408-202-5342</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-amber-400" />
                  <span className="text-white font-light">info@theregencyviewestate.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-amber-400" />
                  <span className="text-white font-light">13191 SE REGENCY VIEW ST, Happy Valley, OR 97086</span>
                </div>
              </div>
            </div>

            <div className="fade-in-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-light text-white mb-6 text-center tracking-wide">
                  Schedule Your Private Viewing
                </h3>
                <p className="text-slate-300 font-light text-center mb-8">
                  Your private viewing will reveal details that photography cannot capture—the substantial feel of the solid oak door, the whisper-quiet operation of premium appliances, and the seamless integration of indoor and outdoor living spaces.
                </p>
                <ContactForm />
                <p className="text-xs text-slate-400 mt-4 text-center">
                  * Required fields. Your information will be kept confidential and used only to arrange your viewing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors duration-200 z-10"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={prevPhoto}
              className="absolute left-6 text-white hover:text-amber-400 transition-colors duration-200 z-10"
            >
              <ChevronLeft size={48} />
            </button>
            
            <button
              onClick={nextPhoto}
              className="absolute right-6 text-white hover:text-amber-400 transition-colors duration-200 z-10"
            >
              <ChevronRight size={48} />
            </button>

            <div className="max-w-6xl max-h-[90vh] mx-auto px-4">
              <div className="image-container">
                <img
                  src={luxuryPhotos[currentPhoto].src}
                  alt={luxuryPhotos[currentPhoto].title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg cropped-image"
                />
              </div>
              
              <div className="text-center mt-8 max-w-4xl mx-auto">
                <div className="flex justify-center items-center space-x-2">
                  {luxuryPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => selectPhoto(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentPhoto ? 'bg-amber-400 w-8' : 'bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="text-amber-400 font-light mt-6 text-lg">
                  {currentPhoto + 1} of {luxuryPhotos.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #d97706;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #b45309;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced hover effects */
        .group:hover .group-hover\\:scale-105 {
          transform: scale(1.05);
        }
        
        .group:hover .group-hover\\:text-amber-600 {
          color: #d97706;
        }
        
        /* Video overlay */
        video {
          filter: brightness(0.7);
        }
        
        /* Enhanced shadows */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Backdrop blur support */
        .backdrop-blur-xl {
          backdrop-filter: blur(24px);
        }
        
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }
        
        /* Enhanced gradients */
        .bg-gradient-to-br {
          background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
        }
        
        /* Image cropping to hide watermarks - Zoom and Crop approach */
        .cropped-image {
          transform: scale(1.15);
          object-fit: cover;
        }
        
        /* Container for cropped images to hide overflow */
        .image-container {
          overflow: hidden;
          border-radius: 0.5rem;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .text-4xl { font-size: 2.5rem; }
          .text-5xl { font-size: 3rem; }
          .text-6xl { font-size: 3.5rem; }
          .text-7xl { font-size: 4rem; }
          
          /* Ensure content doesn't overflow */
          .max-w-7xl { max-width: 100%; }
          .max-w-6xl { max-width: 100%; }
          .max-w-5xl { max-width: 100%; }
          .max-w-4xl { max-width: 100%; }
          
          /* Adjust padding for mobile */
          .px-4 { padding-left: 1rem; padding-right: 1rem; }
          .py-32 { padding-top: 4rem; padding-bottom: 4rem; }
          .py-24 { padding-top: 3rem; padding-bottom: 3rem; }
          .py-16 { padding-top: 2rem; padding-bottom: 2rem; }
          
          /* Fix grid layouts on mobile */
          .grid { display: block; }
          .grid > * { margin-bottom: 2rem; }
          
          /* Ensure images don't overflow */
          img, video { max-width: 100%; height: auto; }
          
          /* Fix button sizing */
          .w-full { width: 100%; }
          
          /* Adjust spacing */
          .space-x-12 > * + * { margin-left: 0; margin-top: 1rem; }
          .gap-16 { gap: 2rem; }
          .gap-12 { gap: 1.5rem; }
          .gap-8 { gap: 1rem; }
          
          /* Fix text overflow */
          .tracking-wide { letter-spacing: 0.025em; }
          .tracking-widest { letter-spacing: 0.1em; }
          
          /* Ensure proper line height */
          .leading-tight { line-height: 1.25; }
          .leading-relaxed { line-height: 1.625; }
        }
        
        @media (max-width: 480px) {
          .text-3xl { font-size: 1.875rem; }
          .text-4xl { font-size: 2.25rem; }
          .text-5xl { font-size: 2.5rem; }
          .text-6xl { font-size: 3rem; }
          .text-7xl { font-size: 3.5rem; }
          
          /* Extra small screen adjustments */
          .px-4 { padding-left: 0.75rem; padding-right: 0.75rem; }
          .py-20 { padding-top: 2rem; padding-bottom: 2rem; }
          
          /* Smaller buttons on very small screens */
          .px-8 { padding-left: 1rem; padding-right: 1rem; }
          .px-12 { padding-left: 1.5rem; padding-right: 1.5rem; }
        }
      `}</style>
    </div>
  )
}

export default App

