# PoliTech概念リサーチ

## 1. PoliTech / Political Technologyの定義

### 三概念の体系化

| | GovTech（行政DX） | CivicTech（市民技術） | **PoliTech（政治技術）** |
|---|---|---|---|
| **根本的な問い** | 決まった政策をいかに効率的に届けるか | 市民がいかに参加するか | **何を、誰が、どのように決めるか** |
| **主たるアクター** | 政府・行政機関 | 市民社会・NPO | **市民 + AIエージェント（非党派・非企業）** |
| **対象** | 行政サービスの提供 | 市民参加の促進 | **政治的意思決定プロセスそのもの** |
| **受益者** | サービス利用者としての市民 | 参加者としての市民 | **主権者としての市民** |
| **代表的事例** | エストニアX-Road, マイナンバー | Code for Japan, FixMyStreet | **vTaiwan, Decidim, Pol.is, OJPP** |
| **運営主体** | 政府 | NPO・市民団体 | **オープンコミュニティ（非党派・非企業）** |
| **AIの位置づけ** | 業務効率化ツール | 参加支援ツール | **共同参加主体（エージェントレディ）** |

### PoliTechの独自性

PoliTechは以下の点でCivicTechとGovTechの双方と区別される：

1. **政治的意思決定プロセス自体**に焦点（行政サービスでも市民参加でもなく）
2. **非党派性 + 非企業性**が設計原則（政党にも企業にも依存しない）
3. **エージェントレディ**：AIエージェントの参加を前提とした設計
4. **オープンソース必須**：政治インフラはプロプライエタリであってはならない

### 「Political Technology」の既存用法

注意: "Political Technology" / "PoliTech"という用語は、ロシア語圏では「политтехнолог（政治テクノロジスト）」として選挙コンサルタントや政治操作の専門家を指す用法が存在する。本論文で提案するPoliTechはこれとは明確に異なり、政治プロセスの透明化・民主化のための非党派的・非企業的・オープンソースな技術基盤を指す。

## 2. 非企業性（Non-Corporate）の理論的根拠

### なぜ企業が運営してはいけないか

1. **プラットフォームの私有化問題**: Facebook/Meta、X/Twitterが示すように、企業が運営する「公共的空間」は企業の経営判断でルールが変わる
2. **利益相反**: テック企業がPoliTechプラットフォームを運営する場合、企業のロビイング活動と政治透明化ツールが矛盾する
3. **買収リスク**: 企業運営のプラットフォームは買収・売却の対象になりうる
4. **広告モデルの非両立性**: 広告収入に依存するプラットフォームは、利用者の注意を最大化するインセンティブを持ち、熟議と相容れない
5. **SaaS化の問題**: 政治インフラをSaaS（Software as a Service）として企業が提供する場合、データの所有権とコントロールが企業に移る

### AGPLの戦略的意義

AGPL-3.0はこの問題に対する制度的解決策：
- ネットワーク経由のサービス提供時にもソースコード公開を義務づける
- 企業がフォークしてプロプライエタリ化することを防ぐ
- 政治インフラを「デジタルコモンズ」として維持する法的メカニズム

## 3. AIエージェントと政治参加

### 主要文献

#### Lazar & Cuéllar (2025) "AI Agents and Democratic Resilience"
- Knight First Amendment Institute at Columbia University / Carnegie Endowment for International Peace
- September 4, 2025
- AIエージェントが民主主義にもたらすリスクと機会を分析
- リスク: ホワイトカラー代替による大衆の怒り増幅、少数企業への権力集中、独裁者への精密監視ツール提供、公共圏の信頼低下
- 機会: 認知的補助装置（cognitive prosthetics）として市民を導く、操作検出のシールド、集団的権力の動員
- 核心的主張: **コア民主的機能（アジェンダ設定、意思形成、最終選択）はアウトソースできない**
- 民主国家がフロンティアモデルへのオープンで分散的なアクセスを支援すべき

#### Summerfield et al. (2025) "The Impact of Advanced AI Systems on Democracy"
- Nature Human Behaviour, October 2025
- AIの民主主義への影響を3次元で分析:
  1. 認識論的影響（Epistemic）: 市民の教育された選択への影響
  2. 物質的影響（Material）: 選挙メカニズムの安定化/不安定化
  3. 基盤的影響（Foundational）: 民主主義の原則の強化/弱体化
- AIは教育・公共言説の強化・共通基盤の発見・民主主義の再構想に貢献しうる

#### Lazar (2025) "Levels of Autonomy for AI Agents"
- arXiv:2506.12469
- AIエージェントの自律性レベルの分類体系
- 民主的プロセスにおけるエージェントの役割と制限の枠組み

### エージェントレディ設計原則

1. **API-First**: 全データをRESTful API / GraphQLで提供
2. **機械可読データ**: JSON-LD、構造化データを標準フォーマットとする
3. **エージェント認証**: AIエージェント用のアイデンティティ管理と権限設定
4. **MCP対応**: Model Context Protocol等の標準プロトコルによる外部AI連携
5. **監査ログ**: AIエージェントの全操作のトレーサビリティを保証
6. **バイアス検証可能性**: オープンソースであることがAIバイアスの検証の前提条件
7. **人間のオーバーライド**: コア民主的機能は常に人間が最終決定

## 4. 6軸比較フレームワーク

既存4軸 + 新2軸:

| 軸 | 定義 | 理論的根拠 |
|---|---|---|
| 非党派性 | プラットフォームが特定政党から独立しているか | Pateman (1970), Barber (1984) |
| オープンソース度 | コード・データ・アルゴリズムの公開度 | Raymond (1999), Weber (2004) |
| 制度的接合性 | 既存の政治制度との連携度 | Landemore (2015), Simon et al. (2017) |
| 参加の包摂性 | デジタルデバイドへの対応 | Fishkin (2009), Borge et al. (2023) |
| **非企業性** | 営利企業からの組織的・資金的独立性 | Barandiaran et al. (2024), Zuboff (2019) |
| **エージェントレディ度** | AIエージェント参加の設計対応度 | Lazar & Cuéllar (2025), Summerfield et al. (2025) |

## 5. 追加参考文献

- Lazar, S. & Cuéllar, M.-F. (2025). "AI Agents and Democratic Resilience." Knight First Amendment Institute at Columbia University / Carnegie Endowment for International Peace. https://knightcolumbia.org/content/ai-agents-and-democratic-resilience
- Summerfield, C., Argyle, L.P. et al. (2025). "The Impact of Advanced AI Systems on Democracy." Nature Human Behaviour. https://www.nature.com/articles/s41562-025-02309-z
- Kuo, M.A. & Nolan, H.C. (2022). "Human-centred mechanism design with Democratic AI." Nature Human Behaviour. https://www.nature.com/articles/s41562-022-01383-x
- Lazar, S. (2025). "Levels of Autonomy for AI Agents." arXiv:2506.12469. https://arxiv.org/html/2506.12469v2
- APSA 2025 Pre-Conference Workshop. "Technology and the Future of Democracy." https://www.electoralintegrityproject.com/eip-blog/2025/9/19/vancouver-pre-apsa-2025-technology-and-the-future-of-democracy
- GovOcal (2023). "What's the Difference Between Civic Tech and GovTech?" https://www.govocal.com/blog/whats-difference-civic-tech-govtech
- Zuboff, S. (2019). The Age of Surveillance Capitalism. Public Affairs.
