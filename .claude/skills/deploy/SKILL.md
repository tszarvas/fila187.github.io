---
name: deploy
description: Build, preview, push to master and watch the GitHub Pages workflow.
disable-model-invocation: true
---

# Deploy

Pushing to `master` deploys the live site, so confirm with the user before the push.

1. Check `git status` is clean and the branch is the intended one.
2. `npm run check && npm run build`.
3. `npm run preview` and ask the user to look at `/` and `/en/`.
4. After the user confirms: `git push`.
5. `gh run list --workflow deploy.yml --limit 1`, then `gh run watch <id>`.
6. Report the result and `https://tamasszarvas.me/`.
