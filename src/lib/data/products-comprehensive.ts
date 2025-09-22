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

// // Comprehensive VinFast Products Data - Extracted from Official Website
// export const comprehensiveProducts: Product[] = [
//   {
//     id: "evo-neo",
//     name: "VinFast Evo Neo", 
//     category: "pho-thong",
//     price: 17800000,
//     priceFormatted: "17.800.000đ",
//     originalPrice: 20000000,
//     originalPriceFormatted: "20.000.000đ",
//     discount: 11,
//     specs: "Hành trình mới, Phong cách mới | Tốc độ tối đa 60 km/h | Quãng đường 117 km/1 lần sạc",
//     features: [
//       "Hành trình mới, Phong cách mới",
//       "Công nghệ Pin LFP vượt trội", 
//       "Tiêu chuẩn chống nước IP67",
//       "Hệ thống đèn Full LED và đèn pha projector",
//       "Cốp xe rộng tới 17 Lít",
//       "Chế độ lái Eco & Sport"
//     ],
//     image: "/images/bikes/vinfast-evo-neo-official.webp",
//     gallery: [
//       "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw0d5e035f/images/PDP-XMD/evoneo/img-banner-info-sp.webp",
//       "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw6ab30e7b/images/PDP-XMD/evoneo/img-part-01.webp",
//       "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw16dee281/images/PDP-XMD/evoneo/img-part-03.webp"
//     ],
//     badge: "Bán chạy",
//     range: 117,
//     power: 1500,
//     battery: "Pin LFP 2.0 kWh",
//     weight: 88,
//     maxSpeed: 60,
//     chargingTime: "5h20 từ 0% đến 100%",
//     warranty: "2 năm",
//     available: true,
//     colors: ["Đen Nhám", "Xanh Tím Than", "Đỏ Tươi", "Xanh Rêu", "Trắng Ngọc Trai"],
//     dimensions: {
//       length: 1804,
//       width: 683,
//       height: 1127
//     },
//     motorType: "Inhub 1500W",
//     brakeSystem: "Phanh đĩa/cơ",
//     lighting: "Hệ thống đèn Full LED và đèn pha projector",
    
//     // Extended properties for official website match
//     tagline: "Hành trình mới, Phong cách mới",
//     description: "VinFast Evo Neo với công nghệ Pin LFP vượt trội, thiết kế trẻ trung và hiệu suất ổn định",
//     keySpecs: {
//       maxSpeed: "60 km/h",
//       range: "117 km/1 lần sạc", 
//       storage: "17 lít",
//       battery: "Pin LFP 2.0 kWh",
//       chargingTime: "5h20",
//       motor: "Inhub 1500W",
//       maxPower: "2450W",
//       weight: "88 kg",
//       waterResistance: "IP67"
//     },
//     detailedSpecs: {
//       motorPower: "1500W (danh định) / 2450W (tối đa)",
//       batteryType: "Pin LFP",
//       batteryCapacity: "2.0 kWh",
//       chargingType: "Sạc 400W",
//       brakeSystem: "Phanh đĩa phía trước và sau",
//       suspension: "Ống lồng-giảm chấn thủy lực",
//       wheelSize: "14 inch",
//       lighting: "Hệ thống đèn Full LED và đèn pha projector",
//       display: "Màn hình đồng hồ kỹ thuật số HMI 4.5\"",
//       waterResistance: "Tiêu chuẩn chống nước IP67"
//     },
//     colorVariants: {
//       "Đen Nhám": "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwfad7f9f7/images/PDP-XMD/evoneo/img-top-evoneo-black-sp.webp",
//       "Xanh Tím Than": "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw0b316cc0/images/PDP-XMD/evoneo/img-top-evoneo-blue-sp.webp",
//       "Trắng Ngọc Trai": "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw0537c8ee/images/PDP-XMD/evoneo/img-top-evoneo-white-sp.webp",
//       "Xanh Rêu": "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw46480ad9/images/PDP-XMD/evoneo/img-top-evoneo-green-sp.webp",
//       "Đỏ Tươi": "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw450d9ef7/images/PDP-XMD/evoneo/img-top-evoneo-red-sp.webp"
//     }
//   },

//   {
//     id: "motio",
//     name: "VinFast Motio",
//     category: "pho-thong", 
//     price: 12000000,
//     priceFormatted: "12.000.000đ",
//     originalPrice: 13500000,
//     originalPriceFormatted: "13.500.000đ",
//     discount: 11,
//     specs: "Sành điệu - Nổi bật - Chuẩn phong cách | Tốc độ tối đa 49 km/h | Quãng đường 82 km/1 lần sạc",
//     features: [
//       "Thiết kế nhỏ gọn, trẻ trung, năng động",
//       "Hệ thống đèn Full LED và đèn pha LED projector",
//       "Màn hình đồng hồ kỹ thuật số HMI LED Color",
//       "Vành xe 10 inch với bánh sau tích hợp động cơ trong vành",
//       "Thể tích cốp sau đạt tới 22 lít",
//       "Tối ưu chi phí vận hành"
//     ],
//     image: "/images/bikes/vinfast-motio-official.webp",
//     gallery: [
//       "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw6bad8119/images/PDP-XMD/motio/img-banner-info.webp"
//     ],
//     badge: "Học sinh",
//     range: 82,
//     power: 1200,
//     battery: "48V 30Ah",
//     weight: 75,
//     maxSpeed: 49,
//     chargingTime: "6-7 giờ",
//     warranty: "2 năm",
//     available: true,
//     colors: ["Hồng", "Đen", "Trắng", "Đỏ", "Vàng"],
//     dimensions: {
//       length: 1650,
//       width: 650,
//       height: 1050
//     },
//     motorType: "Động cơ điện không chổi than",
//     brakeSystem: "Phanh đĩa phía trước và sau",
//     lighting: "Hệ thống đèn Full LED và đèn pha LED projector",
    
//     // Extended properties
//     tagline: "Sành điệu - Nổi bật - Chuẩn phong cách",
//     description: "VinFast Motio - Xe máy điện học sinh với thiết kế nhỏ gọn, trẻ trung",
//     keySpecs: {
//       maxSpeed: "49 km/h",
//       range: "82 km/1 lần sạc",
//       storage: "22 lít", 
//       battery: "48V 30Ah",
//       chargingTime: "6-7 giờ",
//       motor: "Động cơ điện không chổi than",
//       weight: "75 kg"
//     }
//   },

//   {
//     id: "evo-grand",
//     name: "VinFast Evo Grand", 
//     category: "pho-thong",
//     price: 21000000,
//     priceFormatted: "21.000.000đ",
//     originalPrice: 25000000,
//     originalPriceFormatted: "25.000.000đ",
//     discount: 16,
//     specs: "Chinh phục mọi hành trình | Tốc độ tối đa 70 km/h | Quãng đường 262 km/1 lần sạc",
//     features: [
//       "Quãng đường di chuyển lên tới 262km trong một lần sạc",
//       "Thể tích cốp 35L tối ưu sức chứa", 
//       "Linh hoạt nâng cấp 02 pin kép, gấp đôi năng lượng",
//       "Sử dụng Pin LFP với các ưu điểm vượt trội",
//       "Hệ thống đèn chiếu sáng và đèn tín hiệu Full LED"
//     ],
//     image: "/images/bikes/vinfast-evo-grand-official.webp",
//     gallery: [
//       "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw997effec/landingpage/lp-xmd/evo-grand/hero.webp",
//       "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwb4807e8f/landingpage/lp-xmd/evo-grand/general-visual.webp"
//     ],
//     badge: "Mới",
//     range: 262,
//     power: 2250,
//     battery: "Pin LFP",
//     weight: 95,
//     maxSpeed: 70,
//     chargingTime: "6 giờ 30 phút (0 đến 100%)",
//     warranty: "2 năm",
//     available: true,
//     colors: ["Trắng ngọc trai", "Đen nhám", "Xanh Oliu", "Đỏ tươi", "Vàng cát"],
//     dimensions: {
//       length: 1850,
//       width: 700,
//       height: 1150
//     },
//     motorType: "Inhub 2250W",
//     brakeSystem: "Phanh đĩa phía trước và sau",
//     lighting: "Hệ thống đèn chiếu sáng và đèn tín hiệu Full LED",
    
//     // Extended properties
//     tagline: "Chinh phục mọi hành trình",
//     description: "VinFast Evo Grand - Chinh phục mọi hành trình với quãng đường di chuyển lên tới 262km",
//     keySpecs: {
//       maxSpeed: "70 km/h", 
//       range: "262 km/1 lần sạc",
//       storage: "35 lít",
//       battery: "Pin LFP",
//       chargingTime: "6 giờ 30 phút",
//       motor: "Inhub 2250W",
//       weight: "95 kg"
//     }
//   }

//   // Additional products will be added as we crawl them...
// ];

// export const getProductsByCategory = (category: string): Product[] => {
//   if (category === 'all') return comprehensiveProducts;
//   return comprehensiveProducts.filter(product => product.category === category);
// };

// export const getProductById = (id: string): Product | undefined => {
//   return comprehensiveProducts.find(product => product.id === id);
// };