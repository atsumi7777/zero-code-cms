/**
 * My振袖デモ用 個別パーツテンプレート
 * 店舗別・キャンペーン別専用パーツ
 */

export const myFurisodeIndividualParts = [
  {
    type: 'store_profile',
    module: [
      {
        title: 'my_furisode_store_profile_v1',
        category: 'my_furisode_store',
        body: `
<div class="mf_storeProfile ($theme:elegant|modern|warm) ($layout:horizontal|vertical|card)">
  <div class="mf_storeProfile__visual">
    <img src="($store_image:/img/store_exterior.jpg)" alt="($store_alt:店舗外観)" class="mf_storeProfile__image">
    <div class="mf_storeProfile__badge ($store_type?:flagship|branch|premium|partner)">{$store_badge:本店}</div>
  </div>
  <div class="mf_storeProfile__info">
    <div class="mf_storeProfile__header">
      <h2 class="mf_storeProfile__name">{$store_name:My振袖 銀座本店}</h2>
      <div class="mf_storeProfile__labels ($labels?:new|renewal|premium|award)">
        <span class="mf_storeProfile__label">認定店舗</span>
      </div>
    </div>
    <div class="mf_storeProfile__details">
      <div class="mf_storeProfile__address">
        <span class="mf_storeProfile__icon">📍</span>
        <span>{$address:〒104-0061 東京都中央区銀座4-2-15}</span>
      </div>
      <div class="mf_storeProfile__phone">
        <span class="mf_storeProfile__icon">📞</span>
        <span>{$phone:TEL: 03-3561-8120}</span>
      </div>
      <div class="mf_storeProfile__hours">
        <span class="mf_storeProfile__icon">🕐</span>
        <span>{$hours:営業時間: 10:30～19:00（年中無休）}</span>
      </div>
    </div>
    <div class="mf_storeProfile__features">
      <h3>店舗特徴</h3>
      <div class="mf_storeProfile__featureList ($features?:parking|private|kids|photo|coordinate|delivery)">
        <span class="mf_storeProfile__feature">サービス一覧</span>
      </div>
    </div>
  </div>
  <div z-slot="nested_parts" class="mf_storeProfile__additional"></div>
</div>`
      }
    ]
  },
  {
    type: 'price_plan',
    module: [
      {
        title: 'my_furisode_pricing_v1',
        category: 'my_furisode_pricing',
        body: `
<div class="mf_pricing ($layout:cards|table|comparison) ($highlight?:popular|recommended|premium)">
  <div class="mf_pricing__header">
    <h2 class="mf_pricing__title">{$title:レンタルプラン}</h2>
    <p class="mf_pricing__description">{$description:お客様のご予算に合わせた多彩なプラン}</p>
  </div>
  <div class="mf_pricing__plans" z-for-wrapper="plans">
    <div class="mf_pricing__plan" z-for="plans">
      <div class="mf_pricing__planHeader">
        <div class="mf_pricing__badge ($plan_badge?:popular|recommended|premium|limited)">{$plan_badge:人気}</div>
        <h3 class="mf_pricing__planName">{$plan_name:スタンダードプラン}</h3>
        <div class="mf_pricing__planSubtitle">{$plan_subtitle:基本の振袖レンタル}</div>
      </div>
      <div class="mf_pricing__planPrice">
        <span class="mf_pricing__price">{$plan_price:¥198,000}</span>
        <span class="mf_pricing__priceUnit">{$price_unit:（税込）}</span>
        <div class="mf_pricing__priceNote">{$price_note:フルセット価格}</div>
      </div>
      <div class="mf_pricing__planIncludes ($includes?:obi|accessories|shoes|bag|underwear|fitting)">
        <h4>セット内容</h4>
        <span>含まれるアイテム</span>
      </div>
      <div class="mf_pricing__cta">
        <a href="($plan_link:#)" class="mf_pricing__button ($button_style:primary|secondary|outline)">{$cta_text:このプランを選ぶ}</a>
      </div>
      <div z-slot="nested_parts" class="mf_pricing__additional"></div>
    </div>
  </div>
</div>`
      }
    ]
  },
  {
    type: 'booking_form',
    module: [
      {
        title: 'my_furisode_booking_v1',
        category: 'my_furisode_booking',
        body: `
<div class="mf_booking ($style:form|calendar|quick) ($urgency:normal|urgent|limited)">
  <div class="mf_booking__header">
    <h2 class="mf_booking__title">{$title:ご予約フォーム}</h2>
    <p class="mf_booking__subtitle">{$subtitle:試着・相談のご予約はこちら}</p>
  </div>
  <div class="mf_booking__content">
    <div class="mf_booking__methods">
      <div class="mf_booking__method">
        <h3 class="mf_booking__methodTitle">{$phone_title:お電話でのご予約}</h3>
        <div class="mf_booking__phoneInfo">
          <div class="mf_booking__phone">{$phone_number:03-3561-8120}</div>
          <div class="mf_booking__hours">{$phone_hours:受付時間: 10:30～19:00}</div>
          <div class="mf_booking__phoneNote">{$phone_note:お急ぎの方におすすめ}</div>
        </div>
      </div>
      <div class="mf_booking__method">
        <h3 class="mf_booking__methodTitle">{$online_title:オンライン予約}</h3>
        <div class="mf_booking__onlineInfo">
          <div class="mf_booking__availability">{$availability:24時間受付・即時確認}</div>
          <div class="mf_booking__onlineNote">{$online_note:ご都合の良い時間に予約可能}</div>
        </div>
      </div>
    </div>
    <div class="mf_booking__services ($service_features?:consultation|fitting|coordinate|photo|reservation)">
      <h3>予約可能サービス</h3>
      <span>サービス内容</span>
    </div>
  </div>
  <div z-slot="nested_parts" class="mf_booking__additional"></div>
</div>`
      }
    ]
  }
];

console.log('🏪 My振袖デモ用個別パーツデータ読み込み完了');
