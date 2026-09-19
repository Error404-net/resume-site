#!/bin/sh
# Pull latest generated resume.md, rebuild site and PDF. Run from this folder.
set -e
cp "$HOME/Library/CloudStorage/OneDrive-Error404.net/Documents/Jobs/online-resume/resume.md" content/_index.md
hugo --minify >/dev/null && node scripts/build-pdf.mjs && hugo --minify
