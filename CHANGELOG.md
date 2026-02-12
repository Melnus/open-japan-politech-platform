# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.1.0] - 2025-07-13

### Added

#### プロダクト
- **MoneyGlass** — 政治資金可視化ダッシュボード（公開画面 + 管理画面）
  - 収入9カテゴリ・支出8カテゴリの分類
  - Recharts によるグラデーション棒グラフ・ドーナツチャート
  - AnimatedCounter によるダッシュボード統計
  - GradientCard による政党別カード
  - 6 RESTful API エンドポイント
- **PolicyDiff** — 政策比較プラットフォーム
  - 全15政党のマニフェスト・政策を10カテゴリに分類
  - 政党間比較、カテゴリ別フィルタリング
  - remark + remark-html による Markdown レンダリング
  - 市民からの政策提案機能
  - 6 RESTful API エンドポイント
- **ParliScope** — 議会監視ダッシュボード（公開画面 + 管理画面）
  - 国会会期・法案・議員・投票・討論データの API 化
  - BillTimeline（法案ステータスのステップインジケーター）
  - VoteChart（投票結果のアニメーション棒グラフ）
  - 議員カードのページネーション付き一覧
  - 7 RESTful API エンドポイント

#### データ
- 15政党対応（自民・立憲・維新・公明・共産・国民・れいわ・社民・参政・チームみらい・NHK党・教育無償化・沖縄社大党 他）
- 47都道府県マスタ
- 14会期分の国会データ（第200〜213回）
- 40名の実在議員データ
- 31法案（実在+架空混在）
- 疑似乱数による政治資金デモデータ

#### インフラストラクチャ
- pnpm 10 モノレポ構成（5アプリ + 4共有パッケージ）
- @ojpp/ui デザインシステム（11コンポーネント、theme.css）
- @ojpp/db Prisma スキーマ（21モデル・10 enum）
- @ojpp/api 共有ユーティリティ（ページネーション・エラー処理・CORS）
- @ojpp/ingestion データ取り込みパイプライン（3データソース）
- GitHub Actions CI/CD（lint → typecheck → test → build）
- Vitest テストスイート（33テスト）
- Biome 2.3 リンター/フォーマッター
- Vercel デプロイ設定

#### ドキュメント
- 学術論文「PoliTech：政党にも企業にもよらない政治のデジタル化 — 5地域比較分析」
- デプロイ手順書（Vercel + Supabase）
- コントリビューションガイド
- セキュリティポリシー
- 行動規範

### Known Issues
- v0.1 のデータにはサンプル・架空データが含まれています
- 認証・認可は未実装（v0.2 で Supabase Auth を導入予定）
- AIエージェント認証・MCP対応・監査ログは v0.2 で実装予定
- 管理画面の一部ページはプレースホルダー（v0.2 で実装予定）

[0.1.0]: https://github.com/ochyai/open-japan-politech-platform/releases/tag/v0.1.0
