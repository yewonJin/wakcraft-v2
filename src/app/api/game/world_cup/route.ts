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
