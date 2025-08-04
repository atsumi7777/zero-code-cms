(function () {
  // DOMが読み込まれた後にJSONファイルを読み込んでpropsに設定
  document.addEventListener("DOMContentLoaded", async function () {
    try {
      // JSモジュールからデータをインポート
      const { commonParts } = await import("./sample-common-parts.js");
      const { individualParts } = await import("./sample-individual-parts.js");
      const { pageData } = await import("./sample-page.js");
      const { commonImagesData } = await import("./sample-common-images.js");
      const { individualImagesData } = await import(
        "./sample-individual-images.js"
      );

      // パーツデータを結合（従来の互換性のため）
      const combinedParts = [...commonParts, ...individualParts];

      // main-editorにプロパティを設定
      const mainEditor = document.getElementById("main-editor");
      if (mainEditor) {
        // 従来形式（互換性のため）
        mainEditor.parts = combinedParts;
        // 新形式（共通・個別分離）
        mainEditor.commonParts = commonParts;
        mainEditor.individualParts = individualParts;
        // その他のデータ
        mainEditor.page = pageData;
        mainEditor.commonImages = commonImagesData;
        mainEditor.individualImages = individualImagesData;
        console.log("sample-common-parts.jsを読み込みました:", commonParts);
        console.log(
          "sample-individual-parts.jsを読み込みました:",
          individualParts
        );
        console.log("sample-page.jsを読み込みました:", pageData);
        console.log(
          "sample-common-images.jsを読み込みました:",
          commonImagesData
        );
        console.log(
          "sample-individual-images.jsを読み込みました:",
          individualImagesData
        );
        console.log("全てのデータをmain-editorに設定しました");
      }
    } catch (error) {
      console.error("JSONファイルの読み込みに失敗しました:", error);
    }

    // Vueコンポーネントからのカスタムイベントをリッスン
    document.addEventListener("dataFromVue", function (event) {
      console.log("dataFromVueイベントを受信しました");
      console.log("event:", event);
      console.log("event.detail:", event.detail);

      const { data, type, timestamp } = event.detail;

      switch (type) {
        case "page":
          console.log("Pageデータを受信:", data);
          displayReceivedData(event.detail);
          break;

        case "parts":
          console.log("Partsデータを受信:", data);
          displayReceivedData(event.detail);
          break;

        case "commonParts":
          console.log("共通Partsデータを受信:", data);
          displayReceivedData(event.detail);
          break;

        case "individualParts":
          console.log("個別Partsデータを受信:", data);
          displayReceivedData(event.detail);
          break;

        case "commonImages":
          console.log("共通画像データを受信:", data);
          handleCommonImages(data);
          break;

        case "individualImages":
          console.log("個別画像データを受信:", data);
          handleIndividualImages(data);
          break;
      }
    });
  });

  // 共通画像データの処理
  function handleCommonImages(images) {
    console.log("共通画像データを処理中:", images);
    // Base64データをS3やディレクトリに保存する処理
    images.forEach((image) => {
      const base64Data = image.fileData.base64;
      // 保存処理を実装
      saveImageToStorage(base64Data, image.name, "common");
    });
  }

  // 個別画像データの処理
  function handleIndividualImages(images) {
    console.log("個別画像データを処理中:", images);
    images.forEach((image) => {
      const base64Data = image.fileData.base64;
      saveImageToStorage(
        base64Data,
        image.name,
        "individual",
        image.componentId
      );
    });
  }

  // 画像保存処理の例
  async function saveImageToStorage(
    base64Data,
    fileName,
    category,
    componentId = null
  ) {
    try {
      console.log(`画像保存開始: ${fileName} (${category})`);

      // Base64データをBlobに変換
      const base64Response = await fetch(base64Data);
      const blob = await base64Response.blob();

      // FormDataを作成
      const formData = new FormData();
      formData.append("image", blob, fileName);
      formData.append("category", category);
      if (componentId) {
        formData.append("componentId", componentId);
      }

      // サーバーにアップロード（実際の実装では適切なエンドポイントを使用）
      // const response = await fetch('/api/upload-image', {
      //   method: 'POST',
      //   body: formData
      // })

      // デモ用のコンソール出力
      console.log("画像保存成功:", {
        fileName,
        category,
        componentId,
        size: blob.size,
        type: blob.type,
      });

      // 実際の実装では以下のような処理を行う
      // if (response.ok) {
      //   const result = await response.json()
      //   console.log('画像保存成功:', result)
      // } else {
      //   console.error('画像保存失敗:', response.statusText)
      // }
    } catch (error) {
      console.error("画像保存エラー:", error);
    }
  }

  // 受信したデータを表示する関数
  function displayReceivedData(data) {
    // 既存の表示エリアがあれば削除
    const existingDisplay = document.getElementById("received-data-display");
    if (existingDisplay) {
      existingDisplay.remove();
    }

    // 新しい表示エリアを作成
    const displayDiv = document.createElement("div");
    displayDiv.id = "received-data-display";
    displayDiv.style.cssText = `
        margin: 20px 0;
        padding: 15px;
        border: 2px solid #28a745;
        border-radius: 8px;
        background: #d4edda;
        font-family: monospace;
        white-space: pre-wrap;
    `;

    // HTMLエスケープ関数を追加
    function escapeHtml(str) {
      if (typeof str !== "string") return str;
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    // データ内のエスケープ文字を再帰的に処理する関数
    function processEscapedData(obj) {
      if (typeof obj === "string") {
        return obj;
      } else if (Array.isArray(obj)) {
        return obj.map((item) => processEscapedData(item));
      } else if (obj && typeof obj === "object") {
        const processed = {};
        for (const [key, value] of Object.entries(obj)) {
          processed[key] = processEscapedData(value);
        }
        return processed;
      }
      return obj;
    }

    // データ内のエスケープ文字を処理
    const processedData = processEscapedData(data.data);
    // JSON文字列をHTMLエスケープ
    const jsonStr = JSON.stringify(processedData, null, 2);
    const escapedJson = escapeHtml(jsonStr);

    displayDiv.innerHTML = `
        <h4 style="margin: 0 0 10px 0; color: #155724;">Vueから受信したデータ:</h4>
        <div style="background: white; padding: 10px; border-radius: 4px; overflow-x: auto;">
        <strong>データタイプ:</strong> ${data.type}<br>
        <strong>タイムスタンプ:</strong> ${data.timestamp}<br>
        <strong>カウント:</strong> ${data.count}<br>
        <strong>データ内容:</strong><br>
        <pre style="margin: 5px 0 0 0;">${escapedJson}</pre>
        </div>
    `;

    // 最初のdemo-sectionの後に挿入
    const firstSection = document.querySelector(".demo-section");
    if (firstSection) {
      firstSection.parentNode.insertBefore(
        displayDiv,
        firstSection.nextSibling
      );
    }
  }
})();
