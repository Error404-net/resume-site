#!/bin/sh
# Rebuild site and PDF from content/_index.md. Copy the new resume.md there first (manual).
set -e
hugo --minify >/dev/null && node scripts/build-pdf.mjs && hugo --minify
