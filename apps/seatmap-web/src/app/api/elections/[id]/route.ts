import { prisma } from "@ojpp/db";
import { NextResponse } from "next/server";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const election = await prisma.election.findUnique({
    where: { id },
    include: {
      results: {
        include: { party: true },
        orderBy: { seatsWon: "desc" },
      },
    },
  });
  if (!election) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(election);
}
