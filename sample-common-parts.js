/**
 * Sample Common Parts - Vue CMSエディター用共通パーツテンプレート
 *
 * 記法仕様：
 *
 * 1. テキスト記法: {$param:デフォルト値}
 *    - title, content, description, tooltip など
 *    - 実際のテキストコンテンツ用（Tiptap編集対応）
 *
 * 2. 属性記法: ($param:option1|option2|option3)
 *    - class, id, src, alt などの属性値用
 *    - UIフィールド生成（ラジオボタン、チェックボックス、セレクト等）
 *
 * 3. z-directive記法:
 *    - z-slot="nested_parts" : ネスト構造
 *    - z-for="arrayName" : 配列繰り返し
 *    - z-for-wrapper="arrayName" : 配列ラッパー
 */
export const commonParts = [
  {
    type: 'title',
    module: [
      {
        title: 'title_1_1',
        category: 'common',
        body: `
<div class="m_titleA ($state:s_state1|s_state2) ($variant:s_state3|s_state4|)">
  <h1 class="m_titleA__title">{$title:メインタイトルテキスト}</h1>
  <div class="m_titleA__label ($label_state?:s_state5|s_state6|s_state7)">{$label:ラベルテキスト}</div>
  <div z-slot="nested_parts" class="m_titleA__contents"></div>
  <div><img src="($image_url:/assets/img/hero_image.jpg)" alt="($image_alt:画像の説明テキスト)"></div>
  <div class="m_titleA__card" z-for-wrapper="cards">
    <div z-for="cards" class="m_titleA__cardList ($card_state:s_state1|s_state2)">
      <div>{$card_title:カードアイテム1}</div>
      <div>{$card_desc:カードアイテム2}</div>
      <div z-slot="nested_parts"></div>
    </div>
  </div>
  <div class="m_titleA__category ($category:news,blog,event,product,service)">
    <span>カテゴリ選択</span>
  </div>
  <div class="m_titleA__tags ($tags?:important,featured,popular,trending,new)">
    <span>タグ選択（複数）</span>
  </div>
</div>`,
      },
      {
        title: 'title_1_2',
        category: 'common',
        body: `
<div class="m_titleB ($style:s_primary|s_secondary)">
  <h2 class="m_titleB__heading">{$title:サブタイトル}</h2>
  <p class="m_titleB__description">{$description:説明文テキスト}</p>
  <div class="m_titleB__nested">
    <div z-slot="nested_parts"></div>
  </div>
  <div class="m_titleB__subtitle">{$subtitle:サブタイトル}</div>
  <div class="m_titleB__priority ($priority:high,medium,low)">
    <span>優先度</span>
  </div>
</div>`,
      },
    ],
  },
  {
    type: 'text',
    module: [
      {
        title: 'text_1_1',
        category: 'common',
        body: `
<div class="m_text ($state:s_state1|s_state2)">
  <div class="m_text__content">{$content:ここにテキスト内容を入力してください。複数の段落や書式設定が可能です。}</div>
  <div class="m_text__nested">
    <div z-slot="nested_parts"></div>
  </div>
  <div class="m_text__author">{$author:著者名}</div>
  <div class="m_text__features ($features?:highlight|important|featured|trending)">
    <span>テキスト機能</span>
  </div>
</div>`,
      },
      {
        title: 'text_1_2',
        category: 'common',
        body: `
<div class="m_textArea ($size:s_large|s_medium|s_small)">
  <div class="m_textArea__content">
    <h3>{$heading:見出しテキスト}</h3>
    <div class="m_textArea__text">{$content:ここに詳細なテキスト内容を入力してください。リッチテキスト編集が可能です。}</div>
  </div>
  <div class="m_textArea__topics ($topics?:technology,design,business,lifestyle,entertainment)">
    <span>トピック選択（複数）</span>
  </div>
  <div class="m_textArea__source">{$source:情報源}</div>
</div>`,
      },
    ],
  },
  {
    type: 'button',
    module: [
      {
        title: 'button_1_1',
        category: 'common',
        body: `<div class="m_button ($style:s_primary|s_secondary|s_danger)">
  <button class="m_button__btn ($size:s_large|s_medium|s_small)" type="($button_type:button,submit,reset)">
    {$text:ボタンテキスト}
  </button>
  <div class="m_button__tooltip">{$tooltip:ボタンの説明}</div>
  <div class="m_button__effects ($effects?:hover|focus|active|disabled)">
    <span>ボタンエフェクト</span>
  </div>
  <div class="m_button__icons ($icons?:plus,minus,edit,delete,save,cancel)">
    <span>アイコン選択（複数）</span>
  </div>
</div>`,
      },
    ],
  },
]
