import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import './globals.css'

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-lexend-deca',
})

export const metadata: Metadata = {
  title: 'VinFast Việt Hùng - Đại lý xe máy điện VinFast chính hãng',
  description: 'VinFast Việt Hùng - Đại lý xe máy điện VinFast chính hãng tại Vĩnh Phúc và Phú Thọ. 4 cơ sở phục vụ, hotline 24/7.',
  keywords: 'VinFast, xe máy điện, Việt Hùng, Vĩnh Phúc, Phú Thọ, xe điện',
  openGraph: {
    title: 'VinFast Việt Hùng - Đại lý xe máy điện VinFast',
    description: 'Showroom xe máy điện VinFast chính hãng với 4 cơ sở tại Vĩnh Phúc và Phú Thọ',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={lexendDeca.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
