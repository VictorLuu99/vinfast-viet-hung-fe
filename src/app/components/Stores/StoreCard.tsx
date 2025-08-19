'use client'

import { Store } from '@/types/store'
import { formatPhoneNumber, getPhoneHref } from '@/lib/data/stores'

interface StoreCardProps {
  store: Store
  className?: string
}

const StoreCard: React.FC<StoreCardProps> = ({ store, className = '' }) => {
  return (
    <div className={`store-card bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 ${className}`}>
      {/* Store Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-text-dark">
          {store.name}
        </h3>
        <span 
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            store.status === 'active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {store.status === 'active' ? 'Đang hoạt động' : 'Tạm đóng'}
        </span>
      </div>

      {/* Store Info */}
      <div className="space-y-4 mb-6">
        {/* Address */}
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 mt-0.5 flex-shrink-0">
            <svg
              className="w-5 h-5 text-primary-blue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <p className="text-text-light leading-relaxed">
            {store.address}
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 flex-shrink-0">
            <svg
              className="w-5 h-5 text-primary-blue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <a
            href={getPhoneHref(store.phone)}
            className="text-primary-blue hover:text-accent-pink font-semibold transition-colors"
          >
            {formatPhoneNumber(store.phone)}
          </a>
        </div>
      </div>

      {/* Store Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={getPhoneHref(store.phone)}
          className="btn btn-primary flex-1 justify-center"
        >
          Gọi ngay
        </a>
        <button 
          className="btn btn-outline flex-1 justify-center"
          onClick={() => {
            // This could integrate with Google Maps or a mapping service
            const query = encodeURIComponent(store.address)
            window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank')
          }}
        >
          Chỉ đường
        </button>
      </div>
    </div>
  )
}

export default StoreCard