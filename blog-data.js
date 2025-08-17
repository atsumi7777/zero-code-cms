// ブログ専用データ
// 振袖記事ブログ用のパーツとサンプルデータ

// 共通画像データ
const commonImages = [
  {
    id: "blog_placeholder",
    name: "ブログプレースホルダー",
    url: "./img/placeholder.jpg",
    alt: "ブログ用プレースホルダー画像",
    width: 600,
    height: 400
  },
  {
    id: "kimono_sample",
    name: "振袖サンプル",
    url: "./img/furisode_main_2024.jpg",
    alt: "振袖サンプル画像",
    width: 800,
    height: 1200
  }
];

// ブログ画像データ
const blogImages = [
  {
    id: "furisode_choice_tips",
    name: "振袖選びのコツ",
    url: "./img/furisode_miyabi_sakura.jpg",
    alt: "振袖選びのポイントを説明する画像",
    width: 800,
    height: 600
  },
  {
    id: "seijinshiki_preparation",
    name: "成人式準備",
    url: "./img/furisode_saion_gorgeous.jpg",
    alt: "成人式準備の様子",
    width: 800,
    height: 600
  },
  {
    id: "kimono_accessories",
    name: "着物小物",
    url: "./img/background.jpg",
    alt: "着物小物の画像",
    width: 600,
    height: 400
  }
];

// ブログ専用パーツデータ
const blogPartSections = [
  {
    type: 'blog',
    description: 'ブログ記事用コンポーネント',
    module: [
      {
        title: 'blog_text',
        category: 'common',
        description: 'ブログ本文テキスト',
        tags: ['blog', 'text', 'common'],
        body: `<div class="blog-content">
  <div class="blog-text ($textSize:text-normal|text-large|text-small)">
    {$content:ここにブログの本文が入ります。振袖に関する情報や、成人式の準備について詳しく解説します。読みやすい文章を心がけ、読者にとって有益な情報を提供しましょう。}
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
  <figcaption class="blog-caption">{$caption:画像の説明文がここに入ります}</figcaption>
</figure>`,
      },
      {
        title: 'blog_quote',
        category: 'common',
        description: 'ブログ引用',
        tags: ['blog', 'quote', 'common'],
        body: `<blockquote class="blog-quote ($quoteStyle:quote-primary|quote-secondary|quote-accent)">
  <p class="quote-text">{$quote:「振袖は一生に一度の特別な装いです。お客様一人ひとりに最適な一着をご提案いたします。」}</p>
  <cite class="quote-source">{$source:デモ振袖スタッフより}</cite>
</blockquote>`,
      },
      {
        title: 'blog_list',
        category: 'common',
        description: 'ブログリスト',
        tags: ['blog', 'list', 'common'],
        body: `<div class="blog-list ($listStyle:list-bullet|list-number|list-check)">
  <h3 class="list-title">{$listTitle:振袖選びのポイント}</h3>
  <ul class="list-items" z-for="listItems">
    <li class="list-item">($text:色合いと肌色の相性を確認する)</li>
  </ul>
</div>`,
      },
      {
        title: 'blog_heading',
        category: 'common',
        description: 'ブログ見出し',
        tags: ['blog', 'heading', 'common'],
        body: `<div class="blog-heading ($headingLevel:h2|h3|h4)">
  <h2 class="heading-text">{$heading:見出しテキスト}</h2>
</div>`,
      },
      {
        title: 'blog_divider',
        category: 'common',
        description: 'ブログ区切り線',
        tags: ['blog', 'divider', 'common'],
        body: `<div class="blog-divider ($dividerStyle:simple|decorative|dotted)">
  <hr class="divider-line">
</div>`,
      }
    ]
  }
];

// ブログ記事サンプルデータ（本文のみ、タイトルは固定HTML）
const blogPageData = [
  {
    id: "blog_text_1",
    type: "blog",
    module_name: "blog_text",
    parts: [],
    content: "成人式は人生の大切な節目。そんな特別な日に着る振袖選びで失敗したくないですよね。今回は、振袖選びで後悔しないための重要なポイントをご紹介します。",
    textSize: "text-normal"
  },
  {
    id: "blog_image_1",
    type: "blog",
    module_name: "blog_image",
    parts: [],
    imageUrl: "./img/furisode_miyabi_sakura.jpg",
    imageAlt: "美しい振袖の展示",
    caption: "デモ振袖のコレクションより",
    imageAlign: "align-center"
  },
  {
    id: "blog_list_1",
    type: "blog",
    module_name: "blog_list",
    parts: [],
    listTitle: "振袖選びの5つのポイント",
    listStyle: "list-number",
    listItems: [
      { text: "肌色に合う色合いを選ぶ" },
      { text: "体型に合ったサイズとデザインを選ぶ" },
      { text: "季節感を考慮した柄を選ぶ" },
      { text: "小物との組み合わせを考える" },
      { text: "予算と品質のバランスを取る" }
    ]
  }
];

// データをグローバルスコープにエクスポート
if (typeof window !== 'undefined') {
  window.blogData = {
    images: [...commonImages, ...blogImages],
    parts: blogPartSections,
    pageData: blogPageData
  };
}