#!/bin/bash

# Production Build Script for Portfolio
echo "🚀 Starting production build process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Run linting
echo "🔍 Running ESLint..."
npm run lint

# Run type checking
echo "🔍 Running TypeScript check..."
npm run type-check

# Build the application
echo "🏗️ Building application..."
npm run build

# Generate sitemap
echo "🗺️ Generating sitemap..."
npm run postbuild

# Check build output
if [ -d ".next" ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build output: .next/"
    echo "🌐 Ready for deployment!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Optional: Start production server for testing
if [ "$1" = "--test" ]; then
    echo "🧪 Starting production server for testing..."
    npm start
fi

echo "🎉 Production build process completed!"
