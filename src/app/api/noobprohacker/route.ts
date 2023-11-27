import { NextRequest, NextResponse } from "next/server";

import NoobProHacker from "@/models/noobprohacker";
import connectMongo from "@/utils/connectMongo";

export async function GET(req: NextRequest) {
  try {
    connectMongo();

    const noobprohacker = await NoobProHacker.findLastestOne();

    return NextResponse.json(noobprohacker, {
      status: 200,
    });
  } catch (e) {
    return NextResponse.json("눕프핵 fetch 실패", { status: 400 });
  }
}
