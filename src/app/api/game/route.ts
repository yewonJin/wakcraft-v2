import NoobProHacker from "@/models/noobprohacker";
import connectMongo from "@/utils/connectMongo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    connectMongo();

    const result = await NoobProHacker.findAll();

    return NextResponse.json(result, { status: 200 });
  } catch (e) {
    return NextResponse.json(JSON.stringify({ message: "error" }), {
      status: 400,
    });
  }
}
