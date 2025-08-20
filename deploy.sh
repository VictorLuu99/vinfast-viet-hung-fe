#!/bin/bash

echo "🚀 Starting VinFast Việt Hùng deployment to Cloudflare Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to Cloudflare Pages
echo "🌐 Deploying to Cloudflare Pages..."
wrangler pages deploy out --project-name=vinfastviethung

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed! Please check the errors above."
    exit 1
fi

echo "🎉 Deployment completed successfully!"
echo "🌍 Your site should be available at: https://dev.vinfastviethung.pages.dev"
