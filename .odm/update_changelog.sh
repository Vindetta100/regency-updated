#!/bin/bash
set -euo pipefail
SUMMARY="$1"
if [ -z "$SUMMARY" ]; then echo "❌ Error: No summary provided." >&2; exit 1; fi
ENTRY="- $(date +'%Y-%m-%d'): [AI-SESSION] $SUMMARY"
echo "$ENTRY" >> changelog.md
echo "✅ Changelog updated."
