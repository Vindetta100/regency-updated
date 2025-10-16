# ADR 001: Migration to ODM v11

## Status
Accepted

## Date
2025-10-16

## Context
The Regency View Estate project was previously using ODM v9.1, which included extensive shell scripts for session management, validation, and changelog updates. The project structure had evolved from a Python-based system to a React/Vite frontend application, making many of the old ODM configurations obsolete.

ODM v11.0 offers a simplified, language-agnostic approach that better aligns with modern development practices and can adapt to any technology stack.

## Decision
We will migrate from ODM v9.1 to ODM v11.0 with the following changes:

1. **Simplified Scripts**: Replace multiple ODM scripts (guardian.sh, validate.sh, session_start.sh, etc.) with streamlined start.sh and end.sh scripts
2. **Updated Configuration**: Adapt odm.yaml to reflect the actual project structure (React/Vite instead of Python)
3. **Test Commands**: Use npm scripts for testing and validation (lint, build) instead of Python test commands
4. **Source Directories**: Update to src/ and lib/ to match the current frontend structure
5. **Critical Files**: Include package.json, index.html, README.md, and CHANGELOG.md as critical files
6. **File Patterns**: Add JSX, TSX, and CSS to integrity file globs

## Consequences

### Positive
- Cleaner, more maintainable ODM integration
- Better alignment with the actual project technology stack
- Reduced complexity in development workflow
- Language-agnostic approach supports future technology changes
- Improved documentation with README.md and CHANGELOG.md

### Negative
- Loss of some specialized scripts from v9.1 (guardian.sh for secret scanning, validate.sh for comprehensive checks)
- Need to adapt to new workflow patterns
- Historical ODM data preserved in old_ODM/ but not actively used

### Neutral
- All old ODM v9.1 files backed up in old_ODM/ directory for reference
- Migration is one-way; reverting would require manual restoration
