import { NextRequest, NextResponse } from "next/server";

import NoobProHacker from "@/models/noobprohacker";
import connectMongo from "@/utils/connectMongo";
import { convertToPortfolio } from "@/domains/architect";
import Architect from "@/models/architect";

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

export async function POST(req: NextRequest) {
  const body: NoobProHacker = await req.json();

  connectMongo();

  try {
    await NoobProHacker.create(body);
  } catch (e) {
    return NextResponse.json("눕프핵 추가 실패", { status: 400 });
  }

  try {
    const architects = convertToPortfolio(body);

    architects.forEach(async (architect) => {
      await Architect.pushNoobProHackerToPortfolio(
        architect.minecraft_id,
        architect.portfolio,
      );
    });

    return NextResponse.json("성공", { status: 200 });
  } catch (e) {
    return NextResponse.json("건축가 포트폴리오에 추가 실패", { status: 400 });
  }
}
