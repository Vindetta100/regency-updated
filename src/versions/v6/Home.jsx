import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Mail, Phone, MapPin, Home, Bed, Bath, Square, GripVertical } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const V6 = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // Import all optimized photos
  const [galleryPhotos, setGalleryPhotos] = useState([
    { id: '1', src: '../../../assets/v6-photos/photo-01.jpg', alt: 'Estate Photo 1' },
    { id: '2', src: '../../../assets/v6-photos/photo-02.jpg', alt: 'Estate Photo 2' },
    { id: '3', src: '../../../assets/v6-photos/photo-03.jpg', alt: 'Estate Photo 3' },
    { id: '4', src: '../../../assets/v6-photos/photo-04.jpg', alt: 'Estate Photo 4' },
    { id: '5', src: '../../../assets/v6-photos/photo-05.jpg', alt: 'Estate Photo 5' },
    { id: '6', src: '../../../assets/v6-photos/photo-06.jpg', alt: 'Estate Photo 6' },
    { id: '7', src: '../../../assets/v6-photos/photo-07.jpg', alt: 'Estate Photo 7' },
    { id: '8', src: '../../../assets/v6-photos/photo-08.jpg', alt: 'Estate Photo 8' },
    { id: '9', src: '../../../assets/v6-photos/photo-09.jpg', alt: 'Estate Photo 9' },
    { id: '10', src: '../../../assets/v6-photos/photo-10.jpg', alt: 'Estate Photo 10' },
    { id: '11', src: '../../../assets/v6-photos/photo-11.jpg', alt: 'Estate Photo 11' },
    { id: '12', src: '../../../assets/v6-photos/photo-12.jpg', alt: 'Estate Photo 12' },
    { id: '13', src: '../../../assets/v6-photos/photo-13.jpg', alt: 'Estate Photo 13' },
    { id: '14', src: '../../../assets/v6-photos/photo-14.jpg', alt: 'Estate Photo 14' },
    { id: '15', src: '../../../assets/v6-photos/photo-15.jpg', alt: 'Estate Photo 15' },
    { id: '16', src: '../../../assets/v6-photos/photo-16.jpg', alt: 'Estate Photo 16' },
    { id: '17', src: '../../../assets/v6-photos/photo-17.jpg', alt: 'Estate Photo 17' },
    { id: '18', src: '../../../assets/v6-photos/photo-18.jpg', alt: 'Estate Photo 18' },
    { id: '19', src: '../../../assets/v6-photos/photo-19.jpg', alt: 'Estate Photo 19' },
    { id: '20', src: '../../../assets/v6-photos/photo-20.jpg', alt: 'Estate Photo 20' },
    { id: '21', src: '../../../assets/v6-photos/photo-21.jpg', alt: 'Estate Photo 21' },
    { id: '22', src: '../../../assets/v6-photos/photo-22.jpg', alt: 'Estate Photo 22' },
    { id: '23', src: '../../../assets/v6-photos/photo-23.jpg', alt: 'Estate Photo 23' },
    { id: '24', src: '../../../assets/v6-photos/photo-24.jpg', alt: 'Estate Photo 24' },
    { id: '25', src: '../../../assets/v6-photos/photo-25.jpg', alt: 'Estate Photo 25' },
    { id: '26', src: '../../../assets/v6-photos/photo-26.jpg', alt: 'Estate Photo 26' },
    { id: '27', src: '../../../assets/v6-photos/photo-27.jpg', alt: 'Estate Photo 27' },
    { id: '28', src: '../../../assets/v6-photos/photo-28.jpg', alt: 'Estate Photo 28' },
    { id: '29', src: '../../../assets/v6-photos/photo-29.jpg', alt: 'Estate Photo 29' },
    { id: '30', src: '../../../assets/v6-photos/photo-30.jpg', alt: 'Estate Photo 30' },
    { id: '31', src: '../../../assets/v6-photos/photo-31.jpg', alt: 'Estate Photo 31' },
    { id: '32', src: '../../../assets/v6-photos/photo-32.jpg', alt: 'Estate Photo 32' },
    { id: '33', src: '../../../assets/v6-photos/photo-33.jpg', alt: 'Estate Photo 33' },
    { id: '34', src: '../../../assets/v6-photos/photo-34.jpg', alt: 'Estate Photo 34' },
    { id: '35', src: '../../../assets/v6-photos/photo-35.jpg', alt: 'Estate Photo 35' },
    { id: '36', src: '../../../assets/v6-photos/photo-36.jpg', alt: 'Estate Photo 36' },
    { id: '37', src: '../../../assets/v6-photos/photo-37.jpg', alt: 'Estate Photo 37' },
    { id: '38', src: '../../../assets/v6-photos/photo-38.jpg', alt: 'Estate Photo 38' },
    { id: '39', src: '../../../assets/v6-photos/photo-39.jpg', alt: 'Estate Photo 39' },
    { id: '40', src: '../../../assets/v6-photos/photo-40.jpg', alt: 'Estate Photo 40' },
    { id: '41', src: '../../../assets/v6-photos/photo-41.jpg', alt: 'Estate Photo 41' },
    { id: '42', src: '../../../assets/v6-photos/photo-42.jpg', alt: 'Estate Photo 42' },
    { id: '43', src: '../../../assets/v6-photos/photo-43.jpg', alt: 'Estate Photo 43' },
    { id: '44', src: '../../../assets/v6-photos/photo-44.jpg', alt: 'Estate Photo 44' },
    { id: '45', src: '../../../assets/v6-photos/photo-45.jpg', alt: 'Estate Photo 45' },
    { id: '46', src: '../../../assets/v6-photos/photo-46.jpg', alt: 'Estate Photo 46' },
    { id: '47', src: '../../../assets/v6-photos/photo-47.jpg', alt: 'Estate Photo 47' },
  ]);

  // Hero slides - using select photos for hero carousel
  const heroSlides = [
    {
      image: '../../../assets/v6-photos/photo-47.jpg', // Exterior main
      title: 'COMMAND RESPECT',
      subtitle: 'Where architectural excellence meets natural beauty'
    },
    {
      image: '../../../assets/v6-photos/photo-25.jpg', // Sunset/twilight
      title: 'BE LEGENDARY',
      subtitle: 'Contemporary masterpiece in Happy Valley, Oregon'
    },
    {
      image: '../../../assets/v6-photos/photo-26.jpg', // Twilight
      title: 'BE UNFORGETTABLE',
      subtitle: 'The address that defines distinction'
    },
    {
      image: '../../../assets/v6-photos/photo-27.jpg', // Sunset
      title: 'LEAVE YOUR MARK',
      subtitle: 'Generational wealth deserves generational beauty'
    },
    {
      image: '../../../assets/v6-photos/photo-21.jpg', // Interior
      title: 'OWN THE EXTRAORDINARY',
      subtitle: 'Private luxury estate • Happy Valley, Oregon'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Auto-advance hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextGalleryPhoto = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryPhotos.length);
  };

  const prevGalleryPhoto = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(galleryPhotos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setGalleryPhotos(items);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        .font-sans {
          font-family: 'Montserrat', sans-serif;
        }
        
        .text-warm-gold {
          color: #D4AF37;
        }
        
        .bg-warm-gold {
          background-color: #D4AF37;
        }
        
        .border-warm-gold {
          border-color: #D4AF37;
        }
        
        .hover\\:text-warm-gold:hover {
          color: #D4AF37;
        }
        
        .hover\\:bg-warm-gold:hover {
          background-color: #D4AF37;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-serif text-white tracking-wide">
              THE REGENCY VIEW ESTATE
            </h1>
            <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
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
                  The Estate
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
                  Inquire
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Carousel Section */}
      <section id="home" className="relative h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slide.image}')`
              }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white px-4 max-w-5xl">
                  <h2 className="text-6xl md:text-8xl font-serif mb-6 leading-tight font-bold">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-12 font-light">
                    {slide.subtitle}
                  </p>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300"
                  >
                    INQUIRE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Hero Navigation Arrows */}
        <button 
          onClick={prevHeroSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-warm-gold transition-colors z-10 bg-black bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full"
        >
          <ChevronLeft size={40} />
        </button>
        <button 
          onClick={nextHeroSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-warm-gold transition-colors z-10 bg-black bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full"
        >
          <ChevronRight size={40} />
        </button>

        {/* Hero Dots Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <button 
          onClick={() => scrollToSection('property')}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden md:block"
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* Property Overview Section */}
      <section id="property" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-4 text-warm-gold">
              PRIVATE LUXURY ESTATE
            </p>
            <h3 className="text-5xl md:text-7xl font-serif mb-6 font-bold">
              HAPPY VALLEY, OREGON
            </h3>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              Contemporary Masterpiece Perched Above The Willamette River
            </p>
          </div>

          {/* Main Property Image with Carousel */}
          <div className="relative mb-20">
            <div className="relative h-[600px] overflow-hidden">
              <img 
                src={galleryPhotos[currentGalleryIndex].src}
                alt={galleryPhotos[currentGalleryIndex].alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Gallery Navigation */}
            <button 
              onClick={prevGalleryPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-warm-gold transition-colors bg-black bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full"
            >
              <ChevronLeft size={40} />
            </button>
            <button 
              onClick={nextGalleryPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-warm-gold transition-colors bg-black bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full"
            >
              <ChevronRight size={40} />
            </button>

            {/* Gallery Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 overflow-x-auto max-w-full px-4">
              {galleryPhotos.slice(0, 10).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                    index === currentGalleryIndex ? 'bg-white w-6' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Property Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center p-8 border border-gray-200 hover:border-warm-gold transition-colors">
              <Square className="mx-auto mb-4 text-warm-gold" size={40} />
              <p className="text-4xl font-serif mb-2 font-bold">4,100</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">SQ FT</p>
            </div>
            <div className="text-center p-8 border border-gray-200 hover:border-warm-gold transition-colors">
              <Bed className="mx-auto mb-4 text-warm-gold" size={40} />
              <p className="text-4xl font-serif mb-2 font-bold">3-4</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">BEDROOMS</p>
            </div>
            <div className="text-center p-8 border border-gray-200 hover:border-warm-gold transition-colors">
              <Bath className="mx-auto mb-4 text-warm-gold" size={40} />
              <p className="text-4xl font-serif mb-2 font-bold">3-4</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">BATHROOMS</p>
            </div>
            <div className="text-center p-8 border border-gray-200 hover:border-warm-gold transition-colors">
              <Home className="mx-auto mb-4 text-warm-gold" size={40} />
              <p className="text-4xl font-serif mb-2 font-bold">2025</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">YEAR BUILT</p>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h4 className="text-3xl md:text-4xl font-serif mb-6 font-bold">4BR/4BA + Bonus Room</h4>
            <p className="text-lg text-gray-600 leading-relaxed">
              Clean lines, floor-to-ceiling windows, and seamless indoor-outdoor flow define this three-level retreat. 
              The great room features bold black finishes, natural stone fireplace, and sweeping balcony views. 
              A gourmet kitchen with waterfall-edge island opens to sunlit spaces, while the lower level includes 
              a hidden safe room for ultimate privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Once in a Lifetime Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest mb-4 text-warm-gold">
            ONCE-IN-A-LIFETIME
          </p>
          <h3 className="text-5xl md:text-7xl font-serif mb-8 font-bold">
            OPPORTUNITY
          </h3>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-light">
            Where poetic design meets Pacific Northwest beauty
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            This architectural masterpiece represents a rare fusion of modern luxury and Pacific Northwest tranquility. 
            With only one estate of this caliber available in Happy Valley, discerning buyers recognize this as more 
            than a home—it's a legacy property that will define sophisticated living for generations.
          </p>
          <div className="text-center mb-8">
            <p className="text-3xl md:text-4xl font-serif mb-2 font-bold">5,314 SQ FT | 1,099 SQ FT GARAGE</p>
            <p className="text-xl text-warm-gold uppercase tracking-wider mb-4">3-LEVEL CONTEMPORARY TROPHY HOME</p>
          </div>
        </div>
      </section>

      {/* Gallery Section with Drag & Drop */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-4 text-warm-gold">
              VISUAL TOUR
            </p>
            <h3 className="text-5xl md:text-7xl font-serif mb-6 font-bold">
              EXPERIENCE THE ESTATE
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Drag and drop to reorder photos
            </p>
          </div>

          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="gallery" direction="horizontal">
              {(provided) => (
                <div 
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {galleryPhotos.map((photo, index) => (
                    <Draggable key={photo.id} draggableId={photo.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`flex-shrink-0 relative group ${
                            snapshot.isDragging ? 'opacity-50' : ''
                          }`}
                          style={{
                            ...provided.draggableProps.style,
                            width: '400px',
                          }}
                        >
                          <div className="relative overflow-hidden h-80 cursor-move">
                            <img 
                              src={photo.src}
                              alt={photo.alt}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                              <GripVertical size={20} />
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-4 text-warm-gold">
              GET IN TOUCH
            </p>
            <h3 className="text-5xl md:text-7xl font-serif mb-6 font-bold">
              SCHEDULE PRIVATE SHOWING
            </h3>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:border-warm-gold transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:border-warm-gold transition-colors"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:border-warm-gold transition-colors"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:border-warm-gold transition-colors"
              />
              <textarea 
                rows="6" 
                placeholder="Message" 
                className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:border-warm-gold transition-colors resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300"
              >
                SEND INQUIRY
              </button>
            </form>

            <div className="mt-12 text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="text-warm-gold" size={20} />
                <a href="mailto:inquiries@theregencyviewestate.com" className="hover:text-warm-gold transition-colors">
                  inquiries@theregencyviewestate.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="text-warm-gold" size={20} />
                <a href="tel:503-000-0000" className="hover:text-warm-gold transition-colors">
                  503.000.0000
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="text-warm-gold" size={20} />
                <span>Happy Valley, Oregon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white border-opacity-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-400 mb-4">
            theregencyviewestate.com | inquiries@theregencyviewestate.com
          </p>
          <p className="text-xs text-gray-500">
            The complete offering terms may be requested by submitting the form above.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Equal Housing Opportunity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default V6;

