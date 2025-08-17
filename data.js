// CMSエディター用空データ
// 基本構造のみ定義

// 共通画像データ（基本画像のみ）
const commonImages = [
  {
    id: "placeholder_common",
    name: "プレースホルダー",
    url: "./img/placeholder.jpg",
    alt: "プレースホルダー画像",
    width: 400,
    height: 300
  },
  {
    id: "sample_image",
    name: "サンプル画像",
    url: "./img/hero_image.jpg",
    alt: "サンプル画像",
    width: 800,
    height: 600
  }
];

// 個別画像データ（空）
const individualImages = [];

// パーツデータ（基本パーツのみ）
const partSections = [
  {
    type: 'title',
    description: 'タイトル系のコンポーネント',
    module: [
      {
        title: 'title_1_1',
        category: 'common',
        description: 'メインタイトル',
        tags: ['title', 'common'],
        body: `<div class="m_titleA">
  <h1 class="m_titleA__title">($title:メインタイトルテキスト)</h1>
  <div class="m_titleA__label">($label:ラベルテキスト)</div>
</div>`,
      },
      {
        title: 'title_1_2',
        category: 'common',
        description: 'シンプルタイトル',
        tags: ['title', 'simple'],
        body: `<div class="m_titleB">
  <h2 class="m_titleB__title">($title:サブタイトルテキスト)</h2>
  <p class="m_titleB__subtitle">($subtitle:サブタイトル説明文)</p>
</div>`,
      }
    ]
  },
  {
    type: 'content',
    description: 'コンテンツ系のコンポーネント',
    module: [
      {
        title: 'content_1_1',
        category: 'common',
        description: '基本コンテンツブロック',
        tags: ['content', 'text', 'simple'],
        body: `<div class="m_contentA">
  <div class="m_contentA__header">
    <h2 class="m_contentA__title">($title:コンテンツタイトル)</h2>
    <p class="m_contentA__subtitle">($subtitle:サブタイトル)</p>
  </div>
  <div class="m_contentA__body">
    <p class="m_contentA__text">($content:ここにメインコンテンツが入ります。)</p>
  </div>
</div>`,
      }
    ]
  }
];

// ページデータ（空）
const pageData = [];

// データをグローバルスコープにエクスポート
if (typeof window !== 'undefined') {
  window.cmsData = {
    images: [...commonImages, ...individualImages],
    parts: partSections,
    pageData: pageData
  };
}