import React from 'react'
import { Hero } from './hero'
import { PropertyHighlight } from './property-highlight'
import { Features } from './features'
import { Gallery } from './gallery'
import { Pricing } from './pricing'
import { Contact } from './contact'
import { Footer } from './footer'

const V9 = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <PropertyHighlight />
      <Features />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

export default V9

