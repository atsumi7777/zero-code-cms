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
  <zero-code-editor id="editor"></zero-code-editor>
  
  <!-- ライブラリ読み込み -->
  <script src="./vue-cms-editor.optimized.umd.js"></script>
  
  <!-- データ設定 -->
  <script>
    customElements.whenDefined('zero-code-editor').then(() => {
      const editor = document.getElementById('editor');
      
      // 画像、パーツ、ページデータを設定
      editor.images = [...];     // 画像データ配列
      editor.parts = [...];      // パーツデータ配列
      editor.pageData = {...};   // ページデータオブジェクト
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
    editor.images = data.images;
    editor.parts = data.parts;
    editor.pageData = data.pageData;
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
    height: 600,               // 高さ（ピクセル）
    category: "common"         // カテゴリ（common/individual等）
  }
];
```

### パーツデータ（共通/個別）

```javascript
const parts = [
  {
    id: "part_id",             // 一意のID（必須）
    name: "パーツ名",          // 表示名（必須）
    category: "header",        // カテゴリ（header/content/footer等）
    isCommon: true,            // 共通パーツフラグ
    isIndividual: false,       // 個別パーツフラグ
    template: "<div>...</div>", // HTMLテンプレート（必須）
    initialData: {             // 初期データ
      key: "value"
    }
  }
];
```

### ページデータ

```javascript
const pageData = {
  id: "page_id",               // ページID（必須）
  name: "ページ名",            // ページ名（必須）
  template: "<div>...</div>",  // ページテンプレート（必須）
  parts: ["part_id1", "part_id2"], // 使用するパーツID配列
  initialData: {               // ページ初期データ
    key: "value"
  }
};
```

## 🎨 テンプレート記法

### 選択記法（ラジオボタン）
```html
($param:オプション1|オプション2|オプション3)
```

### 条件付き記法（チェックボックス）
```html
($param?:オプション1|オプション2|オプション3)
```

### 配列記法
```html
<div z-for="arrayName">
  <p>($itemProperty)</p>
</div>
```

### パーツ挿入
```html
<div z-part="part_id"></div>
```

## 🔧 エディターAPI

### プロパティ設定

```javascript
// エディターモード設定
editor.setAttribute('mode', 'edit');  // 編集モード
editor.setAttribute('mode', 'preview'); // プレビューモード

// データ設定
editor.images = imageArray;
editor.parts = partsArray;
editor.pageData = pageObject;
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
// Vueインスタンスにアクセス
const instance = editor._instance.exposed;

// メソッド呼び出し
instance.addImage(imageObject);     // 画像追加
instance.updatePart(id, partData);  // パーツ更新
instance.removePart(id);            // パーツ削除
instance.getData();                 // 現在のデータ取得
instance.reset();                   // リセット
```

## 📁 サンプルファイル

- `index.html` - 基本的な使用例
- `usage-example.html` - 詳細な使用方法とAPI例
- `sample-data.js` - JavaScriptでのデータ定義例
- `my-cms-data.json` - JSONファイルでのデータ定義例

## 🌐 ブラウザサポート

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 📝 注意事項

1. **パス指定**: 画像やCSSのパスは、HTMLファイルからの相対パスで指定
2. **カスタムエレメント**: `zero-code-editor`タグが定義されるまで待機が必要
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
  
  return <zero-code-editor ref={editorRef} />;
}
```

## 📚 参考リンク

- [プロジェクトリポジトリ](https://github.com/your-repo/zero-code)
- [APIドキュメント](./API.md)
- [開発ガイド](../DEVELOPMENT.md)