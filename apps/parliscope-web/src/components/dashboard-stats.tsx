"use client";

import { AnimatedCounter, FadeIn } from "@ojpp/ui";

interface StatItem {
  label: string;
  value: number;
}

export function DashboardStats({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <FadeIn key={stat.label} delay={i * 0.1}>
          <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-5 py-4">
            <p className="text-xs font-medium text-[#8b949e]">{stat.label}</p>
            <div className="mt-2">
              <AnimatedCounter
                end={stat.value}
                duration={1800}
                className="text-2xl font-bold tracking-tight text-indigo-300"
              />
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
