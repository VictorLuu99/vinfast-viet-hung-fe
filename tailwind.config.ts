import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // VinFast Brand Colors
        'primary-blue': '#1d5b9f',
        'accent-pink': '#e41886',
        'text-dark': '#333333',
        'text-light': '#666666',
        'bg-light': '#f6f6f6',
        
        // Extended Color Palette
        gray: {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        
        // Custom Colors for Badges
        premium: '#1d5b9f',
        performance: '#0d6efd',
        smart: '#198754',
        popular: '#fd7e14',
        budget: '#6f42c1',
        entry: '#20c997',
      },
      fontFamily: {
        sans: ['Lexend Deca', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
      },
      maxWidth: {
        'container': '1200px',
      },
      height: {
        'header': '60px',
      },
      borderRadius: {
        'DEFAULT': '8px',
        'lg': '12px',
      },
      boxShadow: {
        'DEFAULT': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'lg': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'xl': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        'fast': '0.15s',
        'base': '0.3s',
        'slow': '0.5s',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config