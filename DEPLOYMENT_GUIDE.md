# 🚀 Cloudflare Pages Deployment Guide

## ✅ Issues Fixed

1. **Wrangler Configuration**: Added `pages_build_output_dir = "out"` to `wrangler.toml`
2. **React Compatibility**: Updated `lucide-react` from `0.263.1` to `0.540.0` for React 19 support

## 🛠️ Prerequisites

1. **Install Wrangler CLI**:
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate with Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Create Cloudflare Pages Project**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages
   - Click "Create a project"
   - Choose "Connect to Git" or "Direct Upload"

## 🚀 Deployment Methods

### Method 1: Using the Deploy Script (Recommended)
```bash
./deploy.sh
```

### Method 2: Using npm Scripts
```bash
# Deploy to production
npm run deploy

# Deploy to preview
npm run deploy:preview

# Run deployment script
npm run deploy:script
```

### Method 3: Manual Deployment
```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy out --project-name=vinfastviethung
```

## ⚙️ Configuration Files

### `wrangler.toml`
```toml
name = "vinfastviethung"
compatibility_date = "2024-01-01"
compatibility_flags = ["nodejs_compat"]

# Pages-specific configuration
pages_build_output_dir = "out"

[build]
command = "npm run build"
output_dir = "out"
```

### `next.config.ts`
```typescript
const nextConfig: NextConfig = {
  output: 'export',           // Static export for Cloudflare Pages
  trailingSlash: true,        // SEO friendly URLs
  images: {
    unoptimized: true,        // Required for static export
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vinfast-viethung' : '',
}
```

## 🔧 Troubleshooting

### Build Errors
- **Dependency conflicts**: Run `npm install` to resolve
- **TypeScript errors**: Check for type mismatches
- **PostCSS issues**: Ensure `autoprefixer` is installed

### Deployment Errors
- **Authentication**: Run `wrangler login`
- **Project not found**: Create project in Cloudflare Dashboard
- **Build command failed**: Check build logs for errors

### Common Issues
1. **"pages_build_output_dir not found"**: Ensure `wrangler.toml` has correct configuration
2. **"React version conflict"**: Use compatible package versions
3. **"Build failed"**: Check for syntax errors in components

## 📱 Environment Variables

Set these in Cloudflare Pages dashboard if needed:
```bash
NODE_VERSION=18
NPM_VERSION=9
```

## 🌐 Custom Domain Setup

1. **Add Custom Domain**:
   - Go to Pages project settings
   - Click "Custom domains"
   - Add your domain

2. **DNS Configuration**:
   - Add CNAME record pointing to `vinfast-viethung.pages.dev`
   - Or use Cloudflare's automatic DNS management

## 📊 Performance Monitoring

- **Analytics**: Enable in Pages project settings
- **Speed Insights**: Available in Cloudflare dashboard
- **Error Tracking**: Check build and runtime logs

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
```yaml
name: Deploy to Cloudflare Pages
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
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: vinfast-viethung
          directory: out
```

## 📞 Support

If you encounter issues:
1. Check the build logs in Cloudflare Pages
2. Verify all configuration files are correct
3. Ensure all dependencies are compatible
4. Check the troubleshooting section above

## 🎯 Success Checklist

- [ ] Wrangler CLI installed and authenticated
- [ ] Cloudflare Pages project created
- [ ] Build successful locally (`npm run build`)
- [ ] Deployment successful (`npm run deploy`)
- [ ] Site accessible at `https://vinfast-viethung.pages.dev`
- [ ] Custom domain configured (if applicable)
- [ ] Performance monitoring enabled
