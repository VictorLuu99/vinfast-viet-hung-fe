"use client";

import { stores } from '@/lib/data/stores';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface MapSectionProps {
  store: typeof stores[0];
  embedUrl: string;
}

const MapSection = ({ store, embedUrl }: MapSectionProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
            <p className="text-gray-500 text-sm">Đang tải bản đồ...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-50 flex items-center justify-center z-10">
          <div className="text-center p-4">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 text-sm mb-2">Không thể tải bản đồ</p>
            <a
              href={store.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-sm underline"
            >
              Xem trên Google Maps
            </a>
          </div>
        </div>
      )}

      {/* Map Iframe */}
      <div className="relative aspect-[4/3]">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Bản đồ ${store.name}`}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          className="w-full h-full"
        />

        {/* Store Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
          <div className="text-white">
            <h4 className="font-bold text-sm mb-1 truncate">{store.name}</h4>
            <div className="flex items-start gap-1.5 mb-2">
              <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
              <p className="text-xs leading-tight line-clamp-2">{store.address}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 flex-shrink-0" />
              <a
                href={`tel:${store.phone}`}
                className="text-xs hover:text-blue-300 transition-colors"
              >
                {store.phone}
              </a>
            </div>
          </div>
        </div>

        {/* External Link Button */}
        <a
          href={store.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-lg hover:bg-white transition-all duration-200 group-hover:scale-110"
          title={`Xem ${store.name} trên Google Maps`}
        >
          <ExternalLink className="w-3 h-3 text-gray-700" />
        </a>
      </div>
    </div>
  );
};

export const GoogleMapsEmbed = () => {
  // Convert coordinates to Google Maps embed URL
  const getEmbedUrl = (store: typeof stores[0]) => {
    const coordinates = store.location.coordinates;

    if (!coordinates) {
      // Fallback to search by address if coordinates are not available
      return `https://maps.google.com/maps?q=${encodeURIComponent(store.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    }

    const { lat, lng } = coordinates;

    // Use a simple approach that works reliably with coordinates
    // This creates a proper Google Maps embed showing the location
    const fallbackUrl = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return fallbackUrl;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Vị trí 4 cơ sở VinFast Việt Hùng
        </h3>
        <p className="text-gray-600 text-sm">
          Tại Vĩnh Phúc và Phú Thọ - Click vào bản đồ để xem chi tiết
        </p>
      </div>

      {/* Maps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stores.map((store) => (
          <MapSection
            key={store.id}
            store={store}
            embedUrl={getEmbedUrl(store)}
          />
        ))}
      </div>

      {/* Bottom Info */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-blue-600" />
          <h4 className="font-semibold text-gray-900">Thông tin liên hệ</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600 mb-1">
              <strong>Vĩnh Phúc:</strong> 2 cơ sở (Yên Lạc, Phúc Yên)
            </p>
            <p className="text-gray-600">
              <strong>Phú Thọ:</strong> 2 cơ sở (Việt Trì)
            </p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">
              <strong>Giờ làm việc:</strong> 7:30 - 17:30
            </p>
            <p className="text-gray-600">
              <strong>Hotline:</strong>
              <a href="tel:0862669588" className="text-blue-600 hover:text-blue-700 ml-1">
                086.266.9588
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};