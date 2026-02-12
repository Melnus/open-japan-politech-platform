import { PrismaClient } from "@prisma/client";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const prisma = new PrismaClient();

interface PrefectureData {
  code: string;
  name: string;
  nameEn: string;
  region: string;
}

async function main() {
  console.log("Seeding database...");

  // 都道府県マスタ（data/prefectures.json から読み込み）
  const prefecturesPath = resolve(__dirname, "../../../data/prefectures.json");
  const prefectures: PrefectureData[] = JSON.parse(
    readFileSync(prefecturesPath, "utf-8"),
  );

  if (prefectures.length !== 47) {
    throw new Error(
      `Expected 47 prefectures, got ${prefectures.length}`,
    );
  }

  for (const pref of prefectures) {
    await prisma.prefecture.upsert({
      where: { code: pref.code },
      update: { name: pref.name, nameEn: pref.nameEn, region: pref.region },
      create: pref,
    });
  }
  console.log(`  ${prefectures.length} prefectures seeded`);

  // 主要政党
  const parties = [
    { name: "自由民主党", shortName: "自民", color: "#E3242B", website: "https://www.jimin.jp/" },
    { name: "立憲民主党", shortName: "立憲", color: "#1E50A2", website: "https://cdp-japan.jp/" },
    { name: "日本維新の会", shortName: "維新", color: "#38B48B", website: "https://o-ishin.jp/" },
    { name: "公明党", shortName: "公明", color: "#F39800", website: "https://www.komei.or.jp/" },
    { name: "国民民主党", shortName: "国民", color: "#FCC800", website: "https://new-kokumin.jp/" },
    { name: "日本共産党", shortName: "共産", color: "#D7003A", website: "https://www.jcp.or.jp/" },
    {
      name: "れいわ新選組",
      shortName: "れいわ",
      color: "#ED6D8E",
      website: "https://reiwa-shinsengumi.com/",
    },
    { name: "社会民主党", shortName: "社民", color: "#E85298", website: "https://sdp.or.jp/" },
    { name: "参政党", shortName: "参政", color: "#FF8C00", website: "https://www.sanseito.jp/" },
    { name: "日本保守党", shortName: "保守", color: "#8B4513", website: "https://hoshuto.jp/" },
    {
      name: "チームみらい",
      shortName: "みらい",
      color: "#00B4D8",
      website: "https://team-mir.ai/",
    },
    { name: "NHK党", shortName: "N党", color: "#FF6B00", website: "https://www.nhk-party.jp/" },
    {
      name: "教育無償化を実現する会",
      shortName: "教育",
      color: "#00A651",
      website: "https://kyoiku-mushouka.jp/",
    },
    { name: "沖縄社会大衆党", shortName: "社大", color: "#FF4500", website: "https://shadai.jp/" },
    { name: "無所属", shortName: "無", color: "#808080", website: null },
  ];

  for (const party of parties) {
    await prisma.party.upsert({
      where: { name: party.name },
      update: { shortName: party.shortName, color: party.color, website: party.website },
      create: party,
    });
  }
  console.log(`  ${parties.length} parties seeded`);

  console.log("Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
