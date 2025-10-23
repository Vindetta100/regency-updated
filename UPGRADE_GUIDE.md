# ODM Upgrade Guide

This guide explains how to safely upgrade ODM in your project without losing your project-specific files.

---

## Quick Upgrade

Run the upgrade script from your project root:

```bash
bash .odm/upgrade.sh
```

That's it! The script will:
1. ✅ Backup your project-specific files
2. ✅ Download the latest ODM version
3. ✅ Upgrade core scripts (start.sh, end.sh)
4. ✅ Preserve your customizations
5. ✅ Clean up temporary files

---

## What Gets Preserved

The upgrade script **preserves** these project-specific files:

- **ARCHITECTURE.md** - Your project's architecture documentation
- **CHANGELOG.md** - Your project's changelog
- **odm_ai_rules.md** - Your customized AI rules
- **.odm/odm.yaml** - Your project configuration
- **.odm/guardian.sh** - Your customized security checks
- **VALIDATION_REPORT.md** - Your latest validation report

---

## What Gets Upgraded

The upgrade script **upgrades** these ODM core files:

- **.odm/start.sh** - Session start script
- **.odm/end.sh** - Session end script

---

## Upgrade Process

### Step 1: Run the upgrade script

```bash
bash .odm/upgrade.sh
```

### Step 2: Review the changes

```bash
git diff
```

Check what changed in `start.sh` and `end.sh`. Make sure the changes look correct.

### Step 3: Test the upgraded scripts

```bash
bash .odm/start.sh
```

Verify that the start script works correctly and displays the expected information.

### Step 4: Commit the upgrade

If everything looks good:

```bash
git add -A
git commit -m "Upgrade ODM to latest version"
git push
```

---

## Rollback (If Needed)

If something goes wrong, the upgrade script creates a timestamped backup:

```bash
# Find your backup
ls -la | grep odm-backup

# Example output:
# .odm-backup-20231018-143022/

# Restore from backup
cp -r .odm-backup-20231018-143022/* .

# Verify restoration
git status
```

---

## Manual Upgrade (Alternative)

If you prefer to upgrade manually:

### 1. Backup your files

```bash
mkdir -p .odm-backup
cp ARCHITECTURE.md CHANGELOG.md odm_ai_rules.md .odm-backup/
cp .odm/odm.yaml .odm/guardian.sh .odm-backup/
```

### 2. Download latest ODM

```bash
cd /tmp
git clone https://github.com/Vindetta100/ODM.git
```

### 3. Copy core scripts

```bash
cd /path/to/your/project
cp /tmp/ODM/.odm/start.sh .odm/start.sh
cp /tmp/ODM/.odm/end.sh .odm/end.sh
chmod +x .odm/start.sh .odm/end.sh
```

### 4. Restore your files

```bash
cp .odm-backup/ARCHITECTURE.md ./
cp .odm-backup/CHANGELOG.md ./
cp .odm-backup/odm_ai_rules.md ./
cp .odm-backup/odm.yaml .odm/
cp .odm-backup/guardian.sh .odm/
```

### 5. Clean up

```bash
rm -rf /tmp/ODM
```

---

## Upgrade Checklist

After upgrading, verify:

- [ ] `bash .odm/start.sh` runs without errors
- [ ] Start script displays correct file paths (odm_ai_rules.md in root)
- [ ] `git diff` shows only expected changes
- [ ] ARCHITECTURE.md is intact
- [ ] CHANGELOG.md is intact
- [ ] odm_ai_rules.md is intact
- [ ] .odm/odm.yaml is intact
- [ ] Backup was created successfully

---

## Troubleshooting

### Issue: "Permission denied" when running upgrade.sh

**Solution:**
```bash
chmod +x .odm/upgrade.sh
bash .odm/upgrade.sh
```

### Issue: "File not found" errors

**Solution:**
Make sure you're running the script from your project root:
```bash
cd /path/to/your/project
bash .odm/upgrade.sh
```

### Issue: Changes were lost

**Solution:**
Restore from the automatic backup:
```bash
ls -la | grep odm-backup
cp -r .odm-backup-TIMESTAMP/* .
```

### Issue: Want to see what will change before upgrading

**Solution:**
Download ODM to a temporary location and compare:
```bash
cd /tmp
git clone https://github.com/Vindetta100/ODM.git
diff /tmp/ODM/.odm/start.sh /path/to/your/project/.odm/start.sh
diff /tmp/ODM/.odm/end.sh /path/to/your/project/.odm/end.sh
```

---

## Version History

### v11.2 (Current)
- ✅ Moved `odm_ai_rules.md` to root
- ✅ Moved `VALIDATION_REPORT.md` to root (single file, overwrites)
- ✅ Removed `.odm/reports/` folder
- ✅ Added `upgrade.sh` for safe upgrades
- ✅ Updated all references in scripts

### v11.1
- Added AI rules enforcement at session start
- Added ODM compliance checklist at session end
- Enhanced validation report with compliance results
- Added deletion detection for files and dependencies

### v11.0
- Initial public release

---

## AI Upgrade Instructions

When you tell your AI to upgrade ODM, provide these instructions:

```
Please upgrade ODM to the latest version:

1. Run: bash .odm/upgrade.sh
2. Review the changes: git diff
3. Test: bash .odm/start.sh
4. If everything works, commit the changes
5. If issues occur, restore from the backup created in .odm-backup-*
```

---

## Support

For issues or questions:
- Open an issue: https://github.com/Vindetta100/ODM/issues
- Check documentation: https://github.com/Vindetta100/ODM

---

**Safe upgrades. Zero data loss. Maximum confidence.**

