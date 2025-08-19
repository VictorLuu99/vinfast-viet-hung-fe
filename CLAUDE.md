# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**VinFast Việt Hùng Next.js Landing Page** - A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS for a VinFast electric bike dealership with 4 store locations in Vĩnh Phúc and Phú Thọ provinces.

## Technology Stack

### Framework & Language
- **Next.js 14**: App Router with TypeScript
- **React 19**: Functional components with hooks
- **TypeScript**: Type safety throughout the application

### Styling & Design
- **Tailwind CSS 4**: Modern utility-first CSS framework
- **CSS Modules**: Component-specific styles when needed
- **Lexend Deca Font**: VinFast brand typography
- **Responsive Design**: Mobile-first approach

### Performance & SEO
- **Next.js Image**: Optimized image loading
- **Static Generation**: Pre-rendered pages for optimal performance
- **SEO Metadata**: Comprehensive meta tags and structured data
- **Core Web Vitals**: Optimized for Google's performance metrics

## Project Structure

```
vinfast-viethung-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata
│   │   ├── page.tsx                # Main landing page
│   │   ├── globals.css             # Global styles + CSS variables
│   │   └── components/
│   │       ├── Header/
│   │       │   └── Header.tsx      # Navigation with mobile menu
│   │       ├── Hero/
│   │       │   └── Hero.tsx        # Hero section
│   │       ├── Products/
│   │       │   ├── ProductsSection.tsx    # Product grid container
│   │       │   ├── ProductCard.tsx        # Individual product cards
│   │       │   └── CategoryFilter.tsx     # Product filtering tabs
│   │       ├── Stores/
│   │       │   ├── StoresSection.tsx      # Store locations container
│   │       │   └── StoreCard.tsx          # Individual store cards
│   │       ├── Contact/
│   │       │   └── ContactSection.tsx     # Contact information
│   │       └── Footer/
│   │           └── Footer.tsx             # Footer with links
│   ├── lib/
│   │   └── data/
│   │       ├── products.ts         # Product data and utilities
│   │       └── stores.ts           # Store data and utilities
│   └── types/
│       ├── product.ts              # Product type definitions
│       └── store.ts                # Store type definitions
├── public/
│   ├── images/                     # Static image assets
│   │   ├── logo/                   # Brand logos and favicons
│   │   ├── bikes/                  # Product images
│   │   └── icons/                  # UI icons
│   └── [other static files]
├── tailwind.config.ts              # Tailwind configuration
├── next.config.ts                  # Next.js configuration
└── package.json                    # Dependencies and scripts
```

## Common Commands

### Development
```bash
npm run dev           # Start development server on localhost:3000
npm run build         # Create production build
npm run start         # Start production server
npm run lint          # Run ESLint
```

### Quality Assurance
```bash
npm run type-check    # TypeScript type checking
npm run build         # Build verification
```

## Component Architecture

### Client vs Server Components
- **Server Components**: Default for static content and data fetching
- **Client Components**: Used for interactive features (marked with 'use client')
  - Header (navigation, mobile menu)
  - Hero (smooth scroll links)
  - Products (filtering, state management)
  - Stores (interactive buttons)
  - Contact (form interactions)
  - Footer (navigation links)

### Data Management
- **Static Data**: Products and stores defined in TypeScript files
- **Type Safety**: Full TypeScript coverage with interfaces
- **Filtering Logic**: Client-side product filtering by category

## Design System

### Colors (VinFast Brand)
```css
--primary-blue: #1d5b9f    /* Primary brand color */
--accent-pink: #e41886     /* Accent color */
--text-dark: #333333       /* Primary text */
--text-light: #666666      /* Secondary text */
--bg-light: #f6f6f6        /* Light background */
```

### Typography
- **Font**: Lexend Deca (primary), system fallbacks
- **Responsive**: Mobile-first scaling
- **Hierarchy**: Semantic heading structure (h1-h6)

### Components
- **Buttons**: Primary, outline, white variants with hover effects
- **Cards**: Product and store cards with hover animations
- **Navigation**: Fixed header with scroll effects
- **Responsive Grid**: CSS Grid and Flexbox layouts

## Content Structure

### Product Catalog
**13 VinFast E-bike Models** across 3 categories:
- **Cao cấp (Premium)**: 3 models (33-40 million VND)
- **Trung cấp (Mid-range)**: 4 models (26-29 million VND)
- **Phổ thông (Popular)**: 6 models (12-22 million VND)

### Store Locations
**4 Dealership Locations**:
1. Tam Hồng, Yên Lạc, Vĩnh Phúc: `086.266.9588`
2. Phúc Yên, Vĩnh Phúc: `0961.456.515`
3. Thanh Miếu, Việt Trì, Phú Thọ: `0829.912.555`
4. Nông Trang, Việt Trì, Phú Thọ: `036.3822.638`

## SEO & Performance

### Metadata
- **Title**: VinFast Việt Hùng - Đại lý xe máy điện VinFast chính hãng
- **Description**: Comprehensive business description with locations and contact
- **Open Graph**: Social media sharing optimization
- **Structured Data**: LocalBusiness schema for Google Business

### Performance Features
- **Image Optimization**: Next.js Image component with WebP support
- **Lazy Loading**: Below-the-fold content optimization
- **Static Generation**: Pre-rendered pages for fast loading
- **Bundle Optimization**: Code splitting and tree shaking

### Performance Targets
- **Load Time**: <2s on 3G networks
- **Bundle Size**: <300KB initial JavaScript
- **Core Web Vitals**: All metrics in green zone
- **Mobile Performance**: >95 PageSpeed score

## Development Guidelines

### Code Style
- **TypeScript**: Strict mode enabled, full type coverage
- **React**: Functional components with hooks
- **ESLint**: Next.js recommended configuration
- **Naming**: PascalCase for components, camelCase for variables

### Component Guidelines
- **Single Responsibility**: Each component has one clear purpose
- **Props Interface**: All props properly typed with TypeScript
- **Client Directive**: 'use client' only when interactivity required
- **Error Handling**: Graceful degradation for missing data

### Asset Management
- **Images**: Stored in `/public/images/` with descriptive names
- **Optimization**: WebP format preferred, appropriate sizing
- **Alt Text**: Descriptive alt attributes for accessibility

## Interactive Features

### Navigation
- **Smooth Scroll**: Animated scrolling between sections
- **Mobile Menu**: Hamburger menu with overlay
- **Active States**: Visual feedback for current section

### Product Filtering
- **Category Tabs**: Client-side filtering by product category
- **State Management**: React useState for filter state
- **Animation**: Fade-in effects for filtered results

### Contact Integration
- **Click-to-Call**: All phone numbers use `tel:` protocol
- **Email Links**: `mailto:` protocol for email addresses
- **Google Maps**: Integration for store directions

## Browser Support
- **Chrome/Edge**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions (iOS 12+)
- **Mobile**: Android 6+, iOS 12+

## Deployment

### Build Process
1. `npm run build` - Creates optimized production build
2. Static assets automatically optimized
3. TypeScript compilation and type checking
4. ESLint validation

### Hosting Requirements
- **Static Hosting**: Vercel (recommended), Netlify, or similar
- **Node.js**: Not required for static export
- **HTTPS**: Required for production
- **CDN**: Recommended for optimal performance

### Environment Variables
- Set up verification codes for search engines
- Configure analytics tracking if needed
- Update domain-specific metadata

## Maintenance

### Content Updates
- **Products**: Update `src/lib/data/products.ts`
- **Stores**: Update `src/lib/data/stores.ts`
- **Images**: Add to appropriate `/public/images/` subdirectory
- **SEO**: Update metadata in `src/app/layout.tsx`

### Performance Monitoring
- Monitor Core Web Vitals in production
- Use Lighthouse for regular performance audits
- Check mobile usability via Google Search Console

### Security
- Keep dependencies updated
- Regular security audits
- Proper content security policy headers

## Migration Notes

This project was migrated from a vanilla HTML/CSS/JavaScript codebase to Next.js 14 with the following improvements:

### Performance Improvements
- **Bundle Size**: Reduced from ~500KB to <300KB initial
- **Load Time**: Improved from <3s to <2s target
- **Core Web Vitals**: Enhanced through Next.js optimizations

### Developer Experience
- **Type Safety**: Full TypeScript implementation
- **Component Architecture**: Modular, reusable components
- **Build System**: Modern toolchain with hot reload
- **Code Quality**: ESLint, Prettier, and TypeScript integration

### SEO Enhancement
- **Server-Side Rendering**: Better crawlability
- **Metadata API**: Comprehensive meta tag management
- **Structured Data**: Enhanced search engine understanding
- **Performance**: Improved search engine rankings