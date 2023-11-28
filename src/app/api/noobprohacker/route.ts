import { NextRequest, NextResponse } from "next/server";

import NoobProHacker from "@/models/noobprohacker";
import connectMongo from "@/utils/connectMongo";
import { convertToNoobProHackerPortfolio } from "@/domains/architect";
import Architect from "@/models/architect";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const isRequestTheOnesWithoutURL = searchParams.get("withoutURL");

  if (isRequestTheOnesWithoutURL === "true") {
    try {
      connectMongo();

      const noobprohacker = await NoobProHacker.findOneThatHasNotURL();

      return NextResponse.json(noobprohacker, { status: 200 });
    } catch (e) {
      return NextResponse.json("유튜브 링크 없는 눕프핵 fetch 실패");
    }
  }

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
    const architects = convertToNoobProHackerPortfolio(body);

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

export async function PUT(req: NextRequest) {
  const body: NoobProHacker = await req.json();

  connectMongo();

  try {
    await NoobProHacker.updateNoobProHacker(body);
  } catch (e) {
    return NextResponse.json("눕프핵 수정 실패", { status: 400 });
  }

  try {
    const architects = convertToNoobProHackerPortfolio(body);

    architects.forEach(async (architect) => {
      await Architect.updateNoobProHackerYoutubeURL(
        architect.minecraft_id,
        architect.portfolio.episode,
        architect.portfolio.youtube_url,
      );
    });

    return NextResponse.json("성공", { status: 200 });
  } catch (e) {
    return NextResponse.json("유튜브 링크 수정 실패", { status: 400 });
  }
}
