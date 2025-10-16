# R9 Session Development Plan

## Session Overview
**Date**: October 16, 2025
**Branch**: r9-redesign-v8-v9
**Goal**: Redesign /8 and /9 pages with distinct themes while preserving all content

## Task Breakdown

### Task 1: Redesign /8 Page (Rimrock Estate Theme)
**Theme**: Bold, commanding, powerful luxury
**Reference**: https://www.rimrockestate.com/home-page-start-v1
**Fonts**: 
- Primary: Moon (Bold/Heavy 700-900 for headlines)
- Secondary: NOAH minimalist (Regular 400 for body)

**Design Characteristics**:
- Full-screen hero carousel with rotating power statements
- All-caps, bold headlines
- High contrast black/white design
- Purple/lavender accent for CTAs (adapt to Regency gold)
- Center-aligned text layout
- Dramatic, commanding messaging
- Full-bleed photography

**Content to Include**:
- All current homepage content
- All photos and videos from current site
- Maintain property information and details

### Task 2: Redesign /9 Page (V0 Website Theme)
**Theme**: Elegant, refined, sophisticated luxury
**Reference**: https://v0-website-redesign-coral-theta.vercel.app/
**Fonts**:
- Primary: Moon (Medium 500-600 for headlines, elegant style)
- Secondary: NOAH minimalist (Light 300-400 for body)

**Design Characteristics**:
- Full-screen hero with elegant typography
- Asymmetric two-column grid layout
- Mixed case headlines with elegant serif styling
- Lime green accents (adapt to Regency gold)
- Light green/sage image borders
- Generous whitespace
- Refined, poetic messaging
- Alternating image/text sections

**Content to Include**:
- All current homepage content
- All photos and videos from current site
- Maintain property information and details
- Restructure into elegant two-column layouts

## Font Implementation

### Moon Font
- **Usage**: Primary headlines, property name, section headers
- **Weights for /8**: Bold (700), Extra Bold (800), Black (900)
- **Weights for /9**: Regular (400), Medium (500), Semi-Bold (600)
- **Source**: Need to acquire and add to project

### NOAH Minimalist Font
- **Usage**: Body text, descriptions, supporting text
- **Weights for /8**: Regular (400), Medium (500)
- **Weights for /9**: Light (300), Regular (400)
- **Source**: Need to acquire and add to project

## Technical Implementation

### File Structure
```
src/versions/v8/
  └── Home.jsx (redesign with Rimrock theme)

src/versions/v9/ (create new)
  └── Home.jsx (redesign with v0 theme)
  └── [component files as needed]
```

### App.jsx Updates
- Add V9 route: `<Route path="/9" element={<V9 />} />`

### Asset Management
- Use existing v6-photos for both versions
- Ensure all videos are included
- Maintain all current media assets

## Development Approach

Given the parallel execution preference and no conflicts between tasks:

### Parallel Execution Strategy
1. **Agent 1**: Redesign /8 page with Rimrock theme
2. **Agent 2**: Redesign /9 page with v0 theme

Both tasks can proceed simultaneously as they:
- Work on different files (v8/Home.jsx vs v9/Home.jsx)
- Use the same asset base (no conflicts)
- Have independent design requirements
- Don't share component dependencies

### Sequential Execution (if needed)
1. Complete /8 redesign first
2. Then complete /9 redesign
3. Update App.jsx with both routes
4. Test both versions

## Success Criteria

### For /8 Page
✅ Bold, commanding Rimrock aesthetic achieved
✅ Moon font (bold weights) implemented for headlines
✅ NOAH font implemented for body text
✅ All homepage content preserved
✅ All photos and videos included
✅ Responsive design maintained

### For /9 Page
✅ Elegant, refined v0 aesthetic achieved
✅ Moon font (medium weights) implemented for headlines
✅ NOAH font implemented for body text
✅ All homepage content preserved
✅ All photos and videos included
✅ Asymmetric grid layout implemented
✅ Responsive design maintained

## Next Steps
1. Acquire and install Moon and NOAH fonts
2. Execute parallel development (if no conflicts)
3. Test both versions locally
4. Deploy to production
5. Update CHANGELOG.md

