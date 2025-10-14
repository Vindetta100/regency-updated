# Regency View Estate - Knowledge Transfer Document

**Project:** The Regency View Estate Website  
**Repository:** https://github.com/Vindetta100/regency-updated  
**Live Site:** https://www.theregencyviewestate.com  
**Last Updated:** October 14, 2025  
**Document Version:** 1.1

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Technology Stack](#architecture--technology-stack)
3. [Site Structure & Routing](#site-structure--routing)
4. [Deployment Configuration](#deployment-configuration)
5. [Development Workflow](#development-workflow)
6. [Critical Files & Directories](#critical-files--directories)
7. [Common Tasks & Procedures](#common-tasks--procedures)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Important Safeguards](#important-safeguards)
10. [Contact & Resources](#contact--resources)

---

## Project Overview

The Regency View Estate is a luxury real estate website featuring **7 distinct versions**:

- **Original Site** (Base URL `/`) - Full-featured luxury estate website with property details, photo galleries, contact forms, and virtual tours
- **6 Themed Variations** (`/1` through `/6`):
  - `/1` - Dark Side of the Moon (minimalist)
  - `/2` - Lunar Dust (minimalist)
  - `/3` - Cosmic (minimalist)
  - `/4` - Eclipse (minimalist)
  - `/5` - Minimalist Moon
  - `/6` - **Contemporary Luxury** (black/white/gold aesthetic, full-screen hero, elegant typography)

### Key Features

- Single Page Application (SPA) with client-side routing
- Responsive design for desktop, tablet, and mobile
- Photo galleries with luxury property images
- Contact forms for inquiries
- Virtual 3D tour videos
- SEO optimized with meta tags and structured data

---

## Architecture & Technology Stack

### Frontend Framework
- **React 18.2.0** - UI library
- **React Router DOM 7.9.4** - Client-side routing
- **Vite 4.4.5** - Build tool and dev server

### Styling
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Framer Motion 12.23.24** - Animation library

### UI Components
- **Lucide React 0.263.1** - Icon library
- **Custom UI components** - Located in `/components/ui/`

### Build & Development
- **Node.js 22.13.0**
- **npm** - Package manager
- **ESLint** - Code linting

### Deployment
- **Vercel** - Hosting platform
- **GitHub** - Version control and CI/CD integration

---

## Site Structure & Routing

### URL Structure

```
https://www.theregencyviewestate.com/
├── /              → Original luxury estate site
├── /1             → Dark Side of the Moon theme
├── /2             → Lunar Dust theme
├── /3             → Cosmic theme
├── /4             → Eclipse theme
├── /5             → Minimalist Moon theme
└── /6             → Contemporary Luxury theme
```

### Routing Configuration

**File:** `App.jsx`

```javascript
import Original from './src/versions/original/Home'
import V1 from './src/versions/v1/Home'
import V2 from './src/versions/v2/Home'
import V3 from './src/versions/v3/Home'
import V4 from './src/versions/v4/Home'
import V5 from './src/versions/v5/Home'
import V6 from './src/versions/v6/Home'

<Routes>
  <Route path="/" element={<Original />} />
  <Route path="/1" element={<V1 />} />
  <Route path="/2" element={<V2 />} />
  <Route path="/3" element={<V3 />} />
  <Route path="/4" element={<V4 />} />
  <Route path="/5" element={<V5 />} />
  <Route path="/6" element={<V6 />} />
</Routes>
```

### Component Structure

```
src/
├── versions/
│   ├── original/
│   │   └── Home.jsx          # Original luxury site
│   ├── v1/
│   │   └── Home.jsx          # Dark Side of the Moon
│   ├── v2/
│   │   └── Home.jsx          # Lunar Dust
│   ├── v3/
│   │   └── Home.jsx          # Cosmic
│   ├── v4/
│   │   └── Home.jsx          # Eclipse
│   ├── v5/
│   │   └── Home.jsx          # Minimalist Moon
│   └── v6/
│       └── Home.jsx          # Contemporary Luxury
└── index.css                 # Global styles
```

---

## Deployment Configuration

### Vercel Configuration

**File:** `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Purpose:** This configuration is **CRITICAL** for SPA routing. It ensures all routes are redirected to `index.html` so React Router can handle client-side routing.

⚠️ **WARNING:** Without this file, routes `/1`, `/2`, `/3`, `/4`, `/5` will return 404 errors.

### Auto-Deployment

- **Trigger:** Automatic deployment on push to `main` branch
- **Platform:** Vercel
- **Build Command:** `npm run build`
- **Output Directory:** `dist/`
- **Install Command:** `npm install`

---

## Development Workflow

### Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vindetta100/regency-updated.git
   cd regency-updated
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   - Server runs on `http://localhost:5173`
   - Hot module replacement enabled

4. **Build for production:**
   ```bash
   npm run build
   ```
   - Output: `dist/` directory

5. **Preview production build:**
   ```bash
   npm run preview
   ```

### Branch Strategy

- **`main`** - Production branch (auto-deploys to Vercel)
- **Feature branches** - Use descriptive names (e.g., `fix-original-site`, `feat/new-theme`)
- **Always create a new branch for changes:**
  ```bash
  git checkout -b feature/your-feature-name
  ```

### Git Workflow

```bash
# Create new branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "Description of changes"

# Push branch
git push origin feature/your-feature

# Merge to main (after testing)
git checkout main
git merge feature/your-feature
git push origin main
```

---

## Critical Files & Directories

### Core Application Files

| File | Purpose | ⚠️ Critical |
|------|---------|------------|
| `App.jsx` | Main routing configuration | YES |
| `main.jsx` | React entry point | YES |
| `index.html` | HTML template | YES |
| `vercel.json` | Vercel SPA routing config | **CRITICAL** |
| `package.json` | Dependencies and scripts | YES |
| `vite.config.js` | Vite build configuration | YES |
| `tailwind.config.js` | Tailwind CSS configuration | YES |

### Version Components

| Directory | Contains | Notes |
|-----------|----------|-------|
| `src/versions/original/` | Original luxury site | Full-featured site |
| `src/versions/v1/` through `v5/` | Themed variations | Minimalist moon-themed designs |
| `src/versions/v6/` | Contemporary Luxury | Black/white/gold, full-screen hero, elegant serif typography |

### Assets

| Directory | Contains | Size |
|-----------|----------|------|
| `assets/` | Images, videos, logos | ~50 MB |
| `assets/redfin-photos/` | Property photos | ~30 MB |
| `components/` | Reusable React components | - |
| `components/ui/` | UI component library | - |

### Build Output

| Directory | Purpose | Git Tracked |
|-----------|---------|-------------|
| `dist/` | Production build output | YES |
| `node_modules/` | Dependencies | NO |

---

## Common Tasks & Procedures

### Adding a New Site Version

1. **Create new version directory:**
   ```bash
   mkdir -p src/versions/v7
   ```

2. **Create Home.jsx component:**
   ```javascript
   // src/versions/v7/Home.jsx
   import React from 'react';
   
   const V7 = () => {
     return (
       <div>
         {/* Your new theme */}
       </div>
     );
   };
   
   export default V7;
   ```

3. **Update App.jsx routing:**
   ```javascript
   import V7 from './src/versions/v7/Home'
   
   <Route path="/7" element={<V7 />} />
   ```

4. **Build and test:**
   ```bash
   npm run build
   npm run preview
   ```

5. **Commit and deploy:**
   ```bash
   git add .
   git commit -m "Add version 7 theme"
   git push origin main
   ```

### Updating the Original Site

1. **Navigate to original component:**
   ```bash
   cd src/versions/original
   ```

2. **Edit Home.jsx**
   - Update content, styles, or functionality
   - **Important:** Use relative paths `../../../` for imports

3. **Test locally:**
   ```bash
   npm run dev
   # Visit http://localhost:5173/
   ```

4. **Build and deploy:**
   ```bash
   npm run build
   git add .
   git commit -m "Update original site: [description]"
   git push origin main
   ```

### Updating Assets

1. **Add new images/videos to `assets/` directory**

2. **Import in component:**
   ```javascript
   import newImage from '../../../assets/new-image.jpg'
   ```

3. **Use in JSX:**
   ```jsx
   <img src={newImage} alt="Description" />
   ```

4. **Optimize large files before committing**

### Fixing Import Paths

When moving components, update import paths:

```javascript
// From root (App.jsx)
import Component from './src/versions/v1/Home'

// From version component (src/versions/v1/Home.jsx)
import asset from '../../../assets/image.jpg'
import component from '../../../components/ContactForm'
```

---

## Troubleshooting Guide

### Issue: Routes Return 404 Errors

**Symptoms:** `/1`, `/2`, `/3`, `/4`, `/5` show 404 error pages

**Cause:** Missing or incorrect `vercel.json` configuration

**Solution:**
1. Verify `vercel.json` exists in root directory
2. Ensure it contains the rewrite rule:
   ```json
   {
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```
3. Redeploy to Vercel

### Issue: Build Fails with "Cannot resolve" Error

**Symptoms:** Build error like `Could not resolve "./components/ui/card"`

**Cause:** Incorrect relative import paths

**Solution:**
1. Check the component's location in the file tree
2. Update import paths with correct `../` levels
3. From `src/versions/original/Home.jsx`, use `../../../components/`

### Issue: Original Site Missing After Update

**Symptoms:** Base URL shows a theme variation instead of original site

**Cause:** App.jsx routing pointing to wrong component

**Solution:**
1. Open `App.jsx`
2. Verify base route:
   ```javascript
   <Route path="/" element={<Original />} />
   ```
3. Ensure `Original` component is imported correctly

### Issue: Images Not Loading

**Symptoms:** Broken image icons or missing images

**Causes & Solutions:**

1. **Incorrect import path:**
   - Check relative path depth (`../../../assets/`)
   
2. **File doesn't exist:**
   - Verify file exists in `assets/` directory
   - Check filename spelling and case sensitivity

3. **Large file size:**
   - Optimize images before adding to project
   - Consider using WebP format

### Issue: Vercel Deployment Fails

**Symptoms:** Deployment fails on Vercel dashboard

**Common Causes:**

1. **Build errors:**
   - Run `npm run build` locally to identify issues
   - Check build logs on Vercel

2. **Missing dependencies:**
   - Ensure `package.json` is up to date
   - Run `npm install` to verify dependencies

3. **Node version mismatch:**
   - Verify Node.js version compatibility
   - Update Vercel project settings if needed

---

## Important Safeguards

### 🔒 Critical Files - DO NOT DELETE

1. **`vercel.json`** - Required for SPA routing
2. **`App.jsx`** - Main routing configuration
3. **`main.jsx`** - React entry point
4. **`package.json`** - Dependencies and build scripts
5. **`src/versions/original/Home.jsx`** - Original site component

### ⚠️ Before Making Changes

1. **Always create a new branch:**
   ```bash
   git checkout -b feature/your-change
   ```

2. **Test locally before deploying:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Verify all routes work:**
   - `/` - Original site
   - `/1` through `/6` - Theme variations

4. **Check build output:**
   - No errors in console
   - All assets load correctly
   - Navigation works properly

### 📋 Pre-Deployment Checklist

- [ ] Code builds successfully (`npm run build`)
- [ ] All routes tested locally
- [ ] Images and assets load correctly
- [ ] No console errors
- [ ] `vercel.json` present and correct
- [ ] Changes committed to git
- [ ] Branch merged to `main`

### 🚨 Emergency Rollback

If deployment breaks the site:

1. **Find last working commit:**
   ```bash
   git log --oneline
   ```

2. **Revert to previous commit:**
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

3. **Or reset to specific commit:**
   ```bash
   git reset --hard <commit-hash>
   git push origin main --force
   ```

---

## Contact & Resources

### Repository
- **GitHub:** https://github.com/Vindetta100/regency-updated
- **Live Site:** https://www.theregencyviewestate.com

### Documentation
- **React:** https://react.dev/
- **React Router:** https://reactrouter.com/
- **Vite:** https://vitejs.dev/
- **Tailwind CSS:** https://tailwindcss.com/
- **Vercel:** https://vercel.com/docs

### Key Commands Reference

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint

# Git
git status              # Check status
git branch              # List branches
git checkout -b <name>  # Create new branch
git add .               # Stage changes
git commit -m "msg"     # Commit changes
git push origin <branch> # Push to remote

# GitHub CLI (if needed)
gh repo clone Vindetta100/regency-updated
gh pr create            # Create pull request
```

---

## Revision History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | Oct 14, 2025 | Initial knowledge transfer document | Manus AI |
| 1.1 | Oct 14, 2025 | Added v6 Contemporary Luxury theme, ODM protocol setup note | Manus AI |

---

## Notes for Future Development

### Potential Improvements

1. **Mobile Optimization:**
   - Responsive navigation improvements
   - Image optimization for mobile networks
   - Performance enhancements

2. **SEO Enhancements:**
   - Meta tags for each variation
   - Structured data implementation
   - Sitemap generation

3. **Performance:**
   - Lazy loading for images
   - Code splitting for routes
   - Asset optimization

4. **Features:**
   - Theme switcher UI
   - Analytics integration
   - Contact form backend integration

### Known Limitations

- Theme variations are minimalist and may need content expansion
- Original site has large video files (~13MB each)
- No backend for contact form (currently frontend only)

---

## TODO: ODM Protocol Setup

**Status:** Pending setup in next session

### Action Required

In the next conversation, request the ODM protocol ZIP file from the user to set up the Object Data Model (ODM) integration.

**Steps:**
1. Ask user: "Please provide the ODM protocol ZIP file for setup"
2. Extract and configure ODM protocol
3. Integrate with existing project structure
4. Update this document with ODM configuration details

**Note:** This is a critical setup step for the project's data management layer.

---

**End of Knowledge Transfer Document**

For questions or issues, refer to the troubleshooting guide or create an issue in the GitHub repository.

