import Architect from "@/models/architect";
import connectMongo from "@/utils/connectMongo";
import { NextRequest, NextResponse } from "next/server";

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

    // 모든 컨텐츠에서 아이디 업데이트하기
    if (beforeId !== afterId) {
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
