// Vercel Serverless Function entry point.
// Keep the Express application in /server for local development, and expose it
// through /api so Vercel recognises it as a function automatically.
const app = require('../server/index.js');
module.exports = app;
