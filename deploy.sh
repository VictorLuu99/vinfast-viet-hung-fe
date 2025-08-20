#!/bin/bash

echo "🚀 Starting VinFast Việt Hùng deployment to Cloudflare Pages..."

# Build the project with automatic path fixes
echo "📦 Building the project..."
npm run build:fix

if [ $? -ne 0 ]; then
    echo "❌ Build with fixes failed! Please check the errors above."
    exit 1
fi

echo "✅ Build with path fixes completed successfully!"

# Deploy to Cloudflare Pages
echo "🌐 Deploying to Cloudflare Pages..."
wrangler pages deploy out --project-name=vinfastviethung

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed! Please check the errors above."
    exit 1
fi

echo "🎉 Deployment completed successfully!"
echo "🌍 Your site should be available at: https://dev.vinfastviethung.pages.dev"
