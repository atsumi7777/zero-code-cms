/**
 * Sample Individual Parts - Vue CMSエディター用個別パーツテンプレート
 * 
 * 個別パーツは特定のページや用途に特化したパーツです。
 * 共通パーツとは異なり、プロジェクト固有の要件に合わせて作成されます。
 */
export const individualParts = [
  {
    type: 'special',
    module: [
      {
        title: 'hero_banner',
        category: 'individual',
        body: `
<div class="hero-banner ($theme:dark|light|gradient)">
  <div class="hero-banner__background">
    <img src="($bg_image:/assets/img/banner.jpg)" alt="($bg_alt:背景画像)" />
  </div>
  <div class="hero-banner__content">
    <h1 class="hero-banner__title">{$main_title:特別なメインタイトル}</h1>
    <p class="hero-banner__subtitle">{$subtitle:魅力的なサブタイトルテキスト}</p>
    <div class="hero-banner__cta">
      <button class="hero-banner__btn ($btn_style:primary|secondary|outline)">
        {$cta_text:詳細を見る}
      </button>
    </div>
  </div>
  <div class="hero-banner__features ($layout?:grid|list|carousel)">
    <div z-for-wrapper="features">
      <div z-for="features" class="hero-banner__feature-item">
        <h3>{$feature_title:機能タイトル}</h3>
        <p>{$feature_desc:機能の説明文}</p>
      </div>
    </div>
  </div>
</div>`,
      },
      {
        title: 'product_showcase',
        category: 'individual',
        body: `
<div class="product-showcase ($display:featured|grid|carousel)">
  <div class="product-showcase__header">
    <h2>{$section_title:おすすめ商品}</h2>
    <p>{$section_desc:厳選された商品をご紹介}</p>
  </div>
  <div class="product-showcase__grid" z-for-wrapper="products">
    <div z-for="products" class="product-showcase__item ($item_style:card|minimal|detailed)">
      <div class="product-showcase__image">
        <img src="($product_image:/assets/img/product1.jpg)" alt="($product_alt:商品画像)" />
      </div>
      <div class="product-showcase__info">
        <h3>{$product_name:商品名}</h3>
        <p>{$product_desc:商品説明文}</p>
        <div class="product-showcase__price">{$price:¥0,000}</div>
        <div class="product-showcase__tags ($tags?:new|sale|popular|limited)">
          <span>商品タグ</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
  },
  {
    type: 'landing',
    module: [
      {
        title: 'testimonial_section',
        category: 'individual',
        body: `
<div class="testimonial-section ($style:modern|classic|minimal)">
  <div class="testimonial-section__header">
    <h2>{$section_title:お客様の声}</h2>
    <p>{$section_subtitle:実際にご利用いただいたお客様からの声}</p>
  </div>
  <div class="testimonial-section__content" z-for-wrapper="testimonials">
    <div z-for="testimonials" class="testimonial-section__item ($rating:5|4|3|2|1)">
      <div class="testimonial-section__quote">
        <p>{$quote:「素晴らしいサービスでした。満足しています。」}</p>
      </div>
      <div class="testimonial-section__author">
        <div class="testimonial-section__avatar">
          <img src="($avatar:/assets/img/team.jpg)" alt="($avatar_alt:お客様写真)" />
        </div>
        <div class="testimonial-section__info">
          <h4>{$customer_name:田中 太郎}</h4>
          <p>{$customer_title:会社員}</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
      },
      {
        title: 'cta_section',
        category: 'individual',
        body: `
<div class="cta-section ($urgency:high|medium|low)">
  <div class="cta-section__background ($bg_style:gradient|solid|image)">
    <div class="cta-section__content">
      <h2>{$cta_title:今すぐ行動を起こしましょう}</h2>
      <p>{$cta_description:限定オファーは今だけ！この機会をお見逃しなく。}</p>
      <div class="cta-section__buttons">
        <button class="cta-section__primary-btn ($primary_style:large|normal|small)">
          {$primary_text:無料で始める}
        </button>
        <button class="cta-section__secondary-btn ($secondary_style:outline|ghost|text)">
          {$secondary_text:詳細を見る}
        </button>
      </div>
      <div class="cta-section__trust-signals ($signals?:security|guarantee|support|awards)">
        <span>信頼の証</span>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
  },
  {
    type: 'custom',
    module: [
      {
        title: 'stats_counter',
        category: 'individual',
        body: `
<div class="stats-counter ($animation:fade|slide|count)">
  <div class="stats-counter__header">
    <h2>{$stats_title:数字で見る実績}</h2>
  </div>
  <div class="stats-counter__grid" z-for-wrapper="stats">
    <div z-for="stats" class="stats-counter__item ($highlight?:primary|secondary|accent)">
      <div class="stats-counter__number">{$number:1,000}</div>
      <div class="stats-counter__label">{$label:満足したお客様}</div>
      <div class="stats-counter__unit">{$unit:人以上}</div>
    </div>
  </div>
  <div class="stats-counter__note">
    <p>{$note:※2024年1月現在のデータです}</p>
  </div>
</div>`,
      },
    ],
  },
]