#!/bin/bash
# ODM - Upgrade Script
# Safely upgrades ODM to the latest version while preserving project-specific files
set -euo pipefail

echo "🔄 ODM Upgrade Script"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Configuration
ODM_REPO="https://github.com/Vindetta100/ODM.git"
TEMP_DIR="/tmp/odm-upgrade-$$"
BACKUP_DIR=".odm-backup-$(date +%Y%m%d-%H%M%S)"

# Files that should be preserved (project-specific)
PRESERVE_FILES=(
  "ARCHITECTURE.md"
  "CHANGELOG.md"
  "odm_ai_rules.md"
  ".odm/odm.yaml"
  ".odm/guardian.sh"
  "VALIDATION_REPORT.md"
)

# Files that should be upgraded (ODM core)
UPGRADE_FILES=(
  ".odm/start.sh"
  ".odm/end.sh"
)

echo "📦 Step 1: Creating backup..."
mkdir -p "$BACKUP_DIR"

# Backup all preserved files
for file in "${PRESERVE_FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "   Backing up: $file"
    mkdir -p "$BACKUP_DIR/$(dirname "$file")"
    cp "$file" "$BACKUP_DIR/$file"
  fi
done

echo "✅ Backup created at: $BACKUP_DIR"
echo ""

echo "📥 Step 2: Downloading latest ODM..."
git clone --depth 1 "$ODM_REPO" "$TEMP_DIR" 2>/dev/null || {
  echo "❌ Failed to download ODM repository"
  exit 1
}
echo "✅ Latest ODM downloaded"
echo ""

echo "🔄 Step 3: Upgrading ODM core files..."
for file in "${UPGRADE_FILES[@]}"; do
  if [ -f "$TEMP_DIR/$file" ]; then
    echo "   Upgrading: $file"
    mkdir -p "$(dirname "$file")"
    cp "$TEMP_DIR/$file" "$file"
    chmod +x "$file" 2>/dev/null || true
  else
    echo "   ⚠️  Warning: $file not found in latest ODM"
  fi
done
echo "✅ Core files upgraded"
echo ""

echo "📋 Step 4: Checking for new files..."
# Check if there are new documentation files in ODM
NEW_DOCS=()
for doc in "$TEMP_DIR"/*.md; do
  if [ -f "$doc" ]; then
    basename_doc=$(basename "$doc")
    # Skip template files that should be preserved
    if [[ ! " ${PRESERVE_FILES[@]} " =~ " ${basename_doc} " ]]; then
      if [ ! -f "$basename_doc" ]; then
        NEW_DOCS+=("$basename_doc")
      fi
    fi
  fi
done

if [ ${#NEW_DOCS[@]} -gt 0 ]; then
  echo "   New documentation files available:"
  for doc in "${NEW_DOCS[@]}"; do
    echo "      - $doc"
  done
  echo ""
  echo "   These files are available in: $TEMP_DIR"
  echo "   Review and copy manually if needed."
else
  echo "   No new documentation files found"
fi
echo ""

echo "🧹 Step 5: Cleaning up..."
rm -rf "$TEMP_DIR"
echo "✅ Cleanup complete"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ ODM UPGRADE COMPLETE!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 Summary:"
echo "   ✅ Core scripts upgraded: start.sh, end.sh"
echo "   ✅ Project files preserved: ARCHITECTURE.md, CHANGELOG.md, etc."
echo "   ✅ Backup created: $BACKUP_DIR"
echo ""
echo "⚠️  IMPORTANT: Review the changes before committing!"
echo ""
echo "Next steps:"
echo "   1. Test the upgraded scripts: bash .odm/start.sh"
echo "   2. Review changes: git diff"
echo "   3. If everything works, commit: git add -A && git commit -m 'Upgrade ODM'"
echo "   4. If issues occur, restore from backup: cp -r $BACKUP_DIR/* ."
echo ""

