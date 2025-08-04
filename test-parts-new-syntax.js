// 新仕様テスト用パーツ - 5つのUIパターンを含む
export const testPartsNewSyntax = [
  {
    type: 'test_all_ui',
    module: [
      {
        title: 'test_all_ui_1',
        body: `<div class="test-component">
  <!-- 1. テキストボックステスト -->
  <h1>($title:メインタイトル)</h1>
  <p>($description:ここに説明文が入ります)</p>
  <a href="($url:https://example.com)">リンク</a>
  
  <!-- 2. ラジオボタンテスト -->
  <div class="($state:s_state1|s_state2|s_state3) ($size:small|medium|large)">
    <span>ラジオボタンテスト</span>
  </div>
  
  <!-- 3. チェックボックステスト -->
  <div class="($features?:new|hot|sale|limited) ($tags?:javascript|vue|css|html)">
    <span>チェックボックステスト</span>
  </div>
  
  <!-- 4. セレクトボックス（単一選択）テスト -->
  <div class="($category:electronics,clothing,books,toys,sports)">
    <span>セレクトボックス（単一）テスト</span>
  </div>
  
  <!-- 5. セレクトボックス（複数選択）テスト -->
  <div class="($skills?:javascript,typescript,vue,react,angular)">
    <span>セレクトボックス（複数）テスト</span>
  </div>
  
  <!-- 空オプションテスト -->
  <div class="($theme:primary|secondary|)">
    <span>空オプション含むラジオボタン</span>
  </div>
</div>`,
      },
    ],
  },
  {
    type: 'test_array_ui',
    module: [
      {
        title: 'test_array_ui_1',
        body: `<div class="test-array-component">
  <h2>{$array_title:配列UIテスト}</h2>
  <div class="array-container">
@for($test_items):
  <div class="array-item ($item_state:active|inactive) ($item_type:primary,secondary,success,warning,danger)">
    <h3>($item_title:アイテムタイトル)</h3>
    <p>($item_description:アイテムの説明文)</p>
    <div class="($item_features?:featured|popular|new|recommended)">
      <span>アイテム機能</span>
    </div>
    <select class="($item_priority?:high,medium,low,urgent,normal)">
      <option>優先度選択</option>
    </select>
  </div>
@endfor
  </div>
</div>`,
      },
    ],
  },
]
