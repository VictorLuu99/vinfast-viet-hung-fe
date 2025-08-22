import { Store } from '@/types/store';
import { MapPin, Phone, Mail, Clock, CheckCircle, Star, ExternalLink } from 'lucide-react';

interface StoreCardProps {
  store: Store;
}

export const StoreCard = ({ store }: StoreCardProps) => {
  return (
    <div className="group bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:-translate-y-1 sm:hover:-translate-y-2">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">
            {store.name}
          </h3>
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-2">
            <span className={`inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              store.status === 'active' ? 'bg-green-400' : 'bg-red-400'
            }`}></span>
            <span className="text-xs sm:text-sm text-gray-300 hidden sm:inline">
              {store.status === 'active' ? 'Đang hoạt động' : 'Tạm ngưng'}
            </span>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5 flex-shrink-0">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">{store.address}</p>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <a 
            href={`tel:${store.phone}`}
            className="text-blue-300 hover:text-blue-200 font-medium transition-colors duration-200 text-sm sm:text-base"
          >
            {store.phone}
          </a>
        </div>
        
        {store.email && (
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <a 
              href={`mailto:${store.email}`}
              className="text-blue-300 hover:text-blue-200 transition-colors duration-200 text-xs sm:text-sm truncate"
            >
              {store.email}
            </a>
          </div>
        )}
        
        {store.workingHours && (
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-gray-300 text-xs sm:text-sm">{store.workingHours}</span>
          </div>
        )}
      </div>

      {/* Services */}
      <div className="mb-4 sm:mb-6">
        <h4 className="font-semibold text-white mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
          Dịch vụ:
        </h4>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {store.services.slice(0, 3).map((service, index) => (
            <span 
              key={index}
              className="bg-blue-500/20 text-blue-300 text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-blue-400/30 truncate"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-4 sm:mb-6">
        <h4 className="font-semibold text-white mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
          Đặc điểm:
        </h4>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {store.features.slice(0, 3).map((feature, index) => (
            <span 
              key={index}
              className="bg-green-500/20 text-green-300 text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-green-400/30 truncate"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <a 
          href={`tel:${store.phone}`}
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl text-center hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Gọi ngay
        </a>
        {store.googleMapsUrl ? (
          <a 
            href={store.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white/10 text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Xem bản đồ
          </a>
        ) : (
          <button className="flex-1 bg-white/10 text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300">
            Xem bản đồ
          </button>
        )}
      </div>
    </div>
  );
};
