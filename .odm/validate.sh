#!/bin/bash
# ODM v10.1 - End-of-Task Validation Script
# When user says "run validation report" - this does steps 1-3, then reminds AI to do step 4

set -euo pipefail

REPORT_FILE="VALIDATION_REPORT.md"

echo "🔍 ODM v10.1 - End-of-Task Validation Process..."

# --- STEP 1: Read Changelog Rules --- #
echo "📋 Step 1: Reading changelog rules from changelog.md..."
echo "✅ Changelog rules read and understood"

# --- STEP 2: Update Changelog Based on Rules --- #
echo "📝 Step 2: AI must now update changelog following the rules..."

CURRENT_SESSION=$(grep -c "## Chat Session" changelog.md || echo "0")
NEXT_SESSION=$((CURRENT_SESSION + 1))
SESSION_DATE=$(date +"%B %d, %Y")

echo "⚠️  AI TASK: You must manually update changelog.md with Session $NEXT_SESSION entry"
echo "   Date: $SESSION_DATE"
echo "   Follow the template and rules in the changelog file"
echo ""

# --- STEP 3: Generate Validation Report --- #
echo "📊 Step 3: Generating validation report (changelog vs commits vs diffs)..."

# Get Git data
MERGE_BASE=$(git merge-base HEAD origin/main)
DIFF_STAT=$(git diff --stat $MERGE_BASE HEAD)
COMMITS=$(git log --pretty=format:"- %s" $MERGE_BASE..HEAD)
DETAILED_DIFF=$(git diff --name-status $MERGE_BASE HEAD)

cat > $REPORT_FILE <<- EOM
# ODM v10.1: End-of-Task Validation Report

**Date**: $(date)
**Session**: $NEXT_SESSION

---

## 1. The Changelog Entry (What AI Claims Was Done)

*The AI's changelog entry following project rules - extract this from changelog.md after AI updates it*

[AI: EXTRACT YOUR CHANGELOG ENTRY HERE AFTER YOU UPDATE changelog.md]

---

## 2. The Git Commits (What AI Actually Committed)

*The actual commit messages from this session*

$COMMITS

---

## 3. The File Changes (What Actually Changed)

### Files Changed (Statistics):
\`\`\`
$DIFF_STAT
\`\`\`

### Detailed Changes:
\`\`\`
$DETAILED_DIFF
\`\`\`

---

## 4. AI Self-Analysis & Confidence Rating

*AI must manually complete this section - no automation possible*

**[AI: YOU MUST COMPLETE THIS ANALYSIS MANUALLY]**

### Changelog vs Commits Alignment:
- Do my commit messages match what I wrote in the changelog?
- Are there commits I made but didn't document in the changelog?
- Are there changelog claims not backed by actual commits?

### Changelog vs File Changes Alignment:
- Do the actual file changes match what I described in the changelog?
- Did I accidentally delete, modify, or add files I didn't mention?
- Are there any unintended side effects in the code changes?

### Overall Self-Assessment:
- **CONFIDENCE LEVEL**: [1-10 rating]
- **WHAT I DID WELL**: [List strengths]
- **WHAT NEEDS FIXING**: [List any issues found]
- **RECOMMENDATION**: [Should this be merged as-is, or needs fixes?]

EOM

echo "
✅ Validation report template generated at $REPORT_FILE"
echo ""
echo "🤖 AI NEXT STEPS (MANUAL - NO AUTOMATION):"
echo "   1. Update changelog.md with new session entry following the rules"
echo "   2. Extract your changelog entry and add it to section 1 of the report"
echo "   3. Complete the AI Self-Analysis section 4 with honest assessment"
echo "   4. Give yourself a confidence rating 1-10"
echo "   5. Present the completed report to the user"
echo ""
echo "⚠️  CRITICAL: Step 4 cannot be automated - you must manually review and analyze!"
