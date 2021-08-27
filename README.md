# 前端小測驗

## 使用工具

使用 Nuxt.js 撰寫，Git 進行版控，並用 firebase CLI 部署至 firebase 平台。

[DEMO 網址 1](https://wasa-demo.web.app/)

## 需求說明

1. 用 Vue CLI 或 Nuxt.js 完成
   使用Nuxt.js 完成

2. 以 scss 撰寫內容樣式
   將共用的 SCSS 檔放置在 `assets/css` 資料夾內，由需要的組件引用。其中分為三個檔案：
   * _theme.scss：更換主題顏色用
   * components.scss：提供 Header 與 Footer 使用(兩者CSS相似度高)
   * variables_g.scss：定義共用變數
  
3. 應用component 功能
   共製作 5 個 components：
   * ChangeTheme：更換主題用
   * Footer、Header
   * Navbar：切換 routes 用
   * Icon： 製作雙層 component 用

4. 應用 computed 功能
   * 計算 <Nuxt /> 組件的高度，因應不同的 routes 會有不同的排版
   * 計算已購買課程的總金額

5. 製作兩層的input, value (v-model) 動作範例
   * 在  `default.vue` 中定義 color，v-model 單選框，用 `nuxt-child-key` 傳入 <Nuxt /> 組件
   * <Nuxt /> 組件中定義 `icon_color` 承接父組件的 props，繼續以 `icon_color` 傳入 <Icon /> 組件
   * 在 <Icon /> 組件中，將 props 取出，並綁定至行內樣式中。使用者選擇顏色時，即可改變 icon 顏色

6. 可切換頁面
   可切換首頁 ( `/` )、已購買課程頁面 ( `/bought` )

7. 設定頁面title, description
   頁面 title 設定為 Demo Webpage，另有設定 meta description 與 meta keywords 標籤

8. 設定Global參數、讓頁面的顏色、主題會隨著更換
   * 於 `_theme.scss` 中定義主題顏色，以及呼叫用的 mixin (引入 mixin 時會根據 `data-theme` 不同而給予不同主題的顏色變數)
   * 用 Vuex 定義全域變數 `themeType`
   * 於頁面渲染完成、改變主題時發 dispatch 帶參數至 actions，再由 actions 帶參數發 commit 給 mutations
   * mutations 中改變 state 以及 `data-theme` 標籤的值，完成改變顏色主題

9.  串接一組列表資料api
    * 使用 axios 套件，於 fetch 階段發起非同步作業 (使用 async await )
    * API 網址為 (https://mocki.io/v1/99c850fb-0b6d-42e5-8539-d9717d4d99e8)

10. 程式架構做到最大的沿用性、維護性，並於Readme說明你的想法
    * 當 API 越串越多時，可將 API 模組化，並使用 `axios` 套件製作攔截器，統一處理 API 仔入資料前的等待時間與錯誤處理
    * 因頁面功能較簡單，所以沒有把 pages 裡的元件再拆分成 components。若頁面功能複雜且有重複元件時，拆分組件為較好作法
    * 若拆分出來的組件會需要有較重覆的樣式，可將樣式定義在同一支 SCSS 引入使用
    * 引入事先定義好的共用變數以統一畫面UI，也好集中管理

11. 使用Firebase Hosting，提供連結給我們進行瀏覽
    * `npm run generate` 產生打包成dist
    * 先於本地全域安裝 fiebase 套件，回到終端機輸入 `firebase login` 進行登入
    * 第一次上傳檔案需先啟用 `firebase init`，若非第一次可直接使用 `firebase deploy` 部署
    * 部署完後等待平台更新完畢即可瀏覽

12. 提供Github程式碼