#!/usr/bin/env python3
"""
Operation Regency Rush - AI Agent Army Orchestrator
Deploys 50+ AI agents in parallel to execute multi-platform marketing campaign
Uses OpenRouter API with Gemini 2.5 Flash for cost-effective, high-speed execution
"""

import os
import requests
import json
from concurrent.futures import ThreadPoolExecutor, as_completed
import time
from datetime import datetime

# Configuration
# Try OPENROUTER_API_KEY first, fallback to OPENAI_API_KEY (which works with OpenRouter)
API_KEY = os.environ.get('OPENROUTER_API_KEY') or os.environ.get('OPENAI_API_KEY')
API_URL = 'https://openrouter.ai/api/v1/chat/completions'
PROPERTY_URL = 'https://www.theregencyviewestate.com/'
PROPERTY_PRICE = '$2,995,000'
PROPERTY_ADDRESS = '13191 SE Regency View St, Happy Valley, OR 97086'

# Campaign tracking
results_log = []
start_time = None

def call_marketing_agent(agent_id, platform, target_community, persona, task_description):
    """
    Execute a single marketing agent task
    
    Args:
        agent_id: Unique identifier for this agent
        platform: Platform name (Reddit, Facebook, LinkedIn, etc.)
        target_community: Specific community/group to target
        persona: Target buyer persona
        task_description: Specific task for this agent
    """
    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json',
        'HTTP-Referer': PROPERTY_URL,
        'X-Title': 'Regency View Estate Marketing Campaign'
    }
    
    # Construct the agent's prompt
    prompt = f"""You are a sophisticated marketing agent for a luxury real estate property. Your mission is to authentically engage with potential buyers on {platform} in the community: {target_community}.

TARGET BUYER PERSONA: {persona}

PROPERTY DETAILS:
- Address: {PROPERTY_ADDRESS}
- Price: {PROPERTY_PRICE}
- Type: Luxury modern architectural masterpiece
- Features: 3 levels, forest views, Tom Dixon lighting, Dacor appliances, custom white oak throughout
- Website: {PROPERTY_URL}

YOUR SPECIFIC TASK:
{task_description}

CRITICAL GUIDELINES:
1. Be authentic and conversational - you're a real person who discovered this property
2. Provide genuine value to the community first, then mention the property naturally
3. Adapt your tone to the platform culture (professional on LinkedIn, casual on Reddit, etc.)
4. Never spam or be overly salesy
5. Focus on the aspects that matter most to the target persona
6. Include the property URL only when contextually appropriate

OUTPUT FORMAT:
Provide your response in JSON format with these fields:
{{
    "post_title": "Title for the post (if applicable)",
    "post_body": "The main content of your post/comment",
    "engagement_strategy": "How you'll follow up and engage with responses",
    "key_talking_points": ["List", "of", "3-5", "key", "points", "to", "emphasize"],
    "call_to_action": "The specific action you want readers to take"
}}

Generate the marketing content now:"""

    payload = {
        'model': 'google/gemini-2.5-flash',  # Using paid model for reliable concurrent requests
        'messages': [
            {
                'role': 'user',
                'content': prompt
            }
        ],
        'temperature': 0.8,  # Higher creativity for marketing content
        'max_tokens': 1000
    }
    
    try:
        response = requests.post(API_URL, headers=headers, json=payload, timeout=60)
        response.raise_for_status()
        result = response.json()
        
        content = result['choices'][0]['message']['content']
        
        # Try to parse as JSON, fallback to raw text if it fails
        try:
            parsed_content = json.loads(content)
        except json.JSONDecodeError:
            parsed_content = {"raw_response": content}
        
        return {
            'agent_id': agent_id,
            'platform': platform,
            'target_community': target_community,
            'persona': persona,
            'success': True,
            'content': parsed_content,
            'timestamp': datetime.now().isoformat()
        }
    except Exception as e:
        return {
            'agent_id': agent_id,
            'platform': platform,
            'target_community': target_community,
            'persona': persona,
            'success': False,
            'error': str(e),
            'timestamp': datetime.now().isoformat()
        }

def save_results(results, filename='campaign_results.json'):
    """Save campaign results to a JSON file"""
    output_path = f'/home/ubuntu/regency-updated/marketing/{filename}'
    with open(output_path, 'w') as f:
        json.dump(results, f, indent=2)
    print(f"\n✓ Results saved to {output_path}")

def print_summary(results):
    """Print a summary of the campaign execution"""
    total = len(results)
    successful = sum(1 for r in results if r['success'])
    failed = total - successful
    
    elapsed_time = time.time() - start_time
    
    print("\n" + "="*70)
    print("OPERATION REGENCY RUSH - CAMPAIGN EXECUTION SUMMARY")
    print("="*70)
    print(f"Total Agents Deployed: {total}")
    print(f"Successful: {successful} ({successful/total*100:.1f}%)")
    print(f"Failed: {failed} ({failed/total*100:.1f}%)")
    print(f"Total Execution Time: {elapsed_time:.2f} seconds")
    print(f"Average Time per Agent: {elapsed_time/total:.2f} seconds")
    print("="*70)
    
    # Platform breakdown
    platforms = {}
    for r in results:
        platform = r['platform']
        if platform not in platforms:
            platforms[platform] = {'total': 0, 'success': 0}
        platforms[platform]['total'] += 1
        if r['success']:
            platforms[platform]['success'] += 1
    
    print("\nPLATFORM BREAKDOWN:")
    for platform, stats in platforms.items():
        success_rate = stats['success']/stats['total']*100
        print(f"  {platform}: {stats['success']}/{stats['total']} ({success_rate:.1f}%)")
    print("="*70)

# Define the marketing tasks for each agent
# Format: (platform, target_community, persona, task_description)
marketing_tasks = [
    # Reddit Campaign (15 agents)
    ('Reddit', 'r/fatFIRE', 'California Tech Executive', 
     'Find a recent discussion about real estate investments or relocation. Share your perspective on the Portland luxury market and naturally mention this property as an example of the value proposition.'),
    
    ('Reddit', 'r/fatFIRE', 'California Tech Executive',
     'Create a post asking for opinions on relocating from the Bay Area to Portland, specifically about luxury real estate value. Frame it as research you\'re doing.'),
    
    ('Reddit', 'r/realestateinvesting', 'Real Estate Investor',
     'Write a detailed investment analysis post about the Happy Valley luxury market, using this property as a case study. Include market data and appreciation potential.'),
    
    ('Reddit', 'r/realestateinvesting', 'Real Estate Investor',
     'Comment on a thread about luxury real estate markets with insights about Portland, mentioning this property as an interesting data point.'),
    
    ('Reddit', 'r/Portland', 'Affluent Portland Professional',
     'Create a post celebrating Portland\'s architectural excellence, featuring this property as an example of world-class modern design in Happy Valley.'),
    
    ('Reddit', 'r/portlandrealestate', 'Affluent Portland Professional',
     'Share market insights about the Happy Valley luxury segment, using this property to illustrate current market dynamics.'),
    
    ('Reddit', 'r/bayarea', 'California Tech Executive',
     'Comment on a thread about people leaving the Bay Area. Share a comparison of what $3M buys in Portland vs the Bay Area, using this property as an example.'),
    
    ('Reddit', 'r/SeattleWA', 'Remote Tech Worker',
     'Find a discussion about remote work and relocation. Share thoughts on Portland as an alternative to Seattle, mentioning this property as an example of the lifestyle upgrade.'),
    
    ('Reddit', 'r/architecture', 'Design Enthusiast',
     'Create a post appreciating modern residential architecture in the Pacific Northwest, featuring this property\'s design elements.'),
    
    ('Reddit', 'r/InteriorDesign', 'Design Enthusiast',
     'Share insights about high-end residential finishes (Tom Dixon, Axor, etc.), using this property as a reference for luxury design integration.'),
    
    ('Reddit', 'r/digitalnomad', 'Remote Tech Worker',
     'Comment on a thread about the best cities for remote workers. Highlight Portland and mention this property as an example of the quality of life available.'),
    
    ('Reddit', 'r/FIRE', 'Remote Tech Worker',
     'Create a post about real estate as part of a FIRE strategy, using Portland luxury properties like this one as examples of smart investments.'),
    
    ('Reddit', 'r/Portland', 'Affluent Portland Professional',
     'Comment on a thread about Happy Valley. Share positive insights about the area and mention this property as a testament to the neighborhood\'s evolution.'),
    
    ('Reddit', 'r/realestateinvesting', 'Real Estate Investor',
     'Create a "deal analysis" post breaking down the investment potential of this property, inviting community feedback.'),
    
    ('Reddit', 'r/fatFIRE', 'California Tech Executive',
     'Share your experience researching Portland real estate and ask for opinions on this specific property as a potential purchase.'),
    
    # LinkedIn Campaign (10 agents)
    ('LinkedIn', 'Portland Business Professionals', 'Affluent Portland Professional',
     'Write a professional post about Portland\'s luxury real estate market strength, highlighting this property as evidence of the market\'s sophistication.'),
    
    ('LinkedIn', 'Bay Area Tech Professionals', 'California Tech Executive',
     'Create a thought leadership post about the tech talent migration to Portland, using this property as an example of the lifestyle upgrade available.'),
    
    ('LinkedIn', 'Real Estate Investment Group', 'Real Estate Investor',
     'Share a detailed investment thesis on Portland luxury real estate, featuring this property as a case study.'),
    
    ('LinkedIn', 'Luxury Real Estate Network', 'All Personas',
     'Write a post celebrating architectural excellence in residential real estate, showcasing this property\'s unique features.'),
    
    ('LinkedIn', 'Angel Investors', 'California Tech Executive',
     'Create a post about diversifying investment portfolios with real estate, using this property as an example of a high-quality asset.'),
    
    ('LinkedIn', 'Portland Business Professionals', 'Affluent Portland Professional',
     'Share insights about Happy Valley as a prime location for professionals, mentioning this property as a benchmark for the area.'),
    
    ('LinkedIn', 'Bay Area Tech Professionals', 'California Tech Executive',
     'Write about the cost of living comparison between Bay Area and Portland, using this property to illustrate the value proposition.'),
    
    ('LinkedIn', 'Real Estate Investment Group', 'Real Estate Investor',
     'Create a post analyzing the Portland luxury market trends, featuring this property as a prime example.'),
    
    ('LinkedIn', 'Luxury Real Estate Network', 'Design Enthusiast',
     'Share a post about the importance of design in luxury real estate, highlighting this property\'s world-class fixtures and finishes.'),
    
    ('LinkedIn', 'Portland Business Professionals', 'Affluent Portland Professional',
     'Write about the evolution of Happy Valley into a luxury destination, using this property as a flagship example.'),
    
    # Facebook Groups Campaign (10 agents)
    ('Facebook', 'Home Buyers in Portland, Oregon', 'All Personas',
     'Create an engaging post with photos showcasing this property, framed as a personal discovery of an exceptional home.'),
    
    ('Facebook', 'Moving to Portland Oregon', 'California Tech Executive',
     'Share your research on Portland real estate and ask for community input on this property as a potential purchase.'),
    
    ('Facebook', 'Bay Area to Portland Transplants', 'California Tech Executive',
     'Create a post comparing Bay Area vs Portland real estate, using this property to illustrate the value difference.'),
    
    ('Facebook', 'Portland Luxury Homes', 'Affluent Portland Professional',
     'Share this property as an example of the exceptional luxury homes available in Happy Valley.'),
    
    ('Facebook', 'Happy Valley Neighbors', 'Affluent Portland Professional',
     'Write a post celebrating the architectural beauty in the neighborhood, featuring this property.'),
    
    ('Facebook', 'Tech Executives Network', 'California Tech Executive',
     'Create a post about lifestyle optimization for tech professionals, using this property as an example of what\'s possible in Portland.'),
    
    ('Facebook', 'Portland Real Estate Investment Club', 'Real Estate Investor',
     'Share an investment analysis of this property and ask for community feedback.'),
    
    ('Facebook', 'Moving to Portland Oregon', 'Remote Tech Worker',
     'Write about your Portland relocation research and highlight this property as an aspirational example.'),
    
    ('Facebook', 'Home Buyers in Portland, Oregon', 'Affluent Portland Professional',
     'Create a post asking for opinions on Happy Valley vs other Portland suburbs, featuring this property.'),
    
    ('Facebook', 'Portland Luxury Homes', 'Design Enthusiast',
     'Share this property as an example of world-class residential design in Portland.'),
    
    # BiggerPockets Campaign (5 agents)
    ('BiggerPockets', 'Oregon Real Estate Q&A', 'Real Estate Investor',
     'Create a detailed forum post analyzing this property as an investment opportunity, including market data and ROI projections.'),
    
    ('BiggerPockets', 'Luxury Real Estate Investing', 'Real Estate Investor',
     'Write a case study post on luxury real estate in secondary markets, using this property as the primary example.'),
    
    ('BiggerPockets', 'Oregon Real Estate Q&A', 'Real Estate Investor',
     'Comment on a thread about Portland real estate with insights about the Happy Valley market, mentioning this property.'),
    
    ('BiggerPockets', 'Luxury Real Estate Investing', 'Real Estate Investor',
     'Create a post asking for community input on the investment potential of this specific property.'),
    
    ('BiggerPockets', 'Oregon Real Estate Q&A', 'Real Estate Investor',
     'Share market analysis of Portland luxury real estate trends, featuring this property as a data point.'),
    
    # Additional platforms (10 agents)
    ('Quora', 'Real Estate Questions', 'All Personas',
     'Answer a question about luxury real estate in Portland, using this property as a detailed example.'),
    
    ('Quora', 'Moving to Portland Questions', 'California Tech Executive',
     'Answer a question about relocating to Portland from California, mentioning this property as an example of available luxury.'),
    
    ('Houzz', 'Portland Design Professionals', 'Design Enthusiast',
     'Create a discussion post about modern luxury finishes, featuring this property\'s Tom Dixon and Axor fixtures.'),
    
    ('Houzz', 'Architecture Discussions', 'Design Enthusiast',
     'Share this property as an example of excellent modern residential architecture in the Pacific Northwest.'),
    
    ('Nextdoor', 'Happy Valley', 'Affluent Portland Professional',
     'Create a neighborhood post celebrating local architectural excellence, featuring this property.'),
    
    ('Nextdoor', 'West Linn', 'Affluent Portland Professional',
     'Share information about exceptional homes in nearby Happy Valley, highlighting this property.'),
    
    ('Instagram', 'Architecture Hashtags', 'Design Enthusiast',
     'Write compelling Instagram caption copy for a carousel post featuring this property\'s design elements.'),
    
    ('Instagram', 'Luxury Real Estate Hashtags', 'All Personas',
     'Create Instagram Story copy that creates urgency and drives traffic to the property website.'),
    
    ('TikTok', 'Real Estate Content', 'All Personas',
     'Write a script for a 60-second TikTok video showcasing this property\'s unique features.'),
    
    ('YouTube', 'Real Estate Channels', 'All Personas',
     'Write a compelling video description and comment strategy for a property tour video.'),
]

def main():
    """Main execution function"""
    global start_time
    start_time = time.time()
    
    print("="*70)
    print("OPERATION REGENCY RUSH - AI AGENT ARMY DEPLOYMENT")
    print("="*70)
    print(f"Deploying {len(marketing_tasks)} agents across multiple platforms...")
    print(f"Property: {PROPERTY_ADDRESS}")
    print(f"Target: End of week sale")
    print("="*70)
    print("\nInitiating parallel agent deployment...\n")
    
    # Execute all agents in parallel
    with ThreadPoolExecutor(max_workers=len(marketing_tasks)) as executor:
        # Submit all tasks
        future_to_task = {
            executor.submit(
                call_marketing_agent, 
                i+1,  # agent_id
                task[0],  # platform
                task[1],  # target_community
                task[2],  # persona
                task[3]   # task_description
            ): i+1 for i, task in enumerate(marketing_tasks)
        }
        
        # Collect results as they complete
        for future in as_completed(future_to_task):
            agent_id = future_to_task[future]
            result = future.result()
            results_log.append(result)
            
            if result['success']:
                print(f"✓ Agent {agent_id:2d} ({result['platform']:15s} | {result['target_community']:30s}) - SUCCESS")
            else:
                print(f"✗ Agent {agent_id:2d} ({result['platform']:15s} | {result['target_community']:30s}) - FAILED: {result['error'][:50]}")
    
    # Print summary and save results
    print_summary(results_log)
    save_results(results_log)
    
    # Save individual agent outputs for review
    print("\nSaving individual agent outputs...")
    for result in results_log:
        if result['success']:
            filename = f"agent_{result['agent_id']:03d}_{result['platform'].lower()}_{result['target_community'].replace('/', '_').replace(' ', '_')[:30]}.json"
            filepath = f"/home/ubuntu/regency-updated/marketing/agent_outputs/{filename}"
            os.makedirs(os.path.dirname(filepath), exist_ok=True)
            with open(filepath, 'w') as f:
                json.dump(result, f, indent=2)
    
    print(f"\n✓ Individual outputs saved to /home/ubuntu/regency-updated/marketing/agent_outputs/")
    print("\n" + "="*70)
    print("CAMPAIGN DEPLOYMENT COMPLETE")
    print("="*70)
    print("\nNext steps:")
    print("1. Review agent outputs in marketing/agent_outputs/")
    print("2. Manually post the generated content to each platform")
    print("3. Monitor engagement and respond to comments")
    print("4. Track leads coming to the property website")
    print("="*70)

if __name__ == "__main__":
    if not API_KEY:
        print("ERROR: Neither OPENROUTER_API_KEY nor OPENAI_API_KEY environment variable is set")
        print("Please set your OpenRouter API key:")
        print("  export OPENROUTER_API_KEY='your-key-here'")
        print("Or use the OPENAI_API_KEY that's already configured")
        exit(1)
    
    print(f"Using API key: {API_KEY[:10]}...{API_KEY[-4:]}")
    
    main()
