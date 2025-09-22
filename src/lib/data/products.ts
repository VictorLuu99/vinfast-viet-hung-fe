// import { Product, ProductCategory } from '@/types/product';

// export const productCategories: ProductCategory[] = [
//   {
//     id: 'all',
//     name: 'all',
//     displayName: 'Tất cả',
//     count: 13,
//     description: 'Tất cả các dòng xe máy điện VinFast'
//   },
//   {
//     id: 'cao-cap',
//     name: 'cao-cap',
//     displayName: 'Cao cấp',
//     count: 3,
//     description: 'Dòng xe cao cấp với công nghệ hiện đại'
//   },
//   {
//     id: 'trung-cap',
//     name: 'trung-cap',
//     displayName: 'Trung cấp',
//     count: 4,
//     description: 'Dòng xe trung cấp cân bằng giữa chất lượng và giá cả'
//   },
//   {
//     id: 'pho-thong',
//     name: 'pho-thong',
//     displayName: 'Phổ thông',
//     count: 6,
//     description: 'Dòng xe phổ thông phù hợp với mọi người dùng'
//   }
// ];

// // Comprehensive VinFast Products Data - Crawled from Official Website
// const productsData = {
//   "products": [
//     {
//       "id": "evo-neo",
//       "name": "VinFast Evo Neo",
//       "category": "pho-thong",
//       "price": 17800000,
//       "priceFormatted": "17.800.000đ",
//       "discount": 11,
//       "tagline": "Hành trình mới, Phong cách mới",
//       "description": "EVONEO - Hành trình mới, Phong cách mới với công nghệ Pin LFP vượt trội",
//       "specs": {
//         "maxSpeed": "60 km/h",
//         "range": "117 km/1 lần sạc",
//         "storage": "17 lít",
//         "battery": "2.0 kWh Pin LFP",
//         "motor": "Inhub 1500W",
//         "chargingTime": "5h20 từ 0% đến 100%"
//       },
//       "features": [
//         "Hành trình mới, Phong cách mới", 
//         "Công nghệ Pin LFP vượt trội",
//         "Tiêu chuẩn chống nước IP67", 
//         "Hệ thống đèn Full LED và đèn pha projector",
//         "Cốp xe rộng tới 17 Lít",
//         "Chế độ lái Eco & Sport"
//       ],
//       "colors": ["Đen Nhám", "Xanh Tím Than", "Đỏ Tươi", "Xanh Rêu", "Trắng Ngọc Trai"],
//       "images": {
//         "main": "/images/bikes/vinfast-evo-neo-official.webp",
//         "gallery": [
//           "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw0d5e035f/images/PDP-XMD/evoneo/img-banner-info-sp.webp",
//           // "https://shop.vinfastauto.com/images/PDP-XMD/evoneo/img-connect.jpg",
//           "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw16dee281/images/PDP-XMD/evoneo/img-part-03.webp",
//           "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw6ab30e7b/images/PDP-XMD/evoneo/img-part-01.webp"
//         ]
//       },
//       "badge": "Bán chạy"
//     },
//     {
//       "id": "motio",
//       "name": "VinFast Motio",
//       "category": "pho-thong", 
//       "price": 12000000,
//       "priceFormatted": "12.000.000đ",
//       "discount": 11,
//       "tagline": "Sành điệu - Nổi bật - Chuẩn phong cách",
//       "description": "VinFast Motio - Xe máy điện học sinh với thiết kế nhỏ gọn, trẻ trung",
//       "specs": {
//         "maxSpeed": "49 km/h",
//         "range": "82 km/1 lần sạc",
//         "storage": "22 lít", 
//         "battery": "48V 30Ah",
//         "motor": "Động cơ điện không chổi than",
//         "chargingTime": "6-7 giờ"
//       },
//       "features": [
//         "Thiết kế nhỏ gọn, trẻ trung, năng động",
//         "Hệ thống đèn Full LED và đèn pha LED projector",
//         "Màn hình đồng hồ kỹ thuật số HMI LED Color",
//         "Vành xe 10 inch với bánh sau tích hợp động cơ trong vành",
//         "Thể tích cốp sau đạt tới 22 lít",
//         "Tối ưu chi phí vận hành"
//       ],
//       "colors": ["Hồng", "Đen", "Trắng", "Đỏ", "Vàng"],
//       "images": {
//         "main": "/images/bikes/vinfast-motio-official.webp",
//         "gallery": [
//           "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw6bad8119/images/PDP-XMD/motio/img-banner-info.webp",
//           // "https://shop.vinfastauto.com/images/PDP-XMD/motio/img-connect.png"
//         ]
//       },
//       "badge": "Học sinh"
//     },
//     {
//       "id": "evo-grand",
//       "name": "VinFast Evo Grand", 
//       "category": "pho-thong",
//       "price": 21000000,
//       "priceFormatted": "21.000.000đ",
//       "discount": 16,
//       "tagline": "Chinh phục mọi hành trình",
//       "description": "VinFast Evo Grand - Chinh phục mọi hành trình với quãng đường di chuyển lên tới 262km",
//       "specs": {
//         "maxSpeed": "70 km/h", 
//         "range": "262 km/1 lần sạc",
//         "storage": "35 lít",
//         "battery": "Pin LFP",
//         "motor": "Inhub 2250W",
//         "chargingTime": "6 giờ 30 phút (0 đến 100%)"
//       },
//       "features": [
//         "Quãng đường di chuyển lên tới 262km trong một lần sạc",
//         "Thể tích cốp 35L tối ưu sức chứa", 
//         "Linh hoạt nâng cấp 02 pin kép, gấp đôi năng lượng",
//         "Sử dụng Pin LFP với các ưu điểm vượt trội",
//         "Hệ thống đèn chiếu sáng và đèn tín hiệu Full LED"
//       ],
//       "colors": ["Trắng ngọc trai", "Đen nhám", "Xanh Oliu", "Đỏ tươi", "Vàng cát"],
//       "images": {
//         "main": "/images/bikes/vinfast-evo-grand-official.webp",
//         "gallery": [
//           "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw997effec/landingpage/lp-xmd/evo-grand/hero.webp",
//           "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwb4807e8f/landingpage/lp-xmd/evo-grand/general-visual.webp"
//         ]
//       },
//       "badge": "Mới"
//     },
//     {
//       "id": "evo200",
//       "name": "VinFast Evo200",
//       "category": "pho-thong",
//       "price": 22000000,
//       "priceFormatted": "22.000.000đ", 
//       "discount": 6,
//       "tagline": "Hiệu suất ổn định - Phù hợp công việc",
//       "description": "VinFast Evo200 với quãng đường 203km và vận hành êm ái trên mọi địa hình",
//       "specs": {
//         "maxSpeed": "70 km/h",
//         "range": "203 km/1 lần sạc",
//         "storage": "22 lít",
//         "battery": "Pin LFP",
//         "motor": "BLDC",
//         "chargingTime": "5-6 giờ"
//       },
//       "features": [
//         "Quãng đường di chuyển 203 km cho lần sạc tiêu chuẩn",
//         "Vận hành êm ái, bền bỉ trên mọi địa hình", 
//         "Hệ thống đèn LED và đèn pha projector",
//         "Thiết kế cốp xe rộng tới 22 lít",
//         "Ứng dụng công nghệ pin LFP tiên tiến"
//       ],
//       "colors": ["Vàng", "Đen", "Đỏ", "Xanh", "Trắng"],
//       "images": {
//         "main": "/images/bikes/vinfast-evo200-official.webp",
//         "gallery": [
//           "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw5b8cc72a/images/PDP-XMD/evo200/img-banner-info.webp",
//           // "https://shop.vinfastauto.com/images/PDP-XMD/evo200/img-connect.jpg"
//         ]
//       },
//       "badge": "Chuẩn"
//     },
//     {
//       "id": "evo200-lite", 
//       "name": "VinFast Evo200 Lite",
//       "category": "pho-thong",
//       "price": 19000000,
//       "priceFormatted": "19.000.000đ",
//       "discount": 10,
//       "tagline": "Phiên bản lite - Giá cả hợp lý",
//       "description": "VinFast Evo200 Lite - Quãng đường 205km với giá cả phải chăng",
//       "specs": {
//         "maxSpeed": "49 km/h", 
//         "range": "205 km/1 lần sạc",
//         "storage": "22 lít",
//         "battery": "Pin LFP",
//         "motor": "BLDC",
//         "chargingTime": "5-6 giờ"
//       },
//       "features": [
//         "Quãng đường di chuyển 205 km cho 01 lần sạc",
//         "Hệ thống đèn Full LED và đèn pha projector", 
//         "Cốp xe rộng tới 22 Lít",
//         "Vận hành êm ái, vươn xa mạnh mẽ",
//         "Giá cả phải chăng, vận hành tin cậy"
//       ],
//       "colors": ["Đen", "Trắng", "Xanh"],
//       "images": {
//         "main": "/images/bikes/vinfast-evo200-official.webp",
//         "gallery": []
//       },
//       "badge": "Kinh tế"
//     },
//     {
//       "id": "evo-lite-neo",
//       "name": "VinFast Evo Lite Neo", 
//       "category": "pho-thong",
//       "price": 14400000,
//       "priceFormatted": "14.400.000đ",
//       "discount": 10,
//       "tagline": "Phiên bản cơ bản - Phù hợp di chuyển gần",
//       "description": "VinFast Evo Lite Neo - Phiên bản cơ bản với quãng đường 78km",
//       "specs": {
//         "maxSpeed": "45 km/h",
//         "range": "78 km/1 lần sạc", 
//         "storage": "17 lít",
//         "battery": "48V 35Ah",
//         "motor": "BLDC",
//         "chargingTime": "5-6 giờ"
//       },
//       "features": [
//         "Quãng đường di chuyển 78 km cho 01 lần sạc",
//         "Cốp xe rộng tới 17 Lít",
//         "Màn hình đồng hồ kỹ thuật số HMI 4.5\"",
//         "Hệ thống phanh tích hợp với phanh đĩa bánh trước",
//         "Hệ thống đèn Full LED và đèn pha projector"
//       ],
//       "colors": ["Đỏ Tươi", "Trắng Ngọc Trai", "Đen Nhám", "Xanh Tím Than"], 
//       "images": {
//         "main": "/images/bikes/vinfast-evo-lite-neo-official.webp",
//         "gallery": [
//           "/images/bikes/vinfast-evo-lite-neo-red.webp",
//           "/images/bikes/vinfast-evo-lite-neo-white.webp", 
//           "/images/bikes/vinfast-evo-lite-neo-black.webp",
//           "/images/bikes/vinfast-evo-lite-neo-blue.webp"
//         ]
//       },
//       "badge": "Cơ bản"
//     },
//     {
//       "id": "feliz-s",
//       "name": "VinFast Feliz S",
//       "category": "cao-cap",
//       "price": 33500000,
//       "priceFormatted": "33.500.000đ",
//       "discount": 9,
//       "tagline": "Thiết kế sang trọng - Hiệu suất vượt trội", 
//       "description": "VinFast Feliz S - Dòng cao cấp với thiết kế sang trọng và hiệu suất vượt trội",
//       "specs": {
//         "maxSpeed": "55 km/h",
//         "range": "198 km/1 lần sạc",
//         "storage": "25 lít", 
//         "battery": "72V 50Ah",
//         "motor": "BLDC 3000W",
//         "chargingTime": "4-6 giờ"
//       },
//       "features": [
//         "Thiết kế sang trọng, hiệu suất vượt trội",
//         "Quãng đường di chuyển 198 km",
//         "Phanh ABS an toàn", 
//         "Cốp xe rộng rãi 25 lít",
//         "Hệ thống đèn LED cao cấp"
//       ],
//       "colors": ["Đen bóng", "Trắng ngọc", "Xanh dương"],
//       "images": {
//         "main": "/images/bikes/vinfast-feliz-s-official.webp",
//         "gallery": []
//       },
//       "badge": "Cao cấp"
//     },
//     {
//       "id": "feliz-neo",
//       "name": "VinFast Feliz Neo",
//       "category": "trung-cap", 
//       "price": 22400000,
//       "priceFormatted": "22.400.000đ",
//       "discount": 10,
//       "tagline": "Lướt êm, Phong cách",
//       "description": "VinFast Feliz Neo - Cân bằng hiệu suất và giá cả, lý tưởng gia đình",
//       "specs": {
//         "maxSpeed": "50 km/h",
//         "range": "85 km/1 lần sạc",
//         "storage": "22 lít",
//         "battery": "60V 48Ah", 
//         "motor": "BLDC",
//         "chargingTime": "4-5 giờ"
//       },
//       "features": [
//         "Lướt êm, Phong cách mới",
//         "Cân bằng hiệu suất và giá cả",
//         "Pin dung lượng trung bình",
//         "Thiết kế hiện đại",
//         "Lý tưởng cho gia đình"
//       ],
//       "colors": ["Đen bóng", "Trắng ngọc", "Xanh dương"],
//       "images": {
//         "main": "/images/bikes/vinfast-feliz-neo-official.webp",
//         "gallery": []
//       },
//       "badge": "Bán chạy"
//     },
//     {
//       "id": "klara-s2",
//       "name": "VinFast Klara S2",
//       "category": "trung-cap",
//       "price": 26500000,
//       "priceFormatted": "26.500.000đ",
//       "discount": 9,
//       "tagline": "Phong cách trẻ trung - Công nghệ cơ bản",
//       "description": "VinFast Klara S2 với thiết kế trẻ trung và công nghệ thông minh",
//       "specs": {
//         "maxSpeed": "78 km/h", 
//         "range": "194 km/1 lần sạc",
//         "storage": "23 lít",
//         "battery": "60V 40Ah",
//         "motor": "BLDC 3000W",
//         "chargingTime": "4-5 giờ"
//       },
//       "features": [
//         "Tốc độ tối đa 78 km/h",
//         "Di chuyển đến 194km cho 1 lần sạc",
//         "Đạt tiêu chuẩn chống nước IP67",
//         "Cốp xe rộng với 23l",
//         "Màn hình LED, USB sạc điện thoại"
//       ],
//       "colors": ["Trắng", "Đỏ", "Đen", "Xanh", "Xanh lá cây"],
//       "images": {
//         "main": "/images/bikes/vinfast-klara-s2-official.webp", 
//         "gallery": [
//           "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwd0e25dff/images/PDP-XMD/klaras/img-banner-info.webp",
//           "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw83285f41/images/PDP-XMD/klaras/img-connect-sp.webp"
//         ]
//       },
//       "badge": "Thông minh"
//     },
//     {
//       "id": "klara-neo", 
//       "name": "VinFast Klara Neo",
//       "category": "trung-cap",
//       "price": 27900000,
//       "priceFormatted": "27.900.000đ",
//       "discount": 9,
//       "tagline": "Năng lượng xanh, Phong cách mỗi ngày",
//       "description": "VinFast Klara Neo với công nghệ kết nối và smartphone integration",
//       "specs": {
//         "maxSpeed": "45 km/h",
//         "range": "80 km/1 lần sạc",
//         "storage": "22 lít",
//         "battery": "60V 42Ah",
//         "motor": "BLDC", 
//         "chargingTime": "4-5 giờ"
//       },
//       "features": [
//         "Năng lượng xanh, Phong cách mỗi ngày",
//         "Công nghệ kết nối thông minh",
//         "Kết nối Bluetooth",
//         "Ứng dụng VinFast",
//         "Theo dõi từ xa"
//       ],
//       "colors": ["Đen bóng", "Trắng ngọc", "Xanh dương"],
//       "images": {
//         "main": "/images/bikes/vinfast-klara-neo-official.webp",
//         "gallery": []
//       },
//       "badge": "Bán chạy"
//     },
//     {
//       "id": "theon-s",
//       "name": "VinFast Theon S", 
//       "category": "cao-cap",
//       "price": 56900000,
//       "priceFormatted": "56.900.000đ",
//       "discount": 5,
//       "tagline": "Flagship - Công nghệ AI cao cấp",
//       "description": "VinFast Theon S - Dòng flagship với công nghệ AI và hiệu suất cao nhất",
//       "specs": {
//         "maxSpeed": "99 km/h",
//         "range": "150 km/1 lần sạc",
//         "storage": "24 lít",
//         "battery": "72V 60Ah", 
//         "motor": "BLDC 5200W",
//         "chargingTime": "4-6 giờ"
//       },
//       "features": [
//         "Tốc độ tối đa 99 km/h - cao nhất phân khúc",
//         "Di chuyển 150km với 1 lần sạc",
//         "Hệ thống phanh ABS 2 kênh Continental",
//         "Công nghệ Pin tiên tiến LFP",
//         "Màn hình cảm ứng 10\"",
//         "Hệ thống định vị GPS"
//       ],
//       "colors": ["Trắng", "Đỏ", "Đen"],
//       "images": {
//         "main": "/images/bikes/vinfast-theon-s-official.webp",
//         "gallery": [
//           "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwb9c8d350/images/PDP-XMD/theons/img-banner-info.webp",
//           "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw4cd3f694/images/PDP-XMD/theons/img-connect.webp"
//         ]
//       },
//       "badge": "Flagship"
//     },
//     {
//       "id": "vento-s",
//       "name": "VinFast Vento S",
//       "category": "cao-cap",
//       "price": 56000000,
//       "priceFormatted": "56.000.000đ", 
//       "discount": 9,
//       "tagline": "Thể thao - Aerodynamic",
//       "description": "VinFast Vento S - Thiết kế thể thao với hiệu suất cao và công nghệ PAAK",
//       "specs": {
//         "maxSpeed": "89 km/h",
//         "range": "194 km/1 lần sạc",
//         "storage": "25 lít",
//         "battery": "72V 55Ah",
//         "motor": "BLDC 5200W",
//         "chargingTime": "4-6 giờ"
//       },
//       "features": [
//         "Tốc độ tối đa 89 km/h", 
//         "Công nghệ PAAK với app điện thoại",
//         "Pin LFP cho hiệu xuất cao",
//         "Thiết kế aerodynamic thể thao",
//         "Yên xe rộng rãi, thoải mái",
//         "Cốp xe lên đến 25l"
//       ],
//       "colors": ["Vàng", "Đen", "Xanh ngọc", "Cam", "Đỏ", "Trắng"],
//       "images": {
//         "main": "/images/bikes/vinfast-vento-s-official.webp",
//         "gallery": [
//           "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwecbf0312/images/PDP-XMD/ventos/img-banner-info-sp.webp",
//           "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwb06b8bc5/images/PDP-XMD/ventos/img-connect-sp.webp"
//         ]
//       },
//       "badge": "Thể thao"
//     },
//     {
//       "id": "vento-neo", 
//       "name": "VinFast Vento Neo",
//       "category": "trung-cap",
//       "price": 32000000,
//       "priceFormatted": "32.000.000đ",
//       "discount": 9,
//       "tagline": "Lái khác biệt",
//       "description": "VinFast Vento Neo - Thiết kế trẻ trung với cân bằng giá - chất lượng",
//       "specs": {
//         "maxSpeed": "50 km/h",
//         "range": "194 km/1 lần sạc", 
//         "storage": "22 lít",
//         "battery": "60V 45Ah",
//         "motor": "BLDC",
//         "chargingTime": "4-5 giờ"
//       },
//       "features": [
//         "Lái khác biệt với thiết kế trẻ trung",
//         "Quãng đường 194km với một lần sạc",
//         "Màn hình LCD thông minh",
//         "Sạc nhanh 4 giờ",
//         "Cân bằng giá - chất lượng"
//       ],
//       "colors": ["Đen bóng", "Trắng ngọc", "Xanh dương"],
//       "images": {
//         "main": "/images/bikes/vinfast-vento-neo-official.webp",
//         "gallery": []
//       },
//       "badge": "Bán chạy"
//     }
//   ]
// };

// // Convert JSON data to Product interface format
// export const products: Product[] = productsData.products.map(p => ({
//   id: p.id,
//   name: p.name,
//   category: p.category as 'cao-cap' | 'trung-cap' | 'pho-thong',
//   price: p.price,
//   priceFormatted: p.priceFormatted,
//   originalPrice: p.price,
//   originalPriceFormatted: p.priceFormatted,
//   discount: p.discount,
//   specs: `${p.tagline} | Tốc độ tối đa ${p.specs.maxSpeed} | Quãng đường ${p.specs.range}`,
//   features: p.features,
//   image: p.images.main,
//   gallery: p.images.gallery,
//   badge: p.badge,
//   range: parseInt(p.specs.range.split(' ')[0]),
//   power: parseInt(p.specs.motor.match(/\d+/)?.[0] || '1500'),
//   battery: p.specs.battery,
//   weight: 85, // Default weight
//   maxSpeed: parseInt(p.specs.maxSpeed.split(' ')[0]),
//   chargingTime: p.specs.chargingTime,
//   warranty: '2 năm',
//   available: true,
//   colors: p.colors,
//   dimensions: {
//     length: 1800,
//     width: 650,
//     height: 1070
//   },
//   motorType: p.specs.motor,
//   brakeSystem: 'Phanh đĩa phía trước và sau',
//   lighting: 'Hệ thống đèn Full LED'
// }));

// export const getProductsByCategory = (category: string): Product[] => {
//   if (category === 'all') return products;
//   return products.filter(product => product.category === category);
// };

// export const getProductById = (id: string): Product | undefined => {
//   return products.find(product => product.id === id);
// };