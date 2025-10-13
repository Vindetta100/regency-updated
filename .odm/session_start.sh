#!/bin/bash
set -euo pipefail
echo "🚀 ODM Protocol v9.1 - Session Start"
if [ ! -f "odm.yaml" ]; then echo "❌ FATAL: odm.yaml not found!" >&2; exit 1; fi
PROJECT_MODE=$(yq -r '.projectMode' "odm.yaml")
if [ "$PROJECT_MODE" != "enterprise" ]; then
    echo "❌ FATAL: ProjectMode is not 'enterprise'." >&2; exit 1
fi
echo "✅ Enterprise Mode confirmed."
git init &>/dev/null || true
if ! git diff-index --quiet HEAD 2>/dev/null; then
  git add . && git commit -m "ODM Session baseline - $(date -u +'%Y-%m-%dT%H:%M:%SZ')"
fi
GLOBS=$(yq -r '.integrity.fileGlobs[]' "odm.yaml" | tr '\n' ' ')
find . -name "*.py" -o -name "*.md" -o -name "*.json" -o -name "*.js" -o -name "*.ts" -o -name "*.rs" -o -name "*.sh" -o -name "*.yaml" -o -name "*.yml" | grep -vE '(\.git/)' | sort > .odm/manifest_start.txt
echo "✅ Session baseline created."
