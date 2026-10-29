# 08 GitHub Pages deploy

**Depends on:** 01

## Goal
Pushing to `master` builds with Astro and deploys to GitHub Pages at `tamasszarvas.me`.

## Files touched
`.github/workflows/deploy.yml`, repo Pages settings (manual).

## Steps
1. Workflow triggers: `push` on `master` and `workflow_dispatch`.
2. Permissions: `contents: read`, `pages: write`, `id-token: write`. Concurrency group `pages`, `cancel-in-progress: false`.
3. Build job: `actions/checkout`, then `withastro/action` (current major) with `node-version` (the action has no `node-version-file` input; keep it equal to `.nvmrc`). Uploads `dist/` as the Pages artifact.
4. Deploy job: `needs: build`, environment `github-pages`, `actions/deploy-pages`.
5. **Manual (user):** Repo -> Settings -> Pages -> Source = **GitHub Actions**. Confirm the custom domain `tamasszarvas.me` and "Enforce HTTPS". `CNAME` ships from `public/`.
6. GitHub only offers `workflow_dispatch` for workflows that exist on the default branch, so the workflow cannot be run from `astro-migration` before the merge. Verify the build locally with `npm run build && npm run preview`. The first real run is the push to `master` in task 09. The `deploy` job is guarded with `if: github.ref == 'refs/heads/master'`, so a dispatch from another branch only builds.

## Acceptance
- A green workflow run.
- The deployed site serves `/` and `/en/` over HTTPS on the custom domain.
- Switching the Pages source does not take the site down; the old content stays live until the first successful deploy from `master`.
