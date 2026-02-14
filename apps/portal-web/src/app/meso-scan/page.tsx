import { B_STD, WealthVector, analyzeFlowContinuity } from "@ojpp/sbcm-engine";

// ダミーデータ: 実際にはDBから取得する各ブロックのテレメトリ
const MUNICIPAL_BLOCKS = [
  { name: "東京中央 (Block-013)", income: 5000000000, out: 1000000000, prod: 800000000, maint: 2000000000, type: "CAPACITOR" },
  { name: "愛知工業 (Block-023)", income: 1500000000, out: 1200000000, prod: 2000000000, maint: 500000000, type: "MAKER" },
  { name: "地方過疎 (Block-088)", income: 300000000, out: 400000000, prod: 50000000, maint: 600000000, type: "VACUUM" },
  { name: "大阪商業 (Block-027)", income: 2000000000, out: 1800000000, prod: 1500000000, maint: 1200000000, type: "DEBTOR" },
];

export default function MesoScanner() {
  return (
    <div className="min-h-screen bg-[#04040a] p-6 text-[#f0f0f5]">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="mono text-[0.6rem] tracking-[3px] text-emerald-500/60 hover:text-emerald-500">
          {"← BACK TO COMMAND CENTER"}
        </a>
        
        <div className="mt-8 mb-10 border-l-4 border-emerald-500 pl-6">
          <h1 className="text-4xl font-black tracking-tighter italic">MESO <span className="text-emerald-500">SCANNER</span></h1>
          <p className="mono text-[0.7rem] tracking-[4px] text-emerald-500/40 mt-1">SBCM v4.0 // REGIONAL CIRCUIT DEBUGGER</p>
        </div>

        <div className="space-y-4">
          {MUNICIPAL_BLOCKS.map((block) => {
            // エンジンで各ブロックの物理状態を計算
            const vector = new WealthVector(block.income, block.income * 0.4); 
            const diagnostic = analyzeFlowContinuity({
              inflow: block.income,
              outflow: block.out,
              production: block.prod,
              maintenance: block.maint,
              population: B_STD
            });

            const theta = (vector.phaseAngle * (180 / Math.PI)).toFixed(1);
            const D = diagnostic.distortion.toFixed(2);

            return (
              <div key={block.name} className="bg-[#0a0a0f] border border-white/5 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/5 transition-colors">
                <div className="min-w-[200px]">
                  <p className="mono text-[0.5rem] text-emerald-500/50 mb-1">LOCAL_BLOCK_ID</p>
                  <h3 className="text-xl font-bold">{block.name}</h3>
                  <span className="text-[0.6rem] px-2 py-0.5 rounded bg-white/5 text-white/40 border border-white/10 uppercase mono mt-2 inline-block">
                    {block.type}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 flex-1 gap-8">
                  <div>
                    <p className="mono text-[0.5rem] text-amber-500/60">PHASE (θ)</p>
                    <p className="kpi-value text-2xl font-bold">{theta}°</p>
                  </div>
                  <div>
                    <p className="mono text-[0.5rem] text-blue-500/60">DISTORTION (D)</p>
                    <p className="kpi-value text-2xl font-bold">{D}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="mono text-[0.5rem] text-[#6e7681]">CIRCUIT STATUS</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className={`h-1.5 flex-1 rounded-full bg-white/5 overflow-hidden`}>
                        <div 
                          className={`h-full ${diagnostic.isStrawEffect ? 'bg-red-500' : 'bg-emerald-500'}`} 
                          style={{ width: `${Math.min(100, (1/diagnostic.distortion)*100)}%` }}
                        />
                      </div>
                      <span className={`mono text-[0.6rem] ${diagnostic.isStrawEffect ? 'text-red-500' : 'text-emerald-500'}`}>
                        {diagnostic.isStrawEffect ? 'LEAKAGE' : 'STABLE'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:text-right">
                   <p className="mono text-[0.5rem] text-white/20">THERMAL_STATUS</p>
                   <p className={`text-xs font-bold ${Number(D) > 2 ? 'text-red-400' : 'text-emerald-400'}`}>
                     {Number(D) > 2 ? '⚠️ HEAT DEATH RISK' : '✅ COOL'}
                   </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
