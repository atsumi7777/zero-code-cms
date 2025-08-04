/**
 * My振袖デモ用 個別画像データ
 * 特定のコンポーネントや店舗専用の画像リソース
 */

export const myFurisodeIndividualImages = [
  {
    id: 'mf_individual_img_001',
    name: 'furisode_miyabi_sakura.jpg',
    alt: '古典美雅桜 振袖',
    category: 'collection',
    tags: ['collection', 'classic', 'sakura', 'elegant', 'popular'],
    url: '/img/furisode_miyabi_sakura.jpg',
    componentId: 'collection_item_001',
    fileData: {
      base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD...',
      size: 176543,
      type: 'image/jpeg'
    }
  },
  {
    id: 'mf_individual_img_002',
    name: 'furisode_rinka_modern.jpg',
    alt: 'モダン幾何凛花 振袖',
    category: 'collection',
    tags: ['collection', 'modern', 'geometric', 'contemporary', 'trendy'],
    url: '/img/furisode_rinka_modern.jpg',
    componentId: 'collection_item_002',
    fileData: {
      base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD...',
      size: 184321,
      type: 'image/jpeg'
    }
  },
  {
    id: 'mf_individual_img_003',
    name: 'furisode_saion_gorgeous.jpg',
    alt: '華麗彩音 振袖',
    category: 'collection',
    tags: ['collection', 'gorgeous', 'colorful', 'premium', 'luxury'],
    url: '/img/furisode_saion_gorgeous.jpg',
    componentId: 'collection_item_003',
    fileData: {
      base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD...',
      size: 198765,
      type: 'image/jpeg'
    }
  },
  {
    id: 'mf_individual_img_004',
    name: 'store_interior.jpg',
    alt: '店内風景',
    category: 'store',
    tags: ['store', 'interior', 'elegant', 'spacious', 'premium'],
    url: '/img/store_interior.jpg',
    componentId: 'mf_demo_store_001',
    fileData: {
      base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD...',
      size: 203456,
      type: 'image/jpeg'
    }
  },
  {
    id: 'mf_individual_img_005',
    name: 'staff_consultation.jpg',
    alt: 'スタッフコンサルテーション風景',
    category: 'service',
    tags: ['service', 'consultation', 'staff', 'customer'],
    url: '/img/staff_consultation.jpg',
    componentId: 'service_consultation_001',
    fileData: {
      base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD...',
      size: 167890,
      type: 'image/jpeg'
    }
  }
];

console.log('📸 My振袖デモ用個別画像データ読み込み完了');
