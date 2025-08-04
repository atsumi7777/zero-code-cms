/**
 * My振袖専用サンプルデータ
 * ZERO CODE EDITOR用の振袖業界特化データ
 */

// My振袖専用ページデータ
export const myFurisodePageData = [
  {
    id: "mf_main_title_001",
    type: "title",
    module_name: "my_furisode_title_v1",
    style: "elegant",
    size: "large",
    label_type: ["new", "limited"],
    label: "2024年新作",
    title: "My振袖 2024年 成人式コレクション",
    description:
      "一生に一度の成人式を、最高の一着で。伝統美と現代性を融合した特別な振袖をご用意しております。",
    image_url: "/public/assets/img/furisode_main_2024.jpg",
    image_alt: "My振袖 2024年新作コレクション メインビジュアル",
    nested_parts: [
      {
        id: "mf_gallery_001",
        type: "gallery",
        module_name: "my_furisode_gallery_v1",
        layout: "grid",
        columns: "3",
        heading: "人気コレクション TOP3",
        description: "今年最も人気の高い振袖デザインをご紹介いたします",
        items: [
          {
            id: "collection_item_001",
            item_title: "古典美「雅桜」",
            item_description:
              "伝統的な桜と古典文様を現代的にアレンジした上品な一着",
            item_price: "¥318,000（税込）",
            item_image: "/public/assets/img/furisode_miyabi_sakura.jpg",
            item_alt: "古典美雅桜 振袖",
            tag_style: ["new", "popular"],
          },
          {
            id: "collection_item_002",
            item_title: "モダン幾何「凛花」",
            item_description:
              "幾何学模様と花柄の絶妙なバランスが魅力的なモダンデザイン",
            item_price: "¥298,000（税込）",
            item_image: "/public/assets/img/furisode_rinka_modern.jpg",
            item_alt: "モダン幾何凛花 振袖",
            tag_style: ["limited"],
          },
          {
            id: "collection_item_003",
            item_title: "華麗「彩音」",
            item_description: "鮮やかな色彩と繊細な刺繍が際立つ華やかな振袖",
            item_price: "¥358,000（税込）",
            item_image: "/public/assets/img/furisode_saion_gorgeous.jpg",
            item_alt: "華麗彩音 振袖",
            tag_style: ["sale", "special"],
          },
        ],
      },
    ],
  },
  {
    id: "mf_store_info_001",
    type: "store_info",
    module_name: "my_furisode_store_v1",
    theme: "elegant",
    store_name: "My振袖 銀座本店",
    store_type: ["flagship"],
    address: "〒104-0061 東京都中央区銀座4-2-15 塚本素山ビル7階",
    phone: "TEL: 03-3561-8120",
    hours: "営業時間: 10:30～19:00（年中無休）",
    features: ["parking", "consultation", "fitting", "delivery"],
    nested_parts: [
      {
        id: "store_services_001",
        type: "text",
        module_name: "text_1_2",
        size: "s_medium",
        heading: "銀座本店でのサービス",
        content: `
          <p><strong>My振袖銀座本店</strong>では、お客様一人ひとりに最適な振袖選びをサポートいたします。</p>
          <ul>
            <li>🎨 <strong>専属スタイリスト</strong>による個別コーディネート相談</li>
            <li>📷 <strong>撮影スタジオ完備</strong>で試着時の記念撮影</li>
            <li>🚗 <strong>専用駐車場</strong>完備（2時間無料）</li>
            <li>🏠 <strong>出張試着サービス</strong>（都内限定）</li>
            <li>💎 <strong>小物レンタル</strong>充実（帯締め・帯揚げ・草履・バッグ）</li>
          </ul>
          <p>ご来店予約は<a href="tel:03-3561-8120">お電話</a>またはWebサイトから承っております。</p>
        `,
        topics: ["services", "consultation", "fitting"],
      },
    ],
  },
  {
    id: "mf_seasonal_campaign_001",
    type: "title",
    module_name: "my_furisode_title_v1",
    style: "modern",
    size: "medium",
    label_type: ["seasonal"],
    label: "期間限定キャンペーン",
    title: "早期ご予約で特別特典",
    description:
      "2024年12月末までにご予約いただいたお客様に特別な特典をご用意しております。",
    image_url: "/public/assets/img/campaign_early_booking.jpg",
    image_alt: "早期予約キャンペーン",
    nested_parts: [
      {
        id: "campaign_benefits_001",
        type: "text",
        module_name: "text_1_1",
        state: "s_state1",
        content: `
          <div style="background: linear-gradient(135deg, #ff6b9d, #ff8a00); color: white; padding: 2rem; border-radius: 12px; text-align: center;">
            <h3 style="margin: 0 0 1rem 0; font-size: 1.5rem;">🎁 早期ご予約特典</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin: 0.5rem 0;">✨ <strong>振袖レンタル料金 10%OFF</strong></li>
              <li style="margin: 0.5rem 0;">📸 <strong>前撮り撮影 無料</strong>（通常¥30,000）</li>
              <li style="margin: 0.5rem 0;">💄 <strong>ヘアメイク 50%OFF</strong></li>
              <li style="margin: 0.5rem 0;">👘 <strong>小物一式 無料レンタル</strong></li>
            </ul>
            <p style="margin: 1rem 0 0 0; font-size: 0.9rem; opacity: 0.9;">
              ※2024年12月31日までのご予約限定
            </p>
          </div>
        `,
        author: "My振袖キャンペーン事務局",
      },
    ],
  },
];

// My振袖専用共通パーツ
export const myFurisodeCommonParts = [
  {
    type: "title",
    module: [
      {
        title: "my_furisode_title_v1",
        category: "my_furisode",
        body: `
<div class="mf_titleSection ($style:classic|modern|elegant) ($size:small|medium|large)">
  <div class="mf_titleSection__labels">
    <div class="mf_titleSection__label ($label_type?:new|limited|popular|seasonal|sale)">{$label:新作}</div>
  </div>
  <h2 class="mf_titleSection__title">{$title:振袖タイトル}</h2>
  <p class="mf_titleSection__description">{$description:振袖の説明文がここに入ります}</p>
  <div class="mf_titleSection__image">
            <img src="($image_url:/public/assets/img/default_furisode.jpg)" alt="($image_alt:振袖画像)">
  </div>
  <div z-slot="nested_parts" class="mf_titleSection__content"></div>
</div>`,
      },
    ],
  },
  {
    type: "gallery",
    module: [
      {
        title: "my_furisode_gallery_v1",
        category: "my_furisode",
        body: `
<div class="mf_gallery ($layout:grid|slider|masonry) ($columns:2|3|4)">
  <div class="mf_gallery__header">
    <h3 class="mf_gallery__heading">{$heading:振袖ギャラリー}</h3>
    <p class="mf_gallery__description">{$description:ギャラリーの説明}</p>
  </div>
  <div class="mf_gallery__wrapper" z-for-wrapper="items">
    <div class="mf_gallery__item" z-for="items">
      <div class="mf_gallery__image">
        <img src="($item_image:/public/assets/img/default_furisode.jpg)" alt="($item_alt:振袖)">
        <div class="mf_gallery__overlay">
          <div class="mf_gallery__tags">
            <span class="mf_gallery__tag ($tag_style?:new|popular|limited|sale)">タグ</span>
          </div>
        </div>
      </div>
      <div class="mf_gallery__info">
        <h4 class="mf_gallery__title">{$item_title:振袖名}</h4>
        <p class="mf_gallery__desc">{$item_description:説明}</p>
        <div class="mf_gallery__price ($price_style:normal|sale|special)">{$item_price:¥298,000}</div>
        <div z-slot="nested_parts" class="mf_gallery__additional"></div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
  },
  {
    type: "text",
    module: [
      {
        title: "my_furisode_text_v1",
        category: "my_furisode",
        body: `
<div class="mf_textSection ($style:standard|highlight|quote) ($size:small|medium|large)">
  <div class="mf_textSection__header">
    <h3 class="mf_textSection__heading">{$heading:セクション見出し}</h3>
    <div class="mf_textSection__meta">
      <span class="mf_textSection__author">{$author:My振袖}</span>
      <span class="mf_textSection__topics ($topics?:furisode|seijinshiki|rental|coordinate|campaign)">トピック</span>
    </div>
  </div>
  <div class="mf_textSection__content">
    <div class="mf_textSection__text">{$content:テキストコンテンツがここに入ります}</div>
    <div z-slot="nested_parts" class="mf_textSection__nested"></div>
  </div>
</div>`,
      },
    ],
  },
];

// My振袖専用個別パーツ
export const myFurisodeIndividualParts = [
  {
    type: "store_info",
    module: [
      {
        title: "my_furisode_store_v1",
        category: "my_furisode_individual",
        body: `
<div class="mf_storeInfo ($theme:warm|elegant|modern)">
  <div class="mf_storeInfo__header">
    <h3 class="mf_storeInfo__name">{$store_name:店舗名}</h3>
    <div class="mf_storeInfo__labels">
      <span class="mf_storeInfo__type ($store_type?:flagship|branch|outlet|partner)">{$store_type:本店}</span>
    </div>
  </div>
  <div class="mf_storeInfo__details">
    <div class="mf_storeInfo__address">
      <i class="icon-location"></i>
      <span>{$address:住所}</span>
    </div>
    <div class="mf_storeInfo__phone">
      <i class="icon-phone"></i>
      <span>{$phone:電話番号}</span>
    </div>
    <div class="mf_storeInfo__hours">
      <i class="icon-clock"></i>
      <span>{$hours:営業時間}</span>
    </div>
  </div>
  <div class="mf_storeInfo__features">
    <h4>店舗特徴・サービス</h4>
    <div class="mf_storeInfo__featureList ($features?:parking|consultation|fitting|delivery|studio|coordinate)">
      <span class="mf_storeInfo__feature">サービス一覧</span>
    </div>
  </div>
  <div z-slot="nested_parts" class="mf_storeInfo__additional"></div>
</div>`,
      },
    ],
  },
  {
    type: "price_plan",
    module: [
      {
        title: "my_furisode_price_v1",
        category: "my_furisode_individual",
        body: `
<div class="mf_pricePlan ($plan_type:basic|standard|premium) ($highlight?:popular|recommended|limited)">
  <div class="mf_pricePlan__header">
    <h3 class="mf_pricePlan__title">{$plan_title:プラン名}</h3>
    <div class="mf_pricePlan__badge ($badge_type?:new|popular|limited|sale)">バッジ</div>
  </div>
  <div class="mf_pricePlan__price">
    <span class="mf_pricePlan__amount">{$price:¥298,000}</span>
    <span class="mf_pricePlan__unit">{$unit:（税込）}</span>
  </div>
  <div class="mf_pricePlan__description">
    <p>{$description:プランの詳細説明がここに入ります}</p>
  </div>
  <div class="mf_pricePlan__features" z-for-wrapper="features">
    <div class="mf_pricePlan__feature" z-for="features">
      <i class="mf_pricePlan__featureIcon ($feature_icon:check|star|heart|diamond)"></i>
      <span>{$feature_text:特徴項目}</span>
    </div>
  </div>
  <div class="mf_pricePlan__includes ($include_type?:furisode|obi|accessories|shoes|bag|makeup|photo)">
    <span>含まれるアイテム</span>
  </div>
  <div z-slot="nested_parts" class="mf_pricePlan__additional"></div>
</div>`,
      },
    ],
  },
  {
    type: "booking_form",
    module: [
      {
        title: "my_furisode_booking_v1",
        category: "my_furisode_individual",
        body: `
<div class="mf_bookingForm ($form_style:simple|detailed|campaign)">
  <div class="mf_bookingForm__header">
    <h3 class="mf_bookingForm__title">{$form_title:ご予約・お問い合わせ}</h3>
    <p class="mf_bookingForm__subtitle">{$form_subtitle:お気軽にお問い合わせください}</p>
  </div>
  <div class="mf_bookingForm__content">
    <div class="mf_bookingForm__info">
      <div class="mf_bookingForm__contact">
        <div class="mf_bookingForm__phone">
          <strong>お電話でのご予約</strong><br>
          <span class="mf_bookingForm__phoneNumber">{$phone_number:03-3561-8120}</span><br>
          <span class="mf_bookingForm__phoneHours">{$phone_hours:営業時間: 10:30～19:00}</span>
        </div>
        <div class="mf_bookingForm__online ($online_booking?:available|maintenance|closed)">
          <strong>オンライン予約</strong><br>
          <span>24時間受付中</span>
        </div>
      </div>
    </div>
    <div class="mf_bookingForm__services ($service_types?:fitting|consultation|rental|purchase|coordinate|photo)">
      <h4>対応サービス</h4>
      <span>サービス一覧</span>
    </div>
  </div>
  <div z-slot="nested_parts" class="mf_bookingForm__additional"></div>
</div>`,
      },
    ],
  },
];

// My振袖専用画像データ（サンプル）
export const myFurisodeImages = {
  common: [
    {
      id: "mf_img_001",
      name: "furisode_main_2024.jpg",
      alt: "My振袖 2024年メインビジュアル",
      category: "hero",
      tags: ["main", "2024", "collection"],
      url: "./assets/img/furisode_main_2024.jpg",
    },
    {
      id: "mf_img_002",
      name: "logo_my_furisode.png",
      alt: "My振袖ロゴ",
      category: "logo",
      tags: ["brand", "logo"],
      url: "./assets/img/logo_my_furisode.png",
    },
  ],
  individual: [
    {
      id: "mf_img_store_001",
      name: "store_ginza_exterior.jpg",
      alt: "My振袖銀座本店 外観",
      category: "store",
      tags: ["ginza", "store", "exterior"],
      url: "./assets/img/store_ginza_exterior.jpg",
      componentId: "mf_store_info_001",
    },
    {
      id: "mf_img_collection_001",
      name: "furisode_miyabi_sakura.jpg",
      alt: "古典美雅桜 振袖",
      category: "collection",
      tags: ["classic", "sakura", "elegant"],
      url: "./assets/img/furisode_miyabi_sakura.jpg",
      componentId: "collection_item_001",
    },
  ],
};

console.log("🌸 My振袖専用サンプルデータ読み込み完了");
