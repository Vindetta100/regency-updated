# Font Implementation Strategy - R9 Session

## Original Request
- **Primary Font**: Moon
- **Secondary Font**: NOAH minimalist

## Implementation Strategy

Since the specific "Moon" and "NOAH minimalist" fonts require commercial licensing or have unclear free usage terms, we'll use Google Fonts alternatives that match the design characteristics:

### Font Alternatives

#### For "Moon" Font (Primary - Headlines)
**Google Fonts Alternative: "Montserrat"**
- Clean, modern sans-serif
- Multiple weights available (100-900)
- Excellent for headlines and titles
- Free for commercial use
- Similar geometric, minimalist aesthetic

**Alternative Option: "Poppins"**
- Modern geometric sans-serif
- Wide range of weights
- Clean, professional appearance
- Excellent readability

#### For "NOAH Minimalist" Font (Secondary - Body)
**Google Fonts Alternative: "Inter"**
- Designed specifically for UI/screens
- Excellent readability
- Multiple weights (100-900)
- Clean, minimalist aesthetic
- Free for commercial use

**Alternative Option: "Work Sans"**
- Clean, minimalist sans-serif
- Great for body text
- Multiple weights available

## Font Usage Plan

### For /8 Page (Rimrock Theme - Bold & Commanding)
```css
/* Headlines */
font-family: 'Montserrat', sans-serif;
font-weight: 700-900; /* Bold to Black */
text-transform: uppercase;
letter-spacing: 0.05em;

/* Body Text */
font-family: 'Inter', sans-serif;
font-weight: 400-500; /* Regular to Medium */
```

### For /9 Page (V0 Theme - Elegant & Refined)
```css
/* Headlines */
font-family: 'Montserrat', sans-serif;
font-weight: 400-600; /* Regular to Semi-Bold */
/* OR use elegant serif for headlines */
font-family: 'Playfair Display', serif;
font-weight: 400-600;

/* Body Text */
font-family: 'Inter', sans-serif;
font-weight: 300-400; /* Light to Regular */
```

## Implementation in Tailwind

Add to `tailwind.config.js`:
```javascript
theme: {
  extend: {
    fontFamily: {
      'headline': ['Montserrat', 'sans-serif'],
      'body': ['Inter', 'sans-serif'],
      'elegant': ['Playfair Display', 'serif'],
    }
  }
}
```

## Google Fonts Import

Add to CSS or index.html:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Decision Rationale

1. **Legal Safety**: Google Fonts are 100% free for commercial use
2. **Performance**: Google Fonts CDN is fast and reliable
3. **Quality**: Professional-grade fonts with excellent rendering
4. **Flexibility**: Multiple weights available for design hierarchy
5. **Similar Aesthetic**: Matches the minimalist, modern look requested

## Next Steps

1. Implement Google Fonts in the project
2. Apply font styles to /8 page (bold, commanding)
3. Apply font styles to /9 page (elegant, refined)
4. Test typography hierarchy and readability

