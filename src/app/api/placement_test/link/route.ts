import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import { PlacementCafeInfo } from "@/app/admin/placement_test_link/page";
import connectMongo from "@/utils/connectMongo";
import Architect from "@/models/architect";

export async function PUT(req: NextRequest) {
  const token = req.cookies.get("jwt")?.value;

  if (!token) {
    return NextResponse.json("토큰이 없습니다", { status: 400 });
  }

  const isValidatedToken = jwt.verify(token, process.env.JWT_SECRET as string);

  if (!isValidatedToken) {
    return NextResponse.json("토큰이 유효하지 않습니다.", { status: 400 });
  }

  const body: PlacementCafeInfo[] = await req.json();

  try {
    connectMongo();

    body.forEach(async (item) => {
      await Architect.updatePlacementTestLink(item.minecraft_id, item.cafeLink);
    });

    return NextResponse.json("hi", { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 400 });
  }
}
