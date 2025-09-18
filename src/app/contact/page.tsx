import type { Metadata } from 'next';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { HeroSection } from '../components/shared/HeroSection';
import { ContactSection } from '../components/Contact/ContactSection';
import { ContactForm } from '../components/Contact/ContactForm';
import { StoresSection } from '../components/Stores/StoresSection';
import { GoogleMapsEmbed } from '../components/Maps/GoogleMapsEmbed';

export const metadata: Metadata = {
  title: 'Liên hệ - VinFast Việt Hùng | Đại lý xe điện VinFast',
  description: 'Liên hệ với VinFast Việt Hùng - đại lý xe điện VinFast chính hãng. 4 cơ sở tại Vĩnh Phúc và Phú Thọ. Hotline 24/7, tư vấn miễn phí.',
  keywords: 'liên hệ VinFast, VinFast Việt Hùng, đại lý VinFast, tư vấn xe điện, Vĩnh Phúc, Phú Thọ',
  openGraph: {
    title: 'Liên hệ - VinFast Việt Hùng',
    description: 'Liên hệ với đại lý xe điện VinFast chính hãng tại Vĩnh Phúc và Phú Thọ',
    type: 'website',
    locale: 'vi_VN',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      {/* <HeroSection
        title="Liên hệ với chúng tôi"
        description="VinFast Việt Hùng luôn sẵn sàng hỗ trợ và tư vấn mọi thắc mắc của bạn về xe điện VinFast"
      /> */}

      {/* Quick Contact Info */}
      <ContactSection />

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Google Maps Embed */}
              <GoogleMapsEmbed />

              {/* Why Choose Us */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Tại sao chọn VinFast Việt Hùng?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Đại lý chính hãng</h4>
                      <p className="text-gray-600 text-sm">Ủy quyền chính thức từ VinFast</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">4 cơ sở</h4>
                      <p className="text-gray-600 text-sm">Phục vụ tại Vĩnh Phúc và Phú Thọ</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hỗ trợ 24/7</h4>
                      <p className="text-gray-600 text-sm">Tư vấn và chăm sóc khách hàng</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dịch vụ toàn diện</h4>
                      <p className="text-gray-600 text-sm">Từ tư vấn đến bảo hành, sửa chữa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">🚨 Hỗ trợ khẩn cấp</h3>
                <p className="mb-4 opacity-90">
                  Gặp sự cố cần hỗ trợ gấp? Liên hệ ngay:
                </p>
                <a
                  href="tel:02838649999"
                  className="inline-flex items-center bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                >
                  📞 028 3864 9999
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <StoresSection />

      <Footer />
      </div>
    </>
  );
}