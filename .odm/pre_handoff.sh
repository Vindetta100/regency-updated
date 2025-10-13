#!/bin/bash
set -euo pipefail
echo "🔍 ODM Protocol v9.1 - Final Verification"
ERRORS=0
CONFIG_FILE="odm.yaml"
REPORT_DIR=$(yq -r '.paths.reportDir' "$CONFIG_FILE")
SUMMARY_FILE="$REPORT_DIR/session_summary.md"
mkdir -p "$REPORT_DIR"

# --- Parameters from Master Script ---
CHANGELOG_SUMMARY="${1}"
ADHERENCE_REPORT_FILE="${2}"

# --- 1. Run Guardian Script ---
bash .odm/guardian.sh || ERRORS=$((ERRORS + 1))

# --- 2. Run Quality Tests ---
TEST_CMD=$(yq -r '.test.testCmd' "$CONFIG_FILE")
if eval "$TEST_CMD" >/dev/null 2>&1; then TEST_STATUS="✅ Passed"
else TEST_STATUS="❌ Failed"; ERRORS=$((ERRORS + 1)); fi

# --- 3. Save Work ---
if ! git diff-index --quiet HEAD 2>/dev/null; then
  git add . && git commit -m "ODM Session complete - $(date -u +'%Y-%m-%dT%H:%M:%SZ')"
  SAVE_STATUS="✅ Saved"
else
  SAVE_STATUS="⚪ No changes to save."
fi

# --- 4. Generate Human-Readable Report ---
echo "📝 Generating session summary..."
{
    echo "# Session Report - $(date +'%B %d, %Y')"
    echo ""
    echo "## Final Checklist"
    echo "----------------------------------------"
    echo "- **Automated Guardian Checks**: $([ $ERRORS -eq 0 ] && echo "✅ Passed" || echo "❌ Failed")"
    echo "- **Quality & E2E Tests**: $TEST_STATUS"
    echo "- **Work Committed to Git**: $SAVE_STATUS"
    echo "- **Changelog Updated With**: $CHANGELOG_SUMMARY"
    echo "----------------------------------------"
    echo ""
    echo "## Developer

's Adherence Report"
    echo "*The AI's explanation of how it followed key architectural rules.*"
    cat "$ADHERENCE_REPORT_FILE"
    echo ""
    echo "## Files Changed in This Session"
    echo '```diff'
    git diff HEAD~1 --name-status 2>/dev/null || echo "No previous commit to compare"
    echo '```'
} > "$SUMMARY_FILE"

# --- 5. Final Output to Chat ---
echo "======================================================="
cat "$SUMMARY_FILE"
echo "======================================================="

if [ "$ERRORS" -ne 0 ]; then
    echo "❌ Issues found. Please review the summary."; exit 1
fi
echo "✅ Protocol followed successfully. Ready for handoff."
exit 0
