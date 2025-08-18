# Zero Code Editor - ビルド後の使用方法

## 📦 ビルド成果物

ビルド後に生成されるファイル：
- `vue-cms-editor.optimized.umd.js` - メインライブラリ（Vue 3内包）
- `zero-code.css` - スタイルシート
- `vue-cms-editor.optimized.umd.js.map` - ソースマップ

## 🚀 基本的な使い方

### 1. 最小構成

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="./zero-code.css">
</head>
<body>
  <!-- Web Componentsとして配置 -->
  <zero-code id="editor"></zero-code>
  
  <!-- ライブラリ読み込み -->
  <script src="./vue-cms-editor.optimized.umd.js"></script>
  
  <!-- データ設定 -->
  <script>
    customElements.whenDefined('zero-code').then(() => {
      const editor = document.getElementById('editor');
      
      // 画像、パーツ、ページデータを設定
      editor.commonImages = [...];     // 共通画像データ配列
      editor.individualImages = [...]; // 個別画像データ配列  
      editor.parts = [...];            // パーツデータ配列
      editor.page = [...];             // ページデータ配列
    });
  </script>
</body>
</html>
```

### 2. 外部データファイルから読み込み

```javascript
// JSONファイルからデータを読み込む例
fetch('./my-cms-data.json')
  .then(res => res.json())
  .then(data => {
    editor.commonImages = data.images;
    editor.individualImages = [];
    editor.parts = data.parts;
    editor.page = data.pageData;
  });
```

## 📊 データ構造

### 画像データ（共通/個別）

```javascript
const images = [
  {
    id: "unique_id",           // 一意のID（必須）
    name: "画像名",            // 表示名（必須）
    url: "./path/to/image.jpg", // 画像URL（必須）
    alt: "代替テキスト",       // alt属性
    width: 800,                // 幅（ピクセル）
    height: 600                // 高さ（ピクセル）
  }
];
```

### パーツデータ（共通/個別）

```javascript
const parts = [
  {
    type: "header",                      // パーツタイプ（必須）
    description: "ヘッダーコンポーネント", // 説明
    module: [
      {
        title: "site_header",            // パーツ名（必須）
        category: "common",              // カテゴリ（common/individual）
        description: "サイトヘッダー",    // 説明
        tags: ["header", "navigation"],  // タグ（検索用）
        body: "<header>...</header>"     // HTMLテンプレート（必須）
      }
    ]
  }
];
```

### ページデータ

```javascript
const pageData = [
  {
    id: "component_id",           // コンポーネントID（必須）
    type: "header",               // パーツタイプ（必須）
    module_name: "site_header",   // 使用するパーツ名（必須）
    parts: [],                    // ネストされたパーツ配列
    // 以下、パーツで定義されたパラメータ
    bgColor: "bg-white",
    logoUrl: "./img/logo.png"
  }
];
```

## 🎨 テンプレート記法

### 1. テキスト入力
```html
{$paramName:デフォルトテキスト}
```

### 2. 選択肢
#### ラジオボタン（単一選択）
```html
($param:option1|option2|option3)
```

#### セレクトボックス（単一選択）
```html
($param:option1,option2,option3)
```

#### チェックボックス（複数選択）
```html
($param?:option1|option2|option3)
($param?:option1,option2,option3)
```

### 3. z-記法
#### 配列繰り返し
```html
<div z-for="arrayName">
  <p>($itemProperty)</p>
</div>
```

#### 配列ラッパー（空配列時非表示）
```html
<div z-for-wrapper="arrayName">
  <h3>リストタイトル</h3>
  <ul z-for="arrayName">
    <li>($item)</li>
  </ul>
</div>
```

#### 条件表示
```html
<div z-if="condition">
  <p>条件に応じて表示されるコンテンツ</p>
</div>
```

#### パーツ挿入
```html
<div z-slot="nested_parts"></div>
```

## 🔧 エディターAPI

### プロパティ設定

```javascript
// データ設定
editor.commonImages = commonImageArray;      // 共通画像
editor.individualImages = individualImageArray; // 個別画像
editor.parts = partsArray;                   // パーツ定義
editor.page = pageDataArray;                 // ページデータ
```

### イベントリスナー

```javascript
// 保存イベント
editor.addEventListener('save', (event) => {
  const savedData = event.detail;
  // サーバーに送信など
});

// プレビューモード切替
editor.addEventListener('preview', (event) => {
  console.log('プレビューモード:', event.detail);
});

// データ変更イベント
editor.addEventListener('change', (event) => {
  console.log('データ変更:', event.detail);
});
```

### 高度なAPI（Vueインスタンス経由）

```javascript
// Vueインスタンスにアクセス（非推奨）
const instance = editor._instance?.exposed;

if (instance) {
  // 現在のデータ取得
  const currentData = instance.getData?.();
  
  // リセット
  instance.reset?.();
}
```

## 📁 サンプルファイル

- `usage.html` - メインの使い方ガイドページ
- `usage-example.html` - APIサンプルとデモ
- `sample-data.js` - JavaScriptでのデータ定義例
- `my-cms-data.json` - JSONファイルでのデータ定義例
- `index.html` - 基本的な使用例
- `furisode-demo.html` - 振袖専門店デモ
- `blog.html` - ブログシステムデモ

## 🌐 ブラウザサポート

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 📝 注意事項

1. **パス指定**: 画像やCSSのパスは、HTMLファイルからの相対パスで指定
2. **カスタムエレメント**: `zero-code`タグが定義されるまで待機が必要
3. **データ形式**: すべてのデータはJavaScriptオブジェクト形式で設定
4. **外部CSS**: プレビュー用の外部CSSは別途読み込み可能

## 🤝 統合例

### WordPressとの統合

```php
// functions.php
function enqueue_zero_code_editor() {
  wp_enqueue_style('zero-code', get_template_directory_uri() . '/assets/zero-code.css');
  wp_enqueue_script('zero-code', get_template_directory_uri() . '/assets/vue-cms-editor.optimized.umd.js', array(), '1.0.0', true);
  
  // WordPressのデータをJavaScriptに渡す
  wp_localize_script('zero-code', 'cmsData', array(
    'images' => get_cms_images(),
    'parts' => get_cms_parts(),
    'pageData' => get_cms_page_data()
  ));
}
add_action('wp_enqueue_scripts', 'enqueue_zero_code_editor');
```

### Reactアプリとの統合

```jsx
import { useEffect, useRef } from 'react';

function CMSEditor({ images, parts, pageData }) {
  const editorRef = useRef(null);
  
  useEffect(() => {
    if (editorRef.current) {
      // データを設定
      editorRef.current.images = images;
      editorRef.current.parts = parts;
      editorRef.current.pageData = pageData;
    }
  }, [images, parts, pageData]);
  
  return <zero-code ref={editorRef} />;
}
```

## 📚 参考リンク

- [プロジェクトリポジトリ](https://github.com/your-repo/zero-code)
- [APIドキュメント](./API.md)
- [開発ガイド](../DEVELOPMENT.md)