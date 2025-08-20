#!/bin/bash

echo "🔧 Fixing asset paths for Cloudflare Pages deployment..."

# Fix CSS paths in HTML
echo "📝 Fixing CSS paths in HTML files..."
sed -i '' 's|/vinfast-viethung/_next/|/_next/|g' out/index.html
sed -i '' 's|/vinfast-viethung/_next/|/_next/|g' out/404.html
sed -i '' 's|/vinfast-viethung/_next/|/_next/|g' out/404/index.html

# Fix JSON data that causes font loading issues
echo "🔤 Fixing font loading JSON data..."
sed -i '' 's|"p":"/vinfast-viethung"|"p":""|g' out/index.html

# Fix JavaScript files
echo "⚡ Fixing JavaScript asset paths..."
find out/_next/static -name "*.js" -exec sed -i '' 's|/vinfast-viethung/_next/|/_next/|g' {} \;
find out/_next/static -name "*.js" -exec sed -i '' 's|vinfast-viethung/_next/|_next/|g' {} \;

# Fix CSS files
echo "🎨 Fixing CSS asset paths..."
find out/_next/static -name "*.css" -exec sed -i '' 's|/vinfast-viethung/_next/|/_next/|g' {} \;

# Fix webpack manifest specifically
echo "📦 Fixing webpack manifest..."
if [ -f "out/_next/static/chunks/webpack-*.js" ]; then
    find out/_next/static/chunks -name "webpack-*.js" -exec sed -i '' 's|r\.p="/vinfast-viethung/_next/"|r.p="/_next/"|g' {} \;
fi

# Fix build manifest
echo "📋 Fixing build manifest..."
if [ -f "out/_next/static/*/_buildManifest.js" ]; then
    find out/_next/static -name "_buildManifest.js" -exec sed -i '' 's|/vinfast-viethung/_next/|/_next/|g' {} \;
fi

echo "✅ All asset paths have been fixed!"
echo "🚀 Ready for deployment to Cloudflare Pages!"
