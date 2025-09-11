#!/bin/bash

# Script to merge Next.js portfolio to main branch
echo "🔄 Merging Next.js portfolio to main branch..."

# Switch to main branch
echo "📋 Switching to main branch..."
git checkout main

# Pull latest changes
echo "⬇️ Pulling latest changes..."
git pull origin main

# Merge the nextjs-portfolio branch
echo "🔀 Merging nextjs-portfolio branch..."
git merge nextjs-portfolio --no-ff -m "Replace Vite portfolio with Next.js portfolio

- Modern Next.js 15 with App Router
- Responsive design with Tailwind CSS
- Framer Motion animations
- Contact form with EmailJS integration
- SEO optimized with sitemap
- PWA ready
- Production optimized
- GitHub Pages deployment ready"

# Push to main
echo "🚀 Pushing to main branch..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully merged Next.js portfolio to main!"
    echo "🌐 GitHub Actions will now deploy your new portfolio"
    echo "⏳ Check the Actions tab: https://github.com/isurusri/isurusri.github.io/actions"
    echo "🌍 Your portfolio will be live at: https://isurusri.github.io"
    
    # Clean up the feature branch
    echo "🧹 Cleaning up feature branch..."
    git branch -d nextjs-portfolio
    git push origin --delete nextjs-portfolio
    
    echo "🎉 Portfolio deployment complete!"
else
    echo "❌ Failed to push to main. Please check for conflicts."
    exit 1
fi
