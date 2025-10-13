#!/bin/bash
# ODM v10.1 - Session Start Script

set -euo pipefail

echo "🚀 ODM v10.1: Starting new development session..."

# 1. Synchronize with the remote repository
echo "
📡 Syncing with remote repository..."
git pull origin main --rebase

# 2. Install/update dependencies
echo "
📦 Installing dependencies..."
if [ -f "package.json" ]; then
  npm install
elif [ -f "requirements.txt" ]; then
  pip install -r requirements.txt
fi

# 3. Display the master plan for context
echo "
🗺️  Reviewing the Master Plan..."
if [ -f "master-plan.md" ]; then
  cat master-plan.md
else
  echo "Warning: master-plan.md not found."
fi

# 4. Show the most recent commits
echo "
📜 Reviewing recent activity..."
git log --oneline -n 5

echo "
✅ Session started successfully. You are ready to begin work."
