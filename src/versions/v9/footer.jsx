import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              The Regency View Estate
            </h3>
            <p className="text-muted-foreground">
              An architectural masterpiece offering unparalleled luxury and sophistication
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wider">CONTACT</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>inquiries@regencyviewestate.com</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wider">PROPERTY</h4>
            <p className="text-muted-foreground text-sm">
              MLS#: 123456789
              <br />
              123 Regency View Drive
              <br />
              Your City, State 12345
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} The Regency View Estate. All rights reserved.</p>
          <p className="mt-2">
            The estate owner reserves the right to make changes in accordance with the terms of the Offering Plan.
          </p>
        </div>
      </div>
    </footer>
  )
}
