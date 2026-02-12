import { Card } from "@ojpp/ui";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold">SeatMap について</h1>

      <div className="space-y-6">
        <Card>
          <h2 className="mb-3 text-xl font-bold">SeatMap とは</h2>
          <p className="leading-relaxed text-gray-700">
            SeatMap は、日本の国会（衆議院・参議院）における議席構成を可視化するオープンソースプロジェクトです。
            選挙結果に基づく政党別の議席数を、直感的なビジュアルで表示します。
          </p>
        </Card>

        <Card>
          <h2 className="mb-3 text-xl font-bold">何ができるか</h2>
          <ul className="ml-4 list-disc space-y-2 text-gray-700">
            <li>衆議院・参議院の最新議席構成を横棒グラフで一目把握</li>
            <li>過去の選挙結果を一覧表示・比較</li>
            <li>政党別の獲得議席数・得票率を確認</li>
            <li>小選挙区と比例代表の内訳を表示</li>
            <li>API経由でのデータアクセス（AIエージェント対応）</li>
          </ul>
        </Card>

        <Card>
          <h2 className="mb-3 text-xl font-bold">データソース</h2>
          <p className="leading-relaxed text-gray-700">
            選挙データは総務省が公開する選挙関連資料に基づいています。
            データの正確性には十分注意していますが、公式発表との差異がある場合は公式データを参照してください。
          </p>
        </Card>

        <Card>
          <h2 className="mb-3 text-xl font-bold">非党派性</h2>
          <p className="leading-relaxed text-gray-700">
            SeatMap は Open Japan PoliTech Platform (OJPP) の一部として、完全な非党派性を維持しています。
            特定の政党・政治的立場を推進することなく、すべての政党のデータを公平に表示します。
          </p>
        </Card>

        <Card>
          <h2 className="mb-3 text-xl font-bold">技術スタック</h2>
          <ul className="ml-4 list-disc space-y-1 text-gray-700">
            <li>Next.js 15 (App Router)</li>
            <li>TypeScript / Tailwind CSS</li>
            <li>Prisma / PostgreSQL</li>
            <li>Recharts（チャート描画）</li>
          </ul>
        </Card>

        <Card>
          <h2 className="mb-3 text-xl font-bold">ライセンス</h2>
          <p className="leading-relaxed text-gray-700">
            AGPL-3.0 ライセンスの下で公開されています。
            コードの利用・改変・再配布は自由ですが、派生物も同じライセンスで公開する必要があります。
          </p>
        </Card>
      </div>
    </div>
  );
}
