import { NextRequest, NextResponse } from "next/server";

import PlacementTest from "@/models/placementTest";
import connectMongo from "@/utils/connectMongo";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const isRequestCurSeason = searchParams.get("curSeason");

  if (isRequestCurSeason === "true") {
    try {
      connectMongo();

      const placementTest = await PlacementTest.findLastestOne();

      return NextResponse.json(placementTest[0].season, { status: 200 });
    } catch (e) {
      return NextResponse.json("현재 시즌 fetch 실패");
    }
  }
}
