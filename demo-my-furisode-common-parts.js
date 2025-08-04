/**
 * My振袖デモ用 共通パーツテンプレート
 * ZERO CODE EDITOR デモンストレーション専用
 */

export const myFurisodeCommonParts = [
  // ヒーローセクション
  {
    type: 'hero_section',
    module: [
      {
        title: 'demo_hero_v1',
        category: 'common',
        body: `
<div class="demo_hero ($bg_theme:blue|purple|green|orange|dark)">
  <div class="demo_hero__content">
    <h1 class="demo_hero__title">{$title:ZERO CODE CMS}</h1>
    <h2 class="demo_hero__subtitle">{$subtitle:複雑なCMS・JSフレームワーク不要のコンテンツ管理}</h2>
    <p class="demo_hero__description">{$description:デザイナーもエンジニアも運用チームも、みんなが幸せになるCMS}</p>
    <div class="demo_hero__cta">
      <a href="{$cta_link:#demo}" class="btn btn-primary">{$cta_text:デモを見る}</a>
    </div>
  </div>
</div>
        `,
      },
    ],
  },

  // 従来CMSの課題セクション
  {
    type: 'problems_section',
    module: [
      {
        title: 'demo_problems_v1',
        category: 'common',
        body: `
<div class="demo_problems ($style:grid|list|cards)">
  <div class="demo_problems__header">
    <h2 class="demo_problems__title">{$title:なぜ既存CMSは複雑なのか}</h2>
    <p class="demo_problems__subtitle">{$subtitle:従来のCMSが抱える3つの根本的な問題}</p>
  </div>
  <div class="demo_problems__grid">
    <div z-for="problems" class="demo_problems__item">
      <h3 class="problem-title">{$title:WordPress}</h3>
      <p class="problem-description">{$description:プラグイン地獄、セキュリティリスク、重い管理画面}</p>
      <div class="problem-impact">{$impact:時間・コスト・リスクの増大}</div>
    </div>
  </div>
</div>
        `,
      },
    ],
  },

  // ZERO CODEの設計思想セクション
  {
    type: 'philosophy_section',
    module: [
      {
        title: 'demo_philosophy_v1',
        category: 'common',
        body: `
<div class="demo_philosophy ($style:grid|list|cards)">
  <div class="demo_philosophy__header">
    <h2 class="demo_philosophy__title">{$title:従来CMSにない革新的アプローチ}</h2>
    <p class="demo_philosophy__subtitle">{$subtitle:ZERO CODEの4つの特徴}</p>
  </div>
  <div class="demo_philosophy__grid">
    <div z-for="features" class="demo_philosophy__item">
      <h3 class="philosophy-title">{$title:フレームワーク非依存}</h3>
      <p class="philosophy-description">{$description:どんなサイトにも1行で導入}</p>
    </div>
  </div>
</div>
        `,
      },
    ],
  },

  // 効率的な開発フローセクション
  {
    type: 'workflow_section',
    module: [
      {
        title: 'demo_workflow_v1',
        category: 'common',
        body: `
<div class="demo_workflow ($style:flow|grid|timeline)">
  <div class="demo_workflow__header">
    <h2 class="demo_workflow__title">{$title:デザイナー・エンジニア・運用の分業}</h2>
    <p class="demo_workflow__subtitle">{$subtitle:3つの役割を矢印で連結した効率的な開発フロー}</p>
  </div>
  <div class="demo_workflow__flow">
    <div z-for="workflow" class="demo_workflow__step">
      <h3 class="workflow-role">{$role:デザイナー}</h3>
      <p class="workflow-description">{$description:HTML/CSS + z記法でパーツ作成}</p>
      <div class="workflow-output">{$output:テンプレート作成}</div>
    </div>
  </div>
</div>
        `,
      },
    ],
  },

  // z記法セクション
  {
    type: 'z_syntax_section',
    module: [
      {
        title: 'demo_z_syntax_v1',
        category: 'common',
        body: `
<div class="demo_z_syntax ($style:code|grid|cards)">
  <div class="demo_z_syntax__header">
    <h2 class="demo_z_syntax__title">{$title:デザイナーでも5分で覚えられる記法}</h2>
    <p class="demo_z_syntax__subtitle">{$subtitle:4つのシンプルな記法で動的コンテンツを実現}</p>
  </div>
  <div class="demo_z_syntax__examples">
    <div class="demo_z_syntax__example">
      <h3 class="example-title">1. テキスト編集記法</h3>
      <p class="example-description">クリックで直接編集可能なテキスト</p>
      <div class="code-block">
        <pre><code>&lt;h1&gt;&#123;$title:デフォルトタイトル&#125;&lt;/h1&gt;
&lt;p&gt;&#123;$description:説明文をここに入力&#125;&lt;/p&gt;</code></pre>
      </div>
      <div class="example-output">ブラウザ上で直接テキスト編集</div>
    </div>
    
    <div class="demo_z_syntax__example">
      <h3 class="example-title">2. 選択記法（ラジオボタン）</h3>
      <p class="example-description">複数の選択肢から1つを選択</p>
      <div class="code-block">
        <pre><code>&lt;div class="card (&#36;size:small|medium|large)"&gt;
  &lt;button class="btn (&#36;theme:primary|secondary|danger)"&gt;ボタン&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
      <div class="example-output">サイズとテーマを管理画面で選択</div>
    </div>
    
    <div class="demo_z_syntax__example">
      <h3 class="example-title">3. 条件記法（チェックボックス）</h3>  
      <p class="example-description">複数の条件を組み合わせて適用</p>
      <div class="code-block">
        <pre><code>&lt;div class="product (&#36;features?:new|sale|popular|limited)"&gt;
  &lt;span class="badge (&#36;urgency?:high|medium)"&gt;お知らせ&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>
      <div class="example-output">複数の特徴やレベルを同時適用</div>
    </div>
    
    <div class="demo_z_syntax__example">
      <h3 class="example-title">4. 繰り返し記法</h3>
      <p class="example-description">リスト形式のデータを自動表示</p>
      <div class="code-block">
        <pre><code>&lt;div class="products-grid" z-for-wrapper="items"&gt;
  &lt;div z-for="items" class="product-card"&gt;
    &lt;img src="&#123;&#36;image:default.jpg&#125;" alt="&#123;&#36;alt:商品画像&#125;"&gt;
    &lt;h3&gt;&#123;&#36;name:商品名&#125;&lt;/h3&gt;
    &lt;p class="price"&gt;&#123;&#36;price:¥0,000&#125;&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
      <div class="example-output">商品データの数だけカードを自動生成</div>
    </div>
    
    <div class="demo_z_syntax__example">
      <h3 class="example-title">5. ネスト構造</h3>
      <p class="example-description">パーツ内にパーツを配置</p>
      <div class="code-block">
        <pre><code>&lt;section class="hero-section"&gt;
  &lt;div class="hero-content"&gt;
    &lt;h1&gt;&#123;&#36;title:メインタイトル&#125;&lt;/h1&gt;
    &lt;div z-slot="nested_parts" class="hero-features"&gt;
      &lt;!-- ここにネストパーツが配置される --&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;</code></pre>
      </div>
      <div class="example-output">階層構造でコンテンツを自由に組み合わせ</div>
    </div>
    
    <div class="demo_z_syntax__example">
      <h3 class="example-title">6. 実践例：プロダクトカード</h3>
      <p class="example-description">全記法を組み合わせた実用例</p>
      <div class="code-block">
        <pre><code>&lt;div class="product-showcase (&#36;layout:grid|list)" z-for-wrapper="products"&gt;
  &lt;div z-for="products" class="product-item (&#36;style:card|minimal)"&gt;
    &lt;div class="product-image"&gt;
      &lt;img src="&#123;&#36;image:/assets/default.jpg&#125;" alt="&#123;&#36;alt:商品画像&#125;"&gt;
      &lt;div class="badges (&#36;tags?:new|sale|popular)"&gt;
        &lt;span class="badge"&gt;タグ&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="product-info"&gt;
      &lt;h3&gt;&#123;&#36;name:商品名&#125;&lt;/h3&gt;
      &lt;p&gt;&#123;&#36;description:商品説明&#125;&lt;/p&gt;
      &lt;div class="price"&gt;&#123;&#36;price:¥0,000&#125;&lt;/div&gt;
      &lt;button class="btn (&#36;btn_style:primary|outline)"&gt;購入する&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
      <div class="example-output">ECサイトの商品一覧を完全自動化</div>
    </div>
  </div>
</div>
        `,
      },
    ],
  },

  // 他社CMS比較表セクション
  {
    type: 'comparison_section',
    module: [
      {
        title: 'cms_comparison_v1',
        category: 'common',
        body: `
<div class="demo_comparison ($style:table|cards|grid)">
  <div class="demo_comparison__header">
    <h2 class="demo_comparison__title">{$title:圧倒的な導入・運用の簡単さ}</h2>
    <p class="demo_comparison__subtitle">{$subtitle:他社CMSとの詳細比較}</p>
  </div>
  <div class="demo_comparison__simple">
    <div class="comparison-list">
      <div z-for="comparison_data" class="comparison-item">
        <h4 class="comparison-feature">{$feature:項目名}</h4>
        <div class="comparison-values">
          <div class="comparison-value">
            <span class="service-name">WordPress:</span>
            <span class="value wordpress">{$wordpress:評価}</span>
          </div>
          <div class="comparison-value">
            <span class="service-name">Headless CMS:</span>
            <span class="value headless">{$headless:評価}</span>
          </div>
          <div class="comparison-value highlight">
            <span class="service-name">ZERO CODE:</span>
            <span class="value zero-code">{$zero_code:評価}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        `,
      },
    ],
  },

  // 綺麗なHTML出力の価値セクション
  {
    type: 'html_value_section',
    module: [
      {
        title: 'demo_html_value_v1',
        category: 'common',
        body: `
<div class="demo_html_value ($style:comparison|grid|cards)">
  <div class="demo_html_value__header">
    <h2 class="demo_html_value__title">{$title:SEO・パフォーマンス・保守性の向上}</h2>
    <p class="demo_html_value__subtitle">{$subtitle:綺麗なHTML出力の価値}</p>
  </div>
  <div class="demo_html_value__comparison">
    <div class="comparison-before">
      <h3>{$before.title:従来CMS}</h3>
      <div class="before-code">{$before.description:&lt;div class="wp-block-group"&gt; など余計なクラス}</div>
      <div class="before-problems">
        <div class="problem-item">SEO最適化困難</div>
        <div class="problem-item">パフォーマンス低下</div>
        <div class="problem-item">移行リスク高</div>
      </div>
    </div>
    <div class="comparison-after">
      <h3>{$after.title:ZERO CODE}</h3>
      <div class="after-code">{$after.description:デザイナーが書いたHTMLをそのまま保持}</div>
      <div class="after-benefits">
        <div class="benefit-item">SEO最適化</div>
        <div class="benefit-item">軽量高速</div>
        <div class="benefit-item">移行リスクなし</div>
      </div>
    </div>
  </div>
</div>
        `,
      },
    ],
  },

  // 実際の導入デモセクション
  {
    type: 'implementation_section',
    module: [
      {
        title: 'demo_implementation_v1',
        category: 'common',
        body: `
<div class="demo_implementation ($style:steps|grid|timeline)">
  <div class="demo_implementation__header">
    <h2 class="demo_implementation__title">{$title:たった1行で既存サイトをCMS化}</h2>
    <p class="demo_implementation__subtitle">{$subtitle:3ステップの簡単導入}</p>
  </div>
  <div class="demo_implementation__steps">
    <div class="demo_implementation__step">
      <div class="step-number">STEP 1</div>
      <h3 class="step-title">zero-codeタグで囲む</h3>
      <p class="step-description">既存HTMLにタグを追加</p>
      <div class="step-code">
        <pre><code>&lt;zero-code&gt;
  &lt;h1&gt;商品タイトル&lt;/h1&gt;
  &lt;p&gt;商品説明文&lt;/p&gt;
&lt;/zero-code&gt;</code></pre>
      </div>
    </div>
    
    <div class="demo_implementation__step">
      <div class="step-number">STEP 2</div>
      <h3 class="step-title">必要パーツを登録</h3>
      <p class="step-description">再利用可能なテンプレート作成</p>
      <div class="step-code">
        <pre><code>// パーツ登録例
&lt;div class="card"&gt;
  &lt;h2&gt;&#123;&#36;title:タイトル&#125;&lt;/h2&gt;
  &lt;p&gt;&#123;&#36;description:説明文&#125;&lt;/p&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
    
    <div class="demo_implementation__step">
      <div class="step-number">STEP 3</div>
      <h3 class="step-title">編集可能なCMSに変身</h3>
      <p class="step-description">ブラウザ上で直接編集可能</p>
      <div class="step-code">
        <pre><code>直感的に編集可能</code></pre>
      </div>
    </div>
  </div>
</div>
        `,
      },
    ],
  },

  // 段階的導入計画とROIセクション
  {
    type: 'roi_section',
    module: [
      {
        title: 'demo_roi_v1',
        category: 'common',
        body: `
<div class="demo_roi ($style:timeline|grid|cards)">
  <div class="demo_roi__header">
    <h2 class="demo_roi__title">{$title:リスク最小・効果最大の導入戦略}</h2>
    <p class="demo_roi__subtitle">{$subtitle:段階的導入計画とROI}</p>
  </div>
  <div class="demo_roi__timeline">
    <div z-for="phases" class="demo_roi__phase">
      <div class="phase-header">
        <div class="phase-number">{$phase:Phase 1}</div>
        <div class="phase-duration">{$duration:1週間}</div>
      </div>
      <h3 class="phase-title">{$title:特集・ブログページでのパイロット導入}</h3>
      <div class="phase-details">
        <div class="phase-target">対象: {$target:特集（LP）ページやブログページ}</div>
        <div class="phase-purpose">目的: {$purpose:操作性検証、チーム内でのノウハウ蓄積}</div>
        <div class="phase-risk">リスク: {$risk:最小（影響範囲限定）}</div>
        <div class="phase-effect">効果: {$effect:操作性・安定性の確認}</div>
      </div>
    </div>
  </div>
</div>
        `,
      },
    ],
  },

  // 導入決定・次のアクションセクション
  {
    type: 'action_section',
    module: [
      {
        title: 'demo_action_v1',
        category: 'common',
        body: `
<div class="demo_action ($style:list|grid|cards)">
  <div class="demo_action__header">
    <h2 class="demo_action__title">{$title:今すぐ始められる具体的ステップ}</h2>
    <p class="demo_action__subtitle">{$subtitle:導入決定・次のアクション}</p>
  </div>
  <div class="demo_action__list">
    <div z-for="actions" class="demo_action__item">
      <h3 class="action-title">{$title:即座に試せる}</h3>
      <p class="action-description">{$description:GitHub からクローン、5分で動作確認}</p>
    </div>
  </div>
</div>
        `,
      },
    ],
  },

  // 役割分担セクション
  {
    type: 'roles_section',
    module: [
      {
        title: 'team_roles_v1',
        category: 'common',
        body: `
<div class="demo_roles ($layout:grid|list|cards)">
  <div class="demo_roles__header">
    <h2 class="demo_roles__title">{$title:役割分担}</h2>
    <p class="demo_roles__subtitle">{$subtitle:チーム体制}</p>
  </div>
  <div class="demo_roles__list">
    <div z-for="roles" class="demo_roles__card">
      <div class="role-header">
        <h3 class="demo_roles__title">{$title:役割名}</h3>
        <p class="demo_roles__description">{$description:役割説明}</p>
      </div>
                        <div class="demo_roles__tasks">
                    <h4 class="tasks-title">主な担当業務</h4>
                    <div class="tasks-text">{$tasks_text:担当業務}</div>
                  </div>
    </div>
  </div>
</div>
        `,
      },
    ],
  },

  // 活用シーンセクション
  {
    type: 'usecases_section',
    module: [
      {
        title: 'my_furisode_usecases_v1',
        category: 'common',
        body: `
<div class="demo_usecases ($style:grid|list|cards)">
  <div class="demo_usecases__header">
    <h2 class="demo_usecases__title">{$title:活用シーン}</h2>
    <p class="demo_usecases__subtitle">{$subtitle:活用例の説明}</p>
  </div>
  <div class="demo_usecases__list">
    <div z-for="usecases" class="demo_usecases__card">
      <div class="usecase-header">
        <h3 class="demo_usecases__title">{$title:活用場面}</h3>
        <p class="demo_usecases__description">{$description:詳細説明}</p>
      </div>
                        <div class="demo_usecases__features">
                    <h4 class="features-title">対応機能</h4>
                    <div class="features-text">{$features_text:対応機能}</div>
                  </div>
    </div>
  </div>
</div>
        `,
      },
    ],
  },

  // CTAセクション
  {
    type: 'cta_section',
    module: [
      {
        title: 'demo_cta_v1',
        category: 'common',
        body: `
<div class="demo_cta ($style:centered|split|banner)">
  <div class="demo_cta__content">
    <h2 class="demo_cta__title">{$title:行動喚起タイトル}</h2>
    <p class="demo_cta__subtitle">{$subtitle:説明文}</p>
    <div class="demo_cta__buttons">
      <a href="($primary_link:#)" class="btn btn-primary btn-large">{$primary_text:メインボタン}</a>
    </div>
  </div>
</div>
        `,
      },
    ],
  },

  // 既存のMy振袖ヒーローセクション
  {
    type: 'hero_section',
    module: [
      {
        title: 'my_furisode_hero_v1',
        category: 'my_furisode_demo',
        body: `
<div class="mf_hero ($theme:elegant|modern|classic) ($size:large|medium|small)">
  <div class="mf_hero__background">
    <img src="($bg_image:/img/furisode_main_2024.jpg)" alt="($bg_alt:My振袖メインビジュアル)" class="mf_hero__bgImage">
    <div class="mf_hero__overlay ($overlay_style:light|dark|gradient)"></div>
  </div>
  <div class="mf_hero__content">
    <div class="mf_hero__labels">
      <span class="mf_hero__label ($label_type?:new|limited|premium|campaign)">{$label:2024年新作}</span>
    </div>
    <h1 class="mf_hero__title">{$title:My振袖 成人式コレクション}</h1>
    <p class="mf_hero__subtitle">{$subtitle:一生に一度の特別な日を、最高の一着で}</p>
    <div class="mf_hero__description">{$description:伝統美と現代性を融合した、あなただけの振袖をお選びください}</div>
    <div class="mf_hero__cta">
      <a href="($cta_link:#)" class="mf_hero__button ($button_style:primary|secondary|outline)">{$cta_text:ご予約・お問い合わせ}</a>
    </div>
  </div>
  <div z-slot="nested_parts" class="mf_hero__additional"></div>
</div>`,
      },
    ],
  },
  {
    type: 'collection_gallery',
    module: [
      {
        title: 'my_furisode_collection_v1',
        category: 'my_furisode_demo',
        body: `
<div class="mf_collection ($layout:grid|masonry|slider) ($columns:2|3|4)">
  <div class="mf_collection__header">
    <h2 class="mf_collection__title">{$title:振袖コレクション}</h2>
    <p class="mf_collection__subtitle">{$subtitle:2024年人気デザイン}</p>
  </div>
  <div class="mf_collection__filters ($filter_style?:category|price|color|pattern)">
    <span class="mf_collection__filter">フィルター</span>
  </div>
  <div class="mf_collection__gallery" z-for-wrapper="items">
    <div class="mf_collection__item" z-for="items">
      <div class="mf_collection__imageWrapper">
        <img src="($item_image:/img/default_furisode.jpg)" alt="($item_alt:振袖)" class="mf_collection__image">
        <div class="mf_collection__overlay">
          <div class="mf_collection__tags">
            <span class="mf_collection__tag ($tag_style?:new|popular|sale|limited)">{$item_tag:新作}</span>
          </div>
          <div class="mf_collection__quickView">
            <button class="mf_collection__viewBtn">詳細を見る</button>
          </div>
        </div>
      </div>
      <div class="mf_collection__info">
        <h3 class="mf_collection__itemTitle">{$item_title:振袖名}</h3>
        <p class="mf_collection__itemDesc">{$item_description:説明文}</p>
        <div class="mf_collection__pricing">
          <span class="mf_collection__price ($price_type:rental|purchase)">{$item_price:¥298,000}</span>
          <span class="mf_collection__priceNote">{$price_note:（税込・フルセット）}</span>
        </div>
        <div class="mf_collection__features ($features?:obi|accessories|fitting|photo)">
          <span>含まれるアイテム</span>
        </div>
      </div>
      <div z-slot="nested_parts" class="mf_collection__nested"></div>
    </div>
  </div>
</div>`,
      },
    ],
  },
  {
    type: 'campaign_banner',
    module: [
      {
        title: 'my_furisode_campaign_v1',
        category: 'my_furisode_demo',
        body: `
<div class="mf_campaign ($style:banner|card|popup) ($urgency:normal|urgent|limited)">
  <div class="mf_campaign__visual">
    <img src="($campaign_image:/img/campaign_early_booking.jpg)" alt="($campaign_alt:キャンペーン画像)" class="mf_campaign__image">
    <div class="mf_campaign__badge ($badge_type?:limited|new|hot|special)">{$badge_text:期間限定}</div>
  </div>
  <div class="mf_campaign__content">
    <div class="mf_campaign__header">
      <h2 class="mf_campaign__title">{$campaign_title:早期ご予約特典}</h2>
      <p class="mf_campaign__subtitle">{$campaign_subtitle:2024年12月末まで}</p>
    </div>
    <div class="mf_campaign__benefits" z-for-wrapper="benefits">
      <div class="mf_campaign__benefit" z-for="benefits">
        <span class="mf_campaign__benefitIcon">{$benefit_icon:✨}</span>
        <span class="mf_campaign__benefitText">{$benefit_text:振袖レンタル10%OFF}</span>
      </div>
    </div>
    <div class="mf_campaign__terms">{$terms:※詳細は店舗にお問い合わせください}</div>
    <div class="mf_campaign__cta">
      <a href="($cta_link:#)" class="mf_campaign__button ($button_type:primary|secondary|accent)">{$cta_text:今すぐ予約}</a>
    </div>
  </div>
  <div z-slot="nested_parts" class="mf_campaign__nested"></div>
</div>`,
      },
    ],
  },
  {
    type: 'contact_section',
    module: [
      {
        title: 'my_furisode_contact_v1',
        category: 'my_furisode_demo',
        body: `
<div class="mf_contact ($layout:horizontal|vertical|split) ($bg:white|gradient|image)">
  <div class="mf_contact__header">
    <h2 class="mf_contact__title">{$title:ご予約・お問い合わせ}</h2>
    <p class="mf_contact__description">{$description:お気軽にお問い合わせください}</p>
  </div>
  <div class="mf_contact__content">
    <div class="mf_contact__methods">
      <div class="mf_contact__method">
        <div class="mf_contact__methodIcon">📞</div>
        <div class="mf_contact__methodInfo">
          <h3 class="mf_contact__methodTitle">{$phone_title:お電話でのご予約}</h3>
          <div class="mf_contact__phone">{$phone_number:03-3561-8120}</div>
          <div class="mf_contact__hours">{$phone_hours:営業時間: 10:30～19:00}</div>
        </div>
      </div>
      <div class="mf_contact__method">
        <div class="mf_contact__methodIcon">💻</div>
        <div class="mf_contact__methodInfo">
          <h3 class="mf_contact__methodTitle">{$online_title:オンライン予約}</h3>
          <div class="mf_contact__online">{$online_description:24時間受付}</div>
          <a href="($online_link:#)" class="mf_contact__onlineButton">予約フォーム</a>
        </div>
      </div>
    </div>
    <div class="mf_contact__features ($contact_features?:consultation|visit|online|phone|email)">
      <h3>対応サービス</h3>
      <span>サービス一覧</span>
    </div>
  </div>
  <div z-slot="nested_parts" class="mf_contact__nested"></div>
</div>`,
      },
    ],
  },
]
