/**
 * デモページ全体のZERO CODE EDITOR用データ
 * 社内説明資料の内容を含む完全版（黒ベーステーマ）
 */

export const demoFullPageData = [
  // ヒーローセクション
  {
    id: 'demo_hero_001',
    type: 'hero_section',
    module_name: 'demo_hero_v1',
    title: 'ZERO CODE CMS',
    subtitle: '複雑なCMS・JSフレームワーク不要のコンテンツ管理',
    description: 'デザイナーもエンジニアも運用チームも、みんなが幸せになるCMS',
    cta_text: 'デモを見る',
    cta_link: '#demo'
  },

  // 従来CMSの課題セクション
  {
    id: 'demo_problems_001',
    type: 'problems_section',
    module_name: 'demo_problems_v1',
    title: 'なぜ既存CMSは複雑なのか',
    subtitle: '従来のCMSが抱える3つの根本的な問題',
    style: 'grid',
    problems: [
      {
        title: 'WordPress',
        description: 'プラグイン地獄、セキュリティリスク、重い管理画面',
        impact: '時間・コスト・リスクの増大'
      },
      {
        title: 'Headless CMS',
        description: 'フロントエンド構築の複雑さ、開発工数増',
        impact: '開発コストと学習時間の大幅増加'
      },
      {
        title: 'フレームワーク依存',
        description: 'React/Vue.js学習コスト、バージョン管理の複雑さ',
        impact: '技術的負債と保守コストの蓄積'
      }
    ]
  },

  // ZERO CODEの設計思想セクション
  {
    id: 'demo_philosophy_001',
    type: 'philosophy_section',
    module_name: 'demo_philosophy_v1',
    title: '従来CMSにない革新的アプローチ',
    subtitle: 'ZERO CODEの4つの特徴',
    style: 'grid',
    features: [
      {
        title: 'フレームワーク非依存',
        description: 'どんなサイトにも1行で導入'
      },
      {
        title: 'ゼロコンフィグ',
        description: '設定ファイル・データベース不要'
      },
      {
        title: '綺麗なHTML保持',
        description: '余計なタグや属性を生成しない'
      },
      {
        title: '新しいz記法',
        description: 'デザイナーでも覚えやすい独自テンプレート記法'
      }
    ]
  },

  // 効率的な開発フローセクション
  {
    id: 'demo_workflow_001',
    type: 'workflow_section',
    module_name: 'demo_workflow_v1',
    title: 'デザイナー・エンジニア・運用の分業',
    subtitle: '3つの役割を矢印で連結した効率的な開発フロー',
    style: 'flow',
    workflow: [
      {
        role: 'デザイナー',
        description: 'HTML/CSS + z記法でパーツ作成',
        output: 'テンプレート作成'
      },
      {
        role: 'エンジニア',
        description: 'CRUD処理実装、API連携',
        output: 'システム統合'
      },
      {
        role: '運用チーム',
        description: '直感的GUI操作、プログラミング知識不要',
        output: 'コンテンツ更新'
      }
    ]
  },

  // z記法セクション
  {
    id: 'demo_z_syntax_001',
    type: 'z_syntax_section',
    module_name: 'demo_z_syntax_v1',
    title: 'デザイナーでも5分で覚えられる記法',
    subtitle: '4つのシンプルな記法で動的コンテンツを実現',
    style: 'code',
    code_examples: [
      {
        title: '1. テキスト編集記法',
        description: 'クリックで直接編集可能なテキスト',
        code: '<h1>{$title:デフォルトタイトル}</h1>\n<p>{$description:説明文をここに入力}</p>',
        output: 'ブラウザ上で直接テキスト編集'
      },
      {
        title: '2. 選択記法（ラジオボタン）',
        description: '複数の選択肢から1つを選択',
        code: '<div class="card ($size:small|medium|large)">\n  <button class="btn ($theme:primary|secondary|danger)">ボタン</button>\n</div>',
        output: 'サイズとテーマを管理画面で選択'
      },
      {
        title: '3. 条件記法（チェックボックス）',
        description: '複数の条件を組み合わせて適用',
        code: '<div class="product ($features?:new|sale|popular|limited)">\n  <span class="badge ($urgency?:high|medium)">お知らせ</span>\n</div>',
        output: '複数の特徴やレベルを同時適用'
      },
      {
        title: '4. 繰り返し記法',
        description: 'リスト形式のデータを自動表示',
        code: '<div class="products-grid" z-for-wrapper="items">\n  <div z-for="items" class="product-card">\n    <img src="{$image:default.jpg}" alt="{$alt:商品画像}">\n    <h3>{$name:商品名}</h3>\n    <p class="price">{$price:¥0,000}</p>\n    <div class="tags ($category:clothing|accessories|shoes)"></div>\n  </div>\n</div>',
        output: '商品データの数だけカードを自動生成'
      },
      {
        title: '5. ネスト構造',
        description: 'パーツ内にパーツを配置',
        code: '<section class="hero-section">\n  <div class="hero-content">\n    <h1>{$title:メインタイトル}</h1>\n    <div z-slot="nested_parts" class="hero-features">\n      <!-- ここにネストパーツが配置される -->\n    </div>\n  </div>\n</section>',
        output: '階層構造でコンテンツを自由に組み合わせ'  
      },
      {
        title: '6. 実践例：プロダクトカード',
        description: '全記法を組み合わせた実用例',
        code: '<div class="product-showcase ($layout:grid|list|carousel)" z-for-wrapper="products">\n  <div z-for="products" class="product-item ($style:card|minimal)">\n    <div class="product-image">\n      <img src="{$image:/assets/default.jpg}" alt="{$alt:商品画像}">\n      <div class="badges ($tags?:new|sale|popular)">\n        <span class="badge">タグ</span>\n      </div>\n    </div>\n    <div class="product-info">\n      <h3>{$name:商品名}</h3>\n      <p>{$description:商品説明}</p>\n      <div class="price">{$price:¥0,000}</div>\n      <button class="btn ($btn_style:primary|outline)">購入する</button>\n    </div>\n  </div>\n</div>',
        output: 'ECサイトの商品一覧を完全自動化'
      }
    ]
  },

  // 他社CMS比較表セクション
  {
    id: 'demo_comparison_001',
    type: 'comparison_section',
    module_name: 'cms_comparison_v1',
    title: '圧倒的な導入・運用の簡単さ',
    subtitle: '他社CMSとの詳細比較',
    style: 'table',
    comparison_data: [
      {
        feature: '導入時間',
        wordpress: '数日〜数週',
        headless: '数週〜数ヶ月',
        zero_code: '数分',
        highlight: true
      },
      {
        feature: '学習コスト',
        wordpress: '高い',
        headless: '非常に高い',
        zero_code: '低い',
        highlight: true
      },
      {
        feature: 'HTMLの綺麗さ',
        wordpress: '×',
        headless: '△',
        zero_code: '○',
        highlight: true
      },
      {
        feature: 'フレームワーク依存',
        wordpress: '×',
        headless: '×',
        zero_code: '○',
        highlight: true
      },
      {
        feature: '運用の簡単さ',
        wordpress: '△',
        headless: '×',
        zero_code: '○',
        highlight: true
      }
    ]
  },


  // 実際の導入デモセクション
  {
    id: 'demo_implementation_001',
    type: 'implementation_section',
    module_name: 'demo_implementation_v1',
    title: '現在のWebサービスへの適用例',
    subtitle: '実際の導入デモ',
    style: 'steps',
    steps: [
      {
        step: 'Before',
        title: '既存の静的ページ',
        description: 'HTMLファイルで管理',
        code: '<html>\n  <body>\n    <h1>商品タイトル</h1>\n  </body>\n</html>'
      },
      {
        step: '導入',
        title: '1行追加',
        description: 'zero-codeタグを追加',
        code: '<html>\n  <body>\n    <zero-code>\n      <h1>商品タイトル</h1>\n    </zero-code>\n  </body>\n</html>'
      },
      {
        step: 'After',
        title: 'CMSとして編集可能',
        description: 'GUIでコンテンツ編集',
        code: '管理画面で商品タイトルを変更可能'
      }
    ]
  }
];
