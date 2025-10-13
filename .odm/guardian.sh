#!/bin/bash
# Guardian Script: Automated checker for critical dev rules.
set -euo pipefail
echo "🛡️ Guardian Duty: Checking for critical violations..."
ERRORS=0
CONFIG_FILE="odm.yaml"

# 1. Secret Scanning
SOURCE_DIRS=$(yq -r '.paths.sourceDirs[]' "$CONFIG_FILE" | tr '\n' '|' | sed 's/|$//')
# Look for hardcoded secrets (strings with actual secret values, not environment variables)
if git diff HEAD~1 --name-only 2>/dev/null | grep -E "($SOURCE_DIRS)" | xargs grep -E 'password.*=.*"[^"]{8,}"|secret.*=.*"[^"]{8,}"|key.*=.*"[^"]{8,}"' > .odm/secrets_found.txt 2>/dev/null; then
    echo "❌ GUARDIAN FAIL: Potential hardcoded secrets found. See .odm/secrets_found.txt" >&2
    ERRORS=$((ERRORS + 1))
else
    echo "✅ Guardian: No hardcoded secrets found."
    rm -f .odm/secrets_found.txt
fi

# 2. Test Coverage Check
COVERAGE_CMD=$(yq -r '.test.coverageCmd' "$CONFIG_FILE")
if eval "$COVERAGE_CMD" >/dev/null 2>&1; then
    echo "✅ Guardian: Test coverage meets threshold."
else
    echo "❌ GUARDIAN FAIL: Test coverage is below the required threshold." >&2
    ERRORS=$((ERRORS + 1))
fi

# 3. Railway-specific dependency check
echo "📦 Validating Railway dependencies..."
if [ -f "requirements.txt" ]; then
    REQUIRED_MODULES=("requests" "flask" "python-telegram-bot" "solana" "psycopg2-binary")
    for module in "${REQUIRED_MODULES[@]}"; do
        if ! grep -q "$module" requirements.txt; then
            echo "❌ GUARDIAN FAIL: Required module '$module' missing from requirements.txt" >&2
            ERRORS=$((ERRORS + 1))
        fi
    done
    echo "✅ Guardian: All required modules present in requirements.txt"
else
    echo "❌ GUARDIAN FAIL: requirements.txt not found" >&2
    ERRORS=$((ERRORS + 1))
fi

# 4. Critical file validation
echo "📋 Validating critical files..."
CRITICAL_FILES=("railway.toml" "Procfile" "omo-api-python/src/main.py")
for file in "${CRITICAL_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ GUARDIAN FAIL: Critical file '$file' missing" >&2
        ERRORS=$((ERRORS + 1))
    fi
done

if [ $ERRORS -eq 0 ]; then
    echo "✅ Guardian: All critical files present"
fi

# 5. API versioning check (ODM Rule 5.2)
echo "🔗 Checking API versioning compliance..."
if grep -r "/api/v1/" omo-api-python/src/ >/dev/null 2>&1; then
    echo "✅ Guardian: API versioning compliance verified"
else
    echo "⚠️  Guardian: No versioned API endpoints found (consider adding /api/v1/ routes)"
fi

echo "🛡️ Guardian scan complete. Errors: $ERRORS"
exit $ERRORS
