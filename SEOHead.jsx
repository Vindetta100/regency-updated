import React from 'react'

const SEOHead = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    "name": "The Regency View Estate",
    "description": "Exceptional 4,100 sqft contemporary estate in Happy Valley, Oregon. New construction luxury home with panoramic views, premium finishes, and top-rated schools.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13193 SE Regency Vw",
      "addressLocality": "Happy Valley",
      "addressRegion": "OR",
      "postalCode": "97086",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.4234",
      "longitude": "-122.5312"
    },
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": 4100,
      "unitCode": "SQF"
    },
    "numberOfRooms": 3,
    "numberOfBathroomsTotal": 4,
    "yearBuilt": 2025,
    "offers": {
      "@type": "Offer",
      "price": 2685000,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Custom White Oak Cabinetry",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "13-Foot Quartz Waterfall Island",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Floor-to-Ceiling Windows",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "ENERGY STAR Qualified",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Panoramic Mountain Views",
        "value": true
      }
    ],
    "image": [
      "https://theregencyviewestate.com/assets/CeKZPk4dRzae.jpg",
      "https://theregencyviewestate.com/assets/uzMXObUi7McZ.jpg"
    ]
  }

  const realEstateAgentData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "The Regency View Estate Team",
    "url": "https://theregencyviewestate.com",
    "areaServed": "Happy Valley, Oregon",
    "serviceType": "Luxury Real Estate Sales",
    "email": "info@theregencyviewestate.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Happy Valley",
      "addressRegion": "OR",
      "addressCountry": "US"
    }
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Regency View Estate",
    "url": "https://theregencyviewestate.com",
    "logo": "https://theregencyviewestate.com/assets/logo_primary.png",
    "description": "Luxury real estate investment opportunity in Happy Valley, Oregon",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Happy Valley",
      "addressRegion": "OR",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "Available upon request",
      "contactType": "sales",
      "email": "info@theregencyviewestate.com"
    }
  }

  return (
    <>
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="The Regency View Estate | Luxury Investment Property Happy Valley Oregon" />
      <meta property="og:description" content="Exceptional 4,100 sqft contemporary estate in Happy Valley, Oregon. New construction luxury home with panoramic views, premium finishes, and top-rated schools. Investment opportunity." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://theregencyviewestate.com" />
      <meta property="og:image" content="https://theregencyviewestate.com/assets/CeKZPk4dRzae.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="The Regency View Estate" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Regency View Estate | Luxury Investment Property Happy Valley Oregon" />
      <meta name="twitter:description" content="Exceptional 4,100 sqft contemporary estate in Happy Valley, Oregon. New construction luxury home with panoramic views, premium finishes, and top-rated schools." />
      <meta name="twitter:image" content="https://theregencyviewestate.com/assets/CeKZPk4dRzae.jpg" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="The Regency View Estate Team" />
      <meta name="geo.region" content="US-OR" />
      <meta name="geo.placename" content="Happy Valley, Oregon" />
      <meta name="geo.position" content="45.4234;-122.5312" />
      <meta name="ICBM" content="45.4234, -122.5312" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://theregencyviewestate.com" />

      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentData) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />

      {/* Preload Critical Resources */}
      <link rel="preload" href="/assets/CeKZPk4dRzae.jpg" as="image" />
      <link rel="preload" href="/assets/property_tour_complete.mp4" as="video" type="video/mp4" />
      
      {/* DNS Prefetch for External Resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </>
  )
}

export default SEOHead

