'use client'

import { stores } from '@/lib/data/stores'
import StoreCard from './StoreCard'

const StoresSection: React.FC = () => {
  return (
    <section className="stores py-16 md:py-20" id="stores">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Hệ thống cửa hàng
          </h2>
          <p className="text-lg text-text-light mb-8">
            4 cơ sở phục vụ khách hàng tại Vĩnh Phúc và Phú Thọ
          </p>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {stores.map((store, index) => (
            <div
              key={store.id}
              className="animate-slide-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <StoreCard store={store} />
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="bg-bg-light rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-text-dark mb-4">
              Cam kết dịch vụ chất lượng
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-text-dark">Giờ làm việc</h4>
                <p className="text-text-light">
                  Thứ 2 - CN<br />
                  8:00 - 18:00
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-text-dark">Bảo hành</h4>
                <p className="text-text-light">
                  Chính hãng 24 tháng<br />
                  Hỗ trợ kỹ thuật 24/7
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-text-dark">Dịch vụ</h4>
                <p className="text-text-light">
                  Tư vấn miễn phí<br />
                  Giao hàng tận nơi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoresSection