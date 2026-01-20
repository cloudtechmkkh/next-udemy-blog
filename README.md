# Next.js Udemy Blog アプリケーション

## 📋 プロジェクト概要

Next.js とモダンなWeb技術を使用した、フル機能を備えたブログアプリケーションです。ユーザー認証、記事の作成・編集・削除、検索機能などを実装した、実務レベルのプロジェクトです。

## ✨ 主な機能

- **ユーザー認証**：NextAuth.jsを使用した安全な認証システム
- **記事管理**：CRUD操作（作成・読取・更新・削除）
- **公開/プライベート区分**：ユーザーのみが自分の記事を編集可能
- **検索機能**：記事タイトルや内容から検索
- **レスポンシブUI**：モバイル対応のUIコンポーネント
- **画像最適化**：Next.jsの画像最適化機能を使用

## 🛠 技術スタック

### フロントエンド
- **フレームワーク**: Next.js 14+ (App Router)
- **言語**: TypeScript
- **スタイリング**: TailwindCSS + PostCSS
- **UIコンポーネント**: shadcn/ui

### バックエンド
- **認証**: NextAuth.js (Credentials Provider)
- **ORM**: Prisma
- **データベース**: PostgreSQL (Supabase)
- **ストレージ**: Supabase Storage

### その他
- **ESLint**: コード品質管理
- **Middleware**: 認証状態の検証

## 📁 プロジェクト構造

```
src/
├── app/                    # App Router (ページ、レイアウト)
│   ├── (auth)/            # 認証関連（ログイン、登録）
│   ├── (public)/          # 公開ページ（ホーム、記事一覧）
│   ├── (private)/         # 認証済みユーザーのみ（ダッシュボード、管理画面）
│   └── utils/             # ユーティリティ関数
├── components/            # 再利用可能なコンポーネント
│   ├── auth/              # ログイン・登録フォーム
│   ├── post/              # 記事関連コンポーネント
│   ├── layouts/           # ヘッダー・設定
│   └── ui/                # UIコンポーネント（ボタン、入力など）
├── lib/                   # ビジネスロジック
│   ├── actions/           # Server Actions（DB操作）
│   ├── post.ts            # 記事取得ロジック
│   ├── ownPost.ts         # ユーザーの記事取得
│   ├── prisma.ts          # Prismaクライアント
│   └── supabase.ts        # Supabaseクライアント
├── types/                 # TypeScript型定義
├── validations/           # スキーマ検証（ユーザー、記事）
├── auth.ts                # NextAuth.js設定
└── middleware.ts          # 認証ミドルウェア

prisma/
├── schema.prisma          # データベーススキーマ
└── migrations/            # マイグレーションファイル
```

## 🚀 セットアップ手順

### 1. リポジトリをクローン
```bash
git clone <repository-url>
cd next-udemy-blog
```

### 2. 依存パッケージをインストール
```bash
npm install
```

### 3. 環境変数を設定
`.env.local` ファイルを作成して以下の情報を設定：
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# NextAuth.js
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Database
DATABASE_URL="postgresql://user:password@host:port/database"
```

### 4. データベースをセットアップ
```bash
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

### 5. 開発サーバーを起動
```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開くとアプリケーションが表示されます。

## 📝 主要な実装例

### 記事作成（Server Action）
```typescript
// src/lib/actions/createPost.ts
export async function createPost(formData: FormData) {
  // バリデーション → DB保存 → キャッシュ無効化
}
```

### 認証ミドルウェア
```typescript
// src/middleware.ts
// 保護されたルートへのアクセスを検証
```

### Prismaスキーマ
```prisma
model User { /* ユーザー */ }
model Post { /* 記事 */ }
```

## 🔐 セキュリティ機能

- **Server Actions**: クライアント側のコード実行を排除
- **認証ミドルウェア**: ルート保護
- **CSRF対策**: NextAuth.js組み込み
- **SQL Injection対策**: Prisma ORM使用

## 📦 ビルド・デプロイ

### ビルド
```bash
npm run build
```

### 本番環境で実行
```bash
npm start
```

### Vercelにデプロイ
```bash
vercel deploy
```

## 🔧 主なコマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド |
| `npm start` | 本番サーバー起動 |
| `npx prisma studio` | Prisma Studio（DB GUI） |
| `npx prisma migrate dev` | マイグレーション実行 |
| `npm run lint` | ESLint実行 |

## 📚 学習リソース

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Supabase Documentation](https://supabase.com/docs)

## 👨‍💼 使用事例・学習ポイント

このプロジェクトで学べる技術：
- **フルスタック開発**: フロントエンド＋バックエンド＋DB
- **認証とセキュリティ**: NextAuth.jsの実装パターン
- **データベース設計**: Prismaを使用した実践的なORM
- **Server Components/Actions**: Next.js 13以降のモダンな実装
- **TypeScript**: 型安全なコードベース
- **UI/UX**: アクセシブルなコンポーネント設計

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。
