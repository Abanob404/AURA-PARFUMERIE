/* AURA Parfumerie — temporary preview data.
   Set PERFUME_PREVIEW_MODE to false when the real perfume catalogue is ready. */
window.PERFUME_PREVIEW_MODE = true;

const pexels = (id, width = 900) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
const daysAgo = (days) => new Date(Date.now() - days * 86400000).toISOString();

window.PERFUME_DEMO_SETTINGS = {
  enableWishlist: true,
  enableCompare: true,
  enableRecentlyViewed: true,
  showHomeCollections: true,
  isQuickBuyEnabled: true,
  newProductDays: 45,
  lowStockThreshold: 3,
  isShippingEnabled: true,
  pickupEnabled: true,
  freeShippingThreshold: 2000,
  paymentCashOnDelivery: true,
  paymentStorePickup: true,
  whatsappNumber: '',
  whatsappChannelUrl: '',
  facebookUrl: '',
  instagramUrl: '',
  telegramUrl: '',
  tiktokUrl: '',
  xUrl: ''
};

window.PERFUME_DEMO_PRODUCTS = [
  {
    _id: '66aa00000000000000000001', title: 'Amber Noir', category: 'عطور رجالي', publicBrand: 'AURA Signature',
    price: 1850, oldPrice: 2150, stockQuantity: 14, sku: 'AURA-M-001', image: pexels(36834015),
    additionalImages: [{url: pexels(16239693), publicId: ''}], isFeatured: true, customBadge: 'الأكثر طلباً',
    warranty: '100 مل • Eau de Parfum',
    description: ['المقدمة: برغموت وفلفل أسود', 'القلب: خشب الأرز واللافندر', 'القاعدة: عنبر، باتشولي ومسك'],
    tags: ['رجالي','عنبر','خشبي','مسك','دافئ'], createdAt: daysAgo(5),
    variants: [{label:'الحجم', value:'50 مل', price:1150, oldPrice:1350, stockQuantity:8, sku:'AURA-M-001-50'}, {label:'الحجم', value:'100 مل', price:1850, oldPrice:2150, stockQuantity:14, sku:'AURA-M-001-100'}]
  },
  {
    _id: '66aa00000000000000000002', title: 'Velvet Rose', category: 'عطور نسائي', publicBrand: 'Maison AURA',
    price: 1650, stockQuantity: 11, sku: 'AURA-W-002', image: pexels(29801749), isFeatured: true, customBadge: 'اختيار أنيق',
    warranty: '100 مل • Eau de Parfum',
    description: ['المقدمة: ليتشي وبرغموت', 'القلب: ورد تركي وفاوانيا', 'القاعدة: فانيليا ومسك أبيض'],
    tags: ['نسائي','ورد','زهري','فانيليا','ناعم'], createdAt: daysAgo(9),
    variants: [{label:'الحجم', value:'50 مل', price:1050, stockQuantity:7, sku:'AURA-W-002-50'}, {label:'الحجم', value:'100 مل', price:1650, stockQuantity:11, sku:'AURA-W-002-100'}]
  },
  {
    _id: '66aa00000000000000000003', title: 'White Musk Veil', category: 'يونيسكس', publicBrand: 'AURA Essentials',
    price: 1350, oldPrice: 1500, stockQuantity: 18, sku: 'AURA-U-003', image: pexels(12053222), customBadge: 'نظيف وهادئ',
    warranty: '75 مل • Eau de Parfum',
    description: ['المقدمة: ألدهيدات ناعمة', 'القلب: زهر البرتقال والياسمين', 'القاعدة: مسك أبيض وخشب الصندل'],
    tags: ['يونيسكس','مسك','نظيف','بودري','نهاري'], createdAt: daysAgo(14)
  },
  {
    _id: '66aa00000000000000000004', title: 'Royal Oud', category: 'عود وشرقي', publicBrand: 'AURA Oud',
    price: 2450, stockQuantity: 7, sku: 'AURA-O-004', image: pexels(23319708), isFeatured: true, customBadge: 'Signature Oud',
    warranty: '100 مل • Extrait de Parfum',
    description: ['المقدمة: زعفران وهيل', 'القلب: عود فاخر وورد', 'القاعدة: عنبر، جلد وخشب الصندل'],
    tags: ['عود','شرقي','زعفران','ثقيل','مسائي'], createdAt: daysAgo(2)
  },
  {
    _id: '66aa00000000000000000005', title: 'Citrus Atelier', category: 'يونيسكس', publicBrand: 'Atelier AURA',
    price: 1490, stockQuantity: 16, sku: 'AURA-U-005', image: pexels(8516167), customBadge: 'Fresh',
    warranty: '100 مل • Eau de Parfum',
    description: ['المقدمة: ليمون صقلي وبرغموت', 'القلب: نيرولي وشاي أخضر', 'القاعدة: فيتيفر ومسك'],
    tags: ['يونيسكس','حمضيات','منعش','نهاري','صيفي'], createdAt: daysAgo(19)
  },
  {
    _id: '66aa00000000000000000006', title: 'Vanilla Suede', category: 'عطور نسائي', publicBrand: 'Maison AURA',
    price: 1725, oldPrice: 1950, stockQuantity: 9, sku: 'AURA-W-006', image: pexels(7487832), customBadge: 'Warm Vanilla',
    warranty: '90 مل • Eau de Parfum',
    description: ['المقدمة: لوز وكمثرى', 'القلب: فانيليا وأوركيد', 'القاعدة: سويد، تونكا ومسك'],
    tags: ['نسائي','فانيليا','دافئ','حلو','مسائي'], createdAt: daysAgo(25)
  },
  {
    _id: '66aa00000000000000000007', title: 'Sandal Reserve', category: 'عطور رجالي', publicBrand: 'AURA Signature',
    price: 1990, stockQuantity: 6, sku: 'AURA-M-007', image: pexels(9533168),
    warranty: '100 مل • Eau de Parfum',
    description: ['المقدمة: جريب فروت ومريمية', 'القلب: خشب الصندل والسوسن', 'القاعدة: تونكا، عنبر وخشب جاف'],
    tags: ['رجالي','خشبي','صندل','راقي','مسائي'], createdAt: daysAgo(33)
  },
  {
    _id: '66aa00000000000000000008', title: 'Oud & Musk Discovery Set', category: 'هدايا ومجموعات', publicBrand: 'AURA Gifting',
    price: 1290, stockQuantity: 20, sku: 'AURA-G-008', image: pexels(16239693), customBadge: 'هدية',
    warranty: '4 × 15 مل • Gift Set',
    description: ['مجموعة اكتشاف من 4 روائح مختارة', 'عود، مسك، عنبر وورد', 'تغليف هدايا فاخر جاهز للتقديم'],
    tags: ['هدايا','مجموعة','عود','مسك','عينات'], createdAt: daysAgo(7)
  }
];
