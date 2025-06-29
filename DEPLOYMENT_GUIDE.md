# Cloudflare Deployment Guide

## Required Steps for Deployment

1. **Setup Cloudflare Account**
   - Create a Cloudflare account at https://cloudflare.com
   - Install Wrangler CLI: `npm install -g wrangler`
   - Login to Cloudflare: `wrangler auth login`

2. **Configure D1 Database**
   - Create D1 database: `wrangler d1 create todo-app`
   - Update `wrangler.jsonc` with the database ID
   - Run migrations: `npm run db:migrate`

3. **Environment Variables**
   - Set required environment variables in Cloudflare dashboard
   - Configure bindings in `wrangler.jsonc`

4. **Deploy Application**
   - Build the application: `npm run build`
   - Deploy to Cloudflare Workers: `npm run deploy`

5. **Verify Deployment**
   - Check the deployed URL for functionality
   - Test database connectivity
   - Verify all routes are working correctly

## Database Configuration

Current database ID: `aa55821a-62bf-498e-b04a-d59ad8b2bdfa`
Migrations directory: `drizzle`

## Deployment URL

After deployment, your app will be available at:
https://react-router-app.kenji1004.workers.dev