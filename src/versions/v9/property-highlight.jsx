export function PropertyHighlight() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="/assets/modern-luxury-home-interior-with-floor-to-ceiling-.jpg" alt="Interior view" className="w-full h-auto rounded-sm shadow-2xl" />
          </div>
          <div className="space-y-6">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Architectural Excellence</p>
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Rare Fusion of Modern Luxury
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Clean lines, floor-to-ceiling windows, and seamless indoor-outdoor flow define this extraordinary
                retreat. The great room features bold contemporary finishes, natural stone elements, and sweeping
                panoramic views.
              </p>
              <p>
                A gourmet kitchen with premium appliances and custom cabinetry opens to sunlit living spaces, while
                thoughtfully designed private quarters offer ultimate comfort and sophistication.
              </p>
            </div>
            <div className="pt-6">
              <div className="inline-block border-t-2 border-accent pt-4">
                <p className="text-3xl font-light">5BR/5BA + Bonus Room</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
