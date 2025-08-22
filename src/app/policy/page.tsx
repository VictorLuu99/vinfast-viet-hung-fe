import React from 'react';
import { Header } from '../components/Header/Header';

export default function PolicyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center px-2 py-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Chính sách
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Chính sách dịch vụ khách hàng của VinFast Việt Hùng
              </p>
            </div>
          </div>
        </div>

        {/* Policies Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Return Policy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Chính sách đổi trả hàng
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  <strong>Nhà phân phối xe máy điện VinFast – Việt Hùng</strong> cam kết mang đến cho khách hàng 
                  sản phẩm chất lượng và dịch vụ hậu mãi tốt nhất. Để đảm bảo quyền lợi của khách hàng, 
                  chúng tôi xin gửi đến quý khách hàng <strong>Chính sách đổi trả hàng</strong> khi mua xe máy điện 
                  VinFast tại cửa hàng.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Điều kiện áp dụng đổi trả:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Sản phẩm chỉ được đổi trả trong vòng <strong>7 ngày</strong> kể từ ngày nhận hàng hoặc ngày nhận xe (tính theo hóa đơn mua hàng).</li>
                  <li>Xe máy điện còn nguyên vẹn, không có dấu hiệu đã qua sử dụng hoặc đã sửa chữa.</li>
                  <li>Sản phẩm không bị hư hỏng, trầy xước, hoặc có bất kỳ sự thay đổi nào so với trạng thái ban đầu khi giao đến tay khách hàng.</li>
                  <li>Phiếu bảo hành và hóa đơn mua hàng phải được giữ nguyên, không bị rách nát, mất mát.</li>
                  <li>Sản phẩm chỉ được đổi trả khi có lỗi do nhà sản xuất, như các lỗi về kỹ thuật hoặc chức năng của xe.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quy trình đổi trả:</h3>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li><strong>Bước 1:</strong> Khách hàng liên hệ với <strong>Nhà phân phối Việt Hùng</strong> qua số điện thoại <strong>086.266.9588</strong> hoặc email <strong>info@vinfast-viethung.vn</strong> trong vòng 7 ngày kể từ khi nhận xe để thông báo về việc yêu cầu đổi trả.</li>
                  <li><strong>Bước 2:</strong> Cung cấp các thông tin cần thiết như số hóa đơn, phiếu bảo hành, và tình trạng sản phẩm. Chúng tôi sẽ kiểm tra thông tin và xác nhận yêu cầu đổi trả.</li>
                  <li><strong>Bước 3:</strong> Sau khi xác nhận, khách hàng sẽ đưa sản phẩm đến <strong>cửa hàng Việt Hùng</strong> hoặc yêu cầu chúng tôi gửi nhân viên đến tận nơi để kiểm tra sản phẩm.</li>
                  <li><strong>Bước 4:</strong> Nếu sản phẩm đáp ứng đủ các điều kiện đổi trả, khách hàng sẽ được <strong>đổi xe mới</strong> hoặc nhận <strong>hoàn tiền</strong> theo giá trị của sản phẩm (trừ các chi phí phát sinh như phí vận chuyển, bảo dưỡng nếu có).</li>
                </ol>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Điều kiện không áp dụng đổi trả:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Sản phẩm đã qua sử dụng, có dấu hiệu hư hỏng do người sử dụng hoặc bị thay đổi cấu hình, sửa chữa.</li>
                  <li>Khách hàng không cung cấp đủ các giấy tờ cần thiết như phiếu bảo hành, hóa đơn mua hàng.</li>
                  <li>Sản phẩm bị hư hỏng do tai nạn, thiên tai, hoặc các tác động ngoại lực khác.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Chính sách hoàn tiền:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Khách hàng sẽ được hoàn tiền trong trường hợp sản phẩm bị lỗi kỹ thuật không thể sửa chữa hoặc thay thế.</li>
                  <li>Thời gian hoàn tiền sẽ được thực hiện trong vòng <strong>15 ngày</strong> kể từ ngày xác nhận yêu cầu đổi trả và nhận lại sản phẩm.</li>
                  <li>Số tiền hoàn lại sẽ bằng giá trị của sản phẩm trừ đi các chi phí phát sinh (nếu có).</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lưu ý:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Chính sách này chỉ áp dụng đối với các sản phẩm mua tại <strong>Nhà phân phối Việt Hùng</strong> và không áp dụng cho các sản phẩm đã qua mua bán hoặc giao dịch giữa các cá nhân.</li>
                  <li>Trong mọi trường hợp tranh chấp, Nhà phân phối Việt Hùng sẽ giải quyết theo quy định của pháp luật Việt Nam.</li>
                </ul>

                <p className="text-gray-600 mb-4">
                  Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua số điện thoại <strong>086.266.9588</strong> 
                  hoặc email <strong>info@vinfast-viethung.vn</strong>. Chúng tôi luôn sẵn sàng hỗ trợ bạn!
                </p>
                <p className="text-gray-600 font-semibold">Trân trọng cảm ơn sự tin tưởng của quý khách!</p>
              </div>
            </div>

            {/* Warranty Policy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Chính sách bảo hành
              </h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Thời gian bảo hành:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Xe cao cấp:</strong> Bảo hành 3 năm</li>
                  <li><strong>Xe trung cấp:</strong> Bảo hành 2 năm</li>
                  <li><strong>Xe phổ thông:</strong> Bảo hành 2 năm (Motio: 1 năm)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Phạm vi bảo hành:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Động cơ điện và hệ thống truyền động</li>
                  <li>Pin và hệ thống sạc</li>
                  <li>Hệ thống điều khiển và màn hình</li>
                  <li>Hệ thống phanh và khung xe</li>
                  <li>Các linh kiện điện tử chính</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Điều kiện bảo hành:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Xe phải được sử dụng đúng mục đích và theo hướng dẫn sử dụng</li>
                  <li>Không được tự ý tháo lắp, sửa chữa hoặc thay đổi cấu trúc xe</li>
                  <li>Phải bảo dưỡng định kỳ theo lịch trình của nhà sản xuất</li>
                  <li>Phiếu bảo hành phải còn nguyên vẹn và hợp lệ</li>
                </ul>
              </div>
            </div>

            {/* Purchase Policy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Chính sách mua hàng
              </h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hình thức thanh toán:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Thanh toán tiền mặt</li>
                  <li>Chuyển khoản ngân hàng</li>
                  <li>Trả góp 0% lãi suất (áp dụng có điều kiện)</li>
                  <li>Thẻ tín dụng</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quy trình mua hàng:</h3>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li>Tư vấn và chọn sản phẩm phù hợp</li>
                  <li>Đặt cọc và ký hợp đồng mua bán</li>
                  <li>Thanh toán và nhận xe</li>
                  <li>Hướng dẫn sử dụng và bảo dưỡng</li>
                </ol>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dịch vụ đi kèm:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Giao xe tận nơi miễn phí</li>
                  <li>Đăng ký biển số xe</li>
                  <li>Bảo hiểm xe cơ giới</li>
                  <li>Hỗ trợ kỹ thuật 24/7</li>
                </ul>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Chính sách bảo mật thông tin
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  VinFast Việt Hùng cam kết bảo mật thông tin cá nhân của khách hàng theo quy định của pháp luật Việt Nam.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Thông tin được thu thập:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Thông tin cá nhân: họ tên, số điện thoại, email, địa chỉ</li>
                  <li>Thông tin giao dịch: lịch sử mua hàng, thanh toán</li>
                  <li>Thông tin kỹ thuật: thông tin xe, bảo hành, sửa chữa</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mục đích sử dụng:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Phục vụ giao dịch mua bán</li>
                  <li>Hỗ trợ khách hàng và bảo hành</li>
                  <li>Gửi thông tin khuyến mãi (có sự đồng ý)</li>
                  <li>Nâng cao chất lượng dịch vụ</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Bảo mật thông tin:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Mã hóa thông tin nhạy cảm</li>
                  <li>Giới hạn quyền truy cập thông tin</li>
                  <li>Không chia sẻ thông tin với bên thứ ba</li>
                  <li>Tuân thủ quy định bảo mật của VinFast</li>
                </ul>
              </div>
            </div>

            {/* Complaint Policy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Chính sách xử lý khiếu nại
              </h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tiếp nhận khiếu nại:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Hotline: <strong>086.266.9588</strong></li>
                  <li>Email: <strong>info@vinfast-viethung.vn</strong></li>
                  <li>Trực tiếp tại cửa hàng</li>
                  <li>Fanpage Facebook chính thức</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quy trình xử lý:</h3>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li>Tiếp nhận và ghi nhận khiếu nại</li>
                  <li>Phân tích và đánh giá vấn đề</li>
                  <li>Đề xuất giải pháp và thực hiện</li>
                  <li>Phản hồi và theo dõi kết quả</li>
                </ol>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Thời gian xử lý:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Khiếu nại đơn giản: xử lý trong 24-48 giờ</li>
                  <li>Khiếu nại phức tạp: xử lý trong 3-5 ngày làm việc</li>
                  <li>Khiếu nại kỹ thuật: xử lý theo thời gian bảo hành</li>
                </ul>
              </div>
            </div>

            {/* Quality Check Policy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Chính sách kiểm hàng
              </h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kiểm tra trước khi giao xe:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Kiểm tra tình trạng xe và phụ tùng</li>
                  <li>Kiểm tra chức năng hoạt động</li>
                  <li>Kiểm tra giấy tờ và chứng chỉ</li>
                  <li>Kiểm tra ngoại hình và sơn xe</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kiểm tra sau khi nhận xe:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Khách hàng kiểm tra và ký nhận</li>
                  <li>Ghi nhận ý kiến phản hồi</li>
                  <li>Hướng dẫn sử dụng chi tiết</li>
                  <li>Cam kết hỗ trợ sau bán hàng</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cam kết chất lượng:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>100% xe chính hãng VinFast</li>
                  <li>Đầy đủ giấy tờ và chứng chỉ</li>
                  <li>Bảo hành theo tiêu chuẩn nhà sản xuất</li>
                  <li>Hỗ trợ kỹ thuật chuyên nghiệp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
