# VinFast Việt Hùng - Next.js Landing Page

A modern, responsive landing page for VinFast Việt Hùng dealership built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with perfect cross-device compatibility
- **13 Product Models**: Complete VinFast e-bike catalog with category filtering
- **4 Store Locations**: Interactive store cards with contact information
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **SEO Ready**: Proper meta tags, structured data, and Vietnamese language support
- **Cloudflare Pages Ready**: Configured for deployment on Cloudflare Pages

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Deployment**: Cloudflare Pages
- **Build Tool**: Next.js build system
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header/          # Navigation component
│   │   ├── Hero/            # Hero section
│   │   ├── Products/        # Product grid with filtering
│   │   ├── Stores/          # Store locations
│   │   ├── Contact/         # Contact information
│   │   └── Footer/          # Company footer
│   ├── lib/
│   │   └── data/            # Product and store data
│   └── types/               # TypeScript interfaces
├── public/
│   └── images/              # All assets (bikes, logos, icons)
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run start
```

## 🌐 Deployment to Cloudflare Pages

### Prerequisites
- Cloudflare account with Pages access
- Wrangler CLI installed

### Setup Wrangler
```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Create Cloudflare Pages project
wrangler pages project create vinfast-viethung
```

### Deploy
```bash
# Build and deploy
npm run deploy

# Or deploy with preview
npm run deploy:preview
```

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy out
```

## 📱 Product Catalog

### Categories
- **Cao cấp (Premium)**: 3 models (33-40 million VND)
- **Trung cấp (Mid-range)**: 4 models (26-29 million VND)
- **Phổ thông (Popular)**: 6 models (12-22 million VND)

### Total: 13 VinFast E-bike Models
- VinFast Theon S (40M VND)
- VinFast Vento S (36.5M VND)
- VinFast Feliz S (33.5M VND)
- VinFast Vento Neo (29M VND)
- VinFast Feliz Neo (28.9M VND)
- VinFast Klara S2 (26.5M VND)
- VinFast Klara Neo (27.9M VND)
- VinFast Evo Grand (22M VND)
- VinFast Evo200 (21M VND)
- VinFast Evo Neo (20M VND)
- VinFast Evo200 Lite (19M VND)
- VinFast Evo Lite Neo (17.5M VND)
- VinFast Motio (12M VND)

## 🏪 Store Locations

### 4 Dealership Locations
1. **VinFast Việt Hùng - Vĩnh Phúc** (Vĩnh Yên)
2. **VinFast Việt Hùng - Phú Thọ** (Việt Trì)
3. **VinFast Việt Hùng - Vĩnh Phúc 2** (Phúc Yên)
4. **VinFast Việt Hùng - Phú Thọ 2** (Phú Thọ)

## 🎨 Design System

### Colors
- **Primary Blue**: #1d5b9f
- **Accent Pink**: #e41886
- **Text Dark**: #333333
- **Text Light**: #666666
- **Background Light**: #f6f6f6

### Typography
- **Font Family**: Lexend Deca
- **Weights**: 300, 400, 500, 600, 700

### Spacing
- **Container Max Width**: 1200px
- **Header Height**: 60px
- **Responsive Breakpoints**: Mobile-first approach

## 📊 Performance Metrics

- **Build Time**: <3 minutes
- **Bundle Size**: <300KB initial JavaScript
- **PageSpeed Target**: >95 (mobile & desktop)
- **Core Web Vitals**: All metrics in green zone

## 🔧 Configuration Files

### Next.js Config (`next.config.ts`)
```typescript
{
  output: 'export',           // Static export for Cloudflare Pages
  trailingSlash: true,        // SEO friendly URLs
  images: { unoptimized: true }, // Required for static export
}
```

### Tailwind Config (`tailwind.config.ts`)
- Custom color palette
- Extended spacing system
- Responsive breakpoints
- Custom font families

### Wrangler Config (`wrangler.toml`)
- Cloudflare Pages deployment
- Performance headers
- Cache optimization
- Security headers

## 📝 Available Scripts

```json
{
  "dev": "next dev",                    // Development server
  "build": "next build",                // Production build
  "start": "next start",                // Preview production build
  "lint": "next lint",                  // Code linting
  "export": "next build && next export", // Static export
  "deploy": "npm run build && wrangler pages deploy out", // Deploy to Cloudflare
  "deploy:preview": "npm run build && wrangler pages deploy out --preview" // Preview deployment
}
```

## 🌍 SEO & Accessibility

- **Language**: Vietnamese (vi)
- **Meta Tags**: Complete Open Graph and meta descriptions
- **Structured Data**: Local business schema
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: All images have descriptive alt text
- **Keyboard Navigation**: Full keyboard accessibility

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 640px, 768px, 1024px, 1280px
- **Touch Friendly**: Optimized for touch interactions
- **Mobile Menu**: Hamburger menu for mobile navigation

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Monitoring & Analytics

- **Cloudflare Analytics**: Built-in performance monitoring
- **Core Web Vitals**: Performance metrics tracking
- **Error Tracking**: Built-in error monitoring
- **Real User Monitoring**: User experience tracking

## 🚀 Future Enhancements

- [ ] Product detail pages
- [ ] Interactive maps for store locations
- [ ] Online booking system
- [ ] Customer reviews and ratings
- [ ] Multi-language support
- [ ] Advanced filtering and search
- [ ] E-commerce integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- **Hotline**: 086.266.9588
- **Email**: vinfastviethung@gmail.com
- **Website**: [vinfastviethung.vn](https://vinfastviethung.vn)

---

**Built with ❤️ by VinFast Việt Hùng Team**
