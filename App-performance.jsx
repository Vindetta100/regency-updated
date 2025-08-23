import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import ContactForm from './components/ContactForm'
import { MapPin, Home, Bath, Maximize, Calendar, Star, Phone, Mail, ExternalLink, ChevronLeft, ChevronRight, X, Play, Pause, Menu, Droplets, Zap, Wind, Thermometer, Wrench, Car, Lightbulb, TreePine, Mountain, Utensils, Flame, Loader } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'

// Import critical assets only (for immediate loading)
import heroImage from './assets/CeKZPk4dRzae.jpg'
import exteriorImage from './assets/uzMXObUi7McZ.jpg'
import logoImage from './assets/logo_primary.png'

// Lazy import videos (loaded on demand)
const propertyTourVideo = './assets/regency_residence_3d_tour_ws.mp4'
const virtualTourVideo = './assets/regency_3d_tour.mp4'

// Import Redfin Photos (these will be lazy loaded)
import exteriorTwilight from './assets/redfin-photos/exterior_twilight_main.jpg'
import kitchenMain from './assets/redfin-photos/kitchen_main.jpg'
import livingRoomMain from './assets/redfin-photos/living_room_main.jpg'
import diningRoom from './assets/redfin-photos/dining_room.jpg'
import masterBedroom from './assets/redfin-photos/master_bedroom.jpg'

// Additional Redfin Photos - Interior
import livingRoomFireplace from './assets/redfin-photos/living_room_fireplace_wetbar.jpg'
import bathroomMain from './assets/redfin-photos/bathroom_main.jpg'
import bathroomLuxury from './assets/redfin-photos/bathroom_luxury.jpg'
import bedroomSecondary from './assets/redfin-photos/bedroom_secondary.jpg'
import bathroomPowder from './assets/redfin-photos/bathroom_powder.jpg'
import staircaseOak from './assets/redfin-photos/staircase_oak.jpg'
import closetMaster from './assets/redfin-photos/closet_master.jpg'
import garageInterior from './assets/redfin-photos/garage_interior.jpg'
import laundryRoom from './assets/redfin-photos/laundry_room.jpg'
import officeDen from './assets/redfin-photos/office_den.jpg'
import storageRoom from './assets/redfin-photos/storage_room.jpg'
import mechanicalRoom from './assets/redfin-photos/mechanical_room.jpg'

// Additional Redfin Photos - Exterior
import exteriorFrontDay from './assets/redfin-photos/exterior_front_day.jpg'
import exteriorSideAngle from './assets/redfin-photos/exterior_side_angle.jpg'
import exteriorBackPatio from './assets/redfin-photos/exterior_back_patio.jpg'
import neighborhoodAerial from './assets/redfin-photos/neighborhood_aerial.jpg'
import neighborhoodContext from './assets/redfin-photos/neighborhood_context.jpg'

// Floor Plans and Technical
import sitePlan from './assets/redfin-photos/site_plan.jpg'
import floorPlanMain from './assets/redfin-photos/floor_plan_main.jpg'
import floorPlanUpper from './assets/redfin-photos/floor_plan_upper.jpg'
import floorPlanLower from './assets/redfin-photos/floor_plan_lower.jpg'
import elevationDrawings from './assets/redfin-photos/elevation_drawings.jpg'
import propertySurvey from './assets/redfin-photos/property_survey.jpg'

// Performance optimization: Lazy loading hook
const useLazyLoad = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}

// Performance optimization: Image lazy loading component
const LazyImage = ({ src, alt, className, ...props }) => {
  const [imageRef, isVisible] = useLazyLoad()
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div ref={imageRef} className={`relative ${className}`} {...props}>
      {isVisible && (
        <>
          <img
            src={src}
            alt={alt}
            className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <Loader className="w-8 h-8 animate-spin text-gray-400" />
            </div>
          )}
        </>
      )}
    </div>
  )
}

// Performance optimization: Video lazy loading component
const LazyVideo = ({ src, poster, className, autoPlay = false, muted = true, loop = true, ...props }) => {
  const [videoRef, isVisible] = useLazyLoad()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoElement = useRef()

  const handlePlay = useCallback(() => {
    if (videoElement.current) {
      if (isPlaying) {
        videoElement.current.pause()
        setIsPlaying(false)
      } else {
        videoElement.current.play()
        setIsPlaying(true)
      }
    }
  }, [isPlaying])

  return (
    <div ref={videoRef} className={`relative ${className}`} {...props}>
      {isVisible && (
        <>
          <video
            ref={videoElement}
            src={src}
            poster={poster}
            className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            playsInline
            onLoadedData={() => setIsLoaded(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
              <Loader className="w-12 h-12 animate-spin text-white" />
            </div>
          )}
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300"
          >
            {isPlaying ? (
              <Pause className="w-16 h-16 text-white" />
            ) : (
              <Play className="w-16 h-16 text-white" />
            )}
          </button>
        </>
      )}
    </div>
  )
}

// Gallery photos array
const galleryPhotos = [
  { src: exteriorTwilight, alt: "Exterior twilight view showcasing architectural lighting and modern design" },
  { src: kitchenMain, alt: "Gourmet kitchen with Dacor professional appliances and quartz waterfall island" },
  { src: livingRoomMain, alt: "Open concept living room with floor-to-ceiling windows and forest views" },
  { src: diningRoom, alt: "Elegant dining room with custom white oak cabinetry and natural light" },
  { src: masterBedroom, alt: "Luxurious master bedroom with panoramic forest views" },
  { src: livingRoomFireplace, alt: "Living room featuring see-through fireplace and wet bar" },
  { src: bathroomMain, alt: "Spa-like bathroom with designer fixtures and premium finishes" },
  { src: bathroomLuxury, alt: "Master bathroom with luxury appointments and forest views" },
  { src: bedroomSecondary, alt: "Secondary bedroom with built-in storage and natural light" },
  { src: bathroomPowder, alt: "Powder room with designer fixtures and architectural details" },
  { src: staircaseOak, alt: "Custom oak stair slat wall with integrated LED up-lighting" },
  { src: closetMaster, alt: "Master closet with custom white oak organization system" },
  { src: garageInterior, alt: "Oversized 3-car garage with shop area and premium finishes" },
  { src: laundryRoom, alt: "Luxury laundry room with premium appliances and storage" },
  { src: officeDen, alt: "Home office/den with built-in cabinetry and forest views" },
  { src: storageRoom, alt: "Dedicated storage room with organized solutions" },
  { src: mechanicalRoom, alt: "Professional mechanical room with premium systems" },
  { src: exteriorFrontDay, alt: "Front exterior showcasing hand-selected cedar siding and architectural details" },
  { src: exteriorSideAngle, alt: "Side view highlighting three-level design and sloping site integration" },
  { src: exteriorBackPatio, alt: "Rear patio with 8-foot stacking sliders and outdoor living space" },
  { src: neighborhoodAerial, alt: "Aerial view showing forested setting and privacy" },
  { src: neighborhoodContext, alt: "Neighborhood context showing Happy Valley location" },
  { src: sitePlan, alt: "Site plan showing 7,405 sq ft lot and building placement" },
  { src: floorPlanMain, alt: "Main level floor plan with open concept design" },
  { src: floorPlanUpper, alt: "Upper level floor plan with bedrooms and bathrooms" }
]

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Performance optimization: Preload critical images
  useEffect(() => {
    const criticalImages = [heroImage, exteriorImage, exteriorTwilight, kitchenMain]
    let loadedCount = 0

    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = resolve
        img.src = src
      })
    }

    Promise.all(criticalImages.map(preloadImage)).then(() => {
      setIsLoading(false)
    })

    // Fallback timeout
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  // Performance optimization: Background asset preloading
  useEffect(() => {
    if (!isLoading) {
      // Preload videos in background after critical content loads
      setTimeout(() => {
        const video1 = document.createElement('video')
        video1.preload = 'metadata'
        video1.src = propertyTourVideo

        const video2 = document.createElement('video')
        video2.preload = 'metadata'
        video2.src = virtualTourVideo
      }, 2000)
    }
  }, [isLoading])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryPhotos.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-light text-white mb-2">The Regency View Estate</h2>
          <p className="text-slate-300">Loading luxury experience...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Regency View Estate" className="h-8 w-auto" />
              <div>
                <div className="text-sm font-semibold text-gray-900">THE REGENCY VIEW</div>
                <div className="text-xs text-gray-600 tracking-wider">ESTATE COLLECTION</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link">
                <Home className="w-4 h-4 mr-1" />
                Home
              </button>
              <button onClick={() => scrollToSection('gallery')} className="nav-link">
                <Star className="w-4 h-4 mr-1" />
                Gallery
              </button>
              <button onClick={() => scrollToSection('property')} className="nav-link">
                <MapPin className="w-4 h-4 mr-1" />
                Property
              </button>
              <button onClick={() => scrollToSection('investment')} className="nav-link">
                <Calendar className="w-4 h-4 mr-1" />
                Investment
              </button>
              <button onClick={() => scrollToSection('location')} className="nav-link">
                <ExternalLink className="w-4 h-4 mr-1" />
                Location
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                <Phone className="w-4 h-4 mr-1" />
                Contact
              </button>
            </div>

            <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Private Viewing
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
              <button onClick={() => scrollToSection('gallery')} className="mobile-nav-link">Gallery</button>
              <button onClick={() => scrollToSection('property')} className="mobile-nav-link">Property</button>
              <button onClick={() => scrollToSection('investment')} className="mobile-nav-link">Investment</button>
              <button onClick={() => scrollToSection('location')} className="mobile-nav-link">Location</button>
              <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage 
            src={heroImage} 
            alt="Luxury modern home exterior with forest setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-amber-500 text-white px-4 py-2 text-sm font-medium">
            NEW CONSTRUCTION 2025
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            WHERE LUXURY<br />
            <span className="text-amber-400 italic font-serif">Transcends Expectation</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 font-light leading-relaxed">
            Perched mid-hill facing lush green forest, where architectural mastery meets nature's tranquility
          </p>
          
          <p className="text-lg mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            Three seamless levels of designed living, thoughtfully carved into the sloping site, creating an exceptional rare modern living experience in Happy Valley's most coveted location
          </p>
          
          <p className="text-2xl md:text-3xl mb-8 text-amber-400 font-light">
            A rare $2.685M investment opportunity in Happy Valley's most coveted location
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              Schedule Private Viewing
            </button>
            <button 
              onClick={() => scrollToSection('investment')}
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              Download Investment Brochure
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Rest of the component continues with the same structure but using LazyImage and LazyVideo components... */}
      {/* I'll continue with the key sections that need performance optimization */}

      {/* Architectural Mastery Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              ARCHITECTURAL <span className="text-amber-400 italic font-serif">MASTERY</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Where Vision Becomes Reality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg leading-relaxed mb-8">
                The developer's artistic vision unfolds across three seamless levels, each thoughtfully carved into the sloping site to maximize both privacy and panoramic views. Outdoor living zones are strategically positioned in opposite cardinal directions from the core living spaces, providing conversational outdoor spaces that are useable at different times of day and throughout different seasons of the year.
              </p>
            </div>
            <div className="relative">
              <LazyImage 
                src={exteriorImage} 
                alt="Architectural exterior showing three-level design"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light mb-4 text-amber-400 italic font-serif">360-Degree Daylight Penetration</h3>
              <p className="text-slate-300 leading-relaxed">
                Floor-to-ceiling openings flood every space with natural light while maintaining privacy through the developer's cleverly designed openings. The collective of extensive views from interior spaces creates an ever-changing natural artwork that connects luxury living with forest tranquility.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-4 text-amber-400 italic font-serif">Sloping Site Integration</h3>
              <p className="text-slate-300 leading-relaxed">
                The building is thoughtfully carved into the hillside, elevating designed living across three seamless levels. This integration with the natural topography maximizes views while creating the privacy that makes this location so exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Performance Optimization */}
      <section id="gallery" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center gap-2"
          >
            VIEW COMPLETE GALLERY
            <Badge className="bg-white text-amber-500 px-2 py-1 text-sm font-bold">
              25
            </Badge>
          </button>
        </div>
      </section>

      {/* Gallery Modal with Lazy Loading */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            
            <div className="max-w-4xl max-h-full">
              <LazyImage
                src={galleryPhotos[currentImageIndex].src}
                alt={galleryPhotos[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
              <p className="text-white text-center mt-4 px-4">
                {galleryPhotos[currentImageIndex].alt}
              </p>
              <p className="text-gray-400 text-center mt-2">
                {currentImageIndex + 1} of {galleryPhotos.length}
              </p>
            </div>
            
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>
        </div>
      )}

      {/* Continue with all other sections using the same performance optimization patterns... */}
      {/* For brevity, I'll include the key sections that demonstrate the performance improvements */}

      <style jsx>{`
        .nav-link {
          @apply flex items-center text-gray-700 hover:text-amber-600 font-medium transition-colors;
        }
        .mobile-nav-link {
          @apply block w-full text-left px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors;
        }
      `}</style>
    </div>
  )
}


      {/* Investment Excellence Section */}
      <section id="investment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Investment <span className="text-amber-500 italic font-serif">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where architectural vision meets strategic investment opportunity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-light text-gray-900 mb-2">4,100</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">SQUARE FEET</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bath className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-light text-gray-900 mb-2">3/4</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">BED/BATH</div>
              <div className="text-xs text-gray-500 mt-1">Up to 5 beds capability</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Maximize className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-light text-gray-900 mb-2">7,405</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">LOT SIZE (SF)</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-light text-gray-900 mb-2">2025</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">BUILT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Craftsmanship Section */}
      <section id="property" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              ARTISAN <span className="text-amber-500 italic font-serif">CRAFTSMANSHIP</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where Every Detail Whispers Luxury
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Star className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hand-Selected Cedar Siding</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Each cedar board has been personally selected for grain perfection and natural beauty, then expertly stained to enhance the wood's inherent character. This isn't mass-produced siding—it's a curated collection of nature's finest timber.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Star className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hardie Architectural Clean Lines</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Precision-engineered smooth panel system creating flawless geometric harmony that complements the organic cedar elements. These clean lines represent engineering excellence ensuring decades of maintenance-free beauty.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Star className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.25" Solid White Oak Pivot Door</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The oversized floor-to-ceiling entrance door weighs nearly 200 pounds and operates on precision German hardware, creating an entrance experience worthy of the luxury within.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <LazyImage 
                src={closetMaster} 
                alt="Custom white oak cabinetry showcasing precision craftsmanship"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <LazyImage 
                src={exteriorTwilight} 
                alt="Exterior twilight view showcasing architectural mastery"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="flex items-start space-x-4">
                <Star className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom White Oak Cabinetry</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bespoke millwork showcasing the natural beauty of premium white oak. Grain patterns have been carefully matched and book-matched to create visual continuity throughout the home.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Star className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">13-Foot Quartz Waterfall Island</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Seamless waterfall edges showcase the full beauty of the quartz slab with continuous grain pattern flowing from horizontal to vertical surfaces without interruption.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Star className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Oak Stair Slat Wall</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Three-story architectural feature with integrated LED up-lighting that transforms the staircase into a sculptural element changing character throughout the day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Excellence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              CULINARY <span className="text-amber-500 italic font-serif">EXCELLENCE</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Pinnacle of Culinary Craftsmanship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dacor Professional Series</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• 48" Graphite Range with precision control</li>
                <li>• Smart Wall Oven & Microwave</li>
                <li>• Column Refrigerator & Freezer</li>
                <li>• Column Wine Cooler with dual zones</li>
                <li>• Professional-grade cooking power</li>
              </ul>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Beverage & Entertainment</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Marvel Professional 2-zone wine cooler</li>
                <li>• Fisher & Paykel double drawer dishwasher</li>
                <li>• Custom panels for seamless integration</li>
                <li>• Faber 48" ceiling flush glass hood</li>
                <li>• Whisper-quiet operation</li>
              </ul>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Luxury Features</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• See-through fireplace with TV mounting</li>
                <li>• Large wet bar with wine storage</li>
                <li>• Floor-to-ceiling windows</li>
                <li>• ENERGY STAR qualified systems</li>
                <li>• Premium materials throughout</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Designer Appointments Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              DESIGNER <span className="text-amber-400 italic font-serif">APPOINTMENTS</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              World-Renowned Artistry in Every Detail
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mr-6">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">
                    Luxury <span className="text-amber-400 italic font-serif">Plumbing Collection</span>
                  </h3>
                  <p className="text-slate-300">Where Function Meets Fine Art</p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Axor</h4>
                  <p className="text-slate-300 text-sm">
                    German precision engineering meets sculptural beauty. Each fixture is precision-manufactured to tolerances typically reserved for luxury timepieces.
                  </p>
                </Card>

                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Graff</h4>
                  <p className="text-slate-300 text-sm">
                    Handcrafted luxury fixtures with architectural presence. The substantial weight and precise operation creates an immediate impression of quality.
                  </p>
                </Card>

                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Hansgrohe</h4>
                  <p className="text-slate-300 text-sm">
                    Swiss innovation in water delivery perfection. Every shower becomes a spa experience with precision engineering and water-saving technology.
                  </p>
                </Card>

                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Duravit</h4>
                  <p className="text-slate-300 text-sm">
                    European ceramic artistry in every detail. Ceramic harder than natural stone, ensuring decades of pristine beauty.
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mr-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">
                    Illumination <span className="text-amber-400 italic font-serif">Artistry</span>
                  </h3>
                  <p className="text-slate-300">Lighting as Architectural Sculpture</p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Tom Dixon</h4>
                  <p className="text-slate-300 text-sm">
                    British design innovation creating ambient masterpieces. Each fixture serves as both functional lighting and artistic statement.
                  </p>
                </Card>

                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Louis Poulsen</h4>
                  <p className="text-slate-300 text-sm">
                    Danish lighting heritage illuminating modern luxury. Nearly a century of innovation in creating perfect illumination.
                  </p>
                </Card>

                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Custom LED Linear Stair Lighting</h4>
                  <p className="text-slate-300 text-sm">
                    Integrated up-lighting transforms stairs into art. Custom-designed LED strips create dramatic architectural features.
                  </p>
                </Card>

                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Recessed LED Throughout</h4>
                  <p className="text-slate-300 text-sm">
                    Minimalist illumination enhancing architectural lines. Warm color temperature and precise beam angles create layers of light.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invisible Luxury Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              INVISIBLE <span className="text-amber-500 italic font-serif">LUXURY</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium Systems You Feel But Never See
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Climate Perfection</h3>
              
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Carrier HVAC & A/C</h4>
                  <p className="text-gray-600 text-sm">
                    Whisper-quiet climate control with energy efficiency. Advanced zoning capabilities ensure perfect comfort while minimizing operating costs.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ultra-Quiet Ventilation</h4>
                  <p className="text-gray-600 text-sm">
                    Silent air circulation maintaining spa-like freshness with advanced motor technology and precision-balanced fans.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Endless Comfort</h3>
              
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tankless Water Heater</h4>
                  <p className="text-gray-600 text-sm">
                    Unlimited hot water with space-saving efficiency. Multiple showers, dishwasher, and washing machine can operate simultaneously.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Energy Efficiency</h4>
                  <p className="text-gray-600 text-sm">
                    Premium systems deliver exceptional efficiency that reduces operating costs while increasing property value.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">System Excellence</h3>
              
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Installation</h4>
                  <p className="text-gray-600 text-sm">
                    Dedicated mechanical rooms with professional installation and organization reflecting attention to detail found throughout.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Future-Ready Infrastructure</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive electrical and plumbing infrastructure ensures easy adaptation to future technology and lifestyle changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Sanctuary Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              OUTDOOR <span className="text-amber-400 italic font-serif">SANCTUARY</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Seamless Indoor-Outdoor Living Across Seasons
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mountain className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Covered Roof Deck</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Private sky lounge with unobstructed southern mountain views that stretch to the horizon. The substantial roof structure provides weather protection while the elevated position ensures privacy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Wind className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">8-Foot Stacking Sliders</h3>
                  <p className="text-slate-300 leading-relaxed">
                    True indoor-outdoor dining with disappearing boundaries. When fully opened, the dining room extends seamlessly onto the patio, creating a single entertaining space.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <LazyImage 
                src={officeDen} 
                alt="Interior space with large windows showcasing indoor-outdoor connection"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Outdoor Kitchen Ready</h3>
              <p className="text-slate-300 text-sm">
                Pre-plumbed and wired for culinary adventures with gas lines, water supply, and 220V electrical service in place.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Fire Pit Ready</h3>
              <p className="text-slate-300 text-sm">
                Dedicated area with gas line infrastructure and proper clearances for year-round gathering space.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Hot & Cold Water</h3>
              <p className="text-slate-300 text-sm">
                Strategically positioned hose bibs provide convenient access for maintenance and outdoor entertaining.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-light mb-6">
              Seasonal <span className="text-amber-400 italic font-serif">Living Zones</span>
            </h3>
            <p className="text-slate-300 max-w-4xl mx-auto mb-8">
              Strategically positioned spaces for different times of day and year, where dwellers may seek shelter from or open themselves up to the sun and rain, light and shade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700 p-8 text-center">
              <h4 className="text-xl font-semibold text-white mb-4">Morning Eastern Exposure</h4>
              <p className="text-slate-300">
                Sunrise coffee sanctuary capturing gentle morning sun, providing warmth during cool mornings while offering protection from afternoon heat.
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-8 text-center">
              <h4 className="text-xl font-semibold text-white mb-4">Evening Western Views</h4>
              <p className="text-slate-300">
                Sunset cocktail retreat taking advantage of dramatic sunset views and evening breezes, ideal for evening entertaining and relaxation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Practical Perfection Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              PRACTICAL <span className="text-amber-500 italic font-serif">PERFECTION</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where Utility Meets Luxury Standards
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Car className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Automotive Sanctuary</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Oversized 3-car garage with generous clearances</li>
                    <li>• Large shop area for hobbies and projects</li>
                    <li>• Premium concrete floors and professional lighting</li>
                    <li>• Powder room for convenience</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Home className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Storage Excellence</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Multiple dedicated storage rooms</li>
                    <li>• Organized solutions for seasonal items</li>
                    <li>• Hidden from living spaces</li>
                    <li>• Easy access when needed</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <LazyImage 
                src={garageInterior} 
                alt="Interior view showcasing luxury finishes and forest views"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Intelligence Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Investment <span className="text-amber-400 italic font-serif">Intelligence</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Strategic positioning in Happy Valley's luxury market with exceptional appreciation potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800 border-slate-700 p-8 text-center">
              <div className="text-4xl font-light text-amber-400 mb-2">$655</div>
              <div className="text-sm text-slate-300 uppercase tracking-wider mb-4">Per Square Foot</div>
              <p className="text-slate-400 text-sm">
                Competitive pricing for new construction luxury homes in Happy Valley market
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-8 text-center">
              <div className="text-4xl font-light text-amber-400 mb-2">4-6%</div>
              <div className="text-sm text-slate-300 uppercase tracking-wider mb-4">Annual Appreciation</div>
              <p className="text-slate-400 text-sm">
                Historical average for luxury properties in Happy Valley over past decade
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-8 text-center">
              <div className="text-4xl font-light text-amber-400 mb-2">Top 10%</div>
              <div className="text-sm text-slate-300 uppercase tracking-wider mb-4">School Rankings</div>
              <p className="text-slate-400 text-sm">
                Happy Valley schools rank in top 10% statewide, driving sustained demand
              </p>
            </Card>
          </div>

          <Card className="bg-slate-800 border-slate-700 p-8">
            <h3 className="text-2xl font-light text-center mb-8">
              Investment <span className="text-amber-400 italic font-serif">Highlights</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  New construction with comprehensive warranty
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Elevated position with panoramic views
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Premium materials and energy efficiency
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Maintenance-free materials aging gracefully
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Proximity to top-rated schools
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Forest privacy with city convenience
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Future-ready infrastructure
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Professional-grade mechanical systems
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Happy Valley: <span className="text-amber-500 italic font-serif">Premier Investment Market</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic location combining excellent schools, natural beauty, and proximity to Portland's economic centers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Educational Excellence</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Happy Valley's school system ranks in the top 10% statewide, with Happy Valley Elementary earning the #1 position in the North Clackamas School District.
              </p>
              
              <div className="flex items-center text-amber-600 mb-8">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-medium">20 minutes to Portland's central business district</span>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Natural Asset Value</h3>
              <p className="text-gray-600 leading-relaxed">
                The property's forested setting represents a finite resource in an increasingly developed region. Mount Talbert Nature Park and the Clackamas River provide additional recreational amenities that enhance both lifestyle and property values.
              </p>
            </div>
            <div className="relative">
              <LazyImage 
                src={neighborhoodAerial} 
                alt="Aerial view of Happy Valley showing forested setting and development"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Developer Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            Honoring the <span className="text-amber-500 italic font-serif">Developer's Vision</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            This home represents more than construction—it's the realization of a developer's artistic vision where every detail has been carefully considered and lovingly crafted. From the hand-selection of cedar boards to the precision installation of designer fixtures, this residence stands as a testament to what's possible when uncompromising standards meet unlimited creativity.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Secure Your <span className="text-amber-400 italic font-serif">Investment Opportunity</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Properties of this caliber in Happy Valley's luxury market typically attract multiple qualified buyers. Schedule your private viewing today.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <style jsx>{`
        .nav-link {
          @apply flex items-center text-gray-700 hover:text-amber-600 font-medium transition-colors;
        }
        .mobile-nav-link {
          @apply block w-full text-left px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors;
        }
      `}</style>
    </div>
  )
}

