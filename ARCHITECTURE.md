# Project Architecture

> **RULES: Read this entire file before making changes. Update when tech stack/architecture changes. Never delete sections, only update or expand. Append-only for Decisions Log.**

## Tech Stack

### Language & Runtime
- **Language**: JavaScript (ES2020)
- **Framework**: React 18.2
- **Package Manager**: npm
- **Build Tool**: Vite 4.4

### Database
- **Database**: N/A (Static website)
- **ORM**: N/A
- **Migrations**: N/A

### Infrastructure
- **Container**: Docker (for deployment)
- **CI/CD**: GitHub Actions
- **Hosting**: Vercel

### Key Dependencies
- React 18.2.0
- React Router DOM 7.9.4
- Framer Motion 12.23.24 (animations)
- Tailwind CSS 3.4.18 (styling)
- Lucide React 0.263.1 (icons)
- Vercel Analytics 1.5.0

### Development Tools
- **Linting**: ESLint 8.45.0
- **Formatting**: Prettier (via ESLint)
- **Testing**: npm run build (build validation)

---

## Project Structure

```
regency-updated/
├── src/
│   ├── components/      # Reusable React components
│   ├── versions/        # Different design versions
│   └── index.css        # Global styles
├── lib/
│   └── utils.js         # Utility functions
├── .odm/                # ODM v11 scripts
│   ├── start.sh
│   ├── end.sh
│   └── reports/
├── CHANGELOG.md         # Project changelog
├── ARCHITECTURE.md      # This file
├── README.md            # Project documentation
├── odm.yaml             # ODM configuration
├── package.json         # Dependencies
├── index.html           # Entry point
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

---

## Architecture Patterns

- **Pattern**: Component-based architecture (React)
- **Layers**: 
  - Presentation Layer: React components in src/components/
  - Routing Layer: React Router for navigation
  - Utility Layer: Helper functions in lib/
- **Error Handling**: React error boundaries, try/catch in async operations

---

## API Design

- **Base Path**: N/A (Static site, no backend API)
- **Endpoints**: N/A
- **External APIs**: Vercel Analytics for tracking

---

## Authentication & Security

- **Auth Type**: N/A (Public website)
- **Security**: 
  - No sensitive data storage
  - Pre-commit hooks for secret detection
  - Content Security Policy via hosting platform

---

## Database Schema

- **Tables**: N/A
- **Migrations**: N/A

---

## Testing Strategy

- **Run Tests**: `npm run build` (build validation)
- **Linting**: `npm run lint` (ESLint checks)
- **Coverage**: Build success = deployment ready

---

## Environment Configuration

- **Env Variables**: None required for static site
- **Config Files**: 
  - vite.config.js
  - tailwind.config.js
  - postcss.config.js

---

## Deployment

- **Build**: `npm run build` (creates dist/ directory)
- **Deploy**: Vercel automatic deployment from main branch
- **Preview**: `npm run preview` (local preview of production build)

---

## Key Decisions Log

### 2025-10-16 - ODM v11 Migration
- **What**: Migrated from ODM v9.1 to ODM v11.0
- **Why**: Simplify workflow, align with actual React/Vite stack, remove obsolete Python references

### 2025-10-16 - ARCHITECTURE.md Added
- **What**: Created ARCHITECTURE.md following ODM v11 template
- **Why**: Required by ODM v11 AI rules for session independence and architectural tracking

---

## Known Issues & Limitations

- **Blockers**: None
- **Tech Debt**: 
  - ESLint shows 273 warnings/errors (mostly unescaped entities and unused imports)
  - No unit tests currently implemented
- **Performance**: 
  - Build time: ~36 seconds
  - Bundle size: 492.76 kB (125.19 kB gzipped)
  - Some large image assets could be further optimized

---

**Last Updated**: 2025-10-16  
**Status**: Production  
**Phase**: Maintenance

