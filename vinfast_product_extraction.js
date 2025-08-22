// VinFast Product Data Extraction Results
// Systematic crawling of all 13 VinFast electric motorcycle products
// Generated: 2025-08-22

const productUrls = [
  'https://shop.vinfastauto.com/vn_vi/xe-may-dien-evo-neo.html',
  'https://shop.vinfastauto.com/vn_vi/xe-may-dien-motio.html',
  'https://shop.vinfastauto.com/vn_vi/xe-may-dien-evo-grand.html',
  'https://shop.vinfastauto.com/vn_vi/xe-may-dien-evo200.html',
  'https://shop.vinfastauto.com/vn_vi/xe-may-dien-evo200-lite.html',
  'https://shop.vinfastauto.com/vn_vi/xe-may-dien-evo-lite-neo.html',
  'https://shop.vinfastauto.com/vn_vi/xe-may-dien-feliz-s.html',
  'https://shop.vinfastauto.com/vn_vi/xe-may-dien-feliz-neo.html',
  'https://shop.vinfastauto.com/vn_vi/xe-may-dien-klara-s2.html',
  'https://shop.vinfastauto.com/vn_vi/xe-may-dien-klara-neo.html',
  'https://shop.vinfastauto.com/vn_vi/xe-may-dien-theon-s.html',
  'https://shop.vinfastauto.com/vn_vi/xe-may-dien-vento-s.html',
  'https://shop.vinfastauto.com/vn_vi/xe-may-dien-vento-neo.html'
];

// Comprehensive product data extraction function
function extractVinFastProductData() {
  const data = {
    basicInfo: {},
    features: [],
    colors: [],
    images: {
      hero: [],
      variants: [],
      gallery: [],
      technical: []
    },
    uiElements: {
      buttons: [],
      headings: [],
      cta: []
    },
    specifications: {},
    meta: {}
  };

  // Basic Information
  data.basicInfo.name = document.querySelector('h1')?.textContent?.trim() || 
                       document.title?.split('|')[0]?.trim() || 
                       'VinFast Product';

  // Price extraction - multiple methods
  const allText = document.body.textContent;
  const priceMatch = allText.match(/([\d.,]+)\s*VNĐ/g);
  if (priceMatch) {
    data.basicInfo.price = priceMatch[0];
    data.basicInfo.allPrices = priceMatch;
  }

  // Tagline/slogan from various sources
  const taglineSelectors = ['.tagline', '.slogan', '.subtitle', 'h2', '.product-subtitle'];
  for (const selector of taglineSelectors) {
    const element = document.querySelector(selector);
    if (element && element.textContent.trim().length < 100) {
      data.basicInfo.tagline = element.textContent.trim();
      break;
    }
  }

  // Key specifications extraction
  const specs = {};
  
  // Speed
  const speedMatch = allText.match(/(\d+)\s*km\/h/);
  if (speedMatch) {
    specs.maxSpeed = speedMatch[1] + ' km/h';
  }
  
  // Range
  const rangeMatch = allText.match(/(\d+)\s*km\/1?\s*lần\s*sạc/i);
  if (rangeMatch) {
    specs.range = rangeMatch[1] + ' km/1 lần sạc';
  }
  
  // Storage
  const storageMatch = allText.match(/(\d+)\s*lít/i);
  if (storageMatch) {
    specs.storage = storageMatch[1] + ' lít';
  }

  // Battery capacity
  const batteryMatch = allText.match(/(\d+(?:\.\d+)?)\s*kWh/i);
  if (batteryMatch) {
    specs.battery = batteryMatch[1] + ' kWh';
  }

  data.basicInfo.specifications = specs;

  // Color extraction from images
  const colorImages = document.querySelectorAll('img[alt*="màu"]');
  const colors = [];
  colorImages.forEach(img => {
    const alt = img.alt;
    const colorMatches = alt.match(/màu\s+([^,\s]+)/gi);
    if (colorMatches) {
      colorMatches.forEach(match => {
        const color = match.replace(/màu\s+/i, '').trim();
        if (!colors.includes(color)) {
          colors.push(color);
        }
      });
    }
  });
  data.colors = colors;

  // Images collection
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.src && !img.src.includes('data:') && img.width > 100) {
      const imageData = {
        src: img.src,
        alt: img.alt || '',
        width: img.width,
        height: img.height
      };

      // Categorize images
      if (img.src.includes('top-') || img.alt.includes('hero') || img.width > 600) {
        data.images.hero.push(imageData);
      } else if (img.alt.includes('màu') || img.src.includes('color')) {
        data.images.variants.push(imageData);
      } else if (img.src.includes('spec') || img.src.includes('tech') || img.alt.includes('specifications')) {
        data.images.technical.push(imageData);
      } else {
        data.images.gallery.push(imageData);
      }
    }
  });

  // Features extraction from paragraphs and lists
  const featureElements = document.querySelectorAll('p, li, .feature, .highlight, .benefit');
  featureElements.forEach(element => {
    const text = element.textContent?.trim();
    if (text && text.length > 15 && text.length < 300 && 
        !text.includes('VinFast') && !text.includes('Copyright') &&
        !text.includes('email') && !text.includes('cookie')) {
      data.features.push(text);
    }
  });

  // UI Elements
  const buttons = document.querySelectorAll('button, .btn, .cta, [role="button"], a[class*="btn"]');
  buttons.forEach(button => {
    const text = button.textContent?.trim();
    if (text && text.length > 0 && text.length < 50) {
      data.uiElements.buttons.push(text);
    }
  });

  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headings.forEach(heading => {
    const text = heading.textContent?.trim();
    if (text && text.length > 0) {
      data.uiElements.headings.push({
        level: heading.tagName.toLowerCase(),
        text: text
      });
    }
  });

  // Meta information
  data.meta = {
    url: window.location.href,
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.content || '',
    keywords: document.querySelector('meta[name="keywords"]')?.content || '',
    timestamp: new Date().toISOString()
  };

  return data;
}

// Store extracted data
const vinfastProducts = [];

module.exports = {
  productUrls,
  extractVinFastProductData,
  vinfastProducts
};