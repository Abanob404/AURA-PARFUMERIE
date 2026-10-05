# AURA – Vercel Admin/API Fix

This build fixes the Vercel 404/HTML response that caused:
`Unexpected token 'T' ... is not valid JSON`.

## Routes
- `/` storefront
- `/products`
- `/services`
- `/admin`
- `/api/health` deployment/API diagnostics

## Default admin bootstrap
- Username: `admin`
- Password: `123456`

The admin account is created/reset once when MongoDB connects.

## Required Vercel Environment Variables
At minimum for admin login:
- `MONGODB_URI`
- `JWT_SECRET` (use a long random secret)

The bootstrap credentials in this build are intentionally fixed to `admin / 123456` for the first login. Change the password immediately from the dashboard after login.

After changing environment variables, redeploy the project.
