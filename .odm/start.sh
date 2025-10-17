#!/bin/bash
# ODM - Session Start Script
set -euo pipefail

echo "🚀 Starting Development Session..."
echo ""

# 1. Sync with remote
echo "📡 Syncing with remote repository..."
git pull origin main --rebase 2>/dev/null || echo "⚠️  Pull failed or no remote configured"
echo ""

# 2. Show latest changelog entry
echo "📋 Latest Changelog Entry:"
echo "─────────────────────────────────────────────────────────"
if [ -f "CHANGELOG.md" ]; then
  # Extract the most recent session entry (between first "### Session" and next "###" or "---")
  awk '/^### Session/{flag=1; print; next} /^###|^---/{if(flag) exit} flag' CHANGELOG.md | head -20
else
  echo "⚠️  CHANGELOG.md not found"
fi
echo "─────────────────────────────────────────────────────────"
echo ""

# 3. Show recent git activity
echo "📜 Recent Git Commits:"
git log --oneline -n 5 2>/dev/null || echo "No commit history"
echo ""

# 4. Show current status
echo "📊 Current Status:"
echo "   Branch: $(git branch --show-current 2>/dev/null || echo 'unknown')"
echo "   Uncommitted changes: $(git status --short 2>/dev/null | wc -l) files"
echo ""

# 5. Remind AI to read critical documentation
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📚 AI: REQUIRED READING BEFORE STARTING WORK"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "⚠️  SESSION INDEPENDENCE PRINCIPLE: Start from zero trust"
echo ""
echo "   MUST READ (in order):"
echo "   1. 📖 ARCHITECTURE.md - Single source of truth for tech stack,"
echo "      design patterns, and architectural decisions"
echo "   2. 📋 .odm/odm_ai_rules.md - Development rules and principles"
echo "      you MUST follow during this session"
echo "   3. 📝 CHANGELOG.md (shown above) - Recent changes and context"
echo ""
echo "   KEY RULES TO REMEMBER:"
echo "   • Modular Design: Single responsibility per module (< 300 lines)"
echo "   • Separation of Concerns: Never mix logic/data/presentation"
echo "   • API Versioning: Always use /api/v1/ prefixes"
echo "   • Zero-Trust Secrets: Never hardcode secrets"
echo "   • Testing: Maintain or improve test coverage"
echo "   • Boy Scout Rule: Leave code cleaner than you found it"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "✅ Session started. Ready to develop!"
echo ""

