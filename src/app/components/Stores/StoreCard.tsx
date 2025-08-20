import { Store } from '@/types/store';
import { MapPin, Phone, Mail, Clock, CheckCircle, Star } from 'lucide-react';

interface StoreCardProps {
  store: Store;
}

export const StoreCard = ({ store }: StoreCardProps) => {
  return (
    <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:-translate-y-2">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white mb-2">
            {store.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className={`inline-block w-3 h-3 rounded-full ${
              store.status === 'active' ? 'bg-green-400' : 'bg-red-400'
            }`}></span>
            <span className="text-sm text-gray-300">
              {store.status === 'active' ? 'Đang hoạt động' : 'Tạm ngưng'}
            </span>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">{store.address}</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 text-green-400">
            <Phone className="w-5 h-5" />
          </div>
          <a 
            href={`tel:${store.phone}`}
            className="text-blue-300 hover:text-blue-200 font-medium transition-colors duration-200"
          >
            {store.phone}
          </a>
        </div>
        
        {store.email && (
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 text-purple-400">
              <Mail className="w-5 h-5" />
            </div>
            <a 
              href={`mailto:${store.email}`}
              className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
            >
              {store.email}
            </a>
          </div>
        )}
        
        {store.workingHours && (
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 text-yellow-400">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-gray-300 text-sm">{store.workingHours}</span>
          </div>
        )}
      </div>

      {/* Services */}
      <div className="mb-6">
        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          Dịch vụ:
        </h4>
        <div className="flex flex-wrap gap-2">
          {store.services.slice(0, 3).map((service, index) => (
            <span 
              key={index}
              className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1.5 rounded-full border border-blue-400/30"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400" />
          Đặc điểm:
        </h4>
        <div className="flex flex-wrap gap-2">
          {store.features.slice(0, 3).map((feature, index) => (
            <span 
              key={index}
              className="bg-green-500/20 text-green-300 text-xs px-3 py-1.5 rounded-full border border-green-400/30"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-3">
        <a 
          href={`tel:${store.phone}`}
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl text-center hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Gọi ngay
        </a>
        <button className="flex-1 bg-white/10 text-white font-semibold py-3 px-4 rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300">
          Xem bản đồ
        </button>
      </div>
    </div>
  );
};
