# Isuru Abeykoon - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases professional projects, skills, and provides a seamless contact experience.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **SEO Ready**: Comprehensive meta tags, sitemap, and structured data
- **PWA Support**: Progressive Web App capabilities
- **Contact Form**: Functional contact form with EmailJS integration
- **Accessibility**: WCAG compliant with proper ARIA labels
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/isurusri/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

## 🏗️ Production Build

### Quick Production Build
```bash
npm run build:production
```

### Manual Production Steps
```bash
# Install dependencies
npm ci --only=production

# Run linting and type checking
npm run lint
npm run type-check

# Build the application
npm run build

# Generate sitemap
npm run postbuild

# Start production server
npm start
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Set environment variables in Netlify dashboard

### Docker
```dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with code splitting
- **Images**: WebP/AVIF format with responsive sizing

## 🔧 Configuration

### Environment Variables
- `NEXT_PUBLIC_SITE_URL`: Your website URL
- `NEXT_PUBLIC_EMAILJS_*`: EmailJS configuration
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID (optional)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: Google Search Console verification

### Customization
- **Colors**: Update CSS variables in `globals.css`
- **Content**: Modify components in `src/components/`
- **Images**: Replace images in `public/images/`
- **SEO**: Update metadata in `layout.tsx`

## 📱 PWA Features

- **Installable**: Add to home screen on mobile devices
- **Offline Support**: Basic offline functionality
- **App-like Experience**: Standalone display mode
- **Manifest**: Custom app manifest for branding

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: Rich snippets for search results

## 🛡️ Security

- **Security Headers**: XSS protection, content type sniffing prevention
- **CSP**: Content Security Policy implementation
- **HTTPS**: SSL/TLS encryption
- **Input Validation**: Form input sanitization

## 📈 Analytics

- **Google Analytics**: Built-in GA4 support
- **Performance Monitoring**: Core Web Vitals tracking
- **Error Tracking**: Client-side error monitoring

## 🧪 Testing

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Build analysis
npm run analyze
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/          # Images and assets
│   ├── manifest.json    # PWA manifest
│   └── robots.txt       # SEO robots file
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   └── not-found.tsx # 404 page
│   └── components/     # React components
│       ├── sections/   # Page sections
│       └── ui/         # Reusable UI components
├── scripts/            # Build and deployment scripts
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: isuru.srimal258@gmail.com
- **GitHub**: [@isurusri](https://github.com/isurusri)
- **LinkedIn**: [Isuru Abeykoon](https://www.linkedin.com/in/isuru-abeykoon-sri1996/)
- **Portfolio**: [Your Website URL]

---

Built with ❤️ by Isuru Abeykoon