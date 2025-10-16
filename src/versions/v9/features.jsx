import { Home, Maximize, Trees, Shield } from "lucide-react"

const features = [
  {
    icon,
    title: "6,500 SQ FT",
    description: "Multi-level contemporary trophy home",
  },
  {
    icon,
    title: "Expansive Grounds",
    description: "Meticulously landscaped private estate",
  },
  {
    icon,
    title: "Natural Setting",
    description: "Surrounded by mature trees and nature",
  },
  {
    icon,
    title: "Privacy & Security",
    description: "Gated entrance with advanced systems",
  },
]

export function Features() {
  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl font-light mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Where Poetic Design Meets Excellence
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            This architectural masterpiece represents a rare opportunity for discerning buyers seeking a legacy property
            that defines sophisticated living
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-accent">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
