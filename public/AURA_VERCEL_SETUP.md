# AURA Parfumerie — Vercel setup

Required for the admin dashboard:

- `ADMIN_USERNAME=admin`
- `ADMIN_PASSWORD=123456`
- `MONGODB_URI=<your MongoDB connection string>`
- `JWT_SECRET=<long random secret, at least 32 characters>`

Optional integrations keep their existing variables (Cloudinary, POS, VAPID, etc.).

After changing Environment Variables, redeploy the project and open `/api/health` before `/admin`.
The health endpoint never prints secret values.
