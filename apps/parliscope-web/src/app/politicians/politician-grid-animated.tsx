"use client";

import { StaggerGrid, StaggerItem } from "@ojpp/ui";
import type { ReactNode } from "react";

export function PoliticianGridAnimated({ children }: { children: ReactNode[] }) {
  return (
    <StaggerGrid className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children.map((child, i) => (
        <StaggerItem key={i}>{child}</StaggerItem>
      ))}
    </StaggerGrid>
  );
}
