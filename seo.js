// SEO utility functions for The Regency View Estate

export const generateSitemap = () => {
  const baseUrl = 'https://theregencyviewestate.com'
  const pages = [
    { url: '', priority: 1.0, changefreq: 'weekly' },
    { url: '/property', priority: 0.9, changefreq: 'monthly' },
    { url: '/investment', priority: 0.8, changefreq: 'monthly' },
    { url: '/location', priority: 0.7, changefreq: 'monthly' },
    { url: '/contact', priority: 0.6, changefreq: 'monthly' },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return sitemap
}

export const generateRobotsTxt = () => {
  const baseUrl = 'https://theregencyviewestate.com'
  
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block access to admin areas (if any)
Disallow: /admin/
Disallow: /private/

# Allow all real estate related content
Allow: /property
Allow: /investment
Allow: /location
Allow: /contact

# Block common bot traps
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /*.php$
Disallow: /*.cgi$

# Allow search engines to access images and videos
Allow: /assets/
Allow: /*.jpg$
Allow: /*.png$
Allow: /*.webp$
Allow: /*.mp4$
Allow: /*.webm$`
}

export const generateMetaTags = (page = 'home') => {
  const baseUrl = 'https://theregencyviewestate.com'
  const siteName = 'The Regency View Estate'
  
  const pages = {
    home: {
      title: 'The Regency View Estate | Luxury Investment Property Happy Valley Oregon',
      description: 'Exceptional 4,100 sqft contemporary estate in Happy Valley, Oregon. New construction luxury home with panoramic views, premium finishes, and top-rated schools. Investment opportunity.',
      keywords: 'luxury homes Happy Valley, Oregon real estate investment, contemporary estate, new construction, Happy Valley Oregon, luxury real estate, investment property, Chinese investors',
      image: `${baseUrl}/assets/CeKZPk4dRzae.jpg`,
      url: baseUrl
    },
    property: {
      title: '13193 SE Regency Vw | $2.685M Luxury Home Happy Valley Oregon',
      description: 'Brand new 3-bed, 4-bath contemporary estate on 7,405 sqft lot. Custom oak cabinetry, Dacor appliances, panoramic mountain views. Top-rated Happy Valley schools.',
      keywords: '13193 SE Regency Vw, Happy Valley luxury home, contemporary architecture Oregon, new construction 2025',
      image: `${baseUrl}/assets/uzMXObUi7McZ.jpg`,
      url: `${baseUrl}/property`
    },
    investment: {
      title: 'Happy Valley Oregon Real Estate Investment | Market Analysis & Opportunities',
      description: 'Comprehensive investment analysis for Happy Valley luxury real estate. Market trends, school ratings, appreciation potential, and investment returns in Oregon\'s premier community.',
      keywords: 'Happy Valley investment, Oregon real estate market, luxury property investment, real estate ROI Oregon',
      image: `${baseUrl}/assets/CeKZPk4dRzae.jpg`,
      url: `${baseUrl}/investment`
    },
    location: {
      title: 'Happy Valley Oregon Schools & Community | Top-Rated Education & Amenities',
      description: 'Happy Valley ranks top 10% in Oregon schools. Explore community amenities, school ratings, and lifestyle benefits in this premier Portland metro location.',
      keywords: 'Happy Valley schools, Oregon education, Portland metro communities, Happy Valley amenities',
      image: `${baseUrl}/assets/CeKZPk4dRzae.jpg`,
      url: `${baseUrl}/location`
    },
    contact: {
      title: 'Contact The Regency View Estate | Schedule Private Viewing',
      description: 'Schedule your private viewing of The Regency View Estate. Professional support for international investors with financing and property management services.',
      keywords: 'schedule viewing Happy Valley, luxury real estate contact, international investor support',
      image: `${baseUrl}/assets/CeKZPk4dRzae.jpg`,
      url: `${baseUrl}/contact`
    }
  }
  
  return pages[page] || pages.home
}

export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  }
}

export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "The Regency View Estate",
    "image": "https://theregencyviewestate.com/assets/logo_primary.png",
    "url": "https://theregencyviewestate.com",
    "telephone": "Available upon request",
    "email": "info@theregencyviewestate.com",
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
      "latitude": 45.4234,
      "longitude": -122.5312
    },
    "openingHours": "Mo-Su 09:00-18:00",
    "priceRange": "$2,000,000-$3,000,000",
    "areaServed": [
      "Happy Valley, OR",
      "Portland Metro, OR",
      "Clackamas County, OR"
    ],
    "serviceType": "Luxury Real Estate Sales",
    "knowsAbout": [
      "Luxury Real Estate",
      "Investment Properties",
      "New Construction",
      "Happy Valley Oregon",
      "International Real Estate Investment"
    ]
  }
}

// Performance monitoring utilities
export const measureWebVitals = (metric) => {
  // Log Core Web Vitals
  console.log(metric)
  
  // Send to analytics if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    })
  }
}

// SEO-friendly URL generation
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

// Image optimization utilities
export const generateImageSrcSet = (imagePath, sizes = [400, 800, 1200, 1600]) => {
  const basePath = imagePath.replace(/\.[^/.]+$/, '') // Remove extension
  const extension = imagePath.split('.').pop()
  
  return sizes.map(size => `${basePath}-${size}w.${extension} ${size}w`).join(', ')
}

export const generateImageSizes = (breakpoints = {
  mobile: '100vw',
  tablet: '50vw', 
  desktop: '33vw'
}) => {
  return `(max-width: 768px) ${breakpoints.mobile}, (max-width: 1024px) ${breakpoints.tablet}, ${breakpoints.desktop}`
}

