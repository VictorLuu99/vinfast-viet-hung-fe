import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  subsets: ["latin", "vietnamese"],
  variable: "--font-lexend-deca",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "VinFast Việt Hùng - Đại lý xe máy điện VinFast chính hãng",
  description: "VinFast Việt Hùng - Đại lý xe máy điện VinFast chính hãng tại Vĩnh Phúc và Phú Thọ. 4 cơ sở phục vụ, 13 mẫu xe đa dạng từ 12-40 triệu. Hotline 24/7: 086.266.9588",
  keywords: "VinFast, xe máy điện, Việt Hùng, Vĩnh Phúc, Phú Thọ, xe điện, đại lý chính hãng",
  authors: [{ name: "VinFast Việt Hùng" }],
  creator: "VinFast Việt Hùng",
  publisher: "VinFast Việt Hùng",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vinfastviethung.vn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "VinFast Việt Hùng - Đại lý xe máy điện VinFast chính hãng",
    description: "Showroom xe máy điện VinFast chính hãng với 4 cơ sở tại Vĩnh Phúc và Phú Thọ. 13 mẫu xe đa dạng, bảo hành 24 tháng, hỗ trợ 24/7.",
    url: 'https://vinfastviethung.vn',
    siteName: 'VinFast Việt Hùng',
    images: [
      {
        url: '/images/bikes/vinfast-hero-official.webp',
        width: 1200,
        height: 630,
        alt: 'VinFast Việt Hùng - Xe máy điện chính hãng',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VinFast Việt Hùng - Đại lý xe máy điện VinFast chính hãng",
    description: "4 cơ sở tại Vĩnh Phúc và Phú Thọ. 13 mẫu xe từ 12-40 triệu. Hotline: 086.266.9588",
    images: ['/images/bikes/vinfast-hero-official.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/logo/logo_vinfast_viet_hung.ico" />
        <link rel="apple-touch-icon" href="/images/logo/vinfast-logo.png" />
        <meta name="theme-color" content="#1d5b9f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VinFast Việt Hùng",
              "description": "Đại lý xe máy điện VinFast chính hãng",
              "url": "https://vinfastviethung.vn",
              "telephone": "+84862669588",
              "email": "info@vinfastviethung.vn",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Tam Hồng",
                  "addressLocality": "Yên Lạc",
                  "addressRegion": "Vĩnh Phúc",
                  "addressCountry": "VN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "337 Hai Bà Trưng, Tiền Châu",
                  "addressLocality": "Phúc Yên",
                  "addressRegion": "Vĩnh Phúc",
                  "addressCountry": "VN"
                }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "21.325",
                "longitude": "105.615"
              },
              "openingHours": "Mo-Su 08:00-18:00",
              "priceRange": "12000000-40000000 VND",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "currenciesAccepted": "VND",
              "logo": "/images/logo/vinfast-viethung-logo.png",
              "image": "/images/bikes/vinfast-hero-official.webp",
              "sameAs": [
                "https://www.vinfast.vn"
              ]
            })
          }}
        />
      </head>
      <body className={`${lexendDeca.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}