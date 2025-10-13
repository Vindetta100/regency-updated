#!/bin/bash
# ODM v10.1 - Session End Script

set -euo pipefail

# Use a default summary based on the latest changelog entry
SUMMARY="ODM v10.1 protocol implementation and testing"

# 1. Commit any remaining changes (like the updated changelog and validation report)
echo "📝 Committing final changes..."
git add .
git commit -m "docs(odm): update changelog and validation report for session completion" || echo "No additional changes to commit"

# 2. Create a new branch
BRANCH_NAME="feature/odm-v10.1-$(date +%s)"
echo "
✅ Creating new branch: $BRANCH_NAME"
git checkout -b $BRANCH_NAME

# 3. Push the new branch to the remote
echo "
✅ Pushing changes to remote..."
git push -u origin $BRANCH_NAME

# 4. Generate the Pull Request URL
REPO_URL=$(git remote get-url origin)
PR_URL="${REPO_URL%.git}/pull/new/$BRANCH_NAME"

echo "
✅ Your work has been pushed successfully."
echo "
🚀 To complete the process, please open the following URL in your browser to create a Pull Request:"
echo "
$PR_URL
"

echo "
📝 The Pull Request will include:"
echo "   - All ODM v10.1 protocol files"
echo "   - Updated changelog with Session 27 entry"
echo "   - Complete validation report with 9/10 confidence rating"
