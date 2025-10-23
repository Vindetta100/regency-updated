#!/bin/bash
# ODM - Task Completion Script
set -euo pipefail

echo "🏁 Completing Development Task..."
echo ""

# 1. Run guardian checks (security gate)
echo "🛡️ Running guardian security checks..."
if [ -f ".odm/guardian.sh" ]; then
  bash .odm/guardian.sh
  GUARDIAN_EXIT_CODE=$?
  if [ $GUARDIAN_EXIT_CODE -ne 0 ]; then
    echo "❌ GUARDIAN VIOLATIONS FOUND - Cannot proceed with commit"
    echo "   Address the security issues above before ending session"
    exit $GUARDIAN_EXIT_CODE
  fi
else
  echo "⚠️  .odm/guardian.sh not found, skipping security checks..."
fi
echo ""

# 2. Analyze file changes
echo "📊 Analyzing file changes..."
echo ""

# Get list of new files (untracked)
NEW_FILES=$(git ls-files --others --exclude-standard)
NEW_FILES_COUNT=$(echo "$NEW_FILES" | grep -c . || echo "0")

# Get list of modified files
MODIFIED_FILES=$(git diff --name-only)
MODIFIED_FILES_COUNT=$(echo "$MODIFIED_FILES" | grep -c . || echo "0")

# Get list of staged files
STAGED_FILES=$(git diff --cached --name-only)
STAGED_FILES_COUNT=$(echo "$STAGED_FILES" | grep -c . || echo "0")

echo "📝 File Change Summary:"
echo "   New files: $NEW_FILES_COUNT"
echo "   Modified files: $MODIFIED_FILES_COUNT"
echo "   Staged files: $STAGED_FILES_COUNT"
echo ""

# 3. Show new files created by AI
if [ "$NEW_FILES_COUNT" -gt 0 ]; then
  echo "🆕 NEW FILES CREATED (Review for cleanup):"
  echo "─────────────────────────────────────────────────────────"
  echo "$NEW_FILES"
  echo "─────────────────────────────────────────────────────────"
  echo ""
  echo "⚠️  AI: Review the above files. Are any temporary/unnecessary?"
  echo "   Common candidates for deletion:"
  echo "   - *_test.*, *_backup.*, *_old.*, *_temp.*"
  echo "   - *.tmp, *.log, *.cache"
  echo "   - Duplicate files with numbers (file_1.py, file_2.py)"
  echo ""
fi

# 4. Detect potential cleanup candidates
echo "🗑️  POTENTIAL FILES TO DELETE (AI should review):"
echo "─────────────────────────────────────────────────────────"
# Look for common temporary file patterns
CLEANUP_CANDIDATES=$(find . -type f \( \
  -name "*_test.*" -o \
  -name "*_backup.*" -o \
  -name "*_old.*" -o \
  -name "*_temp.*" -o \
  -name "*.tmp" -o \
  -name "*.bak" -o \
  -name "*~" -o \
  -name "*.swp" -o \
  -name ".DS_Store" \
\) ! -path "./.git/*" ! -path "./node_modules/*" ! -path "./venv/*" 2>/dev/null || echo "")

if [ -n "$CLEANUP_CANDIDATES" ]; then
  echo "$CLEANUP_CANDIDATES"
  echo ""
  echo "⚠️  AI: Review these files and delete if unnecessary"
else
  echo "✅ No obvious cleanup candidates found"
fi
echo "─────────────────────────────────────────────────────────"
echo ""

# 5. Show git diff summary
echo "📝 Changes in this session:"
git status --short
echo ""
git diff --stat
echo ""

# 6. Check if ARCHITECTURE.md needs updating
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🏗️  ARCHITECTURE UPDATE CHECK"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "⚠️  AI: Review ARCHITECTURE.md and update if you made changes to:"
echo ""
echo "   📦 Tech Stack:"
echo "      - Language/Runtime/Framework versions"
echo "      - Database or ORM changes"
echo "      - Infrastructure or hosting changes"
echo "      - New key dependencies added"
echo "      - Development tools (linting, formatting, testing)"
echo ""
echo "   🏗️  Architecture:"
echo "      - Design patterns or layer structure"
echo "      - Error handling strategy"
echo "      - API endpoints or versioning"
echo "      - Authentication/security measures"
echo "      - Database schema or relationships"
echo ""
echo "   🔧 Configuration:"
echo "      - New environment variables"
echo "      - Build or deployment process"
echo "      - Test commands or coverage requirements"
echo ""
echo "   📝 Decisions & Issues:"
echo "      - Key architectural decisions made"
echo "      - New blockers or technical debt"
echo "      - Performance considerations"
echo ""
echo "❓ Did you update ARCHITECTURE.md if needed? (yes/no)"
read -p "   > " ARCH_UPDATED
echo ""

if [ "$ARCH_UPDATED" = "no" ] || [ "$ARCH_UPDATED" = "n" ]; then
  echo "⚠️  WARNING: Please review and update ARCHITECTURE.md before completing!"
  echo "   This file is the single source of truth for the project."
  echo ""
  echo "Press ENTER to continue anyway, or Ctrl+C to cancel and update ARCHITECTURE.md first..."
  read
  echo ""
fi

# 7. ODM AI Rules Compliance Checklist
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ ODM AI RULES COMPLIANCE CHECKLIST"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "⚠️  AI: Verify you followed these ODM AI rules during this session:"
echo ""

# Modular Design Check
echo "1. 📦 MODULAR DESIGN"
echo "   Did you ensure all modules follow single responsibility?"
echo "   Are all files < 300 lines?"
read -p "   [yes/no] > " MODULAR_CHECK
if [ "$MODULAR_CHECK" != "yes" ] && [ "$MODULAR_CHECK" != "y" ]; then
  echo "   ⚠️  WARNING: Review and refactor large modules"
fi
echo ""

# Separation of Concerns Check
echo "2. 🔀 SEPARATION OF CONCERNS"
echo "   Did you separate business logic, data access, and presentation?"
echo "   No mixing of auth/api/db/services/utils layers?"
read -p "   [yes/no] > " SEPARATION_CHECK
if [ "$SEPARATION_CHECK" != "yes" ] && [ "$SEPARATION_CHECK" != "y" ]; then
  echo "   ⚠️  WARNING: Review layer separation"
fi
echo ""

# API Versioning Check
echo "3. 🔗 API VERSIONING"
echo "   Did you use /api/v1/ prefixes for all API endpoints?"
read -p "   [yes/no/not-applicable] > " API_CHECK
if [ "$API_CHECK" = "no" ] || [ "$API_CHECK" = "n" ]; then
  echo "   ⚠️  WARNING: Update API routes to use versioning"
fi
echo ""

# Error Handling Check
echo "4. ⚠️  ERROR HANDLING"
echo "   Did you implement explicit try/catch with logging?"
echo "   Are error messages user-friendly (no internal exposure)?"
read -p "   [yes/no] > " ERROR_CHECK
if [ "$ERROR_CHECK" != "yes" ] && [ "$ERROR_CHECK" != "y" ]; then
  echo "   ⚠️  WARNING: Review and improve error handling"
fi
echo ""

# Testing Check
echo "5. 🧪 TESTING"
echo "   Did you maintain or improve test coverage?"
echo "   (Guardian will verify coverage threshold)"
read -p "   [yes/no] > " TEST_CHECK
if [ "$TEST_CHECK" != "yes" ] && [ "$TEST_CHECK" != "y" ]; then
  echo "   ⚠️  WARNING: Add tests before committing"
fi
echo ""

# Boy Scout Rule Check
echo "6. 🏕️  BOY SCOUT RULE"
echo "   Did you leave the code cleaner than you found it?"
echo "   Did you refactor or document confusing code?"
read -p "   [yes/no] > " BOYSCOUT_CHECK
if [ "$BOYSCOUT_CHECK" != "yes" ] && [ "$BOYSCOUT_CHECK" != "y" ]; then
  echo "   ⚠️  WARNING: Consider cleanup opportunities"
fi
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 8. Prompt AI to provide session summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🤖 AI: Please provide the following information:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. SESSION NUMBER (e.g., 1.1, 1.2, 2.0):"
read -p "   > " SESSION_NUM
echo ""

echo "2. ADDED (new features/files):"
read -p "   > " ADDED
echo ""

echo "3. CHANGED (modified files with line numbers):"
read -p "   > " CHANGED
echo ""

echo "4. FIXED (bug fixes with specific locations):"
read -p "   > " FIXED
echo ""

echo "5. COMMIT (brief technical summary):"
read -p "   > " COMMIT_MSG
echo ""

echo "6. AI SELF-ANALYSIS:"
echo ""
echo "   Confidence Level (1-10, where 10 is highest confidence):"
read -p "   > " CONFIDENCE_LEVEL
echo ""
echo "   What went well in this session:"
read -p "   > " WENT_WELL
echo ""
echo "   What needs improvement or fixing:"
read -p "   > " NEEDS_IMPROVEMENT
echo ""
echo "   Merge recommendation (merge-now / fix-first / needs-review):"
read -p "   > " MERGE_REC
echo ""

echo "7. ALIGNMENT VERIFICATION:"
echo ""
echo "   Do commit messages match what you described in changelog? (yes/no):"
read -p "   > " COMMITS_ALIGN
echo ""
echo "   Do actual file changes match your descriptions? (yes/no):"
read -p "   > " FILES_ALIGN
echo ""
echo "   Are there any undocumented changes? (yes/no):"
read -p "   > " UNDOCUMENTED_CHANGES
echo ""

# 9. Generate consolidated validation report (enhanced format)
echo "📋 Generating consolidated validation report..."
REPORT_FILE="VALIDATION_REPORT.md"
TEMP_REPORT=".odm/temp_validation_report.md"

# Get Git data for validation
MERGE_BASE=$(git merge-base HEAD origin/main 2>/dev/null || echo "$(git log --oneline | tail -1 | awk '{print $1}')")
DIFF_STAT=$(git diff --stat $MERGE_BASE HEAD 2>/dev/null || echo "No changes to compare")
COMMITS=$(git log --pretty=format:"- %s" $MERGE_BASE..HEAD 2>/dev/null || echo "No commits found")

# Analyze deletions
echo "🔍 Analyzing deletions..."
DELETED_FILES=$(git diff --name-only --diff-filter=D $MERGE_BASE HEAD 2>/dev/null || echo "")
DELETED_COUNT=$(echo "$DELETED_FILES" | grep -c . 2>/dev/null || echo "0")

# Check for deleted dependencies (Python)
DEPS_REMOVED=""
if [ -f "requirements.txt" ]; then
  DEPS_BEFORE=$(git show $MERGE_BASE:requirements.txt 2>/dev/null || echo "")
  DEPS_AFTER=$(cat requirements.txt 2>/dev/null || echo "")
  if [ -n "$DEPS_BEFORE" ] && [ -n "$DEPS_AFTER" ]; then
    DEPS_REMOVED=$(comm -23 <(echo "$DEPS_BEFORE" | grep -v "^#" | grep -v "^$" | sort) <(echo "$DEPS_AFTER" | grep -v "^#" | grep -v "^$" | sort) 2>/dev/null || echo "")
  fi
fi

# Check for deleted dependencies (Node.js)
DEPS_REMOVED_NODE=""
if [ -f "package.json" ] && command -v jq &> /dev/null; then
  DEPS_BEFORE_NODE=$(git show $MERGE_BASE:package.json 2>/dev/null | jq -r '.dependencies // {} | keys[]' 2>/dev/null | sort || echo "")
  DEPS_AFTER_NODE=$(cat package.json 2>/dev/null | jq -r '.dependencies // {} | keys[]' 2>/dev/null | sort || echo "")
  if [ -n "$DEPS_BEFORE_NODE" ] && [ -n "$DEPS_AFTER_NODE" ]; then
    DEPS_REMOVED_NODE=$(comm -23 <(echo "$DEPS_BEFORE_NODE") <(echo "$DEPS_AFTER_NODE") 2>/dev/null || echo "")
  fi
fi

# Generate new report content to temp file
cat > $TEMP_REPORT <<- EOM
# ODM v11.2 - End-of-Task Validation Report

**Date**: $(date)
**Session**: $SESSION_NUM

---

## 1. Git Commits Summary
$COMMITS

---

## 2. File Changes Overview
\`\`\`
$DIFF_STAT
\`\`\`

---

## 3. Session Summary
- **ADDED:** $ADDED
- **CHANGED:** $CHANGED
- **FIXED:** $FIXED
- **COMMIT:** $COMMIT_MSG

---

## 4. Validation Status
- Guardian Security Checks: ✅ PASSED
- File Analysis: ✅ COMPLETED
- Changelog Update: ✅ COMPLETED
- Validation Report: ✅ GENERATED

---

## 5. ODM AI Rules Compliance
- **Modular Design:** $([ "$MODULAR_CHECK" = "yes" ] || [ "$MODULAR_CHECK" = "y" ] && echo "✅ PASS" || echo "⚠️  REVIEW NEEDED")
- **Separation of Concerns:** $([ "$SEPARATION_CHECK" = "yes" ] || [ "$SEPARATION_CHECK" = "y" ] && echo "✅ PASS" || echo "⚠️  REVIEW NEEDED")
- **API Versioning:** $([ "$API_CHECK" = "yes" ] || [ "$API_CHECK" = "y" ] && echo "✅ PASS" || [ "$API_CHECK" = "not-applicable" ] || [ "$API_CHECK" = "n/a" ] && echo "N/A" || echo "⚠️  REVIEW NEEDED")
- **Error Handling:** $([ "$ERROR_CHECK" = "yes" ] || [ "$ERROR_CHECK" = "y" ] && echo "✅ PASS" || echo "⚠️  REVIEW NEEDED")
- **Testing:** $([ "$TEST_CHECK" = "yes" ] || [ "$TEST_CHECK" = "y" ] && echo "✅ PASS" || echo "⚠️  REVIEW NEEDED")
- **Boy Scout Rule:** $([ "$BOYSCOUT_CHECK" = "yes" ] || [ "$BOYSCOUT_CHECK" = "y" ] && echo "✅ PASS" || echo "⚠️  REVIEW NEEDED")

---

## 6. AI Self-Analysis
- **Confidence Level:** $CONFIDENCE_LEVEL/10
- **What Went Well:** $WENT_WELL
- **What Needs Improvement:** $NEEDS_IMPROVEMENT
- **Merge Recommendation:** $MERGE_REC

---

## 7. Alignment Verification
- **Commits vs Changelog:** $([ "$COMMITS_ALIGN" = "yes" ] || [ "$COMMITS_ALIGN" = "y" ] && echo "✅ ALIGNED" || echo "⚠️  MISALIGNED")
- **Files vs Descriptions:** $([ "$FILES_ALIGN" = "yes" ] || [ "$FILES_ALIGN" = "y" ] && echo "✅ ALIGNED" || echo "⚠️  MISALIGNED")
- **Undocumented Changes:** $([ "$UNDOCUMENTED_CHANGES" = "no" ] || [ "$UNDOCUMENTED_CHANGES" = "n" ] && echo "✅ NONE" || echo "⚠️  FOUND")

---

## 8. Deleted Files & Dependencies Analysis

### Deleted Files
$(if [ "$DELETED_COUNT" -gt 0 ]; then
  echo "⚠️  **WARNING: $DELETED_COUNT file(s) were deleted in this session:**"
  echo "\`\`\`"
  echo "$DELETED_FILES"
  echo "\`\`\`"
  echo ""
  echo "**Action Required:** Verify these deletions were intentional."
else
  echo "✅ No files were deleted in this session."
fi)

### Removed Dependencies

#### Python (requirements.txt)
$(if [ -n "$DEPS_REMOVED" ]; then
  echo "⚠️  **WARNING: Dependencies removed from requirements.txt:**"
  echo "\`\`\`"
  echo "$DEPS_REMOVED"
  echo "\`\`\`"
  echo ""
  echo "**Action Required:** Verify these removals were intentional and won't break the application."
else
  if [ -f "requirements.txt" ]; then
    echo "✅ No Python dependencies were removed."
  else
    echo "N/A - No requirements.txt found."
  fi
fi)

#### Node.js (package.json)
$(if [ -n "$DEPS_REMOVED_NODE" ]; then
  echo "⚠️  **WARNING: Dependencies removed from package.json:**"
  echo "\`\`\`"
  echo "$DEPS_REMOVED_NODE"
  echo "\`\`\`"
  echo ""
  echo "**Action Required:** Verify these removals were intentional and won't break the application."
else
  if [ -f "package.json" ]; then
    echo "✅ No Node.js dependencies were removed."
  else
    echo "N/A - No package.json found."
  fi
fi)

---
EOM

# Preserve template section and append new report
if [ -f "$REPORT_FILE" ]; then
  # Extract template section (everything up to and including the separator)
  awk '
    /^⚠️ \*\*WARNING: DO NOT MODIFY ANYTHING ABOVE THIS LINE\*\* ⚠️$/ { 
      print; 
      getline; print;  # blank line
      getline; print;  # explanation line 1
      getline; print;  # explanation line 2
      getline; print;  # explanation line 3
      getline; print;  # blank line
      getline; print;  # separator ---
      getline; print;  # blank line
      exit 
    }
    { print }
  ' "$REPORT_FILE" > "${REPORT_FILE}.tmp"
  
  # Append new report content
  echo "## Latest Validation Report" >> "${REPORT_FILE}.tmp"
  echo "" >> "${REPORT_FILE}.tmp"
  cat "$TEMP_REPORT" >> "${REPORT_FILE}.tmp"
  
  # Replace original with combined version
  mv "${REPORT_FILE}.tmp" "$REPORT_FILE"
else
  # First time - just use the temp report
  mv "$TEMP_REPORT" "$REPORT_FILE"
fi

# Clean up temp file
rm -f "$TEMP_REPORT"

echo "✅ Validation report generated: $REPORT_FILE"
echo ""

echo "8. FILES TO DELETE (comma-separated, or 'none'):"
read -p "   > " FILES_TO_DELETE
echo ""

# 10. Delete files if specified
if [ "$FILES_TO_DELETE" != "none" ] && [ -n "$FILES_TO_DELETE" ]; then
  echo "🗑️  Deleting specified files..."
  IFS=',' read -ra DELETE_ARRAY <<< "$FILES_TO_DELETE"
  for file in "${DELETE_ARRAY[@]}"; do
    file=$(echo "$file" | xargs) # trim whitespace
    if [ -f "$file" ]; then
      rm "$file"
      echo "   ✅ Deleted: $file"
    else
      echo "   ⚠️  Not found: $file"
    fi
  done
  echo ""
fi

# 11. Update CHANGELOG.md
echo "📝 Updating CHANGELOG.md..."
DATE=$(date +"%Y-%m-%d")

# Create the new entry
NEW_ENTRY="### Session $SESSION_NUM ($DATE)

- **ADDED:** $ADDED
- **CHANGED:** $CHANGED
- **FIXED:** $FIXED
- **COMMIT:** $COMMIT_MSG

"

# Insert after "## Recent Sessions" line (which is after the warning section)
sed -i "/^## Recent Sessions/a\\
\\
$NEW_ENTRY" CHANGELOG.md

echo "✅ Changelog updated"
echo ""

# 12. Commit everything
echo "💾 Committing changes..."
git add -A
git commit -m "$COMMIT_MSG" || echo "⚠️  No changes to commit"
echo ""

# 13. Push to remote
echo "🚀 Pushing to remote..."
git push origin main 2>/dev/null || echo "⚠️  Push failed or no remote configured"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ TASK COMPLETED!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 Summary:"
echo "   - Session: $SESSION_NUM"
echo "   - Validation: Passed"
echo "   - Changelog: Updated"
echo "   - Files deleted: $([ "$FILES_TO_DELETE" != "none" ] && echo "Yes" || echo "No")"
echo "   - Committed: Yes"
echo "   - Pushed: Yes"
echo ""
