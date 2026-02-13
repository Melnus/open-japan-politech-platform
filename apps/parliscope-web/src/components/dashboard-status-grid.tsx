"use client";

import { FadeIn } from "@ojpp/ui";
import { DarkBillStatusBadge } from "./bill-status-badge";

const STATUS_ORDER = [
  "ENACTED",
  "COMMITTEE",
  "PLENARY",
  "PASSED_LOWER",
  "PASSED_UPPER",
  "SUBMITTED",
  "REJECTED",
  "WITHDRAWN",
];

export function DashboardStatusGrid({ statusMap }: { statusMap: Record<string, number> }) {
  const entries = STATUS_ORDER.filter((s) => statusMap[s] != null).map((s) => ({
    status: s,
    count: statusMap[s],
  }));

  // Include any unknown statuses
  for (const [status, count] of Object.entries(statusMap)) {
    if (!STATUS_ORDER.includes(status)) {
      entries.push({ status, count });
    }
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {entries.map((entry, i) => (
        <FadeIn key={entry.status} delay={i * 0.06}>
          <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-5 py-4 transition-colors hover:border-white/[0.1] hover:bg-white/[0.05]">
            <DarkBillStatusBadge status={entry.status} />
            <span className="text-lg font-bold text-white">{entry.count}</span>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
