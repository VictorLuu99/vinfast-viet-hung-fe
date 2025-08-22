# VinFast Electric Motorcycle Data Extraction Summary

## Extraction Overview

**Date**: August 22, 2025  
**Total Products**: 13 VinFast electric motorcycle models  
**Method**: Systematic web crawling using Puppeteer  
**Data Source**: https://shop.vinfastauto.com/  

## Completed Extractions (5/13)

### 1. VinFast Evo Neo
- **URL**: https://shop.vinfastauto.com/vn_vi/xe-may-dien-evo-neo.html
- **Price**: 17.800.000 VNĐ
- **Key Specs**: 60 km/h, 117 km range, 17L storage
- **Colors**: 5 options (đen, xanh tím, trắng, xanh lá, đỏ)
- **Features**: 2 driving modes, LFP battery, IP67 water resistance

### 2. VinFast Motio
- **URL**: https://shop.vinfastauto.com/vn_vi/xe-may-dien-motio.html
- **Price**: 12.000.000 VNĐ
- **Key Specs**: 49 km/h, 82 km range, 22L storage
- **Colors**: 5 options (hồng, đen, trắng, đỏ, vàng)
- **Features**: Compact design, hydraulic suspension, 1500W motor

### 3. VinFast Evo Grand
- **URL**: https://shop.vinfastauto.com/vn_vi/xe-may-dien-evo-grand.html
- **Price**: 21.000.000 VNĐ (was 18.000.000 VNĐ)
- **Key Specs**: 70 km/h, 262 km range, 35L storage
- **Features**: Dual battery upgrade, 4 kWh capacity, premium features

### 4. VinFast Evo 200
- **URL**: https://shop.vinfastauto.com/vn_vi/xe-may-dien-evo200.html
- **Price**: 22.000.000 VNĐ
- **Key Specs**: 70 km/h, 203 km range, 22L storage
- **Features**: High-end electric motorcycle

### 5. VinFast Klara S2
- **URL**: https://shop.vinfastauto.com/vn_vi/xe-may-dien-klara-s2.html
- **Price**: 150.000 VNĐ (likely promotional/deposit price)
- **Key Specs**: 78 km/h, 194 km range, 23L storage
- **Colors**: 4 options (trắng, đỏ, đen, xanh)

## Remaining Products to Extract (8/13)

### Pending Extractions:
1. **Evo 200 Lite** - https://shop.vinfastauto.com/vn_vi/xe-may-dien-evo200-lite.html
2. **Evo Lite Neo** - https://shop.vinfastauto.com/vn_vi/xe-may-dien-evo-lite-neo.html
3. **Feliz S** - https://shop.vinfastauto.com/vn_vi/xe-may-dien-feliz-s.html
4. **Feliz Neo** - https://shop.vinfastauto.com/vn_vi/xe-may-dien-feliz-neo.html
5. **Klara Neo** - https://shop.vinfastauto.com/vn_vi/xe-may-dien-klara-neo.html
6. **Theon S** - https://shop.vinfastauto.com/vn_vi/xe-may-dien-theon-s.html
7. **Vento S** - https://shop.vinfastauto.com/vn_vi/xe-may-dien-vento-s.html
8. **Vento Neo** - https://shop.vinfastauto.com/vn_vi/xe-may-dien-vento-neo.html

## Extracted Data Structure

### Basic Information
- Product name and display name
- Pricing (current and original if discounted)
- Product category and positioning
- Tagline/marketing message

### Technical Specifications
- Maximum speed (km/h)
- Range per charge (km)
- Storage capacity (liters)
- Battery type and capacity
- Motor specifications
- Charging time and method

### Visual Assets
- Hero images (main product shots)
- Color variant images
- Technical specification images
- Gallery images for features

### Features & Benefits
- Key selling points
- Technology features
- Design highlights
- Performance characteristics

### Colors & Variants
- Available color options
- Color-specific product images
- Variant naming conventions

### UI/UX Elements
- Call-to-action buttons
- Section headings
- Marketing copy
- User interface patterns

## Data Quality Assessment

### Successful Extractions
- ✅ Product names and pricing
- ✅ Technical specifications (speed, range, storage)
- ✅ Color variations and images
- ✅ Feature descriptions
- ✅ Hero and variant images
- ✅ Meta information (URLs, titles, descriptions)

### Challenges Identified
- Some product pages may have different layouts
- Price extraction requires careful parsing due to formatting variations
- Color information primarily extracted from image alt text
- Feature descriptions need filtering to remove navigation/footer content

## Image Asset Categories

### 1. Hero Images
- Main product showcase images
- High resolution (typically 765x435 or larger)
- Professional product photography

### 2. Color Variant Images
- Product images showing different color options
- Consistent format and sizing
- Usually 416x237 resolution

### 3. Technical Images
- Specification illustrations
- Feature highlight images
- Technical diagrams

### 4. Gallery Images
- Supporting product images
- Feature detail shots
- Lifestyle/context images

## Pricing Analysis

### Price Range
- **Lowest**: 150.000 VNĐ (Klara S2 - likely promotional)
- **Highest**: 22.000.000 VNĐ (Evo 200)
- **Most Common Range**: 12M - 22M VNĐ

### Price Categories
- **Economy**: 12M - 15M VNĐ (Motio)
- **Mid-range**: 16M - 18M VNĐ (Evo Neo)
- **Premium**: 20M - 22M VNĐ (Evo Grand, Evo 200)

## Technical Specifications Summary

### Speed Range
- **Entry Level**: 49 km/h (Motio)
- **Mid-range**: 60-70 km/h (Most models)
- **High Performance**: 78 km/h (Klara S2)

### Range Capabilities
- **Short Range**: 82 km (Motio)
- **Standard Range**: 117-203 km (Most models)  
- **Long Range**: 262 km (Evo Grand)

### Storage Capacity
- **Compact**: 17-22 liters (Most models)
- **Large**: 35 liters (Evo Grand)

## Next Steps for Complete Dataset

1. **Process remaining 8 products** using the established extraction framework
2. **Standardize data format** across all products
3. **Validate technical specifications** for accuracy
4. **Optimize image URLs** and verify accessibility
5. **Create structured database schema** for production use

## Files Generated

1. `vinfast_product_extraction.js` - Extraction framework and utilities
2. `vinfast_comprehensive_product_data.json` - Structured product data
3. `VINFAST_EXTRACTION_SUMMARY.md` - This summary document

## Production Integration Notes

The extracted data is structured to integrate seamlessly with the existing product database format in `/src/lib/data/products.ts`. The JSON structure includes all necessary fields for:

- Product display pages
- Category filtering
- Price comparisons
- Feature comparisons
- Image galleries
- Technical specifications
- Color variants

All image URLs are official VinFast CDN links ensuring reliability and performance for production use.