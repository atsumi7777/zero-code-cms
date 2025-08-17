// 振袖専門店向けサンプルデータ
// プロダクト: デモ振袖専門店

// 共通画像データ
const commonImages = [
  {
    id: "hero_bg",
    name: "ヒーロー背景",
    url: "./img/hero_image.jpg",
    alt: "ヒーロー背景画像",
    width: 1920,
    height: 1080
  },
  {
    id: "logo_common",
    name: "共通ロゴ",
    url: "./img/logo.png",
    alt: "Vue CMS ロゴ",
    width: 200,
    height: 60
  },
  {
    id: "banner_common",
    name: "共通バナー",
    url: "./img/banner.jpg",
    alt: "バナー画像",
    width: 1200,
    height: 400
  },
  {
    id: "background_common",
    name: "共通背景",
    url: "./img/background.jpg",
    alt: "背景画像",
    width: 1200,
    height: 800
  },
  {
    id: "team_common",
    name: "共通チーム",
    url: "./img/team.jpg",
    alt: "チーム画像",
    width: 600,
    height: 800
  },
  {
    id: "placeholder_common",
    name: "プレースホルダー",
    url: "./img/placeholder.jpg",
    alt: "プレースホルダー画像",
    width: 400,
    height: 300
  }
];

// 振袖専門店画像データ
const furisodeImages = [
  {
    id: "store_logo",
    name: "店舗ロゴ",
    url: "./img/logo.png",
    alt: "デモ振袖 ロゴ",
    width: 200,
    height: 60
  },
  {
    id: "store_exterior",
    name: "店舗外観",
    url: "./img/store_exterior.jpg",
    alt: "デモ振袖 店舗外観",
    width: 1920,
    height: 1080
  },
  {
    id: "furisode_main",
    name: "メイン振袖",
    url: "./img/furisode_main_2024.jpg",
    alt: "2024年新作振袖",
    width: 800,
    height: 1200
  },
  {
    id: "furisode_miyabi_sakura",
    name: "雅桜振袖",
    url: "./img/furisode_miyabi_sakura.jpg",
    alt: "雅桜シリーズ振袖",
    width: 800,
    height: 1200
  },
  {
    id: "furisode_saion_gorgeous",
    name: "彩音華やか振袖",
    url: "./img/furisode_saion_gorgeous.jpg",
    alt: "彩音華やかシリーズ振袖",
    width: 800,
    height: 1200
  },
  {
    id: "furisode_rinka_modern",
    name: "凛花モダン振袖",
    url: "./img/furisode_rinka_modern.jpg",
    alt: "凛花モダンシリーズ振袖",
    width: 800,
    height: 1200
  },
  {
    id: "default_furisode",
    name: "スタンダード振袖",
    url: "./img/default_furisode.jpg",
    alt: "スタンダード振袖",
    width: 800,
    height: 1200
  },
  {
    id: "campaign_early_booking",
    name: "早期予約キャンペーン",
    url: "./img/campaign_early_booking.jpg",
    alt: "早期予約キャンペーンバナー",
    width: 1200,
    height: 400
  }
];

// パーツデータ（PartSection形式）
const furisodePartSections = [
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
  <div><img src="($image_url:./img/hero_image.jpg)" alt="($image_alt:画像の説明テキスト)"></div>
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
      },
      {
        title: 'blog_title',
        category: 'common',
        description: 'ブログ記事タイトル',
        tags: ['blog', 'title', 'common'],
        body: `<article class="blog-article">
  <header class="blog-header">
    <h1 class="blog-title">{$title:ブログ記事のタイトル}</h1>
    <div class="blog-meta">
      <time class="blog-date">{$date:2024.08.17}</time>
      <span class="blog-category ($categoryColor:bg-primary|bg-secondary|bg-accent)">{$category:振袖知識}</span>
    </div>
  </header>
</article>`,
      }
    ]
  },
  {
    type: 'hero',
    description: 'ヒーロー系のコンポーネント',
    module: [
      {
        title: 'hero_1_1',
        category: 'common',
        description: 'メインヒーロー',
        tags: ['hero', 'common'],
        body: `<div class="m_heroA">
  <div class="m_heroA__background">
    <img src="($bg_image:./img/hero_image.jpg)" alt="($bg_alt:ヒーロー背景画像)">
  </div>
  <div class="m_heroA__content">
    <h1 class="m_heroA__title">($title:ヒーローメインタイトル)</h1>
    <p class="m_heroA__description">($description:ヒーロー説明文がここに入ります)</p>
    <div class="m_heroA__actions">
      <a href="($cta_url:#)" class="m_heroA__cta">($cta_text:今すぐ始める)</a>
    </div>
  </div>
</div>`,
      },
      {
        title: 'furisode_hero',
        category: 'individual',
        description: '振袖ヒーロー',
        tags: ['hero', 'furisode'],
        body: `<section class="furisode-hero ($bgColor:bg-light|bg-white|bg-gradient)">
  <div class="hero-pattern" style="background-image: url('{$bgPattern:./img/background.jpg}');"></div>
  <div class="container">
    <div class="hero-content">
      <div class="hero-badge ($badgeColor:bg-primary|bg-secondary|bg-gradient)">{$badge:2024年新作コレクション}</div>
      <h1 class="($titleColor:color-primary|color-secondary|color-accent)">{$title:一生に一度の<br>特別な瞬間を}</h1>
      <p>{$subtitle:デモ振袖が厳選した最高級振袖で、成人式を最も美しく彩ります}</p>
      <div class="hero-stats">
        <div class="stat-item">
          <div>{$stat1Number:500+}</div>
          <div>{$stat1Label:振袖コレクション}</div>
        </div>
        <div class="stat-item">
          <div>{$stat2Number:98%}</div>
          <div>{$stat2Label:お客様満足度}</div>
        </div>
        <div class="stat-item">
          <div>{$stat3Number:30年}</div>
          <div>{$stat3Label:の信頼と実績}</div>
        </div>
      </div>
      <div class="cta-buttons">
        <button class="($primaryBtnColor:bg-primary|bg-secondary|bg-gradient)">{$primaryBtn:来店予約・相談}</button>
        <button class="($secondaryBtnColor:bg-primary|bg-secondary|bg-accent)">{$secondaryBtn:カタログ請求}</button>
      </div>
    </div>
    <div class="hero-image">
      <img src="{$heroImage:./img/furisode_main_2024.jpg}" alt="{$imageAlt:2024年新作振袖}">
      <div class="image-caption">{$imageCaption:最新コレクションから厳選}</div>
    </div>
  </div>
</section>`,
      }
    ]
  },
  {
    type: 'header',
    description: 'ヘッダー系のコンポーネント',
    module: [
      {
        title: 'furisode_header',
        category: 'individual',
        description: '振袖店ヘッダー',
        tags: ['header', 'furisode'],
        body: `<header class="furisode-header ($bgColor:bg-white|bg-light|bg-gradient)">
  <div class="container">
    <div class="header-content">
      <div class="logo">
        <div class="($logoColor:color-primary|color-secondary|color-accent)">{$shopName:デモ振袖}</div>
      </div>
      <nav class="main-nav">
        <a href="#collection">{$nav1:振袖コレクション}</a>
        <a href="#rental">{$nav2:レンタルプラン}</a>
        <a href="#photostudio">{$nav3:フォトスタジオ}</a>
        <a href="#accessories">{$nav4:小物・アクセサリー}</a>
        <a href="#about">{$nav5:店舗案内}</a>
      </nav>
      <div class="header-cta">
        <button class="($btnColor:bg-primary|bg-secondary|bg-gradient)">{$ctaBtn:来店予約}</button>
      </div>
    </div>
  </div>
</header>`,
      }
    ]
  },
  {
    type: 'blog',
    description: 'ブログ系のコンポーネント',
    module: [
      {
        title: 'blog_text',
        category: 'common',
        description: 'ブログ本文テキスト',
        tags: ['blog', 'text', 'common'],
        body: `<div class="blog-content">
  <div class="blog-text ($textSize:text-normal|text-large|text-small)">
    {$content:ここにブログの本文が入ります。振袖に関する情報や、成人式の準備について詳しく解説します。}
  </div>
</div>`,
      },
      {
        title: 'blog_image',
        category: 'common',
        description: 'ブログ画像',
        tags: ['blog', 'image', 'common'],
        body: `<figure class="blog-figure ($imageAlign:align-center|align-left|align-right)">
  <img src="{$imageUrl:./img/placeholder.jpg}" alt="{$imageAlt:画像の説明}" class="blog-image">
  <figcaption class="blog-caption">{$caption:画像の説明文}</figcaption>
</figure>`,
      },
      {
        title: 'blog_quote',
        category: 'common',
        description: 'ブログ引用',
        tags: ['blog', 'quote', 'common'],
        body: `<blockquote class="blog-quote ($quoteStyle:quote-primary|quote-secondary|quote-accent)">
  <p class="quote-text">{$quote:引用テキストがここに入ります。}</p>
  <cite class="quote-source">{$source:引用元}</cite>
</blockquote>`,
      },
      {
        title: 'blog_list',
        category: 'common',
        description: 'ブログリスト',
        tags: ['blog', 'list', 'common'],
        body: `<div class="blog-list ($listStyle:list-bullet|list-number|list-check)">
  <h3 class="list-title">{$listTitle:リストタイトル}</h3>
  <ul class="list-items" z-for="listItems">
    <li class="list-item">($text:リストアイテム)</li>
  </ul>
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
    <p class="m_contentA__text">($content:ここにメインコンテンツが入ります。リッチテキスト編集に対応しています。)</p>
    <div class="m_contentA__image">
      <img src="($image_url:./img/placeholder.jpg)" alt="($image_alt:コンテンツ画像)">
    </div>
  </div>
</div>`,
      },
      {
        title: 'furisode_collection',
        category: 'individual',
        description: '振袖コレクション',
        tags: ['content', 'collection', 'furisode'],
        body: `<section class="furisode-collection ($bgColor:bg-light|bg-white|bg-gradient)">
  <div class="container">
    <div class="section-header">
      <h2 class="($titleColor:color-primary|color-secondary|color-accent)">{$sectionTitle:2024年新作振袖コレクション}</h2>
      <p>{$sectionDesc:伝統美と現代の感性が織りなす、特別な振袖をご用意いたします}</p>
    </div>
    <div class="collection-grid">
      <div class="furisode-item" z-for="collectionItems">
        <div class="furisode-image">
          <img src="($image:./img/furisode_miyabi_sakura.jpg)" alt="($name:雅桜シリーズ)">
          <div class="collection-badge ($badgeColor:bg-primary|bg-secondary|bg-accent)">($badge:NEW)</div>
        </div>
        <div class="furisode-info">
          <h3>($name:雅桜シリーズ)</h3>
          <p>($description:桜の美しさを表現した優雅な振袖です)</p>
          <div class="price-section">
            <span class="($priceColor:color-primary|color-secondary|color-accent)">($price:レンタル ¥128,000〜)</span>
          </div>
          <button class="($buttonColor:bg-primary|bg-secondary|bg-gradient)">($buttonText:詳細を見る)</button>
        </div>
      </div>
    </div>
  </div>
</section>`,
      }
    ]
  },
  {
    type: 'footer',
    description: 'フッター系のコンポーネント',
    module: [
      {
        title: 'furisode_footer',
        category: 'individual',
        description: '振袖店フッター',
        tags: ['footer', 'furisode'],
        body: `<footer class="furisode-footer ($bgColor:bg-dark|bg-gradient|bg-primary)">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <div>
          <div class="($logoColor:color-primary|color-secondary|color-accent)">{$shopName:デモ振袖}</div>
        </div>
        <p>{$shopDescription:一生に一度の成人式を、最高の振袖で彩る。伝統と革新が融合した特別な一着をご提案いたします。}</p>
        <div class="shop-info">
          <p><strong>{$addressLabel:所在地}:</strong></p>
          <p>{$address:東京都渋谷区表参道3-4-5 表参道ヒルズ2F}</p>
          <p><strong>{$phoneLabel:電話}:</strong> {$phone:03-5678-9012}</p>
          <p><strong>{$emailLabel:メール}:</strong> {$email:info@demo-furisode.jp}</p>
        </div>
      </div>
      <div class="footer-section">
        <h3 class="($titleColor:color-primary|color-secondary|color-accent)">{$servicesTitle:サービス}</h3>
        <ul>
          <li><a href="#">{$service1:振袖レンタル}</a></li>
          <li><a href="#">{$service2:振袖販売}</a></li>
          <li><a href="#">{$service3:着付け・ヘアメイク}</a></li>
          <li><a href="#">{$service4:記念撮影・フォトスタジオ}</a></li>
          <li><a href="#">{$service5:小物・アクセサリー}</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3 class="($titleColor:color-primary|color-secondary|color-accent)">{$storeInfoTitle:店舗情報}</h3>
        <div>
          <p><strong>{$hoursLabel:営業時間}:</strong></p>
          <p>{$weekdayLabel:平日}: {$weekdayHours:10:00 - 19:00}</p>
          <p>{$weekendLabel:土日祝}: {$weekendHours:9:00 - 20:00}</p>
          <p>{$closedLabel:定休日}: {$closedDays:毎週水曜日}</p>
          <p>{$reservationNote:※ 完全予約制}</p>
        </div>
      </div>
      <div class="footer-section">
        <h3 class="($titleColor:color-primary|color-secondary|color-accent)">{$contactTitle:ご予約・お問い合わせ}</h3>
        <p>{$contactText:成人式の振袖選び、前撮り撮影など、お気軽にご相談ください。}</p>
        <button class="($btnColor:bg-primary|bg-secondary|bg-gradient)">{$contactBtn:来店予約フォーム}</button>
        <div class="social-links">
          <button>{$facebookIcon:📘}</button>
          <button>{$instagramIcon:📷}</button>
          <button>{$twitterIcon:🐦}</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {$year:2024} {$copyright:デモ振袖. All rights reserved.}</p>
      <div>
        <a href="#">{$privacyLink:プライバシーポリシー}</a>
        <a href="#">{$termsLink:利用規約}</a>
        <a href="#">{$commerceLink:特定商取引法}</a>
        <a href="#">{$sitemapLink:サイトマップ}</a>
      </div>
    </div>
  </div>
</footer>`,
      }
    ]
  }
];

// ページデータ（コンポーネント配列形式）
const furisodePageData = [
  {
    id: "furisode_header",
    type: "header",
    module_name: "furisode_header",
    parts: [],
    logoImage: "./img/logo.png",
    shopName: "デモ振袖",
    nav1: "振袖コレクション",
    nav2: "レンタルプラン",
    nav3: "フォトスタジオ",
    nav4: "小物・アクセサリー",
    nav5: "店舗案内",
    ctaBtn: "来店予約"
  },
  {
    id: "furisode_hero",
    type: "hero",
    module_name: "furisode_hero",
    parts: [],
    bgPattern: "./img/background.jpg",
    badge: "2024年新作コレクション",
    title: "一生に一度の<br>特別な瞬間を",
    subtitle: "デモ振袖が厳選した最高級振袖で、成人式を最も美しく彩ります",
    stat1Number: "500+",
    stat1Label: "振袖コレクション",
    stat2Number: "98%",
    stat2Label: "お客様満足度",
    stat3Number: "30年",
    stat3Label: "の信頼と実績",
    primaryBtn: "来店予約・相談",
    secondaryBtn: "カタログ請求",
    heroImage: "./img/furisode_main_2024.jpg"
  },
  {
    id: "furisode_collection",
    type: "content",
    module_name: "furisode_collection",
    parts: [],
    sectionTitle: "2024年新作振袖コレクション",
    sectionDesc: "伝統美と現代の感性が織りなす、特別な振袖をご用意いたします",
    collectionItems: [
      {
        image: "./img/furisode_miyabi_sakura.jpg",
        name: "雅桜シリーズ",
        description: "桜の美しさを表現した優雅な振袖です",
        price: "レンタル ¥128,000〜",
        badge: "NEW",
        buttonText: "詳細を見る"
      },
      {
        image: "./img/furisode_saion_gorgeous.jpg",
        name: "彩音華やかシリーズ",
        description: "華やかな色彩が魅力的な振袖です",
        price: "レンタル ¥158,000〜",
        badge: "POPULAR",
        buttonText: "詳細を見る"
      },
      {
        image: "./img/furisode_rinka_modern.jpg",
        name: "凛花モダンシリーズ",
        description: "現代的なデザインの洗練された振袖です",
        price: "レンタル ¥138,000〜",
        badge: "MODERN",
        buttonText: "詳細を見る"
      }
    ]
  }
];

// データをグローバルスコープにエクスポート
if (typeof window !== 'undefined') {
  window.furisodeData = {
    images: [...commonImages, ...furisodeImages],
    parts: furisodePartSections,
    pageData: furisodePageData
  };
}