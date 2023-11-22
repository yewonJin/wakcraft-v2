import { NextRequest, NextResponse } from "next/server";

import connectMongo from "@/utils/connectMongo";
import Worldcup from "@/models/worldCup";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await connectMongo();

    const worldCup = await Worldcup.findAllByGameName("HackerWorldCup");

    return NextResponse.json(worldCup, { status: 200 });
  } catch {
    return NextResponse.json("fetch error", { status: 200 });
  }
}

// TODO: 외부에서 접근 불가능하게 해야함
export async function PATCH(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  const winner = searchParams.get("winner");

  if (!winner)
    return NextResponse.json("winner가 query string에 없습니다", {
      status: 400,
    });

  try {
    await connectMongo();

    await Worldcup.increaseNumberOfParticipation();

    await Worldcup.increaseNumberOfWin(winner);

    return NextResponse.json("성공", { status: 200 });
  } catch {
    return NextResponse.json("fetch error", { status: 200 });
  }
}
