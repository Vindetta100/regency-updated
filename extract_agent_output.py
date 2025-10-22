#!/usr/bin/env python3
import json
import sys

with open('session15_results.json', 'r') as f:
    results = json.load(f)

agent_id = sys.argv[1] if len(sys.argv) > 1 else '2'
output = results[agent_id]['response']

# Clean markdown if present
if '```' in output:
    lines = output.split('\n')
    code_lines = []
    in_code = False
    for line in lines:
        if line.strip().startswith('```'):
            in_code = not in_code
            continue
        if in_code or (not line.strip().startswith('#') and not line.strip().startswith('Here')):
            code_lines.append(line)
    output = '\n'.join(code_lines)

print(output)

