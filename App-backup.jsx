import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import ContactForm from './components/ContactForm'
import { MapPin, Home, Bath, Maximize, Calendar, Star, Phone, Mail, ExternalLink, ChevronLeft, ChevronRight, X, Play, Pause, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

// Import assets
import heroImage from './assets/CeKZPk4dRzae.jpg'
import exteriorImage from './assets/uzMXObUi7McZ.jpg'
import logoImage from './assets/logo_primary.png'
import propertyTourVideo from './assets/regency_residence_3d_tour_ws.mp4'
import virtualTourVideo from './assets/regency_3d_tour.mp4'

// Import Redfin Photos
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

// Luxury Photo Gallery Data
const luxuryPhotos = [
  // Exterior Views
  {
    id: 1,
    src: exteriorTwilight,
    title: "Modern Twilight Residence",
    description: "This modern, multi-level residence features a striking facade of dark wood and dark grey paneling, accentuated by warm interior lighting that glows from its expansive windows. Subtle exterior accent lighting illuminates the garage doors and entrance, highlighting the contemporary architectural design.",
    category: "exterior"
  },
  {
    id: 2,
    src: kitchenMain,
    title: "Modern Minimalist Evening Glow",
    description: "This striking modern residence features a dark, minimalist facade with clean lines and large, strategically placed windows that glow warmly from within, suggesting a luxurious interior. The architectural design emphasizes horizontal elements and a strong connection to the surrounding landscape.",
    category: "exterior"
  },
  {
    id: 3,
    src: exteriorFrontDay,
    title: "Elegant Custom Walk-in Closet",
    description: "A meticulously organized walk-in closet features extensive custom wooden shelving and hanging rods, providing ample storage. The space is illuminated by recessed lighting and a central skylight, enhancing the warm tones of the wood and the plush carpeted floor.",
    category: "utility"
  },
  {
    id: 4,
    src: exteriorBackPatio,
    title: "Modern Landing with Hardwood and Carpet",
    description: "A spacious and brightly lit interior landing features a modern design with clean lines. Recessed lighting illuminates the pristine white walls and ceiling, complementing the warm tones of the hardwood flooring that transitions into a plush, light-colored carpet.",
    category: "living"
  },
  {
    id: 5,
    src: exteriorSideAngle,
    title: "Bright Modern Interior with Ensuite",
    description: "This bright, unfurnished interior space features light beige carpeting and pristine white walls, bathed in natural light from two large windows. A contemporary en-suite bathroom with a floating vanity is accessible through a doorway on the left.",
    category: "bedroom"
  },

  // Interior Spaces
  {
    id: 6,
    src: diningRoom,
    title: "Modern Kitchen with Integrated Design",
    description: "A sleek, modern kitchen featuring light wood cabinetry seamlessly integrated with high-end appliances, including a wine cooler. A dark, expansive island with a cooktop and minimalist wooden bar stools anchors the space, illuminated by recessed lighting and a contemporary linear pendant.",
    category: "kitchen"
  },
  {
    id: 7,
    src: livingRoomMain,
    title: "Modern Open-Concept Living with Wood Accents",
    description: "This modern interior features rich hardwood flooring and a striking open-tread staircase with a slatted wooden railing, illuminated by integrated lighting. The adjacent kitchen area, visible through a large window, showcases sleek dark countertops and warm wood cabinetry.",
    category: "living"
  },
  {
    id: 8,
    src: livingRoomFireplaceWetbar,
    title: "Modern Living Room with Fireplace and Wet Bar",
    description: "This modern living space features a sleek, built-in fireplace with a linear flame, set within a wood-paneled partition that seamlessly integrates with the room's aesthetic. Adjacent to this, a sophisticated wet bar boasts a wine cooler, open shelving for spirits, and a textured black backsplash.",
    category: "living"
  },
  {
    id: 9,
    src: masterBedroom,
    title: "Modern Wood and Stone Kitchen",
    description: "This sophisticated kitchen features extensive light wood cabinetry with sleek, dark hardware, complemented by dark, matte countertops. Integrated appliances and a large island with a cooktop contribute to a minimalist aesthetic, while recessed lighting and a linear pendant illuminate the space.",
    category: "kitchen"
  },
  {
    id: 10,
    src: bedroomSecondary,
    title: "Modern Minimalist Bathroom Retreat",
    description: "This modern bathroom showcases a pristine aesthetic with white elongated hexagonal tiles adorning the walls, providing a subtle yet sophisticated texture. A floating white vanity with integrated sink and natural wood drawers is paired with a circular mirror and a sleek wall-mounted black faucet.",
    category: "bathroom"
  },

  // Luxury Bathrooms
  {
    id: 11,
    src: bathroomMain,
    title: "Modern Exterior with Expansive Glass",
    description: "This image showcases the exterior of a contemporary building, featuring dark, vertical wooden siding and expansive floor-to-ceiling windows that reflect the evening sky. A sleek, dark-railed balcony with a composite deck extends from the structure, offering a view into the brightly lit interior.",
    category: "exterior"
  },
  {
    id: 12,
    src: bathroomLuxury,
    title: "Modern Balcony with Scenic View",
    description: "A modern outdoor balcony features a rich wooden ceiling with a sleek fan, complementing the vertical wood paneling on the adjacent wall. Four large, dark planters brimming with vibrant flowers and greenery line the edge of the light-colored wooden deck.",
    category: "exterior"
  },
  {
    id: 13,
    src: bathroomPowder,
    title: "Modern Wooden Staircase and Living",
    description: "A contemporary staircase crafted from light-toned wood, featuring vertical slats that allow light to filter through, leading down to a bright living area. The minimalist design is complemented by recessed lighting in the ceiling and along the base of the staircase.",
    category: "living"
  },
  {
    id: 14,
    src: laundryRoom,
    title: "Luxurious Modern Bathroom Oasis",
    description: "A sophisticated bathroom featuring a spacious glass-enclosed shower with dual rain showerheads and a sleek freestanding tub, all accented by elegant brass fixtures. The modern vanity with a floating wooden cabinet and integrated sink complements the rose-toned vertical tile work.",
    category: "bathroom"
  },
  {
    id: 15,
    src: mechanicalRoom,
    title: "Modern Bathroom with Gold Accents",
    description: "This modern bathroom features a sleek, white freestanding bathtub with elegant gold fixtures, set against walls adorned with textured, vertical pinkish-brown tiles. Natural light streams in through a large window, illuminating the minimalist design and highlighting the luxurious details.",
    category: "bathroom"
  },
  {
    id: 16,
    src: neighborhoodContext,
    title: "Modern Double Vanity Bathroom",
    description: "This sophisticated bathroom features a minimalist design with a long, white double vanity, sleek gray cabinetry, and polished chrome fixtures. A large mirror spans the length of the vanity, reflecting a bright window and a dark-tiled shower, enhancing the sense of space and light.",
    category: "bathroom"
  },
  {
    id: 17,
    src: officeDen,
    title: "Elegant Modern Bathroom Vanity",
    description: "This elegant bathroom features a sleek rectangular white sink complemented by a sophisticated wall-mounted brass faucet, set against a stylish blush pink fluted tile backsplash. The design is enhanced by a warm wooden shelf above and thoughtful counter accessories.",
    category: "bathroom"
  },

  // Utility & Storage
  {
    id: 18,
    src: closetMaster,
    title: "Modern Bedroom with Minimalist Design",
    description: "This contemporary bedroom features a minimalist wooden bed frame dressed in crisp white linens and a textured throw. A sleek wooden nightstand, adorned with a simple white vase holding vibrant red flowers, is illuminated by a modern white pendant light.",
    category: "bedroom"
  },
  {
    id: 19,
    src: garageInterior,
    title: "Panoramic View Living Space",
    description: "This bright, modern interior features expansive floor-to-ceiling windows that frame a picturesque vista of rolling hills and verdant trees, creating a seamless connection with nature. Light-toned hardwood floors and pristine white walls enhance the spacious feel.",
    category: "living"
  },
  {
    id: 20,
    src: floorPlanUpper,
    title: "Spacious Modern Garage",
    description: "This spacious garage features a clean, minimalist design with bright white walls and a durable concrete floor, illuminated by multiple overhead fluorescent lights. Two large sectional garage doors dominate one wall, hinting at ample vehicle storage.",
    category: "utility"
  },

  // Technical & Plans
  {
    id: 21,
    src: floorPlanMain,
    title: "Ground Floor Architectural Plan",
    description: "This image displays a detailed architectural floor plan of a ground level, showcasing the layout of a modern residence. It features distinct areas including a spacious great room, a functional kitchen, a dining area, a living room, and a bathroom, alongside an outdoor roof deck.",
    category: "plans"
  },
  {
    id: 22,
    src: elevationDrawings,
    title: "Ground Floor Architectural Plan",
    description: "This detailed architectural rendering presents the lower floor plan, meticulously outlining a spacious garage, a dedicated storage area, a convenient powder room, and an expansive crawlspace, all rendered with precise dimensions and structural annotations.",
    category: "plans"
  },
  {
    id: 23,
    src: floorPlanLower,
    title: "Lower Floor Plan Overview",
    description: "This detailed architectural rendering presents the lower floor plan, meticulously outlining a spacious garage, a dedicated storage area, a convenient powder room, and an expansive crawlspace, all rendered with precise dimensions and structural annotations.",
    category: "plans"
  },
  {
    id: 24,
    src: neighborhoodAerial,
    title: "Bright Modern Room with Scenic View",
    description: "This bright, unfurnished interior space features pristine white walls and a plush, light-toned carpet with a subtle patterned texture. Expansive windows offer a clear view of a residential street lined with modern homes and mature trees, allowing ample natural light to illuminate the room.",
    category: "living"
  },
  {
    id: 25,
    src: floorPlanMain,
    title: "Modern Home with Seamless Indoor-Outdoor Living",
    description: "The image captures the sleek, modern exterior of a residence, featuring dark wood paneling and expansive glass sliding doors that seamlessly connect the interior to a meticulously designed outdoor patio. The patio, paved with large grey tiles and bordered by decorative gravel.",
    category: "exterior"
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
            <Button className="hidden md:block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-none font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Private Viewing
            </Button>

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
              <Button 
                className="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-none font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Private Viewing
              </Button>
            </div>
          </div>
        )}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <Badge className="mb-8 bg-amber-600/80 text-white px-8 py-3 text-sm font-light tracking-[0.2em] backdrop-blur-sm border border-amber-500/30">
            AN EXCEPTIONAL OPPORTUNITY
          </Badge>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extralight mb-8 leading-[0.9] tracking-wide">
            WHERE LUXURY<br />
            <span className="font-light text-amber-400 italic font-serif">Meets Rarity</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-6 text-gray-100 font-light leading-relaxed max-w-4xl mx-auto">
            A distinguished $2.685M estate in Happy Valley's most coveted location
          </p>
          <p className="text-sm sm:text-base mb-12 text-gray-300/90 font-light max-w-2xl mx-auto leading-relaxed">
            Properties of this caliber rarely become available
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-amber-600/90 hover:bg-amber-700 text-white px-12 py-4 text-lg font-light tracking-wide border border-amber-500/30 shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm">
              Request Private Viewing
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 sm:px-12 py-4 text-base sm:text-lg font-medium tracking-wide rounded-none backdrop-blur-sm transition-all duration-500">
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

      {/* Premium Virtual Tour Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(15,23,42,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <Badge className="mb-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 text-lg font-light tracking-widest">
              EXCLUSIVE VIRTUAL EXPERIENCE
            </Badge>
            <h2 className="text-5xl md:text-7xl font-extralight text-slate-900 mb-8 tracking-wide">
              Immersive <span className="italic text-amber-600">3D Tour</span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Step inside The Regency View Estate from anywhere in the world
            </p>
          </div>

          {/* Premium Video Container */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black group">
              <video 
                controls
                className="w-full h-full object-cover"
                poster={heroImage}
                preload="metadata"
              >
                <source src={virtualTourVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Premium Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Luxury Frame Effect */}
              <div className="absolute inset-0 border-4 border-amber-500/20 rounded-2xl pointer-events-none"></div>
              <div className="absolute -inset-2 border border-amber-500/10 rounded-3xl pointer-events-none"></div>
            </div>

            {/* Video Description */}
            <div className="mt-12 text-center">
              <h3 className="text-3xl font-light text-slate-800 mb-6 tracking-wide">
                Professional 3D Architectural Tour
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-medium text-slate-800 mb-2">Exterior Showcase</h4>
                  <p className="text-slate-600 font-light">Architectural mastery and natural setting</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Maximize className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-medium text-slate-800 mb-2">Interior Spaces</h4>
                  <p className="text-slate-600 font-light">Premium finishes and open floor plans</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-medium text-slate-800 mb-2">Luxury Details</h4>
                  <p className="text-slate-600 font-light">Custom craftsmanship throughout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Poetry - Auto-Rotating Hero Gallery */}
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

          {/* Auto-Rotating Hero Gallery */}
          <div className="relative max-w-6xl mx-auto">
            <div className="aspect-[16/10] relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={luxuryPhotos[currentPhoto].src} 
                alt={luxuryPhotos[currentPhoto].title}
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevPhoto}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-amber-400 transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronLeft size={48} />
              </button>
              
              <button 
                onClick={nextPhoto}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-amber-400 transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronRight size={48} />
              </button>

              {/* Photo Information Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-light mb-3 tracking-wide">{luxuryPhotos[currentPhoto].title}</h3>
                <p className="text-lg text-gray-300 font-light leading-relaxed max-w-3xl">
                  {luxuryPhotos[currentPhoto].description}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {luxuryPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectPhoto(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentPhoto 
                      ? 'bg-amber-400 shadow-lg shadow-amber-400/50' 
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            {/* Gallery CTA */}
            <div className="text-center mt-12">
              <Button 
                onClick={() => setIsGalleryOpen(true)}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-4 text-lg font-light tracking-widest rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
              >
                VIEW COMPLETE GALLERY
              </Button>
            </div>
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
              Architectural <span className="italic text-amber-600">Mastery</span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed">
              Perched mid-hill facing lush green forest, The Regency View Estate offers exceptional rare modern living. 
              Thoughtfully carved into the sloping site, elevating designed living across three seamless levels.
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

          {/* Architectural Story */}
          <div className="mb-24 text-center max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-white p-16 rounded-3xl shadow-2xl border border-slate-100">
              <h3 className="text-4xl font-light text-slate-800 mb-12 tracking-wide">
                A Different Era of <span className="italic text-amber-600 font-serif">Dwelling</span>
              </h3>
              <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-xl text-slate-700 font-light leading-relaxed">
                  Perched mid-hill facing lush green forest, this residence offers an exceptional modern living experience 
                  emerging within Happy Valley's unique urban-forestry harmony.
                </p>
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  Thoughtfully carved into the sloping site, the design elevates living across three seamless levels. 
                  Extensive views from interior spaces maintain privacy through cleverly positioned openings, while covered 
                  roof deck and patios connect to interior spaces through floor-to-ceiling openings.
                </p>
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  These outdoor living zones, strategically positioned in opposite cardinal directions, create conversational 
                  spaces useable throughout different times of day and seasons. Here, dwellers may seek shelter from or 
                  embrace the elements—sun and rain, light and shade—in perfect harmony with nature.
                </p>
              </div>
            </div>
          </div>

          {/* Luxury Features Showcase */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <img 
                src={exteriorTwilight} 
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
                    <h4 className="text-xl font-medium text-slate-800 mb-2 tracking-wide">Hand-Selected Cedar Siding</h4>
                    <p className="text-slate-600 font-light leading-relaxed">Premium stained cedar with Hardie architectural clean lines and UV-protected clear cedar soffit</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <Star className="w-8 h-8 text-amber-500 mt-2 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="text-xl font-medium text-slate-800 mb-2 tracking-wide">Custom White Oak Throughout</h4>
                    <p className="text-slate-600 font-light leading-relaxed">2.25" thick solid white oak pivot door, custom cabinetry, and three-story stair slat wall with up-lit lighting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <Star className="w-8 h-8 text-amber-500 mt-2 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="text-xl font-medium text-slate-800 mb-2 tracking-wide">360-Degree Daylight Penetration</h4>
                    <p className="text-slate-600 font-light leading-relaxed">Stacking sliders with 8' openings for true indoor-outdoor living experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <Star className="w-8 h-8 text-amber-500 mt-2 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="text-xl font-medium text-slate-800 mb-2 tracking-wide">Professional Dacor Appliance Suite</h4>
                    <p className="text-slate-600 font-light leading-relaxed">48" graphite range, smart oven & microwave, column refrigerator and wine cooler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Appliances & Fixtures Showcase */}
          <div className="mt-32 bg-gradient-to-br from-slate-50 to-white p-16 rounded-3xl shadow-2xl border border-slate-100">
            <h3 className="text-4xl font-light text-slate-800 mb-12 text-center tracking-wide">
              Designer <span className="italic text-amber-600">Appointments</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-12">
              {/* Professional Appliances */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Star className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-medium text-slate-800 mb-4 tracking-wide">Professional Appliances</h4>
                <ul className="text-slate-600 font-light space-y-2 text-left">
                  <li>• Dacor Modern Series 48" graphite range</li>
                  <li>• Dacor smart wall oven & microwave</li>
                  <li>• Dacor column refrigerator & freezer</li>
                  <li>• Marvel Professional wine coolers</li>
                  <li>• Fisher & Paykel dishwasher</li>
                  <li>• Faber 48" ceiling flush hood</li>
                </ul>
              </div>

              {/* Designer Fixtures */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Star className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-medium text-slate-800 mb-4 tracking-wide">Designer Fixtures</h4>
                <ul className="text-slate-600 font-light space-y-2 text-left">
                  <li>• Axor premium plumbing</li>
                  <li>• Graff luxury faucets</li>
                  <li>• Hangrohe fixtures</li>
                  <li>• Duravit bathroom suites</li>
                  <li>• Tom Dixon lighting</li>
                  <li>• Louis Poulsen illumination</li>
                </ul>
              </div>

              {/* Custom Features */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Star className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-medium text-slate-800 mb-4 tracking-wide">Custom Features</h4>
                <ul className="text-slate-600 font-light space-y-2 text-left">
                  <li>• See-through fireplace with TV mounting</li>
                  <li>• Large wet bar with wine storage</li>
                  <li>• Oversized 3-car garage with shop</li>
                  <li>• Custom quartz countertops</li>
                  <li>• Covered roof deck with mountain views</li>
                  <li>• Outdoor kitchen & fire pit ready</li>
                </ul>
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
              Secure Your <span className="italic text-amber-400 font-serif">Investment Opportunity</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-2xl text-gray-200 font-light leading-relaxed">
                Properties of this caliber in Happy Valley's luxury market typically attract discerning buyers who recognize exceptional value.
              </p>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                Schedule your private viewing to experience this rare opportunity firsthand.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-light mb-8 tracking-wide">Exclusive Investment Support</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-12 text-lg">
                Our team provides comprehensive support for discerning investors, including assistance with financing options, 
                property management services, and ongoing market analysis for the Happy Valley luxury market.
              </p>
              
              <div className="space-y-8">
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

              <div className="mt-12 p-8 bg-gradient-to-br from-amber-600/20 to-amber-700/10 border border-amber-500/30 rounded-lg">
                <h4 className="text-xl font-light text-amber-300 mb-4 tracking-wide">Private Viewing Experience</h4>
                <p className="text-gray-300 font-light leading-relaxed">
                  Experience the property with a personalized tour highlighting the architectural details, premium materials, 
                  and investment potential that make this estate truly exceptional.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-12 border border-white/20">
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

