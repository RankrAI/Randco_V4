# R&Co Events - Luxury Balloon Decor Website

A premium website for R&Co Events, specializing in luxury balloon decor and bespoke event design throughout the Greater Toronto Area.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading with lazy loading and code splitting
- **Image Optimization**: Compressed images with WebP support and CDN integration
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG compliant design
- **Modern Stack**: Built with React, TypeScript, and Tailwind CSS

## Services Showcased

- Baby Showers
- Birthday Celebrations
- Bridal Showers
- Corporate Events
- Holiday Celebrations

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Netlify
- **Image Optimization**: Custom optimization utilities with CDN support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/rco-events-website.git
cd rco-events-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Image Optimization

### Analyzing Images
```bash
npm run optimize-images
```

### Generating Image Manifest
```bash
npm run generate-manifest
```

### CDN Setup (Optional)
1. Set up a CDN account (Cloudinary, ImageKit, etc.)
2. Add your CDN URL to environment variables:
```bash
VITE_CDN_URL=https://your-cdn-domain.com
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Automatic Deployment to Netlify

This site is configured for automatic deployment to Netlify when changes are pushed to the main branch.

### Manual Deployment to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Set the publish directory to `dist`

### Image Optimization for Deployment

**Option 1: Keep Images in Repository (Current)**
- Images are automatically optimized during build
- Uses lazy loading and WebP format when supported
- Total size: ~15-20MB (estimated)

**Option 2: External CDN Hosting (Recommended for Production)**
1. Upload images to a CDN (Cloudinary, ImageKit, AWS S3 + CloudFront)
2. Set `VITE_CDN_URL` environment variable
3. Images will be served from CDN with automatic optimization

**Option 3: Netlify Large Media**
1. Enable Netlify Large Media for your site
2. Images are automatically optimized and served via CDN
3. Reduces repository size significantly

## Performance Features

- Lazy loading for images and components
- Code splitting for optimal bundle sizes
- Optimized images with WebP support
- CDN integration ready
- Minimal JavaScript for fast loading
- Image compression and optimization utilities

## SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data for local business
- Semantic HTML structure
- Optimized URLs and navigation
- Image optimization for faster loading

## Image Management

### Current Structure
```
public/
├── Logo_Simple.png
├── Baby-Showers/
├── Birthdays/
├── Bridal-Showers/
├── Corporate/
└── Holidays/
```

### Optimization Recommendations
1. **Compress JPEG quality to 80-85%** (currently varies)
2. **Convert to WebP format** (25-35% smaller files)
3. **Resize to max 1920px width** for hero images
4. **Use responsive images** with multiple sizes
5. **Implement CDN** for global delivery

## Contact

For questions about this website, contact:
- Email: info@randcoevents.ca
- Phone: (647) 938-1555
- Website: [randcoevents.ca](https://randcoevents.ca)

## License

© 2025 R&Co Events. All rights reserved.