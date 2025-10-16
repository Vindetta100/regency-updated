import { Button } from '../../../components/ui/button'
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/luxury-modern-estate-exterior-with-mountain-views-.jpg" alt="The Regency View Estate" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light">Private Luxury Estate</p>
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 font-light tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          The Regency View Estate
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 font-light max-w-3xl mx-auto leading-relaxed">
          Contemporary Masterpiece
          <br />
          Where Architectural Excellence Meets Natural Beauty
        </p>
        <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base tracking-wider">
          EXPLORE THE ESTATE
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  )
}
