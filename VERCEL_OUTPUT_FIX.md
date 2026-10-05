# Vercel Output Directory Fix

This build now creates `public/` automatically.

- `npm run build` builds Tailwind CSS and then copies all static storefront/admin files into `public/`.
- `vercel.json` explicitly sets `outputDirectory` to `public`.
- The `/api` directory remains outside `public` so Vercel can deploy it as a Serverless Function.
- Clean URLs remain enabled, so use `/products`, `/services`, and `/admin` without `.html`.

After uploading this version to GitHub, redeploy it on Vercel.
