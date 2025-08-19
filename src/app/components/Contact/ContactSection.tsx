'use client'

const ContactSection: React.FC = () => {
  return (
    <section className="contact py-16 md:py-20 bg-bg-light" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
                Liên hệ với chúng tôi
              </h2>
              <p className="text-lg text-text-light mb-8 leading-relaxed">
                Đội ngũ chuyên viên tư vấn sẵn sàng hỗ trợ bạn 24/7. 
                Hãy liên hệ với chúng tôi để được tư vấn về sản phẩm và dịch vụ tốt nhất.
              </p>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                {/* Primary Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-dark mb-2">
                      Hotline chính
                    </h3>
                    <a 
                      href="tel:0862669588" 
                      className="text-2xl font-bold text-primary-blue hover:text-accent-pink transition-colors"
                    >
                      086.266.9588
                    </a>
                    <p className="text-text-light text-sm mt-1">
                      Hỗ trợ 24/7 - Gọi miễn phí
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-pink rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-dark mb-2">
                      Email
                    </h3>
                    <a 
                      href="mailto:info@vinfastviethung.vn" 
                      className="text-lg text-primary-blue hover:text-accent-pink transition-colors"
                    >
                      info@vinfastviethung.vn
                    </a>
                    <p className="text-text-light text-sm mt-1">
                      Phản hồi trong vòng 2 giờ
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-smart rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-dark mb-2">
                      Địa chỉ
                    </h3>
                    <p className="text-lg text-text-light">
                      4 cơ sở tại Vĩnh Phúc và Phú Thọ
                    </p>
                    <p className="text-text-light text-sm mt-1">
                      Xem chi tiết tại mục Cửa hàng
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="contact-cta">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-accent-pink rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-text-dark mb-4">
                  Cần tư vấn ngay?
                </h3>
                <p className="text-text-light mb-6">
                  Gọi ngay để được tư vấn miễn phí về sản phẩm phù hợp nhất với nhu cầu của bạn.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="tel:0862669588" 
                    className="btn btn-primary btn-large w-full justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Gọi tư vấn ngay
                  </a>
                  
                  <a 
                    href="mailto:info@vinfastviethung.vn" 
                    className="btn btn-outline w-full justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Gửi email
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-text-light">
                    <span className="font-semibold">Thời gian hỗ trợ:</span><br />
                    Thứ 2 - Chủ nhật: 8:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection