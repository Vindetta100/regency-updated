# Changelog

All notable changes to The Regency View Estate project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Session - 2025-10-16 - ODM v11 Migration

#### Changed
- Migrated from ODM v9.1 to ODM v11.0
- Updated odm.yaml configuration to v11.0 format
- Replaced ODM scripts with simplified v11 versions
- Updated source directory configuration to match current project structure (src/, lib/)
- Updated test commands to use npm scripts (lint and build)
- Added JSX/TSX/CSS file patterns to integrity checks
- Updated critical files list to include package.json and index.html

#### Added
- README.md - Project documentation
- CHANGELOG.md - This file
- odm_ai_rules.md - ODM v11 AI agent guidelines
- old_ODM/ - Backup directory containing all ODM v9.1 files

#### Removed
- Legacy ODM v9.1 scripts (guardian.sh, validate.sh, session_start.sh, etc.)
- Old configuration targeting non-existent Python projects

## [1.0.0] - Previous Development

### Added
- Initial luxury real estate website implementation
- React-based frontend with Vite build system
- Tailwind CSS styling framework
- Responsive design for all devices
- SEO optimization for Chinese and English markets
- Interactive property galleries and tours
- Video content integration
- Vercel Analytics integration
