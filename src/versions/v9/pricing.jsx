import { Button } from '../../../components/ui/button'
import { Download } from "lucide-react"

export function Pricing() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Investment Opportunity</p>
        <h2
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Offered at $3,850,000
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          This is more than a home—it's a legacy property that will define sophisticated living for generations to come
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-black text-white hover:bg-black/90 px-8 py-6 text-base tracking-wider">
            VIEW FULL LISTING
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-black px-8 py-6 text-base tracking-wider bg-transparent"
          >
            <Download className="w-5 h-5 mr-2" />
            DOWNLOAD FLOOR PLAN
          </Button>
        </div>
      </div>
    </section>
  )
}
