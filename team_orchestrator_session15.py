#!/usr/bin/env python3
"""
Session 15: Multi-Agent Website Update Orchestrator
Updates Regency View Estate homepage with accurate data and premium features
"""

import os
import requests
import json
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

API_KEY = os.environ.get('OPENROUTER_API_KEY')
API_URL = 'https://openrouter.ai/api/v1/chat/completions'

def call_gemini_agent(task_id, branch_name, task_description, prompt):
    """Execute a single agent task"""
    print(f"🚀 Starting Agent {task_id}: {task_description}")
    
    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://theregencyviewestate.com',
        'X-Title': 'Regency Estate Update Session 15'
    }
    
    payload = {
        'model': 'google/gemini-2.5-flash',
        'messages': [
            {
                'role': 'system',
                'content': '''You are a world-class luxury real estate web designer and React developer.

Your work must be:
- Emotionally captivating ("panty dropper" quality - client's words)
- Premium and sophisticated aesthetic
- Perfectly integrated within existing design
- Mobile responsive
- React 18.2 + Tailwind CSS + Framer Motion
- Maintain existing component structure and styling patterns

CRITICAL OUTPUT FORMAT:
- Output ONLY valid JSX/JavaScript code
- NO markdown code blocks (no ```jsx or ```)
- NO explanations or commentary
- Complete, ready-to-use code only
- Maintain all imports and existing structure'''
            },
            {
                'role': 'user',
                'content': prompt
            }
        ],
        'temperature': 0.7,
        'max_tokens': 12000
    }
    
    try:
        start_time = time.time()
        response = requests.post(API_URL, headers=headers, json=payload, timeout=120)
        response.raise_for_status()
        result = response.json()
        elapsed = time.time() - start_time
        
        output = result['choices'][0]['message']['content']
        
        # Clean up any markdown code blocks if present
        if '```' in output:
            # Extract code from markdown blocks
            lines = output.split('\n')
            code_lines = []
            in_code_block = False
            for line in lines:
                if line.strip().startswith('```'):
                    in_code_block = not in_code_block
                    continue
                if in_code_block or not any(line.strip().startswith(x) for x in ['```', '#', 'Here', 'This']):
                    code_lines.append(line)
            output = '\n'.join(code_lines)
        
        print(f"✅ Agent {task_id} completed in {elapsed:.2f}s")
        
        return {
            'task_id': task_id,
            'branch': branch_name,
            'description': task_description,
            'success': True,
            'response': output,
            'elapsed_time': elapsed
        }
    except Exception as e:
        print(f"❌ Agent {task_id} failed: {str(e)}")
        return {
            'task_id': task_id,
            'branch': branch_name,
            'description': task_description,
            'success': False,
            'error': str(e),
            'elapsed_time': 0
        }

# Define all 6 agent tasks
tasks = [
    # AGENT 1: Critical Data Updates
    (1, 'feature/agent-1-data-updates', 'Update all property data',
    '''TASK: Find and update ALL outdated property data in the React component

CURRENT FILE STRUCTURE (src/versions/original/Home.jsx):
- Line 432: Price mention "$2.685M"
- Line 602: Square footage "4,100"
- Line 1262: Address "13193 SE Regency Vw"
- Various other locations may have these values

DATA UPDATES REQUIRED:
1. Price: "$2.685M" OR "$2,685,000" → "$2.225M" OR "$2,225,000"
2. Square Feet: "4,100" OR "4100" → "4,634"
3. Price per SqFt: Add or update to "$480/sqft" (calculate: $2,225,000 / 4,634 = $480)
4. Address: "13193 SE Regency Vw" → "13191 SE REGENCY VIEW ST"
5. Bedrooms: "3 bedrooms" → "3 bedrooms (capability for 5)"
6. Bathrooms: "4 bathrooms" → "3.1 bathrooms"
7. Days on Market: "100 days" → "19 days" (if mentioned)

SEARCH PATTERNS TO FIND:
- Search for: 2.685, 2685, 2,685,000
- Search for: 4,100, 4100
- Search for: 13193
- Search for: bedroom, bath
- Search for: days on market, DOM

INSTRUCTIONS:
1. Provide a complete list of ALL locations where data needs updating (line numbers + context)
2. For each location, show:
   - Current value
   - New value
   - Surrounding context (5 lines before/after)

OUTPUT FORMAT (JSON):
{
  "updates": [
    {
      "line_number": 432,
      "current_value": "$2.685M",
      "new_value": "$2.225M",
      "context_before": "...",
      "context_after": "...",
      "full_line_current": "...",
      "full_line_new": "..."
    }
  ],
  "summary": {
    "total_updates": 0,
    "price_updates": 0,
    "sqft_updates": 0,
    "address_updates": 0,
    "bedroom_updates": 0,
    "bathroom_updates": 0
  }
}'''),

    # AGENT 2: Payment Calculator Component
    (2, 'feature/agent-2-payment-calculator', 'Create payment calculator component',
    '''TASK: Create a premium monthly payment calculator React component

COMPONENT SPECS:
- File: src/components/PaymentCalculator.jsx (NEW FILE)
- Default values:
  * Home price: $2,225,000
  * Down payment: 20% ($445,000)
  * Interest rate: 7.0%
  * Loan term: 30 years
  * Monthly payment: $8,498

FEATURES:
1. Real-time calculation as user adjusts inputs
2. Interactive sliders for:
   - Down payment % (0-50%, step 5%)
   - Interest rate (3-10%, step 0.25%)
   - Loan term (15, 20, 25, 30 years)
3. Display breakdown:
   - Principal & Interest
   - Estimated property tax
   - Estimated insurance
   - Total monthly payment
4. Beautiful, luxury design matching site aesthetic
5. Smooth animations (Framer Motion)
6. Mobile responsive

DESIGN REQUIREMENTS:
- Elegant, sophisticated UI
- Gold/amber accents (#D4AF37, #F59E0B)
- Clean typography
- Subtle shadows and gradients
- Glass morphism effect
- Smooth transitions

FORMULA:
Monthly Payment = P * [r(1+r)^n] / [(1+r)^n - 1]
Where:
- P = Loan amount (price - down payment)
- r = Monthly interest rate (annual rate / 12)
- n = Number of payments (years * 12)

OUTPUT: Complete PaymentCalculator.jsx component code (no markdown blocks)'''),

    # AGENT 3: Premium Brand Integration
    (3, 'feature/agent-3-premium-brands', 'Integrate premium brand names',
    '''TASK: Enhance property descriptions with premium brand names

BRANDS TO INTEGRATE:
- Kitchen: Dacor appliances (ALREADY PRESENT - keep as is)
- Bathroom: Duravit fixtures, Axor faucets, Graff fixtures, Hansgrohe rain showers
- Lighting: Tom Dixon pendant lights, Louis Poulsen fixtures
- HVAC: Carrier climate control systems

CURRENT BRAND MENTIONS (keep these):
- Line 87: "Culinary Excellence with Dacor Professional Suite"
- Line 122: "Designer Plumbing Fixtures by Axor & Graff"
- Line 129: "Hansgrohe & Duravit European Excellence"

INTEGRATION STYLE (examples):
❌ BAD: "Features: Duravit, Axor, Graff, Hansgrohe, Tom Dixon, Louis Poulsen, Carrier"
✅ GOOD: "Spa-inspired bathrooms showcase Duravit fixtures, Axor faucets, and Hansgrohe rain showers"
✅ GOOD: "Tom Dixon and Louis Poulsen lighting creates an ambiance of refined elegance"
✅ GOOD: "Carrier climate control ensures year-round comfort"

LOCATIONS TO ENHANCE:
1. Kitchen/Dining section - mention Dacor (already good)
2. Bathroom section - enhance with Duravit, Axor, Graff, Hansgrohe
3. Living spaces - add Tom Dixon, Louis Poulsen lighting mentions
4. Systems/Features section - add Carrier HVAC

INSTRUCTIONS:
1. Find 3-5 locations in the component where brands can be naturally integrated
2. Rewrite those sections with brand names woven into luxury copy
3. Maintain storytelling tone (not spec sheet)
4. Keep existing structure and styling

OUTPUT FORMAT (JSON):
{
  "enhancements": [
    {
      "location": "Line ~600, Kitchen Features section",
      "current_text": "...",
      "enhanced_text": "...",
      "brands_added": ["Dacor"]
    }
  ]
}'''),

    # AGENT 4: Location Benefits & Materials
    (4, 'feature/agent-4-location-benefits', 'Add location benefits and materials',
    '''TASK: Add specific location benefits and material details

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

TONE EXAMPLES:
❌ "Near New Seasons and Clackamas Town Center"
✅ "Moments from New Seasons Market's curated selections and Clackamas Town Center's premier shopping"
✅ "Hand-selected stained cedar cladding harmonizes with the forest setting"
✅ "9-foot stacking sliders dissolve the boundary between indoor luxury and outdoor serenity"

INSTRUCTIONS:
1. Find the location/lifestyle section (likely around "Happy Valley" mentions)
2. Find the features/materials section
3. Create enhanced copy integrating these details
4. Maintain luxury, aspirational tone
5. Keep existing structure

OUTPUT FORMAT (JSON):
{
  "location_enhancements": [
    {
      "section": "Location section",
      "current_text": "...",
      "enhanced_text": "..."
    }
  ],
  "material_enhancements": [
    {
      "section": "Features section",
      "current_text": "...",
      "enhanced_text": "..."
    }
  ]
}'''),

    # AGENT 5: Detailed Specifications Section
    (5, 'feature/agent-5-detailed-specs', 'Create detailed specs section',
    '''TASK: Create or enhance a detailed specifications section

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
1. Check if a specs section exists in the component
2. If yes, enhance it with above details
3. If no, create elegant section with:
   - Clean visual hierarchy
   - Icon integration (use lucide-react icons)
   - Grid layout (responsive)
   - Luxury aesthetic (not boring table)
4. Place toward bottom of page (after emotional storytelling)
5. Mobile responsive

OUTPUT FORMAT (JSON):
{
  "specs_section": {
    "exists": true/false,
    "location": "Line ~XXX",
    "approach": "enhance" or "create",
    "jsx_code": "... complete JSX for specs section ..."
  }
}'''),

    # AGENT 6: Market Context & CTA Enhancement
    (6, 'feature/agent-6-market-context', 'Add market context and enhance CTAs',
    '''TASK: Add market context section and enhance call-to-action buttons

MARKET CONTEXT SECTION TO ADD:
1. "Similar Properties in Happy Valley" subsection
   - General market info (can be placeholder)
   - Position this property as exclusive opportunity
   - Luxury tone
2. "Market Trends" subsection
   - General luxury real estate context
   - Why now is the time
   - Investment perspective

CTA ENHANCEMENTS:
1. Find existing CTA buttons (likely "Private Viewing" or similar)
2. Add multiple CTA placements:
   - Hero section (primary)
   - Mid-page (after features)
   - Footer (final CTA)
3. CTA button variations:
   - "Schedule Private Tour" (primary)
   - "Request Information"
   - "Save This Property"
   - "Share"
4. ALL CTAs must link to #contact (contact form)
5. Elegant, premium button design
6. Not aggressive - sophisticated

DESIGN REQUIREMENTS:
- CTAs should be prominent but elegant
- Market section should be informative but not boring
- Maintain luxury aesthetic throughout
- Mobile responsive
- Smooth animations

OUTPUT FORMAT (JSON):
{
  "market_section": {
    "jsx_code": "... complete JSX for market context section ...",
    "placement": "After features section, before contact"
  },
  "cta_enhancements": [
    {
      "location": "Hero section",
      "current_cta": "...",
      "enhanced_cta": "..."
    }
  ]
}''')
]

def main():
    print("=" * 80)
    print("SESSION 15: MULTI-AGENT WEBSITE UPDATE")
    print("Regency View Estate - Homepage Data & Features Update")
    print("=" * 80)
    print(f"\nDeploying {len(tasks)} Gemini 2.5 Flash agents in parallel...\n")
    
    start_time = time.time()
    results = {}
    
    # Execute all agents in parallel
    with ThreadPoolExecutor(max_workers=len(tasks)) as executor:
        future_to_task = {
            executor.submit(call_gemini_agent, task_id, branch, desc, prompt): task_id 
            for task_id, branch, desc, prompt in tasks
        }
        
        for future in as_completed(future_to_task):
            result = future.result()
            results[result['task_id']] = result
    
    end_time = time.time()
    total_time = end_time - start_time
    
    # Print summary
    print("\n" + "=" * 80)
    print("EXECUTION SUMMARY")
    print("=" * 80)
    
    successful = sum(1 for r in results.values() if r['success'])
    failed = len(results) - successful
    
    print(f"\n✅ Successful: {successful}/{len(tasks)}")
    print(f"❌ Failed: {failed}/{len(tasks)}")
    print(f"⏱️  Total Time: {total_time:.2f} seconds")
    
    if successful > 0:
        avg_time = sum(r['elapsed_time'] for r in results.values() if r['success']) / successful
        fastest = min(r['elapsed_time'] for r in results.values() if r['success'])
        slowest = max(r['elapsed_time'] for r in results.values() if r['success'])
        print(f"⚡ Average Agent Time: {avg_time:.2f}s")
        print(f"🏃 Fastest Agent: {fastest:.2f}s")
        print(f"🐌 Slowest Agent: {slowest:.2f}s")
    
    print("\n" + "=" * 80)
    print("AGENT RESULTS")
    print("=" * 80)
    
    for task_id in sorted(results.keys()):
        result = results[task_id]
        status = "✅ SUCCESS" if result['success'] else "❌ FAILED"
        print(f"\nAgent {task_id}: {result['description']}")
        print(f"Status: {status}")
        print(f"Branch: {result['branch']}")
        if result['success']:
            print(f"Time: {result['elapsed_time']:.2f}s")
            print(f"Output Length: {len(result['response'])} characters")
        else:
            print(f"Error: {result.get('error', 'Unknown error')}")
    
    # Save results to file
    output_file = 'session15_results.json'
    with open(output_file, 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"\n📄 Full results saved to: {output_file}")
    print("\n" + "=" * 80)
    
    if successful == len(tasks):
        print("🎉 ALL AGENTS COMPLETED SUCCESSFULLY!")
    elif successful > 0:
        print(f"⚠️  {successful} agents succeeded, {failed} failed. Review and retry failed agents.")
    else:
        print("❌ ALL AGENTS FAILED. Check API key and connectivity.")
    
    print("=" * 80)
    
    return results

if __name__ == "__main__":
    main()

