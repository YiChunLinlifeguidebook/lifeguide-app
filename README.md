# LifeGuide - 你的生活導師

LifeGuide 是一個使用 Next.js 14、TypeScript 和 Tailwind CSS 建立的生活諮詢 Web 應用程式。

## 功能特色

- 🏠 **首頁**：展示 LifeGuide 品牌與開始按鈕
- 🔐 **身份驗證**：登入與註冊功能（使用 localStorage 模擬）
- 📊 **控制台**：顯示使用者資訊與快速操作
- 💬 **諮詢服務**：提供表單填寫與模擬諮詢結果
- 🏥 **健康檢查**：API 端點用於系統狀態檢查
- 📱 **響應式設計**：手機優先的 UI 設計

## 技術堆疊

- **框架**：Next.js 14 (App Router)
- **語言**：TypeScript
- **樣式**：Tailwind CSS
- **部署**：可部署至 Vercel、Netlify 等平台

## 快速開始

### 環境要求

- Node.js 18.0 或更高版本
- npm 或 yarn

### 安裝步驟

1. 複製專案到本地：
```bash
git clone https://github.com/lin0901210103-pixel/lifeguide-app.git
cd lifeguide-app
```

2. 安裝依賴：
```bash
npm install
```

3. （可選）複製環境變數檔案：
```bash
cp .env.example .env.local
```

4. 啟動開發伺服器：
```bash
npm run dev
```

5. 在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000)

## 可用指令

- `npm run dev` - 啟動開發伺服器
- `npm run build` - 建立生產版本
- `npm run start` - 啟動生產伺服器
- `npm run lint` - 執行 ESLint 檢查

## 專案結構

```
lifeguide-app/
├── app/
│   ├── api/
│   │   └── health/         # 健康檢查 API
│   ├── auth/              # 登入/註冊頁面
│   ├── dashboard/         # 控制台頁面
│   ├── guide/             # 諮詢服務頁面
│   ├── layout.tsx         # 根佈局
│   ├── page.tsx           # 首頁
│   └── globals.css        # 全域樣式
├── components/            # 可重用元件（預留）
├── lib/                  # 工具函式（預留）
├── public/               # 靜態資源
├── .env.example          # 環境變數範例
├── .gitignore           # Git 忽略檔案
├── next.config.mjs      # Next.js 設定
├── package.json         # 專案依賴
├── postcss.config.mjs   # PostCSS 設定
├── tailwind.config.ts   # Tailwind 設定
└── tsconfig.json        # TypeScript 設定
```

## 主要頁面

### 首頁 (`/`)
- 展示 LifeGuide 品牌
- 提供「開始使用」按鈕導向登入頁面

### 身份驗證 (`/auth`)
- 登入與註冊切換介面
- 使用 localStorage 模擬身份驗證
- 驗證成功後導向控制台

### 控制台 (`/dashboard`)
- 顯示使用者資訊（姓名、電子郵件、登入時間）
- 提供「開始諮詢」按鈕
- 登出功能

### 諮詢服務 (`/guide`)
- 表單收集：姓名、生日、問題描述
- 送出後顯示模擬諮詢結果
- 支援多次諮詢

### API 端點

#### 健康檢查
```
GET /api/health
回應：{ "status": "ok" }
```

## 開發說明

### 身份驗證機制

本專案使用 localStorage 來模擬身份驗證狀態：
- `isAuthenticated`: 儲存登入狀態
- `user`: 儲存使用者資訊（email、name、loginTime）

### 樣式設計

- 採用 Tailwind CSS 進行樣式設計
- 支援深色模式（dark mode）
- 響應式設計，手機優先

## 部署

### Vercel（推薦）

1. 將程式碼推送到 GitHub
2. 在 Vercel 中導入專案
3. 自動偵測 Next.js 並部署

### 其他平台

專案支援任何支援 Next.js 的部署平台，如 Netlify、AWS Amplify 等。

## 授權

MIT License

## 聯絡方式

如有任何問題或建議，歡迎開啟 Issue 或 Pull Request。