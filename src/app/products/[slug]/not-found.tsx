import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="text-6xl text-gray-400 mb-4">⚡</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Không tìm thấy sản phẩm
          </h1>
          <p className="text-gray-600">
            Sản phẩm bạn đang tìm không tồn tại hoặc đã bị xóa.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Xem tất cả sản phẩm
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
          >
            <Home className="w-4 h-4 mr-2" />
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}