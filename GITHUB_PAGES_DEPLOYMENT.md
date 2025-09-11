# 🚀 GitHub Pages Deployment Guide

## Overview
This guide will help you deploy your Next.js portfolio to GitHub Pages, replacing your existing Vite-based portfolio at [https://isurusri.github.io](https://isurusri.github.io).

## Prerequisites
- GitHub account with the repository `isurusri/isurusri.github.io`
- Local development environment set up
- Git configured with your GitHub credentials

## Step-by-Step Deployment

### 1. Prepare Your Repository

```bash
# Initialize git if not already done
git init

# Add your GitHub repository as remote
git remote add origin https://github.com/isurusri/isurusri.github.io.git

# Add all files
git add .

# Commit your changes
git commit -m "Deploy new Next.js portfolio to GitHub Pages"

# Push to main branch
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository: [https://github.com/isurusri/isurusri.github.io](https://github.com/isurusri/isurusri.github.io)
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. Configure GitHub Actions

The repository already includes the GitHub Actions workflow (`.github/workflows/github-pages.yml`) that will:
- Build your Next.js application
- Generate static files
- Deploy to GitHub Pages automatically

### 4. Environment Variables (Optional)

If you want to use EmailJS for the contact form, add these secrets in your repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add these repository secrets:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### 5. Deploy

Once you push to the `main` branch, GitHub Actions will automatically:
1. Build your portfolio
2. Generate static files in the `out` directory
3. Deploy to GitHub Pages

You can monitor the deployment in the **Actions** tab of your repository.

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the static files
npm run build

# The files will be in the 'out' directory
# You can then push the 'out' directory contents to a 'gh-pages' branch
```

## Configuration Details

### Static Export Configuration
- **Output**: Static files in `out` directory
- **Images**: Unoptimized (required for static export)
- **Trailing Slash**: Enabled for GitHub Pages compatibility

### GitHub Pages Settings
- **Source**: GitHub Actions
- **Custom Domain**: Optional (you can add your own domain later)
- **HTTPS**: Automatically enabled

## Troubleshooting

### Common Issues

1. **404 Errors on Refresh**
   - This is normal for single-page applications
   - GitHub Pages serves static files, so client-side routing works

2. **Images Not Loading**
   - Ensure all images are in the `public` directory
   - Check that image paths are correct

3. **Contact Form Not Working**
   - Set up EmailJS environment variables
   - Or the form will fallback to opening email client

4. **Build Failures**
   - Check the Actions tab for error details
   - Ensure all dependencies are in `package.json`

### Verification

After deployment, verify:
- [ ] Site loads at https://isurusri.github.io
- [ ] All pages are accessible
- [ ] Images load correctly
- [ ] Contact form works (or falls back to email)
- [ ] Mobile responsive
- [ ] SEO meta tags working

## Performance

Your portfolio will have:
- **Fast Loading**: Static files with CDN
- **SEO Optimized**: Meta tags and sitemap
- **Mobile Ready**: Responsive design
- **PWA Support**: Can be installed as an app

## Custom Domain (Optional)

To use a custom domain:
1. Add your domain to the repository settings
2. Update DNS records to point to GitHub Pages
3. Update `next-sitemap.config.js` with your domain
4. Update `robots.txt` with your domain

## Maintenance

- **Automatic Updates**: Push to main branch triggers deployment
- **Monitoring**: Check Actions tab for deployment status
- **Backup**: Your code is safely stored in GitHub

---

**Your portfolio will be live at: https://isurusri.github.io** 🎉

The deployment process is fully automated - just push your code and GitHub Actions will handle the rest!
