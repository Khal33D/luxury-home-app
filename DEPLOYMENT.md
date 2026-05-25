# Veloria Living - Deployment Guide

## Production-Ready Checklist

- ✅ React 18 with TypeScript
- ✅ Vite 5 with optimized build
- ✅ Tailwind CSS + Framer Motion
- ✅ Shopify Storefront API integrated
- ✅ Responsive design
- ✅ Component-based architecture
- ✅ Code splitting & lazy loading
- ✅ SEO-friendly routing
- ✅ Error handling
- ✅ Performance optimized

## Deploy to Vercel (Recommended)

### 1. Prepare Repository

```bash
git init
git add .
git commit -m "Initial commit: Veloria Living storefront"
git remote add origin https://github.com/yourusername/veloria-living.git
git push -u origin main
```

### 2. Connect to Vercel

Visit https://vercel.com/new and:
1. Import your GitHub repository
2. Vercel auto-detects Vite configuration
3. Add environment variables:

**Environment Variables:**
```
VITE_SHOPIFY_STORE_DOMAIN=veloria-living.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=your_token_here
```

### 3. Deploy

Click "Deploy" - Vercel handles the rest.

**Your site is live at:** `veloria-living.vercel.app`

## Deploy to Netlify

### 1. Build

```bash
npm run build
```

### 2. Deploy Folder

Connect your GitHub repo to Netlify:

**Build settings:**
- Build command: `npm run build`
- Publish directory: `dist`

**Add environment variables** in Netlify dashboard:
- VITE_SHOPIFY_STORE_DOMAIN
- VITE_SHOPIFY_STOREFRONT_TOKEN

## Deploy to AWS (Amplify)

```bash
npm install -g @aws-amplify/cli
amplify init
amplify hosting add
amplify publish
```

## Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records (Vercel provides instructions)

### Netlify

1. Domain settings → Custom domain
2. Point DNS to Netlify

## Performance Metrics

Target metrics after deployment:

| Metric | Target |
|--------|--------|
| Lighthouse Score | 90+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3s |
| Total Bundle Size | < 200KB (gzip) |

## Monitoring

### Vercel Analytics

Automatically enabled on Vercel deployment.

### Google Analytics

Add to your domain for traffic tracking:

```typescript
// src/main.tsx (optional)
import { useEffect } from 'react';

useEffect(() => {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
}, []);
```

## Security Headers

These are automatically configured on Vercel:

- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## Environment Variable Management

### Development
```
.env.local (never commit)
```

### Production
```
Set in Vercel/Netlify dashboard
```

Do NOT store sensitive tokens in code.

## Troubleshooting

### Build fails: "Cannot find Shopify token"
- Ensure VITE_SHOPIFY_STOREFRONT_TOKEN is set in deployment platform
- Check token has "Storefront API" scope enabled in Shopify

### Products not loading
- Verify Shopify store domain is correct
- Check network tab for GraphQL errors
- Confirm store has products visible in Shopify Admin

### Images not loading
- Verify Pexels CDN is accessible (or update image URLs)
- Check image URL format in `lib/shopify-client.ts`

## Rollback

To rollback on Vercel:
1. Go to Deployments
2. Click "..." on previous deployment
3. Select "Redeploy"

## CI/CD Pipeline (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Database (Optional - Supabase)

If using Supabase for orders/customers:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
```

Add environment variables:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY

## Maintenance

- Monitor Vercel Analytics monthly
- Update dependencies: `npm update`
- Check Shopify API changelog for breaking changes
- Test new products before launching

## Support

- Vercel Docs: https://vercel.com/docs
- Shopify API: https://shopify.dev/docs/api/storefront
- React Router: https://reactrouter.com/
- Framer Motion: https://www.framer.com/motion/
