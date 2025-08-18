// Zero Code エディター用サンプルデータ
// JavaScript形式でのデータ定義例

// 画像データ
const sampleImages = [
  {
    id: "hero_main",
    name: "メインビジュアル",
    url: "./img/hero_image.jpg",
    alt: "ヒーロー画像",
    width: 1920,
    height: 1080
  },
  {
    id: "logo_main",
    name: "ロゴ",
    url: "./img/logo.png",
    alt: "サイトロゴ",
    width: 200,
    height: 60
  },
  {
    id: "placeholder_1",
    name: "プレースホルダー",
    url: "./img/placeholder.jpg",
    alt: "プレースホルダー画像",
    width: 400,
    height: 300
  },
  {
    id: "banner_1",
    name: "バナー画像",
    url: "./img/banner.jpg",
    alt: "キャンペーンバナー",
    width: 1200,
    height: 400
  },
  {
    id: "team_photo",
    name: "チーム写真",
    url: "./img/team.jpg",
    alt: "チームメンバー",
    width: 800,
    height: 600
  }
];

// パーツデータ（テンプレート定義）
const sampleParts = [
  {
    type: 'header',
    description: 'ヘッダーコンポーネント',
    module: [
      {
        title: 'site_header',
        category: 'common',
        description: 'サイトヘッダー',
        tags: ['header', 'navigation'],
        body: `<header class="site-header ($bgColor:bg-white|bg-light|bg-dark)">
  <div class="container">
    <div class="logo">
      <img src="{$logoUrl:./img/logo.png}" alt="{$logoAlt:ロゴ}">
    </div>
    <nav class="main-nav">
      <a href="#">{$nav1:ホーム}</a>
      <a href="#">{$nav2:サービス}</a>
      <a href="#">{$nav3:会社情報}</a>
      <a href="#">{$nav4:お問い合わせ}</a>
    </nav>
  </div>
</header>`
      }
    ]
  },
  {
    type: 'hero',
    description: 'ヒーローセクション',
    module: [
      {
        title: 'hero_section',
        category: 'common',
        description: 'メインヒーロー',
        tags: ['hero', 'main'],
        body: `<section class="hero ($bgStyle:gradient|solid|image)">
  <div class="hero-content">
    <h1>{$title:Welcome to Our Site}</h1>
    <p>{$subtitle:素晴らしい体験をお届けします}</p>
    <button class="($btnStyle:btn-primary|btn-secondary|btn-outline)">{$btnText:今すぐ始める}</button>
  </div>
  <div class="hero-image">
    <img src="{$heroImage:./img/hero_image.jpg}" alt="{$imageAlt:ヒーロー画像}">
  </div>
</section>`
      },
      {
        title: 'hero_simple',
        category: 'common',
        description: 'シンプルヒーロー',
        tags: ['hero', 'simple'],
        body: `<section class="hero-simple ($alignment:text-center|text-left|text-right)">
  <h1>{$title:シンプルなタイトル}</h1>
  <p>{$subtitle:サブタイトルテキスト}</p>
</section>`
      }
    ]
  },
  {
    type: 'content',
    description: 'コンテンツセクション',
    module: [
      {
        title: 'text_block',
        category: 'common',
        description: 'テキストブロック',
        tags: ['content', 'text'],
        body: `<div class="text-block">
  <h2>{$heading:見出しテキスト}</h2>
  <p>{$content:ここに本文が入ります。重要な情報を分かりやすく伝えましょう。}</p>
</div>`
      },
      {
        title: 'feature_cards',
        category: 'common',
        description: '特徴カード',
        tags: ['content', 'cards', 'features'],
        body: `<div class="feature-cards">
  <h2>{$sectionTitle:特徴}</h2>
  <div class="cards-grid" z-for="features">
    <div class="card">
      <h3>($title:特徴タイトル)</h3>
      <p>($description:特徴の説明)</p>
    </div>
  </div>
</div>`
      },
      {
        title: 'image_text',
        category: 'common',
        description: '画像付きテキスト',
        tags: ['content', 'image', 'text'],
        body: `<div class="image-text ($layout:image-left|image-right)">
  <div class="image-side">
    <img src="{$imageUrl:./img/placeholder.jpg}" alt="{$imageAlt:画像の説明}">
  </div>
  <div class="text-side">
    <h2>{$title:タイトル}</h2>
    <p>{$description:説明文がここに入ります。}</p>
    <button class="($btnStyle:btn-primary|btn-secondary)">{$btnText:詳細を見る}</button>
  </div>
</div>`
      },
      {
        title: 'testimonial',
        category: 'common',
        description: 'お客様の声',
        tags: ['content', 'testimonial'],
        body: `<div class="testimonial">
  <blockquote>
    <p>"{$quote:お客様の感想がここに入ります。}"</p>
    <cite>
      <strong>{$name:お客様名}</strong>
      <span>{$company:会社名}</span>
    </cite>
  </blockquote>
</div>`
      }
    ]
  },
  {
    type: 'footer',
    description: 'フッターコンポーネント',
    module: [
      {
        title: 'site_footer',
        category: 'common',
        description: 'サイトフッター',
        tags: ['footer'],
        body: `<footer class="site-footer ($bgColor:bg-dark|bg-light|bg-primary)">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h3>{$companyName:会社名}</h3>
        <p>{$companyDesc:会社の説明}</p>
      </div>
      <div class="footer-section">
        <h3>リンク</h3>
        <ul z-for="footerLinks">
          <li><a href="#">($linkText:リンクテキスト)</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>お問い合わせ</h3>
        <p>{$email:info@example.com}</p>
        <p>{$phone:03-1234-5678}</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {$year:2024} {$copyright:All rights reserved.}</p>
    </div>
  </div>
</footer>`
      }
    ]
  }
];

// ページデータ（実際のインスタンス）
const samplePageData = [
  {
    id: "header_instance",
    type: "header",
    module_name: "site_header",
    parts: [],
    bgColor: "bg-white",
    logoUrl: "./img/logo.png",
    logoAlt: "サイトロゴ",
    nav1: "ホーム",
    nav2: "サービス",
    nav3: "会社情報",
    nav4: "お問い合わせ"
  },
  {
    id: "hero_instance",
    type: "hero",
    module_name: "hero_section",
    parts: [],
    bgStyle: "gradient",
    title: "Zero Code CMSへようこそ",
    subtitle: "直感的な操作で、誰でも簡単にWebサイトを編集",
    btnStyle: "btn-primary",
    btnText: "デモを見る",
    heroImage: "./img/hero_image.jpg",
    imageAlt: "CMSデモ画像"
  },
  {
    id: "text_instance_1",
    type: "content",
    module_name: "text_block",
    parts: [],
    heading: "Zero Codeとは",
    content: "Zero Codeは、プログラミング知識がなくても簡単にWebサイトを編集できるCMSエディターです。ドラッグ&ドロップで直感的に操作でき、リアルタイムでプレビューを確認しながら編集できます。"
  },
  {
    id: "feature_instance",
    type: "content",
    module_name: "feature_cards",
    parts: [],
    sectionTitle: "主な特徴",
    features: [
      {
        title: "簡単操作",
        description: "ドラッグ&ドロップで直感的に編集できます"
      },
      {
        title: "リアルタイムプレビュー",
        description: "編集内容をすぐに確認できます"
      },
      {
        title: "レスポンシブ対応",
        description: "あらゆるデバイスで美しく表示されます"
      },
      {
        title: "Web Components",
        description: "どんなサイトにも簡単に組み込めます"
      }
    ]
  },
  {
    id: "image_text_instance",
    type: "content",
    module_name: "image_text",
    parts: [],
    layout: "image-left",
    imageUrl: "./img/team.jpg",
    imageAlt: "チーム写真",
    title: "私たちについて",
    description: "私たちは、誰もが簡単にWebサイトを作成・編集できる世界を目指しています。技術的な障壁を取り除き、創造性を最大限に発揮できるツールを提供します。",
    btnStyle: "btn-secondary",
    btnText: "詳しく見る"
  },
  {
    id: "testimonial_instance",
    type: "content",
    module_name: "testimonial",
    parts: [],
    quote: "Zero Codeのおかげで、技術者でない私でも簡単にWebサイトを更新できるようになりました。本当に素晴らしいツールです！",
    name: "山田 太郎",
    company: "株式会社サンプル"
  },
  {
    id: "footer_instance",
    type: "footer",
    module_name: "site_footer",
    parts: [],
    bgColor: "bg-dark",
    companyName: "Zero Code Inc.",
    companyDesc: "次世代のCMSソリューションを提供します",
    email: "info@zerocode.com",
    phone: "03-1234-5678",
    year: "2024",
    copyright: "Zero Code Inc. All rights reserved.",
    footerLinks: [
      { linkText: "プライバシーポリシー" },
      { linkText: "利用規約" },
      { linkText: "サイトマップ" },
      { linkText: "お問い合わせ" }
    ]
  }
];

// グローバルスコープにエクスポート
if (typeof window !== 'undefined') {
  window.sampleData = {
    images: sampleImages,
    parts: sampleParts,
    pageData: samplePageData
  };

  console.log('サンプルデータが読み込まれました:', {
    画像数: sampleImages.length,
    パーツ数: sampleParts.reduce((acc, section) => acc + section.module.length, 0),
    ページ要素数: samplePageData.length
  });
}