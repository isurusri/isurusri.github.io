#!/bin/bash

# GitHub Pages Deployment Script
echo "🚀 Deploying portfolio to GitHub Pages..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/isurusri/isurusri.github.io.git
fi

# Build the project
echo "🏗️ Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy new Next.js portfolio to GitHub Pages

- Modern Next.js 15 portfolio
- Responsive design with Tailwind CSS
- Framer Motion animations
- Contact form with EmailJS
- SEO optimized
- PWA ready
- Production ready"

# Push to main branch
echo "🚀 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully deployed to GitHub Pages!"
    echo "🌐 Your portfolio will be available at: https://isurusri.github.io"
    echo "⏳ GitHub Actions will build and deploy automatically (usually takes 2-5 minutes)"
    echo ""
    echo "📋 Next steps:"
    echo "1. Go to https://github.com/isurusri/isurusri.github.io/settings/pages"
    echo "2. Ensure 'Source' is set to 'GitHub Actions'"
    echo "3. Wait for the deployment to complete"
    echo "4. Visit https://isurusri.github.io to see your new portfolio!"
else
    echo "❌ Failed to push to GitHub. Please check your git configuration."
    exit 1
fi
