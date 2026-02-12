import { Card, HeroSection } from "@ojpp/ui";

interface PartyResult {
  id: string;
  seatsWon: number;
  districtSeats: number | null;
  proportionalSeats: number | null;
  totalVotes: string | null;
  voteShare: number | null;
  party: {
    id: string;
    name: string;
    shortName: string | null;
    color: string | null;
  };
}

interface ElectionData {
  id: string;
  name: string;
  chamber: "HOUSE_OF_REPRESENTATIVES" | "HOUSE_OF_COUNCILLORS";
  date: string;
  totalSeats: number;
  districtSeats: number | null;
  proportionalSeats: number | null;
  turnout: number | null;
  results: PartyResult[];
}

async function getElections(): Promise<ElectionData[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3005";
  const res = await fetch(`${baseUrl}/api/elections`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch elections");
  return res.json();
}

function chamberLabel(chamber: string): string {
  return chamber === "HOUSE_OF_REPRESENTATIVES" ? "衆議院" : "参議院";
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

function SeatBar({ results, totalSeats }: { results: PartyResult[]; totalSeats: number }) {
  return (
    <div className="flex h-10 w-full overflow-hidden rounded-lg">
      {results.map((r) => {
        const pct = (r.seatsWon / totalSeats) * 100;
        if (pct < 0.5) return null;
        return (
          <div
            key={r.id}
            className="flex items-center justify-center text-xs font-medium text-white transition-all"
            style={{
              width: `${pct}%`,
              backgroundColor: r.party.color ?? "#6B7280",
              minWidth: pct > 2 ? undefined : "2px",
            }}
            title={`${r.party.shortName ?? r.party.name}: ${r.seatsWon}議席 (${pct.toFixed(1)}%)`}
          >
            {pct > 5 ? (r.party.shortName ?? r.party.name) : ""}
          </div>
        );
      })}
    </div>
  );
}

function ElectionCard({ election }: { election: ElectionData }) {
  const totalWon = election.results.reduce((s, r) => s + r.seatsWon, 0);
  return (
    <Card>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold">{election.name}</h3>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {formatDate(election.date)}
        </span>
      </div>
      <div className="mb-2 flex items-center gap-4 text-sm text-gray-500">
        <span>定数: {election.totalSeats}議席</span>
        {election.districtSeats != null && <span>選挙区: {election.districtSeats}</span>}
        {election.proportionalSeats != null && <span>比例: {election.proportionalSeats}</span>}
        {election.turnout != null && <span>投票率: {election.turnout.toFixed(2)}%</span>}
      </div>
      <SeatBar results={election.results} totalSeats={election.totalSeats} />
      <div className="mt-3 flex flex-wrap gap-2">
        {election.results.slice(0, 8).map((r) => (
          <span
            key={r.id}
            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium text-white"
            style={{ backgroundColor: r.party.color ?? "#6B7280" }}
          >
            {r.party.shortName ?? r.party.name}: {r.seatsWon}
          </span>
        ))}
        {election.results.length > 8 && (
          <span className="text-xs text-gray-400">他 {election.results.length - 8}党</span>
        )}
      </div>
      {totalWon < election.totalSeats && (
        <p className="mt-1 text-xs text-gray-400">
          ※ 表示議席合計 {totalWon} / 定数 {election.totalSeats}
        </p>
      )}
    </Card>
  );
}

export default async function Home() {
  let elections: ElectionData[] = [];
  try {
    elections = await getElections();
  } catch {
    // Fallback to empty state
  }

  const hrElections = elections.filter((e) => e.chamber === "HOUSE_OF_REPRESENTATIVES");
  const hcElections = elections.filter((e) => e.chamber === "HOUSE_OF_COUNCILLORS");

  if (elections.length === 0) {
    return (
      <div>
        <HeroSection
          title="議席勢力図"
          subtitle="衆議院・参議院の議席構成を一目で把握し、政治勢力の変遷を可視化する"
          gradientFrom="from-orange-500"
          gradientTo="to-red-600"
        />
        <div className="mx-auto max-w-7xl px-6 py-12">
          <Card>
            <p className="text-center text-gray-500">
              選挙データがまだありません。
              <br />
              <code className="text-xs">pnpm ingest:elections</code>{" "}
              を実行して選挙データを投入してください。
            </p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HeroSection
        title="議席勢力図"
        subtitle="衆議院・参議院の議席構成を一目で把握し、政治勢力の変遷を可視化する"
        gradientFrom="from-orange-500"
        gradientTo="to-red-600"
      />

      <div className="mx-auto max-w-7xl px-6 py-12">
        {hrElections.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">衆議院</h2>
            <div className="space-y-6">
              {hrElections.map((e) => (
                <ElectionCard key={e.id} election={e} />
              ))}
            </div>
          </section>
        )}

        {hcElections.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">参議院</h2>
            <div className="space-y-6">
              {hcElections.map((e) => (
                <ElectionCard key={e.id} election={e} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
