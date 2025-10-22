# Session 15: Multi-Agent Execution Plan
## Website Update with Parallel Team Workflow

**Date:** October 22, 2025  
**Strategy:** Workflow 2 (OpenRouter Multi-Agent) - Heavy parallel execution  
**Agents:** 6 Gemini 2.5 Flash agents working simultaneously  
**Estimated Time:** 15-20 minutes (vs 90+ minutes sequential)

---

## 🎯 APPROVED CHANGES FROM CLIENT

### Critical Data Updates (All Agents)
- ✅ Price: $2,685,000 → **$2,225,000**
- ✅ Square Footage: 4,100 sqft → **4,634 sqft**
- ✅ Price/SqFt: $655 → **$480**
- ✅ Bedrooms: 3 → **3 (capability for 5)**
- ✅ Bathrooms: 4 → **3.1**
- ✅ Days on Market: 100 → **19 days**
- ✅ Address: 13193 → **13191 SE REGENCY VIEW ST**
- ✅ Agent: Lisa/Veronica → **Tercek Real Estate** (NO agent name - protect commission)

### Features to Add
- ✅ Monthly payment calculator ($8,498/mo)
- ✅ Multiple CTA buttons with form integration (not calendar widget)
- ✅ Premium brand names (Duravit, Tom Dixon, Louis Poulsen, Hansgrohe, Axor, Graff, Carrier)
- ✅ Detailed specs sections (if not already present)
- ✅ Location benefits (New Seasons, Clackamas Town Center, farmers markets)
- ✅ Specific materials (cedar, 9' sliders, oak staircase, fire pit)
- ✅ Market context section (similar homes, market trends)

### Features to KEEP/IGNORE
- ❌ NO tour scheduling calendar widget (keep forms for lead capture)
- ❌ NO agent photo/name (just "Tercek Real Estate")
- ❌ NO status badges (our site already premium)
- ❌ NO twilight photos yet (will add later)
- ❌ NO 3D tour badge (already have it)

---

## 🏗️ TEAM STRUCTURE & BRANCH STRATEGY

### Git Branch Architecture
```
main (protected)
  ├── feature/agent-1-data-updates
  ├── feature/agent-2-payment-calculator
  ├── feature/agent-3-premium-brands
  ├── feature/agent-4-location-benefits
  ├── feature/agent-5-detailed-specs
  └── feature/agent-6-market-context
```

### Agent Assignments (Independent Tasks)

#### **Agent 1: Critical Data Updates** 🔴 HIGH PRIORITY
**Branch:** `feature/agent-1-data-updates`  
**Files to Update:**
- `src/App.jsx` (if has data)
- `src/versions/original/Home.jsx` (main homepage)
- `src/versions/v1/Home.jsx` (duplicate at /1)
- `Property Data: 13193 SE Regency Vw, Happy Valley, OR 97086.md`
- Any other files with property data

**Tasks:**
1. Find ALL instances of outdated data across codebase
2. Update price: $2,685,000 → $2,225,000
3. Update sqft: 4,100 → 4,634
4. Update price/sqft: $655 → $480
5. Update beds: 3 → "3 (capability for 5)"
6. Update baths: 4 → 3.1
7. Update address: 13193 → 13191 SE REGENCY VIEW ST
8. Update agent: Remove Lisa/Veronica names → "Tercek Real Estate"
9. Update days on market: 100 → 19

**Design Constraint:** Maintain existing premium aesthetic, only update data values

---

#### **Agent 2: Monthly Payment Calculator** 🟡 MEDIUM PRIORITY
**Branch:** `feature/agent-2-payment-calculator`  
**Files to Create/Update:**
- `src/components/PaymentCalculator.jsx` (new component)
- `src/versions/original/Home.jsx` (integrate calculator)
- `src/versions/v1/Home.jsx` (integrate calculator)

**Tasks:**
1. Create beautiful, premium payment calculator component
2. Show $8,498/mo as default for $2,225,000 price
3. Allow user to adjust down payment, interest rate, loan term
4. Real-time calculation updates
5. Elegant design matching site's luxury aesthetic
6. Place near price display in hero section
7. Mobile responsive

**Design Constraint:** Must be "panty dropper" quality - world-class UI/UX, emotional impact

---

#### **Agent 3: Premium Brand Integration** 🟡 MEDIUM PRIORITY
**Branch:** `feature/agent-3-premium-brands`  
**Files to Update:**
- `src/versions/original/Home.jsx` (features section)
- `src/versions/v1/Home.jsx` (features section)

**Tasks:**
1. Find existing features/amenities sections
2. Integrate premium brand names naturally:
   - Kitchen: Dacor appliances (already mentioned)
   - Bathroom: Duravit fixtures, Axor faucets, Graff fixtures, Hansgrohe
   - Lighting: Tom Dixon, Louis Poulsen
   - HVAC: Carrier systems
3. Don't just list brands - weave into descriptive copy
4. Example: "Spa-inspired bathrooms featuring Duravit fixtures, Axor faucets, and Hansgrohe rain showers"
5. Maintain luxury storytelling tone

**Design Constraint:** Brands should elevate the narrative, not feel like a spec sheet

---

#### **Agent 4: Location Benefits & Materials** 🟡 MEDIUM PRIORITY
**Branch:** `feature/agent-4-location-benefits`  
**Files to Update:**
- `src/versions/original/Home.jsx` (location/lifestyle section)
- `src/versions/v1/Home.jsx` (location/lifestyle section)

**Tasks:**
1. Add specific location benefits:
   - New Seasons Market (upscale grocery)
   - Clackamas Town Center (premier shopping)
   - Local farmers markets
   - Artisan food carts
   - Top-rated schools (if mentioned)
2. Add specific material details:
   - Hand-selected stained cedar exterior
   - 9-foot stacking sliders
   - 3-story white oak staircase with integrated lighting
   - Fire pit in outdoor space
   - Outdoor kitchen-ready patio
3. Find perfect placement in existing layout
4. Write in lifestyle-focused, aspirational tone

**Design Constraint:** Should paint a picture of the lifestyle, not just list amenities

---

#### **Agent 5: Detailed Specifications Section** 🟢 LOW PRIORITY
**Branch:** `feature/agent-5-detailed-specs`  
**Files to Update:**
- `src/versions/original/Home.jsx` (add/enhance specs section)
- `src/versions/v1/Home.jsx` (add/enhance specs section)

**Tasks:**
1. Check if detailed specs section exists
2. If not, create organized specifications section with categories:
   - **Interior Features:** Flooring, ceilings, windows, lighting
   - **Kitchen & Appliances:** All appliances, island details, cabinetry
   - **Bathrooms:** Fixtures, finishes, features
   - **Exterior Features:** Siding, roof, outdoor spaces, views
   - **Building Details:** Foundation, utilities, garage, lot info
   - **Heating & Cooling:** HVAC, water heater, energy efficiency
3. Design as elegant, scannable section (not boring table)
4. Use icons or visual hierarchy
5. Place toward bottom of page (after emotional storytelling)

**Design Constraint:** Should be comprehensive but beautiful - luxury real estate, not MLS listing

---

#### **Agent 6: Market Context & CTA Enhancement** 🟢 LOW PRIORITY
**Branch:** `feature/agent-6-market-context`  
**Files to Update:**
- `src/versions/original/Home.jsx` (add market section, enhance CTAs)
- `src/versions/v1/Home.jsx` (add market section, enhance CTAs)

**Tasks:**
1. Add market context section:
   - "Similar Properties in Happy Valley" (can be placeholder content)
   - "Market Trends" (general luxury market info)
   - Position as exclusive opportunity
2. Enhance CTA buttons throughout page:
   - "Schedule Private Tour" (links to form)
   - "Request Information" (links to form)
   - "Save This Property" (bookmark functionality)
   - "Share" (social sharing)
3. Ensure all CTAs lead to contact form (for lead capture)
4. Add multiple CTA placements (hero, mid-page, footer)

**Design Constraint:** CTAs should be prominent but elegant, not aggressive

---

## 🔧 TECHNICAL IMPLEMENTATION

### Phase 1: Setup (Manus - 2 min)
```bash
# Create all feature branches
git checkout -b feature/agent-1-data-updates
git checkout main
git checkout -b feature/agent-2-payment-calculator
git checkout main
git checkout -b feature/agent-3-premium-brands
git checkout main
git checkout -b feature/agent-4-location-benefits
git checkout main
git checkout -b feature/agent-5-detailed-specs
git checkout main
git checkout -b feature/agent-6-market-context
git checkout main
```

### Phase 2: Parallel Execution (Gemini Agents - 10-12 min)
```python
# team_orchestrator_session15.py
import os
import requests
import json
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

API_KEY = os.environ.get('OPENROUTER_API_KEY')
API_URL = 'https://openrouter.ai/api/v1/chat/completions'

def call_gemini_agent(task_id, branch_name, prompt):
    """Execute agent task with detailed prompt"""
    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://regency-view-estate.com',
        'X-Title': 'Regency Estate Update'
    }
    
    payload = {
        'model': 'google/gemini-2.5-flash',
        'messages': [
            {
                'role': 'system',
                'content': '''You are a world-class luxury real estate web designer and developer.
                
Your work must be:
- Emotionally captivating ("panty dropper" quality)
- Premium and sophisticated
- Perfectly placed within existing design
- Mobile responsive
- React 18.2 + Tailwind CSS + Framer Motion
- Maintain existing component structure

CRITICAL: Only output the complete, updated file content. No explanations, no markdown code blocks.'''
            },
            {
                'role': 'user',
                'content': prompt
            }
        ],
        'temperature': 0.7,
        'max_tokens': 8000
    }
    
    try:
        response = requests.post(API_URL, headers=headers, json=payload)
        response.raise_for_status()
        result = response.json()
        
        return {
            'task_id': task_id,
            'branch': branch_name,
            'success': True,
            'response': result['choices'][0]['message']['content']
        }
    except Exception as e:
        return {
            'task_id': task_id,
            'branch': branch_name,
            'success': False,
            'error': str(e)
        }

# Agent tasks with detailed prompts
tasks = [
    (1, 'feature/agent-1-data-updates', '''[DETAILED PROMPT FOR AGENT 1]'''),
    (2, 'feature/agent-2-payment-calculator', '''[DETAILED PROMPT FOR AGENT 2]'''),
    (3, 'feature/agent-3-premium-brands', '''[DETAILED PROMPT FOR AGENT 3]'''),
    (4, 'feature/agent-4-location-benefits', '''[DETAILED PROMPT FOR AGENT 4]'''),
    (5, 'feature/agent-5-detailed-specs', '''[DETAILED PROMPT FOR AGENT 5]'''),
    (6, 'feature/agent-6-market-context', '''[DETAILED PROMPT FOR AGENT 6]''')
]

# Execute all agents in parallel
start_time = time.time()
results = {}

with ThreadPoolExecutor(max_workers=6) as executor:
    future_to_task = {
        executor.submit(call_gemini_agent, task_id, branch, prompt): task_id 
        for task_id, branch, prompt in tasks
    }
    
    for future in as_completed(future_to_task):
        result = future.result()
        results[result['task_id']] = result
        
        if result['success']:
            print(f"✓ Agent {result['task_id']} ({result['branch']}) completed")
        else:
            print(f"✗ Agent {result['task_id']} failed: {result['error']}")

end_time = time.time()
print(f"\nTotal execution time: {end_time - start_time:.2f} seconds")

# Save results
with open('session15_results.json', 'w') as f:
    json.dump(results, f, indent=2)
```

### Phase 3: Integration (Manus - 5-8 min)
```bash
# For each successful agent:
# 1. Checkout branch
# 2. Apply changes from agent output
# 3. Test locally
# 4. Commit to branch

# Example for Agent 1:
git checkout feature/agent-1-data-updates
# Apply changes from session15_results.json
git add .
git commit -m "Agent 1: Update all property data to match Tercek listing"
```

### Phase 4: Review & Merge (Manus - 3-5 min)
```bash
# Test each branch individually
pnpm dev  # Test on localhost

# Merge branches one by one
git checkout main
git merge feature/agent-1-data-updates
git merge feature/agent-2-payment-calculator
git merge feature/agent-3-premium-brands
git merge feature/agent-4-location-benefits
git merge feature/agent-5-detailed-specs
git merge feature/agent-6-market-context

# Final build test
pnpm build

# Push to remote
git push origin main
```

---

## 📊 SUCCESS METRICS

### Performance Targets
- ✅ All 6 agents complete successfully
- ✅ Zero merge conflicts (independent files/sections)
- ✅ Build passes without errors
- ✅ Total time < 25 minutes
- ✅ Speedup vs sequential: ~4-5x

### Quality Targets
- ✅ All data accurately updated
- ✅ Premium aesthetic maintained
- ✅ Mobile responsive
- ✅ No broken layouts
- ✅ Forms capture leads (not external calendar)
- ✅ Agent name hidden (commission protection)

---

## 🚨 RISK MITIGATION

### Potential Conflicts
1. **Multiple agents editing same file sections**
   - **Solution:** Clear section assignments, non-overlapping areas
   
2. **Design inconsistencies between agents**
   - **Solution:** Detailed design system prompt for all agents
   
3. **Agent output includes markdown formatting**
   - **Solution:** Explicit instruction to output raw code only

### Rollback Plan
- Each agent on separate branch
- Can cherry-pick successful changes
- Main branch protected until all tested

---

## 📝 DETAILED AGENT PROMPTS

### Agent 1 Prompt (Data Updates)
```
TASK: Update all outdated property data in Regency View Estate website

FILES TO UPDATE:
1. src/versions/original/Home.jsx
2. src/versions/v1/Home.jsx
3. Property Data: 13193 SE Regency Vw, Happy Valley, OR 97086.md

CHANGES REQUIRED:
- Price: $2,685,000 → $2,225,000
- Square Footage: 4,100 sqft → 4,634 sqft
- Price per SqFt: $655 → $480
- Bedrooms: "3" → "3 bedrooms (capability for 5)"
- Bathrooms: "4 bathrooms" → "3.1 bathrooms"
- Address: "13193 SE Regency Vw" → "13191 SE REGENCY VIEW ST"
- Agent: Remove "Lisa Hildebrant" and "Veronica Park" → "Tercek Real Estate" only
- Days on Market: 100 → 19

CRITICAL RULES:
1. Find ALL instances of these values across all files
2. Update EVERY occurrence
3. Maintain existing formatting and styling
4. Do not change any design/layout
5. Keep premium tone in copy

OUTPUT: Complete updated file contents for each file (no markdown, no explanations)
```

### Agent 2 Prompt (Payment Calculator)
```
TASK: Create premium monthly payment calculator component for luxury real estate site

REQUIREMENTS:
1. Create new component: src/components/PaymentCalculator.jsx
2. Default values:
   - Home price: $2,225,000
   - Down payment: 20% ($445,000)
   - Interest rate: 7.0%
   - Loan term: 30 years
   - Monthly payment: $8,498
3. Interactive sliders for down payment %, interest rate, loan term
4. Real-time calculation updates
5. Beautiful, premium design matching luxury aesthetic
6. Tailwind CSS styling
7. Framer Motion animations (subtle, elegant)
8. Mobile responsive

DESIGN REQUIREMENTS:
- Must be "panty dropper" quality
- Emotionally captivating
- Clean, sophisticated UI
- Use luxury color palette (blacks, whites, golds)
- Smooth transitions
- Clear typography

INTEGRATION:
- Place near price in hero section
- Should feel like natural part of page
- Not a popup/modal - inline component

OUTPUT: Complete PaymentCalculator.jsx component code (no markdown, no explanations)
```

### Agent 3 Prompt (Premium Brands)
```
TASK: Integrate premium brand names into property features naturally

FILES TO UPDATE:
1. src/versions/original/Home.jsx
2. src/versions/v1/Home.jsx

BRANDS TO ADD:
- Kitchen: Dacor appliances (already present - keep)
- Bathroom: Duravit fixtures, Axor faucets, Graff fixtures, Hansgrohe rain showers
- Lighting: Tom Dixon pendant lights, Louis Poulsen fixtures
- HVAC: Carrier climate control systems

INTEGRATION STYLE:
❌ BAD: "Features: Duravit, Axor, Graff, Hansgrohe, Tom Dixon, Louis Poulsen, Carrier"
✅ GOOD: "Spa-inspired bathrooms showcase Duravit fixtures, Axor faucets, and Hansgrohe rain showers"

RULES:
1. Find existing features/amenities sections
2. Weave brands into descriptive, luxury copy
3. Maintain storytelling tone (not spec sheet)
4. Don't create new sections - enhance existing
5. Keep premium aesthetic
6. Mobile responsive

OUTPUT: Complete updated Home.jsx files (no markdown, no explanations)
```

### Agent 4 Prompt (Location & Materials)
```
TASK: Add location benefits and specific material details to property description

FILES TO UPDATE:
1. src/versions/original/Home.jsx
2. src/versions/v1/Home.jsx

LOCATION BENEFITS TO ADD:
- New Seasons Market (upscale organic grocery)
- Clackamas Town Center (premier shopping destination)
- Weekly farmers markets
- Artisan food cart pods
- Award-winning Happy Valley schools

MATERIAL DETAILS TO ADD:
- Hand-selected stained cedar exterior cladding
- 9-foot stacking glass sliders
- 3-story white oak staircase with integrated LED lighting
- Custom fire pit in outdoor living area
- Outdoor kitchen-ready covered patio

INTEGRATION:
1. Find location/lifestyle section (or create elegant one)
2. Find materials/features section (or enhance existing)
3. Write in aspirational, lifestyle-focused tone
4. Paint picture of living experience
5. Maintain luxury aesthetic

TONE EXAMPLES:
❌ "Near New Seasons and Clackamas Town Center"
✅ "Moments from New Seasons Market's curated selections and Clackamas Town Center's premier shopping"

OUTPUT: Complete updated Home.jsx files (no markdown, no explanations)
```

### Agent 5 Prompt (Detailed Specs)
```
TASK: Create/enhance detailed specifications section for luxury property

FILES TO UPDATE:
1. src/versions/original/Home.jsx
2. src/versions/v1/Home.jsx

SPECIFICATIONS TO ORGANIZE:

**Interior Features:**
- White oak hardwood flooring
- Floor-to-ceiling windows
- Vaulted ceilings
- Custom white oak cabinetry
- See-through gas fireplace

**Kitchen & Appliances:**
- 13-foot quartz waterfall island
- Dacor 48" professional gas range
- Dacor built-in refrigerator
- Dacor wine column
- Dacor double wall ovens

**Bathrooms:**
- Duravit fixtures
- Axor and Graff faucets
- Hansgrohe rain showers
- Soaking tub
- Double vanity
- Skylit dressing room

**Exterior Features:**
- Hand-selected stained cedar siding
- Covered rooftop deck
- Multiple patios
- Fire pit
- Outdoor kitchen-ready space
- Panoramic mountain views

**Building Details:**
- 4,634 square feet
- 3 stories
- 3.1 bathrooms
- 3 bedrooms (capability for 5)
- 3-car garage (oversized, EV-ready)
- Corner lot

**Systems:**
- Carrier HVAC
- Tankless water heater
- ENERGY STAR qualified

DESIGN REQUIREMENTS:
1. Check if specs section exists
2. If not, create elegant, organized section
3. Use visual hierarchy (not boring table)
4. Consider icons or elegant formatting
5. Place toward bottom (after emotional storytelling)
6. Must look luxury, not MLS listing
7. Mobile responsive

OUTPUT: Complete updated Home.jsx files (no markdown, no explanations)
```

### Agent 6 Prompt (Market Context & CTAs)
```
TASK: Add market context section and enhance call-to-action buttons

FILES TO UPDATE:
1. src/versions/original/Home.jsx
2. src/versions/v1/Home.jsx

MARKET CONTEXT SECTION:
1. "Similar Properties in Happy Valley" subsection
   - Can use placeholder content or general market info
   - Position this property as exclusive opportunity
   - Luxury tone
2. "Market Trends" subsection
   - General luxury real estate market context
   - Why now is the time
   - Investment perspective

CTA ENHANCEMENTS:
1. Add multiple prominent CTA buttons:
   - "Schedule Private Tour" (primary CTA)
   - "Request Information"
   - "Save This Property"
   - "Share"
2. All CTAs must link to contact FORM (not external calendar)
3. Place CTAs in:
   - Hero section
   - Mid-page (after features)
   - Footer/bottom
4. Elegant, premium button design
5. Not aggressive - sophisticated

DESIGN REQUIREMENTS:
- CTAs should be prominent but elegant
- Market section should be informative but not boring
- Maintain luxury aesthetic throughout
- Mobile responsive
- Smooth animations (Framer Motion)

OUTPUT: Complete updated Home.jsx files (no markdown, no explanations)
```

---

## ✅ FINAL CHECKLIST

### Before Execution
- [ ] All agent prompts finalized
- [ ] Branch strategy confirmed
- [ ] OpenRouter API key verified
- [ ] Current code backed up

### During Execution
- [ ] Monitor agent completion rates
- [ ] Save all outputs immediately
- [ ] Note any errors for retry

### After Execution
- [ ] Review each agent output for quality
- [ ] Test each branch individually
- [ ] Merge branches sequentially
- [ ] Final build test
- [ ] Visual QA on localhost
- [ ] Mobile responsive check
- [ ] Form functionality test
- [ ] Push to production

### Post-Deployment
- [ ] Update CHANGELOG.md
- [ ] Run end.sh script
- [ ] Create session report
- [ ] Notify client

---

**READY TO EXECUTE? Confirm to proceed with parallel agent deployment.**

