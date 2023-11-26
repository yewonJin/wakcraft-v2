import { NextRequest, NextResponse } from "next/server";

import connectMongo from "@/utils/connectMongo";
import Architect from "@/models/architect";
import ArchitectureContest from "@/models/architectureContest";
import NoobProHacker from "@/models/noobprohacker";
import PlacementTest from "@/models/placementTest";
import GuessTime from "@/models/guessTime";
import MatchYourTier from "@/models/matchYourTier";
import EventNoobProHacker from "@/models/eventNoobProHacker";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);

    const minecraftId = searchParams.get("minecraftId");

    connectMongo();

    if (minecraftId) {
      const architect = await Architect.findByMinecraftId(minecraftId);

      return NextResponse.json(architect, { status: 200 });
    }

    const architects = await Architect.findAll();

    return NextResponse.json(architects, { status: 200 });
  } catch (e) {
    return NextResponse.json(JSON.stringify({ message: "error" }), {
      status: 400,
    });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { beforeId, afterId, wakzoo_id, curTier } = await req.json();

    connectMongo();

    await Architect.updateWakzooId(beforeId, wakzoo_id);
    await Architect.updateCurTier(beforeId, curTier);

    if (beforeId !== afterId) {
      const architct = await Architect.findByMinecraftId(beforeId);

      // 눕프로해커에서 마인크래프트 아이디 업데이트하기
      architct.portfolio.noobProHacker.forEach(async (item) => {
        await NoobProHacker.updateArchitectId(
          item.episode,
          item.subject,
          item.line,
          afterId,
        );
      });

      // 배치고사에서 마인크래프트 아이디 업데이트하기
      architct.portfolio.placementTest.forEach(async (item) => {
        await PlacementTest.updateArchitectId(item.season, beforeId, afterId);
      });

      // 치즐건콘에서 마인크래프트 아이디 업데이트하기
      architct.portfolio.architectureContest.forEach(async (item) => {
        await ArchitectureContest.updateArchitectId(
          item.episode,
          item.line,
          beforeId,
          afterId,
        );
      });

      // 이벤트 눕프핵에서 마인크래프트 아이디 업데이트하기
      architct.portfolio.eventNoobProHacker.forEach(async (item) => {
        if (item.contentName === "시간 맞추기") {
          await GuessTime.updateArchitectId(item.episode, beforeId, afterId);
        } else if (item.contentName === "티어 맞추기") {
          await MatchYourTier.updateArchitectId(
            item.episode,
            beforeId,
            afterId,
          );
        }
        {
          await EventNoobProHacker.pullArchitectId(
            item.episode,
            item.subject,
            item.line,
            beforeId,
          );
          await EventNoobProHacker.pushArchitectId(
            item.episode,
            item.subject,
            item.line,
            afterId,
          );
        }
      });

      await Architect.updateMinecraftId(beforeId, afterId);
    }

    return NextResponse.json({ message: "정보 변경 성공" }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { serviceCode: 2001 },
      {
        status: 400,
      },
    );
  }
}
