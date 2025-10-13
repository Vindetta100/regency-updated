#!/bin/bash
set -euo pipefail
echo "🚀 ODM Protocol v9.1 - Invoking End Chat Protocol"

# Parameters: $1 = Changelog Summary, $2 = Path to Adherence Report
CHANGELOG_SUMMARY="${1}"
ADHERENCE_REPORT_FILE="${2}"

if [ -z "$CHANGELOG_SUMMARY" ] || [ -z "$ADHERENCE_REPORT_FILE" ]; then
    echo "❌ FATAL: This script requires two arguments: a changelog summary and a path to the adherence report." >&2
    exit 1
fi

# 1. Update Changelog
echo "Updating changelog..."
bash .odm/update_changelog.sh "$CHANGELOG_SUMMARY"

# 2. Run Final Verification and Reporting
echo "Running pre-handoff verification..."
bash .odm/pre_handoff.sh "$CHANGELOG_SUMMARY" "$ADHERENCE_REPORT_FILE"

echo "✅ End Chat Protocol Complete."
