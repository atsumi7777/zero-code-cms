/**
 * My振袖 ZERO CODE EDITOR デモページ
 */

(function () {
  "use strict";

  let currentEditor = null;
  let currentActiveTab = "editor";
  let editorData = null;

  // DOMロード後に初期化
  document.addEventListener("DOMContentLoaded", async function () {
    console.log("🌸 My振袖デモページ初期化開始");

    try {
      await initializeEditor();
      initializeEditorControls();
    } catch (error) {
      console.error("❌ My振袖デモ: 初期化エラー", error);
    }
  });

  /**
   * エディターの初期化 (My振袖専用データで初期化)
   */
  async function initializeEditor() {
    try {
      console.log("🌸 My振袖デモデータ読み込み中...");

      // 全ページデモデータを読み込み
      const { demoFullPageData } = await import("/demo-full-page-data.js");
      const { myFurisodeCommonParts } = await import(
        "/demo-my-furisode-common-parts.js"
      );
      const { myFurisodeIndividualParts } = await import(
        "/demo-my-furisode-individual-parts.js"
      );
      const { myFurisodeCommonImages } = await import(
        "/demo-my-furisode-common-images.js"
      );
      const { myFurisodeIndividualImages } = await import(
        "/demo-my-furisode-individual-images.js"
      );

      // main-editorにプロパティを設定
      const mainEditor = document.getElementById("main-editor");
      if (mainEditor) {
        currentEditor = mainEditor;

        // 全ページデモデータで初期化
        mainEditor.parts = [
          ...myFurisodeCommonParts,
          ...myFurisodeIndividualParts,
        ];
        mainEditor.commonParts = myFurisodeCommonParts;
        mainEditor.individualParts = myFurisodeIndividualParts;
        mainEditor.page = demoFullPageData;
        mainEditor.commonImages = myFurisodeCommonImages;
        mainEditor.individualImages = myFurisodeIndividualImages;

        // グローバルエディターデータを設定
        editorData = {
          parts: [...myFurisodeCommonParts, ...myFurisodeIndividualParts],
          commonParts: myFurisodeCommonParts,
          individualParts: myFurisodeIndividualParts,
          page: demoFullPageData,
          commonImages: myFurisodeCommonImages,
          individualImages: myFurisodeIndividualImages,
        };

        console.log("🌸 全ページデモエディター初期化完了:", {
          commonParts: myFurisodeCommonParts.length,
          individualParts: myFurisodeIndividualParts.length,
          pageData: demoFullPageData.length,
          commonImages: myFurisodeCommonImages.length,
          individualImages: myFurisodeIndividualImages.length,
        });

        // デバッグ: 詳細なデータ構造を確認
        console.log("🔍 デバッグ - ページデータ詳細:", demoFullPageData);
        console.log("🔍 デバッグ - 共通パーツ詳細:", myFurisodeCommonParts);

        // 各ページコンポーネントとテンプレートの対応を確認
        demoFullPageData.forEach((pageComponent, index) => {
          console.log(`🔍 ページコンポーネント[${index}]:`, {
            id: pageComponent.id,
            type: pageComponent.type,
            module_name: pageComponent.module_name,
          });

          // 対応するテンプレートが存在するかチェック
          const section = myFurisodeCommonParts.find(
            (s) => s.type === pageComponent.type
          );
          if (section) {
            const module = section.module.find(
              (m) => m.title === pageComponent.module_name
            );
            console.log(`✅ テンプレート発見:`, {
              type: pageComponent.type,
              module_name: pageComponent.module_name,
              templateExists: !!module,
            });
          } else {
            console.log(`❌ テンプレートセクションが見つかりません:`, {
              type: pageComponent.type,
              availableTypes: myFurisodeCommonParts.map((s) => s.type),
            });
          }
        });

        console.log("✅ My振袖デモエディター準備完了");

        // エディターの強制的な再描画を遅延実行
        setTimeout(() => {
          console.log("🔄 エディター強制再描画実行");
          if (mainEditor && typeof mainEditor.forceUpdate === "function") {
            mainEditor.forceUpdate();
          }
          // Vue コンポーネントの$forceUpdateを試行
          if (mainEditor && mainEditor.$forceUpdate) {
            mainEditor.$forceUpdate();
          }
        }, 1000);
      } else {
        throw new Error("main-editor要素が見つかりません");
      }
    } catch (error) {
      console.error("My振袖デモデータ読み込みエラー:", error);
      console.error(`初期化エラー: ${error.message}`);
    }
  }

  /**
   * エディターコントロールの初期化
   */
  function initializeEditorControls() {
    // タブ切り替え機能
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const tabText = this.textContent;
        switchTab(tabText, this);
      });
    });

    // 保存ボタン
    const saveBtn = document.querySelector(".editor-btn:not(.primary)");
    if (saveBtn) {
      saveBtn.addEventListener("click", handleSave);
    }

    // 公開ボタン
    const publishBtn = document.querySelector(".editor-btn.primary");
    if (publishBtn) {
      publishBtn.addEventListener("click", handlePublish);
    }

    // エディターからのデータ変更を監視
    if (currentEditor) {
      currentEditor.addEventListener("dataFromVue", handleEditorDataChange);
    }

    console.log("✅ エディターコントロール初期化完了");
  }

  /**
   * タブ切り替え処理
   */
  function switchTab(tabName, tabElement) {
    // アクティブタブを更新
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    tabElement.classList.add("active");

    // タブに応じた表示切り替え
    const editorContent = document.querySelector(".editor-content");

    switch (tabName) {
      case "エディター":
        currentActiveTab = "editor";
        editorContent.innerHTML = '<zero-code id="main-editor"></zero-code>';
        // エディターを再初期化
        setTimeout(() => {
          reinitializeEditor();
        }, 100);
        break;

      case "プレビュー":
        currentActiveTab = "preview";
        showPreview();
        break;

      case "パーツ管理":
        currentActiveTab = "parts";
        showPartsManager();
        break;
    }

    console.log(`🔄 タブ切り替え: ${tabName}`);
  }

  /**
   * プレビュー表示
   */
  function showPreview() {
    const editorContent = document.querySelector(".editor-content");
    if (editorData && editorData.page) {
      let previewHtml = '<div class="preview-container">';
      previewHtml += '<h3 class="preview-title">📱 ライブプレビュー</h3>';
      previewHtml += '<div class="preview-content">';

      // ページデータからHTMLを生成
      editorData.page.forEach((item) => {
        previewHtml += generatePreviewHtml(item);
      });

      previewHtml += "</div></div>";
      editorContent.innerHTML = previewHtml;
    } else {
      editorContent.innerHTML = `
        <div class="preview-container">
          <h3 class="preview-title">📱 プレビュー</h3>
          <div class="preview-placeholder">
            <p>エディターでコンテンツを編集するとここにプレビューが表示されます</p>
          </div>
        </div>
      `;
    }
  }

  /**
   * パーツ管理表示
   */
  function showPartsManager() {
    const editorContent = document.querySelector(".editor-content");
    editorContent.innerHTML = `
      <div class="parts-manager">
        <h3 class="parts-title">🧩 パーツ管理</h3>
        <div class="parts-grid">
          <div class="parts-category">
            <h4>共通パーツ</h4>
            <div class="parts-list" id="common-parts"></div>
          </div>
          <div class="parts-category">
            <h4>個別パーツ</h4>
            <div class="parts-list" id="individual-parts"></div>
          </div>
        </div>
      </div>
    `;

    // パーツリストを表示
    loadPartsList();
  }

  /**
   * エディター再初期化
   */
  async function reinitializeEditor() {
    const newEditor = document.getElementById("main-editor");
    if (newEditor && editorData) {
      currentEditor = newEditor;

      // データを再設定
      newEditor.parts = editorData.parts || [];
      newEditor.commonParts = editorData.commonParts || [];
      newEditor.individualParts = editorData.individualParts || [];
      newEditor.page = editorData.page || [];
      newEditor.commonImages = editorData.commonImages || [];
      newEditor.individualImages = editorData.individualImages || [];

      // イベントリスナーを再追加
      newEditor.addEventListener("dataFromVue", handleEditorDataChange);
    }
  }

  /**
   * 保存処理
   */
  function handleSave() {
    if (editorData) {
      // ローカルストレージに保存
      localStorage.setItem("my-furisode-demo-data", JSON.stringify(editorData));
      showNotification("💾 データを保存しました", "success");
    } else {
      showNotification("⚠️ 保存するデータがありません", "warning");
    }
  }

  /**
   * 公開処理
   */
  function handlePublish() {
    if (editorData) {
      // 公開処理のシミュレーション
      showNotification("🚀 サイトを公開しました！", "success");

      // 公開後のプレビューを表示
      setTimeout(() => {
        switchTab("プレビュー", document.querySelector(".tab:nth-child(2)"));
      }, 1000);
    } else {
      showNotification("⚠️ 公開するデータがありません", "warning");
    }
  }

  /**
   * エディターデータ変更処理
   */
  function handleEditorDataChange(event) {
    editorData = event.detail;
    console.log("📝 エディターデータが更新されました:", editorData);

    // リアルタイムでプレビューを更新（プレビュータブがアクティブな場合）
    if (currentActiveTab === "preview") {
      showPreview();
    }
  }

  /**
   * プレビューHTML生成
   */
  function generatePreviewHtml(item) {
    let html = '<div class="preview-item">';

    switch (item.type) {
      case "hero_section":
        html += `
          <div class="mf_hero">
            <div class="mf_hero__content">
              <div class="mf_hero__label">${item.label || ""}</div>
              <h1 class="mf_hero__title">${item.title || ""}</h1>
              <h2 class="mf_hero__subtitle">${item.subtitle || ""}</h2>
              <p class="mf_hero__description">${item.description || ""}</p>
              <a href="#" class="mf_hero__button">${
                item.cta_text || "ボタン"
              }</a>
            </div>
          </div>
        `;
        break;

      case "collection_gallery":
        html += `
          <div class="mf_collection">
            <div class="mf_collection__header">
              <h2 class="mf_collection__title">${
                item.title || "コレクション"
              }</h2>
              <p class="mf_collection__subtitle">${item.subtitle || ""}</p>
            </div>
            <div class="mf_collection__gallery">
        `;

        if (item.items && Array.isArray(item.items)) {
          item.items.forEach((collectionItem) => {
            html += `
              <div class="mf_collection__item">
                <div class="mf_collection__imageWrapper">
                  <img src="${
                    collectionItem.item_image || "/img/default_furisode.jpg"
                  }"
                       alt="${collectionItem.item_alt || "振袖"}"
                       class="mf_collection__image">
                  <div class="mf_collection__overlay">
                    <div class="mf_collection__tag">${
                      collectionItem.item_tag || ""
                    }</div>
                    <button class="mf_collection__viewBtn">詳細を見る</button>
                  </div>
                </div>
                <div class="mf_collection__info">
                  <h3 class="mf_collection__itemTitle">${
                    collectionItem.item_title || ""
                  }</h3>
                  <p class="mf_collection__itemDesc">${
                    collectionItem.item_description || ""
                  }</p>
                  <div class="mf_collection__price">${
                    collectionItem.item_price || ""
                  }</div>
                  <div class="mf_collection__priceNote">${
                    collectionItem.price_note || ""
                  }</div>
                </div>
              </div>
            `;
          });
        }

        html += "</div></div>";
        break;

      default:
        html += `<div class="preview-default">
          <h3>${item.type}</h3>
          <p>プレビュー準備中...</p>
        </div>`;
    }

    html += "</div>";
    return html;
  }

  /**
   * パーツリスト読み込み
   */
  function loadPartsList() {
    const commonPartsContainer = document.getElementById("common-parts");
    const individualPartsContainer =
      document.getElementById("individual-parts");

    if (editorData) {
      // 共通パーツ
      if (editorData.commonParts && commonPartsContainer) {
        editorData.commonParts.forEach((part) => {
          const partElement = createPartElement(part);
          commonPartsContainer.appendChild(partElement);
        });
      }

      // 個別パーツ
      if (editorData.individualParts && individualPartsContainer) {
        editorData.individualParts.forEach((part) => {
          const partElement = createPartElement(part);
          individualPartsContainer.appendChild(partElement);
        });
      }
    }
  }

  /**
   * パーツ要素作成
   */
  function createPartElement(part) {
    const partDiv = document.createElement("div");
    partDiv.className = "part-item";
    partDiv.innerHTML = `
      <div class="part-header">
        <h5>${part.name}</h5>
        <span class="part-type">${part.type || "パーツ"}</span>
      </div>
      <p class="part-description">${part.description || "説明なし"}</p>
      <div class="part-actions">
        <button class="btn-part-edit" data-part-id="${part.id}">編集</button>
        <button class="btn-part-preview" data-part-id="${
          part.id
        }">プレビュー</button>
      </div>
    `;

    // パーツ編集ボタンのイベント
    const editBtn = partDiv.querySelector(".btn-part-edit");
    editBtn.addEventListener("click", () => editPart(part.id));

    // パーツプレビューボタンのイベント
    const previewBtn = partDiv.querySelector(".btn-part-preview");
    previewBtn.addEventListener("click", () => previewPart(part.id));

    return partDiv;
  }

  /**
   * パーツ編集
   */
  function editPart(partId) {
    console.log(`✏️ パーツ編集: ${partId}`);
    showNotification(`パーツ ${partId} の編集機能は準備中です`, "info");
  }

  /**
   * パーツプレビュー
   */
  function previewPart(partId) {
    console.log(`👁️ パーツプレビュー: ${partId}`);
    showNotification(`パーツ ${partId} のプレビュー機能は準備中です`, "info");
  }

  /**
   * 通知表示
   */
  function showNotification(message, type = "info") {
    // 既存の通知を削除
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
      existingNotification.remove();
    }

    // 新しい通知を作成
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close">×</button>
      </div>
    `;

    // 通知をページに追加
    document.body.appendChild(notification);

    // 閉じるボタンのイベント
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", () => {
      notification.remove();
    });

    // 3秒後に自動で削除
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 3000);
  }

  /**
   * エラーハンドリング
   */
  window.addEventListener("error", function (event) {
    console.error("🚨 JavaScript エラー:", event.error);
  });
})();
