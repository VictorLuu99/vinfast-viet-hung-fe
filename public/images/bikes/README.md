# VinFast Bike Images

## Current Placeholder Images

All images are SVG format for scalability and fast loading:

### Hero Section
- `vinfast-hero-bike.svg` - Main hero image for landing page

### Product Gallery
- `vinfast-klara.svg` - VinFast Klara model (80km range, 3h charging)
- `vinfast-ludo.svg` - VinFast Ludo model (60km range, removable battery) 
- `vinfast-impes.svg` - VinFast Impes model (90km range, premium features)

## Replacement Instructions

To replace with actual VinFast images:

1. **Download official images** from VinFast media kit or website
2. **Optimize for web**:
   - Format: WebP (preferred) or JPEG
   - Size: Max 800px width for product images, 1200px for hero
   - Compression: 80-85% quality
   - Alt text: Include in HTML

3. **Update HTML references** in `index.html`:
   ```html
   <!-- Change these src attributes -->
   <img src="images/bikes/vinfast-hero-bike.jpg" alt="Xe máy điện VinFast">
   <img src="images/bikes/vinfast-klara.jpg" alt="VinFast Klara">
   <img src="images/bikes/vinfast-ludo.jpg" alt="VinFast Ludo">  
   <img src="images/bikes/vinfast-impes.jpg" alt="VinFast Impes">
   ```

4. **Add lazy loading** attributes for performance:
   ```html
   <img src="images/bikes/vinfast-klara.jpg" 
        alt="VinFast Klara" 
        loading="lazy"
        width="400" 
        height="300">
   ```

## Image Requirements

- **Hero Image**: 1200x800px, lifestyle shot showing bike in use
- **Product Images**: 800x600px, clean product shots with transparent or white background
- **File Size**: <200KB per image optimized
- **Format**: WebP preferred, JPEG fallback

## Official VinFast Resources

- VinFast Media Center: https://vinfastauto.com/vn_vi/press
- Product Gallery: https://shop.vinfastauto.com/vn_vi
- Technical Specifications: Available on official product pages

## Brand Guidelines

- Use official VinFast product photography when available
- Maintain brand color consistency (#1d5b9f, #e41886)  
- Include proper attribution if using official VinFast images
- Ensure all images show Vietnamese market models and specifications