#!/bin/bash
# Guardian Script: Automated checker for critical dev rules (JavaScript/React version)
set -euo pipefail
echo "🛡️ Guardian Duty: Checking for critical violations..."
ERRORS=0

# 1. Secret Scanning
echo "🔐 Scanning for hardcoded secrets..."
# Look for hardcoded secrets in staged files
STAGED_FILES=$(git diff --cached --name-only 2>/dev/null || echo "")
if [ -n "$STAGED_FILES" ]; then
    if echo "$STAGED_FILES" | xargs -I {} sh -c 'test -f "{}" && grep -H -E "password.*=.*\"[^\"]{8,}\"|secret.*=.*\"[^\"]{8,}\"|key.*=.*\"[^\"]{8,}\"|api[_-]?key.*=.*\"[^\"]{8,}\"" "{}" 2>/dev/null' > .odm/secrets_found.txt 2>&1; then
        echo "❌ GUARDIAN FAIL: Potential hardcoded secrets found. See .odm/secrets_found.txt" >&2
        cat .odm/secrets_found.txt >&2
        ERRORS=$((ERRORS + 1))
    else
        echo "✅ Guardian: No hardcoded secrets found."
        rm -f .odm/secrets_found.txt
    fi
else
    echo "✅ Guardian: No staged files to scan."
fi

# 2. Critical file validation
echo "📋 Validating critical files..."
CRITICAL_FILES=("package.json" "index.html" "CHANGELOG.md" "ARCHITECTURE.md" "odm.yaml")
MISSING_FILES=0
for file in "${CRITICAL_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ GUARDIAN FAIL: Critical file '$file' missing" >&2
        ERRORS=$((ERRORS + 1))
        MISSING_FILES=$((MISSING_FILES + 1))
    fi
done

if [ $MISSING_FILES -eq 0 ]; then
    echo "✅ Guardian: All critical files present"
fi

# 3. Package.json validation
echo "📦 Validating package.json..."
if [ -f "package.json" ]; then
    # Check if package.json is valid JSON
    if command -v node &> /dev/null; then
        if node -e "JSON.parse(require('fs').readFileSync('package.json', 'utf8'))" 2>/dev/null; then
            echo "✅ Guardian: package.json is valid"
        else
            echo "❌ GUARDIAN FAIL: package.json is not valid JSON" >&2
            ERRORS=$((ERRORS + 1))
        fi
    else
        echo "ℹ️  Guardian: Node.js not available, skipping JSON validation"
    fi
else
    echo "❌ GUARDIAN FAIL: package.json not found" >&2
    ERRORS=$((ERRORS + 1))
fi

# 4. Build Integrity Check (optional - can be slow)
if [ "${SKIP_BUILD_CHECK:-0}" = "0" ]; then
    echo "🏗️ Validating build integrity..."
    if npm run build > /tmp/build_output.log 2>&1; then
        echo "✅ Guardian: Build integrity validated."
        rm -f /tmp/build_output.log
    else
        echo "❌ GUARDIAN FAIL: Build failed. Check /tmp/build_output.log for details." >&2
        tail -20 /tmp/build_output.log >&2
        ERRORS=$((ERRORS + 1))
    fi
else
    echo "ℹ️  Guardian: Build check skipped (SKIP_BUILD_CHECK=1)"
fi

# 5. API versioning check (optional for static sites)
echo "🔗 Checking API versioning compliance..."
if [ -d "src" ]; then
    if find src/ -type f -name "*.js" -o -name "*.jsx" | xargs grep -l "/api/v1/" 2>/dev/null | head -1 > /dev/null; then
        echo "✅ Guardian: API versioning compliance verified"
    else
        echo "ℹ️  Guardian: No versioned API endpoints found (N/A for static sites)"
    fi
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ $ERRORS -eq 0 ]; then
    echo "✅ GUARDIAN: ALL CHECKS PASSED"
else
    echo "❌ GUARDIAN: $ERRORS CHECK(S) FAILED"
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

exit $ERRORS

