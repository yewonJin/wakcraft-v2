import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import connectMongo from "@/utils/connectMongo";
import ArchitectureNoobProHacker from "@/models/architectureNoobProHacker";
import { convertToNoobProHackerPortfolio } from "@/domains/architect";
import Architect from "@/models/architect";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const isRequestTheOnesWithoutURL = searchParams.get("withoutURL");

  if (isRequestTheOnesWithoutURL === "true") {
    try {
      connectMongo();

      const architectureNoobProHacker =
        await ArchitectureNoobProHacker.findOneThatHasNotURL();

      return NextResponse.json(architectureNoobProHacker, { status: 200 });
    } catch (e) {
      return NextResponse.json("유튜브 링크 없는 눕프핵 fetch 실패");
    }
  }

  try {
    connectMongo();

    const architectureNoobProHacker =
      await ArchitectureNoobProHacker.findLastestOne();

    return NextResponse.json(architectureNoobProHacker, {
      status: 200,
    });
  } catch (e) {
    return NextResponse.json("눕프핵 fetch 실패", { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  const token = req.cookies.get("jwt")?.value;

  if (!token) {
    return NextResponse.json("토큰이 없습니다", { status: 400 });
  }

  const isValidatedToken = jwt.verify(token, process.env.JWT_SECRET as string);

  if (!isValidatedToken) {
    return NextResponse.json("토큰이 유효하지 않습니다.", { status: 400 });
  }

  const body: ArchitectureNoobProHacker = await req.json();

  connectMongo();

  try {
    await ArchitectureNoobProHacker.create(body);
  } catch (e) {
    return NextResponse.json("눕프핵 추가 실패", { status: 400 });
  }

  try {
    const architects = convertToNoobProHackerPortfolio(body);

    architects.forEach(async (architect) => {
      await Architect.pushArchitectureNoobProHackerToPortfolio(
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
  const token = req.cookies.get("jwt")?.value;

  if (!token) {
    return NextResponse.json("토큰이 없습니다", { status: 400 });
  }

  const isValidatedToken = jwt.verify(token, process.env.JWT_SECRET as string);

  if (!isValidatedToken) {
    return NextResponse.json("토큰이 유효하지 않습니다.", { status: 400 });
  }

  const body: ArchitectureNoobProHacker = await req.json();

  connectMongo();

  try {
    await ArchitectureNoobProHacker.updateArchitectureNoobProHacker(body);
  } catch (e) {
    return NextResponse.json("건축 눕프핵 수정 실패", { status: 400 });
  }

  try {
    const architects = convertToNoobProHackerPortfolio(body);

    architects.forEach(async (architect) => {
      await Architect.updateArchitectureNoobProHackerYoutubeURL(
        architect.minecraft_id,
        architect.portfolio.episode,
        architect.portfolio.youtube_url,
      );
    });

    return NextResponse.json("성공", { status: 200 });
  } catch (e) {
    return NextResponse.json("건축가 유튜브 링크 수정 실패", { status: 400 });
  }
}
