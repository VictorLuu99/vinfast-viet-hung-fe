import React from 'react';
import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/shared/HeroSection';
import { Footer } from '../components/Footer/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <HeroSection
          title="Về VinFast Việt Hùng"
          description="Đại lý chính hãng xe điện VinFast tại Vĩnh Phúc và Phú Thọ"
        />

        {/* Company Introduction */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Giới thiệu công ty
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  VinFast Việt Hùng là đại lý chính hãng xe máy điện VinFast được ủy quyền tại khu vực Vĩnh Phúc và Phú Thọ. 
                  Chúng tôi tự hào là cầu nối giữa thương hiệu VinFast uy tín với khách hàng tại địa phương.
                </p>
                <p className="text-gray-600 mb-6">
                  Với sứ mệnh mang đến những sản phẩm xe máy điện chất lượng cao, công nghệ tiên tiến và dịch vụ hậu mãi tốt nhất, 
                  chúng tôi cam kết đồng hành cùng khách hàng trong hành trình chuyển đổi sang phương tiện giao thông xanh, 
                  góp phần bảo vệ môi trường và phát triển bền vững.
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-blue-600 text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Tầm nhìn</h3>
                <p className="text-gray-600">
                  Trở thành đại lý hàng đầu về xe máy điện VinFast tại khu vực Vĩnh Phúc và Phú Thọ, 
                  được khách hàng tin tưởng và lựa chọn.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-blue-600 text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Sứ mệnh</h3>
                <p className="text-gray-600">
                  Cung cấp sản phẩm chất lượng cao, dịch vụ chuyên nghiệp và trải nghiệm mua sắm tuyệt vời 
                  cho mọi khách hàng.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Giá trị cốt lõi
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-blue-600 text-3xl mb-3">💎</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Chất lượng</h4>
                  <p className="text-gray-600">
                    Cam kết cung cấp sản phẩm chính hãng với chất lượng tốt nhất
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-blue-600 text-3xl mb-3">🤝</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Uy tín</h4>
                  <p className="text-gray-600">
                    Xây dựng niềm tin với khách hàng thông qua dịch vụ chuyên nghiệp
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-blue-600 text-3xl mb-3">🌱</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Bền vững</h4>
                  <p className="text-gray-600">
                    Thúc đẩy sử dụng phương tiện xanh, bảo vệ môi trường
                  </p>
                </div>
              </div>
            </div>

            {/* Company History */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Lịch sử phát triển
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Thành lập</h4>
                    <p className="text-gray-600">
                      VinFast Việt Hùng được thành lập với mục tiêu trở thành đại lý chính hãng xe máy điện VinFast 
                      tại khu vực Vĩnh Phúc và Phú Thọ.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Mở rộng</h4>
                    <p className="text-gray-600">
                      Phát triển hệ thống 4 cửa hàng tại các vị trí chiến lược, phục vụ khách hàng 
                      tại Vĩnh Phúc và Phú Thọ.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Phát triển</h4>
                    <p className="text-gray-600">
                      Không ngừng cải thiện dịch vụ, mở rộng danh mục sản phẩm và nâng cao 
                      trải nghiệm khách hàng.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Đội ngũ nhân viên
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Chuyên viên tư vấn</h4>
                  <p className="text-gray-600 mb-4">
                    Đội ngũ tư vấn giàu kinh nghiệm, am hiểu sâu về sản phẩm VinFast, 
                    luôn sẵn sàng hỗ trợ khách hàng chọn lựa sản phẩm phù hợp nhất.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Kỹ thuật viên</h4>
                  <p className="text-gray-600 mb-4">
                    Đội ngũ kỹ thuật được đào tạo chuyên nghiệp, có chứng chỉ từ VinFast, 
                    đảm bảo chất lượng bảo hành và sửa chữa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
