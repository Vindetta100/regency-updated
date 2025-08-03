# The Regency View Estate - Luxury Real Estate Website

A modern, responsive luxury real estate website built with React, Vite, and Tailwind CSS for showcasing The Regency View Estate property in Happy Valley, Oregon.

## 🏗️ Project Structure

```
regency-updated/
├── src/                          # Source files (Vite standard)
│   ├── components/              # React components
│   │   ├── ui/                 # UI components (Button, Card, Badge)
│   │   └── ContactForm.jsx     # Contact form component
│   ├── lib/                    # Utility libraries
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Application styles
│   ├── main.jsx               # Application entry point
│   ├── Analytics.jsx          # Analytics tracking
│   ├── ContactForm.jsx        # Contact form (duplicate - check)
│   ├── LazyImage.jsx          # Lazy loading image component
│   ├── LazyVideo.jsx          # Lazy loading video component
│   └── SEOHead.jsx            # SEO meta tags component
├── assets/                     # Static assets
│   ├── *.jpg, *.png           # Images
│   ├── *.mp4                  # Videos
│   └── mockups/               # Design references
├── dist/                      # Build output (generated)
├── public/                    # Public assets
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── postcss.config.js         # PostCSS configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone git@github.com:Vindetta100/regency-updated.git
cd regency-updated

# Install dependencies
npm install

# Install required dev dependencies (if missing)
npm install terser --save-dev
```

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 File Structure Requirements

⚠️ **IMPORTANT**: This project follows Vite's standard structure:

- **Source files MUST be in `src/` directory**
- **Entry point MUST be `src/main.jsx`**
- **Components MUST be in `src/components/`**
- **Assets referenced from `src/` use relative paths: `../assets/`**

### Common Issues & Solutions

#### Build Errors
1. **"Could not resolve import"** - Check file paths relative to `src/`
2. **"terser not found"** - Run `npm install terser --save-dev`
3. **Asset path errors** - Ensure assets use correct relative paths from `src/`

#### Project Structure Issues
- Never put React components in root directory
- Always use `src/` as the source root
- Import paths from components should be relative to their location

## 🌐 Deployment

### Vercel Deployment
```bash
# Login to Vercel (if not already)
vercel login

# Deploy to production
vercel --prod

# Link custom domain
vercel domains add theregencyviewestate.com
```

### Build Configuration
- **Framework**: Vite
- **Build Command**: `vite build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 🔧 Configuration Files

### package.json
Contains all dependencies and build scripts. Key dependencies:
- React 18
- Vite 4.5.14
- Tailwind CSS
- Lucide React (icons)

### vite.config.js
Vite configuration with React plugin and build optimizations.

### tailwind.config.js
Tailwind CSS configuration with custom colors and fonts.

## 📊 Features

- **Responsive Design**: Mobile-first approach
- **Lazy Loading**: Images and videos load on demand
- **SEO Optimized**: Meta tags, sitemap, robots.txt
- **Contact Form**: Integrated contact functionality
- **Analytics**: Built-in tracking capabilities
- **3D Tour Integration**: Property tour video
- **Performance Optimized**: Fast loading with Vite

## 🎨 Design System

- **Primary Font**: Playfair Display (headings)
- **Secondary Font**: Inter (body text)
- **Color Palette**: Luxury green theme (#2D5016)
- **Components**: Shadcn/ui based components

## 🔗 Links

- **Live Site**: https://www.theregencyviewestate.com/
- **Repository**: https://github.com/Vindetta100/regency-updated
- **Vercel Dashboard**: https://vercel.com/pham83-1750s-projects

## 📝 Development Notes

### Asset Management
- Large assets (images, videos) are in `/assets/`
- Import assets using relative paths from `src/`
- Vite automatically optimizes and versions assets during build

### Component Architecture
- UI components in `src/components/ui/`
- Feature components in `src/components/`
- Utility functions in `src/lib/`

### Build Process
1. Vite processes all files in `src/`
2. Assets are optimized and hashed
3. Output goes to `dist/` directory
4. Vercel deploys from `dist/`

## 🐛 Troubleshooting

### Common Build Failures
1. **Files in wrong location**: Move all React files to `src/`
2. **Missing dependencies**: Run `npm install`
3. **Asset path errors**: Use `../assets/` from `src/` files
4. **Terser missing**: Install with `npm install terser --save-dev`

### Deployment Issues
1. **Build fails on Vercel**: Check local build first with `npm run build`
2. **Assets not loading**: Verify asset paths are relative
3. **Domain not connecting**: Check Vercel domain configuration

## 📞 Support

For issues or questions:
- Check this README first
- Review Vite documentation
- Check Vercel deployment logs
- Ensure project structure matches requirements above

---

**Last Updated**: August 2025
**Version**: 1.0.0
**Maintainer**: Vindetta100
