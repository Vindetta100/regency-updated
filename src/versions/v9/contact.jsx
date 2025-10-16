import React from "react"

import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Textarea } from '../../../components/ui/textarea'
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl font-light mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Schedule Your Private Tour
          </h2>
          <p className="text-xl text-white/70">Experience this exceptional property in person</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                required
              />
            </div>
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
            />
          </div>
          <div>
            <Textarea
              placeholder="Tell us about your interest in this property..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-32"
              required
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-accent text-black hover:bg-accent/90 px-12 py-6 text-base tracking-wider"
            >
              REQUEST INFORMATION
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
