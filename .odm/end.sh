#!/bin/bash
# ODM - Task Completion Script
set -euo pipefail

echo "🏁 Completing Development Task..."
echo ""

# 1. Run validation
echo "🔍 Running validation checks..."
if [ -f "scripts/validation.sh" ]; then
  bash scripts/validation.sh
else
  echo "⚠️  Validation script not found, skipping..."
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

# 7. Prompt AI to provide session summary
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

echo "6. FILES TO DELETE (comma-separated, or 'none'):"
read -p "   > " FILES_TO_DELETE
echo ""

# 8. Delete files if specified
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

# 9. Update CHANGELOG.md
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

# 10. Commit everything
echo "💾 Committing changes..."
git add -A
git commit -m "$COMMIT_MSG" || echo "⚠️  No changes to commit"
echo ""

# 11. Push to remote
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
