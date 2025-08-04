/**
 * My振袖デモ用 ページデータ
 * 実際の振袖サイトで使用されるページ構成
 */

export const myFurisodePageData = [
  {
    id: 'mf_demo_hero_001',
    type: 'hero_section',
    module_name: 'my_furisode_hero_v1',
    theme: 'elegant',
    size: 'large',
    label_type: ['new', 'premium'],
    label: '2024年新作コレクション',
    title: 'My振袖で迎える特別な成人式',
    subtitle: '一生に一度の特別な日を、最高の一着で',
    description: '伝統美と現代性を融合した、あなただけの振袖をお選びください。経験豊富なスタイリストが、お客様の魅力を最大限に引き出す振袖をご提案いたします。',
    bg_image: '/img/furisode_main_2024.jpg',
    bg_alt: 'My振袖 2024年新作コレクション メインビジュアル',
    overlay_style: 'gradient',
    cta_link: '#booking',
    cta_text: 'ご予約・ご相談はこちら',
    button_style: 'primary',
    nested_parts: []
  },
  {
    id: 'mf_demo_collection_001',
    type: 'collection_gallery',
    module_name: 'my_furisode_collection_v1',
    layout: 'grid',
    columns: '3',
    title: '2024年人気コレクション',
    subtitle: '今年最も人気の高い振袖デザイン',
    filter_style: ['category', 'price', 'color'],
    items: [
      {
        id: 'collection_item_001',
        item_title: '古典美「雅桜」',
        item_description: '伝統的な桜と古典文様を現代的にアレンジした上品な一着',
        item_price: '¥318,000',
        price_note: '（税込・フルセット）',
        item_image: '/img/furisode_miyabi_sakura.jpg',
        item_alt: '古典美雅桜 振袖',
        item_tag: '人気No.1',
        tag_style: ['new', 'popular'],
        price_type: 'rental',
        features: ['obi', 'accessories', 'fitting', 'photo']
      },
      {
        id: 'collection_item_002',
        item_title: 'モダン幾何「凛花」',
        item_description: '幾何学模様と花柄の絶妙なバランスが魅力的なモダンデザイン',
        item_price: '¥298,000',
        price_note: '（税込・フルセット）',
        item_image: '/img/furisode_rinka_modern.jpg',
        item_alt: 'モダン幾何凛花 振袖',
        item_tag: '注目デザイン',
        tag_style: ['limited'],
        price_type: 'rental',
        features: ['obi', 'accessories', 'fitting']
      },
      {
        id: 'collection_item_003',
        item_title: '華麗「彩音」',
        item_description: '鮮やかな色彩と繊細な刺繍が際立つ華やかな振袖',
        item_price: '¥358,000',
        price_note: '（税込・フルセット）',
        item_image: '/img/furisode_saion_gorgeous.jpg',
        item_alt: '華麗彩音 振袖',
        item_tag: 'プレミアム',
        tag_style: ['sale', 'limited'],
        price_type: 'rental',
        features: ['obi', 'accessories', 'fitting', 'photo']
      }
    ],
    nested_parts: []
  },
  {
    id: 'mf_demo_campaign_001',
    type: 'campaign_banner',
    module_name: 'my_furisode_campaign_v1',
    style: 'banner',
    urgency: 'urgent',
    campaign_title: '早期ご予約特典キャンペーン',
    campaign_subtitle: '2024年12月31日まで限定',
    campaign_image: '/img/campaign_early_booking.jpg',
    campaign_alt: '早期予約キャンペーン画像',
    badge_text: '期間限定',
    badge_type: ['limited', 'hot'],
    benefits: [
      {
        id: 'benefit_001',
        benefit_icon: '💰',
        benefit_text: 'レンタル料金 最大20%OFF'
      },
      {
        id: 'benefit_002',
        benefit_icon: '📸',
        benefit_text: '前撮り撮影 完全無料'
      },
      {
        id: 'benefit_003',
        benefit_icon: '💄',
        benefit_text: 'ヘアメイク 50%OFF'
      }
    ],
    terms: '※詳細条件は店舗にお問い合わせください。他のキャンペーンとの併用はできません。',
    cta_link: '#booking',
    cta_text: '今すぐ予約して特典をゲット',
    button_type: 'primary',
    nested_parts: []
  },
  {
    id: 'mf_demo_store_001',
    type: 'store_profile',
    module_name: 'my_furisode_store_profile_v1',
    theme: 'elegant',
    layout: 'horizontal',
    store_name: 'My振袖 銀座本店',
    store_badge: '認定本店',
    store_type: ['flagship', 'premium'],
    store_image: '/img/store_exterior.jpg',
    store_alt: 'My振袖銀座本店 外観',
    address: '〒104-0061 東京都中央区銀座4-2-15 塚本素山ビル7階',
    phone: 'TEL: 03-3561-8120',
    hours: '営業時間: 10:30～19:00（年中無休）',
    labels: ['premium', 'award'],
    features: ['parking', 'private', 'photo', 'coordinate', 'delivery'],
    nested_parts: []
  },
  {
    id: 'mf_demo_contact_001',
    type: 'contact_section',
    module_name: 'my_furisode_contact_v1',
    layout: 'split',
    bg: 'gradient',
    title: 'ご予約・お問い合わせ',
    description: 'お気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします',
    phone_title: 'お電話でのご予約',
    phone_number: '03-3561-8120',
    phone_hours: '営業時間: 10:30～19:00（年中無休）',
    online_title: 'オンライン予約',
    online_description: '24時間受付・即時確認可能',
    online_link: '#booking-form',
    contact_features: ['consultation', 'visit', 'online', 'phone'],
    nested_parts: []
  }
];

console.log('📄 My振袖デモ用ページデータ読み込み完了');
