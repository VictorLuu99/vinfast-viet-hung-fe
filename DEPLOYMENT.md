# Cloudflare Pages Deployment Guide

This guide will walk you through deploying the VinFast Việt Hùng Next.js application to Cloudflare Pages.

## 🚀 Prerequisites

1. **Cloudflare Account**: Sign up at [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Domain** (optional): You can use a Cloudflare subdomain or connect your custom domain
3. **Node.js**: Version 18 or higher
4. **Git**: For version control

## 📋 Step-by-Step Deployment

### Step 1: Install Wrangler CLI

```bash
# Global installation
npm install -g wrangler

# Or project-specific
npm install --save-dev wrangler
```

### Step 2: Authenticate with Cloudflare

```bash
# Login to your Cloudflare account
wrangler login

# Verify authentication
wrangler whoami
```

### Step 3: Create Cloudflare Pages Project

```bash
# Create new Pages project
wrangler pages project create vinfast-viethung

# Or list existing projects
wrangler pages project list
```

### Step 4: Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://vinfast-viethung.pages.dev
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Step 5: Build and Deploy

```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy out

# Or use the npm script
npm run deploy
```

### Step 6: Verify Deployment

1. Check the deployment status in your Cloudflare dashboard
2. Visit your Pages URL: `https://vinfast-viethung.pages.dev`
3. Test all functionality and responsive design

## 🔧 Configuration Files

### Wrangler Configuration (`wrangler.toml`)

```toml
name = "vinfast-viethung"
compatibility_date = "2024-01-01"
compatibility_flags = ["nodejs_compat"]

[build]
command = "npm run build"
output_dir = "out"

[env.production]
name = "vinfast-viethung"

# Performance headers
[[headers]]
for = "/*"
[headers.values]
X-Frame-Options = "DENY"
X-Content-Type-Options = "nosniff"
Referrer-Policy = "strict-origin-when-cross-origin"

# Cache optimization
[[headers]]
for = "/images/*"
[headers.values]
Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
for = "/css/*"
[headers.values]
Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
for = "/js/*"
[headers.values]
Cache-Control = "public, max-age=31536000, immutable"
```

### Next.js Configuration (`next.config.ts`)

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',           // Required for static export
  trailingSlash: true,        // SEO friendly URLs
  images: {
    unoptimized: true,        // Required for static export
  },
  // Asset prefix for Cloudflare Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vinfast-viethung' : '',
}

export default nextConfig
```

## 🌐 Custom Domain Setup

### Option 1: Cloudflare Domain

1. Add your domain to Cloudflare
2. In Pages dashboard, go to your project
3. Click "Custom domains"
4. Add your domain and follow the DNS setup

### Option 2: External Domain

1. Add your domain to Cloudflare
2. Update your domain's nameservers to Cloudflare
3. Add the domain to Pages project
4. Configure DNS records as instructed

## 📊 Performance Optimization

### Built-in Optimizations

- **Static Generation**: All pages are pre-rendered
- **Image Optimization**: WebP format support
- **Font Optimization**: Google Fonts with display swap
- **Bundle Optimization**: Tree shaking and code splitting

### Cloudflare Optimizations

- **Global CDN**: 200+ locations worldwide
- **Rocket Loader**: JavaScript loading optimization
- **Auto Minify**: CSS, JS, and HTML minification
- **Brotli Compression**: Advanced compression algorithm

## 🔍 Monitoring & Analytics

### Cloudflare Analytics

1. Enable Web Analytics in your Pages project
2. Monitor Core Web Vitals
3. Track user behavior and performance

### Performance Monitoring

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run performance audit
lhci autorun

# Or use PageSpeed Insights
# https://pagespeed.web.dev/
```

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear Next.js cache
rm -rf .next out

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run type-check
```

#### Deployment Issues
```bash
# Check Wrangler status
wrangler whoami

# Verify project access
wrangler pages project list

# Check deployment logs
wrangler pages deployment list --project-name=vinfast-viethung
```

#### Performance Issues
- Optimize images (WebP format, proper sizing)
- Implement lazy loading for non-critical resources
- Use Next.js Image component with proper optimization
- Minimize JavaScript bundle size

### Error Codes

- **MODULE_NOT_FOUND**: Check dependencies and imports
- **BUILD_ERROR**: Verify Next.js configuration
- **DEPLOYMENT_FAILED**: Check Wrangler authentication and project access

## 📈 Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Images and assets display properly
- [ ] Mobile responsiveness works
- [ ] Contact forms functional
- [ ] Performance metrics acceptable
- [ ] SEO meta tags present
- [ ] SSL certificate active
- [ ] Custom domain working (if applicable)

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: ${{ secrets.NEXT_PUBLIC_SITE_URL }}
      
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: vinfast-viethung
          directory: out
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

### Required Secrets

- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
- `NEXT_PUBLIC_SITE_URL`: Your production URL

## 📞 Support

### Cloudflare Support
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Community](https://community.cloudflare.com/)

### Project Support
- **Hotline**: 086.266.9588
- **Email**: info@vinfast-viethung.vn
- **Issues**: Create GitHub issues for technical problems

## 🎯 Success Metrics

### Performance Targets
- **PageSpeed Score**: >95 (mobile & desktop)
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

### Deployment Metrics
- **Build Time**: <3 minutes
- **Deployment Time**: <2 minutes
- **Uptime**: >99.9%
- **Global CDN Coverage**: 200+ locations

---

**Happy Deploying! 🚀**
