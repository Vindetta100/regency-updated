#!/usr/bin/env python3
"""
Multi-Agent Theme Implementation Orchestrator V2
Using OpenAI-compatible API with available models
"""

import os
import json
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from openai import OpenAI

# Initialize OpenAI client (uses pre-configured env vars)
client = OpenAI()

# Available models per system prompt
AVAILABLE_MODELS = ['gpt-4.1-mini', 'gpt-4.1-nano', 'gemini-2.5-flash']
MODEL = 'gemini-2.5-flash'  # Use Gemini for heavy lifting

# Project paths
PROJECT_ROOT = Path('/home/ubuntu/regency-updated')
V2_FILE = PROJECT_ROOT / 'src/versions/v2/Home.jsx'
V3_FILE = PROJECT_ROOT / 'src/versions/v3/Home.jsx'

def read_file(filepath):
    """Read file content"""
    with open(filepath, 'r') as f:
        return f.read()

def write_file(filepath, content):
    """Write content to file"""
    with open(filepath, 'w') as f:
        f.write(content)

def call_agent(task_name, prompt, max_tokens=16000):
    """Call OpenAI-compatible API"""
    print(f"🤖 Agent [{task_name}] starting...")
    
    try:
        response = client.chat.completions.create(
            model=MODEL,
            messages=[
                {
                    'role': 'user',
                    'content': prompt
                }
            ],
            max_tokens=max_tokens,
            temperature=0.7
        )
        
        content = response.choices[0].message.content
        print(f"✅ Agent [{task_name}] completed successfully")
        
        return {
            'task': task_name,
            'status': 'success',
            'content': content,
            'tokens': {
                'prompt': response.usage.prompt_tokens,
                'completion': response.usage.completion_tokens,
                'total': response.usage.total_tokens
            }
        }
    except Exception as e:
        print(f"❌ Agent [{task_name}] failed: {str(e)}")
        return {
            'task': task_name,
            'status': 'error',
            'error': str(e),
            'content': None
        }

def create_v2_rimrock_prompt():
    """Create prompt for V2 Rimrock theme implementation"""
    design_analysis = read_file(PROJECT_ROOT / 'rimrock_estate_design_analysis.md')
    
    prompt = f"""You are an expert React developer implementing a luxury real estate website theme.

TASK: Create a COMPLETE, production-ready React component for the Rimrock Estate theme (Dash Two /2).

DESIGN ANALYSIS:
{design_analysis}

REQUIREMENTS:
1. Create a full React component with ALL imports
2. Use existing React/Tailwind/Framer Motion stack
3. Implement ALL sections from the design analysis:
   - Hero carousel with 5 slides (bold messaging: COMMAND RESPECT, BE LEGENDARY, etc.)
   - Property introduction section
   - Property details section
   - Lifestyle/aspirational section
   - Opportunity section with pricing
4. Purple/lavender accent colors (#9B7EBD) for all CTAs
5. Montserrat font for bold headings (add to Google Fonts)
6. ALL CAPS headlines with power words
7. Cream/white backgrounds (#F5F5F0)
8. Full-screen hero carousel with overlays
9. Framer Motion animations for carousel and scroll effects
10. Fully responsive (mobile and desktop)
11. Use existing image imports from the current file structure

EXISTING IMAGE IMPORTS TO USE:
- exteriorTwilight, kitchenMain, livingRoomMain, diningRoom, masterBedroom
- bathroomMain, exteriorFrontDay, etc.

PROPERTY DETAILS:
- Location: Happy Valley, Oregon
- Price: $2,685,000
- Size: 6,500 SQ FT
- Bedrooms: 4 BR / 4 BA + Bonus Room
- Type: 3-Level Contemporary Trophy Home

OUTPUT FORMAT:
Provide ONLY the complete React component code starting with imports and ending with export default.
Do NOT include explanations or markdown formatting - just the pure JSX code.
The component should be named "App" and export as default.

Make it bold, commanding, and powerful - worthy of industry titans!
"""
    return prompt

def create_v3_v0_prompt():
    """Create prompt for V3 V0 elegant theme implementation"""
    design_analysis = read_file(PROJECT_ROOT / 'v0_redesign_analysis.md')
    
    prompt = f"""You are an expert React developer implementing a luxury real estate website theme.

TASK: Create a COMPLETE, production-ready React component for the V0 Elegant theme (Dash Three /3).

DESIGN ANALYSIS:
{design_analysis}

REQUIREMENTS:
1. Create a full React component with ALL imports
2. Use existing React/Tailwind/Framer Motion stack
3. Implement ALL sections from the design analysis:
   - Full-screen hero with dark gradient overlay and lime green CTA (#BFFF00)
   - Asymmetric grid sections (alternating image left/right)
   - Feature cards section with gold circular icons (#C9A961) on black background
   - Gallery grid (3 columns)
   - Pricing/CTA section with outlined buttons
   - Contact form section
4. Playfair Display serif font for headlines (add to Google Fonts)
5. Inter sans-serif for body text
6. Black (#000000) and white (#FFFFFF) color scheme
7. Gold (#C9A961) and lime green (#BFFF00) accents
8. Extremely generous whitespace (editorial style)
9. Framer Motion animations for scroll effects
10. Fully responsive (mobile and desktop)
11. Use existing image imports from the current file structure

EXISTING IMAGE IMPORTS TO USE:
- exteriorTwilight, kitchenMain, livingRoomMain, diningRoom, masterBedroom
- bathroomMain, exteriorFrontDay, etc.

PROPERTY DETAILS:
- Name: The Regency View Estate
- Location: Happy Valley, Oregon
- Price: $2,685,000
- Size: 6,500 SQ FT
- Bedrooms: 4 BR / 4 BA + Bonus Room
- Type: Contemporary Masterpiece

OUTPUT FORMAT:
Provide ONLY the complete React component code starting with imports and ending with export default.
Do NOT include explanations or markdown formatting - just the pure JSX code.
The component should be named "App" and export as default.

Make it elegant, refined, and sophisticated - timeless luxury!
"""
    return prompt

def extract_code_from_response(content):
    """Extract code from markdown code blocks if present"""
    if '```' in content:
        # Find code between ```jsx or ```javascript or ``` markers
        import re
        pattern = r'```(?:jsx|javascript|js)?\n(.*?)```'
        matches = re.findall(pattern, content, re.DOTALL)
        if matches:
            return matches[0].strip()
    return content.strip()

def main():
    """Main orchestration function"""
    print("=" * 80)
    print("🚀 MULTI-AGENT THEME IMPLEMENTATION ORCHESTRATOR V2")
    print("=" * 80)
    print(f"Model: {MODEL}")
    print(f"Project: {PROJECT_ROOT}")
    print("=" * 80)
    
    # Install openai package if needed
    try:
        import openai
    except ImportError:
        print("📦 Installing openai package...")
        os.system('pip3 install -q openai')
    
    # Create task prompts
    tasks = [
        ('V2_Rimrock_Theme', create_v2_rimrock_prompt()),
        ('V3_V0_Elegant_Theme', create_v3_v0_prompt())
    ]
    
    # Execute tasks in parallel
    results = {}
    with ThreadPoolExecutor(max_workers=2) as executor:
        future_to_task = {
            executor.submit(call_agent, task_name, prompt): task_name 
            for task_name, prompt in tasks
        }
        
        for future in as_completed(future_to_task):
            task_name = future_to_task[future]
            try:
                result = future.result()
                results[task_name] = result
            except Exception as e:
                print(f"❌ Task {task_name} generated an exception: {e}")
                results[task_name] = {
                    'task': task_name,
                    'status': 'error',
                    'error': str(e),
                    'content': None
                }
    
    print("\n" + "=" * 80)
    print("📊 RESULTS SUMMARY")
    print("=" * 80)
    
    # Process results
    for task_name, result in results.items():
        print(f"\n{task_name}:")
        print(f"  Status: {result['status']}")
        
        if result['status'] == 'success' and result['content']:
            # Extract and save code
            code = extract_code_from_response(result['content'])
            
            if task_name == 'V2_Rimrock_Theme':
                output_file = V2_FILE
            else:  # V3_V0_Elegant_Theme
                output_file = V3_FILE
            
            # Save to file
            write_file(output_file, code)
            print(f"  ✅ Code saved to: {output_file}")
            print(f"  📝 Code length: {len(code)} characters")
            
            if 'tokens' in result:
                tokens = result['tokens']
                print(f"  🔢 Tokens - Prompt: {tokens.get('prompt', 0)}, Completion: {tokens.get('completion', 0)}, Total: {tokens.get('total', 0)}")
        else:
            print(f"  ❌ Error: {result.get('error', 'Unknown error')}")
    
    # Save full results to JSON
    results_file = PROJECT_ROOT / 'team_orchestrator_results.json'
    # Remove content from results to save space
    results_summary = {}
    for k, v in results.items():
        results_summary[k] = {
            'task': v['task'],
            'status': v['status'],
            'tokens': v.get('tokens', {}),
            'error': v.get('error'),
            'content_length': len(v.get('content', '')) if v.get('content') else 0
        }
    
    with open(results_file, 'w') as f:
        json.dump(results_summary, f, indent=2, default=str)
    print(f"\n📄 Results summary saved to: {results_file}")
    
    print("\n" + "=" * 80)
    print("✨ ORCHESTRATION COMPLETE")
    print("=" * 80)

if __name__ == '__main__':
    main()

