import { NextRequest, NextResponse } from "next/server";

import Architect from "@/models/architect";
import connectMongo from "@/utils/connectMongo";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);

    const params = searchParams.get("difficulty");

    if (!params) {
      return NextResponse.json(JSON.stringify({ message: "error" }), {
        status: 400,
      });
    }

    connectMongo();

    if (params === "LOW") {
      const res = [
        ...(await Architect.findByTier("hacker")),
        ...(await Architect.findByTier("gukbap")),
      ];

      return NextResponse.json(convertToGameObject(res), { status: 200 });
    }

    if (params === "MEDIUM") {
      const res = [
        ...(await Architect.findByTier("gukbap")),
        ...(await Architect.findByTier("pro")),
        ...(await Architect.findByTier("gyeruik")),
      ];

      return NextResponse.json(convertToGameObject(res), { status: 200 });
    }

    return NextResponse.json("hi", { status: 200 });
  } catch (e) {
    return NextResponse.json(JSON.stringify({ message: "error" }), {
      status: 400,
    });
  }
}

const convertToGameObject = (arr: Architect[]) => {
  return arr
    .map((architect) =>
      [
        ...architect.portfolio.noobProHacker.map((item) => ({
          image_url: item.image_url,
          minecraft_id: architect.minecraft_id,
        })),
        ,
        ...architect.portfolio.eventNoobProHacker
          .filter((item) => item.episode !== 5)
          .filter((item) => item.episode !== 3)
          .map((item) => ({
            image_url: item.image_url,
            minecraft_id: architect.minecraft_id,
          })),
        ,
        ...architect.portfolio.architectureContest.map((item) => ({
          image_url: item.image_url,
          minecraft_id: architect.minecraft_id,
        })),
      ].filter((item) => item),
    )
    .flat();
};
