---
name: update-cv
description: Replace the CV PDFs in public/ keeping the file names.
disable-model-invocation: true
---

# Update CV

The CV PDFs are generated outside this repo; the user supplies the new files.

1. Copy them over `public/cv-szarvas-tamas-hu.pdf` and `public/cv-szarvas-tamas-en.pdf`. Keep the exact names: the links are built per locale from them.
2. Check each is a real PDF with `file`.
3. `npm run build` and confirm both PDFs are in `dist/`.
4. Commit only if the user asks.
