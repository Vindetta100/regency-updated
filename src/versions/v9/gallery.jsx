export function Gallery() {
  const images = [
    { src: "/luxury-kitchen-with-marble-countertops-and-modern-.jpg", alt: "Gourmet Kitchen" },
    { src: "/master-bedroom-suite-with-panoramic-windows.jpg", alt: "Master Suite" },
    { src: "/modern-bathroom-with-freestanding-tub-and-natural-.jpg", alt: "Spa Bathroom" },
    { src: "/outdoor-patio-with-infinity-pool-and-mountain-view.jpg", alt: "Outdoor Living" },
    { src: "/home-office-with-built-in-shelving-and-large-windo.jpg", alt: "Private Office" },
    { src: "/wine-cellar-with-custom-storage-and-tasting-area.jpg", alt: "Wine Cellar" },
  ]

  return (
    <section className="py-24 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Visual Tour</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
            Experience The Estate
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-sm aspect-[4/3] cursor-pointer">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-6">
                <p className="text-white text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
