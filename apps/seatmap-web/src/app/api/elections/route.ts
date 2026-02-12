import { prisma } from "@ojpp/db";
import { NextResponse } from "next/server";

export async function GET() {
  const elections = await prisma.election.findMany({
    include: {
      results: {
        include: { party: true },
        orderBy: { seatsWon: "desc" },
      },
    },
    orderBy: { date: "desc" },
  });
  return NextResponse.json(elections);
}
